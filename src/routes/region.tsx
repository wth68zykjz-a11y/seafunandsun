import { createFileRoute } from "@tanstack/react-router";
import { DestinationArticle } from "@/routes/destinations/$slug";
import { destinationBySlug } from "@/data/destinations";
import { clip, pageHead } from "@/lib/seo";

const place = destinationBySlug("panama-canal");

export const Route = createFileRoute("/region")({
  head: () =>
    pageHead({
      title: place?.title ?? "Panama Canal Cruises",
      description: place
        ? clip(`Panama Canal cruises booked by Sea Fun & Sun in Farmington, Connecticut. ${place.lede}`)
        : "Panama Canal cruises booked by Sea Fun & Sun in Farmington, Connecticut.",
      path: "/region",
      image: place?.image,
    }),
  component: RegionPage,
});

function RegionPage() {
  if (!place) return null;
  return <DestinationArticle place={place} path="/region" />;
}
