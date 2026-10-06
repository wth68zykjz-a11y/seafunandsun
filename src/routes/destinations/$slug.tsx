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

const ashoreNotes: Record<string, string> = {
  alaskan:
    "Most Alaska calls end in the afternoon, so the meal ashore is lunch: salmon in Juneau, or crab in Ketchikan. Dinner in town is realistic only on a late sailaway or an overnight, which some Juneau calls allow. A glacier day has no pier. Nights in Seattle or Vancouver are not cut off by all-aboard, so use them for the market and a dinner the port call never had time for.",
  caribbean:
    "A typical island call ends in the afternoon, so plan lunch ashore rather than a long dinner. Cozumel, Nassau, and the private islands work that way. San Juan, and the occasional overnight, are when a restaurant in town makes sense. Nights in Miami, Fort Lauderdale, or San Juan are a different kind of day: a neighborhood, a beach morning, or a dinner you book ahead.",
  mediterranean:
    "Many calls end in the afternoon, so lunch is the meal ashore. Rome’s pier is Civitavecchia, about an hour out, which is why extra nights in the city matter more than a rushed port lunch. Barcelona and Athens are where a museum morning belongs. When the ship stays overnight, or sails as late as 10 p.m., dinner in the city is possible. Ask us for a Michelin table in Rome, Barcelona, or Athens before you sail.",
  european:
    "Lunch is the sure meal on a daytime call. Lisbon, the London ports, and the Mediterranean cities on these routes are easier with a night or two before or after, when all-aboard is not the deadline. An overnight, or a departure as late as 10 p.m., is when dinner in the city works. Tell us which cities you already know, and we will put the extra nights on the ones you do not.",
  hawaii:
    "Inter-island days run longer than a Caribbean call, and Pride of America often stays into the evening. A plate lunch or poke is the easy meal. A luau or a reserved dinner needs the ship still in port after dark, which is common on these sailings. Nights on Oahu before or after a California crossing are for Pearl Harbor or a Honolulu neighborhood, without watching the gangway.",
  bermuda:
    "Many Bermuda sailings stay overnight, so dinner in Hamilton is a normal part of the call. A short stop is different: the beach is the day, and lunch is the meal. Sailings from Boston, New York, or Baltimore include sea days each way. Extra nights on the island are for the pink-sand beaches and a dinner that does not have to end at the pier.",
  "northern-europe":
    "Baltic and Norway calls often end in the afternoon. Count on lunch: shrimp at the Bergen fish market, or smørrebrød in Copenhagen. Ocean ships for Amsterdam dock at IJmuiden, so the city takes longer than the map suggests. An overnight in Copenhagen or Stockholm is when dinner ashore is realistic. Extra nights in London, Amsterdam, or Copenhagen are for the Rijksmuseum, Nyhavn, or a restaurant you reserve ahead.",
  "canada-new-england":
    "These are town calls more than beach piers, and many end in the afternoon. Lunch is the meal ashore: chowder in Boston, lobster along the coast, or a meal in Quebec when the ship is on the St. Lawrence. A late departure is more common on a fall foliage sailing than on a quick stop. Extra nights in Boston or Quebec let you stay out after dark.",
  river:
    "A river ship ties up in town. This is not an ocean port day. You can walk off for lunch, and on many evenings for dinner, because the ship stays alongside. On the Danube that might be a café in Budapest or a reserved table in Vienna. A Mississippi sailing is a different country and a different menu. Extra nights in Budapest, Paris, Amsterdam, or New Orleans are for the museum and the neighborhood the ship only passes.",
  expedition:
    "Most expedition days are landings, not cities, and both meals stay on the ship. The gateway towns are the exception: Ushuaia before Antarctica, or Longyearbyen in the Arctic. Dinner in those towns belongs to the nights before or after the voyage. Tell us the region and we will say whether the itinerary has a real town in it, or only ice and a beach.",
  asia:
    "Singapore and Tokyo often keep the ship in port into the evening, and some sail as late as 10 p.m., so dinner ashore is a real plan: a hawker center, a noodle shop, or a sushi counter. A short beach call is still a lunch day. Nights before or after in Singapore, Tokyo, or Hong Kong are for a museum, a neighborhood, and a table you reserve, including a Michelin restaurant. Ask us before you sail.",
  "south-america":
    "In Rio and Buenos Aires the local dinner hour is late, which works when the ship stays overnight or sails late. On a daytime call, lunch is the meal ashore: a churrasco or a café, not a 10 p.m. table. Extra nights in either city are when the evening belongs to you. A famous grill, or a Michelin table, should be reserved before you arrive.",
  world:
    "A world cruise spends many days at sea, so a port is an event. A short call leaves time for lunch and not much else. An overnight is the dinner worth reserving. The cities where you join or leave the ship, often Southampton, Sydney, or Singapore, deserve extra nights. That is where a museum and a reserved dinner belong, because the ship is not waiting.",
  "australia-new-zealand":
    "Sydney and Auckland calls can cover lunch in the city and a walk on the harbor. Dinner ashore depends on a late sailaway or an overnight, which some itineraries include. Brisbane and Melbourne turn fewer ships. Extra nights in Sydney or Auckland are for the Opera House, a harbor neighborhood, and a dinner you book ahead instead of a race back to the pier.",
};

