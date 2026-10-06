// nodemailer 7 does not ship its own types in this install.
// @ts-expect-error types are not bundled
import nodemailer from "nodemailer";
import { bookingEmail, phone } from "@/data/links";
import { env } from "@/lib/env.server";

export type InquiryMail = {
  reference: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelWindow: string;
  partySize: string;
  cabin: string;
  plans: string;
  marketingOptIn: boolean;
};

function headerSafe(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

function deskText(lead: InquiryMail) {
  return [
    `New quote request ${lead.reference}`,
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "—"}`,
    `Destination: ${lead.destination}`,
    `When: ${lead.travelWindow || "—"}`,
    `Party: ${lead.partySize || "—"}`,
    `Stay: ${lead.cabin || "—"}`,
    `Marketing opt-in: ${lead.marketingOptIn ? "yes" : "no"}`,
    "",
    lead.plans,
  ].join("\n");
}

function guestText(lead: InquiryMail) {
  const lines = [
    `We have your request. The reference is ${lead.reference}.`,
    "",
    "It is saved for Sea Fun & Sun in Farmington, Connecticut. This is not a booking and not a fare. We reply the same day in most cases.",
    "",
    `Call or text ${phone} if you need us sooner.`,
    "",
    `Destination: ${lead.destination}`,
  ];
  if (lead.travelWindow) lines.push(`When: ${lead.travelWindow}`);
  return lines.join("\n");
}

type Outbound = { from: string; to: string; replyTo?: string; subject: string; text: string };

function messages(lead: InquiryMail, from: string, deskTo: string): Outbound[] {
  const subject = headerSafe(`Quote request ${lead.reference} — ${lead.destination}`).slice(0, 180);
  const desk: Outbound = {
    from,
    to: deskTo,
    replyTo: headerSafe(lead.email),
    subject,
    text: deskText(lead),
  };
  if (lead.email.toLowerCase() === deskTo.toLowerCase()) return [desk];
  return [
    desk,
    {
      from,
      to: headerSafe(lead.email),
      subject: headerSafe(`We have your request ${lead.reference}`),
      text: guestText(lead),
    },
  ];
}

async function sendResend(lead: InquiryMail, key: string): Promise<void> {
  const from = env("MAIL_FROM") ?? `Sea Fun & Sun <${bookingEmail}>`;
  const deskTo = env("INQUIRY_TO") ?? bookingEmail;
  for (const message of messages(lead, from, deskTo)) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: message.from.includes("<") ? message.from : `Sea Fun & Sun <${message.from}>`,
        to: [message.to],
        reply_to: message.replyTo,
        subject: message.subject,
        text: message.text,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      throw new Error(`Resend ${response.status}`);
    }
  }
}

function mailFailure(err: unknown) {
  const message = err instanceof Error ? err.message : "send failed";
  const lower = message.toLowerCase();
  if (lower.includes("535") || lower.includes("authentication")) return "failed: mailbox password rejected";
  if (lower.includes("timed out") || lower.includes("timeout")) return "failed: timed out";
  if (lower.includes("econnrefused") || lower.includes("enotfound") || lower.includes("econnreset")) {
    return "failed: could not reach mail server";
  }
  const short = message.replace(/\s+/g, " ").trim().slice(0, 120);
  return `failed: ${short}`;
}

function mailboxPassword(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length > 1) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'") && trimmed.length > 1)
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

async function deliver(outbound: Outbound[], user: string, pass: string) {
  const host = env("SMTP_HOST") ?? "smtp.hostinger.com";
  const requested = Number(env("SMTP_PORT") ?? 465);
  const attempts = requested === 587 ? [587] : [requested, 587];
  let last: unknown;
  for (const port of attempts) {
    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });
    try {
      for (const message of outbound) {
        await transport.sendMail({
          from: `Sea Fun & Sun <${user}>`,
          to: message.to,
          replyTo: message.replyTo,
          subject: message.subject,
          text: message.text,
        });
      }
      return;
    } catch (err) {
      last = err;
      const message = err instanceof Error ? err.message.toLowerCase() : "";
      const blocked = message.includes("econnrefused") || message.includes("timed out") || message.includes("timeout") || message.includes("enotfound");
      if (!blocked || port === attempts[attempts.length - 1]) throw err;
    } finally {
      transport.close();
    }
  }
  throw last instanceof Error ? last : new Error("SMTP failed");
}

/** Desk copy plus a short note to the traveler. Never throws. */
export async function notifyInquiry(lead: InquiryMail): Promise<string> {
  const resend = env("RESEND_API_KEY");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  try {
    if (resend) {
      await sendResend(lead, resend);
      return "sent";
    }
    if (user && pass) {
      const deskTo = env("INQUIRY_TO") ?? bookingEmail;
      await deliver(messages(lead, user, deskTo), user, mailboxPassword(pass));
      return "sent";
    }
    return "not-configured";
  } catch (err) {
    console.error("[inquiry-mail]", err instanceof Error ? err.message : "send failed");
    return mailFailure(err);
  }
}
