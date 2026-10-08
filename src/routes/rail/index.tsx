import { createFileRoute } from "@tanstack/react-router";
import { DestinationArticle } from "@/routes/destinations/$slug";
import { destinationBySlug } from "@/data/destinations";
import { clip, pageHead } from "@/lib/seo";

const place = destinationBySlug("rail");

export const Route = createFileRoute("/rail/")({
  head: () =>
    pageHead({
      title: place?.title ?? "Rail and land",
      description: place
        ? clip(`${place.lede} Booked by Sea Fun & Sun in Farmington, Connecticut.`)
        : "Rail vacations and land trips booked by Sea Fun & Sun in Farmington, Connecticut, including luxury European trains.",
      path: "/rail",
    }),
  component: RailPage,
});

function RailPage() {
  if (!place) return null;
  return <DestinationArticle place={place} rail />;
}
