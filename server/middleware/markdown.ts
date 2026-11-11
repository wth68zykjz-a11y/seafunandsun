/**
 * Content negotiation + Link header advertising.
 *
 * - When Accept prefers text/markdown, return a clean Markdown homepage.
 * - Always emit an RFC 8288 Link header on the homepage pointing at /llms.txt
 *   (and a Markdown alternate) so agents can discover the lighter representation.
 */

const HOME_MARKDOWN = `# Sea Fun & Sun

> Independent travel agency in Farmington, Connecticut. Books ocean and river cruises, expedition ships, all-inclusive resorts, ski vacations, and scenic rail journeys for travelers across the United States. No separate agent fee. You pay the supplier.

## Contact

- Phone / text: (959) 666-2062
- Email: Booking@Seafunandsun.com
- Based in: Farmington, Connecticut
- Hours: Weekdays, about 9 AM–6 PM Eastern
- [Request a quote](https://seafunandsun.com/quote)

## What we book

- **Cruises** — Ocean and river cruises (Caribbean, Alaska, Mediterranean, Europe, Asia, and more)
- **Expedition** — Small-ship trips to Antarctica, the Arctic, and the Galápagos
- **Resorts** — All-inclusive beach resorts (Sandals, Beaches, Hyatt, Secrets, Club Med, and others)
- **Ski** — Club Med ski and luxury hotels in North America, the Alps, and Japan
- **Rail and land** — Scenic trains (Amtrak, VIA Rail, European sleepers) with coordinated hotel stays

## How it works

1. Tell us the destination and dates (call, text, or use the quote form).
2. We show you the options and confirm the price before anything is booked.
3. You pay the cruise line, resort, or operator directly. We do not hold your card.

## Key pages

- [Destinations](https://seafunandsun.com/destinations)
- [Resorts](https://seafunandsun.com/resorts)
- [Ski](https://seafunandsun.com/ski)
- [Rail](https://seafunandsun.com/rail)
- [Promotions](https://seafunandsun.com/sailings)
- [Quote form](https://seafunandsun.com/quote)

Full facts for assistants: https://seafunandsun.com/llms.txt
`;

const LINK_HEADER =
  '</llms.txt>; rel="describedby"; type="text/plain", </>; rel="alternate"; type="text/markdown"';

interface MarkdownEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

export default async function markdownNegotiation(event: MarkdownEvent, next: () => Promise<Response> | Response) {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();

  const path = event.url.pathname;
  const isHome = path === "/" || path === "";
  if (!isHome) return next();

  const accept = event.req.headers.get("accept") ?? "";
  const wantsMarkdown =
    accept.includes("text/markdown") ||
    accept.includes("text/x-markdown") ||
    (accept.includes("text/plain") && !accept.includes("text/html"));

  if (wantsMarkdown) {
    return new Response(HOME_MARKDOWN, {
      status: 200,
      headers: {
        "content-type": "text/markdown; charset=utf-8",
        "cache-control": "public, max-age=3600",
        vary: "Accept",
        link: LINK_HEADER,
      },
    });
  }

  // Normal HTML response — still advertise the Markdown / llms.txt resources.
  const response = await next();
  if (response instanceof Response) {
    const headers = new Headers(response.headers);
    headers.append("link", LINK_HEADER);
    headers.set("vary", [headers.get("vary"), "Accept"].filter(Boolean).join(", "));
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
  return response;
}
