import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { portActivityBySlug } from "@/data/port-activities";
import { breadcrumbLd, clip, JsonLd, pageHead } from "@/lib/seo";

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
          <div className="mt-8 grid gap-4">
            {page.stops.map((stop) => (
              <section key={stop.name} className="overflow-hidden rounded-xl border border-line bg-foam">
                {stop.photos?.length ? (
                  <div className={stop.photos.length > 1 ? "grid sm:grid-cols-2" : ""}>
                    {stop.photos.map((photo) => (
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
                  <h2 className="font-display text-2xl text-ink">{stop.name}</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink">{stop.dock}</p>
                  <p className="mt-3 text-base leading-relaxed text-ink">{stop.text}</p>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-ink">Add one of these to the quote</h2>
              <p className="mt-3 text-base leading-relaxed text-ink">
                Tell us the port and what you want to do there. We check it against the ship’s arrival and all-aboard before we add it.
              </p>
            </div>
            <QuoteForm preset={page.region} kind="cruise" />
          </div>
        </article>
      </div>
    </Shell>
  );
}
