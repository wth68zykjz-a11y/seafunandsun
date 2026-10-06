import { createFileRoute, Link } from "@tanstack/react-router";
import { CruiseSearch } from "@/components/cruise-search";
import { PageIntro, Shell } from "@/components/site-chrome";
import { agentQuoteNote, licenseLine } from "@/data/links";
import { getLiveOffers, isExploraOffer, type SupplierOffer } from "@/lib/offers";
import { pageHead } from "@/lib/seo";

type SailingsSearch = { destinations?: string; destinationtype?: string };

const offerGroups = ["Luxury", "Ocean"] as const;

const fallbackBrands = [/celebrity/i, /holland america/i, /princess/i];

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
      title: "Search cruise sailings",
      description:
        "Search live cruise sailings with Sea Fun & Sun. Some lines, and most yacht sailings, are not on a public fare and need a quote from an agent.",
      path: "/sailings",
      image: "/media/page-sailings.jpg",
    }),
  component: SailingsPage,
});

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
        <h2 className="font-display text-3xl">Offers available right now</h2>
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
