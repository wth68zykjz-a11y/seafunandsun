import { writeFileSync } from "node:fs";
import { destinations, sampleNote } from "../src/data/destinations.ts";
import { destinationPhotos } from "../src/data/destination-photos.ts";
import { portGuides, shores, shoreNote } from "../src/data/excursions.ts";

const ashoreNotes = {
  alaskan:
    "Most Alaska stops end in the afternoon. Mendenhall Glacier is in Juneau, about 20 minutes from the cruise docks on Gastineau Channel. Creek Street is in downtown Ketchikan. A short ride from there reaches the totem poles at Saxman and Totem Bight. Skagway sits at the foot of White Pass, and the White Pass and Yukon Route railroad climbs from town to the pass. In Glacier Bay or Tracy Arm there is no pier. The ship spends those hours on the water. Some ships stay late enough in Juneau that you can eat in town. If you stay in Seattle or Vancouver before or after the cruise, you have the evening in the city. Steamed Dungeness crab can be lunch if you want it.",
  caribbean:
    "A typical island stop ends in the afternoon. Cozumel and the private islands have a beach and a swim. In Nassau, ships dock at Prince George Wharf. Walk out through Festival Place, then left onto Bay Street. The straw market is about five minutes from the gate, and Parliament Square is a couple of minutes farther. In San Juan you can walk up to El Morro. If the ship stays longer there, you have the afternoon in the old city, and an overnight leaves the evening open. Nights in Miami or Fort Lauderdale are in the city, after you leave the ship.",
  mediterranean:
    "Many stops end in the afternoon. The Gothic Quarter is in Barcelona, and you can walk there from some piers. The Colosseum and the museums are in Rome. Civitavecchia is about an hour to an hour and a half away. The Acropolis is in Athens, about 30 to 45 minutes from Piraeus. When the ship stays overnight, or sails as late as 10 p.m., the evening in the city is open. A reserved dinner can be part of those extra nights.",
  european:
    "A daytime stop leaves the afternoon short. Lisbon, the London ports, and the Mediterranean cities on these routes are easier with a night or two before or after, when you do not have to be back on the ship. An overnight, or a departure as late as 10 p.m., leaves the evening free. Tell us which cities you already know. We will put the extra nights on the ones you do not.",
  hawaii:
    "The sail between the islands takes longer than a short Caribbean cruise, and Pride of America often stays into the evening. You might use that time at a beach, in the car, or on the north shore. Pearl Harbor is easier before or after a California crossing, while you are staying on Oahu. A luau still needs the ship in port after dark.",
  bermuda:
    "Many Bermuda sailings stay overnight at the Dockyard, on the west end. Horseshoe Bay is about 30 minutes by taxi. Hamilton is about 20 minutes by ferry. St. George's is about an hour by bus. An overnight is enough time for the beach, Hamilton, and St. George's. On a short stop, use the excursion sold by the ship if you want to leave the Dockyard. If that tour is late, the ship waits. Sailings from Boston, New York, or Baltimore include sea days each way.",
  "northern-europe":
    "Most Baltic and Norway stops end in the afternoon. Bryggen is the old wharf in Bergen. Nyhavn is the canal in Copenhagen. The Rijksmuseum is in Amsterdam, and it holds Rembrandt’s The Night Watch. Ocean ships dock at IJmuiden, not in the canals. The museum is about 30 to 45 minutes from the pier. An overnight in Copenhagen or Stockholm leaves the evening free. Extra nights in London, Amsterdam, or Copenhagen are for a museum and a neighborhood.",
  "canada-new-england":
    "These stops are in towns, and many end in the afternoon. Boston Harbor and the Freedom Trail are in Boston. In Quebec, Upper Town and the Château Frontenac sit above the St. Lawrence. A late departure shows up more often on a fall foliage sailing than on a quick stop. Extra nights in Boston or Quebec let you stay out after dark.",
  river:
    "A river ship ties up in town, often into the evening. You walk off into Budapest, Vienna, or a village, and people often ride a bike along the river while the ship is there. A Mississippi sailing follows the Mississippi, with New Orleans and the river towns. A Danube sailing follows the Danube, with Budapest and Vienna. Extra nights in Budapest, Paris, Amsterdam, or New Orleans cover the parts of the city the ship only passes.",
  expedition:
    "An expedition landing may never reach a town. You put on the boots and the parka the ship issues, ride a Zodiac to a beach or the ice, and walk the path the guides mark. You may stand near penguins or seals and take pictures from the distance they set. If the water is calm, some ships add a kayak or a canoe for people who asked. Weather can cancel the landing and leave you on deck. Ushuaia and Longyearbyen are towns where you can stay before or after the voyage. The landing itself is on a beach or the ice, not in a city.",
  asia:
    "Singapore and Tokyo often keep the ship in port into the evening, and some sail as late as 10 p.m. A beach stop is still only a few hours. A night before or after is a chance to explore one district, or a museum, instead of racing through three cities.",
  "south-america":
    "Guanabara Bay, Sugarloaf, and Corcovado are in Rio. In Buenos Aires you can walk San Telmo and the waterfront at Puerto Madero, and the evening starts late, which lines up when the ship stays overnight or sails late. A daytime stop can include that waterfront and San Telmo. Extra nights are when you can stay out. A grill can be part of those nights if you want a table held.",
  world:
    "A world cruise spends many days at sea. On a short stop you can walk the streets nearest the pier. On an overnight you have the evening in that city. Southampton, Sydney, and Singapore, where many of these voyages start or end, are the places to add nights.",
  "australia-new-zealand":
    "Sydney Harbour and the Opera House are in Sydney. In Auckland, the waterfront is at the pier, and Mount Eden, a volcanic cone, is about 15 minutes away. The evening in town depends on a late departure or an overnight, which some itineraries have. Fewer cruises start and end in Brisbane or Melbourne. Extra nights in Sydney or Auckland are in the city after the ship has sailed.",
  "panama-canal":
    "While the ship is in the canal, you are on deck. You are not ashore unless the itinerary lists a dock, and many ships only pass through. These cruises usually stop in Cartagena. Extra nights belong at the start or the end, in Fort Lauderdale, Miami, Los Angeles, or San Diego. You have the evening there because the cruise has not started, or it has ended.",
};

