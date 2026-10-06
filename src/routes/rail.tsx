import { createFileRoute } from "@tanstack/react-router";
import { DestinationArticle } from "@/routes/destinations/$slug";
import { destinationBySlug } from "@/data/destinations";
import { clip, pageHead } from "@/lib/seo";

const place = destinationBySlug("rail");

export const Route = createFileRoute("/rail")({
  head: () =>
    pageHead({
      title: place?.title ?? "Rail and land",
      description: place
        ? clip(place.lede)
        : "Rail vacations and land trips booked by Sea Fun & Sun, including luxury European trains.",
      path: "/rail",
      image: place?.image,
    }),
  component: RailPage,
});

function RailPage() {
  if (!place) return null;
  return <DestinationArticle place={place} rail />;
}
