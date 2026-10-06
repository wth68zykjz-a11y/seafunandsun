import { legacyTarget } from "../legacy-redirects.mjs";

interface RedirectEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

export default function legacyRedirects(event: RedirectEvent, next: () => unknown) {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();

  const host = (event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? "")
    .split(",")[0]
    .trim()
    .toLowerCase();
  if (host === "www.seafunandsun.com") {
    return new Response(null, {
      status: 301,
      headers: {
        location: `https://seafunandsun.com${event.url.pathname}${event.url.search}`,
        "cache-control": "public, max-age=86400",
      },
    });
  }

  const target = legacyTarget(event.url.pathname);
  if (!target) return next();
  return new Response(null, {
    status: 301,
    headers: {
      location: `${target}${event.url.search}`,
      "cache-control": "public, max-age=86400",
    },
  });
}
