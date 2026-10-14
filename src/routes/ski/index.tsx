import { createFileRoute, Link } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { skiPages } from "@/data/ski-pages";
import { phone, phoneHref } from "@/data/links";
import { breadcrumbLd, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ski/")({
  head: () =>
    pageHead({
      title: "Ski vacations",
      description:
        "Ski vacations from Sea Fun & Sun: Club Med with meals and lifts often included, or luxury hotels in North America, the Alps, and Japan.",
      path: "/ski",
      image: "/media/ski-alps.jpg",
    }),
  component: SkiPage,
});

function SkiPage() {
  return (
    <Shell>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Ski", path: "/ski" },
        ])}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-8 lg:grid-cols-2">
        <img
          src="/media/ski-alps.jpg"
          alt="A person in a red jacket facing the Matterhorn across a snowfield"
          fetchPriority="high"
          decoding="async"
          className="aspect-photo w-full rounded-xl object-cover"
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium text-tide">Ski</p>
          <h1 className="mt-2 font-display text-3xl sm:text-5xl">You wake to snow at the window.</h1>
          <p className="mt-4 text-lg text-mute">
            At Club Med they often are. A Club Med ski week usually includes the room, the meals, the lift pass, and group lessons. In Québec, that is Le Massif de Charlevoix. In France, it is Val d’Isère, Tignes, Val Thorens, La Plagne, Les Arcs, Alpe d’Huez, and Grand Massif Samoëns. In Switzerland, it is Saint-Moritz. We check what that village includes, and the youngest age the kids’ club accepts. Time away from the slopes is extra unless the rate says it is included.
          </p>
          <Link
            to="/quote"
            search={{ place: "Club Med ski" }}
            className="mt-6 inline-flex min-h-11 w-fit items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
          >
            Request a Club Med week
          </Link>
        </div>
      </section>

      <section id="luxury" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12">
        <h2 className="font-display text-4xl">Luxury hotels</h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink">
          These are traditional ski hotels: the rate is the room, and sometimes breakfast. The lift pass, lessons, rentals, most dinners, and the transfer are separate. Christmas and February school holidays are often gone a year out. Aspen, Jackson Hole, Deer Valley, Banff, Mammoth, Zermatt, St. Moritz, Chamonix, Megève, and Niseko United are on Ikon. Vail, Whistler Blackcomb, and Les 3 Vallées are on Epic.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {skiPages.map((page) => (
            <Link
              key={page.slug}
              to="/ski/$slug"
              params={{ slug: page.slug }}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-foam hover:border-tide"
            >
              <img src={page.image} alt={page.alt} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl">{page.nav}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink">{page.lede}</p>
                <span className="mt-4 text-sm font-medium text-tide">See this region</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-tide">The dates, and who skis</p>
          <h2 className="mt-2 font-display text-4xl">Tell us the mountain, or let us propose it.</h2>
          <p className="mt-4 text-mute">
            Tell us whether you want Club Med or a hotel, the ages of anyone who needs lessons, and a budget. We reply the same day in most cases.
          </p>
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
        <QuoteForm preset="Luxury ski" kind="ski" chooseTrip />
      </section>
    </Shell>
  );
}
