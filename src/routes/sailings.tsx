import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { licenseLine } from "@/data/links";
import { getLiveOffers, isExploraOffer, type SupplierOffer } from "@/lib/offers";
import { JsonLd, pageHead } from "@/lib/seo";

const offerGroups = ["Luxury", "Ocean"] as const;
const resortOffer = /resort|all-inclusive|all inclusive|palladium|waldorf|conrad|sandals|hyatt|club med|secrets|excellence|palace|ziva|zilara|beaches|dreams/i;

const weeklyDeals = [
  {
    line: "Celebrity Cruises",
    match: /celebrity/i,
    port: "Miami",
    ports: "americas",
    destination: "caribbean",
    region: "Caribbean cruises",
    text: "Celebrity’s Caribbean cruises usually start in Miami or Fort Lauderdale. The short Bahamas sailings leave from Miami.",
  },
  {
    line: "Royal Caribbean",
    match: /royal caribbean/i,
    port: "Cape Liberty",
    ports: "americas",
    destination: "caribbean",
    region: "Caribbean cruises",
    text: "Royal Caribbean uses Cape Liberty, in Bayonne, New Jersey, for Northeast sailings. A Caribbean cruise that departs from there has more sea days than a cruise to the same islands that departs from Miami.",
  },
  {
    line: "Norwegian Cruise Line",
    match: /norwegian/i,
    port: "Port Canaveral",
    ports: "americas",
    destination: "caribbean",
    region: "Caribbean cruises",
    text: "Norwegian uses Port Canaveral for the Bahamas and the Eastern Caribbean. The airport is Orlando, about an hour from the ship.",
  },
  {
    line: "Carnival",
    match: /carnival/i,
    port: "Galveston",
    ports: "americas",
    destination: "caribbean",
    region: "Caribbean cruises",
    text: "Carnival’s Galveston sailings go to the Western Caribbean and the Mexican coast. The flight is into Houston.",
  },
  {
    line: "Princess Cruises",
    match: /princess/i,
    port: "Seattle",
    ports: "americas",
    destination: "alaskan",
    region: "Alaska cruises",
    text: "Princess sails an Alaska cruise from Seattle, including a round-trip cruise through the Inside Passage and a one-way cruise toward Seward or Whittier.",
  },
  {
    line: "Holland America",
    match: /holland america/i,
    port: "Vancouver",
    ports: "americas",
    destination: "alaskan",
    region: "Alaska cruises",
    text: "Holland America uses Vancouver for Alaska, often one way to Seward or Whittier. A passport is required for that start.",
  },
  {
    line: "Disney Cruise Line",
    match: /disney/i,
    port: "Port Canaveral",
    ports: "americas",
    destination: "caribbean",
    region: "Caribbean cruises",
    text: "Disney’s Bahamas and Caribbean sailings leave from Port Canaveral. Fly into Orlando.",
  },
  {
    line: "MSC Cruises",
    match: /\bmsc\b/i,
    port: "Barcelona",
    ports: "europe",
    destination: "mediterranean",
    region: "Mediterranean cruises",
    text: "MSC uses Barcelona for Western Mediterranean cruises. Some Caribbean cruises start at Port Canaveral instead.",
  },
  {
    line: "Viking",
    match: /viking/i,
    port: "Barcelona",
    ports: "europe",
    destination: "mediterranean",
    region: "Mediterranean cruises",
    text: "Viking’s ocean ships start and end in Barcelona for the Western Mediterranean. The river ships are a separate trip and start in cities such as Budapest and Amsterdam.",
  },
  {
    line: "Cunard",
    match: /cunard/i,
    port: "Southampton",
    ports: "europe",
    destination: "northern-europe",
    region: "Northern Europe cruises",
    text: "Cunard’s Southampton sailings include the Atlantic crossing, Northern Europe, and some Mediterranean voyages. Some crossings also start in New York.",
  },
  {
    line: "Explora Journeys",
    match: /explora/i,
    port: "Athens",
    ports: "europe",
    destination: "mediterranean",
    region: "Mediterranean cruises",
    text: "Explora Journeys uses Athens, at Piraeus, for Eastern Mediterranean sailings. Some published trips finish there after an Egypt or Red Sea start.",
  },
  {
    line: "Windstar",
    match: /windstar/i,
    port: "Lisbon",
    ports: "europe",
    destination: "european",
    region: "European cruises",
    text: "Windstar’s small ships use Lisbon for Atlantic Europe and some Western Mediterranean sailings. An agent often requests the fare, because it is not a public price.",
  },
] as const;