const ashoreLeads: Record<string, string> = {
  alaskan: "You are ashore only while the ship is alongside. The notes below say what a Juneau, Ketchikan, or Skagway call usually allows.",
  caribbean: "You are ashore only while the ship is alongside. The notes below separate a beach call from a longer stop such as San Juan.",
  mediterranean: "You are ashore only while the ship is alongside. The notes below say what fits in Barcelona, Rome, or Athens, and what needs an extra night.",
  european: "You are ashore only while the ship is alongside. The notes below are the cities. Extra nights are how you see one of them properly.",
  hawaii: "You are ashore only while the ship is alongside. These island calls run long, and the notes below say what still needs a reservation.",
  bermuda: "You are ashore only while the ship is alongside. An overnight in Hamilton changes the day. A short call does not.",
  "northern-europe": "You are ashore only while the ship is alongside. The notes below cover Bergen, Copenhagen, Amsterdam, and the other northern calls.",
  "canada-new-england": "You are ashore only while the ship is alongside. The notes below are the New England and Canada towns on a fall sailing.",
  river: "You step off into town. The notes below are the rivers, and the evenings when dinner off the ship is ordinary.",
  expedition: "A landing day is not a city day. The notes below say when there is a town, and when the day is ice, a beach, or a Zodiac.",
  asia: "You are ashore only while the ship is alongside. The notes below separate a long Singapore or Tokyo call from a short beach stop.",
  "south-america": "You are ashore only while the ship is alongside. The notes below are Rio, Buenos Aires, and the calls that do not keep the ship after dark.",
  world: "Ports are fewer than the sea days. The notes below say which calls are a walk and a lunch, and which are worth a reserved dinner.",
  "australia-new-zealand": "You are ashore only while the ship is alongside. The notes below are Sydney, Auckland, and the coast calls that are shorter.",
};

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
              <ul className="mt-3 grid gap-2 text-base text-ink">
                {list.items.map((item) => (
                  <li key={item} className="border-t border-line pt-2 first:border-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink">
          {rail
            ? "Time off the train belongs to the town, whether that is a morning, an afternoon, or an evening. You can walk until you want to sit down, and you can talk with people. You might eat where the room is already full, at a famous restaurant if that is why you stopped, or at a small local place such as a wine bar or a café with a short menu. You can visit a museum if you want to be indoors."
            : ashoreNotes[place.slug]}
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
              <p className="mt-3 text-lg leading-relaxed text-ink">
                {rail
                  ? "Most of the day is on the train. A stop is short. The notes below say what you can see from the window, and what will not fit at the station."
                  : ashoreLeads[place.slug]}
              </p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {portGuides[place.slug].facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-base font-medium text-tide">{fact.label}</dt>
                    <dd className="mt-1 text-base leading-relaxed text-ink">{fact.text}</dd>
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
