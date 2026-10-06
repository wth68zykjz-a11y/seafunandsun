interface CacheEvent {
  url: URL;
  req: { method: string };
}

export default async function pageCache(event: CacheEvent, next: () => unknown | Promise<unknown>) {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();

  const path = event.url.pathname;
  if (path.startsWith("/api") || path.startsWith("/_server") || path.startsWith("/__grok")) return next();

  const result = await next();
  if (!(result instanceof Response) || result.status !== 200) return result;
  if (!String(result.headers.get("content-type") ?? "").includes("text/html")) return result;
  if (result.headers.has("set-cookie")) return result;

  const headers = new Headers(result.headers);
  const existing = headers.get("cache-control") ?? "";
  if (/no-store|private/i.test(existing)) return result;
  headers.set("cache-control", "public, max-age=0, s-maxage=600, stale-while-revalidate=86400");
  return new Response(result.body, {
    status: result.status,
    statusText: result.statusText,
    headers,
  });
}
