import { connect } from "node:tls";
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

function dotStuff(body: string) {
  return body
    .replace(/\r?\n/g, "\r\n")
    .split("\r\n")
    .map((line) => (line.startsWith(".") ? `.${line}` : line))
    .join("\r\n");
}

function smtpSend(outbound: Outbound[], user: string, pass: string): Promise<void> {
  const host = env("SMTP_HOST") ?? "smtp.hostinger.com";
  const port = Number(env("SMTP_PORT") ?? 465);
  return new Promise((resolve, reject) => {
    const socket = connect({ host, port, servername: host });
    const lines: string[] = [];
    const waiters: { resolve: (line: string) => void; reject: (err: Error) => void }[] = [];
    let buffer = "";
    let settled = false;

    function fail(err: Error) {
      if (settled) return;
      settled = true;
      socket.destroy();
      while (waiters.length) waiters.shift()?.reject(err);
      reject(err);
    }

    function pushLine(line: string) {
      if (/^\d{3}-/.test(line)) return;
      const waiter = waiters.shift();
      if (waiter) waiter.resolve(line);
      else lines.push(line);
    }

    function read() {
      const existing = lines.shift();
      if (existing !== undefined) return Promise.resolve(existing);
      return new Promise<string>((resolveLine, rejectLine) => {
        waiters.push({ resolve: resolveLine, reject: rejectLine });
      });
    }

    async function expect(code: string) {
      const line = await read();
      if (!line.startsWith(code)) throw new Error(`SMTP ${line}`);
    }

    socket.setTimeout(8000);
    socket.on("timeout", () => fail(new Error("SMTP timed out")));
    socket.on("error", fail);
    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      let index = buffer.indexOf("\n");
      while (index !== -1) {
        pushLine(buffer.slice(0, index).replace(/\r$/, ""));
        buffer = buffer.slice(index + 1);
        index = buffer.indexOf("\n");
      }
    });

    void (async () => {
      try {
        await expect("220");
        socket.write("EHLO seafunandsun.com\r\n");
        await expect("250");
        socket.write("AUTH LOGIN\r\n");
        await expect("334");
        socket.write(`${Buffer.from(user, "utf8").toString("base64")}\r\n`);
        await expect("334");
        socket.write(`${Buffer.from(pass, "utf8").toString("base64")}\r\n`);
        await expect("235");
        for (const message of outbound) {
          socket.write(`MAIL FROM:<${user}>\r\n`);
          await expect("250");
          socket.write(`RCPT TO:<${message.to}>\r\n`);
          await expect("250");
          socket.write("DATA\r\n");
          await expect("354");
          const headers = [
            `From: Sea Fun & Sun <${user}>`,
            `To: ${message.to}`,
            ...(message.replyTo ? [`Reply-To: ${message.replyTo}`] : []),
            `Subject: ${message.subject}`,
            "MIME-Version: 1.0",
            "Content-Type: text/plain; charset=UTF-8",
          ];
          socket.write(`${headers.join("\r\n")}\r\n\r\n${dotStuff(message.text)}\r\n.\r\n`);
          await expect("250");
        }
        socket.write("QUIT\r\n");
        settled = true;
        socket.end();
        resolve();
      } catch (err) {
        fail(err instanceof Error ? err : new Error("SMTP failed"));
      }
    })();
  });
}

/** Desk copy plus a short note to the traveler. Never throws. */
export async function notifyInquiry(lead: InquiryMail): Promise<"sent" | "not-configured" | "failed"> {
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
      await smtpSend(messages(lead, user, deskTo), user, pass);
      return "sent";
    }
    return "not-configured";
  } catch (err) {
    console.error("[inquiry-mail]", err instanceof Error ? err.message : "send failed");
    return "failed";
  }
}
