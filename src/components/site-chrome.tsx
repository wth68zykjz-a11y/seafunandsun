import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { destinations } from "@/data/destinations";
import { railPages } from "@/data/rail-pages";
import { skiPages } from "@/data/ski-pages";
import { bookingEmail, facebook, instagram, phone, phoneHref } from "@/data/links";

const cruiseRegions = destinations.filter((item) => item.slug !== "rail");

function navStyle(active: boolean) {
  return active
    ? { backgroundColor: "#f7fbf9", color: "#0c2340" }
    : { color: "#f7fbf9" };
}

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
        <span className={`block truncate font-logo text-[0.78rem] tracking-[0.06em] sm:text-[1.05rem] sm:tracking-[0.1em] ${onDark ? "text-foam" : "text-ink"}`}>
          SEA FUN & SUN
        </span>
        <span className="mt-1 flex min-w-0 items-center gap-1.5">
          <span className={`h-px w-2 shrink-0 sm:w-3 ${onDark ? "bg-gold" : "bg-gold-ink"}`} />
          <span className={`truncate text-[0.62rem] font-semibold tracking-[0.12em] sm:text-[0.58rem] sm:tracking-[0.22em] ${onDark ? "text-gold" : "text-gold-ink"}`}>
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
    <header className="sticky top-0 z-20 border-b border-sea bg-sea pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Wordmark tone="foam" />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <details className="relative" key={`cruises-${path}`}>
            <summary
              className="flex min-h-11 cursor-pointer list-none items-center gap-1 rounded-md px-2.5 text-sm font-medium [&::-webkit-details-marker]:hidden"
              style={navStyle(path.startsWith("/destinations") || path.startsWith("/in-port") || path.startsWith("/lines") || path.startsWith("/ports"))}
            >
              Cruises
              <ChevronDown className="size-4" aria-hidden="true" />
            </summary>
            <div className="absolute left-0 top-full z-30 mt-1 max-h-[70vh] w-72 overflow-y-auto rounded-md border border-line bg-foam p-2 text-ink shadow-lg">
              <Link to="/destinations" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-paper">
                All cruise regions
              </Link>
              {cruiseRegions.map((item) => (
                <Link
                  key={item.slug}
                  to="/destinations/$slug"
                  params={{ slug: item.slug }}
                  className="block rounded-md px-3 py-2 text-base hover:bg-paper"
                >
                  {item.nav}
                </Link>
              ))}
              <Link to="/lines" className="block rounded-md px-3 py-2 text-base hover:bg-paper">
                Compare cruise lines
              </Link>
              <Link to="/ports" className="block rounded-md px-3 py-2 text-base hover:bg-paper">
                Departure ports
              </Link>
            </div>
          </details>
          <Link to="/resorts" className="rounded-md px-2.5 py-2 text-sm font-medium" style={navStyle(path.startsWith("/resorts"))}>
            Resorts
          </Link>
          <Link to="/ski" className="rounded-md px-2.5 py-2 text-sm font-medium" style={navStyle(path.startsWith("/ski"))}>
            Ski
          </Link>
          <Link to="/rail" className="rounded-md px-2.5 py-2 text-sm font-medium" style={navStyle(path.startsWith("/rail"))}>
            Rail
          </Link>
          <Link
            to="/sailings"
            hash="promotions"
            className="rounded-md px-2.5 py-2 text-sm font-medium"
            style={navStyle(path.startsWith("/sailings") || path.startsWith("/promotions"))}
          >
            Promotions
          </Link>
          <a
            href={phoneHref}
            className="ml-1 inline-flex min-h-11 items-center rounded-md px-2.5 text-sm font-medium text-foam hover:bg-sea-2"
          >
            {phone}
          </a>
          <Link
            to="/quote"
            className="ml-1 inline-flex min-h-11 items-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
          >
            Request a Quote
          </Link>
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
      {path.startsWith("/destinations") || path.startsWith("/lines") || path.startsWith("/in-port") ? (
        <nav aria-label="Cruises" className="hidden border-t border-foam/15 bg-[#0a3a52] lg:block">
          <div className="mx-auto flex max-w-6xl touch-pan-x gap-2 overflow-x-auto px-4 py-2">
            <Link
              to="/destinations"
              className="inline-flex min-h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium"
              style={path === "/destinations" ? { backgroundColor: "#f7fbf9", color: "#0c2340" } : { color: "#f7fbf9" }}
            >
              Regions
            </Link>
            <Link
              to="/lines"
              className="inline-flex min-h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium"
              style={path.startsWith("/lines") ? { backgroundColor: "#f7fbf9", color: "#0c2340" } : { color: "#f7fbf9" }}
            >
              Compare
            </Link>
            {destinations
              .filter((item) => item.slug !== "rail")
              .map((item) => {
                const href = `/destinations/${item.slug}`;
                const active = path === href || path === `/in-port/${item.slug}`;
                return (
                  <Link
                    key={item.slug}
                    to="/destinations/$slug"
                    params={{ slug: item.slug }}
                    className="inline-flex min-h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium"
                    style={active ? { backgroundColor: "#f7fbf9", color: "#0c2340" } : { color: "#f7fbf9" }}
                  >
                    {item.nav}
                  </Link>
                );
              })}
          </div>
        </nav>
      ) : null}
      {path.startsWith("/ski") ? (
        <nav aria-label="Ski" className="hidden border-t border-foam/15 bg-[#0a3a52] lg:block">
          <div className="mx-auto flex max-w-6xl touch-pan-x gap-2 overflow-x-auto px-4 py-2">
            <Link
              to="/ski"
              className="inline-flex min-h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium"
              style={path === "/ski" ? { backgroundColor: "#f7fbf9", color: "#0c2340" } : { color: "#f7fbf9" }}
            >
              Overview
            </Link>
            {skiPages.map((item) => {
              const href = `/ski/${item.slug}`;
              const active = path === href;
              return (
                <Link
                  key={item.slug}
                  to="/ski/$slug"
                  params={{ slug: item.slug }}
                  className="inline-flex min-h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium"
                  style={active ? { backgroundColor: "#f7fbf9", color: "#0c2340" } : { color: "#f7fbf9" }}
                >
                  {item.nav}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
      {path.startsWith("/rail") ? (
        <nav aria-label="Rail" className="hidden border-t border-foam/15 bg-[#0a3a52] lg:block">
          <div className="mx-auto flex max-w-6xl touch-pan-x gap-2 overflow-x-auto px-4 py-2">
            <Link
              to="/rail"
              className="inline-flex min-h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium"
              style={path === "/rail" ? { backgroundColor: "#f7fbf9", color: "#0c2340" } : { color: "#f7fbf9" }}
            >
              Overview
            </Link>
            {railPages.map((item) => {
              const href = `/rail/${item.slug}`;
              const active = path === href;
              return (
                <Link
                  key={item.slug}
                  to="/rail/$slug"
                  params={{ slug: item.slug }}
                  className="inline-flex min-h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium"
                  style={active ? { backgroundColor: "#f7fbf9", color: "#0c2340" } : { color: "#f7fbf9" }}
                >
                  {item.nav}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
      {open ? (
        <div className="max-h-[calc(100dvh-4.75rem-env(safe-area-inset-top))] overflow-y-auto overscroll-contain border-t border-foam/15 bg-sea px-4 py-3 text-foam lg:hidden">
          <nav className="grid" aria-label="Mobile">
            <details className="border-b border-foam/15">
              <summary className="flex min-h-12 cursor-pointer list-none items-center gap-1 text-base font-medium [&::-webkit-details-marker]:hidden">
                Cruises
                <ChevronDown className="size-4" aria-hidden="true" />
              </summary>
              <Link to="/destinations" onClick={() => setOpen(false)} className="flex min-h-11 items-center border-t border-foam/15 pl-4 text-base">
                All cruise regions
              </Link>
              {cruiseRegions.map((page) => (
                <Link
                  key={page.slug}
                  to="/destinations/$slug"
                  params={{ slug: page.slug }}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center border-t border-foam/15 pl-4 text-base"
                >
                  {page.nav}
                </Link>
              ))}
              <Link to="/lines" onClick={() => setOpen(false)} className="flex min-h-11 items-center border-t border-foam/15 pl-4 text-base">
                Compare cruise lines
              </Link>
              <Link to="/ports" onClick={() => setOpen(false)} className="flex min-h-11 items-center border-t border-foam/15 pl-4 text-base">
                Departure ports
              </Link>
            </details>
            <Link to="/resorts" onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-foam/15 text-base font-medium">
              Resorts
            </Link>
            <details className="border-b border-foam/15">
              <summary className="flex min-h-12 cursor-pointer list-none items-center gap-1 text-base font-medium [&::-webkit-details-marker]:hidden">
                Ski
                <ChevronDown className="size-4" aria-hidden="true" />
              </summary>
              <Link to="/ski" onClick={() => setOpen(false)} className="flex min-h-11 items-center border-t border-foam/15 pl-4 text-base">
                Overview
              </Link>
              {skiPages.map((page) => (
                <Link
                  key={page.slug}
                  to="/ski/$slug"
                  params={{ slug: page.slug }}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center border-t border-foam/15 pl-4 text-base"
                >
                  {page.nav}
                </Link>
              ))}
            </details>
            <details className="border-b border-foam/15">
              <summary className="flex min-h-12 cursor-pointer list-none items-center gap-1 text-base font-medium [&::-webkit-details-marker]:hidden">
                Rail
                <ChevronDown className="size-4" aria-hidden="true" />
              </summary>
              <Link to="/rail" onClick={() => setOpen(false)} className="flex min-h-11 items-center border-t border-foam/15 pl-4 text-base">
                Overview
              </Link>
              {railPages.map((page) => (
                <Link
                  key={page.slug}
                  to="/rail/$slug"
                  params={{ slug: page.slug }}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center border-t border-foam/15 pl-4 text-base"
                >
                  {page.nav}
                </Link>
              ))}
            </details>
            <Link
              to="/sailings"
              hash="promotions"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-foam/15 text-base font-medium"
            >
              Promotions
            </Link>
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-coral px-3 text-base font-medium text-foam"
            >
              Request a Quote
            </Link>
            <a href={phoneHref} className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-foam px-3 text-base font-medium text-ink">
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
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-3 lg:items-start">
        <div>
          <Wordmark tone="foam" />
          <p className="mt-3 max-w-sm text-base leading-relaxed text-foam/90">
            Based in Farmington, Connecticut, we are an independent travel agency dedicated to crafting seamless, unforgettable vacations. From ocean cruises to alpine ski resorts, a single dedicated agent handles every detail from your first quote until you are home.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Call or Text:{" "}
            <a href={phoneHref} className="underline-offset-2 hover:underline">
              {phone}
            </a>
            <br />
            Email:{" "}
            <a href={`mailto:${bookingEmail}`} className="break-all underline-offset-2 hover:underline">
              {bookingEmail}
            </a>
          </p>
          <p className="mt-3 text-base">
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
              Instagram
            </a>
            {" · "}
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
              Facebook
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 items-start gap-x-6 gap-y-8 lg:contents">
          <div>
            <p className="text-base font-medium">Explore</p>
            <ul className="mt-2 grid gap-y-2 text-base leading-6 text-foam/90">
              <li><Link to="/destinations" className="hover:text-foam">Destinations & Cruises</Link></li>
              <li><Link to="/resorts" className="hover:text-foam">Resorts</Link></li>
              <li><Link to="/ski" className="hover:text-foam">Ski Vacations</Link></li>
              <li>
                <Link to="/destinations/$slug" params={{ slug: "expedition" }} className="hover:text-foam">
                  Expedition Cruises
                </Link>
              </li>
              <li><Link to="/rail" className="hover:text-foam">Rail & Land Journeys</Link></li>
              <li><Link to="/sailings" hash="promotions" className="hover:text-foam">Current Promotions</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-base font-medium">Destinations</p>
            <ul className="mt-2 grid gap-y-2 text-base leading-6 text-foam/90">
              <li><Link to="/destinations/$slug" params={{ slug: "alaskan" }} className="hover:text-foam">Alaska Cruises</Link></li>
              <li><Link to="/destinations/$slug" params={{ slug: "caribbean" }} className="hover:text-foam">Caribbean Cruises</Link></li>
              <li><Link to="/destinations/$slug" params={{ slug: "european" }} className="hover:text-foam">European Cruises</Link></li>
              <li><Link to="/destinations/$slug" params={{ slug: "mediterranean" }} className="hover:text-foam">Mediterranean</Link></li>
              <li><Link to="/destinations/$slug" params={{ slug: "asia" }} className="hover:text-foam">Asia Cruises</Link></li>
              <li><Link to="/destinations/$slug" params={{ slug: "australia-new-zealand" }} className="hover:text-foam">Australia & New Zealand</Link></li>
              <li><Link to="/destinations/$slug" params={{ slug: "world" }} className="hover:text-foam">World Cruises</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-foam/15 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto grid max-w-6xl gap-2 px-4 py-4 text-base leading-relaxed text-foam/90">
          <p>© {new Date().getFullYear()} Sea Fun & Sun · Farmington, CT</p>
          <p>Booking engine powered by Outside Agents · Independent Affiliate of A.S.A.P. Cruises Inc.</p>
          <p>FL Seller of Travel ST15578 · CA Seller of Travel 2090937-50 · WA UBID 603189022</p>
          <p>
            <Link to="/policies/$doc" params={{ doc: "terms" }} className="underline-offset-2 hover:underline">Terms</Link>
            {" · "}
            <Link to="/policies/$doc" params={{ doc: "refund" }} className="underline-offset-2 hover:underline">Refunds</Link>
            {" · "}
            <Link to="/policies/$doc" params={{ doc: "privacy" }} className="underline-offset-2 hover:underline">Privacy</Link>
            {" · "}
            <a href="/sitemap.xml" className="underline-offset-2 hover:underline">Sitemap</a>
            {" · "}
            <a href="/llms.txt" className="underline-offset-2 hover:underline">Facts for AI</a>
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
