import type { ReactNode } from "react";
import { bookingEmail, facebook, instagram, licenseLine } from "@/data/links";

export const siteUrl = "https://seafunandsun.com";
export const siteName = "Sea Fun & Sun";

export function clip(text: string, max = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const last = cut.lastIndexOf(" ");
  return `${(last > 80 ? cut.slice(0, last) : cut).trim()}…`;
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageHead(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}) {
  const title = opts.title.includes("Sea Fun") ? opts.title : `${opts.title} — ${siteName}`;
  const url = absoluteUrl(opts.path);
  const image = absoluteUrl(opts.image ?? "/og.jpg");
  return {
    meta: [
      { title },
      { name: "description", content: opts.description },
      {
        name: "robots",
        content: opts.noindex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: siteName },
      { property: "og:title", content: title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function agencyGraph() {
  const id = `${siteUrl}/#agency`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": id,
        name: siteName,
        alternateName: ["Sea Fun and Sun", "Sea Fun & Sun Travel Company"],
        url: siteUrl,
        image: absoluteUrl("/og.jpg"),
        logo: absoluteUrl("/favicon.svg"),
        telephone: "+1-959-666-2062",
        email: bookingEmail,
        founder: {
          "@type": "Person",
          name: "Laura Scollard",
          jobTitle: "Travel agent",
        },
        description:
          "Independent travel company in Farmington, Connecticut. Books cruises, expedition ships, all-inclusive resorts, ski vacations, and rail trips, including luxury European trains. No separate agent fee. Payment goes to the supplier.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Farmington",
          addressRegion: "CT",
          postalCode: "06032",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.7196,
          longitude: -72.832,
        },
        hasMap: "https://www.google.com/maps/search/?api=1&query=Farmington%2C%20Connecticut",
        areaServed: [
          { "@type": "City", name: "Farmington" },
          { "@type": "State", name: "Connecticut" },
          { "@type": "Country", name: "United States" },
        ],
        currenciesAccepted: "USD",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        sameAs: [instagram, facebook],
        identifier: licenseLine,
        knowsAbout: [
          "Ocean cruises",
          "River cruises",
          "American river cruises",
          "Luxury cruises",
          "Yacht sailings",
          "Expedition cruises",
          "All-inclusive resorts",
          "Club Med ski resorts",
          "Luxury ski resorts",
          "Luxury European trains",
          "Disney cruises and park trips",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        publisher: { "@id": id },
        inLanguage: "en-US",
        description:
          "Cruises, expedition ships, resorts, ski vacations, and rail trips from an independent travel company in Farmington, Connecticut. Call, text, or email to plan the trip. There is no public fare search, and no separate agent fee.",
      },
    ],
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function JsonLd({ data }: { data: unknown }): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
