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
        title="How a trip is planned."
        lede="Tell us the place and the dates. You see the price before anything is booked."
      />
      <ol className="mx-auto grid max-w-6xl gap-4 px-4 pb-10 sm:grid-cols-2">
        {[
          ["1. The trip", "Call, text, or use the form. Name the place, the dates, and whether anyone has a past-passenger number, a frequent-flyer number, or a military discount."],
          ["2. The prices, listed separately", "The cruise or hotel, the flight, the rail ticket, and any nights before or after are priced on their own, so you can see each part."],
          ["3. You choose", "You see the cabin, the room, or the train compartment, and the price, before anything is booked. Yacht sailings, many luxury hotels, and European sleeper trains are priced by request."],
          ["4. You pay the supplier", "The card payment goes to the cruise line, the hotel, or the rail operator."],
          ["5. One agent stays with the booking", "That person takes the deposit, watches the final-payment date, and matches the flight to the day you leave and the day you return."],
        ].map(([title, text]) => (
          <li key={title} className="rounded-xl border border-line bg-foam p-5">
            <h2 className="font-display text-2xl text-ink">{title}</h2>
            <p className="mt-2 text-base leading-relaxed text-ink">{text}</p>
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
            <p className="mt-3 text-base leading-relaxed text-foam/90">
              Call or text{" "}
              <a href={phoneHref} className="font-medium text-gold">
                {phone}
              </a>
              , or write to Booking@Seafunandsun.com. We are in Farmington, Connecticut, weekdays from about 9 to 6 Eastern.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foam/90">{agentQuoteNote}</p>
            <p className="mt-4 text-base leading-relaxed text-foam/90">
              Payment, when you book, goes to the cruise line, resort, or operator. We never hold your card.
            </p>
          </div>
        </aside>
      </div>
    </Shell>
  );
}
