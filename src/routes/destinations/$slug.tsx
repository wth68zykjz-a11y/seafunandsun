import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { destinationBySlug, destinationTone, sampleNote } from "@/data/destinations";
import { shoreNote, shores, portGuides } from "@/data/excursions";
import { sailingSearchHref } from "@/data/links";
import { breadcrumbLd, clip, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/destinations/$slug")({
  beforeLoad: ({ params }) => {
    if (params.slug === "rail") throw redirect({ to: "/rail", statusCode: 301 });
  },
  loader: ({ params }) => destinationBySlug(params.slug) ?? null,
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.title ?? "Destination",
      description: loaderData
        ? clip(loaderData.lede)
        : "Cruise destinations booked by Sea Fun & Sun in Farmington, Connecticut.",
      path: loaderData ? `/destinations/${loaderData.slug}` : "/destinations",
      image: loaderData?.image,
    }),
  component: DestinationPage,
});

function DestinationPage() {
  const place = Route.useLoaderData();
  if (!place) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h1 className="font-display text-4xl">We don’t have that destination.</h1>
          <Link to="/destinations" className="mt-4 inline-flex min-h-11 items-center text-tide">
            Back to destinations
          </Link>
        </div>
      </Shell>
    );
  }

  return <DestinationArticle place={place} />;
}

