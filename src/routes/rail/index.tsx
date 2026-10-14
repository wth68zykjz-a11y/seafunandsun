import { createFileRoute } from "@tanstack/react-router";
import { DestinationArticle } from "@/routes/destinations/$slug";
import { destinationBySlug } from "@/data/destinations";
import { pageHead } from "@/lib/seo";

const place = destinationBySlug("rail");

export const Route = createFileRoute("/rail/")({
  head: () =>
    pageHead({
      title: "Scenic Rail & Land Travel Packages | Sea Fun & Sun",
      description:
        "Experience breathtaking canyon views from glass-domed cars or classic European sleeper trains, seamlessly coordinated with custom luxury hotel stays.",
      path: "/rail",
    }),
  component: RailPage,
});

function RailPage() {
  if (!place) return null;
  return <DestinationArticle place={place} rail />;
}
