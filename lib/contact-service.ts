import nodemailer from "nodemailer";

import type { ContactSubmission } from "@/lib/types";

function canSendMail() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendContactEmail({ name, email, message }: ContactSubmission) {
  if (!canSendMail()) {
    return { sent: false, reason: "mail_not_configured" as const };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const recipient = process.env.CONTACT_TO ?? "melfankari@gmail.com";

  await transporter.sendMail({
    to: recipient,
    from: process.env.SMTP_USER,
    subject: `Portfolio contact from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  return { sent: true as const };
}
