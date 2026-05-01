import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/contact-service";
import { parseContactForm } from "@/lib/request";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const formData = await request.formData();

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
