import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { LogoMark, Shell } from "@/components/site-chrome";
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
          media: "(max-width: 1023px)",
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
    a: "Sea Fun & Sun is an independent travel agency in Farmington, Connecticut. It books ocean and river cruises, expedition ships, all-inclusive resorts, ski vacations, and rail trips, including luxury European trains. There is no separate agent fee. Call or text (959) 666-2062, or write to Booking@Seafunandsun.com.",
  },
  {
    q: "What if my plans change after I book?",
    a: "Call us before you contact the supplier. We handle date changes with them. What can be returned is in the refund policy. We do not keep your payment, and we cannot refund money the supplier will not release.",
  },
  {
    q: "How do I pay?",
    a: "You pay the cruise line, resort, or operator. We do not hold your card.",
  },
  {
    q: "Where are you based?",
    a: "We are based in Farmington, Connecticut. There is no office to visit. You call, text, or email, and one agent handles the booking. That is the same for a traveler in Connecticut and for a traveler in another state.",
  },
  {
    q: "Why is there no fare for some trips?",
    a: "Some cruise lines, most yacht sailings, many luxury hotels, and the European sleeper trains do not publish a fare you can book yourself. Those trips require a quote. There is no separate agent fee.",
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
    body: "Ocean and river cruises, with a page for each region, the usual routing, and the common ports of call.",
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
    body: "Sandals, Beaches, Hyatt, Secrets, and Club Med on the beach. The quote names what the rate does not cover.",
    image: "/media/card-resorts.webp",
    alt: "A palm-lined pool above the open ocean",
    cta: "See resorts",
    tone: "foam",
    keywords: "all inclusive beach sandals hyatt secrets club med",
    to: "/resorts",
  },
  {
    kicker: "Snow",
    title: "Ski",
    body: "Club Med, with meals and often the pass and lessons in one rate. Luxury hotels in Aspen, Banff, Mammoth, Whistler, the Alps, and Niseko, where the pass is usually separate. Some of those mountains take Ikon or Epic.",
    image: "/media/card-ski.webp",
    alt: "A person in a red jacket facing the Matterhorn across a snowfield",
    cta: "See ski vacations",
    tone: "sea",
    keywords: "snow club med aspen courchevel zermatt niseko",
    to: "/ski",
  },
  {
    kicker: "Small ships",
    title: "Expedition",
    body: "Antarctica, the Arctic, and the Galápagos, on ships small enough that the landing is the day.",
    image: "/media/card-expedition.webp",
    alt: "Northern lights over a snowfield",
    cta: "See expedition cruises",
    tone: "foam",
    keywords: "antarctica arctic galapagos zodiac small ship",
    to: "/destinations/$slug",
    slug: "expedition",
  },
  {
    kicker: "On the ground",
    title: "Rail and land",
    body: "Scenic trains in North America, luxury sleepers in Europe, and the hotel nights between them. A guided tour may be available, depending on the city.",
    image: "/media/card-rail.webp",
    alt: "A passenger train beside a western river with mountains behind",
    cta: "See rail and land",
    tone: "sea",
    keywords: "train europe hotel amtrak land",
    to: "/rail",
  },
];

