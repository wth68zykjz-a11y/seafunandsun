import { createFileRoute, Link } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { LogoMark, Shell } from "@/components/site-chrome";
import { guides } from "@/data/guides";
import { phone, phoneHref } from "@/data/links";
import { faqLd, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({
      title: "Sea Fun & Sun | Cruises, resorts, ski vacations, and rail trips — Farmington, CT",
      description:
        "When we book a cruise, a resort, a ski vacation, or a rail trip, one agent handles it. Sea Fun & Sun, Farmington, Connecticut. No separate agent fee.",
      path: "/",
      image: "/media/card-cruises.webp",
    });
    return {
      ...head,
      links: [
        {
          rel: "preload",
          as: "image",
          href: "/media/card-cruises-sm.webp",
          media: "(max-width: 640px)",
          fetchPriority: "high",
        },
        ...(head.links ?? []),
      ],
    };
  },
  component: Home,
});

const faqs = [
  {
    q: "Who is Sea Fun & Sun?",
    a: "Sea Fun & Sun is an independent travel agency in Farmington, Connecticut. It books ocean and river cruises, expedition ships, all-inclusive resorts, ski vacations, and rail trips. Call or text (959) 666-2062, or write to Booking@Seafunandsun.com.",
  },
  {
    q: "What if my plans change after I book?",
    a: "Call us before you contact the supplier. We handle date changes with them. The supplier’s refund policy says which payments can come back. We do not keep your payment, and we cannot return money the supplier will not release.",
  },
  {
    q: "How do I pay?",
    a: "You pay the cruise line, resort, or operator. We do not hold your card.",
  },
  {
    q: "Where are you based?",
    a: "We are based in Farmington, Connecticut. You call, text, or email. We book for travelers across the country.",
  },
  {
    q: "Why is there no fare for some trips?",
    a: "Some cruise lines, most yacht sailings, many luxury hotels, and the European sleeper trains have no public fare. An agent requests that price.",
  },
];

type Door = {
  kicker: string;
  title: string;
  body: string;
  image: string;
  mobileImage?: string;
  alt: string;
  cta: string;
  tone: "sea" | "foam";
  keywords: string;
} & ({ to: "/destinations" | "/resorts" | "/ski" | "/rail" } | { to: "/destinations/$slug"; slug: "expedition" });

const doors: Door[] = [
  {
    kicker: "Ships",
    title: "Cruises",
    body: "You might see a glacier in the morning, swim a reef in the afternoon, or wake in a new harbor. Each region has its own page.",
    image: "/media/card-cruises.webp",
    mobileImage: "/media/card-cruises-sm.webp",
    alt: "Cruise ships docked along a pier in turquoise water",
    cta: "See destinations",
    tone: "sea",
    keywords: "ocean river caribbean alaska mediterranean europe hawaii bermuda asia australia",
    to: "/destinations",
  },
  {
    kicker: "Beach",
    title: "Resorts",
    body: "The room opens onto the water. We book Sandals, Beaches, Hyatt, Secrets, and Club Med.",
    image: "/media/card-resorts.webp",
    mobileImage: "/media/card-resorts-sm.webp",
    alt: "An overwater villa with its own pool on a turquoise lagoon",
    cta: "See resorts",
    tone: "foam",
    keywords: "all inclusive beach sandals hyatt secrets club med",
    to: "/resorts",
  },
  {
    kicker: "Snow",
    title: "Ski",
    body: "You point the skis downhill and the speed arrives all at once. Club Med often includes the meals and the lift pass. At hotels in Aspen, Banff, the Alps, and Niseko, the pass is usually separate.",
    image: "/media/card-ski.webp",
    mobileImage: "/media/card-ski-sm.webp",
    alt: "A person in a red jacket facing the Matterhorn across a snowfield",
    cta: "See ski vacations",
    tone: "sea",
    keywords: "snow club med aspen courchevel zermatt niseko",
    to: "/ski",
  },
  {
    kicker: "Small ships",
    title: "Expedition",
    body: "You ride a small boat to a beach of ice, and there is no town there. Those cruises go to Antarctica, the Arctic, and the Galápagos.",
    image: "/media/card-expedition.webp",
    mobileImage: "/media/card-expedition-sm.webp",
    alt: "An expedition ship among Antarctic ice, with a turquoise iceberg in front",
    cta: "See expedition cruises",
    tone: "foam",
    keywords: "antarctica arctic galapagos zodiac small ship",
    to: "/destinations/$slug",
    slug: "expedition",
  },
  {
    kicker: "On the ground",
    title: "Rail and land",
    body: "You see a canyon from the glass car, or you sit down to dinner as the station lights fall behind. We book scenic trains here, sleeper trains in Europe, and a hotel night between them.",
    image: "/media/card-rail.webp",
    mobileImage: "/media/card-rail-sm.webp",
    alt: "The Glacier Express crossing a stone viaduct in the Alps",
    cta: "See rail and land",
    tone: "sea",
    keywords: "train europe hotel amtrak land",
    to: "/rail",
  },
];

