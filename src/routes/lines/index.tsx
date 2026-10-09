import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { linePagesInSizeOrder } from "@/data/lines";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lines/")({
  head: () =>
    pageHead({
      title: "Cruise line comparison",
      description:
        "Compare cruise lines by ship size. Passenger counts and typical fares for yachts, river and expedition ships, luxury ocean ships, mid-size ocean ships, and the largest ocean ships.",
      path: "/lines",
    }),
  component: LinesPage,
});

function LinesPage() {
  return (
    <Shell>
      <PageIntro
        kicker="Cruise lines"
        title="Ship size, from the smallest to the largest."
        lede="Select a card. The heading is the passenger count. The line above it is the type of ship."
      />
      <p className="mx-auto max-w-6xl px-4 pb-6 text-mute">
        A cruise can depart from Fort Lauderdale, Miami, Seattle, or Vancouver. A resort does not. You fly to the resort and stay. Miami, Vancouver, and Barcelona are also worth a few days before or after a cruise.{" "}
        <Link to="/ports" className="font-medium text-tide">
          See the departure ports
        </Link>
        .
      </p>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-20 sm:grid-cols-2">
        {linePagesInSizeOrder.map((page) => (
          <Link key={page.slug} to="/lines/$slug" params={{ slug: page.slug }} className="group overflow-hidden rounded-xl border border-line bg-foam hover:border-tide">
            <img src={page.image} alt={page.alt} loading="lazy" decoding="async" className="aspect-photo w-full object-cover" />
            <div className="p-5">
              <p className="text-sm font-medium text-tide">{page.card}</p>
              <h2 className="mt-1 font-display text-3xl">{page.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-ink">{page.size}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-tide group-hover:underline">Learn more</span>
            </div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