const ashoreLeads = {
  alaskan: "Mendenhall Glacier is in Juneau, about 20 minutes from the docks. Creek Street is in downtown Ketchikan. Skagway sits at the foot of White Pass. In Glacier Bay or Tracy Arm there is no pier. The ship spends those hours on the water.",
  caribbean: "Cozumel and the private islands have beaches. In Nassau, walk out of Prince George Wharf through Festival Place and left onto Bay Street. The straw market is about five minutes from the gate. In San Juan you can walk up to El Morro, and a longer stay leaves the afternoon for the old city.",
  mediterranean: "The Gothic Quarter is in Barcelona. The Colosseum is in Rome. Civitavecchia is about an hour to an hour and a half away. The Acropolis is in Athens, about 30 to 45 minutes from Piraeus.",
  european: "A stop in Lisbon, at the London ports, or in a Mediterranean city is short if the ship leaves in the afternoon. If you add nights before or after, you can see one of them properly.",
  hawaii: "Time between the islands runs longer than a Caribbean stop. Pride of America often stays into the evening. A luau still needs the ship in port after dark.",
  bermuda: "The ship is at the Dockyard. Horseshoe Bay is about 30 minutes by taxi, Hamilton is about 20 minutes by ferry, and St. George's is about an hour by bus. If the ship stays overnight, there is time for all three.",
  "northern-europe": "Bryggen is the old wharf in Bergen. Nyhavn is the canal in Copenhagen. The Rijksmuseum is in Amsterdam, and it holds Rembrandt’s The Night Watch. Ocean ships dock at IJmuiden, not in the canals. The museum is about 30 to 45 minutes from the pier.",
  "canada-new-england": "Boston Harbor and the Freedom Trail are in Boston. In Quebec, Upper Town and the Château Frontenac sit above the St. Lawrence. A fall sailing is more likely to leave late than a short summer stop.",
  river: "The ship ties up in town, often into the evening. You walk off into Budapest, Vienna, or a village.",
  expedition: "You may put on the gear, ride a Zodiac to a beach or the ice, and take pictures. Going ashore is the reason for the cruise. Weather can cancel it. The landing is on a beach or the ice, not a walk through a city.",
  asia: "Singapore and Tokyo often keep the ship in port into the evening. A beach stop is still only a few hours.",
  "south-america": "Guanabara Bay, Sugarloaf, and Corcovado are in Rio. In Buenos Aires you can walk San Telmo and Puerto Madero, and the evening starts late, which only helps if the ship stays.",
  world: "A world cruise has more sea days than port days. On a short stop you can walk the streets nearest the pier. On an overnight you have the evening in that city.",
  "australia-new-zealand": "Sydney Harbour and the Opera House are in Sydney. In Auckland, Mount Eden is a volcanic cone about 15 minutes from the pier.",
  "panama-canal": "While the ship is in the canal, you are on deck. You are not ashore unless the itinerary lists a dock. These cruises usually stop in Cartagena.",
};

const buttons = {
  alaskan: "Seattle or Vancouver as the departure port",
  bermuda: "Boston, New York, or Baltimore as the departure port",
  "panama-canal": "Full transit or partial transit",
};

const lines = [];
const add = (s = "") => lines.push(s);

