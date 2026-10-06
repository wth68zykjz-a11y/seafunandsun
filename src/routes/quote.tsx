import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { PageIntro, Shell } from "@/components/site-chrome";
import { agentQuoteNote, phone, phoneHref } from "@/data/links";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): { place?: string; note?: string } => ({
    place: typeof search.place === "string" && search.place ? search.place.slice(0, 80) : undefined,
    note: typeof search.note === "string" && search.note ? search.note.slice(0, 400) : undefined,
  }),
  head: () =>
    pageHead({
      title: "Request a quote",
      description:
        "Request a quote for a cruise, an expedition, a resort, a ski vacation, or a rail trip from Sea Fun & Sun in Farmington, Connecticut. Saved for us. No separate agent fee.",
      path: "/quote",
      image: "/media/page-quote.jpg",
    }),
  component: QuotePage,
});

function QuotePage() {
  const { place, note } = Route.useSearch();
  return (
    <Shell>
      <PageIntro
        kicker="A quote"
        title="Tell us where you want to go."
        lede="Cruises, expeditions, resorts, ski vacations, and rail trips. We reply the same day in most cases. The request is kept for us and is not posted on the site. There is no separate agent fee."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <img
            src="/media/page-quote.jpg"
            alt="A coffee and a closed notebook on a table above a quiet harbor"
            className="mb-6 aspect-photo max-h-72 w-full rounded-xl object-cover"
          />
          <QuoteForm preset={place ?? ""} note={note ?? ""} chooseTrip />
        </div>
        <aside className="lg:col-span-2">
          <div className="rounded-xl bg-sea p-5 text-foam">
            <h2 className="font-display text-2xl">Prefer to speak with someone now?</h2>
            <p className="mt-3 text-sm text-foam/80">
              Call or text{" "}
              <a href={phoneHref} className="font-medium text-gold">
                {phone}
              </a>
              , or write to Booking@Seafunandsun.com. We are in Farmington, Connecticut, weekdays from about 9 to 6 Eastern.
            </p>
            <p className="mt-4 text-sm text-foam/80">{agentQuoteNote}</p>
            <p className="mt-4 text-sm text-foam/80">
              Payment, when you book, goes to the cruise line, resort, or operator. We never hold your card.
            </p>
          </div>
        </aside>
      </div>
    </Shell>
  );
}
