import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { orderedDestinations } from "@/data/destinations";
import { portActivityBySlug } from "@/data/port-activities";
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
        title="Cruise regions."
        lede="An ocean cruise wakes you in a new harbor. A river cruise follows one river into town. An expedition cruise lands on a beach that has no port. Choose a region below. Europe is split into the Mediterranean, the Atlantic cities such as Lisbon and London, and the north: the Norwegian fjords, Iceland, and the Baltic. A world cruise runs for months. Each region has its own page, and a second page for what you can do once the ship is there."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-8 md:grid-cols-2">
        <article className="rounded-xl border border-line bg-foam p-5">
          <h2 className="font-display text-2xl text-ink">Departure ports</h2>
          <p className="mt-3 text-base leading-relaxed text-ink">
            Fort Lauderdale is a working port, built to get you on the ship. Miami, Barcelona, Vancouver, and Sydney are better cities if you want a few days before you sail or after you return. A Caribbean cruise from Miami or Fort Lauderdale spends more nights in the islands than a cruise of the same length from New York, New Jersey, Baltimore, or Boston. A southern or eastern Caribbean cruise can also start in San Juan, and in some seasons in Fort-de-France. An Alaska cruise usually leaves from Seattle or Vancouver.
          </p>
          <Link to="/ports" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep">
            See the ports
          </Link>
        </article>
        <article className="rounded-xl border border-line bg-foam p-5">
          <h2 className="font-display text-2xl text-ink">Ships and prices</h2>
          <p className="mt-3 text-base leading-relaxed text-ink">
            The comparison pages list the usual passenger count and a general price range, from the smallest ships to the largest. An excursion in a port can be added to the quote. It is not in the cruise fare unless the line includes it.
          </p>
          <Link to="/lines" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-tide px-4 text-sm font-medium text-foam hover:bg-tide-deep">
            Compare cruise lines
          </Link>
        </article>
      </div>
      <div className="mx-auto grid max-w-6xl items-stretch gap-4 px-4 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {orderedDestinations()
          .filter((item) => item.slug !== "rail")
          .map((item) => (
          <Link
            key={item.slug}
            to="/destinations/$slug"
            params={{ slug: item.slug }}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-foam hover:border-tide"
          >
            <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
            <div className="flex flex-1 flex-col p-5">
              <p className="text-sm font-medium text-tide">{item.card}</p>
              <h2 className="mt-1 font-display text-3xl">{item.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-ink">{item.lede}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-tide group-hover:underline">
                {portActivityBySlug(item.slug) ? "Open the region" : "Learn more"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
