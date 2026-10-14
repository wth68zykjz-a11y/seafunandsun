import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { skiPageBySlug, skiPages } from "@/data/ski-pages";
import { JsonLd, breadcrumbLd, clip, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ski/$slug")({
  loader: ({ params }) => {
    const page = skiPageBySlug(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.title ?? "Ski",
      description: loaderData ? clip(`${loaderData.title}. ${loaderData.lede}`) : "Ski vacations booked by Sea Fun & Sun.",
      path: loaderData ? `/ski/${loaderData.slug}` : "/ski",
      image: loaderData?.image ?? "/media/ski-alps.jpg",
      noindex: !loaderData,
    }),
  component: SkiRegionPage,
});

function SkiRegionPage() {
  const page = Route.useLoaderData();
  if (!page) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-4xl">We don’t have that ski page.</h1>
          <Link to="/ski" className="mt-6 inline-flex min-h-11 items-center text-tide">
            All ski vacations
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Ski", path: "/ski" },
          { name: page.nav, path: `/ski/${page.slug}` },
        ])}
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-medium text-tide">Ski</p>
        <h1 className="mt-2 font-display text-4xl text-ink">{page.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink">{page.lede}</p>
        <div className="mt-8 grid gap-4">
          {page.paragraphs.map((paragraph, index) => (
            <div key={paragraph} className="grid gap-4">
              <p className="text-base leading-relaxed text-ink">{paragraph}</p>
              {page.photos[index] ? (
                <figure className="overflow-hidden rounded-xl border border-line bg-foam">
                  <img
                    src={page.photos[index].src}
                    alt={page.photos[index].alt}
                    width={1400}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="aspect-photo w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-base leading-relaxed text-ink">{page.photos[index].caption}</figcaption>
                </figure>
              ) : null}
            </div>
          ))}
          {page.sections?.map((section) => (
            <section key={section.heading} className="mt-4">
              <h2 className="font-display text-2xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base leading-relaxed text-ink">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/quote"
            search={{ place: page.title }}
            className="inline-flex min-h-11 items-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
          >
            Request a quote
          </Link>
          <Link to="/ski" className="inline-flex min-h-11 items-center rounded-md border border-line bg-foam px-4 text-sm font-medium text-ink">
            All ski vacations
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {skiPages
            .filter((item) => item.slug !== page.slug)
            .map((item) => (
              <Link key={item.slug} to="/ski/$slug" params={{ slug: item.slug }} className="rounded-xl border border-line bg-foam p-4 hover:border-tide">
                <p className="font-display text-2xl">{item.nav}</p>
                <p className="mt-2 text-base leading-relaxed text-ink">{item.lede}</p>
              </Link>
            ))}
        </div>
      </article>
    </Shell>
  );
}
