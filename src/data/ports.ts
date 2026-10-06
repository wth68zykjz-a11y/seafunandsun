export type Port = {
  name: string;
  place: string;
  goes: string;
  air: string;
  zone: string;
  money: string;
  image: string;
  alt: string;
  slug?: "alaskan" | "caribbean" | "bermuda" | "canada-new-england" | "mediterranean" | "european" | "northern-europe" | "hawaii" | "asia" | "australia-new-zealand" | "south-america" | "expedition" | "river" | "world";
};

export type PortCall = {
  name: string;
  place: string;
  note: string;
  air: string;
  zone: string;
  money: string;
  image: string;
  alt: string;
};

export type PortRegion = {
  id: string;
  title: string;
  lede: string;
  ports: Port[];
};

export type PortPage = {
  slug: "americas" | "europe" | "asia" | "australia-new-zealand" | "other";
  title: string;
  lede: string;
  regionIds: string[];
  calls?: PortCall[];
};

export const airlineNote =
  "These are airlines that serve the city. A route can be seasonal, and a nonstop on one date may be a connection on another. We check the flight against the ship's embarkation and return before you book it.";

export const portRegions: PortRegion[] = [
  {
    id: "florida-gulf",
    title: "Florida and the Gulf",
    lede: "The short Caribbean sailings embark here. A week from Florida spends more nights in port than the same week from New York.",
    ports: [
      { name: "Miami", place: "Florida", goes: "Bahamas, Eastern Caribbean, and Western Caribbean. The three- and four-night Bahamas sailings leave from here.", air: "American, Delta, United, JetBlue, and Southwest, plus European long-haul lines.", zone: "America/New_York", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/miami.jpg", alt: "Downtown Miami", slug: "caribbean" },
      { name: "Fort Lauderdale", place: "Florida", goes: "Caribbean and Bahamas, including longer southern routes. Spring and fall repositioning crosses to Europe.", air: "JetBlue, Spirit, Southwest, Delta, United, and American. Many travelers also fly Miami.", zone: "America/New_York", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/fort-lauderdale.jpg", alt: "Fort Lauderdale waterfront", slug: "caribbean" },
      { name: "Port Canaveral", place: "Florida", goes: "Bahamas and the Eastern Caribbean. Disney, Royal Caribbean, Carnival, Norwegian, and MSC use this port.", air: "The port has no major airport. Fly Orlando: American, Delta, United, Southwest, JetBlue, Spirit, and Frontier. The drive is about an hour.", zone: "America/New_York", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/port-canaveral.jpg", alt: "Ships at Port Canaveral", slug: "caribbean" },
      { name: "Tampa", place: "Florida", goes: "Western Caribbean: Cozumel, Grand Cayman, and Jamaica more often than the eastern islands.", air: "Southwest, Delta, American, United, JetBlue, Spirit, and Frontier.", zone: "America/New_York", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/tampa.jpg", alt: "Tampa skyline on the bay", slug: "caribbean" },
      { name: "Galveston", place: "Texas", goes: "Western Caribbean and the Mexican coast.", air: "Fly Houston. Hobby is about an hour away. Bush Intercontinental is closer to an hour and a half.", zone: "America/Chicago", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/galveston.jpg", alt: "Galveston waterfront", slug: "caribbean" },
      { name: "New Orleans", place: "Louisiana", goes: "Western Caribbean on the ocean ships. River ships leave the same city for the Mississippi. They are not the same cruise.", air: "Southwest, Delta, American, United, Spirit, and JetBlue.", zone: "America/Chicago", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/new-orleans.jpg", alt: "New Orleans along the river", slug: "caribbean" },
      { name: "San Juan", place: "Puerto Rico", goes: "Southern Caribbean. Fewer sea days than a Florida loop to the same islands.", air: "American, JetBlue, Delta, United, and Southwest.", zone: "America/Puerto_Rico", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/san-juan.jpg", alt: "Old San Juan above the harbor", slug: "caribbean" },
      { name: "Jacksonville, Charleston, and Norfolk", place: "Southeast coast", goes: "Bahamas and shorter Eastern Caribbean sailings. Norfolk and Charleston also send some ships to Bermuda.", air: "All three are served by American, Delta, Southwest, and United. Charleston also has Breeze.", zone: "America/New_York", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/charleston.jpg", alt: "Charleston harbor, one of the Southeast departure ports", slug: "caribbean" },
    ],
  },
  {
    id: "northeast",
    title: "Northeast United States",
    lede: "These ports are closer to home for much of the East Coast. The islands are farther away, so the sailing has more sea days.",
    ports: [
      { name: "New York", place: "Manhattan", goes: "Bermuda, Canada and New England, the Bahamas, and the Caribbean. Caribbean weeks from here are longer, with sea days each way. Transatlantic crossings leave in spring and fall.", air: "Kennedy, Newark, and LaGuardia. American, Delta, JetBlue, and United, plus almost every long-haul airline.", zone: "America/New_York", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/new-york.jpg", alt: "The Manhattan skyline", slug: "caribbean" },
      { name: "Cape Liberty", place: "Bayonne, New Jersey", goes: "The same pattern as New York: Bermuda, the Bahamas, Canada and New England, and Caribbean sailings with extra sea days. This is Royal Caribbean's Northeast homeport.", air: "Fly Newark, a United hub, about 25 minutes away, or any New York airport.", zone: "America/New_York", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/cape-liberty.jpg", alt: "Lower Manhattan, across the harbor from Cape Liberty", slug: "caribbean" },
      { name: "Baltimore", place: "Maryland", goes: "Bermuda, the Bahamas, Canada and New England, and Caribbean sailings with extra sea days.", air: "Southwest has the most flights. American, Delta, and United also serve BWI.", zone: "America/New_York", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/baltimore.jpg", alt: "Baltimore Inner Harbor", slug: "bermuda" },
      { name: "Boston", place: "Massachusetts", goes: "Bermuda, and Canada and New England. Boston is not a regular Caribbean homeport. A Bermuda week still has a sea day each way.", air: "JetBlue, Delta, American, and United, plus British Airways, Virgin Atlantic, and Aer Lingus.", zone: "America/New_York", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/boston.jpg", alt: "Boston Harbor", slug: "bermuda" },
    ],
  },
  {
    id: "pacific",
    title: "Alaska, the West Coast, and Hawaii",
    lede: "Alaska ships turn in the Pacific Northwest. Hawaii and Mexico ships turn in California. Honolulu is an inter-island embarkation, not the start of a crossing from the mainland.",
    ports: [
      { name: "Seattle", place: "Washington", goes: "Alaska. Round trips through the Inside Passage, and one-way sailings to Seward or Whittier.", air: "Alaska Airlines and Delta have the most flights. American, United, and Southwest also serve it.", zone: "America/Los_Angeles", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/seattle.jpg", alt: "The Seattle waterfront", slug: "alaskan" },
      { name: "Seward", place: "Alaska", goes: "One-way Alaska, including the Gulf. Big ships rarely round-trip from here.", air: "Fly Anchorage. Alaska, Delta, United, and American. Then about 2.5 hours down the Seward Highway.", zone: "America/Anchorage", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/seward.jpg", alt: "The harbor at Seward, Alaska", slug: "alaskan" },
      { name: "Whittier", place: "Alaska", goes: "The port for Anchorage and for one-way Gulf of Alaska sailings. Not a round-trip homeport.", air: "Fly Anchorage, then about 1.5 hours, including the Anton Anderson Memorial Tunnel.", zone: "America/Anchorage", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/whittier.jpg", alt: "Whittier, Alaska, on the water", slug: "alaskan" },
      { name: "San Diego", place: "California", goes: "Mexican Riviera, Hawaii, and Panama Canal repositioning.", air: "Southwest, Alaska, Delta, American, and United.", zone: "America/Los_Angeles", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/san-diego.jpg", alt: "Downtown San Diego", slug: "hawaii" },
      { name: "Los Angeles", place: "San Pedro, California", goes: "Mexico, Hawaii, the Panama Canal, and coastal Pacific sailings. The berth is in San Pedro, about 30 minutes from LAX.", air: "American, Delta, United, Southwest, Alaska, and JetBlue, plus the international lines.", zone: "America/Los_Angeles", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/los-angeles.jpg", alt: "The Port of Los Angeles at San Pedro", slug: "hawaii" },
      { name: "San Francisco", place: "California", goes: "Fewer sailings than Los Angeles. Coastal California, Hawaii, and Alaska repositioning.", air: "United has the hub. Alaska, Delta, American, and Southwest also fly it.", zone: "America/Los_Angeles", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/san-francisco.jpg", alt: "San Francisco and the bay", slug: "alaskan" },
      { name: "Honolulu", place: "Oahu", goes: "Inter-island Hawaii, year-round on Norwegian's Pride of America. Mainland ships stop here. They usually embarked in California.", air: "Hawaiian, Southwest, Alaska, United, Delta, and American.", zone: "Pacific/Honolulu", money: "US dollar. Cards are accepted. Cash is dollars.", image: "/media/ports/honolulu.jpg", alt: "Honolulu and the water", slug: "hawaii" },
    ],
  },
  {
    id: "canada",
    title: "Canada",
    lede: "Vancouver is an Alaska homeport. Quebec and Montreal are fall ports for Canada and New England. Halifax is usually a stop, not a turnaround.",
    ports: [
      { name: "Vancouver", place: "British Columbia", goes: "Alaska. One-way to Seward or Whittier, and some round trips down the Inside Passage.", air: "Air Canada and WestJet, plus United, Alaska, and Delta.", zone: "America/Vancouver", money: "Canadian dollar. Order it from your bank before you travel, or use a card with no international transaction fee. Shops that take US bills usually give a worse rate.", image: "/media/ports/vancouver.jpg", alt: "Vancouver harbor and the mountains", slug: "alaskan" },
      { name: "Quebec City", place: "Quebec", goes: "Canada and New England in the fall, on ships that come up the St. Lawrence.", air: "Air Canada and WestJet. Many itineraries connect in Montreal or Toronto.", zone: "America/Toronto", money: "Canadian dollar. Order it from your bank before you travel, or use a card with no international transaction fee. Shops that take US bills usually give a worse rate.", image: "/media/ports/quebec-city.jpg", alt: "Quebec City above the St. Lawrence", slug: "canada-new-england" },
      { name: "Montreal", place: "Quebec", goes: "Some of those same fall sailings stop here. It is not a summer Caribbean port.", air: "Air Canada has the hub. WestJet, Air Transat, Porter, and the US majors also fly it.", zone: "America/Toronto", money: "Canadian dollar. Order it from your bank before you travel, or use a card with no international transaction fee. Shops that take US bills usually give a worse rate.", image: "/media/ports/montreal.jpg", alt: "Montreal and the river", slug: "canada-new-england" },
      { name: "Halifax", place: "Nova Scotia", goes: "Usually a stop. A few Canada and New England sailings turn around here.", air: "Air Canada, WestJet, and Porter.", zone: "America/Halifax", money: "Canadian dollar. Order it from your bank before you travel, or use a card with no international transaction fee. Shops that take US bills usually give a worse rate.", image: "/media/ports/halifax.jpg", alt: "Halifax harbor", slug: "canada-new-england" },
    ],
  },
  {
    id: "mediterranean",
    title: "Mediterranean",
    lede: "Barcelona, Rome, and Athens are the three embarkations that cover most of the sea. Large ships do not embark in the Venice lagoon.",
    ports: [
      { name: "Barcelona", place: "Spain", goes: "Western Mediterranean: France, Italy, and the Balearics. In winter, some ships turn toward the Canaries.", air: "Vueling, Iberia, Ryanair, and easyJet, plus American, Delta, and United.", zone: "Europe/Madrid", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/barcelona.jpg", alt: "Barcelona and the waterfront", slug: "mediterranean" },
      { name: "Civitavecchia", place: "Rome, Italy", goes: "Western Mediterranean and sailings that continue toward Greece. St. Peter’s and the Colosseum are in Rome, not at this port.", air: "Fly Rome Fiumicino. ITA Airways, Ryanair, and easyJet, plus American, Delta, and United. The port is about an hour to an hour and a half from the city by road or train.", zone: "Europe/Rome", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/civitavecchia.jpg", alt: "The harbor at Civitavecchia, the port for Rome", slug: "mediterranean" },
      { name: "Piraeus", place: "Athens, Greece", goes: "The Greek isles and the Eastern Mediterranean. Piraeus is the port. The Acropolis is in Athens, about 30 to 45 minutes away.", air: "Aegean and Sky Express, plus Delta, American, United, and Emirates on the long haul.", zone: "Europe/Athens", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/piraeus.jpg", alt: "The port of Piraeus, Athens", slug: "mediterranean" },
      { name: "Ravenna and Trieste", place: "Italy", goes: "The Adriatic and Greece. Large ships use these ports instead of the Venice lagoon. Ravenna is about 2 to 2.5 hours from Venice. Trieste is about 2 hours. St. Mark’s is in Venice.", air: "Fly Venice or Treviso. Delta and American fly Venice in season. ITA, easyJet, and Ryanair cover it through the year.", zone: "Europe/Rome", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/trieste.jpg", alt: "Trieste on the Adriatic", slug: "mediterranean" },
      { name: "Marseille", place: "France", goes: "Western Mediterranean.", air: "Air France, Ryanair, easyJet, and Transavia. Long-haul usually connects in Paris.", zone: "Europe/Paris", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/marseille.jpg", alt: "The old port of Marseille", slug: "mediterranean" },
      { name: "Genoa", place: "Italy", goes: "Western Mediterranean.", air: "Genoa Airport is about 20 minutes from the port. Milan’s long-haul flights are about 1.5 to 2 hours away by train.", zone: "Europe/Rome", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/genoa.jpg", alt: "The harbor at Genoa", slug: "mediterranean" },
      { name: "Savona", place: "Italy", goes: "Western Mediterranean. MSC uses it as a homeport.", air: "Fly Genoa, Milan, or Nice. Genoa is the closest.", zone: "Europe/Rome", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/savona.jpg", alt: "Savona on the Ligurian coast", slug: "mediterranean" },
      { name: "Naples", place: "Italy", goes: "Mediterranean sailings toward Greece. Fewer turnarounds than Rome.", air: "ITA, Ryanair, easyJet, and Volotea. US flights usually connect.", zone: "Europe/Rome", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/naples.jpg", alt: "The Bay of Naples", slug: "mediterranean" },
      { name: "Palma", place: "Mallorca, Spain", goes: "Shorter Western Mediterranean loops.", air: "Ryanair, Vueling, easyJet, and Air Europa.", zone: "Europe/Madrid", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/palma.jpg", alt: "Palma de Mallorca and the cathedral", slug: "mediterranean" },
      { name: "Valencia", place: "Spain", goes: "Western Mediterranean.", air: "Ryanair, Vueling, and Iberia.", zone: "Europe/Madrid", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/valencia.jpg", alt: "Valencia and the waterfront", slug: "mediterranean" },
      { name: "Istanbul", place: "Türkiye", goes: "The Greek isles and the Eastern Mediterranean, in the seasons the port is open to the big ships.", air: "Turkish Airlines has the hub. Pegasus flies the shorter routes.", zone: "Europe/Istanbul", money: "Turkish lira. Cards are accepted in the city. Some tourist desks take euro or dollars. The lira is what shops expect.", image: "/media/ports/istanbul.jpg", alt: "Istanbul across the water", slug: "mediterranean" },
    ],
  },
  {
    id: "northern-europe",
    title: "Northern Europe and the Atlantic",
    lede: "Southampton is the port that can point almost anywhere. The others are Norway, the Baltic, or the islands off Africa.",
    ports: [
      { name: "Southampton", place: "England", goes: "Norway, the Baltic, the Mediterranean, the Canaries, and the transatlantic crossing.", air: "Fly London Heathrow or Gatwick. British Airways, Virgin Atlantic, American, Delta, and United. Heathrow is about 1.5 hours from the port. Southampton Airport itself is a small field.", zone: "Europe/London", money: "Pound sterling. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/southampton.jpg", alt: "The port of Southampton", slug: "northern-europe" },
      { name: "Dover", place: "England", goes: "Norway and shorter Northern Europe sailings. The white cliffs are at the port.", air: "Same London airports as Southampton. Heathrow is about 1.5 to 2 hours from Dover.", zone: "Europe/London", money: "Pound sterling. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/dover.jpg", alt: "The white cliffs at Dover", slug: "northern-europe" },
      { name: "Amsterdam", place: "IJmuiden, Netherlands", goes: "Norway, the Baltic, and the British Isles. Ocean ships dock at IJmuiden, about 30 to 45 minutes from the city. The Rijksmuseum is in Amsterdam, not at the berth.", air: "KLM has the hub. Delta, United, American, easyJet, and Transavia also fly Schiphol.", zone: "Europe/Amsterdam", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/amsterdam.jpg", alt: "A canal in Amsterdam", slug: "northern-europe" },
      { name: "Rotterdam", place: "Netherlands", goes: "Norway and the Baltic.", air: "Fly Amsterdam. Rotterdam Airport is smaller.", zone: "Europe/Amsterdam", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/rotterdam.jpg", alt: "Rotterdam harbor", slug: "northern-europe" },
      { name: "Copenhagen", place: "Denmark", goes: "The Baltic and Norway.", air: "SAS and Norwegian, plus Delta and United on the US routes.", zone: "Europe/Copenhagen", money: "Danish krone. Cards are accepted. Euro cash is not the local currency.", image: "/media/ports/copenhagen.jpg", alt: "Copenhagen waterfront", slug: "northern-europe" },
      { name: "Hamburg and Kiel", place: "Germany", goes: "The Baltic and Norway.", air: "Fly Hamburg. Lufthansa and Eurowings. Kiel is about an hour and 15 minutes from Hamburg Airport.", zone: "Europe/Berlin", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/hamburg.jpg", alt: "Hamburg harbor", slug: "northern-europe" },
      { name: "Bergen", place: "Norway", goes: "The Norwegian coast and the fjords. Bryggen, the old wharf, is at the harbor.", air: "SAS, Norwegian, and Widerøe. US trips connect in Oslo or a European hub.", zone: "Europe/Oslo", money: "Norwegian krone. Cards are accepted. Euro cash is not the local currency.", image: "/media/ports/bergen.jpg", alt: "Bergen and the harbor", slug: "northern-europe" },
      { name: "Oslo", place: "Norway", goes: "The fjords.", air: "SAS, Norwegian, and Widerøe.", zone: "Europe/Oslo", money: "Norwegian krone. Cards are accepted. Euro cash is not the local currency.", image: "/media/ports/oslo.jpg", alt: "The Oslofjord", slug: "northern-europe" },
      { name: "Stockholm", place: "Sweden", goes: "The Baltic. More often a stop than a turnaround.", air: "SAS and Norwegian. Arlanda is the airport for the cruise stops.", zone: "Europe/Stockholm", money: "Swedish krona. Cards are accepted. Cash is rarely needed.", image: "/media/ports/stockholm.jpg", alt: "Stockholm", slug: "northern-europe" },
      { name: "Reykjavik", place: "Iceland", goes: "Iceland, Greenland, and the Arctic. Expedition ships turn here. Many ocean ships only stop.", air: "Icelandair and Play, with nonstops from several US cities.", zone: "Atlantic/Reykjavik", money: "Icelandic króna. Cards are accepted almost everywhere. Cash is rarely needed.", image: "/media/ports/reykjavik.jpg", alt: "Reykjavik harbor", slug: "northern-europe" },
      { name: "Lisbon", place: "Portugal", goes: "The Canaries, Atlantic Europe, the Western Mediterranean, and transatlantic crossings.", air: "TAP has the hub. Ryanair and easyJet fly Europe. United, Delta, and American fly from the US.", zone: "Europe/Lisbon", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/lisbon.jpg", alt: "Lisbon above the river", slug: "european" },
      { name: "Málaga", place: "Spain", goes: "The Canaries, Morocco, and the Western Mediterranean.", air: "Ryanair, Vueling, easyJet, Iberia, and British Airways.", zone: "Europe/Madrid", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/malaga.jpg", alt: "Málaga and the harbor", slug: "mediterranean" },
    ],
  },
  {
    id: "rivers",
    title: "River embarkations",
    lede: "A river ship is not an ocean ship with a different brochure. These are the towns where European river cruises embark.",
    ports: [
      { name: "Budapest, Vienna, and Passau", place: "The Danube", goes: "Danube river cruises between Hungary, Austria, and Germany.", air: "Fly Budapest, Vienna, or Munich for Passau. Austrian and Lufthansa cover Vienna and Munich. Budapest is usually a connection.", zone: "Europe/Vienna", money: "Euro in Vienna and Passau. Hungarian forint in Budapest. Cards are accepted. Euro cash is not the local currency in Hungary.", image: "/media/ports/budapest.jpg", alt: "Budapest along the Danube", slug: "river" },
      { name: "Amsterdam and Basel", place: "The Rhine", goes: "Rhine river cruises. The ocean ships in Amsterdam leave from IJmuiden, not these berths.", air: "Fly Amsterdam (KLM, Delta, United) or Zurich and Basel (SWISS).", zone: "Europe/Amsterdam", money: "Euro in Amsterdam. Swiss franc in Basel. Cards are accepted in both.", image: "/media/ports/basel.jpg", alt: "Basel on the Rhine", slug: "river" },
      { name: "Paris", place: "The Seine", goes: "Seine river cruises toward Normandy. Ocean ships reach Paris from Le Havre, about 2 hours away, or Rouen, about 1.5 hours away. The Louvre is in Paris.", air: "Air France, Delta, American, and United into Charles de Gaulle or Orly.", zone: "Europe/Paris", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/paris.jpg", alt: "Paris along the Seine", slug: "river" },
      { name: "Porto", place: "The Douro", goes: "Douro river cruises through the Portuguese wine country.", air: "TAP, Ryanair, and easyJet. US trips usually connect in Lisbon or a European hub.", zone: "Europe/Lisbon", money: "Euro. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/porto.jpg", alt: "Porto above the Douro", slug: "river" },
    ],
  },
  {
    id: "asia",
    title: "Asian embarkation ports",
    lede: "Singapore and Tokyo are the embarkations you can plan around. Hong Kong and Shanghai run when the season is open. They do not sail every year.",
    ports: [
      { name: "Singapore", place: "Singapore", goes: "Thailand, Vietnam, Malaysia, and Indonesia.", air: "Singapore Airlines has the hub. Scoot flies the shorter routes. United, ANA, JAL, Qantas, Emirates, Qatar, and Cathay Pacific also serve the city.", zone: "Asia/Singapore", money: "Singapore dollar. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/singapore.jpg", alt: "Marina Bay in Singapore", slug: "asia" },
      { name: "Hong Kong", place: "China", goes: "The China coast, Vietnam, and Japan, in the years the ships are based here.", air: "Cathay Pacific and HK Express. Long-haul partners include British Airways, Qantas, and the US lines when a nonstop is scheduled.", zone: "Asia/Hong_Kong", money: "Hong Kong dollar. Cards are accepted. The Hong Kong dollar is pegged to the US dollar, but shops price in Hong Kong dollars.", image: "/media/ports/hong-kong.jpg", alt: "Victoria Harbour in Hong Kong", slug: "asia" },
      { name: "Tokyo", place: "Yokohama, Japan", goes: "Japan and Korea. Longer sailings continue into Southeast Asia. The ship uses Yokohama. The city of Tokyo is the train ride beyond it.", air: "ANA and Japan Airlines, plus United, American, and Delta into Haneda or Narita. Haneda is about 30 minutes from Yokohama. Narita is about 90 minutes.", zone: "Asia/Tokyo", money: "Japanese yen. Cards are widely accepted. Cash is still useful in smaller places.", image: "/media/ports/tokyo.jpg", alt: "Yokohama harbor, the port for Tokyo", slug: "asia" },
      { name: "Shanghai", place: "China", goes: "Ships sail to Japan and Korea when a season is scheduled. It is not a year-round homeport.", air: "China Eastern, Air China, and China Southern. A US nonstop is not something to count on.", zone: "Asia/Shanghai", money: "Chinese yuan. Local payment apps are common. A foreign card can fail, so it is not something to count on.", image: "/media/ports/shanghai.jpg", alt: "The Bund in Shanghai", slug: "asia" },
      { name: "Keelung", place: "Taipei, Taiwan", goes: "Short sailings to Japan. Keelung is the port. Taipei is about 45 minutes away.", air: "Fly Taipei. China Airlines, EVA Air, and Starlux.", zone: "Asia/Taipei", money: "New Taiwan dollar. Cards are accepted in Taipei. Smaller shops may want cash.", image: "/media/ports/keelung.jpg", alt: "Keelung harbor", slug: "asia" },
    ],
  },
  {
    id: "australia",
    title: "Australia",
    lede: "Sydney is the port that carries the season. The others turn ships, but not as often.",
    ports: [
      { name: "Sydney", place: "Australia", goes: "The Australian coast, New Zealand, and the South Pacific.", air: "Qantas has the hub. Virgin Australia and Jetstar fly domestically. United, American, Delta, Air New Zealand, Singapore Airlines, Emirates, Qatar, and Cathay Pacific fly the long haul.", zone: "Australia/Sydney", money: "Australian dollar. Cards are accepted.", image: "/media/ports/sydney.jpg", alt: "Sydney Harbour", slug: "australia-new-zealand" },
      { name: "Brisbane", place: "Australia", goes: "The Queensland coast and the South Pacific. The cruise terminal is at the Port of Brisbane, about 30 minutes from the city.", air: "Qantas, Virgin Australia, and Jetstar. International flights include Air New Zealand, Singapore Airlines, Emirates, and Qatar.", zone: "Australia/Brisbane", money: "Australian dollar. Cards are accepted. Queensland does not change the clocks for summer.", image: "/media/ports/brisbane.jpg", alt: "Brisbane and the river", slug: "australia-new-zealand" },
      { name: "Melbourne", place: "Australia", goes: "A smaller homeport than Sydney. Coastal Australia when a ship turns here.", air: "Qantas, Virgin Australia, and Jetstar, plus United and the Asian and Middle East long-haul lines.", zone: "Australia/Melbourne", money: "Australian dollar. Cards are accepted.", image: "/media/ports/melbourne.jpg", alt: "Melbourne along the river", slug: "australia-new-zealand" },
    ],
  },
  {
    id: "new-zealand",
    title: "New Zealand",
    lede: "Auckland is the usual turnaround. The other cities are stops on a Sydney or Auckland sailing.",
    ports: [
      { name: "Auckland", place: "New Zealand", goes: "New Zealand, and across the Tasman to Australia.", air: "Air New Zealand has the hub. Qantas and Jetstar fly the Tasman. United, American, Delta, and Hawaiian fly from the US, some of them only in season.", zone: "Pacific/Auckland", money: "New Zealand dollar. Cards are accepted.", image: "/media/ports/auckland.jpg", alt: "Auckland harbor", slug: "australia-new-zealand" },
    ],
  },
  {
    id: "elsewhere",
    title: "Middle East, Africa, and South America",
    lede: "These are seasonal homeports, or expedition embarkations. A world cruise may stop and not turn around.",
    ports: [
      { name: "Dubai", place: "United Arab Emirates", goes: "The Arabian Gulf, with longer sailings toward the Red Sea and India.", air: "Emirates has the hub. flydubai covers the shorter routes. Most long-haul airlines serve Dubai.", zone: "Asia/Dubai", money: "UAE dirham. Cards are accepted. Some hotels take US dollars. Shops price in dirhams.", image: "/media/ports/dubai.jpg", alt: "The Dubai waterfront", slug: "asia" },
      { name: "Abu Dhabi", place: "United Arab Emirates", goes: "The Arabian Gulf.", air: "Etihad has the hub. A transfer from Dubai is about 1.5 hours.", zone: "Asia/Dubai", money: "UAE dirham. Cards are accepted.", image: "/media/ports/abu-dhabi.jpg", alt: "The Abu Dhabi skyline", slug: "asia" },
      { name: "Cape Town", place: "South Africa", goes: "The African coast, and segments of world cruises.", air: "British Airways, Virgin Atlantic, Emirates, Qatar, KLM, and Air France. South African Airways flies the region. A US nonstop should be checked, not assumed.", zone: "Africa/Johannesburg", money: "South African rand. Cards are accepted. US dollars are not the local currency.", image: "/media/ports/cape-town.jpg", alt: "Cape Town and the coast", slug: "world" },
      { name: "Rio de Janeiro", place: "Brazil", goes: "The Brazilian coast, in the southern summer. Ships dock on Guanabara Bay. Sugarloaf and Corcovado are in the city.", air: "LATAM, Gol, and Azul, plus American and United.", zone: "America/Sao_Paulo", money: "Brazilian real. Cards are accepted. US dollars are not reliable as cash.", image: "/media/ports/rio.jpg", alt: "Rio de Janeiro and the harbor", slug: "south-america" },
      { name: "Buenos Aires", place: "Argentina", goes: "The South American coast, and longer runs toward the Chilean fjords.", air: "Aerolíneas Argentinas and LATAM, plus American and United.", zone: "America/Argentina/Buenos_Aires", money: "Argentine peso. Cards are accepted. US dollar cash is widely used by visitors, and the rate moves.", image: "/media/ports/buenos-aires.jpg", alt: "Buenos Aires along the water", slug: "south-america" },
      { name: "Ushuaia", place: "Argentina", goes: "Antarctica. This is the expedition embarkation, not a city cruise.", air: "No long-haul flights. Aerolíneas Argentinas and JetSMART connect from Buenos Aires.", zone: "America/Argentina/Ushuaia", money: "Argentine peso. Cards are accepted in town. The ship to Antarctica usually bills in US dollars.", image: "/media/ports/ushuaia.jpg", alt: "Ushuaia at the end of the continent", slug: "expedition" },
    ],
  },
];

export const portPages: PortPage[] = [
  {
    slug: "americas",
    title: "United States and Canada",
    lede: "Florida for a short Caribbean week. The Northeast when you would rather not fly, with more sea days. The West Coast and Vancouver for Alaska, Mexico, and Hawaii.",
    regionIds: ["florida-gulf", "northeast", "pacific", "canada"],
  },
  {
    slug: "europe",
    title: "Europe",
    lede: "Barcelona, Rome, and Athens cover the Mediterranean. Southampton, Amsterdam, and Copenhagen cover the north. River ships embark in a different set of cities.",
    regionIds: ["mediterranean", "northern-europe", "rivers"],
  },
  {
    slug: "asia",
    title: "Asia",
    lede: "Singapore and Tokyo are the embarkations you can plan around. The other Asian ports are real, and many of them are stops rather than the first day of the cruise.",
    regionIds: ["asia"],
    calls: [
      { name: "Bangkok", place: "Laem Chabang, Thailand", note: "The ship docks at Laem Chabang, about an hour and a half to two hours from the city. The Grand Palace is in Bangkok. Some ships stay overnight.", air: "Fly Bangkok. Thai Airways and Bangkok Airways, plus the Middle East and Asian long-haul lines.", zone: "Asia/Bangkok", money: "Thai baht. Cards are accepted in the city. Markets often want cash.", image: "/media/ports/bangkok.jpg", alt: "Bangkok along the river" },
      { name: "Phuket", place: "Thailand", note: "On sailings from Singapore. The ship docks at Phuket Deep Sea Port, at Ao Makham. Patong is about 40 minutes by taxi. Phuket Old Town is about 30. A boat toward the Phi Phi islands is about an hour to an hour and a half after a ride to the pier. The beach is not at the ship.", air: "Thai Airways, Bangkok Airways, and Thai AirAsia. Many trips connect in Bangkok.", zone: "Asia/Bangkok", money: "Thai baht. Cards are accepted at larger shops. Cash is useful on the beach.", image: "/media/ports/phuket.jpg", alt: "The Phuket coast" },
      { name: "Ho Chi Minh City", place: "Phu My, Vietnam", note: "The ship docks at Phu My, about an hour and a half to two hours from District 1. This is not where the cruise starts.", air: "Vietnam Airlines and Vietjet into Ho Chi Minh City.", zone: "Asia/Ho_Chi_Minh", money: "Vietnamese dong. Cards work in hotels and larger restaurants. Cash is what street stalls take.", image: "/media/ports/ho-chi-minh.jpg", alt: "Ho Chi Minh City" },
      { name: "Bali", place: "Benoa, Indonesia", note: "The ship uses Benoa, on longer sailings between Asia and Australia. Beaches on the south coast are about 20 to 40 minutes. A temple such as Tanah Lot is closer to an hour.", air: "Fly Denpasar. Garuda, Singapore Airlines, Jetstar, and Qatar.", zone: "Asia/Makassar", money: "Indonesian rupiah. Cards are accepted in hotels. Cash is useful in markets.", image: "/media/ports/bali.jpg", alt: "The Bali coast at Tanah Lot" },
      { name: "Osaka", place: "Japan", note: "On Japan sailings from Tokyo. The ship docks at the Tempozan terminal on Osaka Bay. Dotonbori is about 20 minutes away. Some ships stay overnight.", air: "ANA, Japan Airlines, and Peach into Kansai.", zone: "Asia/Tokyo", money: "Japanese yen. Cards are widely accepted. Cash is still useful in smaller places.", image: "/media/ports/osaka.jpg", alt: "Osaka" },
      { name: "Busan", place: "South Korea", note: "On Japan and Korea sailings. Jagalchi Market is near the cruise terminal.", air: "Korean Air and Asiana. Many itineraries fly Seoul and connect.", zone: "Asia/Seoul", money: "South Korean won. Cards are accepted.", image: "/media/ports/busan.jpg", alt: "Busan" },
    ],
  },
  {
    slug: "australia-new-zealand",
    title: "Australia and New Zealand",
    lede: "Sydney and Auckland carry the season. Brisbane and Melbourne turn fewer ships. The rest of the coast is where those ships stop.",
    regionIds: ["australia", "new-zealand"],
    calls: [
      { name: "Hobart", place: "Tasmania", note: "On the way around from Sydney. The ship docks at Sullivans Cove. kunanyi, also called Mount Wellington, is about 30 minutes from the docks, and Salamanca Place is beside the water.", air: "Qantas, Virgin Australia, and Jetstar from Melbourne or Sydney.", zone: "Australia/Hobart", money: "Australian dollar. Cards are accepted.", image: "/media/ports/hobart.jpg", alt: "Hobart harbor" },
      { name: "Adelaide", place: "Australia", note: "Usually a day in the middle of a coastal sailing. The ship uses Outer Harbor, about 30 to 40 minutes from the city. A few sailings turn around here.", air: "Qantas, Virgin Australia, and Jetstar.", zone: "Australia/Adelaide", money: "Australian dollar. Cards are accepted.", image: "/media/ports/adelaide.jpg", alt: "Adelaide" },
      { name: "Fremantle", place: "Perth, Australia", note: "Perth’s port. You can walk into Fremantle. The train to Perth is about 30 minutes. This is the west coast, not the Sydney season.", air: "Qantas, Virgin Australia, and Jetstar, plus Singapore Airlines, Emirates, Qatar, and Cathay Pacific.", zone: "Australia/Perth", money: "Australian dollar. Cards are accepted. Western Australia does not change the clocks for summer.", image: "/media/ports/fremantle.jpg", alt: "Fremantle harbor" },
      { name: "Cairns", place: "Australia", note: "On Queensland and South Pacific routes. The Great Barrier Reef is a boat trip of about an hour to an hour and a half from the reef fleet. Many ships use Yorkeys Knob, about 25 minutes from the city.", air: "Qantas, Virgin Australia, and Jetstar.", zone: "Australia/Brisbane", money: "Australian dollar. Cards are accepted. Queensland does not change the clocks for summer.", image: "/media/ports/cairns.jpg", alt: "The Cairns waterfront" },
      { name: "Darwin", place: "Australia", note: "Between Asia and Australia. The wharf is near the center. The waterfront is in Darwin.", air: "Qantas, Virgin Australia, and Jetstar.", zone: "Australia/Darwin", money: "Australian dollar. Cards are accepted. The Northern Territory does not change the clocks for summer.", image: "/media/ports/darwin.jpg", alt: "Darwin harbor" },
      { name: "Wellington", place: "New Zealand", note: "On Auckland and Sydney sailings. The ship docks on Wellington Harbour. Te Papa is on the waterfront. The cruise does not start here.", air: "Air New Zealand.", zone: "Pacific/Auckland", money: "New Zealand dollar. Cards are accepted.", image: "/media/ports/wellington.jpg", alt: "Wellington harbor" },
      { name: "Tauranga", place: "New Zealand", note: "The port is in the Bay of Plenty. Mount Maunganui is about 10 minutes away. The town has no long-haul airport. The drive from Auckland is about 3 hours.", air: "Fly Auckland, then a drive. Air New Zealand.", zone: "Pacific/Auckland", money: "New Zealand dollar. Cards are accepted.", image: "/media/ports/tauranga.jpg", alt: "Mount Maunganui, the headland at Tauranga" },
      { name: "Christchurch", place: "Lyttelton, New Zealand", note: "The ship docks at Lyttelton, about 20 minutes through the tunnel from Christchurch.", air: "Air New Zealand, Qantas, and Jetstar into Christchurch.", zone: "Pacific/Auckland", money: "New Zealand dollar. Cards are accepted.", image: "/media/ports/christchurch.jpg", alt: "Christchurch" },
      { name: "Dunedin", place: "Port Chalmers, New Zealand", note: "The ship docks at Port Chalmers, about 25 minutes from Dunedin. The Otago Peninsula is beyond the city.", air: "Air New Zealand into Dunedin.", zone: "Pacific/Auckland", money: "New Zealand dollar. Cards are accepted.", image: "/media/ports/dunedin.jpg", alt: "Dunedin" },
    ],
  },
  {
    slug: "other",
    title: "Middle East, Africa, and South America",
    lede: "Seasonal homeports. Useful when the trip is the Arabian Gulf, the Brazilian coast, or Antarctica. Not a Caribbean embarkation.",
    regionIds: ["elsewhere"],
  },
];

export function portPageBySlug(slug: string) {
  const page = portPages.find((item) => item.slug === slug);
  if (!page) return null;
  const sections = page.regionIds.map((id) => portRegions.find((region) => region.id === id)).filter((region) => region != null);
  return { ...page, sections };
}
