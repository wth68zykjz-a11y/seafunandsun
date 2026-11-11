import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageIntro } from "@/components/site-chrome";
import { phone, phoneHref } from "@/data/links";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Sea Fun & Sun",
      description:
        "Sea Fun & Sun is an independent travel agency in Farmington, Connecticut. One agent handles your cruise, resort, ski, or rail trip from the first quote until you are home.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <Shell>
      <PageIntro
        kicker="About"
        title="An independent travel agency in Farmington, Connecticut."
        lede="Sea Fun & Sun books ocean and river cruises, expedition ships, all-inclusive resorts, ski vacations, and scenic rail journeys. There is no separate agent fee. You pay the supplier."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16">
        <p className="text-base leading-relaxed text-ink">
          Laura S handles your booking from the first quote until you are home. You will not be handed off to a call center. The same agent who builds your quote stays with the trip.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink">
          We book for travelers across the United States. Call, text, or email anytime during weekday hours.
        </p>
        <p className="mt-6 text-base">
          Call or text{" "}
          <a className="font-medium text-tide" href={phoneHref}>
            {phone}
          </a>
          {" · "}
          <Link to="/quote" className="font-medium text-tide">
            Request a quote
          </Link>
        </p>
      </div>
    </Shell>
  );
}
