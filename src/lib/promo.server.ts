export type PromoDay = { label: string; text: string; times: string };

export type PromoPrice = { dates: string; price: string };

export type PromoPage = {
  slug: string;
  title: string;
  images: string[];
  bookingDates: string;
  travelDates: string;
  days: PromoDay[];
  prices: PromoPrice[];
  line: string;
  starting: string;
  journey: string;
  disclaimer: string;
};

const host = "https://tap13.myagentgenie.com";
const cache = new Map<string, { at: number; page: PromoPage | null }>();
const freshFor = 5 * 60 * 1000;

function decode(value: string) {
  let text = value.replace(/<[^>]+>/g, " ");
  const named: Record<string, string> = { amp: "&", quot: '"', nbsp: " ", lt: "<", gt: ">", mdash: "—", ndash: "–" };
  for (let pass = 0; pass < 3; pass += 1) {
    const next = text
      .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
      .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCharCode(parseInt(code, 16)))
      .replace(/&([a-z]+);/g, (entity, name: string) => named[name] ?? entity);
    if (next === text) break;
    text = next;
  }
  return text.replace(/\s+/g, " ").trim();
}

export function offerFacts(html: string): { line: string; starting: string; journey: string } {
  const heads = [...html.matchAll(/fl-heading-text">([^<]+)/g)]
    .map((match) => decode(match[1]).replace(/®/g, "").trim())
    .filter((head) => head && !/want more information/i.test(head));
  const line = heads.length >= 2 ? heads[0] : "";
  const amounts = [...html.matchAll(/Starting At\s*(?:&#36;|\$)\s*([0-9,]+)/g)]
    .map((match) => Number(match[1].replace(/,/g, "")))
    .filter((amount) => amount > 0);
  const starting = amounts.length ? `$${Math.min(...amounts).toLocaleString("en-US")}` : "";
  const journey = decode(html).match(/\b(?:A|An)\s+\d+-night journey[^.]{8,180}\./i)?.[0] ?? "";
  return { line, starting, journey };
}

function field(html: string, className: string) {
  const match = html.match(new RegExp(`class="[^"]*\\b${className}\\b[^"]*"[\\s\\S]*?<div class="info">([\\s\\S]*?)</div>`));
  return match ? decode(match[1]) : "";
}

function firstSentence(value: string) {
  const text = decode(value);
  if (!text) return "";
  const sentence = text.split(/(?<=\.)\s/)[0] ?? text;
  return sentence.length > 280 ? `${sentence.slice(0, 277).replace(/\s+\S*$/, "")}…` : sentence;
}

function imagesFrom(html: string) {
  const cut = html.indexOf("Want more information");
  const body = cut > 0 ? html.slice(0, cut) : html;
  const found = new Set<string>();
  for (const src of body.match(/src="(https:\/\/datafeed\.myagentgenie\.com\/[^"]+)"/g) ?? []) {
    const url = src.slice(5, -1).split("?")[0];
    if (!url) continue;
    if (/-(\d+x\d+)\./.test(url)) continue;
    found.add(url);
  }
  return [...found].slice(0, 4);
}

export function parsePromoHtml(slug: string, html: string): PromoPage {
  const rawTitle = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "A Sea Fun & Sun promotion";
  const title = decode(rawTitle)
    .replace(/\s+[–—-]\s+Sea Fun and Sun$/i, "")
    .replace(/\s+[–—-]\s+Sea Fun & Sun$/i, "");
  const days: PromoDay[] = [];
  const seenDays = new Set<string>();
  const row = /<td class="span2">([\s\S]*?)<\/td>\s*<td class="info-description[^"]*">([\s\S]*?)<\/td>/g;
  for (const match of html.matchAll(row)) {
    const label = decode(match[1]);
    if (!label || seenDays.has(label)) continue;
    const rawTimes = decode(match[2].match(/Arrive Time:\s*([\s\S]*?)<\/div>/)?.[1] ?? "");
    const split = rawTimes.match(/^(.*?)\s*[–—-]\s*Depart Time:\s*(.*)$/i);
    const times = split ? `Arrives ${split[1]}. Departs ${split[2]}.` : rawTimes;
    const text = firstSentence(match[2].replace(/<div class="itinerary_detail"[\s\S]*$/i, ""));
    if (!text && !times) continue;
    seenDays.add(label);
    days.push({ label, text, times });
  }
  const prices: PromoPrice[] = [];
  const priceRow = /<td class="dates">[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<td class="price_range">[\s\S]*?<p>([\s\S]*?)<\/p>/g;
  for (const match of html.matchAll(priceRow)) {
    const dates = decode(match[1]);
    const price = decode(match[2]);
    if (dates && price) prices.push({ dates, price });
  }
  const disclaimer = decode(html.match(/class="offer-disclaimer">([\s\S]*?)<\/div>/)?.[1] ?? "");
  const facts = offerFacts(html);
  return {
    slug,
    title,
    images: imagesFrom(html),
    bookingDates: field(html, "booking_dates"),
    travelDates: field(html, "dates_from"),
    days: days.slice(0, 24),
    prices: prices.slice(0, 8),
    line: facts.line,
    starting: facts.starting,
    journey: facts.journey,
    disclaimer,
  };
}

export async function loadPromo(slug: string): Promise<PromoPage | null> {
  if (!/^[a-z0-9-]{3,160}$/.test(slug)) return null;
  const cached = cache.get(slug);
  if (cached && Date.now() - cached.at < freshFor) return cached.page;
  try {
    const url = `${host}/seafunandsun/offer/${slug}/`;
    const response = await fetch(url, {
      headers: { "user-agent": "SeaFunAndSun/1.0 (promotion page)" },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok || !response.url.startsWith(`${host}/seafunandsun/offer/`)) {
      cache.set(slug, { at: Date.now(), page: null });
      return null;
    }
    const page = parsePromoHtml(slug, await response.text());
    if (!page.title) {
      cache.set(slug, { at: Date.now(), page: null });
      return null;
    }
    cache.set(slug, { at: Date.now(), page });
    return page;
  } catch {
    return cached?.page ?? null;
  }
}
