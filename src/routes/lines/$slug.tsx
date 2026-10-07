import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { linePageBySlug, linePagesInSizeOrder } from "@/data/lines";
import { breadcrumbLd, clip, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lines/$slug")({
  loader: ({ params }) => {
    const page = linePageBySlug(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.title ?? "Cruise lines",
      description: loaderData
        ? clip(`${loaderData.title}. ${loaderData.lede} Typical passenger counts and a general price range. Not a quote.`)
        : "Cruise line comparison by ship size and region, with passenger counts and general price ranges. Not a quote.",
      path: loaderData ? `/lines/${loaderData.slug}` : "/lines",
      image: loaderData?.image,
      noindex: !loaderData,
    }),
  component: LineRegionPage,
});

function LineRegionPage() {
  const page = Route.useLoaderData();
  if (!page) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-4xl">We don’t have that comparison.</h1>
          <Link to="/lines" className="mt-6 inline-flex min-h-11 items-center text-tide">
            All cruise line comparisons
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
          { name: "Cruise lines", path: "/lines" },
          { name: page.title, path: `/lines/${page.slug}` },
        ])}
      />
      <PageIntro kicker="Cruise lines" title={page.title} lede={page.lede} />
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <p className="max-w-3xl text-lg text-ink">{page.size}</p>
        {page.photos ? (
          <div className={`mt-8 grid gap-4 ${page.photos.length > 1 ? "md:grid-cols-2" : ""}`}>
            {page.photos.map((photo) => (
              <figure key={photo.src + photo.caption} className="overflow-hidden rounded-xl border border-line bg-foam">
                <img src={photo.src} alt={photo.alt} width={1400} height={933} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm text-mute">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink">
          {page.slug === "small"
            ? "The ranges are per person, for two people in a cabin. Most of these sailings are quoted. Meals are in the fare, and on most European river ships a daily excursion is included."
            : "Ranges are per person, two to a cabin. They move with the month and the cabin, and they are not a quote. On the large ships, taxes, port charges, and gratuities are usually extra. On river ships, expedition ships, luxury ships, and yachts, more of that is already in the fare."}
        </p>
        {page.benefits ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {page.benefits.map((item) => (
              <article key={item.title} className="rounded-xl border border-line bg-foam p-5">
                <h2 className="font-display text-2xl">{item.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-ink">{item.text}</p>
              </article>
            ))}
          </div>
        ) : null}
        <p className="mt-8 text-sm text-mute md:hidden">Swipe sideways to see the passengers, the route, and the fare.</p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-line bg-foam md:mt-8">
          <table className="w-full min-w-[44rem] text-left text-base">
            <thead className="border-b border-line text-mute">
              <tr>
                <th className="px-4 py-3 font-medium">Line</th>
                <th className="px-4 py-3 font-medium">Passengers</th>
                <th className="px-4 py-3 font-medium">Where those ships go</th>
                <th className="px-4 py-3 font-medium">General price range</th>
              </tr>
            </thead>
            <tbody>
              {page.rows.map((row) => (
                <tr key={row.line} className="border-b border-line align-top last:border-0">
                  <th className="px-4 py-4 font-medium text-ink">{row.line}</th>
                  <td className="px-4 py-4 text-mute">{row.ships}</td>
                  <td className="px-4 py-4 text-mute">{row.where}</td>
                  <td className="px-4 py-4 text-mute">{row.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 max-w-3xl space-y-3 text-ink">
          {page.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/quote" search={{ place: page.title }} className="inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-5 text-sm font-medium text-foam hover:bg-coral-deep">
            Request a quote
          </Link>
          <Link to="/sailings" className="inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-5 text-sm font-medium text-ink hover:bg-gold-deep">
            Search sailings
          </Link>
          <Link to="/ports" className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-foam px-5 text-sm font-medium text-ink">
            Departure ports
          </Link>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3 text-sm">
          {linePagesInSizeOrder
            .filter((item) => item.slug !== page.slug)
            .map((item) => (
              <li key={item.slug}>
                <Link to="/lines/$slug" params={{ slug: item.slug }} className="inline-flex min-h-11 items-center rounded-md border border-line bg-foam px-4 font-medium text-ink">
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Shell>
  );
}
