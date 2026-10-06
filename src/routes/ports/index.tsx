import { createFileRoute, Link } from "@tanstack/react-router";
import { CabinGuide } from "@/components/cabin-guide";
import { PageIntro, Shell } from "@/components/site-chrome";
import { airlineNote, portPages } from "@/data/ports";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ports/")({
  head: () =>
    pageHead({
      title: "Cruise departure ports",
      description:
        "Cruise embarkation ports in the United States, Canada, Europe, Asia, and Australia. See where the ships go and which airlines serve each city.",
      path: "/ports",
    }),
  component: PortsIndex,
});

function PortsIndex() {
  return (
    <Shell>
      <div className="relative">
        <img
          src="/media/maps/world.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full opacity-[0.08]"
        />
        <div className="relative z-10">
      <PageIntro
        kicker="Departure ports"
        title="Where you sail from stays with you."
        lede="Each region lists the homeports and turnaround ports, where those ships usually go, and which airlines serve the city. A cruise date and an airline schedule do not stay lined up on their own. The flight has to land in time to embark, and the flight home has to leave after the ship is back. We book that pair for the sailing you choose."
      />
      <p className="mx-auto max-w-6xl px-4 pb-6 text-mute">
        Ship size and a general price range are on the{" "}
        <Link to="/lines" className="font-medium text-tide">
          cruise line comparison
        </Link>
        .
      </p>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-8 md:grid-cols-2">
        {portPages.map((page) => (
          <Link key={page.slug} to="/ports/$region" params={{ region: page.slug }} className="rounded-xl border border-line bg-foam p-5 hover:border-tide">
            <h2 className="font-display text-3xl text-ink">{page.title}</h2>
            <p className="mt-2 text-sm text-mute">{page.lede}</p>
            <span className="mt-4 inline-flex text-sm font-medium text-tide">Open the ports</span>
          </Link>
        ))}
      </div>
      <CabinGuide />
      <p className="mx-auto max-w-6xl px-4 pb-20 text-sm text-mute">{airlineNote}</p>
        </div>
      </div>
    </Shell>
  );
}