export function DestinationArticle({ place, rail = false }: { place: NonNullable<ReturnType<typeof destinationBySlug>>; rail?: boolean }) {
  const tone = destinationTone[place.slug] ?? "#0c2340";
  return (
    <Shell>
      <div className="relative">
      <img
        src={`/media/maps/${place.slug}.png`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full opacity-[0.08]"
      />
      <JsonLd
        data={breadcrumbLd(
          rail
            ? [
                { name: "Home", path: "/" },
                { name: "Rail and land", path: "/rail" },
              ]
            : [
                { name: "Home", path: "/" },
                { name: "Destinations", path: "/destinations" },
                { name: place.nav, path: `/destinations/${place.slug}` },
              ],
        )}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-8 lg:grid-cols-2">
        <img src={place.image} alt={place.alt} fetchPriority="high" decoding="async" className="aspect-photo w-full rounded-xl object-cover" />
        <div className="flex flex-col justify-center rounded-xl px-6 py-8 text-foam lg:px-8" style={{ backgroundColor: tone }}>
          <p className="text-sm text-foam/75">
            {rail ? (
              <Link to="/" className="font-medium text-foam">
                Home
              </Link>
            ) : (
              <Link to="/destinations" className="font-medium text-foam">
                Destinations
              </Link>
            )}
            <span aria-hidden="true"> / </span>
            {place.nav}
          </p>
          <p className="mt-3 text-sm font-medium text-foam/80">{place.card}</p>
          <h1 className="mt-2 font-display text-3xl sm:text-5xl">{place.title}</h1>
          <p className="mt-4 text-lg text-foam/85">{place.lede}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/quote"
              search={{ place: place.title }}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
            >
              Request a quote
            </Link>
            <a
              href={sailingSearchHref(place.slug)}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-4 text-sm font-medium text-ink hover:bg-gold-deep"
            >
              {rail ? "See land trips" : "Search sailings"}
            </a>
          </div>
          {rail ? null : (
            <p className="mt-4 text-sm text-foam/80">
              <Link to="/lines" className="font-medium text-foam underline-offset-2 hover:underline">
                Compare cruise lines
              </Link>
              <span aria-hidden="true"> · </span>
              <Link to="/ports" className="font-medium text-foam underline-offset-2 hover:underline">
                Departure ports
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl space-y-4 text-lg">
          {place.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {place.lists.map((list) => (
            <article key={list.heading} className="rounded-xl border border-line bg-foam p-5">
              <h2 className="font-display text-2xl">{list.heading}</h2>
              <ul className="mt-3 grid gap-2 text-sm text-mute">
                {list.items.map((item) => (
                  <li key={item} className="border-t border-line pt-2 first:border-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-sm text-mute">
          {rail
            ? "A night off the train has no schedule to catch. Walk the town, talk to people, and eat where it looks good. A museum if you want the morning indoors. A famous restaurant if that meal is why you stopped. A small local place if you would rather sit where the regulars sit."
            : "On a port day, you can squeeze in lunch only if the ship leaves later. A few nights before or after are free in a way a port call is not. There is no all-aboard. Walk until a street is worth turning down. Talk to the person at the counter, or at the next table. Drink where people are already sitting. Eat at a famous restaurant one night if that is the meal you stayed for, or at a small local place with a short menu. Spend a morning in a museum, or skip it and stay outside."}
        </p>
        <article className="mt-4 rounded-xl p-5 text-foam" style={{ backgroundColor: tone }}>
          <h2 className="font-display text-2xl">When to go</h2>
          <p className="mt-3 max-w-3xl text-foam/85">{place.when}</p>
        </article>
      </section>

      {portGuides[place.slug] ? (
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <img
              src={portGuides[place.slug].detail}
              alt={portGuides[place.slug].detailAlt}
              loading="lazy"
              decoding="async"
              className="aspect-photo w-full rounded-xl object-cover"
            />
            <div>
              <p className="text-sm font-medium text-tide">{rail ? "On the route" : "In port"}</p>
              <h2 className="mt-2 font-display text-4xl">{rail ? "What to expect on the route" : "What to expect in port"}</h2>
              <p className="mt-3 text-sm text-mute">
                {rail
                  ? "Most of the day is on the train. A stop is short. The notes below say what you can see from the window, and what will not fit at the station."
                  : "You are ashore only while the ship is there, so lunch is all you can add, and only if the ship leaves later. Stay a few nights before or after and there is no all-aboard. Walk, talk to people, and drink where the locals are already sitting. Eat at a famous restaurant or a small local place. See a museum, or don't. Where the Michelin Guide covers the city, a starred table has to be requested before you sail."}
              </p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {portGuides[place.slug].facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm font-medium text-tide">{fact.label}</dt>
                    <dd className="mt-1 text-sm text-mute">{fact.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ) : null}

      {shores[place.slug] ? (
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <div className="grid items-center gap-6 lg:grid-cols-5">
            <img
              src={shores[place.slug].photo}
              alt={shores[place.slug].photoAlt}
              loading="lazy"
              decoding="async"
              className="aspect-photo w-full rounded-xl object-cover lg:col-span-2"
            />
            <div className="lg:col-span-3">
              <p className="text-sm font-medium text-tide">{rail ? "Optional" : "Optional excursions"}</p>
              <h2 className="mt-2 font-display text-4xl">{rail ? "Stops and cities" : "Excursions you can add"}</h2>
              <p className="mt-3 text-mute">
                {rail
                  ? "A guided tour or an excursion can be arranged in the city or at the stop, as an add-on to enrich the trip. It depends on the place. The operator, the hours, and the price change."
                  : shoreNote}
              </p>
              <p className="mt-3 text-mute">{shores[place.slug].intro}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {shores[place.slug].excursions.map((trip, index) => {
              const note = portGuides[place.slug]?.outings[index];
              return (
                <article key={trip.title} className="rounded-xl border border-line bg-foam p-4">
                  <h3 className="font-display text-2xl">{trip.title}</h3>
                  <p className="mt-3 text-sm">
                    <span className="font-medium">Where. </span>
                    <span className="text-mute">{trip.where}</span>
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-medium">Time. </span>
                    <span className="text-mute">{trip.length}</span>
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-medium">Pace. </span>
                    <span className="text-mute">{trip.pace}</span>
                  </p>
                  <p className="mt-2 text-sm text-mute">{trip.detail}</p>
                  {note ? (
                    <div className="mt-3 grid gap-2 border-t border-line pt-3 text-sm">
                      <p>
                        <span className="font-medium">Who it fits. </span>
                        <span className="text-mute">{note.fits}</span>
                      </p>
                      <p>
                        <span className="font-medium">What to bring. </span>
                        <span className="text-mute">{note.bring}</span>
                      </p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-display text-4xl">Sample itineraries</h2>
        <p className="mt-2 max-w-2xl text-sm text-mute">
          {rail
            ? "These are typical routes. Trains, hotels, dates, and fares change. This is not a quote."
            : sampleNote}
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {place.itineraries.map((trip) => (
            <article key={trip.title} className="rounded-xl border border-line p-4">
              <h3 className="font-display text-2xl">{trip.title}</h3>
              <p className="mt-2 text-sm text-tide">
                {trip.nights} · {trip.season}
              </p>
              <p className="mt-3 text-sm">{trip.path}</p>
              <p className="mt-1 text-sm text-mute">{trip.ship}</p>
              <ul className="mt-3 grid gap-1 text-sm text-mute">
                {trip.ports.map((port) => (
                  <li key={port}>{port}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl">Planning {place.nav.toLowerCase()}?</h2>
          <p className="mt-3 text-mute">{place.planning}</p>
        </div>
        <QuoteForm preset={place.title} kind={rail ? "land" : "cruise"} />
      </section>
      </div>
    </Shell>
  );
}
