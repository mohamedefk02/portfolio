import { NextResponse } from "next/server";

import { getClientIp, validateAntiBot } from "@/lib/anti-bot";
import { sendContactEmail } from "@/lib/contact-service";
import { parseContactForm } from "@/lib/request";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const formData = await request.formData();
  const clientIp = getClientIp(request);

  // Anti-bot validation (Honeypot, Time guard, Rate limiting)
  const antiBot = validateAntiBot(formData, clientIp);

  if (!antiBot.success) {
    if (antiBot.isBot) {
      // Silently pretend success to prevent bot retry loops
      const redirectUrl = new URL("/?sent=true#contact", request.url);
      return NextResponse.redirect(redirectUrl);
    }

    if (antiBot.rateLimited) {
      const redirectUrl = new URL("/?error=rate_limited#contact", request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  try {
    const submission = parseContactForm(formData);
    await sendContactEmail(submission);
  } catch {
    // Preserve expected behavior: redirect with sent flag even if email sending fails.
  }

  const redirectUrl = new URL("/?sent=true#contact", request.url);
  return NextResponse.redirect(redirectUrl);
}
