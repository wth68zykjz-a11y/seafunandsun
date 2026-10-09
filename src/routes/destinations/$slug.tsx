import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { destinationBySlug, destinationTone, sampleNote } from "@/data/destinations";
import { railPages } from "@/data/rail-pages";
import { shoreNote, shores, portGuides } from "@/data/excursions";
import { portActivityBySlug } from "@/data/port-activities";
import { destinationPhotos, type DestinationPhoto } from "@/data/destination-photos";
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
        ? clip(`${loaderData.lede} Booked by Sea Fun & Sun in Farmington, Connecticut.`)
        : "Cruise destinations booked by Sea Fun & Sun in Farmington, Connecticut.",
      path: loaderData ? `/destinations/${loaderData.slug}` : "/destinations",
      image: loaderData?.image,
      noindex: !loaderData,
    }),
  component: DestinationPage,
});

const ashoreNotes: Record<string, string> = {
  alaskan:
    "Most Alaska stops end in the afternoon. Mendenhall Glacier is in Juneau, about 20 minutes from the cruise docks on Gastineau Channel. Creek Street is in downtown Ketchikan. A short ride from there reaches the totem poles at Saxman and Totem Bight. Skagway sits at the foot of White Pass, and the White Pass and Yukon Route railroad climbs from town to the pass. In Glacier Bay or Tracy Arm there is no pier. The ship spends those hours on the water. Some ships stay late enough in Juneau that you can eat in town. If you stay in Seattle or Vancouver before or after the cruise, you have the evening in the city. Steamed Dungeness crab can be lunch if you want it.",
  caribbean:
    "A typical island stop ends in the afternoon. Cozumel and the private islands have a beach and a swim. In Nassau, ships dock at Prince George Wharf. Walk out through Festival Place, then left onto Bay Street. The straw market is about five minutes from the gate, and Parliament Square is a couple of minutes farther. In San Juan you can walk up to El Morro. If the ship stays longer there, you have the afternoon in the old city, and an overnight leaves the evening open. Nights in Miami or Fort Lauderdale are in the city, after you leave the ship.",
  mediterranean:
    "Many stops end in the afternoon. The Gothic Quarter is in Barcelona, and you can walk there from some piers. The Colosseum and the museums are in Rome. Civitavecchia is about an hour to an hour and a half away. The Acropolis is in Athens, about 30 to 45 minutes from Piraeus. When the ship stays overnight, or sails as late as 10 p.m., the evening in the city is open. A reserved dinner can be part of those extra nights.",
  european:
    "A daytime stop leaves the afternoon short. Lisbon, the London ports, and the Mediterranean cities on these routes are easier with a night or two before or after, when you do not have to be back on the ship. An overnight, or a departure as late as 10 p.m., leaves the evening free. Tell us which cities you already know. We will put the extra nights on the ones you do not.",
  hawaii:
    "The sail between the islands takes longer than a short Caribbean cruise, and Pride of America often stays into the evening. You might use that time at a beach, in the car, or on the north shore. Pearl Harbor is easier before or after a California crossing, while you are staying on Oahu. A luau still needs the ship in port after dark.",
  bermuda:
    "Many Bermuda sailings stay overnight at the Dockyard, on the west end. Horseshoe Bay is about 30 minutes by taxi. Hamilton is about 20 minutes by ferry. St. George's is about an hour by bus. An overnight is enough time for the beach, Hamilton, and St. George's. On a short stop, use the excursion sold by the ship if you want to leave the Dockyard. If that tour is late, the ship waits. Sailings from Boston, New York, or Baltimore include sea days each way.",
  "northern-europe":
    "Most Baltic and Norway stops end in the afternoon. Bryggen is the old wharf in Bergen. Nyhavn is the canal in Copenhagen. The Rijksmuseum is in Amsterdam, and it holds Rembrandt’s The Night Watch. Ocean ships dock at IJmuiden, not in the canals. The museum is about 30 to 45 minutes from the pier. An overnight in Copenhagen or Stockholm leaves the evening free. Extra nights in London, Amsterdam, or Copenhagen are for a museum and a neighborhood.",
  "canada-new-england":
    "These stops are in towns, and many end in the afternoon. Boston Harbor and the Freedom Trail are in Boston. In Quebec, Upper Town and the Château Frontenac sit above the St. Lawrence. A late departure shows up more often on a fall foliage sailing than on a quick stop. Extra nights in Boston or Quebec let you stay out after dark.",
  river:
    "A river ship ties up in town, often into the evening. You walk off into Budapest, Vienna, or a village, and people often ride a bike along the river while the ship is there. A Mississippi sailing follows the Mississippi, with New Orleans and the river towns. A Danube sailing follows the Danube, with Budapest and Vienna. Extra nights in Budapest, Paris, Amsterdam, or New Orleans cover the parts of the city the ship only passes.",
  expedition:
    "An expedition landing may never reach a town. You put on the boots and the parka the ship issues, ride a Zodiac to a beach or the ice, and walk the path the guides mark. You may stand near penguins or seals and take pictures from the distance they set. If the water is calm, some ships add a kayak or a canoe for people who asked. Weather can cancel the landing and leave you on deck. Ushuaia and Longyearbyen are towns where you can stay before or after the voyage. The landing itself is on a beach or the ice, not in a city.",
  asia:
    "Singapore and Tokyo often keep the ship in port into the evening, and some sail as late as 10 p.m. A beach stop is still only a few hours. A night before or after is a chance to explore one district, or a museum, instead of racing through three cities.",
  "south-america":
    "Guanabara Bay, Sugarloaf, and Corcovado are in Rio. In Buenos Aires you can walk San Telmo and the waterfront at Puerto Madero, and the evening starts late, which lines up when the ship stays overnight or sails late. A daytime stop can include that waterfront and San Telmo. Extra nights are when you can stay out. A grill can be part of those nights if you want a table held.",
  world:
    "A world cruise spends many days at sea. On a short stop you can walk the streets nearest the pier. On an overnight you have the evening in that city. Southampton, Sydney, and Singapore, where many of these voyages start or end, are the places to add nights.",
  "australia-new-zealand":
    "Sydney Harbour and the Opera House are in Sydney. In Auckland, the waterfront is at the pier, and Mount Eden, a volcanic cone, is about 15 minutes away. The evening in town depends on a late departure or an overnight, which some itineraries have. Fewer cruises start and end in Brisbane or Melbourne. Extra nights in Sydney or Auckland are in the city after the ship has sailed.",
  "panama-canal":
    "While the ship is in the canal, you are on deck. You are not ashore unless the itinerary lists a dock, and many ships only pass through. These cruises usually stop in Cartagena. Extra nights belong at the start or the end, in Fort Lauderdale, Miami, Los Angeles, or San Diego. You have the evening there because the cruise has not started, or it has ended.",
};

