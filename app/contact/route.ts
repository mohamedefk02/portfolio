import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/contact-service";
import { parseContactForm } from "@/lib/request";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const formData = await request.formData();

  try {
    const submission = parseContactForm(formData);
    await sendContactEmail(submission);
  } catch {
    // Preserve Spring behavior: redirect with sent flag even if email sending fails.
  }

  const redirectUrl = new URL("/?sent=true#contact", request.url);
  return NextResponse.redirect(redirectUrl);
}
