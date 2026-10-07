import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/site-chrome";
import { getPromo } from "@/lib/promo";
import { explainPromotion } from "@/lib/offer-copy";
import type { PromoDay } from "@/lib/promo";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/promotions/$slug")({
  loader: async ({ params }) => {
    const promo = await getPromo({ data: params.slug });
    if (!promo) throw notFound();
    return promo;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData ? `${loaderData.title} — Sea Fun & Sun` : "Promotion",
      description: loaderData
        ? `${loaderData.line ? `${loaderData.line}. ` : ""}${loaderData.starting ? `${loaderData.title} starts at ${loaderData.starting}. ` : explainPromotion(loaderData.title)} Booked with Sea Fun & Sun in Farmington, Connecticut.`
        : "A Sea Fun & Sun promotion.",
      path: loaderData ? `/promotions/${loaderData.slug}` : "/sailings",
      noindex: !loaderData,
    }),
  component: PromoPageView,
});

function realPrice(price: string) {
  const text = price.trim();
  return Boolean(text) && !/^n\/?a$/i.test(text) && !/^starting at n\/?a$/i.test(text);
}

function usefulDays(days: PromoDay[]) {
  return days.filter((day) => {
    if (day.times.trim()) return true;
    const text = day.text.trim();
    return text.length > 0 && text.length <= 110;
  });
}

function usefulNote(text: string) {
  const note = text.replace(/\s+/g, " ").trim();
  if (!note || note.length > 240) return "";
  if (/subject to availability|restrictions may apply|does not apply to|government taxes/i.test(note)) return "";
  return note;
}

function PromoPageView() {
  const promo = Route.useLoaderData();
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    if (!openImage) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openImage]);

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

  const lede = /explora/i.test(promo.line)
    ? `Explora Journeys is a luxury cruise line. The staterooms are suites, and the fare usually includes drinks, Wi-Fi, and gratuities.${promo.journey ? ` ${promo.journey}` : ""}${promo.starting ? ` Fares start at ${promo.starting}.` : ""}`
    : promo.line && promo.starting
      ? `${promo.line}. ${promo.title} starts at ${promo.starting}.`
      : promo.line
        ? `${promo.line}. ${explainPromotion(promo.title)}`
        : explainPromotion(promo.title);
  const days = usefulDays(promo.days);
  const prices = promo.prices.filter((row) => realPrice(row.price));
  const note = usefulNote(promo.disclaimer);

  return (
    <Shell>
      <article className="mx-auto max-w-6xl px-4 pt-8 pb-20 sm:pt-12">
        <p className="text-sm font-medium text-tide">A Sea Fun & Sun promotion</p>
        {promo.line ? <p className="mt-3 text-sm font-medium text-tide">{promo.line}</p> : null}
        <h1 className="mt-2 max-w-3xl font-display text-3xl leading-tight text-balance text-ink sm:text-4xl">{promo.title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink sm:text-lg">{lede}</p>
        {promo.starting ? (
          <p className="mt-5 inline-flex min-h-11 items-center rounded-md bg-sea px-4 text-sm font-medium text-foam">From {promo.starting}</p>
        ) : null}

        {promo.images.length > 0 ? (
          <div className="mt-8">
            <p className="mb-3 text-sm text-mute">Select a flyer to enlarge it.</p>
            <div className={`grid gap-4 ${promo.images.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>
              {promo.images.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setOpenImage(src)}
                  className="flex cursor-zoom-in items-center justify-center overflow-hidden rounded-xl border border-line bg-foam p-3 text-left shadow-card"
                >
                  <img src={src} alt="" className="h-auto max-h-[32rem] w-auto max-w-full object-contain" />
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {promo.bookingDates || promo.travelDates ? (
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {promo.bookingDates ? (
              <div className="rounded-xl border border-line bg-foam p-5">
                <dt className="text-sm font-medium text-tide">Book by</dt>
                <dd className="mt-2 text-lg leading-snug text-ink">{promo.bookingDates}</dd>
              </div>
            ) : null}
            {promo.travelDates ? (
              <div className="rounded-xl border border-line bg-foam p-5">
                <dt className="text-sm font-medium text-tide">Travel dates</dt>
                <dd className="mt-2 text-lg leading-snug text-ink">{promo.travelDates}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {prices.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-display text-3xl text-ink">Fares on this promotion</h2>
            <ul className="mt-4 grid gap-3">
              {prices.map((row) => (
                <li key={row.dates + row.price} className="flex flex-col gap-1 rounded-xl border border-line bg-foam px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="text-base text-ink">{row.dates}</span>
                  <span className="font-medium text-ink">{row.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {days.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-display text-3xl text-ink">The routing</h2>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {days.map((day) => (
                <li key={day.label + day.text} className="rounded-xl border border-line bg-foam p-5">
                  <p className="text-sm font-medium text-tide">{day.label}</p>
                  {day.text ? <p className="mt-2 text-base leading-relaxed text-ink">{day.text}</p> : null}
                  {day.times ? <p className="mt-2 text-sm text-mute">{day.times}</p> : null}
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {note ? <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink">{note}</p> : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/quote"
            search={{ place: "Not sure yet", note: `Please book this promotion: ${promo.title}` }}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-5 text-sm font-medium text-foam hover:bg-coral-deep"
          >
            Ask us to book this
          </Link>
          <Link
            to="/sailings"
            hash="promotions"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-sea px-5 text-sm font-medium text-foam"
          >
            All promotions
          </Link>
        </div>
      </article>
      {openImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged flyer"
          onClick={() => setOpenImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
        >
          <button
            type="button"
            onClick={() => setOpenImage(null)}
            className="absolute top-4 right-4 inline-flex min-h-11 items-center rounded-md bg-foam px-4 text-sm font-medium text-ink"
          >
            Close
          </button>
          <img src={openImage} alt="" onClick={(event) => event.stopPropagation()} className="max-h-[92vh] max-w-[92vw] object-contain" />
        </div>
      ) : null}
    </Shell>
  );
}
