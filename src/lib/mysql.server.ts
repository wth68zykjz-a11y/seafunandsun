import mysql from "mysql2/promise";
import { env } from "@/lib/env.server";

export type MysqlInquiry = {
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
  marketing_opt_in: number | boolean;
  email_status: string;
  created_at: string | Date;
};

let poolPromise: Promise<mysql.Pool> | null = null;

/** True when Hostinger (or any MySQL server) has been configured. */
export function mysqlEnabled() {
  const url = env("DATABASE_URL");
  if (url && /^mysql:\/\//i.test(url)) return true;
  return Boolean(env("DB_HOST") && env("DB_USER") && env("DB_NAME"));
}

function createPool() {
  const url = env("DATABASE_URL");
  if (url && /^mysql:\/\//i.test(url)) {
    const parsed = new URL(url);
    return mysql.createPool({
      host: parsed.hostname,
      port: parsed.port ? Number(parsed.port) : 3306,
      user: decodeURIComponent(parsed.username),
      password: decodeURIComponent(parsed.password),
      database: decodeURIComponent(parsed.pathname.replace(/^\//, "")),
      waitForConnections: true,
      connectionLimit: 5,
      dateStrings: true,
    });
  }
  return mysql.createPool({
    host: env("DB_HOST"),
    port: Number(env("DB_PORT") ?? 3306),
    user: env("DB_USER"),
    password: env("DB_PASSWORD") ?? "",
    database: env("DB_NAME"),
    waitForConnections: true,
    connectionLimit: 5,
    dateStrings: true,
  });
}

async function getPool() {
  poolPromise ??= (async () => {
    const pool = createPool();
    await pool.query(`
      create table if not exists inquiries (
        id int unsigned not null auto_increment,
        reference varchar(24) not null,
        name varchar(120) not null,
        email varchar(180) not null,
        phone varchar(40) not null default '',
        destination varchar(80) not null default '',
        travel_window varchar(160) not null default '',
        party_size varchar(40) not null default '',
        cabin varchar(80) not null default '',
        plans text not null,
        marketing_opt_in tinyint(1) not null default 0,
        email_status varchar(40) not null default '',
        created_at timestamp not null default current_timestamp,
        primary key (id),
        unique key inquiries_reference (reference)
      ) engine=InnoDB default charset=utf8mb4
    `);
    try {
      await pool.query(
        "alter table inquiries add column email_status varchar(40) not null default ''",
      );
    } catch (err) {
      const code = (err as { code?: string }).code;
      if (code !== "ER_DUP_FIELDNAME") throw err;
    }
    return pool;
  })().catch((err) => {
    poolPromise = null;
    throw err;
  });
  return poolPromise;
}

export async function mysqlQuery<T>(text: string, params: unknown[] = []) {
  const pool = await getPool();
  const [rows] = await pool.query(text, params);
  return rows as T[];
}