const ashoreLeads: Record<string, string> = {
  alaskan: "Mendenhall Glacier is in Juneau, about 20 minutes from the docks. Creek Street is in downtown Ketchikan. Skagway sits at the foot of White Pass. In Glacier Bay or Tracy Arm there is no pier. The ship spends those hours on the water.",
  caribbean: "Cozumel and the private islands have beaches. In Nassau, walk out of Prince George Wharf through Festival Place and left onto Bay Street. The straw market is about five minutes from the gate. In San Juan you can walk up to El Morro, and a longer stay leaves the afternoon for the old city.",
  mediterranean: "The Gothic Quarter is in Barcelona. The Colosseum is in Rome. Civitavecchia is about an hour to an hour and a half away. The Acropolis is in Athens, about 30 to 45 minutes from Piraeus.",
  european: "A stop in Lisbon, at the London ports, or in a Mediterranean city is short if the ship leaves in the afternoon. If you add nights before or after, you can see one of them properly.",
  hawaii: "Time between the islands runs longer than a Caribbean stop. Pride of America often stays into the evening. A luau still needs the ship in port after dark.",
  bermuda: "The ship is at the Dockyard. Horseshoe Bay is about 30 minutes by taxi, Hamilton is about 20 minutes by ferry, and St. George's is about an hour by bus. If the ship stays overnight, there is time for all three.",
  "northern-europe": "Bryggen is the old wharf in Bergen. Nyhavn is the canal in Copenhagen. The Rijksmuseum is in Amsterdam, and it holds Rembrandt’s The Night Watch. Ocean ships dock at IJmuiden, not in the canals. The museum is about 30 to 45 minutes from the pier.",
  "canada-new-england": "Boston Harbor and the Freedom Trail are in Boston. In Quebec, Upper Town and the Château Frontenac sit above the St. Lawrence. A fall sailing is more likely to leave late than a short summer stop.",
  river: "The ship ties up in town, often into the evening. You walk off into Budapest, Vienna, or a village.",
  expedition: "You may put on the gear, ride a Zodiac to a beach or the ice, and take pictures. Going ashore is the reason for the cruise. Weather can cancel it. The landing is on a beach or the ice, not a walk through a city.",
  asia: "Singapore and Tokyo often keep the ship in port into the evening. A beach stop is still only a few hours.",
  "south-america": "Guanabara Bay, Sugarloaf, and Corcovado are in Rio. In Buenos Aires you can walk San Telmo and Puerto Madero, and the evening starts late, which only helps if the ship stays.",
  world: "A world cruise has more sea days than port days. On a short stop you can walk the streets nearest the pier. On an overnight you have the evening in that city.",
  "australia-new-zealand": "Sydney Harbour and the Opera House are in Sydney. In Auckland, Mount Eden is a volcanic cone about 15 minutes from the pier.",
  "panama-canal": "While the ship is in the canal, you are on deck. You are not ashore unless the itinerary lists a dock. These cruises usually stop in Cartagena.",
};

