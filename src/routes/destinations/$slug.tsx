import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { destinationBySlug, destinationTone, sampleNote } from "@/data/destinations";
import { railPages } from "@/data/rail-pages";
import { shoreNote, shores, portGuides } from "@/data/excursions";
import { portActivityBySlug } from "@/data/port-activities";
import { breadcrumbLd, clip, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/destinations/$slug")({
  beforeLoad: ({ params }) => {
    if (params.slug === "rail") throw redirect({ to: "/rail", statusCode: 301 });
  },
  loader: ({ params }) => {
    const place = destinationBySlug(params.slug);
    if (!place) throw notFound();
    return place;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.title ?? "Destination",
      description: loaderData
        ? clip(`${loaderData.title} booked by Sea Fun & Sun in Farmington, Connecticut. ${loaderData.lede}`)
        : "Cruise destinations booked by Sea Fun & Sun in Farmington, Connecticut.",
      path: loaderData ? `/destinations/${loaderData.slug}` : "/destinations",
      image: loaderData?.image,
      noindex: !loaderData,
    }),
  component: DestinationPage,
});

const ashoreNotes: Record<string, string> = {
  alaskan:
    "Most Alaska stops end in the afternoon. Mendenhall Glacier is in Juneau, about 20 minutes from the cruise docks on Gastineau Channel. Creek Street is in downtown Ketchikan. A short ride from there reaches the totem poles at Saxman and Totem Bight. Skagway sits at the foot of White Pass, and the White Pass and Yukon Route railroad climbs from town to the pass. In Glacier Bay or Tracy Arm there is no pier. The ship spends those hours on the water. Some Juneau calls stay late enough that you can eat in town. Nights in Seattle or Vancouver are not cut off by all-aboard. Steamed Dungeness crab can be lunch if you want it.",
  caribbean:
    "A typical island stop ends in the afternoon. Cozumel and the private islands have a beach and a swim. Nassau and the older towns have a walk from the pier. You can use a longer afternoon in San Juan, and an overnight is when the evening in town is open. Nights in Miami or Fort Lauderdale are for the city, not the gangway.",
  mediterranean:
    "Many stops end in the afternoon. The Gothic Quarter is in Barcelona, and you can walk there from some piers. The Colosseum and the museums are in Rome. Civitavecchia is about an hour to an hour and a half away. The Acropolis is in Athens, about 30 to 45 minutes from Piraeus. When the ship stays overnight, or sails as late as 10 p.m., the evening in the city is open. A reserved dinner can be part of those extra nights.",
  european:
    "A daytime stop leaves the afternoon short. Lisbon, the London ports, and the Mediterranean cities on these routes are easier with a night or two before or after, when all-aboard is not the deadline. An overnight, or a departure as late as 10 p.m., leaves the evening free. Tell us which cities you already know. We will put the extra nights on the ones you do not.",
  hawaii:
    "The sail between the islands takes longer than a Caribbean hop, and Pride of America often stays into the evening. You might use that time at a beach, in the car, or on the north shore. Pearl Harbor is a visit for before or after a California crossing, while you are staying on Oahu and there is no gangway to watch. A luau still needs the ship in port after dark.",
  bermuda:
    "Many Bermuda sailings stay overnight at the Dockyard, on the west end. Horseshoe Bay is about 30 minutes by taxi. Hamilton is about 20 minutes by ferry. St. George's is about an hour by bus. An overnight is enough time for the beach, Hamilton, and St. George's. On a short stop, use the excursion sold by the ship if you want to leave the Dockyard. If that tour is late, the ship waits. Sailings from Boston, New York, or Baltimore include sea days each way.",
  "northern-europe":
    "Most Baltic and Norway stops end in the afternoon. Bryggen is the old wharf in Bergen. Nyhavn is the canal in Copenhagen. The Rijksmuseum is in Amsterdam, and it holds Rembrandt’s The Night Watch. Ocean ships dock at IJmuiden, not in the canals. The museum is about 30 to 45 minutes from the pier. An overnight in Copenhagen or Stockholm leaves the evening free. Extra nights in London, Amsterdam, or Copenhagen are for a museum and a neighborhood.",
  "canada-new-england":
    "These stops are in towns, and many end in the afternoon. Boston Harbor and the Freedom Trail are in Boston. In Quebec, Upper Town and the Château Frontenac sit above the St. Lawrence. A late departure shows up more often on a fall foliage sailing than on a quick stop. Extra nights in Boston or Quebec let you stay out after dark.",
  river:
    "A river ship ties up in town, often into the evening. You walk off into Budapest, Vienna, or a village, and people often ride a bike along the river while the ship is there. A Mississippi sailing follows the Mississippi, with New Orleans and the river towns. A Danube sailing follows the Danube, with Budapest and Vienna. Extra nights in Budapest, Paris, Amsterdam, or New Orleans are for the parts of the city the ship only passes.",
  expedition:
    "An expedition landing may never reach a town. You put on the boots and the parka the ship issues, ride a Zodiac to a beach or the ice, and walk the path the guides mark. You may stand near penguins or seals and take pictures from the distance they set. If the water is calm, some ships add a kayak or a canoe for people who asked. Weather can cancel the landing and leave you on deck. Ushuaia and Longyearbyen are towns you can use before or after the voyage. The landing is not in a town.",
  asia:
    "Singapore and Tokyo often keep the ship in port into the evening, and some sail as late as 10 p.m. A beach stop is still only a few hours. A night before or after is a chance to explore one district, or a museum, instead of racing through three cities.",
  "south-america":
    "Guanabara Bay, Sugarloaf, and Corcovado are in Rio. In Buenos Aires you can walk the neighborhoods, and the evening starts late, which lines up when the ship stays overnight or sails late. A daytime stop can include the waterfront and a neighborhood such as San Telmo. Extra nights are when you can stay out. A grill can be part of those nights if you want a table held.",
  world:
    "A world cruise spends many days at sea. On a short stop you can walk around the harbor. On an overnight you have the evening in that city. Southampton, Sydney, and Singapore, where many of these voyages start or end, are the places to add nights. The ship is not waiting then.",
  "australia-new-zealand":
    "Sydney Harbour and the Opera House are in Sydney. In Auckland, the waterfront is at the pier, and Mount Eden, a volcanic cone, is about 15 minutes away. The evening in town depends on a late sailaway or an overnight, which some itineraries have. Brisbane and Melbourne turn fewer ships. Extra nights in Sydney or Auckland are for the city after the ship has sailed.",
  "panama-canal":
    "While the ship is in the canal, you are on deck. You are not ashore unless the itinerary lists a dock, and many ships only pass through. Cartagena is the city on a lot of these routes. Extra nights belong at the start or the end, in Fort Lauderdale, Miami, Los Angeles, or San Diego, when there is no all-aboard.",
};

