import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { guideBySlug, guides } from "@/data/guides";
import { breadcrumbLd, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = guideBySlug(params.slug);
    if (!guide) throw notFound();
    return guide;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.title ?? "Guide",
      description: loaderData?.description ?? "A Sea Fun & Sun guide.",
      path: loaderData ? `/guides/${loaderData.slug}` : "/destinations",
      image: loaderData?.image,
      noindex: !loaderData,
    }),
  component: GuidePage,
});

function GuidePage() {
  const guide = Route.useLoaderData();
  return (
    <Shell>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: guide.related.label, path: guide.related.slug ? `/destinations/${guide.related.slug}` : "/ports" },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])}
      />
      <article className="mx-auto max-w-6xl px-4 pt-8 pb-20">
        <img src={guide.image} alt={guide.alt} width={1400} height={933} fetchPriority="high" decoding="async" className="aspect-photo w-full rounded-xl object-cover" />
        <p className="mt-6 text-base text-ink">
          {guide.related.slug ? (
            <Link to="/destinations/$slug" params={{ slug: guide.related.slug }} className="font-medium text-tide">
              {guide.related.label}
            </Link>
          ) : (
            <Link to="/ports" className="font-medium text-tide">
              {guide.related.label}
            </Link>
          )}
        </p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">{guide.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">{guide.lede}</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {guide.sides.map((side) => (
            <section key={side.title} className="rounded-xl border border-line bg-foam p-5">
              <h2 className="font-display text-3xl text-ink">{side.title}</h2>
              <dl className="mt-4 grid gap-4">
                {side.points.map((point) => (
                  <div key={point.label}>
                    <dt className="text-base font-medium text-tide">{point.label}</dt>
                    <dd className="mt-1 text-base leading-relaxed text-ink">{point.text}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink">{guide.note}</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">Ask for this comparison on a quote.</h2>
            <p className="mt-3 text-base leading-relaxed text-ink">Name the month and who is traveling. We will price the cruise that matches the city you want to leave from.</p>
          </div>
          <QuoteForm preset={guide.quotePlace} />
        </div>
        <nav className="mt-10 grid gap-3 sm:grid-cols-3" aria-label="Other comparisons">
          {guides
            .filter((item) => item.slug !== guide.slug)
            .map((item) => (
              <Link key={item.slug} to="/guides/$slug" params={{ slug: item.slug }} className="rounded-xl border border-line bg-foam p-4 text-base font-medium text-ink hover:border-tide">
                {item.title}
              </Link>
            ))}
        </nav>
      </article>
    </Shell>
  );
}