function dealsFromFeed(offers: SupplierOffer[]) {
  const picked: { offer: SupplierOffer; guide: (typeof weeklyDeals)[number] | null }[] = [];
  const seen = new Set<string>();
  for (const offer of offers) {
    if (offer.group === "Land and Resorts") continue;
    const guide = weeklyDeals.find((deal) => deal.match.test(`${offer.title} ${offer.href}`)) ?? null;
    const key = guide?.line ?? offer.href;
    if (seen.has(key)) continue;
    seen.add(key);
    picked.push({ offer, guide });
    if (picked.length === 7) break;
  }
  return picked;
}

function labelExplora(offer: SupplierOffer): SupplierOffer {
  if (!isExploraOffer(offer) || /explora/i.test(offer.title)) return offer;
  return { ...offer, title: `Explora Journeys — ${offer.title}`, tag: "Explora Journeys", group: "Luxury" };
}

function brandText(offer: SupplierOffer) {
  return `${offer.title} ${offer.href}`;
}

const fallbackBrands = [/celebrity/i, /holland america/i, /princess/i];

function featuredBrands(offers: SupplierOffer[]) {
  const used = new Set<string>();
  const featured: SupplierOffer[] = [];
  const take = (pattern: RegExp) => offers.find((offer) => !used.has(offer.href) && pattern.test(brandText(offer)));
  for (const pattern of [/viking/i, /cunard/i]) {
    const hit = take(pattern);
    if (!hit) continue;
    featured.push(hit);
    used.add(hit.href);
  }
  for (const pattern of fallbackBrands) {
    if (featured.length >= 2) break;
    const hit = take(pattern);
    if (!hit) continue;
    featured.push({ ...hit, group: "Luxury" });
    used.add(hit.href);
  }
  return { featured, used };
}

function offerSlug(href: string) {
  return href.match(/\/offer\/([a-z0-9-]+)/i)?.[1]?.toLowerCase() ?? href.match(/^local:([a-z0-9-]+)$/)?.[1];
}

function offerHeading(offer: SupplierOffer, guide?: { line: string; port: string } | null) {
  const line = offer.line?.replace(/®/g, "").trim();
  const first = line?.split(" ")[0]?.toLowerCase();
  if (line && first && !offer.title.toLowerCase().includes(first)) return `${line}: ${offer.title}`;
  if (guide) return `${guide.line} from ${guide.port}`;
  return offer.title;
}

function OfferCard({ offer }: { offer: SupplierOffer }) {
  const slug = offerSlug(offer.href);
  const body = (
    <>
      <p className="text-sm font-medium text-tide">{offer.line || offer.tag}</p>
      <p className="mt-2 font-display text-2xl leading-snug text-ink">{offerHeading(offer)}</p>
      <p className="mt-3 flex-1 text-base leading-relaxed text-ink">{offer.detail}</p>
    </>
  );
  const className = "flex h-full flex-col rounded-xl border border-line border-t-4 border-t-gold bg-foam p-5 shadow-card hover:border-tide";
  if (!slug) {
    return (
      <Link to="/quote" search={{ place: offer.line ?? offer.title, note: offer.detail }} className={className}>
        {body}
      </Link>
    );
  }
  return (
    <Link to="/promotions/$slug" params={{ slug }} className={className}>
      {body}
    </Link>
  );
}

