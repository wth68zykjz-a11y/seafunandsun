import type { ReactNode } from "react";
import { bookingEmail, facebook, instagram } from "@/data/links";

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
  exactTitle?: boolean;
}) {
  const title = opts.exactTitle || opts.title.includes("Sea Fun") ? opts.title : `${opts.title} — ${siteName}`;
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
  const offer = (name: string, path: string, description: string) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      description,
      url: absoluteUrl(path),
      provider: { "@id": id },
      areaServed: { "@type": "Country", name: "United States" },
    },
  });
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": id,
        name: "Sea Fun & Sun Travel Company",
        legalName: siteName,
        alternateName: ["Sea Fun and Sun", "Sea Fun & Sun"],
        url: siteUrl,
        image: [absoluteUrl("/og.jpg"), absoluteUrl("/media/hero.jpg")],
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/favicon.svg"),
          caption: siteName,
        },
        telephone: "+1-959-666-2062",
        email: bookingEmail,
        founder: {
          "@type": "Person",
          name: "Laura S",
          jobTitle: "Travel advisor",
          worksFor: { "@id": id },
        },
        description:
          "Independent travel agency in Farmington, Connecticut. Books ocean and river cruises, expedition ships, all-inclusive resorts, ski vacations, and scenic rail journeys for travelers across the United States.",
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
          { "@type": "AdministrativeArea", name: "Connecticut" },
          { "@type": "Country", name: "United States" },
        ],
        currenciesAccepted: "USD",
        paymentAccepted: "Credit card",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-959-666-2062",
          email: bookingEmail,
          contactType: "reservations",
          areaServed: "US",
          availableLanguage: ["English"],
        },
        potentialAction: {
          "@type": "ReserveAction",
          name: "Request a quote",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/quote`,
            inLanguage: "en-US",
            actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Vacations",
          itemListElement: [
            offer(
              "Ocean and river cruises",
              "/destinations",
              "Ocean cruises, river cruises, and expedition sailings, with the flight and extra nights priced separately.",
            ),
            offer(
              "Expedition cruises",
              "/destinations/expedition",
              "Small-ship expedition cruises to Antarctica, the Arctic, and the Galápagos.",
            ),
            offer(
              "All-inclusive resorts",
              "/resorts",
              "All-inclusive beach resorts, including Sandals, Beaches, Hyatt, Secrets, and Club Med.",
            ),
            offer(
              "Ski vacations",
              "/ski",
              "Ski trips at Club Med and at hotels in North America, the Alps, and Japan.",
            ),
            offer(
              "Rail journeys",
              "/rail",
              "Scenic rail trips, including Amtrak, VIA Rail, and European sleeper trains.",
            ),
          ],
        },
        memberOf: {
          "@type": "Organization",
          name: "A.S.A.P. Cruises Inc.",
        },
        identifier: [
          { "@type": "PropertyValue", name: "Florida Seller of Travel", value: "ST15578" },
          { "@type": "PropertyValue", name: "California Seller of Travel", value: "2090937-50" },
          { "@type": "PropertyValue", name: "Washington UBID", value: "603189022" },
        ],
        sameAs: [instagram, facebook],
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
          "Cruises, expedition ships, resorts, ski vacations, and rail trips from an independent travel agency in Farmington, Connecticut.",
      },
    ],
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    url: siteUrl,
    name: "Frequently asked questions",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#agency` },
    inLanguage: "en-US",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
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
