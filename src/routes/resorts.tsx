import { createFileRoute, Link } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { phone, phoneHref } from "@/data/links";
import { breadcrumbLd, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resorts")({
  head: () =>
    pageHead({
      title: "All-inclusive resorts",
      description:
        "All-inclusive beach resorts and Disney park stays, booked by Sea Fun & Sun in Farmington, Connecticut. The quote names the room and can include flights.",
      path: "/resorts",
      image: "/media/resort-villas.jpg",
    }),
  component: ResortsPage,
});

const included = [
  "The quote names the room before you pay. A category called deluxe is not an ocean view unless the description says ocean view.",
  "Breakfast, lunch, and dinner at the restaurants on the inclusion list. A few of those restaurants take reservations, and those tables fill.",
  "House wine, beer, and a defined liquor list. The top shelf is often a separate charge.",
  "Non-motorized water sports and the fitness room, at most of the properties we book.",
  "Gratuities, at Sandals, Beaches, and much of the Hyatt Inclusive Collection. Not at every brand. We check.",
];

const excluded = [
  "Premium liquor, reserve wine, and some specialty restaurants.",
  "Spa treatments and salon appointments.",
  "Scuba certification, jet skis, and golf.",
  "Tours that leave the property.",
  "Airport transfers, unless the rate says the transfer is included.",
  "A stay over a holiday often has a minimum number of nights. The rate at Christmas is higher than the rate in summer.",
];

const regions = [
  {
    title: "Adults only, Caribbean",
    body: "Jamaica, St. Lucia, Antigua, Barbados, and Grenada. Sandals is a couples resort. Secrets, Excellence, and the smaller couples resorts are alternatives, not copies of Sandals. Say whether you want a quiet pool or a resort built around bars and shows.",
  },
  {
    title: "Families",
    body: "Beaches in Turks & Caicos and Jamaica, Hyatt Ziva, Dreams, and Club Med’s beach villages. Ask the age the kids’ club accepts, and whether the rooms connect. A reunion with teenagers needs a larger club and rooms that connect. A trip with toddlers needs a club that takes young children. Ski, including Club Med on snow, is its own page.",
  },
  {
    title: "Mexico",
    body: "Cancún and the Riviera Maya for a short flight and a long beach. Los Cabos and Puerto Vallarta when you want the Pacific and a drier winter. Hyatt Ziva and Zilara, Secrets, Excellence, and Palace are the lines we set side by side. We look at the beach in front of the hotel, not the brochure map of the coast.",
  },
  {
    title: "Punta Cana",
    body: "A wide range of properties and a straightforward flight from the Northeast. Prices vary widely from one hotel to the next. The quote names the room category and which stretch of beach it faces, rather than treating the Dominican Republic as one resort.",
  },
  {
    title: "Overwater villas",
    body: "The Maldives take a much longer flight and a much higher nightly rate than a Caribbean resort. An agent requests most of those stays, because they are not posted. If you want to book that stay, say so. Booking a Caribbean week does not take you to the Maldives.",
  },
];

const photos = [
  ["/media/resort-palms.jpg", "A palm-lined pool above the open ocean"],
  ["/media/page-shore.jpg", "A pale beach and small waves at sunrise"],
  ["/media/resort-pool.jpg", "Lounge chairs and a still pool at a resort after dusk"],
] as const;

