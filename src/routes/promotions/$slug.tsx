import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { getPromo } from "@/lib/promo";
import { explainPromotion } from "@/lib/offer-copy";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/promotions/$slug")({
  loader: ({ params }) => getPromo({ data: params.slug }),
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData ? `${loaderData.title} — Sea Fun & Sun` : "Promotion",
      description: loaderData
        ? `${loaderData.line ? `${loaderData.line}. ` : ""}${loaderData.starting ? `${loaderData.title} starts at ${loaderData.starting}. ` : explainPromotion(loaderData.title)} Booked with Sea Fun & Sun in Farmington, Connecticut.`
        : "A Sea Fun & Sun promotion.",
      path: loaderData ? `/promotions/${loaderData.slug}` : "/sailings",
    }),
  component: PromoPageView,
});

function PromoPageView() {
  const promo = Route.useLoaderData();
  if (!promo) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h1 className="font-display text-4xl">That promotion is not posted right now.</h1>
          <Link to="/sailings" hash="promotions" className="mt-4 inline-flex min-h-11 items-center text-tide">
            Back to promotions
          </Link>
        </div>
      </Shell>
    );
  }
  return (
    <Shell>
      <PageIntro
        kicker="A Sea Fun & Sun promotion"
        title={promo.title}
        lede={
          promo.line && promo.starting
            ? `${promo.line}. ${promo.title} starts at ${promo.starting}.`
            : promo.line
              ? `${promo.line}. ${explainPromotion(promo.title)}`
              : explainPromotion(promo.title)
        }
      />
      <div className="mx-auto max-w-6xl px-4 pb-20">
        {promo.images.length > 0 ? (
          <div className={`grid gap-4 ${promo.images.length > 1 ? "md:grid-cols-2" : ""}`}>
            {promo.images.map((src) => (
              <img key={src} src={src} alt="" className="w-full rounded-xl border border-line bg-foam object-contain" />
            ))}
          </div>
        ) : null}
        {promo.bookingDates || promo.travelDates ? (
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {promo.bookingDates ? (
              <div className="rounded-xl border border-line bg-foam p-5">
                <dt className="text-xs font-medium text-tide">Book by</dt>
                <dd className="mt-1 font-display text-2xl">{promo.bookingDates}</dd>
              </div>
            ) : null}
            {promo.travelDates ? (
              <div className="rounded-xl border border-line bg-foam p-5">
                <dt className="text-xs font-medium text-tide">Travel</dt>
                <dd className="mt-1 font-display text-2xl">{promo.travelDates}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}
        {promo.prices.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-display text-3xl">Fares on this promotion</h2>
            <ul className="mt-4 grid gap-3">
              {promo.prices.map((row) => (
                <li key={row.dates + row.price} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-line bg-foam px-5 py-4">
                  <span>{row.dates}</span>
                  <span className="font-medium text-ink">{row.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        {promo.days.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-display text-3xl">The routing</h2>
            <ol className="mt-4 grid gap-3">
              {promo.days.map((day) => (
                <li key={day.label + day.text} className="rounded-xl border border-line bg-foam p-5">
                  <p className="text-xs font-medium text-tide">{day.label}</p>
                  {day.text ? <p className="mt-1 text-ink">{day.text}</p> : null}
                  {day.times ? <p className="mt-1 text-sm text-mute">{day.times}</p> : null}
                </li>
              ))}
            </ol>
          </section>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/quote"
            search={{ place: "Not sure yet", note: `Please book this promotion: ${promo.title}` }}
            className="inline-flex min-h-11 items-center rounded-md bg-coral px-5 text-sm font-medium text-foam hover:bg-coral-deep"
          >
            Ask us to book this
          </Link>
          <Link to="/sailings" hash="promotions" className="inline-flex min-h-11 items-center rounded-md bg-sea px-5 text-sm font-medium text-foam">
            All promotions
          </Link>
        </div>
      </div>
    </Shell>
  );
}
