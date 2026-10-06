import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { orderedDestinations } from "@/data/destinations";
import { shores } from "@/data/excursions";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/destinations/")({
  head: () =>
    pageHead({
      title: "Cruise destinations",
      description:
        "Cruise regions from Alaska to Australia, including river and expedition ships. Booked by Sea Fun & Sun in Farmington, Connecticut.",
      path: "/destinations",
    }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <Shell>
      <PageIntro
        kicker="Destinations"
        title="Fifteen cruise regions."
        lede="Select a card to open that region. Each region lists typical routings and the ports most ships include. An excursion in a port or a city can be arranged as an add-on, to enrich the trip. Rail and land travel is on its own page."
      />
      <div className="mx-auto max-w-6xl px-4 pb-2">
        <p className="max-w-2xl text-mute">
          Some ports just get you on the ship. Fort Lauderdale is one of them. Miami, Vancouver, and Barcelona are good cities for a longer visit before or after.{" "}
          <Link to="/ports" className="font-medium text-tide">
            See where the major ports tend to go.
          </Link>{" "}
          Ship size and a general price range are on the{" "}
          <Link to="/lines" className="font-medium text-tide">
            cruise line comparison
          </Link>
          .
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {orderedDestinations()
          .filter((item) => item.slug !== "rail")
          .map((item) => (
          <Link
            key={item.slug}
            to="/destinations/$slug"
            params={{ slug: item.slug }}
            className="group overflow-hidden rounded-xl border border-line bg-foam hover:border-tide"
          >
            <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
            <div className="p-4">
              <p className="text-xs font-medium text-tide">{item.card}</p>
              <h2 className="mt-1 font-display text-3xl">{item.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-ink">{item.lede}</p>
              {shores[item.slug] ? (
                <p className="mt-3 border-t border-line pt-3 text-xs text-mute">
                  Excursions you can add: {shores[item.slug].excursions.map((trip) => trip.title).join(" · ")}
                </p>
              ) : null}
              <span className="mt-4 inline-flex text-sm font-medium text-tide group-hover:underline">Learn more</span>
            </div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
