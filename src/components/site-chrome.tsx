import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, Phone, X } from "lucide-react";
import { destinations } from "@/data/destinations";
import { bookingEmail, facebook, instagram, licenseLine, phone, phoneHref } from "@/data/links";

const nav = [
  { to: "/destinations", label: "Cruises" },
  { to: "/lines", label: "Compare" },
  { to: "/ports", label: "Ports" },
  { to: "/resorts", label: "Resorts" },
  { to: "/ski", label: "Ski" },
  { to: "/rail", label: "Rail" },
] as const;

export function LogoMark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 120" width="36" height="36" className={className} fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="52" stroke="#E4C56A" strokeWidth="1.5" />
      <g stroke="#E4C56A" strokeLinecap="round" strokeWidth="1.6">
        <path d="M75.5 41.9L94.8 36.7" />
        <path d="M73.9 38.0L91.2 28.0" />
        <path d="M71.3 34.7L85.5 20.5" />
        <path d="M68.0 32.1L78.0 14.8" />
        <path d="M64.1 30.5L69.3 11.2" />
        <path d="M60.0 30.0L60.0 10.0" />
        <path d="M55.9 30.5L50.7 11.2" />
        <path d="M52.0 32.1L42.0 14.8" />
        <path d="M48.7 34.7L34.5 20.5" />
        <path d="M46.1 38.0L28.8 28.0" />
        <path d="M44.5 41.9L25.2 36.7" />
      </g>
      <circle cx="60" cy="46" r="13" fill="#E4C56A" />
      <path d="M16 66c16-12 30-14 44-2 12 10 24 12 38 2 8-6 14-7 18-4" stroke="#1C8FA0" strokeWidth="3.3" strokeLinecap="round" />
      <path d="M14 78c18-10 32-11 46 0 12 9 26 11 40 1 8-6 16-6 20-3" stroke="#3EC6D0" strokeWidth="3.1" strokeLinecap="round" />
      <path d="M22 90c14-8 28-8 40 0 11 7 22 8 32 1" stroke="#146E80" strokeWidth="2.9" strokeLinecap="round" />
    </svg>
  );
}

