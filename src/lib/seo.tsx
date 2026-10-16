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
        "@type": ["LocalBusiness", "TravelAgency"],
        "@id": id,
        name: "Sea Fun & Sun Travel Company",
        legalName: siteName,
        alternateName: ["Sea Fun and Sun", "Sea Fun & Sun"],
        url: siteUrl,
        slogan: "The right trip, booked with care.",
        publicAccess: false,
        image: {
          "@type": "ImageObject",
          url: absoluteUrl("/og.jpg"),
          width: 1200,
          height: 630,
        },
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
        mainEntity: { "@id": id },
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

function placeNames(lines: string[]) {
  const names: string[] = [];
  const seen = new Set<string>();
  for (const line of lines) {
    let text = line.trim();
    const colon = text.indexOf(":");
    if (colon > 0 && colon < 28) text = text.slice(colon + 1);
    for (const bit of text.split(/,|—|–|\bor\b|\bfor\b/)) {
      const name = bit
        .trim()
        .replace(/^(and|or|from|a|an)\s+/i, "")
        .replace(/\s+from the ship.*$/i, "")
        .replace(/\s+with\s+.*$/i, "")
        .replace(/\s+on the\s+.*$/i, "")
        .replace(/\.$/, "")
        .trim();
      const key = name.toLowerCase();
      if (!name || seen.has(key) || name.length > 40 || name.split(/\s+/).length > 5) continue;
      if (/^(with|if|from|a|an)\b/i.test(name)) continue;
      if (/day at sea|pier|wildlife|routing|passport|currency|round trip|nights|sailings|float|whale/i.test(name)) continue;
      seen.add(key);
      names.push(name);
      if (names.length >= 12) return names;
    }
  }
  return names;
}

export function touristDestinationLd(place: {
  slug: string;
  title: string;
  lede: string;
  image: string;
  itineraries: { ports: string[] }[];
}) {
  const url = absoluteUrl(`/destinations/${place.slug}`);
  const places = placeNames(place.itineraries.flatMap((item) => item.ports));
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${url}#destination`,
    name: place.title,
    description: clip(place.lede, 300),
    url,
    image: absoluteUrl(place.image),
    touristType: "Cruise passengers",
    provider: { "@id": `${siteUrl}/#agency` },
    ...(places.length
      ? { containsPlace: places.map((name) => ({ "@type": "Place", name })) }
      : {}),
  };
}

const railTrains: Record<string, { name: string; provider: string; from: string; to?: string }[]> = {
  "california-zephyr": [{ name: "California Zephyr", provider: "Amtrak", from: "Chicago", to: "Emeryville" }],
  "empire-builder": [
    { name: "Empire Builder", provider: "Amtrak", from: "Chicago", to: "Seattle" },
    { name: "Empire Builder", provider: "Amtrak", from: "Chicago", to: "Portland" },
  ],
  "southwest-chief": [{ name: "Southwest Chief", provider: "Amtrak", from: "Chicago", to: "Los Angeles" }],
  "coast-starlight": [{ name: "Coast Starlight", provider: "Amtrak", from: "Seattle", to: "Los Angeles" }],
  "grand-canyon-railway": [{ name: "Grand Canyon Railway", provider: "Grand Canyon Railway", from: "Williams", to: "Grand Canyon South Rim" }],
  "northeast-trains": [
    { name: "Adirondack", provider: "Amtrak", from: "New York", to: "Montreal" },
    { name: "Vermonter", provider: "Amtrak", from: "Washington", to: "St. Albans" },
    { name: "Downeaster", provider: "Amtrak", from: "Boston", to: "Brunswick" },
  ],
  "the-canadian": [{ name: "The Canadian", provider: "VIA Rail", from: "Toronto", to: "Vancouver" }],
  "european-sleepers": [
    { name: "Venice Simplon-Orient-Express", provider: "Belmond", from: "Paris", to: "Venice" },
    { name: "La Dolce Vita Orient Express", provider: "La Dolce Vita Orient Express", from: "Rome", to: "Venice" },
    { name: "La Dolce Vita Orient Express", provider: "La Dolce Vita Orient Express", from: "Palermo", to: "Rome" },
    { name: "Golden Eagle Danube Express", provider: "Golden Eagle", from: "Venice", to: "Istanbul" },
    { name: "Royal Scotsman", provider: "Belmond", from: "Edinburgh" },
  ],
  "alpine-trains": [
    { name: "Glacier Express", provider: "Glacier Express", from: "Zermatt", to: "St. Moritz" },
    { name: "Bernina Express", provider: "RhB", from: "St. Moritz", to: "Tirano" },
  ],
};