function ResortsPage() {
  return (
    <Shell>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "All-inclusive resorts", path: "/resorts" },
        ])}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-8 lg:grid-cols-2">
        <img
          src="/media/resort-villas.jpg"
          alt="Overwater villas on a turquoise lagoon, seen from above"
          fetchPriority="high"
          decoding="async"
          className="aspect-photo w-full rounded-xl object-cover"
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium text-tide">All-inclusive resorts</p>
          <h1 className="mt-2 font-display text-3xl sm:text-5xl">The rate includes the meals.</h1>
          <p className="mt-4 text-lg text-mute">
            The quote says which room you are booking, such as a garden view or an ocean-view suite, and it can also include the flights, the airport transfer, and a day trip off the property. We look at what the rate covers, which airport you fly from, and whether the property fits the people traveling.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/quote"
              search={{ place: "All-inclusive resort" }}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
            >
              Request a quote
            </Link>
            <a
              href={phoneHref}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-foam px-4 text-sm font-medium text-ink"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl space-y-4 text-lg">
          <p>
            An all-inclusive rate is a room plus a meal plan. It does not cover everything. At most of the resorts we book, the meals and a set of drinks are included. The spa, the motorized water sports, a day trip off the property, and sometimes the airport transfer are not. We read that list before we recommend the hotel.
          </p>
          <p>
            Resorts also differ by who they accept. Sandals, Secrets, Breathless, and Hyatt Zilara are adults only. Beaches, Hyatt Ziva, Dreams, and Club Med’s beach villages take children, and the kids’ clubs do not all start at the same age. A couples resort with a quiet pool is the wrong booking for a reunion.{" "}
            <Link to="/ski" className="font-medium text-tide">
              Ski, including Club Med on snow, is its own page.
            </Link>
          </p>
          <p>
            For a traveler leaving Connecticut, the airfare is often the larger cost. Hartford, Boston, and the New York airports do not all serve the same islands. A “free flight” offer is often a higher room rate that assumes you take the resort’s air. We price the room and the flights separately, so you can see the hotel cost and the airfare on their own.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-xl border border-line bg-foam p-5">
            <h2 className="font-display text-2xl">What the rate usually includes</h2>
            <ul className="mt-3 grid gap-2 text-base leading-relaxed text-ink">
              {included.map((item) => (
                <li key={item} className="border-t border-line pt-2 first:border-0 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-line bg-foam p-5">
            <h2 className="font-display text-2xl">What it often leaves out</h2>
            <ul className="mt-3 grid gap-2 text-base leading-relaxed text-ink">
              {excluded.map((item) => (
                <li key={item} className="border-t border-line pt-2 first:border-0 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {regions.map((item) => (
            <article key={item.title} className="rounded-xl border border-line p-5">
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-ink">{item.body}</p>
            </article>
          ))}
        </div>

        <article className="mt-4 grid overflow-hidden rounded-xl border border-line bg-foam md:grid-cols-[18rem_1fr]">
          <img
            src="/media/disney-resort.jpg"
            alt="Disney's Wilderness Lodge, with the pool in front of the hotel"
            loading="lazy"
            decoding="async"
            className="aspect-photo h-full w-full object-cover"
          />
          <div className="flex flex-col p-5 sm:p-6">
            <p className="text-sm font-medium text-tide">Parks</p>
            <h2 className="mt-2 font-display text-3xl">Disney</h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Walt Disney World and Disneyland are park stays, not all-inclusive beach weeks. The room, the park tickets, and a dining plan are usually separate unless the package says otherwise. A value resort is farther from the parks. A monorail or Skyliner resort is on the park transport.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Aulani, on Oahu, is a Disney resort without a theme park next door. Disney Cruise Line is a ship, and it is booked with the other cruises. A few days at the resort before or after the ship is a separate stay.
            </p>
            <Link
              to="/quote"
              search={{ place: "Disney resort" }}
              className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
            >
              Request a Disney stay
            </Link>
          </div>
        </article>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink">
          <Link to="/ski" className="font-medium text-tide">
            Ski vacations
          </Link>
          , Club Med and luxury hotels, are booked separately from a beach week.
        </p>

        <article className="mt-4 rounded-xl bg-sea p-5 text-foam">
          <h2 className="font-display text-2xl">When to go</h2>
          <p className="mt-3 max-w-3xl text-foam/85">
            Caribbean hurricane season runs June through November. The resort rate for a late-summer week can be lower, and that week can also carry a real storm risk. We will say which of those applies to your dates. The Mexican Caribbean is hot and wet in summer and more reliable from December through April. School breaks and the weeks around Christmas sell out, and the rate for those weeks is higher than the rate for a week in September. Overwater villas are booked on their own dates, and an agent almost always requests those rates.
          </p>
        </article>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink">
          A posted nightly rate is not always the rate we can book. An agent requests preferred rates, wedding blocks, and most villa stays. Send the dates and who is traveling. You pay the resort. We do not hold the payment.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {photos.map(([src, alt]) => (
            <img key={src} src={src} alt={alt} loading="lazy" decoding="async" className="aspect-photo w-full rounded-xl object-cover" />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-tide">The property, not a slogan</p>
          <h2 className="mt-2 font-display text-4xl">Tell us the week and who is going.</h2>
          <p className="mt-4 text-mute">
            Adults or a family, a beach week or an overwater villa, and a budget range. If you would rather we propose the island, say so. We reply the same day in most cases.
          </p>
          <ul className="mt-6 grid gap-2 text-sm">
            <li>
              Call or text{" "}
              <a className="font-medium text-tide" href={phoneHref}>
                {phone}
              </a>
            </li>
            <li>
              Email{" "}
              <a className="font-medium text-tide" href="mailto:Booking@Seafunandsun.com">
                Booking@Seafunandsun.com
              </a>
            </li>
            <li>Farmington, CT · weekdays, about 9 to 6 Eastern</li>
          </ul>
        </div>
        <QuoteForm preset="All-inclusive resort" chooseTrip />
      </section>
    </Shell>
  );
}