function PhotoFigure({ photo }: { photo: DestinationPhoto }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-foam">
      <img src={photo.src} alt={photo.alt} width={1400} height={933} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
      <figcaption className="px-4 py-3 text-base leading-relaxed text-ink">{photo.caption}</figcaption>
    </figure>
  );
}

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
  const photos = [...(place.photos ?? []), ...(destinationPhotos[place.slug] ?? [])].filter(
    (photo, index, all) => all.findIndex((item) => item.src === photo.src) === index && photo.src !== place.image,
  );
  const paragraphPhotos = photos.slice(0, place.paragraphs.length);
  const itineraryPhotos = photos.slice(place.paragraphs.length, place.paragraphs.length + place.itineraries.length);
  const sparePhotos = photos.slice(place.paragraphs.length + place.itineraries.length);
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
      <section className="mx-auto grid max-w-6xl items-stretch gap-6 px-4 pt-8 lg:grid-cols-2">
        <img src={place.image} alt={place.alt} fetchPriority="high" decoding="async" className="h-full min-h-72 w-full rounded-xl object-cover" />
        <div className="flex flex-col justify-center rounded-xl px-6 py-8 text-foam lg:px-8" style={{ backgroundColor: tone }}>
          <p className="text-base text-foam">
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
          <p className="mt-3 text-base font-medium text-foam">{place.card}</p>
          <h1 className="mt-2 font-display text-3xl sm:text-5xl">{place.title}</h1>
          <p className="mt-4 text-lg text-foam">{place.lede}</p>
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
            <p className="mt-4 text-base text-foam">
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
          <h2 className="font-display text-3xl">Choose a route</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink">Each train has its own page. The canyons, the dining car, and the nights off the train are there.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {railPages.map((item) => (
              <Link key={item.slug} to="/rail/$slug" params={{ slug: item.slug }} className="overflow-hidden rounded-xl border border-line bg-foam hover:border-tide">
                {item.photos[0] ? (
                  <img src={item.photos[0].src} alt={item.photos[0].alt} width={1400} height={933} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
                ) : null}
                <div className="p-4">
                  <h3 className="font-display text-2xl">{item.nav}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink">{item.lede}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {rail ? null : (
      <>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10">
          {place.paragraphs.map((paragraph, index) => {
            const photo = paragraphPhotos[index];
            const photoFirst = index % 2 === 1;
            return (
              <div key={paragraph} className={photo ? "grid items-start gap-6 lg:grid-cols-12" : "max-w-3xl"}>
                <p className={`text-lg leading-relaxed text-ink ${photo ? `lg:col-span-7 ${photoFirst ? "lg:order-2" : ""}` : ""}`}>{paragraph}</p>
                {photo ? (
                  <div className={`lg:col-span-5 ${photoFirst ? "lg:order-1" : ""}`}>
                    <PhotoFigure photo={photo} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        {place.slug === "alaskan" || place.slug === "bermuda" || place.slug === "panama-canal" ? (
          <p className="mt-8">
            <Link
              to="/guides/$slug"
              params={{ slug: place.slug === "alaskan" ? "alaska-seattle-vancouver" : place.slug === "bermuda" ? "bermuda-northeast" : "panama-transit" }}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-foam px-4 text-sm font-medium text-ink"
            >
              {place.slug === "alaskan"
                ? "Seattle or Vancouver as the departure port"
                : place.slug === "bermuda"
                  ? "Boston, New York, or Baltimore as the departure port"
                  : "Full transit or partial transit"}
            </Link>
          </p>
        ) : null}
        <div className="mt-10 grid items-start gap-4 lg:grid-cols-2">
          {place.lists.map((list) => (
            <article key={list.heading} className="rounded-xl border border-line bg-foam p-5 sm:p-6">
              <h2 className="font-display text-2xl">{list.heading}</h2>
              <ul className="mt-4 grid gap-3 text-base leading-relaxed text-ink">
                {list.items.map((item) => (
                  <li key={item} className="border-t border-line pt-3 first:border-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 max-w-3xl rounded-xl border border-line bg-foam p-5 sm:p-6">
          <p className="text-lg leading-relaxed text-ink">
            {rail
              ? "A station stop is a few minutes on the platform. If you get off and stay the night, the train is not your deadline. You can have dinner, go to a museum, or walk a neighborhood the train only passes. That might be a well-known restaurant, if that is why you stopped, or a small local place such as a wine bar or a café with a short menu."
              : ashoreNotes[place.slug]}
          </p>
        </div>
        <article className="mt-4 rounded-xl p-5 text-foam sm:p-6" style={{ backgroundColor: tone }}>
          <h2 className="font-display text-2xl">When to go</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foam">{place.when}</p>
        </article>
        {sparePhotos.length ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {sparePhotos.map((photo) => (
              <PhotoFigure key={photo.src} photo={photo} />
            ))}
          </div>
        ) : null}
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
              <h2 className="mt-2 font-display text-3xl">{rail ? "What to expect on the route" : "What to expect in port"}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink">
                {rail
                  ? "You are on the train for most of the trip. A station stop is short. The notes below say what you can see from the window, and what will not fit at the station."
                  : ashoreLeads[place.slug]}
              </p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                {portGuides[place.slug].facts.map((fact) => (
                  <div key={fact.label} className="rounded-lg border border-line bg-foam p-4">
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
              <h2 className="mt-2 font-display text-3xl">{rail ? "Stops and cities" : "Excursions you can add"}</h2>
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
                <article key={trip.title} className="rounded-xl border border-line bg-foam p-5">
                  <h3 className="font-display text-2xl">{trip.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink">{trip.detail}</p>
                  <p className="mt-3 text-base leading-relaxed text-ink">
                    <span className="font-medium">Place. </span>
                    {trip.where}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-ink">
                    <span className="font-medium">Hours. </span>
                    {trip.length}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-ink">
                    <span className="font-medium">Walking. </span>
                    {trip.pace}
                  </p>
                  {note ? (
                    <div className="mt-3 grid gap-2 border-t border-line pt-3">
                      <p className="text-base leading-relaxed text-ink">{note.fits}</p>
                      <p className="text-base leading-relaxed text-ink">
                        <span className="font-medium">Bring. </span>
                        {note.bring}
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
        <h2 className="font-display text-3xl">Sample itineraries</h2>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink">
          {rail
            ? "These are typical routes. Trains, hotels, dates, and fares change."
            : sampleNote}
        </p>
        <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-3">
          {place.itineraries.map((trip, index) => {
            const photo = itineraryPhotos[index];
            return (
            <article key={trip.title} className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-foam">
              {photo ? (
                <figure>
                  <img src={photo.src} alt={photo.alt} width={1400} height={933} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
                  <figcaption className="border-b border-line px-4 py-3 text-base leading-relaxed text-ink">{photo.caption}</figcaption>
                </figure>
              ) : null}
              <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-2xl">{trip.title}</h3>
              <p className="mt-2 text-base font-medium text-tide">{trip.nights}</p>
              <p className="mt-1 text-base text-ink">{trip.season}</p>
              <p className="mt-3 text-base leading-relaxed text-ink">{trip.path}</p>
              <p className="mt-2 text-base leading-relaxed text-ink">{trip.ship}</p>
              <ul className="mt-4 grid gap-2 border-t border-line pt-3 text-base leading-relaxed text-ink">
                {trip.ports.map((port) => (
                  <li key={port}>{port}</li>
                ))}
              </ul>
              </div>
            </article>
            );
          })}
        </div>
      </section>
      </>
      )}

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl">{rail ? "Planning a rail trip?" : `Planning ${place.nav.toLowerCase()}?`}</h2>
          <p className="mt-3 text-mute">{place.planning}</p>
        </div>
        <QuoteForm preset={place.title} kind={rail ? "land" : "cruise"} />
      </section>
      </div>
    </Shell>
  );
}