const ashoreLeads: Record<string, string> = {
  alaskan: "Mendenhall Glacier is in Juneau, about 20 minutes from the docks. Creek Street is in downtown Ketchikan. Skagway sits at the foot of White Pass. In Glacier Bay or Tracy Arm there is no pier. The ship spends those hours on the water.",
  caribbean: "Cozumel and the private islands have beaches. Nassau and the older towns have streets you can walk from the pier. You can use a longer afternoon in San Juan.",
  mediterranean: "The Gothic Quarter is in Barcelona. The Colosseum is in Rome. Civitavecchia is about an hour to an hour and a half away. The Acropolis is in Athens, about 30 to 45 minutes from Piraeus.",
  european: "Lisbon, the London ports, and the Mediterranean cities on these routes are short if the ship leaves in the afternoon. Extra nights are how you see one of them properly.",
  hawaii: "Time between the islands runs longer than a Caribbean stop. Pride of America often stays into the evening. A luau still needs the ship in port after dark.",
  bermuda: "The ship is at the Dockyard. Horseshoe Bay is about 30 minutes by taxi, Hamilton is about 20 minutes by ferry, and St. George's is about an hour by bus. If the ship stays overnight, there is time for all three.",
  "northern-europe": "Bryggen is the old wharf in Bergen. Nyhavn is the canal in Copenhagen. The Rijksmuseum is in Amsterdam, and it holds Rembrandt’s The Night Watch. Ocean ships dock at IJmuiden, not in the canals. The museum is about 30 to 45 minutes from the pier.",
  "canada-new-england": "Boston Harbor and the Freedom Trail are in Boston. In Quebec, Upper Town and the Château Frontenac sit above the St. Lawrence. A fall sailing is more likely to leave late than a short summer stop.",
  river: "The ship ties up in town, often into the evening. You walk off into Budapest, Vienna, or a village.",
  expedition: "A landing is not time in a city. You may put on the gear, ride a Zodiac, walk a beach, and take pictures. Weather can cancel it.",
  asia: "Singapore and Tokyo often keep the ship in port into the evening. A beach stop is still only a few hours.",
  "south-america": "Guanabara Bay, Sugarloaf, and Corcovado are in Rio. In Buenos Aires you can walk the neighborhoods, and the evening starts late, which only helps if the ship stays.",
  world: "A world cruise has more sea days than port days. On a short stop you can walk around the harbor. On an overnight you have the evening in that city.",
  "australia-new-zealand": "Sydney Harbour and the Opera House are in Sydney. In Auckland, Mount Eden is a volcanic cone about 15 minutes from the pier.",
  "panama-canal": "While the ship is in the canal, you are on deck. You are not ashore unless the itinerary lists a dock. Cartagena is the city on a lot of these routes.",
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

export function DestinationArticle({
  place,
  rail = false,
  path,
}: {
  place: NonNullable<ReturnType<typeof destinationBySlug>>;
  rail?: boolean;
  path?: string;
}) {
  const tone = destinationTone[place.slug] ?? "#0c2340";
  const pagePath = path ?? `/destinations/${place.slug}`;
  const inPort = portActivityBySlug(place.slug);
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
                { name: place.nav, path: pagePath },
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
            {inPort ? (
              <Link
                to="/in-port/$region"
                params={{ region: place.slug }}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-4 text-sm font-medium text-ink hover:bg-gold-deep"
              >
                What you can do in port
              </Link>
            ) : null}
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

      {rail ? (
        <section className="mx-auto max-w-6xl px-4 pb-4">
          <h2 className="font-display text-3xl">Routes</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {railPages.map((item) => (
              <Link key={item.slug} to="/rail/$slug" params={{ slug: item.slug }} className="rounded-xl border border-line bg-foam p-4 hover:border-tide">
                <h3 className="font-display text-2xl">{item.nav}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.lede}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl space-y-4 text-lg">
          {place.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {place.slug === "panama-canal" ? (
          <div className="mt-10">
            <h2 className="font-display text-4xl">Full transit or partial transit</h2>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink">
              Both sailings use the canal. Only a full transit goes from one ocean to the other. A partial transit enters from the Caribbean, crosses Gatun Lake, and comes back out the same locks.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <article className="rounded-xl border border-line bg-foam p-5">
                <h3 className="font-display text-2xl">Full transit</h3>
                <dl className="mt-4 grid gap-3 text-base leading-relaxed text-ink">
                  <div>
                    <dt className="font-medium text-tide">Direction</dt>
                    <dd>One way, Atlantic to Pacific, or the reverse. The ship passes every lock and the Culebra Cut.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">Start and finish</dt>
                    <dd>You board in one city and leave the ship in another. Florida to California is the common pair. Some sailings start in Seattle or Vancouver and end in Florida.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">Length</dt>
                    <dd>Usually 14 to 17 nights. A voyage that also includes Mexico or an Alaska repositioning runs longer.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">Flights</dt>
                    <dd>Two airports. The flight home does not leave from the city where you boarded.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">What you see</dt>
                    <dd>Both sets of locks, the lake, and the cut. Cartagena is a common stop, and the Pacific side often adds a Mexican or Central American port.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">Cruise fare</dt>
                    <dd>On Princess, Holland America, or Celebrity, an interior cabin is often about $1,200–$2,200 per person for 14 to 17 nights. A balcony is often about $2,200–$4,000. A sale can put an interior near $1,000. That is the cruise only, for two people in the cabin.</dd>
                  </div>
                </dl>
              </article>
              <article className="rounded-xl border border-line bg-foam p-5">
                <h3 className="font-display text-2xl">Partial transit</h3>
                <dl className="mt-4 grid gap-3 text-base leading-relaxed text-ink">
                  <div>
                    <dt className="font-medium text-tide">Direction</dt>
                    <dd>A round trip. The ship uses the Caribbean locks, spends time on Gatun Lake, turns around, and exits the same side.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">Start and finish</dt>
                    <dd>You return to the port where you boarded, usually Fort Lauderdale or Miami.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">Length</dt>
                    <dd>Often 10 or 11 nights. It is still longer than a standard Caribbean week.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">Flights</dt>
                    <dd>One airport. The flight out and the flight home use the same city.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">What you see</dt>
                    <dd>The Caribbean locks and the lake. You do not pass the Culebra Cut or the Pacific locks. The other days are often Cartagena or a Caribbean stop.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-tide">Cruise fare</dt>
                    <dd>On those same lines, an interior cabin is often about $800–$1,800 per person for 10 to 12 nights. A balcony is often about $1,500–$3,000. A round trip to Florida is the usual flight, and it is booked separately.</dd>
                  </div>
                </dl>
              </article>
            </div>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink">
              These are recent published ranges. Taxes and port fees can add a few hundred dollars. Drinks, gratuities, and Wi-Fi are extra on most of these ships unless the fare says they are included. Regent, Silversea, and Viking ocean cost more, often several thousand dollars higher, and an agent requests those fares. A full transit also needs a flight into one coast and a flight home from the other.
            </p>
          </div>
        ) : null}
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
            ? "A station stop is a few minutes on the platform. If you get off and stay the night, the train is not your deadline. You can have dinner, go to a museum, or walk a neighborhood the train only passes. That might be a well-known restaurant, if that is why you stopped, or a small local place such as a wine bar or a café with a short menu."
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
                  ? "You are on the train for most of the trip. A station stop is short. The notes below say what you can see from the window, and what will not fit at the station."
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

      {inPort ? (
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <div className="rounded-xl border border-line bg-foam p-5">
            <p className="text-sm font-medium text-tide">In port</p>
            <h2 className="mt-2 font-display text-3xl">Where the ship docks, and what you can do there</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink">{inPort.lede}</p>
            <Link
              to="/in-port/$region"
              params={{ region: place.slug }}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-tide px-5 text-sm font-medium text-foam hover:bg-tide-deep"
            >
              See the ports
            </Link>
          </div>
        </section>
      ) : shores[place.slug] ? (
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
            ? "These are typical routes. Trains, hotels, dates, and fares change."
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
