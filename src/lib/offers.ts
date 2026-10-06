import { createServerFn } from "@tanstack/react-start";
import { liveOffers } from "@/data/links";
import type { OfferFeed, OfferGroup, SupplierOffer } from "@/lib/offers.server";

export type { OfferFeed, OfferGroup, SupplierOffer };

const exploraName = /explora|grand-journey|historic-gateways|middle-eastern-charms|red-sea-glory|arabian-delights|arabian-marvels|a grand journey|a journey of|a journey through|an extended journey/i;

export function isExploraOffer(offer: { title: string; href: string }) {
  return exploraName.test(`${offer.title} ${offer.href}`);
}

function savedOffers(): SupplierOffer[] {
  return liveOffers.map((offer) => {
    const group: OfferGroup =
      offer.tag === "Luxury" || offer.title.startsWith("Windstar") || offer.title.startsWith("Explora")
        ? "Luxury"
        : offer.tag === "Land" || offer.tag === "Resorts" || offer.tag === "Rail" || offer.tag === "Flights & hotels"
          ? "Land and Resorts"
          : "Ocean";
    return { ...offer, group };
  });
}

export const getLiveOffers = createServerFn({ method: "GET" }).handler(async (): Promise<OfferFeed> => {
  const { loadSupplierOffers } = await import("@/lib/offers.server");
  const feed = await loadSupplierOffers();
  if (feed.offers.length > 0) return feed;
  return { offers: savedOffers(), updatedAt: new Date().toISOString(), live: false };
});