function DoorFace({ door, eager }: { door: Door; eager?: boolean }) {
  return (
    <div className={`grid lg:grid-cols-2 ${door.tone === "sea" ? "bg-sea text-foam" : "bg-foam text-ink"}`}>
      <div className="relative h-52 overflow-hidden sm:h-64 lg:h-auto lg:min-h-[32rem]">
        {door.mobileImage ? (
          <picture>
            <source media="(max-width: 1023px)" srcSet={door.mobileImage} />
            <img
              src={door.image}
              alt={door.alt}
              width={1100}
              height={733}
              draggable={false}
              decoding="async"
              loading={eager ? "eager" : "lazy"}
              fetchPriority={eager ? "high" : "low"}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        ) : (
          <img
            src={door.image}
            alt={door.alt}
            width={1100}
            height={733}
            draggable={false}
            decoding="async"
            loading={eager ? "eager" : "lazy"}
            fetchPriority="low"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-col justify-center px-5 py-5 lg:px-12 lg:py-10">
        <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${door.tone === "sea" ? "text-gold" : "text-tide"}`}>{door.kicker}</p>
        <h2 className="mt-2 font-display text-3xl lg:text-5xl">{door.title}</h2>
        <p className={`mt-3 line-clamp-3 max-w-md text-base leading-relaxed lg:line-clamp-none lg:text-lg ${door.tone === "sea" ? "text-foam/85" : "text-mute"}`}>{door.body}</p>
        <span
          className={`mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 text-sm font-medium lg:w-fit lg:justify-start ${
            door.tone === "sea" ? "bg-gold text-ink" : "bg-coral text-foam"
          }`}
        >
          {door.cta}
        </span>
      </div>
    </div>
  );
}

function DoorSlide({ door, eager }: { door: Door; eager?: boolean }) {
  const className = "block h-full";
  if (door.to === "/destinations/$slug") {
    return (
      <Link to="/destinations/$slug" params={{ slug: door.slug }} className={className}>
        <DoorFace door={door} eager={eager} />
      </Link>
    );
  }
  return (
    <Link to={door.to} className={className}>
      <DoorFace door={door} eager={eager} />
    </Link>
  );
}

function TripCarousel({ items }: { items: Door[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const startX = useRef(0);
  const moved = useRef(0);
  const [index, setIndex] = useState(0);
  const count = items.length;
  const key = items.map((door) => door.title).join("|");

  const scrollToIndex = (next: number) => {
    const el = scroller.current;
    if (!el || count === 0) return;
    const i = (next + count) % count;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  useEffect(() => {
    indexRef.current = 0;
    setIndex(0);
    scroller.current?.scrollTo({ left: 0 });
  }, [key]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = el.clientWidth || 1;
        const i = Math.max(0, Math.min(count - 1, Math.round(el.scrollLeft / width)));
        if (i !== indexRef.current) {
          indexRef.current = i;
          setIndex(i);
        }
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, [count, key]);

  return (
    <div>
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-xl shadow-card [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="Kinds of trips"
        onPointerDown={(event) => {
          startX.current = event.clientX;
          moved.current = 0;
        }}
        onPointerMove={(event) => {
          moved.current = Math.max(moved.current, Math.abs(event.clientX - startX.current));
        }}
        onClickCapture={(event) => {
          if (moved.current > 12) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      >
        {items.map((door, i) => (
          <div key={door.title} className="min-w-full shrink-0 basis-full snap-start">
            <DoorSlide door={door} eager={i === 0} />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => scrollToIndex(index - 1)}
          aria-label="Previous category"
          className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-foam text-lg text-ink sm:w-auto sm:px-4 sm:text-sm sm:font-medium"
        >
          <span className="sm:hidden" aria-hidden="true">‹</span>
          <span className="hidden sm:inline">Previous</span>
        </button>
        <div className="flex items-center gap-1.5 sm:hidden" aria-hidden="true">
          {items.map((door, dot) => (
            <span key={door.title} className={`h-1.5 rounded-full ${dot === index ? "w-6 bg-tide" : "w-1.5 bg-line"}`} />
          ))}
        </div>
        <p className="hidden text-sm font-medium text-ink sm:block" aria-live="polite">
          {items[index]?.title} · {index + 1} of {count}
        </p>
        <p className="sr-only" aria-live="polite">
          {items[index]?.title}, {index + 1} of {count}
        </p>
        <button
          type="button"
          onClick={() => scrollToIndex(index + 1)}
          aria-label="Next category"
          className="inline-flex size-11 items-center justify-center rounded-md bg-tide text-lg text-foam sm:w-auto sm:px-4 sm:text-sm sm:font-medium"
        >
          <span className="sm:hidden" aria-hidden="true">›</span>
          <span className="hidden sm:inline">Next</span>
        </button>
      </div>
    </div>
  );
}

function Home() {
  return (
    <Shell>
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/media/page-map.png')] bg-cover bg-center opacity-[0.045]"
        />
        <JsonLd data={faqLd(faqs)} />
        <section className="mx-auto max-w-6xl px-4 pt-6 lg:pt-10">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0c2340] via-[#1a4d73] to-[#d4923c] px-5 py-8 text-foam lg:px-12 lg:py-16">
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_15rem]">
              <div>
                <p className="text-sm font-medium text-foam/75">Independent travel company · Farmington, CT</p>
                <h1 className="mt-3 font-display text-4xl leading-none text-foam sm:mt-4 sm:text-6xl">
                  The right trip,
                  <span className="mt-2 block font-medium italic text-gold">booked with care.</span>
                </h1>
                <p className="mt-4 max-w-xl text-base text-foam/85 sm:mt-6 sm:text-lg">
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
                      <dd className="font-display text-3xl leading-none sm:text-4xl">1</dd>
                      <dt className="mt-1 text-sm font-medium leading-tight sm:mt-0">
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
                      <dd className="font-display text-3xl leading-none sm:text-4xl">$0</dd>
                      <dt className="mt-1 text-sm font-medium leading-tight sm:mt-0">
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

        <section id="trips" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-8 pb-10 lg:pt-14 lg:pb-16">
          <p className="text-sm font-medium text-tide">Select one</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl text-ink sm:text-4xl">Select a category.</h2>
          <div className="mt-8">
            <TripCarousel items={doors} />
          </div>
          <Link
            to="/ports"
            className="mt-8 grid overflow-hidden rounded-xl border border-line bg-foam md:grid-cols-[18rem_1fr]"
          >
            <img
              src="/media/ports/miami.webp"
              alt="Miami’s waterfront, a common departure port for Caribbean cruises"
              width={1400}
              height={933}
              loading="lazy"
              decoding="async"
              className="aspect-photo h-48 w-full object-cover md:h-full"
            />
            <div className="flex flex-col p-6 sm:p-8">
              <p className="text-sm font-medium text-tide">Departure ports</p>
              <h3 className="mt-2 font-display text-3xl text-ink">Learn about common departure ports</h3>
              <p className="mt-3 text-ink md:hidden">
                You will remember the city you sailed from. A week out of Miami or Fort Lauderdale spends more nights in the Caribbean than the same week out of New York, New Jersey, Baltimore, or Boston. Alaska usually starts in Seattle or Vancouver. If you stay a few days before or after, the ship is not counting you back. You can use the mornings, the afternoons, and the evenings to walk, talk with people, and eat where you want, whether that is a famous restaurant or a small local place.
              </p>
              <p className="mt-3 hidden text-ink md:block">
                People remember the city they sailed from as much as the ports along the way. A week out of Miami or Fort Lauderdale spends more nights in the Caribbean than the same week out of New York, New Jersey, Baltimore, or Boston, which adds sea days. Alaska usually starts in Seattle or Vancouver. Seattle is the round trip through the Inside Passage. Vancouver is the Canadian start, often one way to Seward or Whittier, and a passport is required. The same is true of Barcelona, Rome, Southampton, Singapore, Tokyo, and Sydney.
              </p>
              <p className="mt-3 hidden text-ink md:block">
                It is worth spending a few days in the city before you sail, or after you return. The ship is not counting you back to the gangway, so the mornings and afternoons are yours as well as the evenings. You can walk, talk with people, and sit down when you want to. Lunch might be a small local place, such as a wine bar, a noodle counter, or a café with a short menu. Dinner might be a famous restaurant, such as a Michelin table or a harbor restaurant. You can spend a morning in a museum if you want to be indoors. Vancouver is a good example: the mountains and the harbor are right there, and you are already in town for the ship. The pages list where those ships usually go, which airlines serve the city, the local time, and the currency you will use. In Vancouver that currency is the Canadian dollar.
              </p>
              <span className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-coral px-5 text-sm font-medium text-foam sm:w-fit">
                See the departure and embarkation ports
              </span>
            </div>
          </Link>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-tide">Farmington, Connecticut</p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Based here. The booking is by phone.</h2>
            <p className="mt-4 text-lg text-ink">
              Sea Fun & Sun is a Farmington company. There is no office to visit. A quote starts by phone, text, or email, and one agent stays with it. Travelers in Connecticut book this way, and so do travelers in other states.
            </p>
            <p className="mt-4 text-ink">
              When the trip starts with a flight from here, we check Bradley first, then Boston and the New York airports. The ship or the resort can still leave from Miami, Seattle, Vancouver, or whichever port the itinerary needs.
            </p>
          </div>
          <iframe
            title="Map of Farmington, Connecticut"
            src="https://maps.google.com/maps?q=Farmington,%20Connecticut&hl=en&z=11&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full rounded-xl border border-line"
          />
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

        <section className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-tide">A quote</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Tell us the trip, or let us propose it.</h2>
            <p className="mt-4 text-mute">The category, the month, and who is traveling. We reply the same day in most cases.</p>
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
            </ul>
          </div>
          <QuoteForm preset="" chooseTrip />
        </section>
      </div>
    </Shell>
  );
}