function DoorCard({ door, first = false }: { door: Door; first?: boolean }) {
  const className = "flex h-full flex-col overflow-hidden rounded-xl border border-line bg-foam";
  const small = door.mobileImage ?? door.image;
  const face = (
    <>
      <img
        src={small}
        srcSet={`${small} 640w, ${door.image} 1200w`}
        sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 30vw"
        alt={door.alt}
        width={640}
        height={427}
        loading={first ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={first ? "high" : "low"}
        className="h-56 w-full object-cover sm:h-64"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-tide">{door.kicker}</p>
        <h2 className="mt-2 font-display text-3xl text-ink">{door.title}</h2>
        <p className="mt-3 flex-1 text-base leading-relaxed text-ink">{door.body}</p>
        <span className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam">{door.cta}</span>
      </div>
    </>
  );
  if (door.to === "/destinations/$slug") {
    return (
      <Link to="/destinations/$slug" params={{ slug: door.slug }} className={className}>
        {face}
      </Link>
    );
  }
  return (
    <Link to={door.to} className={className}>
      {face}
    </Link>
  );
}

function Home() {
  return (
    <Shell>
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-[url('/media/page-map.png')] bg-cover bg-center opacity-[0.045] lg:block"
        />
        <JsonLd data={faqLd(faqs)} />
        <section className="mx-auto max-w-6xl px-4 pt-6 lg:pt-10">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0c2340] via-[#1a4d73] to-[#d4923c] px-5 py-8 text-foam lg:px-12 lg:py-16">
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_15rem]">
              <div>
                <p className="hero-copy text-base font-medium text-foam">We are based in Farmington, Connecticut. You can call, text, or email.</p>
                <h1 className="hero-title mt-3 text-4xl text-foam sm:mt-4 sm:text-6xl">
                  The right trip,
                  <span className="mt-2 block font-medium italic text-gold">booked with care.</span>
                </h1>
                <p className="hero-copy mt-4 max-w-xl text-base text-foam sm:mt-6 sm:text-lg">
                  When we book a cruise, a resort, a ski vacation, or a rail trip, one agent handles it from the first quote until you are home.
                </p>
                <div className="mt-6 w-full sm:mt-8 sm:inline-flex sm:w-auto sm:flex-col sm:items-center">
                  <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <Link to="/quote" className="inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-5 text-sm font-medium text-foam hover:bg-coral-deep">
                      Request a quote
                    </Link>
                    <a href="#trips" className="inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-5 text-sm font-medium text-ink hover:bg-gold-deep">
                      Select a category
                    </a>
                  </div>
                  <dl className="mt-5 grid w-full grid-cols-2 divide-x divide-gold/40 border-t border-gold/30 pt-4 text-center text-gold sm:mt-8 sm:flex sm:w-auto sm:items-center sm:justify-center sm:gap-x-8 sm:divide-x-0 sm:border-0 sm:pt-0">
                    <div className="px-2 sm:flex sm:items-center sm:gap-3 sm:px-0">
                      <svg viewBox="0 0 36 36" className="mx-auto hidden size-9 sm:block" fill="none" aria-hidden="true">
                        <circle cx="16" cy="11" r="4" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M8 26c1.4-4.2 4-6.2 8-6.2s6.6 2 8 6.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M24 22.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6L24 28.4l-2.4 1.3.5-2.6-1.9-1.8 2.6-.4L24 22.5z" fill="currentColor" />
                      </svg>
                      <dd className="hero-stat text-3xl leading-none sm:text-4xl">1</dd>
                      <dt className="hero-copy mt-1 text-sm font-medium leading-tight sm:mt-0">
                        One agent
                        <br />
                        on your booking
                      </dt>
                    </div>
                    <div className="hidden h-10 w-px bg-gold sm:block" aria-hidden="true" />
                    <div className="px-2 sm:flex sm:items-center sm:gap-3 sm:px-0">
                      <svg viewBox="0 0 36 36" className="mx-auto hidden size-9 sm:block" fill="none" aria-hidden="true">
                        <circle cx="18" cy="18" r="11" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M18 11v14M15 14.5c.8-1 1.8-1.5 3-1.5 1.8 0 3 1 3 2.4S19.8 18 18 18s-3 .8-3 2.3 1.3 2.4 3.1 2.4c1.2 0 2.2-.4 3-1.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      <dd className="hero-stat text-3xl leading-none sm:text-4xl">$0</dd>
                      <dt className="hero-copy mt-1 text-sm font-medium leading-tight sm:mt-0">
                        No agent fee
                      </dt>
                    </div>
                  </dl>
                </div>
              </div>
              <LogoMark className="hero-logo mx-auto hidden w-44 lg:block lg:w-56" />
            </div>
          </div>
        </section>

        <section id="trips" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-8 pb-6 lg:pt-14">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">Select a category.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {doors.map((door, index) => (
              <DoorCard key={door.title} door={door} first={index === 0} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <Link to="/sailings" hash="promotions" className="grid overflow-hidden rounded-xl border border-line bg-foam md:grid-cols-[18rem_1fr]">
            <img
              src="/media/page-sailings-sm.webp"
              alt="The bow of a white ship in calm water"
              width={640}
              height={427}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="h-48 w-full object-cover md:h-full"
            />
            <div className="flex flex-col p-6">
              <h2 className="font-display text-3xl text-ink">Current promotions</h2>
              <p className="mt-3 text-base leading-relaxed text-ink">These are offers we can book for you, on ships and at resorts. Tell us which one you want. We confirm the price before anything is booked.</p>
              <span className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-tide px-4 text-sm font-medium text-foam sm:w-fit">See promotions</span>
            </div>
          </Link>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">Contact us to start planning your vacation.</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink">
            Call, text, or use the form. We arrange the trip from your home to the destination, and the return.
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["1. Tell us the trip", "Use the form, call, or text. Name the place and the dates."],
              ["2. We send the price", "You see the sailing or the hotel, the cabin or the room, and the flights if you want them. You approve it before anything is booked."],
              ["3. You pay the supplier", "The card payment goes to the cruise line, the resort, or the operator. We do not hold the card."],
            ].map(([title, text]) => (
              <li key={title} className="rounded-xl border border-line bg-foam p-5">
                <h3 className="font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-6 rounded-xl border border-line bg-foam p-5 sm:grid-cols-[auto_1fr] sm:p-6">
            <LogoMark className="logo-mark size-16" />
            <div>
              <h2 className="font-display text-3xl text-ink">Laura S books the trip.</h2>
              <p className="mt-3 text-base leading-relaxed text-ink">
                She works from Farmington, Connecticut. The same agent quotes the cruise, the resort, the ski vacation, or the rail trip, and stays with the booking until you are home.
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink">
                Call or text{" "}
                <a className="font-medium text-tide" href={phoneHref}>
                  {phone}
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {guides.map((guide) => (
              <Link key={guide.slug} to="/guides/$slug" params={{ slug: guide.slug }} className="rounded-xl border border-line bg-foam p-5 hover:border-tide">
                <h3 className="font-display text-2xl text-ink">{guide.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink">{guide.lede}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="font-display text-3xl sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none font-medium marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-tide group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-mute">
                  {item.a}{" "}
                  {item.q.startsWith("What if") ? (
                    <Link to="/policies/$doc" params={{ doc: "refund" }} className="text-tide underline-offset-2 hover:underline">
                      Read the refund policy.
                    </Link>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section id="quote" className="relative mx-auto grid max-w-6xl scroll-mt-24 gap-8 px-4 pb-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-tide">A quote</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">A few details are enough to begin.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink">Tell us the destination and the dates. Add flights, a hotel, or an excursion if you want them arranged.</p>
            <ul className="mt-6 grid gap-2 text-base">
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
            </ul>
          </div>
          <QuoteForm preset="" chooseTrip />
        </section>
      </div>
    </Shell>
  );
}
