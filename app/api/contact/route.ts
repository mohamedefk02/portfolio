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
      // Silently accept bot submissions so bots don't adapt or retry
      return new NextResponse(null, { status: 200 });
    }

    if (antiBot.rateLimited) {
      return new NextResponse(antiBot.reason, { status: 429 });
    }
  }

  try {
    const submission = parseContactForm(formData);
    await sendContactEmail(submission);
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    return new NextResponse(
      error instanceof Error && error.message.startsWith("Missing required field:")
        ? error.message
        : "Failed to send message",
      {
        status:
          error instanceof Error && error.message.startsWith("Missing required field:") ? 400 : 500,
      },
    );
  }
}