export function trainTripsLd(page: { slug: string; lede: string; photos: { src: string }[] }) {
  const trips = railTrains[page.slug];
  if (!trips?.length) return null;
  const url = absoluteUrl(`/rail/${page.slug}`);
  const image = page.photos[0]?.src ? absoluteUrl(page.photos[0].src) : undefined;
  return {
    "@context": "https://schema.org",
    "@graph": trips.map((trip) => ({
      "@type": "TrainTrip",
      name: trip.to ? `${trip.name}, ${trip.from} to ${trip.to}` : trip.name,
      trainName: trip.name,
      description: clip(page.lede, 300),
      url,
      ...(image ? { image } : {}),
      provider: { "@type": "Organization", name: trip.provider },
      departureStation: { "@type": "TrainStation", name: trip.from },
      ...(trip.to ? { arrivalStation: { "@type": "TrainStation", name: trip.to } } : {}),
    })),
  };
}

export function touristTripsLd(place: {
  slug: string;
  itineraries: { title: string; nights: string; season: string; path: string; ports: string[] }[];
}) {
  const url = absoluteUrl(`/destinations/${place.slug}`);
  const trips = place.itineraries
    .map((item) => {
      const places = placeNames(item.ports);
      return {
        "@type": "TouristTrip",
        name: item.title,
        description: clip(`${item.nights}. ${item.path}. ${item.season}.`, 300),
        url,
        touristType: "Cruise passengers",
        provider: { "@id": `${siteUrl}/#agency` },
        ...(places.length
          ? {
              itinerary: {
                "@type": "ItemList",
                itemListElement: places.map((name, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name,
                  item: { "@type": "Place", name },
                })),
              },
            }
          : {}),
      };
    })
    .filter((trip) => trip.itinerary);
  if (!trips.length) return null;
  return { "@context": "https://schema.org", "@graph": trips };
}

export function skiDestinationLd(page: { slug: string; title: string; lede: string; image: string }) {
  const url = absoluteUrl(`/ski/${page.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${url}#destination`,
    name: page.title,
    description: clip(page.lede, 300),
    url,
    image: absoluteUrl(page.image),
    touristType: "Skiers",
    provider: { "@id": `${siteUrl}/#agency` },
  };
}

export function cityListLd(
  path: string,
  cities: { name: string; place: string; description: string; image: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Departure cities",
    url: absoluteUrl(path),
    numberOfItems: cities.length,
    itemListElement: cities.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "City",
        name: city.name,
        description: clip(city.description, 220),
        image: absoluteUrl(city.image),
        containedInPlace: { "@type": "AdministrativeArea", name: city.place },
      },
    })),
  };
}

export function attractionListLd(page: {
  slug: string;
  stops: { name: string; text: string; photos?: { src: string }[] }[];
}) {
  const stops = page.stops.filter((stop) => !/scenic sail/i.test(stop.name));
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Places you can visit from the ship",
    url: absoluteUrl(`/in-port/${page.slug}`),
    numberOfItems: stops.length,
    itemListElement: stops.map((stop, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristAttraction",
        name: stop.name,
        description: clip(stop.text, 300),
        ...(stop.photos?.[0]?.src ? { image: absoluteUrl(stop.photos[0].src) } : {}),
      },
    })),
  };
}

export function destinationListLd(items: { slug: string; title: string; lede: string; image: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/destinations#list`,
    name: "Cruise regions",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(`/destinations/${item.slug}`),
      item: {
        "@type": "TouristDestination",
        name: item.title,
        description: clip(item.lede, 160),
        url: absoluteUrl(`/destinations/${item.slug}`),
        image: absoluteUrl(item.image),
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
