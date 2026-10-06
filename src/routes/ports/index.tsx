import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { airlineNote, portPages } from "@/data/ports";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ports/")({
  head: () =>
    pageHead({
      title: "Cruise departure ports",
      description:
        "Where cruise ships leave from, where those sailings tend to go, and which airlines serve the city. United States, Canada, Europe, Asia, Australia, and New Zealand.",
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
        title="Where the ship starts changes the trip."
        lede="Each region lists the turnaround ports, where those ships usually go, and which airlines serve the city. Schedules change. We match the flight to the ship."
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
      <p className="mx-auto max-w-6xl px-4 pb-20 text-sm text-mute">{airlineNote}</p>
        </div>
      </div>
    </Shell>
  );
}
