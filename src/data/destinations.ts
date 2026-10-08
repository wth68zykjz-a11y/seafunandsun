export type SampleItinerary = {
  title: string;
  nights: string;
  season: string;
  ship: string;
  path: string;
  ports: string[];
};

export type Destination = {
  slug: string;
  nav: string;
  title: string;
  card: string;
  image: string;
  alt: string;
  lede: string;
  paragraphs: string[];
  lists: { heading: string; items: string[] }[];
  when: string;
  planning: string;
  itineraries: SampleItinerary[];
  photos?: { src: string; alt: string; caption: string }[];
};

const sampleNote = "These are typical routings and ports of call. Ships, dates, and fares change.";

export { sampleNote };

export const destinations: Destination[] = [
  {
    slug: "alaskan",
    nav: "Alaskan",
    title: "Alaskan Cruises",
    card: "Glaciers & wildlife",
    image: "/media/alaskan.jpg",
    alt: "A tidewater glacier meeting dark water in a steep fjord",
    lede: "You can sail the same ship and the same ports in May or in August. The month changes what you see. In May the tidewater glaciers are larger, because less of the winter ice has melted, and the days are colder. In August the salmon are running. Bears come to the rivers to feed, the evenings are longer, and the glacier faces have already lost some of that spring ice.",
    paragraphs: [
      "Most Alaska sailings run seven to fourteen nights round trip from Seattle, or one way between Seattle or Vancouver and Seward or Whittier. Royal Caribbean, Carnival, Norwegian, Holland America, Princess, and Celebrity sail the Inside Passage. Holland America and Princess sail from Vancouver often, including one-way Gulf sailings. Cunard does in some seasons, not every year. We compare them side by side, with no obligation to any one line.",
      "Juneau, Ketchikan, Skagway, and Seward are the usual stops, with the fjords between them. You can hear a glacier calve. Whales, bears, and eagles are on the water, not on a highway.",
    ],
    lists: [
      {
        heading: "The routes",
        items: [
          "Round-trip cruises from Seattle through the Inside Passage, 7 to 14 nights",
          "Vancouver is the departure port for a one-way cruise to Seward or Whittier, and for some Inside Passage round trips. A passport is required. The currency ashore is the Canadian dollar",
          "Seattle to Seward or Whittier — one way, across the Gulf of Alaska",
          "Glacier-focused sailings — Tracy Arm, Endicott Arm, College Fjord, Glacier Bay",
        ],
      },
      {
        heading: "Alaska in port",
        items: [
          "Watch a grizzly on the Kenai River, from a float plane or from the water",
          "Whale watching out of Juneau or Seward",
          "Skagway — the White Pass railroad and the Klondike gold camps",
          "Ketchikan — Creek Street, and the totem poles at Saxman and Totem Bight",
          "The port page names the dock, the ride, and what you can do there",
        ],
      },
    ],
    when: "The season runs from May through September. May is the colder start, and the glaciers are at their largest then. June and July are the busiest months, and the days are longest then. August and early September bring the salmon run, the bears at the rivers, and long evenings.",
    planning: "Tell us whether you want May, for the larger glaciers, or August, for the salmon and the bears. The ship can be the same in either month. A round-trip Alaska cruise from Seattle uses one airport. A one-way cruise to Seward or Whittier needs a flight at that end. If the cruise departs from Vancouver, stay a few days before or after. The Fairmont Pacific Rim looks over the harbor and the mountains.",
    itineraries: [
      {
        title: "Inside Passage classic",
        nights: "7 nights",
        season: "May–September",
        ship: "Resort or premium ship",
        path: "Seattle round trip",
        ports: ["Juneau", "Skagway", "Ketchikan", "Tracy Arm, from the ship. There is no pier"],
      },
      {
        title: "One-way across the Gulf of Alaska",
        nights: "10–14 nights",
        season: "June–August",
        ship: "Premium ship, often Holland America or Princess",
        path: "Vancouver or Seattle to Seward, or the reverse",
        ports: ["Inside Passage ports", "Hubbard Glacier or Glacier Bay, from the ship", "Seward, with time ashore for wildlife"],
      },
      {
        title: "Salmon and bears in August",
        nights: "7 nights",
        season: "August–early September",
        ship: "Compared across the lines that sail it",
        path: "Seattle round trip",
        ports: ["Juneau", "Ketchikan", "Icy Strait Point", "A river cruise or a whale watch, with time set aside"],
      },
    ],
  },
  {
    slug: "caribbean",
    nav: "Caribbean",
    title: "Caribbean Cruises",
    card: "Islands & reefs",
    image: "/media/caribbean.jpg",
    alt: "A quiet Caribbean cove with pale sand and clear water",
    lede: "More ships sail here than in any other region. In Nassau, the walk from Prince George Wharf through Festival Place reaches the straw market on Bay Street in about five minutes. In San Juan you can walk up to El Morro. Many travelers start in the Caribbean, then come back for a particular ship and a shorter list of ports.",
    paragraphs: [
      "Round-trip cruises run seven to eleven nights and depart from Miami, Fort Lauderdale, Galveston, New Orleans, and Tampa. Caribbean cruises also depart from New York, New Jersey, and Maryland. Cruises also start in San Juan, and in some seasons in Fort-de-France, Martinique. A San Juan start puts a seven-night cruise in the islands without the sea days a Florida start needs to reach the same ports. Fort-de-France is a start when MSC Opera or a smaller French ship is based there for the season. We compare Royal Caribbean, Carnival, Norwegian, Celebrity, Princess, and the rest, and we match the ship to the trip rather than the other way around.",
      "Northeast departures mean more sea days. From New York, New Jersey, or Maryland, the ship needs extra days to reach the islands and extra days to come home. A Florida sailing of the same length spends more of those nights in port. We will say how many sea days are on the one you are looking at before you book it.",
      "A western Caribbean cruise often includes Cozumel and Grand Cayman. An eastern one often includes St. Thomas, St. Maarten, and, on a longer sailing, Antigua or Martinique. Aruba, Bonaire, and Curaçao are a southern routing. The port page says where the ship docks, and how far the sights are from the pier.",
      "A seven-night cruise that starts in Miami is usually a Bahamas cruise, a western Caribbean cruise to Cozumel and Grand Cayman, or an eastern one to St. Thomas and St. Maarten. The ship uses two or three of those nights at sea. A seven-night cruise that starts in San Juan usually includes four or five ports, such as St. Thomas, St. Maarten, Antigua, St. Lucia, Barbados, St. Kitts, or Aruba, Bonaire, and Curaçao, and one or two nights at sea. Miami has more ships and more sailing dates, including the largest. The ships that start and end in San Juan are mid-size. Royal Caribbean does that year-round, on ships such as Rhapsody of the Seas and Vision of the Seas. Celebrity and Norwegian do it on some weeks. The Icon-class ships stop in San Juan. A cruise on those ships usually starts in Florida. Old San Juan is beside the dock. South Beach is a taxi ride from the Miami terminal, so a night there is a separate booking. A passport is the document to carry from either port, because several of the islands are foreign.",
      "MSC’s large ships, including World America, start in Miami. MSC Opera, about 2,600 guests, is the smaller ship in this region. From late 2026 it starts in La Romana, and later in Fort-de-France. Explora Journeys, about 900 guests, usually sails one way between San Juan and Miami. It does not start and end in the same city every week. Viking’s ocean ships, about 930 guests, sail a 10-night round trip from San Juan, and the line does not book anyone under 18. Silversea’s Silver Shadow, about 390 guests, starts and ends some cruises in San Juan and also sails one way from Miami. Drinks are in those fares. Star Clippers does not start a cruise in San Juan or Miami. The sailing ships, about 170 guests on Star Clipper and Star Flyer and about 227 on Royal Clipper, start in St. Maarten, Barbados, Antigua, Aruba, or Grenada, and they anchor off small bays. An agent requests the Explora, Silversea, Viking, and Star Clippers fares. A past-guest number, or a military discount, belongs on that request.",
    ],
    lists: [
      {
        heading: "Popular sailings",
        items: [
          "Cozumel is the island off the Yucatán, and ships dock there. Cancún is a resort stay, not the dock",
          "Grand Cayman — Stingray City and the reef",
          "Nassau and Freeport",
          "St. Thomas and St. Maarten",
          "Costa Maya — a western Caribbean beach stop",
          "Antigua is on an eastern Caribbean cruise. Costa Maya is on a western one. They are not stops on one seven-night sailing",
          "Aruba, Bonaire, and Curaçao — a southern routing, usually from San Juan",
          "Martinique, at Fort-de-France — not the small coves down the coast",
        ],
      },
      {
        heading: "Excursion ideas",
        items: [
          "Snorkel the house reef from the beach or by boat",
          "Sunset catamaran sail with drinks in hand",
          "Time at the beach, with loungers, snacks, and stops to swim",
          "Zip lines and jungle ATV rides",
          "Conch fritters in Nassau, chopped conch fried in a seasoned batter, and time at the beach",
          "A dive with a local guide — the reef is better from underwater",
          "In a Martinique bakery, a croissant, layered dough of flour and butter, or a pain au chocolat, that dough around a bar of chocolate",
        ],
      },
    ],
    when: "Ships sail the Caribbean year-round. December through April is the peak season: the steadiest weather, and the highest cruise fares. August through October is hurricane season. Named storms rarely reach a ship at sea, and the cruise fares are lower.",
    planning: "Send the month and the departure port. A seven-night cruise that departs from Miami has more nights at sea than a cruise of the same length that departs from San Juan, because the San Juan ship is already in the islands. A cruise of the same length that departs from New York, Baltimore, or Boston adds sea days each way. Those sea days should be on the itinerary before you choose.",
    itineraries: [
      {
        title: "Western Caribbean",
        nights: "7 nights",
        season: "Year-round; best value in late summer",
        ship: "A cruise that departs from Florida often stops at Cozumel, Grand Cayman, and Jamaica. A cruise that departs from Galveston often stops at Cozumel and Costa Maya",
        path: "Round trip, departing from South Florida or the Gulf",
        ports: ["From Florida: Cozumel, Grand Cayman, Jamaica", "From Galveston: Cozumel and Costa Maya", "A sea day each way"],
      },
      {
        title: "Eastern Caribbean",
        nights: "7 nights, departing from San Juan. Longer if the cruise departs from Miami",
        season: "December–April",
        ship: "Resort or premium",
        path: "A seven-night cruise departs from San Juan. A longer cruise departs from Miami",
        ports: ["St. Thomas", "St. Maarten", "Martinique or Antigua on the longer sailings"],
      },
      {
        title: "Aruba, Bonaire, and Curaçao",
        nights: "7 nights, departing from San Juan. 8–11 nights if the cruise departs from Florida",
        season: "Shoulder months",
        ship: "A line that is actually scheduled into Aruba, Bonaire, and Curaçao",
        path: "Round trip, departing from San Juan, or a longer loop that departs from southern Florida",
        ports: ["Aruba", "Bonaire", "Curaçao"],
      },
    ],
    photos: [
      { src: "/media/ships/explora.jpg", alt: "Explora III, a dark-hulled ship of about 900 guests, seen from above the stern", caption: "Explora carries about 900 guests, all in suites. A Caribbean cruise on Explora usually starts in San Juan and ends in Miami, or the reverse." },
      { src: "/media/ships/viking-ocean.jpg", alt: "A Viking ocean ship in a Norwegian fjord", caption: "A Viking ocean ship carries about 930 guests. This photo is in a Norwegian fjord. The 10-night Caribbean cruise uses a ship of this size and starts and ends in San Juan." },
      { src: "/media/ships/silver-shadow.jpg", alt: "Silver Shadow, a small white Silversea ship, with a glacier behind it", caption: "Silver Shadow carries about 390 guests. Some Caribbean cruises on this ship start and end in San Juan. This photo is the same ship in Alaska." },
      { src: "/media/ships/royal-clipper.jpg", alt: "Royal Clipper under full sail, with green islands behind the masts", caption: "Royal Clipper carries about 227 guests. Star Clippers cruises start in St. Maarten, Barbados, Antigua, Aruba, or Grenada. They do not start in San Juan or Miami." },
      { src: "/media/ships/msc-opera.jpg", alt: "MSC Opera docked at a tropical pier, with the name on the bow", caption: "MSC Opera carries about 2,600 guests. It is much smaller than the MSC ships that start in Miami. Southern Caribbean cruises on Opera start in La Romana, and later in Fort-de-France." },
    ],
  },
  {
    slug: "mediterranean",
    nav: "Mediterranean",
    title: "Mediterranean Cruises",
    card: "Ports & culture",
    image: "/media/mediterranean.jpg",
    alt: "A whitewashed harbor town above a small Mediterranean port",
    lede: "Most mornings the ship is in a different port. One morning that port may be Barcelona, and the next morning a smaller harbor. Pick the ship for those ports, not for the photograph on the cover.",
    paragraphs: [
      "Cruises usually run seven to fourteen nights and depart from Barcelona, Civitavecchia for Rome, and Piraeus for Athens. Royal Caribbean, MSC, Norwegian, Celebrity, and Cunard all sail the region, and the luxury lines sail it too. A Venice stop is usually Ravenna or Trieste, not a dock in the lagoon. We compare the routes, the ports, and what the fare includes, then match the ship to how you like to travel.",
      "A Greek week tends to include Athens, Santorini, Mykonos, and Crete. An Adriatic week tends to include Dubrovnik, Kotor, and Split, with the ship in Ravenna or Trieste rather than Venice. A week from Barcelona tends to include Palma, Marseille, Nice, or Monaco. A 14- to 18-day cruise from the United Kingdom can include ports from more than one of those.",
    ],
    lists: [
      {
        heading: "The routes",
        items: [
          "Greece — Athens, Santorini, Mykonos, Crete",
          "Italy — Rome at Civitavecchia, the Amalfi coast when the ship actually stops",
          "Venice — from Ravenna or Trieste. Large ships do not dock in the lagoon",
          "Spain — Barcelona, Valencia, a Seville stop",
          "France — Marseille, Nice, Monaco",
          "The Adriatic — Dubrovnik, Kotor, Split",
          "The Balearics — Mallorca and the islands",
        ],
      },
      {
        heading: "Worth going ashore for",
        items: [
          "Santorini, from the caldera tender",
          "Athens, from Piraeus",
          "Rome, from Civitavecchia",
          "Florence, from Livorno, and Pisa as its own city",
          "Venice, from Ravenna or Trieste",
          "Dubrovnik, Kotor, and Split",
          "Amalfi, when the ship tenders there",
          "Barcelona, Palma, Marseille, Nice, and Monaco",
          "The port page names the dock, the ride, and what is in the city",
        ],
      },
    ],
    when: "May and June are the most comfortable months: warm water, long light, and cruise fares that have not yet reached the August fare. September keeps the warmth with fewer people in the ports. In winter, most of these cruises are repositioning crossings, with more days at sea and fewer days in port.",
    planning: "Tell us whether you want Greece, the Adriatic, or Spain and France. We price the ships that stop there.",
    itineraries: [
      {
        title: "Greek isles",
        nights: "7 nights",
        season: "May–June or September",
        ship: "Resort, premium, or a smaller luxury ship",
        path: "Athens round trip",
        ports: ["Santorini", "Mykonos", "Crete", "A quieter island if the routing allows"],
      },
      {
        title: "The Adriatic",
        nights: "7–10 nights",
        season: "Shoulder months",
        ship: "MSC, Celebrity, and the luxury lines, compared",
        path: "Dubrovnik, Kotor, and Split. The ship docks in Ravenna or Trieste. Large ships do not dock in Venice. Those piers are about two hours from the city.",
        ports: ["Dubrovnik", "Kotor or Split", "A sea day"],
      },
      {
        title: "Western Mediterranean",
        nights: "7 nights",
        season: "May–September",
        ship: "From Barcelona",
        path: "Barcelona round trip, or one way to Rome",
        ports: ["Palma", "Marseille or Provence", "Rome (Civitavecchia)", "A sea day"],
      },
    ],
  },
  {
    slug: "european",
    nav: "European",
    title: "European Cruises",
    card: "Cities by sea",
    image: "/media/european.jpg",
    alt: "A historic canal and stone bridge in soft morning light",
    lede: "These cruises visit several cities on one sailing, usually from Lisbon, Amsterdam, Le Havre, or Southampton.",
    paragraphs: [
      "Cruises usually run seven to fourteen nights and depart from Lisbon, Amsterdam, Le Havre, or Southampton. The usual ports are Lisbon, Porto, Amsterdam, Bruges, and London. A winter cruise from Lisbon or Southampton tends to include Tenerife, Gran Canaria, or Funchal. Barcelona, Rome, Greece, and the Adriatic are on the Mediterranean page. Cunard, MSC, Celebrity, and Royal Caribbean sail these routes. We compare them, and we build the trip around the cities you want.",
      "The usual mistake in Europe is trying to see too much. Tell us which cities you have already visited, and we will build the sailing around the ones you have not.",
    ],
    lists: [
      {
        heading: "Classic ports",
        items: [
          "Amsterdam, Bruges & the canals",
          "Paris, from the docks at Le Havre or Rouen",
          "London & the Thames",
          "Dubrovnik, Split & the Dalmatian coast",
          "Venice, from the docks at Ravenna or Trieste",
          "Barcelona, Marseille & the French Riviera",
          "Lisbon, Porto & the Atlantic coast",
        ],
      },
      {
        heading: "Worth going ashore for",
        items: [
          "A canal boat and a cheese hall in Bruges",
          "The cliffs of Étretat with a Normandy lunch",
          "The Alcázar gardens in Seville, and flamenco when the ship stays late enough",
          "Pompeii — the city that froze in place",
          "Tuscany — hills, vineyards, and a village lunch",
          "The Louvre is in Paris. It holds the Mona Lisa and the Winged Victory of Samothrace. Notre-Dame and the Eiffel Tower are in the city too. The ship docks at Le Havre. Paris is about two hours from the pier. Shangri-La Paris, looking toward the tower, is a stay in the city before or after the cruise.",
          "Westminster Abbey and the Tower of London are in London. The ship docks at Southampton. London is about an hour and a half to two hours from the pier. The Savoy is a stay in the city before or after the cruise.",
          "Belém, Alfama, and Time Out Market are in Lisbon. The Four Seasons Hotel Ritz is a stay in the city before or after the cruise.",
        ],
      },
    ],
    when: "May through September is the classic season. The shoulder months keep the same ports with fewer crowds, and the light is often better. In winter, a crossing between Southampton and New York makes the ocean the point of the trip.",
    planning: "Tell us which cities you have already seen. Barcelona, Rome, Greece, and the Adriatic are on the Mediterranean page. This page is Lisbon, Amsterdam, London, and the Canary Islands.",
    itineraries: [
      {
        title: "Atlantic capitals",
        nights: "10–12 nights",
        season: "May–September",
        ship: "Cunard, Celebrity, MSC, or a luxury line",
        path: "Lisbon toward London, or the reverse",
        ports: ["Lisbon", "Porto or Vigo", "Bilbao or Bordeaux", "Le Havre", "Southampton or Dover"],
      },
      {
        title: "Canals and northern Europe",
        nights: "7 nights",
        season: "Summer",
        ship: "A ship that actually docks long enough for the city",
        path: "Amsterdam or a North Sea round trip",
        ports: ["Amsterdam", "Zeebrugge for Bruges", "Le Havre for Paris", "Dover or London"],
      },
      {
        title: "Canary Islands",
        nights: "7 nights, departing from Lisbon or Málaga. About 12 nights if the cruise departs from Southampton",
        season: "Winter",
        ship: "From Lisbon, Málaga, or Southampton",
        path: "A winter Atlantic cruise, not a Mediterranean cruise",
        ports: ["Tenerife or Gran Canaria", "Lanzarote or Funchal", "A sea day back toward Europe"],
      },
    ],
  },
  {
    slug: "hawaii",
    nav: "Hawaii",
    title: "Hawaii Cruises",
    card: "Islands & volcanoes",
    image: "/media/hawaii.jpg",
    alt: "Black volcanic rock and turquoise water on a Hawaiian coast",
    lede: "The ship moves from island to island, so you do not need a car between them. Longer sailings from San Diego, Los Angeles, or Vancouver continue to Tahiti.",
    paragraphs: [
      "Norwegian's Pride of America stays among the Hawaiian islands and returns to Honolulu. Holland America, Princess, and Celebrity sail from San Diego, Los Angeles, or Vancouver. Those cruises spend several days at sea before the islands, and some continue to Tahiti. Ships stop at Maui. They rarely depart from there.",
      "Tell us which islands you want time on, and we will find the sailings that actually stop there.",
    ],
    lists: [
      {
        heading: "The usual stops",
        items: [
          "Oahu & Pearl Harbor",
          "Maui — as the routing allows",
          "Hanalei Bay on Kauai's north shore",
          "Honolulu, on every round trip",
          "Tahiti and Moorea, on longer sailings from San Diego, Los Angeles, or Vancouver",
          "Fiji & the South Pacific, on the longer runs",
        ],
      },
      {
        heading: "In port",
        items: [
          "Snorkel with sea turtles, from the ship or by kayak",
          "The Road to Hana, from Kahului",
          "A plantation lunch on the island",
          "A luau, on the evenings the ship stays in port long enough: kalua pig, pork cooked in an underground oven, and poi, pounded taro",
          "Pearl Harbor in the morning, and a beach after that",
        ],
      },
    ],
    when: "Ships sail among the islands year-round. Winter brings the gentlest seas and the whale season. The ports are busier in summer. A cruise that departs from San Diego is the practical way to add Tahiti if you are not already in Hawaii.",
    planning: "Say whether you are already in the islands or leaving from California. The flight, or the extra sea days, belongs in the quote.",
    itineraries: [
      {
        title: "Between the Hawaiian islands",
        nights: "7 nights",
        season: "Year-round",
        ship: "Pride of America style or a line that stays overnight in the islands",
        path: "Honolulu round trip",
        ports: ["Maui", "Kauai", "Hilo or Kona", "A second night in a port when the ship offers it"],
      },
      {
        title: "California or Vancouver to the islands",
        nights: "10–18 nights to Hawaii. Add about a week if the ship continues to Tahiti",
        season: "Winter, whale season",
        ship: "Holland America, Princess, or Celebrity from California",
        path: "San Diego, Los Angeles, or Vancouver, either one way or round trip",
        ports: ["Honolulu", "A neighbor island", "Tahiti and Moorea on the longer runs"],
      },
    ],
  },
  {
    slug: "bermuda",
    nav: "Bermuda",
    title: "Bermuda Cruises",
    card: "Pink sand beaches",
    image: "/media/bermuda.jpg",
    alt: "Pink sand and clear shallow water on an empty Bermuda beach",
    lede: "Horseshoe Bay has pink sand. Hamilton and St. George’s are towns on the island. Ships dock at the Royal Naval Dockyard, on the west end. Horseshoe Bay is about 30 minutes by taxi and closer to 45 by bus. Hamilton is about 20 minutes by ferry.",
    paragraphs: [
      "Most Bermuda cruises run about seven nights and depart from Boston, New York, or Baltimore. Many stay overnight, which means the ship is still there the next morning. That is enough time for Horseshoe Bay, Hamilton, and St. George's, at the east end. Royal Caribbean, Carnival, Norwegian, and Celebrity are the lines that regularly sail there. On a five-hour stop you stay near the Dockyard, unless you take an excursion sold by the ship. If that tour runs late, the ship waits. A taxi or a tour you booked on your own does not come with that.",
      "A cruise that departs from Boston still has a sea day each way. That is shorter than a Caribbean cruise that departs from New York. The ocean is part of either cruise.",
      "Bermuda also works as a destination of its own: an island stay, or a sailing that departs from the island. The two combine easily, and we will arrange both.",
    ],
    lists: [
      {
        heading: "In port",
        items: [
          "Horseshoe Bay, about 30 minutes by taxi from the Dockyard",
          "You can swim at the beach beside the Dockyard when the ship is only there for a few hours",
          "Hamilton, about 20 minutes by ferry",
          "St. George's, at the east end, about an hour by bus",
          "Gibbs Hill lighthouse, above the south shore",
          "The ferry across Hamilton Harbour",
          "A rum and pineapple stop",
        ],
      },
      {
        heading: "The water",
        items: [
          "The water is shallow, clear, and warm enough for swimming most of the year.",
          "Snorkel, kayak, or paddleboard from the beach",
          "Sailing days out of the harbour",
          "Watch the sunset from a beach bar rather than from the ship.",
        ],
      },
    ],
    when: "The cruise season runs from April through October. Late spring and early fall are the easier months. A five-hour stop is rarely enough.",
    planning: "Ask whether the ship stays overnight. That is enough time for Horseshoe Bay, Hamilton, and St. George's. On a short stop, the ship's own excursion is the way off the Dockyard, because the ship waits if that tour is late.",
    itineraries: [
      {
        title: "Bermuda overnight",
        nights: "7 nights",
        season: "April–May or September–October",
        ship: "A Northeast sailing that docks overnight, not a fly-by",
        path: "Boston, New York, or Baltimore",
        ports: ["One long Bermuda stay", "A sea day each way"],
      },
      {
        title: "Islands plus Bermuda",
        nights: "10–11 nights",
        season: "November–May",
        ship: "A Northeast sailing. Miami does not routinely add Bermuda",
        path: "New York, Baltimore, or Boston on a longer loop",
        ports: ["Bermuda", "One or two Caribbean stops", "Sea days in between"],
      },
    ],
  },
  {
    slug: "northern-europe",
    nav: "Northern Europe",
    title: "Northern Europe Cruises",
    card: "Fjords & Iceland",
    image: "/media/northern-europe.jpg",
    alt: "A steep fjord with a thin waterfall and low clouds",
    lede: "Summer brings the midnight sun. Svalbard and Greenland are where the ice is. In a narrow fjord, a ship of about 200 guests can go farther in. A ship of about 2,500 stays in the wider water.",
    paragraphs: [
      "Holland America, Princess, Norwegian, Celebrity, MSC, Viking, and Cunard sail the fjords, Iceland, and the Baltic from Amsterdam, Copenhagen, Southampton, and the Norwegian ports. Hapag-Lloyd and the expedition lines go farther north, toward Svalbard and Greenland.",
      "A fjord week tends to include Bergen, Geiranger, and Flåm. An Iceland cruise tends to include Reykjavik. A Baltic cruise tends to include Copenhagen, Stockholm, Tallinn, and Helsinki. A longer sailing can add the Lofotens, Svalbard, or Greenland.",
    ],
    lists: [
      {
        heading: "The routes",
        items: [
          "The Norwegian fjords — Bergen, Geiranger, the West Fjords",
          "Iceland — Reykjavik, and sometimes Akureyri or Ísafjörður",
          "The Lofotens & the North Atlantic",
          "The Baltic & the Hanseatic cities",
          "Greenland & the edge of the ice, on longer voyages",
        ],
      },
      {
        heading: "In port",
        items: [
          "Fjord days with waterfall walks",
          "Reykjavik and a whale watch",
          "The red fishing cabins of the Lofotens",
          "Nyhavn and Rosenborg are in Copenhagen. Hotel d’Angleterre is a stay in the city before or after the cruise.",
          "Gamla Stan is in Stockholm. The Vasa Museum holds the warship Vasa, raised from the harbor and kept almost whole. Grand Hôtel looks across the water at the palace.",
          "The northern lights, when the season and the sky cooperate",
        ],
      },
    ],
    when: "June through August is the season for the fjords and the midnight sun. September can add the aurora. Farther north, the window is shorter.",
    planning: "Choose the fjords, Iceland, or the Baltic. A seven-night cruise does not cover all three.",
    itineraries: [
      {
        title: "Fjord classic",
        nights: "7 nights",
        season: "June–August",
        ship: "A smaller ship if you want to sail the narrow water, or a big ship if you want the resort on board",
        path: "Bergen, or another Norwegian port. Copenhagen is a Baltic start",
        ports: ["Geiranger or another fjord", "Flåm", "A coastal town"],
      },
      {
        title: "Iceland and north",
        nights: "10–14 nights",
        season: "Summer",
        ship: "Expedition or a traditional line that reaches Reykjavik",
        path: "Rotterdam, London, or a Norwegian port",
        ports: ["Reykjavik", "south-coast stop", "Lofotens if the routing goes that far"],
      },
      {
        title: "Baltic cities",
        nights: "9–10 nights for Tallinn, Helsinki, and Stockholm. A 7-night cruise stops in fewer cities",
        season: "May–August",
        ship: "A city-port ship, not an ice ship",
        path: "Copenhagen or Stockholm round trip",
        ports: ["Tallinn", "Helsinki", "Stockholm or Visby", "A Hanseatic stop"],
      },
    ],
  },
  {
    slug: "canada-new-england",
    nav: "Canada & New England",
    title: "Canada & New England Cruises",
    card: "Fall foliage",
    image: "/media/new-england.jpg",
    alt: "A white lighthouse and autumn trees on a rocky New England point",
    lede: "Boston and New York are easy starts if you live in the Northeast. In October the maples are in color along this coast.",
    paragraphs: [
      "Most cruises run three to eleven nights and depart from Boston. Longer cruises depart from New York. Royal Caribbean, Carnival, Norwegian, Celebrity, and Princess all sail the region. We compare them directly, without a preference for any one line.",
      "The ports are the trip: Cape Cod, Halifax, Quebec, and Bermuda on some loops. You can see a lot from the deck. The better days are still the ones ashore.",
    ],
    lists: [
      {
        heading: "Coastal classics",
        items: [
          "Boston round trips — Cape Cod, and sometimes Bermuda",
          "New York departures with a Canada & New England feel — 7 to 11 nights",
          "Canada & New England — Halifax, Quebec & the islands",
          "Bermuda hops — short, shallow, and made for snorkeling",
          "Fall sailings, when you can see the maples from the ship",
        ],
      },
      {
        heading: "In port",
        items: [
          "Lighthouse walks, and a clam bake: clams, lobster, corn, and potatoes steamed together",
          "Cape Cod beach towns — Chatham, Hyannis, Provincetown",
          "Snorkel cays off Bermuda, when the routing goes there",
          "Old Quebec or Halifax, at your own pace",
          "A Boston harbor food crawl",
        ],
      },
    ],
    when: "The season runs from May through October. In October the maples are in color, and there are fewer people on deck. In summer the ships go to Cape Cod and the beach towns. In fall they go to Bar Harbor, Halifax, and Quebec.",
    planning: "A fall sailing is for the maples in Bar Harbor, Halifax, and Quebec. A summer sailing is for Cape Cod and the beach towns. Say whether you can leave from Boston or New York.",
    itineraries: [
      {
        title: "Fall foliage",
        nights: "7 nights",
        season: "Late September–October",
        ship: "From Boston or New York",
        path: "Canada & New England loop",
        ports: ["Bar Harbor or Portland", "Halifax", "Sydney, Nova Scotia, on the cruises that reach it", "A sea day"],
      },
      {
        title: "A long weekend from Boston",
        nights: "3–5 nights",
        season: "May–October",
        ship: "A short Boston sailing",
        path: "Boston round trip",
        ports: ["Cape Cod", "Portland or a similar harbor", "Back before the work week"],
      },
      {
        title: "Farther up the St. Lawrence",
        nights: "10–11 nights",
        season: "Fall",
        ship: "Celebrity, Princess, or a comparable line, priced against one another",
        path: "New York or Boston",
        ports: ["Halifax", "Quebec City when the ship goes upriver", "Charlottetown or Sydney, Nova Scotia"],
      },
    ],
  },
  {
    slug: "river",
    nav: "River",
    title: "River Cruises",
    card: "European and American rivers",
    image: "/media/river.jpg",
    alt: "A riverside town and vineyards at dusk",
    lede: "You follow one river and walk off into the towns. The ship, the cabin, and what the fare includes are the comparison.",
    paragraphs: [
      "On the Danube, the Rhine, the Seine, and the Douro, the usual lines are Viking, AmaWaterways, Avalon, Uniworld, and Scenic. American Cruise Lines does not sail those rivers. It is a U.S. line: the Mississippi, the Ohio, the Columbia and Snake, and the Great Lakes. Viking also sails the Mississippi. Windstar is an ocean line and does not sail any of these.",
      "In Budapest you can walk the Danube promenade and order goulash, beef and paprika in a thick sauce. In Vienna you can order schnitzel, a pounded veal cutlet fried in breadcrumbs. In the Wachau the river narrows between apricot orchards and Riesling vineyards. In New Orleans you can get beignets, fried dough with powdered sugar, and gumbo, a dark roux stew of shrimp or chicken. The landings north of New Orleans are small river towns, not a European capital. Name the river and the season. We put the ships that sail that river next to one another.",
    ],
    lists: [
      {
        heading: "The classic rivers",
        items: [
          "The Danube — Budapest to the Wachau, or Vienna toward the Black Forest",
          "The Rhine — Cologne to Amsterdam, the castle run",
          "The Seine and Normandy — Paris, Rouen, and Honfleur",
          "The Douro — Porto and the wine country",
          "The Mississippi — New Orleans north, Viking and American Cruise Lines",
          "The Ohio & the Great Lakes — American Cruise Lines",
          "The Moselle has steep Riesling vineyards and towns such as Cochem and Bernkastel. The Mekong is a wide brown river, and it has floating markets. In Vietnam you can order pho, rice noodles in beef broth. In Cambodia you can order fish amok, fish steamed in coconut and lemongrass. Viking and the other river lines sail both rivers",
          "The Nile — Viking, AmaWaterways, and Uniworld",
          "The Amazon — a few small ships out of Manaus, not the European river lines",
        ],
      },
      {
        heading: "While the ship is in port",
        items: [
          "A guided walk is included while the ship is tied up",
          "Cycling or a bike tour on quiet roads",
          "A wine or olive-oil stop the ship arranges",
          "Time on deck in the evening, with the river as the view",
          "Excursions that fit the hours the ship is there, not a whole weekend",
        ],
      },
    ],
    when: "The season runs from April through October, and the dates depend on the river. In spring the fruit trees along the Rhine are in blossom. In fall the vineyards change color and the light is better. The ships sail on a season, so the dates matter as much as the fare.",
    planning: "Name the river. A Danube ship and a Mississippi ship are not interchangeable. An agent requests many of these fares, because they are not posted.",
    itineraries: [
      {
        title: "Danube capitals",
        nights: "7 nights",
        season: "April–October",
        ship: "Viking, AmaWaterways, Avalon, or Uniworld — compared, not assumed",
        path: "Budapest to Passau, or the reverse",
        ports: ["Budapest", "Vienna", "Wachau valley", "A smaller town on the river"],
      },
      {
        title: "Rhine castles",
        nights: "7 nights",
        season: "Spring blossom or fall color",
        ship: "Same comparison: age of ship, cabin size, what is included",
        path: "Amsterdam to Basel, or a shorter castle segment",
        ports: ["Cologne", "Koblenz", "The castle gorge", "Strasbourg or another riverside town"],
      },
      {
        title: "The Seine or the Douro",
        nights: "7 nights",
        season: "Summer, or harvest on the Douro",
        ship: "River line that owns that water, not an ocean ship renamed",
        path: "Paris to Normandy, or Porto round trip",
        ports: ["Paris or Porto", "A vineyard or a cider house the ship includes", "A walk in a smaller town, included"],
      },
      {
        title: "American rivers",
        nights: "7+ nights",
        season: "Spring through fall, river by river",
        ship: "American Cruise Lines or Viking Mississippi",
        path: "New Orleans north, the Ohio, or a Great Lakes loop",
        ports: ["River towns rather than a single headline city", "Included excursions most days"],
      },
    ],
  },
  {
    slug: "expedition",
    nav: "Expedition",
    title: "Expedition Cruises",
    card: "Remote coasts",
    image: "/media/expedition.jpg",
    alt: "Sea ice under pale polar light",
    lede: "The ships are small. You go ashore by Zodiac with a guide. The ship decides which landings are possible, and weather can cancel a landing.",
    paragraphs: [
      "Lindblad, Ponant, and Hapag-Lloyd sail Antarctica, the Arctic, and the Galápagos, along with the expedition ships of Viking and Silversea. Patagonia uses those same small ships. UnCruise sails Alaska and the Pacific Northwest. It does not sail Antarctica or the Galápagos.",
      "Tell us the region and the months. A smaller ship spends more of the hours ashore. We will set out the options that match.",
    ],
    lists: [
      {
        heading: "Where the zodiacs go",
        items: [
          "Antarctica — the peninsula and the sub-Antarctic islands",
          "The Arctic — Svalbard, Iceland, the Lofotens",
          "The Galápagos — seven to fourteen days among the islands",
          "Patagonia — fjords and calving glaciers",
          "Sail as far north as the ice allows.",
          "New Zealand & the South Pacific, on select sailings",
        ],
      },
      {
        heading: "What a landing is like",
        items: [
          "Zodiac landings where the guide picks the best beach",
          "Kayaking, snorkeling, and the occasional cold-water swim",
          "Lectures on deck from the expedition team",
          "Photography before and after, with someone who teaches",
          "These ships carry fifty to two hundred guests, not three thousand.",
          "A backup plan when the weather changes the landing",
        ],
      },
    ],
    when: "Antarctica runs from November through March. The Arctic runs from June through September. Cabins are booked by the route, and the better ships fill early.",
    planning: "Antarctica, the Arctic, or the Galápagos, and the month. We match the ship to how much time you want off it.",
    itineraries: [
      {
        title: "Antarctic peninsula",
        nights: "10–12 nights",
        season: "November–March",
        ship: "Expedition ship, typically under 200 guests",
        path: "Ushuaia round trip",
        ports: ["Drake crossing or a fly-the-Drake option", "Peninsula landings", "A backup plan if the landing is canceled"],
      },
      {
        title: "Galápagos",
        nights: "7–14 nights",
        season: "Year-round, with wildlife peaks by island",
        ship: "A small expedition ship, not a big liner",
        path: "An island loop, departing from Baltra or San Cristóbal",
        ports: ["A naturalist sets the landing", "Snorkel stops", "No two weeks follow the same animals"],
      },
      {
        title: "The Arctic ice edge",
        nights: "8–14 nights",
        season: "June–September",
        ship: "Hapag-Lloyd, Lindblad, or another line with real ice capability",
        path: "Svalbard or a longer Iceland-to-ice routing",
        ports: ["Zodiac landings", "Wildlife on the ice edge", "Midnight sun instead of port shopping"],
      },
    ],
  },
  {
    slug: "asia",
    nav: "Asia",
    title: "Asia Cruises",
    card: "Temples & cities",
    image: "/media/asia.jpg",
    alt: "Hong Kong and Victoria Harbour at dusk",
    lede: "Singapore and Tokyo are the usual starts. The South China Sea adds long days at sea, so the flights belong in the same booking as the cruise.",
    paragraphs: [
      "Princess, Holland America, Celebrity, Royal Caribbean, and Norwegian sail from Singapore, Tokyo, and Hong Kong. Cunard does not sail a weekly cruise from those cities. It comes through on a longer voyage. We compare the ones that are actually scheduled, and we match the routing to the time you have.",
      "The ports are unlike a standard Caribbean or Mediterranean list. Tell us the dates, and we will shape the trip around the ones you care about.",
    ],
    lists: [
      {
        heading: "Where they go",
        items: [
          "Singapore — Marina Bay at night",
          "Tokyo, Yokohama & Tokyo Bay",
          "Shanghai & Hong Kong",
          "Phuket — Patong has the beach. Phuket Old Town has the older streets. The ship docks at the deep-water port, not on the sand. Patong is about 40 minutes away. Old Town is closer to 30. A boat toward Phi Phi is about an hour to an hour and a half after that.",
          "Saigon, the Mekong & Halong Bay",
          "Busan, Jeju & the Korean coast",
          "Trans-Pacific crossings with a stop at Honolulu or Fiji",
        ],
      },
      {
        heading: "Worth going ashore for",
        items: [
          "In Singapore, visit Gardens by the Bay, then Hainanese chicken rice, poached chicken with rice cooked in the chicken fat and stock, or laksa, rice noodles in a spicy coconut broth with prawns",
          "Visit the Grand Palace in Bangkok, then boat noodles nearby: rice noodles in a pork or beef broth, darkened with spices and a little blood, with sliced meat and morning glory. The bowls are small",
          "Walk Tokyo’s outer market, then order nigiri, a slice of raw fish on a small pad of vinegared rice. The dawn tuna auction does not fit a day in port.",
          "Visit Ho Chi Minh City’s District 1, and have a banh mi: a baguette with pâté, pork, pickled carrot and daikon, cilantro, and chili",
          "The Peak, the Star Ferry, and theme parks are in Hong Kong. The Peninsula is a stay in the city before or after the cruise.",
          "The French Concession and the Bund are in Shanghai. The Fairmont Peace Hotel is a stay in the city.",
          "A boat in Ha Long Bay, only when the ship is already in the bay",
        ],
      },
    ],
    when: "December through March is the calmer window. Typhoon season peaks in summer, and that is when the shore days become uncertain.",
    planning: "A cruise from Singapore tends to include Phuket, Vietnam, and Hong Kong. A cruise from Tokyo tends to include Yokohama, Osaka or Kagoshima, and Busan. A longer trans-Pacific sailing can add Honolulu, Los Angeles, or Vancouver. Name the city, and how many days you can be away.",
    itineraries: [
      {
        title: "Southeast Asia",
        nights: "7–14 nights",
        season: "December–March",
        ship: "Princess, Holland America, Celebrity, or a luxury peer",
        path: "Singapore round trip, or one way",
        ports: ["Phuket", "Vietnam", "A sea day across the South China Sea"],
      },
      {
        title: "Japan",
        nights: "7–12 nights",
        season: "Spring or fall",
        ship: "A line that overnights a Japanese port when possible",
        path: "Tokyo / Yokohama",
        ports: ["Yokohama", "A regional port such as Osaka, Kagoshima, or Busan", "Time ashore that isn't only a pier"],
      },
      {
        title: "Trans-Pacific",
        nights: "16+ nights",
        season: "Repositioning windows",
        ship: "A ship you would be comfortable living on for two weeks at sea",
        path: "Asia toward Honolulu, Los Angeles, or Vancouver",
        ports: ["A Pacific island stop", "Mostly ocean", "We say so before you book it"],
      },
    ],
  },
  {
    slug: "south-america",
    nav: "South America",
    title: "South America Cruises",
    card: "Rio & Cape Horn",
    image: "/media/south-america.jpg",
    alt: "A Patagonian fjord with a distant glacier",
    lede: "A cruise along the Brazilian coast, starting in Rio, is one sailing. A cruise through the southern fjords and around Cape Horn is another sailing. They do not share a port list. The ship should match the one you want.",
    paragraphs: [
      "Many current sailings begin in Rio de Janeiro and run the Brazilian coast. The older pattern was an Atlantic crossing from New York. Carnival, Norwegian, Holland America, and Cunard still touch the region, and the routes into the Patagonian fjords belong mainly to the expedition lines. We compare the lines that are actually scheduled, not the ones that sailed it years ago.",
      "A week from Rio includes Rio and Búzios. A longer Brazilian cruise can add Salvador or Recife. A Patagonia cruise includes Ushuaia, the fjords, and Cape Horn when the weather allows. You book one sailing or the other. They do not share a port list.",
    ],
    lists: [
      {
        heading: "The stops",
        items: [
          "Rio de Janeiro — the beaches, Sugarloaf, and Corcovado, with the city between them",
          "The Brazilian coast — Salvador, Recife, Florianópolis",
          "Patagonia — fjords, glaciers, Ushuaia",
          "The Andean coast — Callao, Valparaíso",
          "The Falklands & the sub-Antarctic, on the far routes",
        ],
      },
      {
        heading: "In port",
        items: [
          "Sugarloaf and a morning at the botanical gardens in Rio",
          "A samba show with lunch, and time at a beach if the ship stays",
          "Glacier views from the water, Patagonia",
          "The markets and the pastel hills of Valparaíso",
        ],
      },
    ],
    when: "Brazil’s east coast is warm from November through April. Patagonia runs from October through March.",
    planning: "Rio and the Brazilian ports, or Ushuaia and Cape Horn. We only price ships that are actually scheduled.",
    itineraries: [
      {
        title: "Brazilian coast",
        nights: "7 nights around Rio. 12–14 nights to reach Salvador or Recife",
        season: "November–April",
        ship: "A line actually scheduled out of Rio",
        path: "Rio round trip, or on toward Salvador",
        ports: ["Rio", "Búzios on the shorter week", "Salvador or Recife only on the longer routing"],
      },
      {
        title: "Cape Horn and the fjords",
        nights: "10–14 nights",
        season: "October–March",
        ship: "Expedition line, or Holland America when the routing is theirs",
        path: "Ushuaia, or a start in the Chilean fjords",
        ports: ["A glacier the ship sails past", "Cape Horn, when the weather allows", "Punta Arenas or another far-south port"],
      },
      {
        title: "Andean coast",
        nights: "Varies with the world-segment",
        season: "When the repositioning runs",
        ship: "Often a segment of a longer voyage",
        path: "Callao toward Valparaíso, or the reverse",
        ports: ["Lima / Callao", "Valparaíso", "A sea day on the Pacific"],
      },
    ],
  },
  {
    slug: "world",
    nav: "World",
    title: "World Cruises",
    card: "Grand voyages",
    image: "/media/world.jpg",
    alt: "A large cruise ship crossing open ocean",
    lede: "These voyages run about 70 to 120 days and stop at ports a shorter cruise cannot combine. Look at the calendar and the fare before you book a season on one ship.",
    paragraphs: [
      "Cunard, Regent, Silversea, and Holland America run full and partial world cruises. Other large lines run the transatlantic crossings and the season-long loops. We compare the routes, the port lists, and the inclusions. On a ninety-day voyage, what the fare includes is a larger question than it is on a week.",
      "Tell us the months you can be away and the places you do not want to miss. We will show you the sailings that satisfy both.",
    ],
    lists: [
      {
        heading: "The routes",
        items: [
          "Full round-the-world — 90 to 120 days, the great circle of ports",
          "Half-world — 45 to 70 days, an arc of the map",
          "The transatlantic crossings, both ways",
          "The Indian Ocean loop",
          "The Pacific loop, island by island",
          "Mediterranean-to-Africa runs, and the reverse",
        ],
      },
      {
        heading: "How it works",
        items: [
          "Ports most days, with the crossings built in",
          "One ship, one crew, for the whole run",
          "Mid-voyage joins on most of the big routes",
          "On the inclusive lines, the dining, drinks, and shore days come with it",
          "An agent reachable at 3 a.m. in whatever time zone you are in",
        ],
      },
    ],
    when: "World cruises sell by route and by year. The better sailings are usually chosen twelve to eighteen months ahead.",
    planning: "A world cruise lasts about three to four months, not seven nights. Tell us the months you can be away and the ports you will not skip.",
    itineraries: [
      {
        title: "Full circle",
        nights: "90–120 days",
        season: "Book 12–18 months ahead",
        ship: "Cunard, Regent, Silversea, or Holland America",
        path: "One ship, one crew, the long way around",
        ports: ["A published world-cruise port list", "The stops long enough to leave the ship"],
      },
      {
        title: "Half the map",
        nights: "45–70 days",
        season: "Same planning window",
        ship: "Often a segment of the full world cruise",
        path: "An arc — Med to Asia, or Pacific to the Atlantic",
        ports: ["You join and leave mid-voyage", "Flights on both ends, which we can arrange"],
      },
      {
        title: "Transatlantic crossing",
        nights: "7–14 nights",
        season: "Fall eastbound, spring westbound",
        ship: "Cunard is the classic; others cross too",
        path: "New York or Southampton, ocean in between",
        ports: ["Mostly no ports", "You spend the crossing on the ocean", "A good first long voyage"],
      },
    ],
  },
  {
    slug: "rail",
    nav: "Rail",
    title: "Rail Vacations",
    card: "Scenic train trips",
    image: "/media/rail.jpg",
    alt: "A passenger train beside a western river with mountains behind",
    lede: "We book scenic trains in North America, sleeper trains in Europe, and the hotel nights that connect them.",
    paragraphs: [
      "Amtrak, VIA Rail, and the scenic railways of North America are the trains we book, along with the hotel nights that connect them. The California Zephyr page names the canyons you see from the glass car. If you want a swim in the Glenwood pool, a hike above Winter Park, or a walk at Donner Lake, the station stop is too short. You get off and stay the night. The dining page says what a roomette includes, and what coach passengers buy in the cafe.",
      "Europe has two kinds of train. The Venice Simplon-Orient-Express, La Dolce Vita Orient Express, the Golden Eagle Danube Express, and the Royal Scotsman are overnight trips: you sleep on the train, meals are usually included, and the cabin you choose is what changes the price. An agent requests many of those dates, because they are not posted. The Glacier Express and the Bernina Express run in daylight through the Alps. The Bernina climbs past lakes and stone viaducts. You get off in the evening and sleep in a hotel.",
      "Land travel sits beside the trains: hotel nights in a city, or a few days between segments. Not every trip is escorted. A guided tour or an excursion may be available, depending on the stop. The quote says whether that stop has a tour, a walk, or only a short pause.",
    ],
    lists: [
      {
        heading: "The great routes",
        items: [
          "Glacier National Park — the Empire Builder and the excursion trains through the High Line",
          "Yellowstone — park time with the train as the way in",
          "The Grand Canyon — the Grand Canyon Railway from Williams",
          "The Canadian — Toronto toward the Rockies and Vancouver",
          "Cross-America — the California Zephyr, the Southwest Chief, the Coast Starlight, and the Empire Builder",
          "New England & the East Coast — the Vermonter, the Adirondack, the Downeaster",
          "Quebec and the eastern corridor",
        ],
      },
      {
        heading: "On board",
        items: [
          "A window seat on the mountain side, every time we can arrange it",
          "On the Zephyr, a roomette includes meals in the dining car: breakfast, lunch, and a three-course dinner. The cafe under the sightseer lounge sells food to every passenger.",
          "Rail-and-stay packages: nights before and after, door to door",
          "A park pass, or a guided walk, when that stop offers one",
          "Group and family rates, handled for the whole crew",
        ],
      },
      {
        heading: "Luxury trains in Europe",
        items: [
          "Venice Simplon-Orient-Express — Belmond. Paris, Venice, and on some dates Istanbul.",
          "La Dolce Vita Orient Express — Italy. Rome, Venice, and shorter routes, including Sicily.",
          "Golden Eagle Danube Express — Central Europe and the Balkans, in a private cabin.",
          "Royal Scotsman — Scotland, with time off the train at the stops.",
          "Glacier Express and Bernina Express — daylight trains through the Alps. The Bernina passes alpine lakes and stone viaducts. You sleep in a hotel, not on the train.",
        ],
      },
    ],
    when: "Summer is the classic season in North America: open parks, green passes, and long light. Fall adds color in the Rockies and quieter stations. European sleeper trains run mostly from spring through fall, and the famous dates go early. We will match the season to the route.",
    planning: "Name the route: the Empire Builder, the Canadian, or a European sleeper. The nights in between are part of the booking.",
    itineraries: [
      {
        title: "Empire Builder",
        nights: "2 nights on the train, plus hotels",
        season: "Summer, or fall for emptier stations",
        ship: "Amtrak long-distance, roomette or bedroom",
        path: "Chicago to Seattle or Portland, Glacier in the middle",
        ports: ["A night in Glacier country if you step off", "Mountain-side window", "Hotel at each end"],
      },
      {
        title: "California Zephyr",
        nights: "About 2 nights on board",
        season: "Late spring through fall",
        ship: "Amtrak roomette, with dining-car meals included. Coach pays at the cafe.",
        path: "Chicago to Emeryville, or a segment",
        ports: ["Gore Canyon, Glenwood Canyon, and Ruby Canyon, seen from the glass car. The train does not stop in them", "The train stops about five minutes at Fraser-Winter Park. If you want a hike above Winter Park, get off and stay the night", "The train stops about seven minutes in Glenwood Springs. If you want a swim in the hot-springs pool, a few blocks from the station, get off and stay the night. The next Zephyr the same way is the next day", "The Truckee stop is short. Donner Lake is about two miles away. If you want to walk the shore, get off and stay the night", "Denver, Salt Lake City, or Reno if you split the ticket and stay the night", "At dinner in the dining car you can order steak, chicken, or salmon. Coach buys from the cafe"],
      },
      {
        title: "The Canadian",
        nights: "4 nights on board, typically",
        season: "VIA's summer and shoulder timetable",
        ship: "VIA Rail sleeper plus",
        path: "Toronto to Vancouver",
        ports: ["Canadian Shield", "The Rockies from the dome", "Hotels if you pause in Jasper or Winnipeg"],
      },
      {
        title: "Venice Simplon-Orient-Express",
        nights: "One night, or several, by route",
        season: "Mostly spring through fall",
        ship: "Belmond. Historic cabins, suites, and grand suites",
        path: "Often Paris toward Venice. Some dates run through to Istanbul.",
        ports: ["Meals on the train", "The cabin chosen before you pay", "We send the price after we request it"],
      },
    ],
  },
  {
    slug: "australia-new-zealand",
    nav: "Australia & New Zealand",
    title: "Australia & New Zealand Cruises",
    card: "Reefs & fiords",
    image: "/media/australia-new-zealand.jpg",
    alt: "Sydney Opera House and a cruise ship on the harbor",
    lede: "The cruise can include Sydney, the Great Barrier Reef, and the fiords of the South Island. The flight from the Northeast is long, so check the season and the ship before you book.",
    paragraphs: [
      "Most cruises run ten to twenty-one nights and depart from Sydney, Auckland, or Brisbane. Longer repositioning voyages come from Hawaii, Los Angeles, or Vancouver. Princess, Holland America, Celebrity, Royal Caribbean, Cunard, and the smaller luxury lines sail the region in the southern summer. We compare the ports on the itinerary. We do not start from a favorite line.",
      "The useful split is Sydney, Brisbane, and Cairns; a New Zealand circuit from Auckland; or one sailing across the Tasman that does both. Tell us which of those you want. We will start from the ports, not from a brand.",
    ],
    lists: [
      {
        heading: "The routes",
        items: [
          "Eastern Australia — Sydney, Brisbane, the Whitsundays, Cairns",
          "New Zealand — Auckland, Tauranga, Wellington, and the South Island",
          "Sydney to Auckland, or the reverse — the usual combined routing",
          "Tasmania — Hobart, when the ship stops there",
          "A transpacific into the region — Hawaii, Los Angeles, or Vancouver, with islands in between",
        ],
      },
      {
        heading: "Worth going ashore for",
        items: [
          "Sydney — you can walk from Circular Quay to the Opera House and The Rocks. A bus tour of the suburbs is mostly the bus",
          "The reef from Cairns or Airlie Beach, if the ship gives you the hours",
          "Milford Sound from the deck, when the weather allows the ship in",
          "Wellington, or a South Island wine town, walked rather than driven past",
          "Hobart’s waterfront, not a tour of the whole state",
        ],
      },
    ],
    when: "The season runs from October through April, which is summer down there. November through March is the core. The Great Barrier Reef has warm water. The water in Milford Sound and the other fiords is cold. A sailing that includes both spends time in each.",
    planning: "Flights to Sydney or Auckland belong in the quote. A quote that leaves them out is not the full price.",
    itineraries: [
      {
        title: "The Australian coast",
        nights: "10–14 nights",
        season: "October–April",
        ship: "Princess, Celebrity, Holland America, or a luxury ship, compared",
        path: "Sydney or Brisbane round trip",
        ports: ["A Queensland stop", "The Whitsundays or Airlie Beach", "Cairns or Townsville", "Sea days between the reef ports"],
      },
      {
        title: "New Zealand",
        nights: "10–14 nights",
        season: "November–March",
        ship: "A ship that actually enters the fiords, not one that only lists them",
        path: "Auckland round trip, or one-way toward Sydney",
        ports: ["Bay of Islands or Tauranga", "Wellington", "A South Island stop", "Milford Sound, weather permitting"],
      },
      {
        title: "Across the Tasman",
        nights: "12–16 nights",
        season: "Southern summer",
        ship: "Princess, Holland America, Celebrity, Cunard, or a smaller luxury ship",
        path: "Sydney to Auckland, or the reverse",
        ports: ["Sydney", "A Tasman sea day", "Wellington or Picton", "Auckland"],
      },
    ],
  },
  {
    slug: "panama-canal",
    nav: "Panama Canal",
    title: "Panama Canal Cruises",
    card: "Full and partial transits",
    image: "/media/panama-canal.jpg",
    alt: "A ship in the Miraflores Locks on the Panama Canal",
    lede: "A Panama Canal cruise is a transit, not a loop of beaches. A full transit changes oceans. A partial transit goes into Gatun Lake and turns around.",
    paragraphs: [
      "Most full transits run fourteen to seventeen nights, one way. The usual departure port on the Caribbean side is Fort Lauderdale, Miami, or New Orleans. Los Angeles or San Diego is the usual Pacific end, and some sailings continue to Seattle or Vancouver. Princess, Holland America, Celebrity, Norwegian, Carnival, Royal Caribbean, and Cunard schedule them, mainly in spring and fall, when ships move between a Caribbean cruise and Los Angeles, San Diego, or an Alaska cruise. Regent, Silversea, Oceania, and Viking ocean do as well. An agent requests many of those fares.",
      "A full transit and a partial transit are both called a Panama Canal cruise. A full transit goes from the Caribbean to the Pacific, or the other way, in about 14 to 17 nights. A partial transit is a round trip from Florida into Gatun Lake, often 10 or 11 nights. Compare those two before you look at a fare.",
    ],
    lists: [
      {
        heading: "The routes",
        items: [
          "Full transit, Caribbean to Pacific — Fort Lauderdale or Miami to San Diego or Los Angeles, about 14 to 17 nights",
          "Full transit the other way — Los Angeles, San Diego, Seattle, or Vancouver, ending in Florida",
          "Partial transit — a Florida round trip into Gatun Lake, often 10 or 11 nights",
          "A longer repositioning spends one day in the canal. The other days are in Mexico or on the way to Alaska",
        ],
      },
      {
        heading: "While the ship is in the canal",
        items: [
          "You stay on the ship. The locks are the sightseeing.",
          "Caribbean side: Gatun Locks, or Agua Clara if the ship uses the newer, larger locks",
          "Gatun Lake and the Culebra Cut",
          "Pacific side: Pedro Miguel and Miraflores, or Cocoli on the newer locks",
          "The Bridge of the Americas or the Atlantic Bridge, depending on the direction",
        ],
      },
    ],
    when: "Most canal sailings run in spring and fall, when the fleets reposition. Winter has fewer full transits. The canal is hot while the ship is in it, and rain is normal. It does not stop the transit. A passport is required. Panama uses the US dollar.",
    planning: "Tell us whether you fly home from Fort Lauderdale or Miami, or from Los Angeles or San Diego. A full transit ends in a different city than it starts. A partial transit returns to Florida. A night in Panama City only works when the itinerary docks there. Many ships only pass through.",
    itineraries: [
      {
        title: "Full transit to the Pacific",
        nights: "14–17 nights",
        season: "Spring and fall",
        ship: "Princess, Holland America, Celebrity, or a luxury ship whose fare an agent requests",
        path: "Fort Lauderdale or Miami to San Diego or Los Angeles",
        ports: ["Cartagena", "The canal transit", "A Central American or Mexican stop", "The Pacific port where you fly home"],
      },
      {
        title: "Partial transit",
        nights: "10–11 nights",
        season: "Fall through spring",
        ship: "A Florida round trip, compared across the lines that publish one",
        path: "Fort Lauderdale or Miami, back to the same port",
        ports: ["Into Gatun Lake and back out", "Often Cartagena or a western Caribbean stop", "No change of ocean"],
      },
      {
        title: "Pacific to the Caribbean",
        nights: "15–20 nights",
        season: "Spring and fall",
        ship: "Often a repositioning, including some from Vancouver or Seattle",
        path: "Los Angeles, San Diego, Seattle, or Vancouver to Florida",
        ports: ["A Mexican port such as Cabo", "The canal transit", "Cartagena", "Fort Lauderdale or Miami"],
      },
    ],
  },
];

destinations.sort((a, b) => a.nav.localeCompare(b.nav, "en"));

export const homeOrder = destinations.map((item) => item.slug);

export const destinationTone: Record<string, string> = {
  alaskan: "#0e6278",
  asia: "#7a3030",
  "australia-new-zealand": "#1e5a45",
  bermuda: "#7a3a52",
  "canada-new-england": "#6e3d2a",
  caribbean: "#0b6e68",
  european: "#4e3d62",
  expedition: "#152238",
  hawaii: "#0f5c4c",
  mediterranean: "#8a4b2f",
  "northern-europe": "#2c4a6e",
  rail: "#4a3f32",
  river: "#1a5558",
  "south-america": "#6b4024",
  "panama-canal": "#0e4d5c",
  world: "#102a4a",
};

export function destinationBySlug(slug: string) {
  return destinations.find((item) => item.slug === slug);
}

export function orderedDestinations() {
  return homeOrder
    .map((slug) => destinations.find((item) => item.slug === slug))
    .filter((item): item is Destination => Boolean(item));
}
