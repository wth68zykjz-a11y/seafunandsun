import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { linePages } from "@/data/lines";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lines/")({
  head: () =>
    pageHead({
      title: "Cruise line comparison",
      description:
        "Compare cruise lines by ship size and region. Passenger counts and typical fares for large ships, Alaska, Europe, rivers, luxury ships, and yachts.",
      path: "/lines",
    }),
  component: LinesPage,
});

function LinesPage() {
  return (
    <Shell>
      <PageIntro
        kicker="Cruise lines"
        title="Size and price, by region."
        lede="Select a card. Each one opens the ships in that group, the passenger counts, and a general price range."
      />
      <p className="mx-auto max-w-6xl px-4 pb-6 text-mute">
        The city a ship leaves from changes the week.{" "}
        <Link to="/ports" className="font-medium text-tide">
          See the departure and embarkation ports
        </Link>
        .
      </p>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-20 sm:grid-cols-2">
        {linePages.map((page) => (
          <Link key={page.slug} to="/lines/$slug" params={{ slug: page.slug }} className="group overflow-hidden rounded-xl border border-line bg-foam hover:border-tide">
            <img src={page.image} alt={page.alt} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-medium text-tide">{page.card}</p>
              <h2 className="mt-1 font-display text-3xl">{page.title}</h2>
              <p className="mt-2 text-sm text-mute">{page.size}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-tide group-hover:underline">Learn more</span>
            </div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