add("SEA FUN & SUN — DESTINATION PAGES");
add("The text on the destinations index and on each destination page, including photo captions.");
add("Updated from the live page copy.");
add("");
add("============================================================");
add("DESTINATIONS INDEX");
add("https://seafunandsun.com/destinations");
add("============================================================");
add("");
add("Cruise regions.");
add("");
add("An ocean cruise wakes you in a new harbor. A river cruise follows one river into town. An expedition cruise lands on a beach that has no port. Choose a region below. Europe is split into the Mediterranean, the Atlantic cities such as Lisbon and London, and the north: the Norwegian fjords, Iceland, and the Baltic. A world cruise runs for months. Each region has its own page, and a second page for what you can do once the ship is there.");
add("");
add("Departure ports");
add("Fort Lauderdale is a working port, built to get you on the ship. Miami, Barcelona, Vancouver, and Sydney are better cities if you want a few days before you sail or after you return. A Caribbean cruise from Miami or Fort Lauderdale spends more nights in the islands than a cruise of the same length from New York, New Jersey, Baltimore, or Boston. A southern or eastern Caribbean cruise can also start in San Juan, and in some seasons in Fort-de-France. An Alaska cruise usually leaves from Seattle or Vancouver.");
add("");
add("Ships and prices");
add("The comparison pages list the usual passenger count and a general price range, from the smallest ships to the largest. An excursion in a port can be added to the quote. It is not in the cruise fare unless the line includes it.");

for (const place of destinations) {
  if (place.slug === "rail") continue;
  const photos = [...(place.photos ?? []), ...(destinationPhotos[place.slug] ?? [])].filter(
    (photo, index, all) => all.findIndex((item) => item.src === photo.src) === index && photo.src !== place.image,
  );
  const paragraphPhotos = photos.slice(0, place.paragraphs.length);
  const itineraryPhotos = photos.slice(place.paragraphs.length, place.paragraphs.length + place.itineraries.length);
  const sparePhotos = photos.slice(place.paragraphs.length + place.itineraries.length);
  add("");
  add("============================================================");
  add(place.title.toUpperCase());
  add(`https://seafunandsun.com/destinations/${place.slug}`);
  add("============================================================");
  add("");
  add(place.card);
  add(place.title);
  add("");
  add(place.lede);
  add("");
  place.paragraphs.forEach((paragraph, index) => {
    add(paragraph);
    add("");
    if (paragraphPhotos[index]) {
      add(`[Photo] ${paragraphPhotos[index].caption}`);
      add("");
    }
  });
  if (buttons[place.slug]) add(`Button: ${buttons[place.slug]}`);
  add("");
  for (const list of place.lists) {
    add(list.heading);
    for (const item of list.items) add(`• ${item}`);
    add("");
  }
  if (ashoreNotes[place.slug]) {
    add(ashoreNotes[place.slug]);
    add("");
  }
  add("When to go");
  add(place.when);
  add("");
  for (const photo of sparePhotos) {
    add(`[Photo] ${photo.caption}`);
    add("");
  }
  const guide = portGuides[place.slug];
  if (guide) {
    add("What to expect in port");
    add(ashoreLeads[place.slug] ?? "");
    add("");
    for (const fact of guide.facts) {
      add(fact.label);
      add(fact.text);
      add("");
    }
  }
  const shore = shores[place.slug];
  if (shore) {
    add("Excursions you can add");
    add(shoreNote);
    add(shore.intro);
    add("");
    shore.excursions.forEach((trip, index) => {
      const note = guide?.outings[index];
      add(trip.title);
      add(trip.detail);
      add(`Place. ${trip.where}`);
      add(`Hours. ${trip.length}`);
      add(`Walking. ${trip.pace}`);
      if (note) {
        add(note.fits);
        add(`Bring. ${note.bring}`);
      }
      add("");
    });
  }
  add("Where the ship docks, and what you can do there");
  add("Button: See the ports");
  add("");
  add("Sample itineraries");
  add(sampleNote);
  add("");
  place.itineraries.forEach((trip, index) => {
    add(trip.title);
    if (itineraryPhotos[index]) add(`[Photo] ${itineraryPhotos[index].caption}`);
    add(trip.nights);
    add(trip.season);
    add(trip.path);
    add(trip.ship);
    for (const port of trip.ports) add(`• ${port}`);
    add("");
  });
  add(`Planning ${place.nav.toLowerCase()}?`);
  add(place.planning);
}

const text = `${lines.join("\n").trim()}\n`;
writeFileSync(new URL("../public/destination-pages.txt", import.meta.url), text);

const body = text
  .replace(/&/g, "&")
  .replace(/</g, "<")
  .replace(/>/g, ">");
const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Destination page text</title>
<style>
  body { margin: 0; background: #f7fbf9; color: #0c2340; font: 18px/1.5 Georgia, serif; }
  header { background: #0c2340; color: #f7fbf9; padding: 20px 16px 24px; }
  header p { margin: 8px 0 0; font: 17px/1.45 system-ui, sans-serif; }
  a { color: #f3c15b; }
  main { max-width: 46rem; margin: 0 auto; padding: 20px 16px 48px; }
  pre { white-space: pre-wrap; word-wrap: break-word; margin: 0; font: 18px/1.5 Georgia, serif; }
</style>
</head>
<body>
<header>
  <h1 style="font-size:1.6rem;margin:0">Destination page text</h1>
  <p>This is the current text from the cruise region pages. On an iPad, tap the share button, then Save to Files. A plain-text copy is also at <a href="/destination-pages.txt">destination-pages.txt</a>.</p>
</header>
<main><pre>${body}</pre></main>
</body>
</html>
`;
writeFileSync(new URL("../public/destination-text.html", import.meta.url), page);
console.log("wrote", text.length);
