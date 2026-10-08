/** Old static pages Google already knows, pointed at the current routes. */
/** @type {Record<string, string>} */
const legacy = {
  "/alaska-cruises.html": "/destinations/alaskan",
  "/alaskan-cruises.html": "/destinations/alaskan",
  "/caribbean-cruises.html": "/destinations/caribbean",
  "/mediterranean-cruises.html": "/destinations/mediterranean",
  "/europe-cruises.html": "/destinations/european",
  "/european-cruises.html": "/destinations/european",
  "/hawaii-cruises.html": "/destinations/hawaii",
  "/bermuda-cruises.html": "/destinations/bermuda",
  "/northern-europe-cruises.html": "/destinations/northern-europe",
  "/canada-new-england-cruises.html": "/destinations/canada-new-england",
  "/new-england-cruises.html": "/destinations/canada-new-england",
  "/river-cruises.html": "/destinations/river",
  "/expedition-cruises.html": "/destinations/expedition",
  "/asia-cruises.html": "/destinations/asia",
  "/asian-cruises.html": "/destinations/asia",
  "/south-america-cruises.html": "/destinations/south-america",
  "/world-cruises.html": "/destinations/world",
  "/australia-cruises.html": "/destinations/australia-new-zealand",
  "/australia-new-zealand-cruises.html": "/destinations/australia-new-zealand",
  "/new-zealand-cruises.html": "/destinations/australia-new-zealand",
  "/terms-and-conditions.html": "/policies/terms",
  "/terms.html": "/policies/terms",
  "/refund-policy.html": "/policies/refund",
  "/privacy-policy.html": "/policies/privacy",
  "/ski.html": "/ski",
  "/resorts.html": "/resorts",
  "/rail.html": "/rail",
  "/quote.html": "/quote",
  "/sailings.html": "/sailings",
  "/itineraries.html": "/itineraries",
  "/ports.html": "/ports",
  "/panama-canal-cruises.html": "/destinations/panama-canal",
  "/index.html": "/",
};

/** @param {string} pathname */
export function legacyTarget(pathname) {
  let path = pathname.toLowerCase();
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  if (legacy[path]) return legacy[path];
  if (!path.endsWith(".html")) {
    const withHtml = legacy[`${path}.html`];
    if (withHtml && withHtml !== path) return withHtml;
  }
  return null;
}
