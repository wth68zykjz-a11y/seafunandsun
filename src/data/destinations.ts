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
};

const sampleNote = "These are typical routings and the ports of call most ships include. Ships, dates, and fares change. This is not a quote.";

export { sampleNote };

export const destinations: Destination[] = [
  {
    slug: "alaskan",
    nav: "Alaskan",
    title: "Alaskan Cruises",
    card: "Glaciers & wildlife",
    image: "/media/alaskan.jpg",
    alt: "A tidewater glacier meeting dark water in a steep fjord",
    lede: "Most people take one Alaska cruise, so the month matters as much as the ship. Ice is earlier in the season, wildlife is later, and the evenings stay light through the summer.",
    paragraphs: [
      "Most Alaska sailings run seven to fourteen nights round trip from Seattle, or one way between Seattle or Vancouver and Seward or Whittier. Royal Caribbean, Carnival, Norwegian, Holland America, Princess, and Celebrity sail the Inside Passage. Holland America and Princess use Vancouver often, including one-way Gulf sailings. Cunard does in some seasons, not every year. We compare them side by side, with no obligation to any one line.",
      "The ports are the reason for the trip: Juneau, Seward, Ketchikan, Skagway, and the fjords between them. The glacier walls are close enough to hear, and much of the wildlife is not something you will see from a road.",
    ],
    lists: [
      {
        heading: "The routes",
        items: [
          "Seattle round trips — the Inside Passage, 7 to 14 nights",
          "Vancouver — one way to Seward or Whittier, and some Inside Passage round trips. A passport is required. The currency ashore is the Canadian dollar",
          "Seattle to Seward or Whittier — one way, across the Gulf of Alaska",
          "Glacier-focused sailings — Tracy Arm, Endicott Arm, College Fjord, Glacier Bay",
        ],
      },
      {
        heading: "Alaska in port",
        items: [
          "A grizzly on the Kenai River, from a float plane or the water",
          "Whale watching out of Juneau or Seward",
          "Skagway — the White Pass railroad and the Klondike gold camps",
          "Ketchikan's totem poles and salmon",
          "A glacier lagoon, if your ship takes you past one",
        ],
      },
    ],
    when: "The season runs from May through September. August and early September bring the salmon run, the bears, and the longest evenings. Spring leaves the glaciers at their largest. Midsummer gives you the light. We will match the month to what you most want to see.",
    planning: "August for the bears, or May for the glaciers. A Seattle round trip and a one-way from Vancouver or Seattle to Seward are both ordinary requests. If the ship starts in Vancouver, a few days in the city before or after the cruise is the simple way to see it.",
    itineraries: [
      {
        title: "Inside Passage classic",
        nights: "7 nights",
        season: "May–September",
        ship: "Resort or premium ship",
        path: "Seattle round trip",
        ports: ["Juneau", "Skagway", "Ketchikan", "A glacier day such as Tracy Arm"],
      },
      {
        title: "Gulf one-way",
        nights: "10–14 nights",
        season: "June–August",
        ship: "Premium ship, often Holland America or Princess",
        path: "Vancouver or Seattle to Seward, or the reverse",
        ports: ["Inside Passage ports", "Hubbard or Glacier Bay style day", "Seward for wildlife time ashore"],
      },
      {
        title: "Salmon and bears",
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
    lede: "More ships sail here than in any other region, and most piers are a short walk from town. Many travelers start in the Caribbean, then come back for a particular ship and a shorter list of ports.",
    paragraphs: [
      "Round-trip sailings run seven to eleven nights from Miami, Fort Lauderdale, Galveston, New Orleans, and Tampa. Caribbean cruises also depart from New York, New Jersey, and Maryland. We compare Royal Caribbean, Carnival, Norwegian, Celebrity, Princess, and the rest, and we match the ship to the trip rather than the other way around.",
      "Northeast departures mean more sea days. From New York, New Jersey, or Maryland, the ship needs extra days to reach the islands and extra days to come home. A Florida sailing of the same length spends more of those nights in port. We will say how many sea days are on the one you are looking at before you book it.",
      "Ports range from a beach day to a town with a culture of its own, so the mix of stops does much of the work. Tell us the dates and who is traveling, and we will set out the sailings that fit.",
    ],
    lists: [
      {
        heading: "Popular sailings",
        items: [
          "Cozumel — the pier for this coast. Cancún is a resort stay, not where the ship docks",
          "Grand Cayman — Stingray City and the reef",
          "Nassau and Freeport",
          "St. Thomas and St. Maarten",
          "Costa Maya — a western Caribbean beach call",
          "Antigua — an eastern island, not on the same week as Costa Maya",
          "Aruba, Bonaire, and Curaçao — a southern routing, usually from San Juan",
          "Martinique, at Fort-de-France — not the small coves down the coast",
        ],
      },
      {
        heading: "Excursion ideas",
        items: [
          "Snorkel the house reef from the beach or by boat",
          "Sunset catamaran sail with drinks in hand",
          "A full beach day — loungers, snacks, swim stops",
          "Zip lines and jungle ATV rides",
          "Conch fritters in Nassau, then the beach. Skip a second tour if the call is short.",
          "A dive with a local guide — the reef is better from underwater",
          "Croissants and pain au chocolat in a Martinique bakery",
        ],
      },
    ],
    when: "The region sails year-round. December through April is peak season: the steadiest weather, and the highest fares. August through October is hurricane season. Named storms rarely reach a ship at sea, and the fares are lower.",
    planning: "Send the month and the homeport. A Miami week and a New York week are different trips, and the sea days should be visible before you choose.",
    itineraries: [
      {
        title: "Western Caribbean",
        nights: "7 nights",
        season: "Year-round; best value in late summer",
        ship: "Resort ship. Miami and Fort Lauderdale are not the same week as Galveston",
        path: "Round trip from South Florida or the Gulf",
        ports: ["From Florida: Cozumel, Grand Cayman, Jamaica", "From Galveston: Cozumel and Costa Maya", "A sea day each way"],
      },
      {
        title: "Eastern islands",
        nights: "7 nights from San Juan. Longer from Miami",
        season: "December–April",
        ship: "Resort or premium",
        path: "San Juan for the week. Miami if you can add nights",
        ports: ["St. Thomas", "St. Maarten", "Martinique or Antigua on the longer sailings"],
      },
      {
        title: "Southern ABC",
        nights: "7 nights from San Juan. 8–11 from Florida",
        season: "Shoulder months",
        ship: "A line that is actually scheduled into the ABCs",
        path: "San Juan round trip, or a longer loop from southern Florida",
        ports: ["Aruba", "Bonaire", "Curaçao"],
      },
    ],
  },
  {
    slug: "mediterranean",
    nav: "Mediterranean",
    title: "Mediterranean Cruises",
    card: "Ports & culture",
    image: "/media/mediterranean.jpg",
    alt: "A whitewashed harbor town above a small Mediterranean port",
    lede: "The coast changes most mornings. Choose the ship for the ports you want, not for the brochure cover.",
    paragraphs: [
      "Sailings run seven to fourteen nights from Barcelona, Civitavecchia for Rome, and Piraeus for Athens. Royal Caribbean, MSC, Norwegian, Celebrity, and Cunard all sail the region, and the luxury lines sail it too. A Venice call is usually Ravenna or Trieste, not a dock in the lagoon. We compare the routes, the ports, and what the fare includes, then match the ship to how you like to travel.",
      "Greece and the Adriatic pull north. Spain and the Riviera pull west. Tell us which coast you want, and we will start from there.",
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
          "Santorini, before the afternoon boats arrive",
          "A long-table lunch in Amalfi",
          "The Acropolis in Athens, then the museum next door or the Ancient Agora",
          "Rome from Civitavecchia: St. Peter’s and the Vatican Museums, or the Colosseum and the Forum. Squeeze in lunch if the ship leaves later. Stay at Rome Cavalieri, a Waldorf Astoria hotel, before or after the cruise if you want time for the city and the country around it",
          "Kotor's old town, walked rather than cruised",
          "A lavender or olive-oil stop on the French coast",
          "La Boqueria in Barcelona, in the morning. Go for fruit and a counter lunch. It is crowded by noon.",
        ],
      },
    ],
    when: "May and June are the most comfortable months: warm water, long light, and fares that have not yet reached August. September keeps the warmth with fewer people in the ports. In winter the Mediterranean is mostly a crossing season, which is a different kind of voyage.",
    planning: "Name the coast: Greece, the Adriatic, or Spain and France. We price the ships that actually call there.",
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
        path: "The ship docks in Ravenna or Trieste. Large ships do not dock in Venice.",
        ports: ["Dubrovnik", "Kotor or Split", "A sea day"],
      },
      {
        title: "West Med",
        nights: "7 nights",
        season: "May–September",
        ship: "From Barcelona",
        path: "Barcelona round trip or open-jaw to Rome",
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
    lede: "A European cruise puts several cities on one ticket. If you have already been to a port, we leave it off the routing.",
    paragraphs: [
      "Sailings run seven to fourteen nights from Barcelona, Rome, Lisbon, and London. Longer itineraries work up the Adriatic and back toward the Mediterranean. Cunard, MSC, Celebrity, Royal Caribbean, and the all-inclusive lines all sail Europe. We compare them, and we build the trip around the cities you want.",
      "The usual mistake in Europe is trying to see too much. Tell us which cities you have already visited, and we will build the sailing around the ones you have not.",
    ],
    lists: [
      {
        heading: "Classic ports",
        items: [
          "Amsterdam, Bruges & the canals",
          "Paris, from Le Havre or Rouen — an ocean ship does not sail up the Seine",
          "London & the Thames",
          "Dubrovnik, Split & the Dalmatian coast",
          "Venice, from Ravenna or Trieste — an ocean ship does not enter the lagoon",
          "Barcelona, Marseille & the French Riviera",
          "Lisbon, Porto & the Atlantic coast",
        ],
      },
      {
        heading: "Worth going ashore for",
        items: [
          "A canal boat and a cheese hall in Bruges",
          "The cliffs of Étretat with a Normandy lunch",
          "The Alcázar gardens and a flamenco evening in Seville",
          "Pompeii — the city that froze in place",
          "Tuscany — hills, vineyards, and a village lunch",
          "Time Out Market in Lisbon, for one lunch. Do not add a second neighborhood.",
        ],
      },
    ],
    when: "May through September is the classic season. The shoulder months keep the same ports with fewer crowds, and the light is often better. In winter, the transatlantic crossings make the ocean the trip.",
    planning: "Tell us which cities you have already seen. The Mediterranean week lives on its own page, so this one stays on the Atlantic and the north.",
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
        title: "Canals and the north",
        nights: "7 nights",
        season: "Summer",
        ship: "A ship that actually docks long enough for the city",
        path: "Amsterdam or a North Sea round trip",
        ports: ["Amsterdam", "Zeebrugge for Bruges", "Le Havre for Paris", "Dover or London"],
      },
      {
        title: "Canary Islands",
        nights: "7 nights from Lisbon or Málaga. About 12 from Southampton",
        season: "Winter",
        ship: "From Lisbon, Málaga, or Southampton",
        path: "A winter Atlantic loop, not a Mediterranean week",
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
    lede: "The ship moves from island to island, so you do not need a car between them. Longer sailings from the West Coast continue to Tahiti.",
    paragraphs: [
      "Norwegian's Pride of America sails the islands year-round from Honolulu. Holland America, Princess, and Celebrity sail longer Hawaiian routes from San Diego, Los Angeles, or Vancouver, and some continue to Tahiti. Ships call Maui. They rarely start there. A Polynesia itinerary and an inter-island week are not the same vacation.",
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
          "Tahiti & Moorea, from the West Coast",
          "Fiji & the South Pacific, on the longer runs",
        ],
      },
      {
        heading: "In port",
        items: [
          "Snorkel with sea turtles, from the ship or by kayak",
          "A day trip up the Road to Hana",
          "A plantation lunch, the island version",
          "A luau, if you can take it",
          "Pearl Harbor by morning, a beach by afternoon",
        ],
      },
    ],
    when: "The islands sail year-round. Winter brings the gentlest seas and whale season. Summer ports are busier. A San Diego departure is the practical way to add Tahiti if you are not already in Hawaii.",
    planning: "Say whether you are already in the islands or leaving from California. The flight, or the extra sea days, belongs in the quote.",
    itineraries: [
      {
        title: "Inter-island",
        nights: "7 nights",
        season: "Year-round",
        ship: "Pride of America style or a line that overnight-calls the islands",
        path: "Honolulu round trip",
        ports: ["Maui", "Kauai", "Hilo or Kona", "A second night in a port when the ship offers it"],
      },
      {
        title: "West Coast to the islands",
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
    card: "Pink sand escapes",
    image: "/media/bermuda.jpg",
    alt: "Pink sand and clear shallow water on an empty Bermuda beach",
    lede: "The beach is close to the pier only when the ship stays long enough to use it. Some Bermuda sailings do. A short call does not.",
    paragraphs: [
      "Most Bermuda sailings run about seven nights from Boston, and also from New York and from Baltimore in Maryland. Many stay overnight. Royal Caribbean, Carnival, Norwegian, and Celebrity are the lines that regularly call. We will show you the difference between a short stop and a full day ashore.",
      "A Boston departure still has a sea day each way. That is shorter than a Caribbean sailing from New York, but the ocean is part of the week. The overnight in Bermuda is what makes those sea days worth it.",
      "Bermuda also works as a destination of its own: an island stay, or a sailing that departs from the island. The two combine easily, and we will arrange both.",
    ],
    lists: [
      {
        heading: "In port",
        items: [
          "Horseshoe Bay — the pink sand, from the beach",
          "Snorkel the ship's anchorage — you can see the hull",
          "Downtown Hamilton — the shops and the waterfront",
          "Gibbs Hill — the lighthouse, with the airport below",
          "A ferry across the harbor, not a New England gundalow",
          "A rum and pineapple plantation tour",
        ],
      },
      {
        heading: "The water",
        items: [
          "Shallow, clear, and warm enough for most of the year",
          "Snorkel, kayak, or paddleboard from the beach",
          "Sailing days out of the harbour",
          "Sunset from a beach bar, not a deck",
        ],
      },
    ],
    when: "The cruise season runs from April through October. Late spring and early fall are the easier months. A five-hour call is rarely enough.",
    planning: "Ask for an overnight. A five-hour call is a different trip, and we will not sell it as a beach day.",
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
        ports: ["Bermuda", "One or two Caribbean calls", "Sea days in between"],
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
    lede: "Fjords, ice, and midnight sun. On these routes the size of the ship changes the day more than the brochure does.",
    paragraphs: [
      "Holland America, Princess, Norwegian, Celebrity, MSC, Viking, and Cunard sail the fjords, Iceland, and the Baltic from Amsterdam, Copenhagen, Southampton, and the Norwegian ports. Hapag-Lloyd and the expedition lines go farther north, toward Svalbard and Greenland. A fjord looks different from a ship of 2,500 guests than from a ship of 200.",
      "Tell us whether you want the well-known fjords or ice farther north, and we will choose the sailing that matches that.",
    ],
    lists: [
      {
        heading: "The routes",
        items: [
          "The Norwegian fjords — Bergen, Geiranger, the West Fjords",
          "Iceland — Reykjavik and the south coast",
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
          "A Hanseatic old town — Lübeck or Tallinn",
          "The northern lights, when the season and the sky cooperate",
        ],
      },
    ],
    when: "June through August is the season for the fjords and the midnight sun. September can add the aurora. Farther north, the window is shorter.",
    planning: "Fjords, Iceland, or the Baltic. Pick one. A seven-night ship does not do all three.",
    itineraries: [
      {
        title: "Fjord classic",
        nights: "7 nights",
        season: "June–August",
        ship: "Smaller ship if you want the narrow water; a big ship if you want the resort",
        path: "Bergen, or another Norwegian port. Copenhagen is a Baltic start",
        ports: ["Geiranger or another fjord", "Flåm", "A coastal town"],
      },
      {
        title: "Iceland and north",
        nights: "10–14 nights",
        season: "Summer",
        ship: "Expedition or a traditional line that reaches Reykjavik",
        path: "Rotterdam, London, or a Norwegian port",
        ports: ["Reykjavik", "South coast call", "Lofotens if the routing goes that far"],
      },
      {
        title: "Baltic cities",
        nights: "9–10 nights for Tallinn, Helsinki, and Stockholm. A 7-night does fewer cities",
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
    lede: "The terminals are a short drive from much of the Northeast, and the fall color along this coast is hard to see as well by car.",
    paragraphs: [
      "Most sailings run three to eleven nights from Boston, with longer departures from New York. Royal Caribbean, Carnival, Norwegian, Celebrity, and Princess all sail the region. We compare them directly, without a preference for any one line.",
      "The ports carry the trip: Cape Cod, Halifax, Québec, and Bermuda on some loops. Much of the scenery is close enough to enjoy from the deck. The better days are still spent ashore.",
    ],
    lists: [
      {
        heading: "Coastal classics",
        items: [
          "Boston round trips — Cape Cod, and sometimes Bermuda",
          "New York departures with a Canada & New England feel — 7 to 11 nights",
          "Canada & New England — Halifax, Quebec & the islands",
          "Bermuda hops — short, shallow, and made for snorkeling",
          "Fall-color sailings — maple from a porthole",
        ],
      },
      {
        heading: "In port",
        items: [
          "Lighthouse and clam-bake day trips",
          "Cape Cod beach towns — Chatham, Hyannis, Provincetown",
          "Snorkel cays off Bermuda, when the routing goes there",
          "Old Quebec or Halifax, at your own pace",
          "A Boston harbor food crawl",
        ],
      },
    ],
    when: "The season runs from May through October. October is the month people return for: the maples in color, and fewer people on deck. Summer is for the beach towns. Fall is for the coast itself.",
    planning: "Fall color and a summer weekend use different ships. Say whether you can leave from Boston or New York.",
    itineraries: [
      {
        title: "Fall foliage",
        nights: "7 nights",
        season: "Late September–October",
        ship: "From Boston or New York",
        path: "Canada & New England loop",
        ports: ["Bar Harbor or Portland", "Halifax", "Sydney, Nova Scotia, on the weeks that go that far", "A sea day"],
      },
      {
        title: "Long weekend coast",
        nights: "3–5 nights",
        season: "May–October",
        ship: "A short Boston sailing",
        path: "Boston round trip",
        ports: ["Cape Cod", "Portland or a similar harbor", "Back before the work week"],
      },
      {
        title: "Canada deep",
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
    card: "Danube to Seine",
    image: "/media/river.jpg",
    alt: "A riverside town and vineyards at dusk",
    lede: "You follow one river and walk into the towns. Compare the ship, the cabin, and what the fare includes each day.",
    paragraphs: [
      "On the Danube, the Rhine, the Seine, and the Douro, we compare Viking, AmaWaterways, Avalon, Uniworld, and Scenic. American Cruise Lines does not sail those rivers. It is a U.S. line: the Mississippi, the Ohio, the Columbia and Snake, and the Great Lakes. Viking also sails the Mississippi. Windstar is an ocean line. It does not sail these rivers.",
      "Tell us the river and the season, and we will set the ships next to one another.",
      "We also book American rivers. American Cruise Lines runs U.S.-flagged ships on the Mississippi, the Ohio, the Columbia and Snake, and the Great Lakes. Viking sails the Mississippi. Neither of those is a substitute for a European river ship, or the other way around.",
    ],
    lists: [
      {
        heading: "The classic rivers",
        items: [
          "The Danube — Budapest to the Wachau, or Vienna toward the Black Forest",
          "The Rhine — Cologne to Amsterdam, the castle run",
          "The Seine & Normandy — Paris to the coast",
          "The Douro — Porto and the wine country",
          "The Mississippi — New Orleans north, Viking and American Cruise Lines",
          "The Ohio & the Great Lakes — American Cruise Lines",
          "The Moselle and the Mekong — the same river lines, a different map",
          "The Nile — Viking, AmaWaterways, and Uniworld",
          "The Amazon — a few small ships out of Manaus, not the European river lines",
        ],
      },
      {
        heading: "What a day looks like",
        items: [
          "A full port day with a guided walk included",
          "Cycling or a bike tour on quiet roads",
          "A wine or olive-oil stop the ship arranges",
          "Evenings on deck — the river does the scenery",
          "Excursions sized for a day, not a weekend",
        ],
      },
    ],
    when: "April through October, and the window depends on the river. Spring is the Rhine in blossom. Fall is vineyard color and better light. The ships run on a season, so the dates matter as much as the fare.",
    planning: "Name the river. A Danube ship and a Mississippi ship are not interchangeable, and many of these fares are quoted rather than posted.",
    itineraries: [
      {
        title: "Danube capitals",
        nights: "7 nights",
        season: "April–October",
        ship: "Viking, AmaWaterways, Avalon, or Uniworld — compared, not assumed",
        path: "Budapest to Passau, or the reverse",
        ports: ["Budapest", "Vienna", "Wachau valley", "A smaller town day"],
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
        title: "Seine or Douro",
        nights: "7 nights",
        season: "Summer, or harvest on the Douro",
        ship: "River line that owns that water, not an ocean ship renamed",
        path: "Paris to Normandy, or Porto round trip",
        ports: ["Paris or Porto", "A vineyard or cider day", "A small-town walk included"],
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
    card: "Wild & remote",
    image: "/media/expedition.jpg",
    alt: "Sea ice under pale polar light",
    lede: "Small ships, Zodiacs, and guides. The ship decides which landings are possible, and weather can change the day.",
    paragraphs: [
      "Lindblad, Ponant, and Hapag-Lloyd sail Antarctica, the Arctic, and the Galápagos, along with the expedition ships of Viking and Silversea. Patagonia uses those same small ships. UnCruise sails Alaska and the Pacific Northwest. It does not sail Antarctica or the Galápagos.",
      "Timing and the size of the ship matter more here than on a standard sailing. Tell us the region and the months, and we will set out the options that match the trip you have in mind.",
    ],
    lists: [
      {
        heading: "Where the zodiacs go",
        items: [
          "Antarctica — the peninsula and the sub-Antarctic islands",
          "The Arctic — Svalbard, Iceland, the Lofotens",
          "The Galápagos — seven to fourteen days among the islands",
          "Patagonia — fjords and calving glaciers",
          "As far north as the ice allows",
          "New Zealand & the South Pacific, on select sailings",
        ],
      },
      {
        heading: "What a day is like",
        items: [
          "Zodiac landings where the guide picks the best beach",
          "Kayaking, snorkeling, and the occasional cold-water swim",
          "Lectures on deck — the ones you'll actually listen to",
          "Photography before and after, with someone who teaches",
          "Fifty to two hundred guests, not three thousand",
          "A backup plan when the weather changes the landing",
        ],
      },
    ],
    when: "Antarctica runs from November through March. The Arctic runs from June through September. Cabins sell by route, and the better ships fill early.",
    planning: "Antarctica, the Arctic, or the Galápagos. The month and the size of the ship matter more than the brochure.",
    itineraries: [
      {
        title: "Antarctic peninsula",
        nights: "10–12 nights",
        season: "November–March",
        ship: "Expedition ship, typically under 200 guests",
        path: "Ushuaia round trip",
        ports: ["Drake crossing or a fly-the-Drake option", "Peninsula landings", "A plan B written into the day"],
      },
      {
        title: "Galápagos",
        nights: "7–14 nights",
        season: "Year-round, with wildlife peaks by island",
        ship: "A small expedition ship, not a big liner",
        path: "Island loop from Baltra or San Cristóbal",
        ports: ["A naturalist sets the landing", "Snorkel stops", "No two weeks follow the same animals"],
      },
      {
        title: "Arctic edge",
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
    alt: "A quiet harbor at blue hour with lights on the water",
    lede: "Singapore and Tokyo are the usual starts, with long days at sea on the South China Sea. Plan the flights with the cruise, not after it.",
    paragraphs: [
      "Princess, Holland America, Celebrity, Royal Caribbean, and Norwegian sail Asia from Singapore, Tokyo, and Hong Kong. Cunard comes through on longer voyages. It is not a weekly Asia ship. We compare the ones that are actually scheduled, and we match the routing to the time you have.",
      "The ports are unlike a standard Caribbean or Mediterranean list. Tell us the dates, and we will shape the trip around the ones you care about.",
    ],
    lists: [
      {
        heading: "Where they go",
        items: [
          "Singapore — the marina at night and Gardens by the Bay",
          "Tokyo, Yokohama & Tokyo Bay",
          "Shanghai & Hong Kong",
          "Phuket & the South China Sea",
          "Saigon, the Mekong & Halong Bay",
          "Busan, Jeju & the Korean coast",
          "Trans-Pacific crossings with a stop at Honolulu or Fiji",
        ],
      },
      {
        heading: "Worth going ashore for",
        items: [
          "Chicken rice and laksa at a hawker centre in Singapore",
          "The Grand Palace in Bangkok at opening, then lunch nearby. Do not add a second temple.",
          "Sushi in Tokyo after a walk through the outer market. The dawn tuna auction is not a cruise-day plan.",
          "A morning in Ho Chi Minh City’s District 1, with banh mi for lunch",
          "The French Concession in Shanghai, on foot. One neighborhood, not the whole city.",
          "A boat in Ha Long Bay, only when the ship is already in the bay",
        ],
      },
    ],
    when: "December through March is the calmer window. Typhoon season peaks in summer, and that is when the shore days become uncertain.",
    planning: "Singapore and Tokyo are different trips. Name the city, and how many days you can be away.",
    itineraries: [
      {
        title: "Southeast Asia",
        nights: "7–14 nights",
        season: "December–March",
        ship: "Princess, Holland America, Celebrity, or a luxury peer",
        path: "Singapore round trip or open-jaw",
        ports: ["Phuket or a Thai coast call", "Vietnam", "A sea day across the South China Sea"],
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
        path: "Asia toward Honolulu or the West Coast",
        ports: ["A Pacific island call", "Mostly ocean", "We say so before you book it"],
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
    lede: "Rio, the Brazilian coast, and the southern fjords. The ship and the port list matter more here than on a one-week Caribbean sailing.",
    paragraphs: [
      "Many current sailings begin in Rio de Janeiro and run the Brazilian coast. The older pattern was an Atlantic crossing from New York. Carnival, Norwegian, Holland America, and Cunard still touch the region, and the routes into the Patagonian fjords belong mainly to the expedition lines. We compare the lines that are actually scheduled, not the ones that sailed it years ago.",
      "Tell us whether you want the coast and the cities or the glaciers, and we will build the trip around the ports that match.",
    ],
    lists: [
      {
        heading: "The stops",
        items: [
          "Rio de Janeiro — the beaches, the mountain, the city in between",
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
          "A samba lunch and a beach afternoon",
          "Glacier views from the water, Patagonia",
          "The markets and the pastel hills of Valparaíso",
        ],
      },
    ],
    when: "Brazil’s east coast is warm from November through April. Patagonia runs from October through March.",
    planning: "Coast and cities, or glaciers. We only quote ships that are actually scheduled.",
    itineraries: [
      {
        title: "Brazilian coast",
        nights: "7 nights on the southeast coast. 12–14 to reach Salvador or Recife",
        season: "November–April",
        ship: "A line actually scheduled out of Rio",
        path: "Rio round trip, or north along the coast",
        ports: ["Rio", "Búzios on the shorter week", "Salvador or Recife only on the longer routing"],
      },
      {
        title: "Cape Horn and the fjords",
        nights: "10–14 nights",
        season: "October–March",
        ship: "Expedition line, or Holland America when the routing is theirs",
        path: "Ushuaia or a Chilean fjord embarkation",
        ports: ["A glacier day", "Cape Horn, when the weather allows", "Punta Arenas or another far-south port"],
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
    alt: "Open ocean at dusk from an empty deck railing",
    lede: "These voyages run about 70 to 120 days and call at ports a shorter cruise cannot combine. We go through the calendar and the fare before you give a season to one ship.",
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
    planning: "A world cruise is a season, not a week. Tell us the months you can be away and the ports you will not skip.",
    itineraries: [
      {
        title: "Full circle",
        nights: "90–120 days",
        season: "Book 12–18 months ahead",
        ship: "Cunard, Regent, Silversea, or Holland America",
        path: "One ship, one crew, the long way around",
        ports: ["A published world-cruise port list", "The calls that deserve a day ashore"],
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
        ports: ["Mostly no ports", "The ocean is the trip", "A good first long voyage"],
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
    lede: "Scenic trains in North America, sleeper trains in Europe, and the hotel nights that connect them.",
    paragraphs: [
      "Amtrak, VIA Rail, and the scenic railways of North America run through some of the finest country on the continent. We build the trip around the routing you want, including the nights on either end.",
      "Europe has two kinds of train. The Venice Simplon-Orient-Express, La Dolce Vita Orient Express, the Golden Eagle Danube Express, and the Royal Scotsman are overnight trips: you sleep on the train, meals are usually included, and the cabin you choose is what changes the price. Many of those dates are quoted rather than posted. A scenic day train, such as the Glacier Express or the Bernina Express, is only the ride. You get off in the evening and sleep in a hotel.",
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
          "Cross-America — the California Zephyr, the Southwest Chief, the Empire Builder",
          "New England & the East Coast — the Vermonter, the Adirondack, the Downeaster",
          "Quebec and the eastern corridor, booked as its own trip rather than mixed into the western trains",
        ],
      },
      {
        heading: "On board",
        items: [
          "A window seat on the mountain side, every time we can arrange it",
          "Dining cars and lounge cars — the last true slow travel",
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
          "Glacier Express and Bernina Express — scenic day trains in Switzerland, not sleepers.",
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
        ship: "Amtrak, sleeper if you want the diner included",
        path: "Chicago to Emeryville, or a segment",
        ports: ["Rockies", "Sierra", "A city night in Denver or Reno if you break the trip"],
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
        ports: ["Meals on the train", "The cabin chosen before you pay", "Quoted, not a fare you click"],
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
    lede: "Sydney, the Great Barrier Reef, and the fiords of the South Island. The flight from the Northeast is long, so the season and the ship matter more than they do on a week from Miami.",
    paragraphs: [
      "Most sailings run ten to twenty-one nights from Sydney, Auckland, or Brisbane. Longer repositioning voyages come down from Hawaii or the West Coast. Princess, Holland America, Celebrity, Royal Caribbean, Cunard, and the smaller luxury lines sail the region in the southern summer. The comparison is the port list, not a preference for one line.",
      "The useful split is the Australian coast, a New Zealand circuit, or one sailing that crosses the Tasman and does both. Tell us which of those you want. We will start from the ports, not from a brand.",
    ],
    lists: [
      {
        heading: "The routes",
        items: [
          "Eastern Australia — Sydney, Brisbane, the Whitsundays, Cairns",
          "New Zealand — Auckland, Tauranga, Wellington, and the South Island",
          "Sydney to Auckland, or the reverse — the usual combined routing",
          "Tasmania — Hobart, and a quieter coast if the ship actually calls",
          "A transpacific into the region — Hawaii or the West Coast, islands in between",
        ],
      },
      {
        heading: "Worth going ashore for",
        items: [
          "Sydney — the harbor on foot, not a bus loop of the suburbs",
          "The reef from Cairns or Airlie Beach, if the ship gives you the hours",
          "Milford Sound from the deck, when the weather allows the ship in",
          "Wellington, or a South Island wine town, walked rather than driven past",
          "Hobart’s waterfront, not a tour of the whole state",
        ],
      },
    ],
    when: "The season runs from October through April, which is summer down there. November through March is the core. The reef and the fiords do not share the same weather in the same week, so a combined sailing is a compromise. We will say which end of the trip is the reason to go.",
    planning: "Flights to Sydney or Auckland belong in the quote. A fare that ignores them is not a fare.",
    itineraries: [
      {
        title: "The Australian coast",
        nights: "10–14 nights",
        season: "October–April",
        ship: "Princess, Celebrity, Holland America, or a luxury ship, compared",
        path: "Sydney or Brisbane round trip",
        ports: ["A Queensland call", "The Whitsundays or Airlie Beach", "Cairns or Townsville", "Sea days between the reef ports"],
      },
      {
        title: "New Zealand",
        nights: "10–14 nights",
        season: "November–March",
        ship: "A ship that actually enters the fiords, not one that only lists them",
        path: "Auckland round trip, or one-way toward Sydney",
        ports: ["Bay of Islands or Tauranga", "Wellington", "A South Island call", "Milford Sound, weather permitting"],
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
