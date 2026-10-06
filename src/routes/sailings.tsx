import { createFileRoute, Link } from "@tanstack/react-router";
import { CruiseSearch } from "@/components/cruise-search";
import { PageIntro, Shell } from "@/components/site-chrome";
import { agentQuoteNote, licenseLine } from "@/data/links";
import { getLiveOffers, isExploraOffer, type SupplierOffer } from "@/lib/offers";
import { JsonLd, pageHead } from "@/lib/seo";

type SailingsSearch = { destinations?: string; destinationtype?: string };

const offerGroups = ["Luxury", "Ocean"] as const;

const weeklyDeals = [
  {
    line: "Celebrity Cruises",
    match: /celebrity/i,
    port: "Miami",
    ports: "americas",
    destination: "caribbean",
    region: "Caribbean cruises",
    text: "Celebrity’s Caribbean weeks usually turn in Miami or Fort Lauderdale. The short Bahamas sailings leave from Miami.",
  },
  {
    line: "Royal Caribbean",
    match: /royal caribbean/i,
    port: "Cape Liberty",
    ports: "americas",
    destination: "caribbean",
    region: "Caribbean cruises",
    text: "Cape Liberty, in Bayonne, New Jersey, is Royal Caribbean’s Northeast homeport. A Caribbean week from there has more sea days than the same islands from Miami.",
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
    text: "Princess sails Alaska from Seattle, including round trips through the Inside Passage and one-way sailings toward Seward or Whittier.",
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
    text: "MSC uses Barcelona for Western Mediterranean weeks. Some Caribbean sailings turn at Port Canaveral instead.",
  },
  {
    line: "Viking",
    match: /viking/i,
    port: "Barcelona",
    ports: "europe",
    destination: "mediterranean",
    region: "Mediterranean cruises",
    text: "Viking’s ocean ships turn in Barcelona for the Western Mediterranean. The river ships are a separate trip and embark in cities such as Budapest and Amsterdam.",
  },
  {
    line: "Cunard",
    match: /cunard/i,
    port: "Southampton",
    ports: "europe",
    destination: "northern-europe",
    region: "Northern Europe cruises",
    text: "Cunard’s Southampton sailings include the Atlantic crossing, Northern Europe, and some Mediterranean voyages. Some crossings also embark in New York.",
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
    text: "Windstar’s small ships use Lisbon for Atlantic Europe and some Western Mediterranean sailings. The fare is often a quote rather than a public price.",
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
    if (picked.length === 6) break;
  }
  return picked;
}

function labelExplora(offer: SupplierOffer): SupplierOffer {
  if (!isExploraOffer(offer) || /explora/i.test(offer.title)) return offer;
  return { ...offer, title: `Explora Journeys — ${offer.title}`, tag: "Explora Journeys", group: "Luxury" };
}

