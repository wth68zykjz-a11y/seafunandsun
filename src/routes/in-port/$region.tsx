import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { portActivityBySlug } from "@/data/port-activities";
import { attractionListLd, breadcrumbLd, clip, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/in-port/$region")({
  loader: ({ params }) => {
    const page = portActivityBySlug(params.region);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData ? loaderData.title : "In port",
      description: loaderData
        ? clip(`${loaderData.title}. ${loaderData.lede}`)
        : "Where the ship docks, and what you can do from that pier.",
      path: loaderData ? `/in-port/${loaderData.slug}` : "/destinations",
      noindex: !loaderData,
    }),
  component: InPortPage,
});

const portThumbs: Record<string, { src: string; alt: string }> = {
  Seward: { src: "/media/ports/seward.jpg", alt: "The harbor at Seward" },
  Whittier: { src: "/media/ports/whittier.jpg", alt: "The harbor at Whittier" },
  Singapore: { src: "/media/ports/singapore.jpg", alt: "The Singapore skyline" },
  "Yokohama and Tokyo": { src: "/media/ports/tokyo.jpg", alt: "Tokyo" },
  "Hong Kong": { src: "/media/ports/hong-kong.jpg", alt: "Hong Kong and the harbor" },
  Bangkok: { src: "/media/ports/bangkok.jpg", alt: "Bangkok" },
  Phuket: { src: "/media/ports/phuket.jpg", alt: "The coast at Phuket" },
  Sydney: { src: "/media/ports/sydney.jpg", alt: "Sydney and the harbor" },
  Auckland: { src: "/media/ports/auckland.jpg", alt: "Auckland" },
  Melbourne: { src: "/media/ports/melbourne.jpg", alt: "Melbourne" },
  Cairns: { src: "/media/ports/cairns.jpg", alt: "Cairns" },
  "Rio de Janeiro": { src: "/media/ports/rio.jpg", alt: "Rio de Janeiro and the harbor" },
  "Buenos Aires": { src: "/media/ports/buenos-aires.jpg", alt: "Buenos Aires" },
  Ushuaia: { src: "/media/ports/ushuaia.jpg", alt: "Ushuaia" },
  Boston: { src: "/media/ports/boston.jpg", alt: "Boston Harbor" },
  Halifax: { src: "/media/ports/halifax.jpg", alt: "Halifax" },
  "Quebec City": { src: "/media/ports/quebec-city.jpg", alt: "Quebec City" },
  Bergen: { src: "/media/ports/bergen.jpg", alt: "Bergen" },
  Copenhagen: { src: "/media/ports/copenhagen.jpg", alt: "Copenhagen" },
  Stockholm: { src: "/media/ports/stockholm.jpg", alt: "Stockholm" },
  Amsterdam: { src: "/media/ports/amsterdam.jpg", alt: "Amsterdam" },
  Reykjavik: { src: "/media/ports/reykjavik.jpg", alt: "Reykjavik" },
  Lisbon: { src: "/media/ports/lisbon.jpg", alt: "Lisbon from the river" },
  Porto: { src: "/media/ports/porto.jpg", alt: "Porto" },
  "Porto and the Douro": { src: "/media/ports/porto.jpg", alt: "Porto" },
  "Southampton and London": { src: "/media/ports/southampton.jpg", alt: "Southampton" },
  Southampton: { src: "/media/ports/southampton.jpg", alt: "Southampton" },
  "Le Havre and Paris": { src: "/media/ports/paris.jpg", alt: "Paris" },
  Paris: { src: "/media/ports/paris.jpg", alt: "Paris" },
  Barcelona: { src: "/media/ports/barcelona.jpg", alt: "Barcelona" },
  Palma: { src: "/media/ports/palma.jpg", alt: "Palma" },
  Marseille: { src: "/media/ports/marseille.jpg", alt: "Marseille" },
  Athens: { src: "/media/ports/piraeus.jpg", alt: "The port of Piraeus, for Athens" },
  Rome: { src: "/media/ports/civitavecchia.jpg", alt: "Civitavecchia, the port for Rome" },
  Budapest: { src: "/media/ports/budapest.jpg", alt: "Budapest along the Danube" },
  "New Orleans": { src: "/media/ports/new-orleans.jpg", alt: "New Orleans" },
  "San Juan": { src: "/media/ports/san-juan.jpg", alt: "San Juan" },
  Cartagena: { src: "/media/desire/cartagena.jpg", alt: "The walled city of Cartagena" },
  "Cape Town": { src: "/media/ports/cape-town.jpg", alt: "Cape Town" },
  Honolulu: { src: "/media/ports/honolulu.jpg", alt: "Honolulu" },
  "The canal": { src: "/media/panama-canal.jpg", alt: "A ship in the Panama Canal locks" },
};

function InPortPage() {
  const page = Route.useLoaderData();
  return (
    <Shell>
      <div className="relative">
        <img
          src={`/media/maps/${page.slug}.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full opacity-[0.08]"
        />
        <JsonLd
          data={breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            { name: page.region, path: `/destinations/${page.slug}` },
            { name: "In port", path: `/in-port/${page.slug}` },
          ])}
        />
        <JsonLd data={attractionListLd(page)} />
        <article className="mx-auto max-w-6xl px-4 pt-8 pb-20 sm:pt-12">
          <p className="text-base leading-relaxed text-ink">
            <Link to="/destinations/$slug" params={{ slug: page.slug }} className="font-medium text-tide">
              {page.region}
            </Link>
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-ink sm:text-5xl">{page.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">{page.lede}</p>
          <img
            src={page.image}
            alt={page.imageAlt}
            fetchPriority="high"
            decoding="async"
            className="mt-8 aspect-photo max-h-80 w-full rounded-xl object-cover"
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink">{page.note}</p>
          <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
            {page.stops.map((stop) => {
              const thumb = stop.photos?.[0] ?? portThumbs[stop.name];
              const extra = stop.photos && stop.photos.length > 1 ? stop.photos.slice(1) : [];
              return (
              <section key={stop.name} className="overflow-hidden rounded-xl border border-line bg-foam">
                {extra.length ? (
                  <div className="grid sm:grid-cols-2">
                    {extra.map((photo) => (
                      <img
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-photo max-h-72 w-full object-cover"
                      />
                    ))}
                  </div>
                ) : null}
                <div className="p-5">
                  <div className="flex items-center gap-4">
                    {thumb ? (
                      <img src={thumb.src} alt={thumb.alt} width={80} height={80} loading="lazy" decoding="async" className="size-16 shrink-0 rounded-lg object-cover sm:size-20" />
                    ) : null}
                    <h2 className="font-display text-2xl text-ink">{stop.name}</h2>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-ink">{stop.dock}</p>
                  <p className="mt-3 text-base leading-relaxed text-ink">{stop.text}</p>
                </div>
              </section>
              );
            })}
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-ink">Add excursions to your quote</h2>
              <p className="mt-3 text-base leading-relaxed text-ink">
                Share your preferred ports and activities with us. We carefully verify every excursion against your ship’s exact arrival and departure schedule to ensure seamless, worry-free timing before finalizing your itinerary.
              </p>
            </div>
            <QuoteForm preset={page.region} kind="cruise" />
          </div>
        </article>
      </div>
    </Shell>
  );
}
