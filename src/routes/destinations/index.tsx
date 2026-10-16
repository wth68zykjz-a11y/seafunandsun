import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { orderedDestinations } from "@/data/destinations";
import { portActivityBySlug } from "@/data/port-activities";
import { destinationListLd, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/destinations/")({
  head: () =>
    pageHead({
      title: "Worldwide Cruise & Travel Destinations | Sea Fun & Sun",
      description:
        "Discover the world's most breathtaking cruise regions—from Alaska and the Caribbean to Europe and expedition voyages. Request your custom itinerary today.",
      path: "/destinations",
    }),
  component: DestinationsPage,
});

const hub: Record<string, { line: string; draws: string[] }> = {
  alaskan: { line: "Glaciers and wildlife along the Inside Passage.", draws: ["Glaciers", "Wildlife", "Inside Passage"] },
  caribbean: { line: "Reefs, beaches, and more sailings than any other region.", draws: ["Reefs", "Beaches", "Island ports"] },
  mediterranean: { line: "Barcelona one morning, and a small harbor the next.", draws: ["Greece", "Italy", "Spain"] },
  european: { line: "Lisbon, London, and the Atlantic cities.", draws: ["Lisbon", "London", "Canary Islands"] },
  hawaii: { line: "Island to island, with no flight between them.", draws: ["Volcanoes", "Beaches", "Pearl Harbor"] },
  bermuda: { line: "Pink sand, and a sailing from the Northeast.", draws: ["Horseshoe Bay", "Hamilton", "Dockyard"] },
  "northern-europe": { line: "Fjords, Iceland, and the Baltic under a long summer sky.", draws: ["Fjords", "Iceland", "Baltic"] },
  "canada-new-england": { line: "Sail from Boston or New York, with no flight first.", draws: ["Fall color", "Quebec", "Boston"] },
  river: { line: "Step off the ship into the town.", draws: ["Danube", "Rhine", "Mississippi"] },
  expedition: { line: "Small ships, Zodiac landings, and wildlife.", draws: ["Antarctica", "Arctic", "Galápagos"] },
  asia: { line: "Singapore, Tokyo, Hong Kong, and the cities between them.", draws: ["Singapore", "Tokyo", "Hong Kong"] },
  "south-america": { line: "Rio and the warm coast, or Cape Horn.", draws: ["Rio", "Patagonia", "Cape Horn"] },
  world: { line: "Months on one ship, and ports a short cruise never reaches.", draws: ["Full world", "Segments", "Crossings"] },
  "australia-new-zealand": { line: "Sydney, the reef, and New Zealand’s fiords.", draws: ["Sydney", "The reef", "Fiords"] },
  "panama-canal": { line: "The ship climbs from one ocean to the other.", draws: ["Full transit", "Partial transit", "Cartagena"] },
};

function DestinationsPage() {
  return (
    <Shell>
      <JsonLd
        data={destinationListLd(
          orderedDestinations()
            .filter((item) => item.slug !== "rail")
            .map((item) => ({ slug: item.slug, title: item.title, lede: item.lede, image: item.image })),
        )}
      />
      <PageIntro
        kicker="Destinations"
        title="Cruise regions."
        lede="An ocean cruise wakes you in a new harbor. A river cruise follows one river into town. An expedition cruise lands on a beach that has no port. Choose a region below. Europe is split into the Mediterranean, the Atlantic cities such as Lisbon and London, and the north: the Norwegian fjords, Iceland, and the Baltic. A world cruise runs for months. Each region has its own page, and a second page for what you can do once the ship is there."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-8 md:grid-cols-2">
        <article className="rounded-xl border border-line bg-foam p-5">
          <h2 className="font-display text-2xl text-ink">Departure ports</h2>
          <p className="mt-3 text-base leading-relaxed text-ink">
            Fort Lauderdale is a working port, built to get you on the ship. Miami, Barcelona, Vancouver, and Sydney are better cities if you want a few days before you sail or after you return. A Caribbean cruise from Miami or Fort Lauderdale spends more nights in the islands than a cruise of the same length from New York, New Jersey, Baltimore, or Boston. A southern or eastern Caribbean cruise can also start in San Juan, and in some seasons in Fort-de-France. An Alaska cruise usually leaves from Seattle or Vancouver.
          </p>
          <Link to="/ports" className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep sm:w-auto">
            See the ports
          </Link>
        </article>
        <article className="rounded-xl border border-line bg-foam p-5">
          <h2 className="font-display text-2xl text-ink">Ships and prices</h2>
          <p className="mt-3 text-base leading-relaxed text-ink">
            The comparison pages list the usual passenger count and a general price range, from the smallest ships to the largest. An excursion in a port can be added to the quote. It is not in the cruise fare unless the line includes it.
          </p>
          <Link to="/lines" className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-tide px-4 text-sm font-medium text-foam hover:bg-tide-deep sm:w-auto">
            Compare cruise lines
          </Link>
        </article>
      </div>
      <div className="mx-auto grid max-w-6xl items-start gap-4 px-4 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {orderedDestinations()
          .filter((item) => item.slug !== "rail")
          .map((item) => {
            const brief = hub[item.slug];
            return (
          <Link
            key={item.slug}
            to="/destinations/$slug"
            params={{ slug: item.slug }}
            className="group flex flex-col overflow-hidden rounded-xl border border-line bg-foam hover:border-tide"
          >
            <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
            <div className="flex flex-col p-5">
              <p className="text-sm font-medium text-tide">{item.card}</p>
              <h2 className="mt-1 font-display text-3xl">{item.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-ink">{brief?.line ?? item.lede}</p>
              {brief ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {brief.draws.map((draw) => (
                    <li key={draw} className="rounded-md bg-paper px-2 py-1 text-sm font-medium text-ink">
                      {draw}
                    </li>
                  ))}
                </ul>
              ) : null}
              <span className="mt-4 inline-flex text-sm font-medium text-tide group-hover:underline">
                {portActivityBySlug(item.slug) ? "Open the region" : "Learn more"}
              </span>
            </div>
          </Link>
            );
          })}
      </div>
    </Shell>
  );
}