export const Route = createFileRoute("/sailings")({
  loader: () => getLiveOffers(),
  pendingMs: 0,
  pendingComponent: PromotionsPending,
  head: () =>
    pageHead({
      title: "Current Travel Promotions & Cruise Deals | Sea Fun & Sun",
      description:
        "View our latest exclusive cruise offers, resort promotions, and seasonal travel specials. Contact Sea Fun & Sun to secure your special rate today.",
      path: "/sailings",
      image: "/media/page-sailings.jpg",
    }),
  component: SailingsPage,
});

function DealsOfTheWeek({ offers }: { offers: SupplierOffer[] }) {
  const cruise = offers.filter((offer) => offer.group !== "Land and Resorts");
  const deals = dealsFromFeed(cruise);
  const shown = new Set(deals.map((deal) => deal.offer.href));
  const rest = cruise.filter((offer) => !shown.has(offer.href));
  const { featured, used } = featuredBrands(rest);
  const resorts = offers.filter((offer) => offer.group === "Land and Resorts" && resortOffer.test(`${offer.title} ${offer.href}`) && !shown.has(offer.href));
  return (
    <div>
      <h2 className="font-display text-3xl text-ink">Promotions</h2>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Daily cruise promotions",
          itemListElement: deals.map((deal, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: deal.guide ? `${deal.guide.line} from ${deal.guide.port}` : deal.offer.title,
            description: deal.offer.detail || deal.offer.title,
          })),
        }}
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal) => {
          const slug = offerSlug(deal.offer.href);
          const heading = offerHeading(deal.offer, deal.guide);
          return (
            <article key={deal.offer.href} className="flex h-full flex-col rounded-xl border border-line border-t-4 border-t-gold bg-foam p-5 shadow-card">
              <p className="text-sm font-medium text-tide">{deal.offer.line || (deal.guide ? deal.guide.port : deal.offer.tag)}</p>
              <p className="mt-2 font-display text-2xl leading-snug text-ink">{heading}</p>
              <p className="mt-3 flex-1 text-base leading-relaxed text-ink">{deal.offer.detail}</p>
              {deal.guide ? (
                <p className="mt-3 text-sm">
                  <Link to="/destinations/$slug" params={{ slug: deal.guide.destination }} className="font-medium text-tide">
                    {deal.guide.region}
                  </Link>
                  {" · "}
                  <Link to="/ports/$region" params={{ region: deal.guide.ports }} className="font-medium text-tide">
                    {deal.guide.port} and nearby ports
                  </Link>
                </p>
              ) : null}
              {slug ? (
                <Link
                  to="/promotions/$slug"
                  params={{ slug }}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-coral px-4 text-base font-medium text-foam hover:bg-coral-deep"
                >
                  See the current offer
                </Link>
              ) : (
                <Link
                  to="/quote"
                  search={{ place: deal.offer.line ?? deal.guide?.line ?? "Cruise", note: deal.offer.detail }}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-coral px-4 text-base font-medium text-foam hover:bg-coral-deep"
                >
                  Request this offer
                </Link>
              )}
            </article>
          );
        })}
      </div>
      <img
        src="/media/page-sailings-sm.webp"
        alt="The bow of a white ship in calm water at golden hour"
        width={640}
        height={427}
        loading="lazy"
        decoding="async"
        className="mt-8 aspect-photo max-h-56 w-full rounded-xl object-cover md:hidden"
      />
      <h3 className="mt-12 font-display text-2xl text-ink">More current offers</h3>
      {offerGroups.map((group) => {
        const items =
          group === "Luxury"
            ? [...featured, ...rest.filter((offer) => offer.group === "Luxury" && !used.has(offer.href))]
            : rest.filter((offer) => offer.group === group && !used.has(offer.href));
        if (items.length === 0) return null;
        const explora = items.filter((offer) => isExploraOffer(offer));
        const others = items.filter((offer) => !isExploraOffer(offer));
        const visible = group === "Luxury" ? [...explora.slice(0, 2), ...others] : items;
        const moreExplora = group === "Luxury" ? explora.slice(2) : [];
        return (
          <div key={group} className="mt-8">
            <h4 className="border-b border-line pb-2 font-display text-xl text-ink">{group}</h4>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((offer) => (
                <OfferCard key={offer.title + offer.href} offer={offer} />
              ))}
            </div>
            {moreExplora.length > 0 ? (
              <details className="mt-4 rounded-xl border border-line bg-foam p-5">
                <summary className="cursor-pointer font-medium text-ink">More Explora Journeys</summary>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {moreExplora.map((offer) => (
                    <OfferCard key={offer.href} offer={offer} />
                  ))}
                </div>
              </details>
            ) : null}
          </div>
        );
      })}
      {resorts.length > 0 ? (
        <div className="mt-8">
          <h4 className="border-b border-line pb-2 font-display text-xl text-ink">Resorts and all-inclusives</h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resorts.map((offer) => (
              <OfferCard key={offer.href} offer={offer} />
            ))}
          </div>
          <p className="mt-4 text-sm">
            <Link to="/resorts" className="font-medium text-tide">
              All-inclusive resorts
            </Link>
          </p>
        </div>
      ) : null}
    </div>
  );
}