function Wordmark({ tone = "ink" }: { tone?: "ink" | "foam" }) {
  const onDark = tone === "foam";
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
      <span className="grid size-9 shrink-0 place-items-center sm:size-11">
        <LogoMark className="logo-mark size-9 sm:size-11" />
      </span>
      <span className="min-w-0 leading-none">
        <span className={`block font-logo text-[0.78rem] tracking-[0.06em] sm:text-[1.05rem] sm:tracking-[0.1em] ${onDark ? "text-foam" : "text-ink"}`}>
          SEA FUN & SUN
        </span>
        <span className="mt-1 flex items-center gap-1.5">
          <span className={`h-px w-2 sm:w-3 ${onDark ? "bg-gold" : "bg-gold-ink"}`} />
          <span className={`text-[0.5rem] font-semibold tracking-[0.14em] sm:text-[0.58rem] sm:tracking-[0.22em] ${onDark ? "text-gold" : "text-gold-ink"}`}>
            TRAVEL COMPANY
          </span>
          <span className={`h-px w-2 sm:w-3 ${onDark ? "bg-gold" : "bg-gold-ink"}`} />
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="sticky top-0 z-20 border-b border-sea bg-sea">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Wordmark tone="foam" />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-2.5 py-2 text-sm font-medium ${active ? "bg-foam" : "hover:bg-sea-2"}`}
                style={active ? { backgroundColor: "#f7fbf9", color: "#0c2340" } : { color: "#f7fbf9" }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/sailings"
            hash="promotions"
            className="ml-2 inline-flex min-h-11 items-center rounded-md bg-gold px-4 text-sm font-medium text-ink hover:bg-gold-deep"
          >
            Promotions
          </Link>
          <a
            href={phoneHref}
            className="ml-2 inline-flex min-h-11 items-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
          >
            {phone}
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href={phoneHref}
            aria-label={`Call or text ${phone}`}
            className="inline-flex size-11 items-center justify-center rounded-md bg-coral text-foam"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md bg-foam"
            style={{ backgroundColor: "#f7fbf9", color: "#0c2340" }}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-foam/15 bg-sea px-4 py-3 text-foam lg:hidden">
          <nav className="grid" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-foam/15 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/sailings"
              hash="promotions"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-3 text-base font-medium text-ink"
            >
              Promotions
            </Link>
            <a href={phoneHref} className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-3 text-base font-medium text-foam">
              Call or text {phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-sea text-foam">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_minmax(0,0.7fr)] lg:gap-8">
          <div>
            <Wordmark tone="foam" />
            <p className="mt-3 max-w-sm text-sm leading-6 text-foam/80">An independent travel company in Farmington, Connecticut. We book cruises, resorts, ski vacations, and rail trips for travelers nationwide.</p>
            <p className="mt-3 text-sm leading-6">
              <a href={phoneHref} className="underline-offset-2 hover:underline">
                {phone}
              </a>
              <br />
              <a href={`mailto:${bookingEmail}`} className="break-all underline-offset-2 hover:underline">
                {bookingEmail}
              </a>
            </p>
            <div className="mt-4 grid max-w-sm grid-cols-2 gap-2">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-gold px-3 text-sm font-medium text-ink hover:bg-gold-deep"
              >
                <Instagram className="size-4" aria-hidden="true" />
                Instagram
              </a>
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-foam px-3 text-sm font-medium text-ink"
              >
                <Facebook className="size-4" aria-hidden="true" />
                Facebook
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:contents">
            <div>
              <p className="text-sm font-medium">Explore</p>
              <ul className="mt-2 grid gap-2 text-sm leading-5 text-foam/80">
                <li><Link to="/resorts" className="hover:text-foam">All-inclusive Resorts</Link></li>
                <li><Link to="/ski" className="hover:text-foam">Ski</Link></li>
                <li><Link to="/rail" className="hover:text-foam">Rail and land</Link></li>
                <li><Link to="/sailings" className="hover:text-foam">Sailings & offers</Link></li>
                <li><Link to="/ports" className="hover:text-foam">Departure ports</Link></li>
                <li><Link to="/lines" className="hover:text-foam">Compare cruise lines</Link></li>
                <li><Link to="/itineraries" className="hover:text-foam">Sample itineraries</Link></li>
                <li><Link to="/quote" className="hover:text-foam">Request a quote</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium">Policies</p>
              <ul className="mt-2 grid gap-2 text-sm leading-5 text-foam/80">
                <li><Link to="/policies/$doc" params={{ doc: "terms" }} className="hover:text-foam">Terms & Conditions</Link></li>
                <li><Link to="/policies/$doc" params={{ doc: "refund" }} className="hover:text-foam">Refund Policy</Link></li>
                <li><Link to="/policies/$doc" params={{ doc: "privacy" }} className="hover:text-foam">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-foam/15 pt-5">
          <p className="text-sm font-medium">Destinations</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm leading-5 text-foam/80 sm:grid-cols-3 lg:grid-cols-4">
            {destinations
              .filter((item) => item.slug !== "rail")
              .map((item) => (
              <li key={item.slug} className="min-w-0">
                <Link to="/destinations/$slug" params={{ slug: item.slug }} className="hover:text-foam">
                  {item.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-foam/15">
        <div className="mx-auto max-w-6xl px-4 py-4 text-sm leading-6 text-foam/90">
          <p>© {new Date().getFullYear()} Sea Fun & Sun · Farmington, CT</p>
          <p className="mt-1">Booking engine powered by Outside Agents</p>
          <p className="mt-1">{licenseLine}</p>
          <p className="mt-2">
            Open to search engines and AI assistants.{" "}
            <a href="/llms.txt" className="underline-offset-2 hover:underline">Facts for AI</a>
            {" · "}
            <a href="/sitemap.xml" className="underline-offset-2 hover:underline">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-8 pb-4 sm:pt-12 sm:pb-6">
      <p className="text-sm font-medium text-tide">{kicker}</p>
      <h1 className="mt-2 max-w-3xl font-display text-3xl text-ink sm:text-5xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-base text-mute sm:mt-4 sm:text-lg">{lede}</p>
    </div>
  );
}
