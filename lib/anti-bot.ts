type RateLimitRecord = {
  count: number;
  resetTime: number;
};

// In-memory IP rate limiter (5 requests per 10 minutes per IP)
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const MIN_SUBMISSION_TIME_MS = 2000; // 2 seconds minimum
const MAX_SUBMISSION_TIME_MS = 24 * 60 * 60 * 1000; // 24 hours maximum

/**
 * Extracts client IP from common proxy headers.
 */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) {
    return cfIp.trim();
  }

  return "127.0.0.1";
}

/**
 * Cleans up expired rate limit entries periodically.
 */
function cleanupRateLimits() {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}

/**
 * Checks if the given IP address is rate limited.
 */
export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  cleanupRateLimits();

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count };
}

export type AntiBotResult =
  | { success: true }
  | { success: false; isBot: true; reason: string }
  | { success: false; isBot: false; rateLimited: true; reason: string };

/**
 * Validates a contact submission against honeypots, time elapsed, and rate limits.
 */
export function validateAntiBot(formData: FormData | URLSearchParams, clientIp: string): AntiBotResult {
  // Layer 1: Honeypot trap check
  const gotcha = formData.get("_gotcha");
  const companyUrl = formData.get("company_url");
  const website = formData.get("website");

  if (
    (typeof gotcha === "string" && gotcha.trim() !== "") ||
    (typeof companyUrl === "string" && companyUrl.trim() !== "") ||
    (typeof website === "string" && website.trim() !== "")
  ) {
    return { success: false, isBot: true, reason: "Honeypot triggered" };
  }

  // Layer 2: Time-elapsed validation
  const timestampRaw = formData.get("_timestamp");
  if (!timestampRaw || typeof timestampRaw !== "string") {
    // Missing timestamp suggests an automated direct script
    return { success: false, isBot: true, reason: "Missing timestamp" };
  }

  const timestamp = Number.parseInt(timestampRaw, 10);
  if (Number.isNaN(timestamp)) {
    return { success: false, isBot: true, reason: "Invalid timestamp" };
  }

  const elapsed = Date.now() - timestamp;
  if (elapsed < MIN_SUBMISSION_TIME_MS) {
    return {
      success: false,
      isBot: true,
      reason: `Form submitted too fast (${elapsed}ms < ${MIN_SUBMISSION_TIME_MS}ms)`,
    };
  }

  if (elapsed > MAX_SUBMISSION_TIME_MS) {
    return {
      success: false,
      isBot: true,
      reason: "Form timestamp expired",
    };
  }

  // Layer 3: Rate limiting per IP
  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    return {
      success: false,
      isBot: false,
      rateLimited: true,
      reason: "Too many messages sent. Please wait a few minutes before trying again.",
    };
  }

  return { success: true };
}
