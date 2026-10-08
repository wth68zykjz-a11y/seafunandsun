import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { railPageBySlug, railPages } from "@/data/rail-pages";
import { JsonLd, breadcrumbLd, clip, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/rail/$slug")({
  loader: ({ params }) => {
    const page = railPageBySlug(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.title ?? "Rail",
      description: loaderData ? clip(`${loaderData.title}. ${loaderData.lede}`) : "Rail trips booked by Sea Fun & Sun.",
      path: loaderData ? `/rail/${loaderData.slug}` : "/rail",
      image: loaderData?.photos[0]?.src ?? "/media/rail.jpg",
      noindex: !loaderData,
    }),
  component: RailTopicPage,
});

function RailTopicPage() {
  const page = Route.useLoaderData();
  if (!page) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-4xl">We don’t have that rail page.</h1>
          <Link to="/rail" className="mt-6 inline-flex min-h-11 items-center text-tide">
            All rail trips
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
          { name: "Rail and land", path: "/rail" },
          { name: page.nav, path: `/rail/${page.slug}` },
        ])}
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-medium text-tide">Rail and land</p>
        <h1 className="mt-2 font-display text-4xl text-ink">{page.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink">{page.lede}</p>
        {page.photos.length ? (
          <div className={`mt-6 grid gap-4 ${page.photos.length > 1 ? "md:grid-cols-2" : ""}`}>
            {page.photos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-xl border border-line bg-foam">
                <img src={photo.src} alt={photo.alt} width={1600} height={1000} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm leading-relaxed text-mute">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
        {page.sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="font-display text-2xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-base leading-relaxed text-ink">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/quote" search={{ place: "Rail Vacations" }} className="inline-flex min-h-11 items-center rounded-md bg-coral px-4 text-sm font-medium text-foam">
            Request a quote
          </Link>
          <Link to="/rail" className="inline-flex min-h-11 items-center rounded-md border border-line bg-foam px-4 text-sm font-medium text-ink">
            All rail trips
          </Link>
        </div>
      </article>
      <nav aria-label="Other rail pages" className="mx-auto grid max-w-6xl gap-3 px-4 pb-8 sm:grid-cols-2 lg:grid-cols-3">
        {railPages
          .filter((item) => item.slug !== page.slug)
          .map((item) => (
            <Link key={item.slug} to="/rail/$slug" params={{ slug: item.slug }} className="rounded-xl border border-line bg-foam p-4 hover:border-tide">
              <h2 className="font-display text-2xl">{item.nav}</h2>
              <p className="mt-2 text-sm text-mute">{item.lede}</p>
            </Link>
          ))}
      </nav>
      <QuoteForm preset="Rail Vacations" kind="land" />
    </Shell>
  );
}
