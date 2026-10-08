import { createServerFn } from "@tanstack/react-start";
import type { PromoDay, PromoPage } from "@/lib/promo.server";

export type { PromoDay, PromoPage };

export const getPromo = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data }): Promise<PromoPage | null> => {
    const { loadPromo } = await import("@/lib/promo.server");
    const page = await loadPromo(data);
    if (page) return page;
    const { linePromo } = await import("@/lib/offers.server");
    return linePromo(data);
  });