function PromotionsIntro() {
  return (
    <>
      <PageIntro
        kicker="Promotions"
        title="Exclusive Offers & Seasonal Promotions"
        lede="Extraordinary travel, paired with exceptional value."
      />
      <div className="mx-auto max-w-6xl space-y-4 px-4">
        <p className="max-w-3xl text-base leading-relaxed text-ink">
          Explore our current, daily-updated promotions from our premier cruise, resort, and expedition partners below. When you see an itinerary or offer that inspires you, simply request a custom quote. Your dedicated agent will verify the current fares, apply your promotional benefits, and handle all the fine print before your booking is ever finalized.
        </p>
        <p className="max-w-3xl rounded-xl border border-line bg-foam p-5 text-base leading-relaxed text-ink">
          Because these offers update daily directly from our partners, you may occasionally see internal supplier terminology, specific cabin codes, or complex fare rules. Do not worry about decoding them. That is exactly what we are here for. We translate the fine print so you can focus on the destination.
        </p>
        <div>
          <Link to="/quote" className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-coral px-5 text-base font-medium text-foam hover:bg-coral-deep sm:w-auto">
            Request a Custom Quote
          </Link>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink">Found a promotion you love? Send us the details and we will secure the exact pricing and dates for you.</p>
        </div>
      </div>
    </>
  );
}
function PromotionsPending() {
  return (
    <Shell>
      <PromotionsIntro />
      <p className="mx-auto max-w-6xl px-4 pt-8 text-base text-ink">The offers are loading. The page is here, and the list follows in a moment.</p>
    </Shell>
  );
}

function SailingsPage() {
  const feed = Route.useLoaderData();
  return (
    <Shell>
      <PromotionsIntro />
      <div className="mx-auto mt-8 hidden max-w-6xl px-4 md:block">
        <img src="/media/page-sailings-sm.webp" alt="The bow of a white ship in calm water at golden hour" width={640} height={427} loading="lazy" decoding="async" className="aspect-photo max-h-72 w-full rounded-xl object-cover" />
      </div>
      <section id="promotions" className="mx-auto mt-10 max-w-6xl scroll-mt-24 px-4 pb-20">
        <DealsOfTheWeek offers={feed.offers.map(labelExplora)} />
        <div className="mt-12 rounded-xl border border-line bg-foam p-5">
          <h2 className="font-display text-3xl text-ink">Ask us about an offer</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink">Found a promotion you love? Send us the details and we will secure the exact pricing and dates for you.</p>
          <Link to="/quote" className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-coral px-5 text-base font-medium text-foam hover:bg-coral-deep sm:w-auto">
            Ask Us About an Offer
          </Link>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-mute">{licenseLine}</p>
      </section>
    </Shell>
  );
}
