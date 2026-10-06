export type OfferGroup = "Luxury" | "Ocean" | "Land and Resorts";

export type SupplierOffer = {
  title: string;
  detail: string;
  href: string;
  tag: string;
  group: OfferGroup;
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
      detail: summary.length > 220 ? summary.slice(0, 220).replace(/\s+\S*$/, "") : summary || "A current promotion. The fare and the rules belong to the supplier. We confirm both before you book.",
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
    const feed: OfferFeed = { offers, updatedAt: new Date().toISOString(), live: true };
    cache = { at: now, feed };
    return feed;
  } catch {
    if (cache) return cache.feed;
    return { offers: [], updatedAt: new Date().toISOString(), live: false };
  }
}
