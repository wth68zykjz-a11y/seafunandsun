import { createFileRoute, Link } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { Shell } from "@/components/site-chrome";
import { phone, phoneHref } from "@/data/links";
import { breadcrumbLd, JsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ski")({
  head: () =>
    pageHead({
      title: "Ski vacations",
      description:
        "Ski vacations from Sea Fun & Sun. One Club Med rate often includes meals, the lift pass, and group lessons. Luxury hotels in Aspen, Banff, Mammoth, Whistler, the Alps, and Niseko usually leave the pass separate. Some of those mountains take Ikon or Epic.",
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
          <h1 className="mt-2 font-display text-3xl sm:text-5xl">Club Med includes the skiing. A hotel does not.</h1>
          <p className="mt-4 text-lg text-mute">
            A Club Med ski week usually includes the room, the meals, the lift pass, and group lessons. In Québec, that is Le Massif de Charlevoix. In France, it is Val d’Isère, Tignes, Val Thorens, La Plagne, Les Arcs, Alpe d’Huez, and Grand Massif Samoëns. In Switzerland, it is Saint-Moritz. We check what that village includes, and the youngest age the kids’ club accepts. Time away from the slopes is extra unless the rate says it is included.
          </p>
          <Link
            to="/quote"
            search={{ place: "Club Med ski" }}
            className="mt-6 inline-flex min-h-11 w-fit items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep"
          >
            Quote Club Med
          </Link>
        </div>
      </section>

      <section id="luxury" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12">
        <p className="text-sm font-medium text-tide">Luxury hotels</p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl">The hotel is the booking. The skiing is separate.</h2>
        <p className="mt-3 max-w-3xl text-mute">
          These are traditional ski hotels: the rate is the room, and sometimes breakfast. The lift pass, lessons, rentals, most dinners, and the transfer are separate. Many do not show a fare you can book yourself. Christmas and February school holidays are often gone a year out.
        </p>
        <p className="mt-3 max-w-3xl text-mute">
          If you already hold a pass, some of these mountains will take it, usually for a set number of days rather than the whole season. Aspen, Jackson Hole, Deer Valley, Banff, Mammoth, Zermatt, St. Moritz, Chamonix, Megève, and Niseko United are on Ikon. Vail, Whistler Blackcomb, and Les 3 Vallées, including Courchevel and Val Thorens, are on Epic, along with Verbier and several resorts in Austria. A Club Med rate often includes the local lifts already, so an Ikon or Epic pass may not lower that price. We check that season’s rules, and how many days the pass covers, before counting the lifts as paid.
        </p>
        <Link
          to="/quote"
          search={{ place: "Luxury ski" }}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-4 text-sm font-medium text-ink hover:bg-gold-deep"
        >
          Quote a luxury hotel
        </Link>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border border-line bg-foam p-5">
            <img src="/media/ski-north.jpg" alt="Snow-covered pines on a ridge at sunrise" loading="lazy" decoding="async" className="aspect-photo w-full rounded-xl object-cover" />
            <h3 className="mt-4 font-display text-2xl">North America</h3>
            <p className="mt-2 text-sm text-mute">
              Aspen, Jackson Hole, Deer Valley, Vail, Banff, Mammoth, and Whistler. The Little Nell is ski-in at Aspen Mountain. Four Seasons is in Teton Village at Jackson Hole, and at Whistler. In Banff, the Fairmont hotels are in town and at Lake Louise, and the lifts are at Sunshine, Lake Louise, and Norquay. At Mammoth, the stay is a village hotel at the base, not a grand Alpine hotel. A room in town and a room at the base of the mountain are not the same stay.
            </p>
          </article>
          <article className="rounded-xl border border-line bg-foam p-5">
            <img src="/media/ski-alps-run.jpg" alt="A skier on a slope with the Matterhorn behind" loading="lazy" decoding="async" className="aspect-photo w-full rounded-xl object-cover" />
            <h3 className="mt-4 font-display text-2xl">The Alps</h3>
            <p className="mt-2 text-sm text-mute">
              Courchevel 1850 for Les 3 Vallées: Cheval Blanc, Les Airelles, and Aman Le Mélézin. Those rooms are requested, not taken off a public calendar. Megève is quieter skiing: Four Seasons is ski-in on Mont d’Arbois and reopens for winter on December 16, 2026. In St. Moritz the grand hotels are in town, not on the piste. Zermatt is car-free, under the Matterhorn.
            </p>
            <p className="mt-2 text-sm text-mute">
              A few dates are worth planning around. White Turf is the horse race on the frozen lake at St. Moritz, usually on three Sundays in February. Some Alpine villages open a floodlit slope in the evening and sell it as moonlight skiing. It runs on a scheduled evening, and not at every mountain. In Austria, a December week can include a Christmas market in Innsbruck, Salzburg, or a resort village such as Kitzbühel. Most markets are finished by Christmas Eve. Those belong on the trip only when the dates match.
            </p>
          </article>
          <article className="rounded-xl border border-line bg-foam p-5">
            <img src="/media/ski-japan.jpg" alt="Mount Yotei above the ski runs at Niseko, Japan" loading="lazy" decoding="async" className="aspect-photo w-full rounded-xl object-cover" />
            <h3 className="mt-4 font-display text-2xl">Japan</h3>
            <p className="mt-2 text-sm text-mute">
              Choose Niseko, on Hokkaido, when you want powder rather than an Alpine village. Mount Yotei sits above the runs. Park Hyatt Niseko Hanazono is ski-in, ski-out, with onsen baths in the hotel. January and early February are the deep weeks, and they are also the busiest. Mid-December and March are the quieter request, if the snow is in. Niseko also runs night skiing on lit slopes. That is a ticket for a set evening, not a promise of a full moon.
            </p>
          </article>
        </div>
        <p className="mt-6 max-w-3xl text-sm text-mute">
          Beach resorts are a different page.{" "}
          <Link to="/resorts" className="font-medium text-tide">
            All-inclusive resorts
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-tide">The week, and who skis</p>
          <h2 className="mt-2 font-display text-4xl">Tell us the mountain, or let us propose it.</h2>
          <p className="mt-4 text-mute">
            Club Med or a hotel, the ages of anyone who needs lessons, and a budget range. We reply the same day in most cases.
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
          </ul>
        </div>
        <QuoteForm preset="Luxury ski" kind="ski" chooseTrip />
      </section>
    </Shell>
  );
}
