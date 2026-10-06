import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { destinations, sampleNote } from "@/data/destinations";
import { portGuides, shores } from "@/data/excursions";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/itineraries")({
  validateSearch: (search: Record<string, unknown>): { place?: string } => ({
    place: typeof search.place === "string" && search.place && search.place !== "all" ? search.place : undefined,
  }),
  head: () =>
    pageHead({
      title: "Sample cruise itineraries",
      description:
        "Typical cruise routings, from Alaska to the Mediterranean, and the ports of call most ships include. Ships, dates, and fares change. These are not quotes.",
      path: "/itineraries",
      image: "/media/page-itineraries.jpg",
    }),
  component: ItinerariesPage,
});

function ItinerariesPage() {
  const place = Route.useSearch().place ?? "all";
  const cruisePlaces = destinations.filter((item) => item.slug !== "rail");
  const active = cruisePlaces.find((item) => item.slug === place);
  const shown = active ? [active] : cruisePlaces;

  return (
    <Shell>
      <PageIntro
        kicker="Sample itineraries"
        title="Sample routings."
        lede={sampleNote}
      />
      <div className="mx-auto max-w-6xl px-4">
        <img
          src="/media/page-itineraries.jpg"
          alt="A blank notebook, brass dividers, and binoculars on a table by the sea"
          className="aspect-photo max-h-80 w-full rounded-xl object-cover"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-20">
        <div className="flex gap-2 overflow-x-auto pb-4">
          <Link
            to="/itineraries"
            search={{ place: undefined }}
            className={`shrink-0 rounded-md border px-3 py-2 text-sm ${place === "all" || !active ? "border-sea bg-sea text-foam" : "border-line bg-foam text-ink"}`}
          >
            All
          </Link>
          {cruisePlaces.map((item) => (
            <Link
              key={item.slug}
              to="/itineraries"
              search={{ place: item.slug }}
              className={`shrink-0 rounded-md border px-3 py-2 text-sm ${place === item.slug ? "border-sea bg-sea text-foam" : "border-line bg-foam text-ink"}`}
            >
              {item.nav}
            </Link>
          ))}
        </div>
        <div className="mt-4 grid gap-8">
          {shown.map((item) => (
            <section key={item.slug}>
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display text-3xl">{item.title}</h2>
                <Link to="/destinations/$slug" params={{ slug: item.slug }} className="text-sm font-medium text-tide">
                  Destination page
                </Link>
              </div>
              <div className="mt-4 grid gap-4 overflow-hidden rounded-xl border border-line bg-foam md:grid-cols-[220px_1fr]">
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="h-48 w-full object-cover md:h-full" />
                <div className="p-4">
                  <p className="text-sm text-mute">{item.lede}</p>
                  <Link to="/destinations/$slug" params={{ slug: item.slug }} className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-tide">
                    More on {item.nav}, including excursions
                  </Link>
                </div>
              </div>
              {shores[item.slug] && portGuides[item.slug] ? (
                <div className="mt-4 grid gap-4 overflow-hidden rounded-xl border border-line bg-foam md:grid-cols-[220px_1fr]">
                  <img
                    src={portGuides[item.slug].detail}
                    alt={portGuides[item.slug].detailAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-48 w-full object-cover md:h-full"
                  />
                  <div className="p-4">
                    <p className="text-sm font-medium text-tide">Optional excursions</p>
                    <p className="mt-2 text-sm text-mute">
                      These can be arranged in the port or the city, as an add-on to enrich the trip. They are not in the cruise fare unless the line includes them.
                    </p>
                    <ul className="mt-3 grid gap-3">
                      {shores[item.slug].excursions.map((trip) => (
                        <li key={trip.title}>
                          <p className="text-sm font-medium">{trip.title}</p>
                          <p className="text-sm text-mute">
                            {trip.where}. {trip.length}.
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {item.itineraries.map((trip) => (
                  <article key={trip.title} className="rounded-xl border border-line bg-foam p-4">
                    <h3 className="font-display text-2xl">{trip.title}</h3>
                    <p className="mt-2 text-sm text-tide">
                      {trip.nights} · {trip.season}
                    </p>
                    <p className="mt-3 text-sm font-medium">{trip.path}</p>
                    <p className="mt-1 text-sm text-mute">{trip.ship}</p>
                    <ul className="mt-3 grid gap-1 text-sm text-mute">
                      {trip.ports.map((port) => (
                        <li key={port}>{port}</li>
                      ))}
                    </ul>
                    <Link
                      to="/quote"
                      search={{ place: item.title }}
                      className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-tide"
                    >
                      Ask us to price this
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Shell>
  );
}
