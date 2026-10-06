import { promotionDetail } from "@/lib/offer-copy";
import { offerFacts } from "@/lib/promo.server";

export type OfferGroup = "Luxury" | "Ocean" | "Land and Resorts";

export type SupplierOffer = {
  title: string;
  detail: string;
  href: string;
  tag: string;
  group: OfferGroup;
  line?: string;
};

export type OfferFeed = {
  offers: SupplierOffer[];
  updatedAt: string;
  live: boolean;
};

const FEEDS = [
  ["https://tap13.myagentgenie.com/seafunandsun/offers/?type=cruise", "cruise"],
  ["https://tap13.myagentgenie.com/seafunandsun/offers/?type=tour", "tour"],
  ["https://tap13.myagentgenie.com/seafunandsun/interest/hot-deals", "deal"],
] as const;

const luxuryName = /explora|windstar|regent|silversea|seabourn|crystal|amawaterway|uniworld|riviera|viking|cunard/i;
const exploraName = /explora|grand-journey|historic-gateways|middle-eastern-charms|red-sea-glory|arabian-delights|arabian-marvels|a grand journey|a journey of|a journey through|an extended journey/i;
const resortName = /resort|hotel|palladium|waldorf|conrad|sandals|hyatt/i;

let cache: { at: number; feed: OfferFeed } | null = null;
const freshFor = 24 * 60 * 60 * 1000;

function decode(value: string) {
  let text = value.replace(/<[^>]+>/g, " ");
  const named: Record<string, string> = {
    amp: "\u0026",
    quot: '"',
    nbsp: " ",
    lt: "<",
    gt: ">",
  };
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

function classify(title: string, href: string, source: (typeof FEEDS)[number][1]): OfferGroup {
  const text = `${title} ${href}`;
  if (luxuryName.test(text) || exploraName.test(text)) return "Luxury";
  if (source === "tour" || resortName.test(title)) return "Land and Resorts";
  if (source === "deal" && /tour|rail|vacation|globus|cie /i.test(title)) return "Land and Resorts";
  return "Ocean";
}

function tagFor(group: OfferGroup, title: string) {
  if (group === "Land and Resorts") return resortName.test(title) ? "Resorts" : "Land";
  return group;
}

export function parseOfferHtml(html: string, source: (typeof FEEDS)[number][1]): SupplierOffer[] {
  const offers: SupplierOffer[] = [];
  for (const block of html.match(/<article[\s\S]*?<\/article>/g) ?? []) {
    const href = block.match(/href="(https:\/\/tap13\.myagentgenie\.com\/seafunandsun\/offer\/[^"]+)"/)?.[1];
    const rawTitle = block.match(/class="entry-title">\s*<a[^>]*>([\s\S]*?)<\/a>/)?.[1];
    if (!href || !rawTitle) continue;
    const title = decode(rawTitle);
    const summary = decode(block.match(/class="entry-summary">([\s\S]*?)<\/div>/)?.[1] ?? "");
    const group = classify(title, href, source);
    offers.push({
      title,
      href,
      group,
      tag: tagFor(group, title),
      detail: promotionDetail(title, summary.length > 280 ? summary.slice(0, 280).replace(/\s+\S*$/, "") : summary),
    });
  }
  return offers;
}

export function isExploraOffer(offer: SupplierOffer) {
  return exploraName.test(`${offer.title} ${offer.href}`);
}

