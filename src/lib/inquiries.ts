import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";

const DESK_KEY = "seafun-farmington";

export type InquiryInput = {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelWindow: string;
  partySize: string;
  cabin: string;
  plans: string;
  marketingOptIn: boolean;
  companyWebsite: string;
};

export type InquiryRow = {
  id: number;
  reference: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  travel_window: string;
  party_size: string;
  cabin: string;
  plans: string;
  marketing_opt_in: boolean;
  email_status: string;
  created_at: string;
};

function clean(value: string, max: number) {
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((input: InquiryInput) => input)
  .handler(async ({ data }) => {
    if ((data.companyWebsite ?? "").trim()) {
      return { ok: true as const, reference: "SFS-RECEIVED", emailed: false };
    }

    const name = clean(data.name ?? "", 120);
    const email = clean(data.email ?? "", 180).toLowerCase();
    const phone = clean(data.phone ?? "", 40);
    const destination = clean(data.destination ?? "", 80);
    const travelWindow = clean(data.travelWindow ?? "", 160);
    const partySize = clean(data.partySize ?? "", 40);
    const cabin = clean(data.cabin ?? "", 80);
    const plans = (data.plans ?? "").replace(/\u0000/g, "").trim().slice(0, 4000);

    if (name.length < 2) return { ok: false as const, error: "Please add your name." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ok: false as const, error: "Please add a real email." };
    }
    if (destination.length < 2) return { ok: false as const, error: "Choose a destination." };
    if (plans.length < 8) {
      return {
        ok: false as const,
        error: "Add a few words on the trip — dates, who’s coming, or the kind of stay you want.",
      };
    }

    const reference = `SFS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const sql = await getSql();
    await sql`
      insert into inquiries (
        reference, name, email, phone, destination, travel_window, party_size, cabin, plans, marketing_opt_in
      ) values (
        ${reference}, ${name}, ${email}, ${phone}, ${destination}, ${travelWindow},
        ${partySize}, ${cabin}, ${plans}, ${Boolean(data.marketingOptIn)}
      )
    `;

    let emailStatus = "not-configured";
    try {
      const { notifyInquiry } = await import("./inquiry-mail.server");
      emailStatus = await notifyInquiry({
        reference,
        name,
        email,
        phone,
        destination,
        travelWindow,
        partySize,
        cabin,
        plans,
        marketingOptIn: Boolean(data.marketingOptIn),
      });
    } catch {
      emailStatus = "failed";
    }
    try {
      await sql`update inquiries set email_status = ${emailStatus} where reference = ${reference}`;
    } catch (err) {
      console.error("[inquiry] email status not stored", err instanceof Error ? err.message : "update failed");
    }

    return { ok: true as const, reference, emailed: emailStatus === "sent" };
  });

export const listInquiries = createServerFn({ method: "POST" })
  .validator((input: { key: string }) => input)
  .handler(async ({ data }) => {
    if ((data.key ?? "").trim() !== DESK_KEY) {
      return { ok: false as const, error: "That access code doesn’t match." };
    }
    const sql = await getSql();
    const rows = await sql<InquiryRow>`
      select
        id, reference, name, email, phone, destination, travel_window, party_size, cabin, plans,
        marketing_opt_in, email_status, created_at::text as created_at
      from inquiries
      order by id desc
      limit 200
    `;
    return { ok: true as const, rows };
  });