function cruiseOffers(offers: SupplierOffer[]) {
  return offers.filter((offer) => offer.group !== "Land and Resorts").map(labelExplora);
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

function OfferCard({ offer }: { offer: SupplierOffer }) {
  const slug = offer.href.match(/\/offer\/([a-z0-9-]+)/i)?.[1]?.toLowerCase();
  const body = (
    <>
      <p className="text-xs font-medium text-tide">{offer.tag}</p>
      <h3 className="mt-2 font-display text-2xl">{offer.title}</h3>
      <p className="mt-2 text-sm text-mute">{offer.detail}</p>
    </>
  );
  const className = "rounded-xl border border-line bg-foam p-5 hover:border-tide";
  if (!slug) {
    return (
      <a href={offer.href} className={className}>
        {body}
      </a>
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
  validateSearch: (search: Record<string, unknown>): SailingsSearch => {
    const text = (value: unknown) => {
      if (typeof value === "string" && value) return value;
      if (typeof value === "number" && Number.isFinite(value)) return String(value);
      return undefined;
    };
    return {
      destinations: text(search.destinations),
      destinationtype: text(search.destinationtype),
    };
  },
  head: () =>
    pageHead({
      title: "Cruise deals of the week",
      description:
        "The cruise promotions currently in the booking system. Each card names the line, and the port that line usually uses, when we know it.",
      path: "/sailings",
      image: "/media/page-sailings.jpg",
    }),
  component: SailingsPage,
});

function DealsOfTheWeek({ offers, checked }: { offers: SupplierOffer[]; checked: string }) {
  const deals = dealsFromFeed(offers);
  return (
    <div>
      <h2 className="font-display text-3xl">Deals of the week</h2>
      <p className="mt-2 max-w-3xl text-base text-ink">
        These six promotions come from the booking system. The site checks that list once a day, so a promotion added today shows up after the next check. The city on the card is a port that line usually uses. The same promotion may include other ports.
      </p>
      <p className="mt-2 text-sm text-mute">Last check: {checked} Eastern.</p>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Cruise deals of the week",
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
          const slug = deal.offer.href.match(/\/offer\/([a-z0-9-]+)/i)?.[1]?.toLowerCase();
          const heading = deal.guide ? `${deal.guide.line} from ${deal.guide.port}` : deal.offer.title;
          return (
            <article key={deal.offer.href} className="flex flex-col rounded-xl border border-line bg-foam p-5">
              <p className="text-xs font-medium text-tide">{deal.guide ? deal.guide.port : deal.offer.tag}</p>
              <h3 className="mt-2 font-display text-2xl">{heading}</h3>
              <p className="mt-2 text-sm leading-6 text-ink">{deal.offer.title}. {deal.offer.detail}</p>
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
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
                >
                  See the current offer
                </Link>
              ) : (
                <Link
                  to="/quote"
                  search={{ place: deal.guide?.line ?? "Cruise", note: deal.offer.title }}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
                >
                  Request this quote
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

function SailingsPage() {
  const { destinations: destinationId, destinationtype } = Route.useSearch();
  const feed = Route.useLoaderData();
  const updated = new Date(feed.updatedAt).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York",
  });
  return (
    <Shell>
      <PageIntro
        kicker="Sailings"
        title="Search current sailings."
        lede="Choose a destination, a month, and a length. Search opens the booking system, where you pick the sailing and the cabin. Payment goes to the cruise line."
      />
      <div className="mx-auto max-w-6xl px-4">
        <CruiseSearch destinationId={destinationId} destinationType={destinationtype} />
        <p className="mt-4 max-w-3xl text-sm text-mute">
          {agentQuoteNote}{" "}
          <Link to="/quote" className="font-medium text-tide">
            Request a quote
          </Link>
          {" · "}
          <Link to="/lines" className="font-medium text-tide">
            Compare cruise lines
          </Link>
          {" · "}
          <Link to="/ports" className="font-medium text-tide">
            Departure ports
          </Link>
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-6xl gap-3 px-4 sm:grid-cols-3">
        <img src="/media/page-sailings.jpg" alt="The bow of a white ship in calm water at golden hour" loading="lazy" decoding="async" className="aspect-photo w-full rounded-xl object-cover sm:col-span-2" />
        <img src="/media/ex-world.jpg" alt="A large cruise ship crossing open ocean" loading="lazy" decoding="async" className="aspect-photo hidden w-full rounded-xl object-cover sm:block" />
      </div>
      <section id="promotions" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20">
        <DealsOfTheWeek offers={cruiseOffers(feed.offers)} checked={updated} />
        <h2 className="mt-14 font-display text-3xl">Offers available right now</h2>
        <p className="mt-2 max-w-2xl text-sm text-mute">
          {feed.live
            ? `Updated from our booking system on ${updated} Eastern. Fares change, and the rules belong to the supplier. A public offer is not always the lower price.`
            : "The booking system did not respond just now, so these are the offers saved on this site. Fares move. We confirm the current terms before you book."}
        </p>
        {offerGroups.map((group) => {
          const cruise = cruiseOffers(feed.offers);
          const { featured, used } = featuredBrands(cruise);
          const items =
            group === "Luxury"
              ? [...featured, ...cruise.filter((offer) => offer.group === "Luxury" && !used.has(offer.href))]
              : cruise.filter((offer) => offer.group === group && !used.has(offer.href));
          if (items.length === 0) return null;
          const explora = items.filter((offer) => isExploraOffer(offer));
          const rest = items.filter((offer) => !isExploraOffer(offer));
          const visible = group === "Luxury" ? [...explora.slice(0, 2), ...rest] : items;
          const moreExplora = group === "Luxury" ? explora.slice(2) : [];
          return (
            <div key={group} className="mt-10">
              <h3 className="font-display text-2xl">{group}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((offer) => (
                  <OfferCard key={offer.title + offer.href} offer={offer} />
                ))}
              </div>
              {moreExplora.length > 0 ? (
                <details className="mt-4 rounded-xl border border-line bg-foam p-5">
                  <summary className="cursor-pointer font-medium">More Explora Journeys</summary>
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
        <p className="mt-8 max-w-3xl text-xs leading-5 text-mute">{licenseLine}</p>
      </section>
    </Shell>
  );
}