async function readFeed(url: string, source: (typeof FEEDS)[number][1]) {
  const response = await fetch(url, {
    headers: { "user-agent": "SeaFunAndSun/1.0 (offer list)" },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Outside Agents ${response.status}`);
  return parseOfferHtml(await response.text(), source);
}

const browser = {
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
  accept: "text/html",
};

let royalJob: Promise<string> | null = null;

function royalFromLine() {
  if (!royalJob) {
    royalJob = (async () => {
      try {
        const response = await fetch("https://www.royalcaribbean.com/terms-and-conditions/promotions", {
          headers: browser,
          signal: AbortSignal.timeout(12000),
        });
        if (!response.ok) return "";
        const text = plainPage(await response.text());
        const second = text.match(/provides 60% off the cruise fare of the second guest/i);
        const kids = text.match(/\$0 cruise fare for additional guest 12 years old and younger/i);
        const until = text.match(/made\s+([A-Z][a-z]+ \d+\s+[–-]\s+[A-Z][a-z]+ \d+, \d{4})/);
        if (!second && !kids) return "";
        const window = until ? `For bookings from ${until[1].replace(/\s+[–-]\s+/, " through ")}, ` : "";
        const parts = [
          second ? "the second guest’s cruise fare is 60% off" : "",
          kids ? "a child 12 or under sails free as a third or fourth guest on select sailings of 3 nights or longer, though taxes and port fees are still charged" : "",
        ].filter(Boolean);
        return `Royal Caribbean. ${window}${parts.join(", and ")}.`;
      } catch {
        return "";
      }
    })();
  }
  return royalJob;
}

let mscJob: Promise<string> | null = null;

function mscFromLine() {
  if (!mscJob) {
    mscJob = (async () => {
      try {
        const response = await fetch("https://www.msccruisesusa.com/cruise-deals/promo-terms-and-conditions", {
          headers: browser,
          signal: AbortSignal.timeout(12000),
        });
        if (!response.ok) return "";
        const text = plainPage(await response.text());
        const headline = text.match(/CRUISE FROM \$[0-9,]+[^.]{0,80}/i)?.[0];
        const expires = text.match(/Expiration Date:\s*([A-Z][a-z]+ \d+, \d{4})/);
        if (!headline) return "";
        const when = expires ? ` The posted end date is ${expires[1]}.` : "";
        return `MSC Cruises. ${headline.replace(/\s+/g, " ").trim()}.${when}`;
      } catch {
        return "";
      }
    })();
  }
  return mscJob;
}

async function lineOffer(name: string, detail: string): Promise<SupplierOffer | null> {
  if (!detail) return null;
  return {
    title: name,
    detail,
    href: "/quote",
    tag: "Ocean",
    group: "Ocean",
    line: name,
  };
}

function plainPage(html: string) {
  return decode(html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " "));
}

let windstarJob: Promise<string> | null = null;

function windstarFromLine() {
  if (!windstarJob) {
    windstarJob = (async () => {
      try {
        const response = await fetch("https://www.windstarcruises.com/specials/yes/", {
          headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            accept: "text/html",
          },
          signal: AbortSignal.timeout(12000),
        });
        if (!response.ok) return "";
        const text = plainPage(await response.text());
        const offer = text.match(/Book by [^.]{10,240}\./i)?.[0];
        const loyalty = text.match(/As a returning guest[^.]+\./i)?.[0];
        return offer ? `Windstar. ${offer}${loyalty ? ` ${loyalty}` : ""}` : "";
      } catch {
        return "";
      }
    })();
  }
  return windstarJob;
}

async function enrichOffer(offer: SupplierOffer): Promise<SupplierOffer> {
  const named = /princess|celebrity|norwegian|virgin|regent|windstar|riviera|amawater|cunard|viking|carnival|royal caribbean|msc|disney|holland america|star clipper|palladium|waldorf|conrad|cie tours|globus|united vacation/i;
  const deal = /%|\$|free |upgrade|credit|saving/i;
  if (named.test(offer.title) && deal.test(offer.title)) return offer;
  if (/windstar/i.test(offer.title)) {
    const fromLine = await windstarFromLine();
    if (fromLine) return { ...offer, line: "Windstar", detail: fromLine };
  }
  try {
    const response = await fetch(offer.href, {
      headers: { "user-agent": "SeaFunAndSun/1.0 (offer page)" },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return offer;
    const facts = offerFacts(await response.text());
    const line = facts.line;
    let detail = offer.detail;
    if (line && facts.starting) {
      detail =
        /explora/i.test(line) && facts.journey
          ? `Explora Journeys is a luxury cruise line. The staterooms are suites, and the fare usually includes drinks, Wi-Fi, and gratuities. ${facts.journey} Fares start at ${facts.starting}.`
          : `${line}. ${offer.title} starts at ${facts.starting}.`;
    } else if (facts.starting) detail = `${offer.title} starts at ${facts.starting}.`;
    else if (line && !named.test(offer.detail)) detail = `${line}. ${offer.detail}`;
    return line ? { ...offer, line, detail } : { ...offer, detail };
  } catch {
    return offer;
  }
}

export async function loadSupplierOffers(): Promise<OfferFeed> {
  const now = Date.now();
  if (cache && now - cache.at < freshFor) return cache.feed;

  try {
    const batches = await Promise.all(FEEDS.map(([url, source]) => readFeed(url, source)));
    const seen = new Set<string>();
    const offers: SupplierOffer[] = [];
    for (const batch of batches) {
      for (const offer of batch) {
        const key = offer.href.replace(/\/$/, "").toLowerCase();
        const titleKey = offer.title.toLowerCase().replace(/[^a-z0-9]+/g, "");
        if (seen.has(key) || seen.has(titleKey)) continue;
        seen.add(key);
        seen.add(titleKey);
        offers.push(offer);
      }
    }
    if (offers.length === 0) throw new Error("No offers");
    windstarJob = null;
    royalJob = null;
    mscJob = null;
    const enriched = await Promise.all(offers.map((offer) => enrichOffer(offer)));
    const have = enriched.map((offer) => `${offer.title} ${offer.line ?? ""}`).join(" ");
    const added: SupplierOffer[] = [];
    if (!/royal caribbean/i.test(have)) {
      const royal = await lineOffer("Royal Caribbean", await royalFromLine());
      if (royal) added.push(royal);
    }
    if (!/\bmsc\b/i.test(have)) {
      const msc = await lineOffer("MSC Cruises", await mscFromLine());
      if (msc) added.push(msc);
    }
    const feed: OfferFeed = { offers: [...added, ...enriched], updatedAt: new Date().toISOString(), live: true };
    cache = { at: now, feed };
    return feed;
  } catch {
    if (cache) return cache.feed;
    return { offers: [], updatedAt: new Date().toISOString(), live: false };
  }
}
