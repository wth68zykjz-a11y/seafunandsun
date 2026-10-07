import { createFileRoute, Link } from "@tanstack/react-router";
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
        "Request a cruise, resort, ski, or rail quote from Sea Fun & Sun in Farmington, Connecticut. No separate agent fee.",
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
        lede="Tell us the trip, and the flights, hotels, and excursions you want with it. A resort, a ski vacation, a rail trip, or a yacht starts here too. We reply the same day in most cases. There is no separate agent fee."
      />
      <p className="mx-auto max-w-6xl px-4 pb-8 text-base leading-relaxed text-ink">
        If you only need a published cruise fare,{" "}
        <Link to="/sailings" className="font-medium text-tide">
          search sailings
        </Link>{" "}
        and book the cabin there.
      </p>
      <ol className="mx-auto grid max-w-6xl gap-4 px-4 pb-10 sm:grid-cols-2">
        {[
          ["1. Tell us the trip", "Use the form, call, or text. Name the place, the dates, and who is traveling."],
          ["2. We price the pieces separately", "The cruise or hotel, the flight, and any nights before or after are quoted on their own, so you can see which one moved. A past-passenger number may improve the cruise price. A frequent-flyer number may improve the airfare. Military discounts are often available on both. Tell us if one of these applies."],
          ["3. You choose", "On a published sailing, you pick the date and the cabin in the booking system. Yacht sailings, many luxury hotels, and European sleeper trains have no public fare. Those come back as a quote."],
          ["4. You pay the supplier", "The card payment goes to the cruise line, resort, hotel, or operator. We do not hold the card. There is no separate agent fee. The supplier pays our commission."],
          ["5. One agent handles the booking", "That person arranges the trip, takes the deposit, watches the final-payment date, makes a change if you need one, and matches the flight to the ship’s embarkation and return."],
        ].map(([title, text]) => (
          <li key={title} className="rounded-xl border border-line bg-foam p-5">
            <h2 className="font-display text-2xl text-ink">{title}</h2>
            <p className="mt-2 text-sm text-mute">{text}</p>
          </li>
        ))}
      </ol>
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
