import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { mysqlEnabled, mysqlQuery, type MysqlInquiry } from "@/lib/mysql.server";

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

function saveError(err: unknown) {
  const code = (err as { code?: string }).code ?? "";
  const message = err instanceof Error ? err.message : "";
  console.error("[inquiry] save failed", code || message);
  if (!mysqlEnabled()) {
    return "The database settings are not on the server. Add DB_HOST, DB_NAME, DB_USER, and DB_PASSWORD, then redeploy.";
  }
  if (code === "ER_ACCESS_DENIED_ERROR" || /access denied/i.test(message)) {
    return "The database rejected the username or password. Use the full username and the full database name, including the prefix Hostinger adds.";
  }
  if (code === "ER_BAD_DB_ERROR") {
    return "That database name was not found. Copy the full name from the database list, including the prefix.";
  }
  if (
    code === "ECONNREFUSED" ||
    code === "ETIMEDOUT" ||
    code === "ENOTFOUND" ||
    /ECONNREFUSED|ETIMEDOUT|ENOTFOUND/.test(message)
  ) {
    return "The website cannot reach the database. Open Remote MySQL in hPanel, allow this database, and set DB_HOST to the hostname shown there. It is not 127.0.0.1.";
  }
  return "The database did not accept the request. Check the host, database name, username, and password, then redeploy.";
}

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

    const reference = `SFS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const optedIn = Boolean(data.marketingOptIn);
    try {
      if (mysqlEnabled()) {
        await mysqlQuery(
          `insert into inquiries (
            reference, name, email, phone, destination, travel_window, party_size, cabin, plans, marketing_opt_in
          ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [reference, name, email, phone, destination, travelWindow, partySize, cabin, plans, optedIn ? 1 : 0],
        );
      } else {
        const sql = await getSql();
        await sql`
          insert into inquiries (
            reference, name, email, phone, destination, travel_window, party_size, cabin, plans, marketing_opt_in
          ) values (
            ${reference}, ${name}, ${email}, ${phone}, ${destination}, ${travelWindow},
            ${partySize}, ${cabin}, ${plans}, ${optedIn}
          )
        `;
      }
    } catch (err) {
      return { ok: false as const, error: saveError(err) };
    }

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
        marketingOptIn: optedIn,
      });
    } catch {
      emailStatus = "failed";
    }
    try {
      if (mysqlEnabled()) {
        await mysqlQuery("update inquiries set email_status = ? where reference = ?", [emailStatus, reference]);
      } else {
        const sql = await getSql();
        await sql`update inquiries set email_status = ${emailStatus} where reference = ${reference}`;
      }
    } catch (err) {
      console.error("[inquiry] email status not stored", err instanceof Error ? err.message : "update failed");
    }

    return { ok: true as const, reference, emailed: emailStatus === "sent", emailStatus };
  });

export const listInquiries = createServerFn({ method: "POST" })
  .validator((input: { key: string }) => input)
  .handler(async ({ data }) => {
    if ((data.key ?? "").trim() !== DESK_KEY) {
      return { ok: false as const, error: "That access code doesn’t match." };
    }
    if (mysqlEnabled()) {
      const stored = await mysqlQuery<MysqlInquiry>(
        `select
          id, reference, name, email, phone, destination, travel_window, party_size, cabin, plans,
          marketing_opt_in, email_status, created_at
        from inquiries
        order by id desc
        limit 200`,
      );
      const rows: InquiryRow[] = stored.map((row) => ({
        ...row,
        id: Number(row.id),
        marketing_opt_in: Boolean(row.marketing_opt_in),
        email_status: row.email_status ?? "",
        created_at: String(row.created_at),
      }));
      return { ok: true as const, rows };
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
