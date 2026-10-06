import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { cruisePlaces } from "@/data/place-names";
import { airlineNote, portPageBySlug, portPages, type Port, type PortCall } from "@/data/ports";
import { CabinGuide } from "@/components/cabin-guide";
import { LocalClock } from "@/components/local-clock";
import { clip, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ports/$region")({
  loader: ({ params }) => {
    const page = portPageBySlug(params.region);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData ? `${loaderData.title} cruise ports` : "Cruise ports",
      description: loaderData
        ? clip(`${loaderData.title} cruise ports. ${loaderData.lede} Airlines, local time, and currency for each city.`)
        : "Departure ports, the airlines that serve them, and where those ships tend to go.",
      path: loaderData ? `/ports/${loaderData.slug}` : "/ports",
      noindex: !loaderData,
    }),
  component: PortRegionPage,
});

const portMap: Record<string, string> = {
  americas: "/media/maps/americas.png",
  europe: "/media/maps/european.png",
  asia: "/media/maps/asia.png",
  "australia-new-zealand": "/media/maps/australia-new-zealand.png",
  other: "/media/maps/world.png",
};

const placeTitle = Object.fromEntries(cruisePlaces.map((item) => [item.slug, item.title]));

function PortCard({ port }: { port: Port }) {
  const destination = port.slug ? placeTitle[port.slug] : undefined;
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-foam">
      <img src={port.image} alt={port.alt} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
      <div className="p-5">
      <p className="text-sm font-medium text-tide">{port.place}</p>
      <h3 className="mt-1 font-display text-2xl text-ink">{port.name}</h3>
      <p className="mt-2 text-base leading-relaxed text-ink">
        <span className="font-medium text-ink">Cruises go to: </span>
        {port.goes}
      </p>
      <p className="mt-2 text-base leading-relaxed text-ink">
        <span className="font-medium text-ink">Airlines: </span>
        {port.air}
      </p>
      <LocalClock zone={port.zone} />
      <p className="mt-2 text-base leading-relaxed text-ink">
        <span className="font-medium text-ink">Currency: </span>
        {port.money}
      </p>
      {destination ? (
        <Link
          to="/destinations/$slug"
          params={{ slug: port.slug! }}
          className="mt-5 inline-flex min-h-11 items-center rounded-md bg-coral px-4 text-base font-medium text-foam hover:bg-coral-deep"
          style={{ backgroundColor: "#8e3426", color: "#f7fbf9" }}
        >
          See {destination}
        </Link>
      ) : null}
      </div>
    </article>
  );
}

function CallCard({ call }: { call: PortCall }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-foam">
      <img src={call.image} alt={call.alt} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
      <div className="p-5">
      <p className="text-sm font-medium text-tide">{call.place}</p>
      <h3 className="mt-1 font-display text-2xl text-ink">{call.name}</h3>
      <p className="mt-2 text-base leading-relaxed text-ink">{call.note}</p>
      <p className="mt-2 text-base leading-relaxed text-ink">
        <span className="font-medium text-ink">Airlines: </span>
        {call.air}
      </p>
      <LocalClock zone={call.zone} />
      <p className="mt-2 text-base leading-relaxed text-ink">
        <span className="font-medium text-ink">Currency: </span>
        {call.money}
      </p>
      </div>
    </article>
  );
}

function PortRegionPage() {
  const page = Route.useLoaderData();
  if (!page) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h1 className="font-display text-4xl">We don’t have that port list.</h1>
          <Link to="/ports" className="mt-4 inline-flex min-h-11 items-center text-tide">
            All departure ports
          </Link>
        </div>
      </Shell>
    );
  }
  return (
    <Shell>
      <div className="relative">
        <img
          src={portMap[page.slug] ?? "/media/maps/world.png"}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full opacity-[0.08]"
        />
        <div className="relative z-10">
      <PageIntro kicker="Departure ports" title={page.title} lede={page.lede} />
      <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-8" aria-label="Port regions">
        {portPages.map((item) => (
          <Link
            key={item.slug}
            to="/ports/$region"
            params={{ region: item.slug }}
            className={`rounded-md px-3 py-2 text-sm font-medium ${item.slug === page.slug ? "bg-gold text-ink" : "bg-sea text-foam"}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {page.sections.map((region) => (
        <section key={region.id} className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="font-display text-3xl text-ink">{region.title}</h2>
          <p className="mt-2 max-w-3xl text-mute">{region.lede}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {region.ports.map((port) => (
              <PortCard key={port.name} port={port} />
            ))}
          </div>
        </section>
      ))}
      {page.calls && page.calls.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="font-display text-3xl text-ink">Other stops</h2>
          <p className="mt-2 max-w-3xl text-mute">These cities come in the middle of a sailing. You usually do not start or finish the cruise here.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {page.calls.map((call) => (
              <CallCard key={call.name} call={call} />
            ))}
          </div>
        </section>
      ) : null}
      <div className="mx-auto max-w-6xl space-y-3 px-4 pb-8 text-base leading-relaxed text-ink">
        <p>{airlineNote}</p>
        <p>
          The cruise fare is usually billed in US dollars. On shore, prices are in the currency named on that city’s card. US cash works in the United States and Puerto Rico. Elsewhere, including Canada, a shop that takes US bills usually sets a worse rate than your bank. If you want cash, order the local currency from your bank before you leave. A travel card with no international transaction fee is the other way to pay.
        </p>
      </div>
      <CabinGuide />
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-xl bg-sea px-6 py-8 text-foam">
          <h2 className="font-display text-3xl">Not sure which port fits?</h2>
          <p className="mt-3 max-w-2xl text-foam/85">
            Tell us who is traveling and which coast you want. We will match the port, the sea days, and the flight.
          </p>
          <Link to="/quote" className="mt-6 inline-flex min-h-11 items-center rounded-md bg-coral px-5 text-sm font-medium text-foam hover:bg-coral-deep">
            Request a quote
          </Link>
        </div>
      </section>
        </div>
      </div>
    </Shell>
  );
}
