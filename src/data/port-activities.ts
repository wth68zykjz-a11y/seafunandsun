import { extraPortPages } from "@/data/port-activities-extra";

export type PortStop = {
  name: string;
  dock: string;
  text: string;
};

export type PortActivityPage = {
  slug: string;
  region: string;
  title: string;
  lede: string;
  note: string;
  image: string;
  imageAlt: string;
  stops: PortStop[];
};

export const portActivities: PortActivityPage[] = [
  {
    slug: "alaskan",
    region: "Alaskan Cruises",
    title: "What you can do in port in Alaska",
    lede: "These are the usual stops on an Inside Passage cruise or a one-way cruise across the Gulf of Alaska. A scenic sail such as Tracy Arm, Glacier Bay, or Hubbard Glacier has no pier. You watch from the ship.",
    note: "An excursion can be added in a port. On a stop of four to eight hours, one outing is the realistic plan. If the ship stays longer, you can add another. A tour sold by the ship waits if the group is late. A taxi or a tour you arranged on your own does not make the ship wait.",
    image: "/media/day-alaskan.jpg",
    imageAlt: "A train crossing a wooden trestle above a misty spruce valley",
    stops: [
      {
        name: "Juneau",
        dock: "Ships dock downtown, a short walk from the tram.",
        text: "Mendenhall Glacier is about 13 miles from the pier, usually 20 to 30 minutes by bus or taxi. You can walk a trail toward the face, or stay at the visitor center and look across the lake. The Mount Roberts tram starts beside the dock. A whale-watching boat leaves from Auke Bay, about 20 minutes from downtown, and humpbacks are the whales people come to see from late spring into summer. In town you can order grilled salmon, or a chowder made from it. Tracy Arm and Endicott Arm are not Juneau. Those are fjords the ship sails, and there is no pier.",
      },
      {
        name: "Skagway",
        dock: "The dock is at the foot of town.",
        text: "Broadway is the old gold-rush street, and you can walk it from the ship. The White Pass and Yukon Route leaves from the depot, a short walk from the pier. The train climbs the Klondike route to the summit. The summit is colder than the dock, even in July.",
      },
      {
        name: "Ketchikan",
        dock: "Ships dock on the waterfront.",
        text: "Creek Street is a boardwalk over the creek. You can walk there from the piers. The totem poles at Saxman are a few miles south of town. Totem Bight is about 10 miles north, in a spruce forest above the water. A short stop leaves time for the boardwalk or one of the pole parks. It does not leave time for both parks and a boat.",
      },
      {
        name: "Icy Strait Point",
        dock: "This is a private dock at Hoonah, not a city pier.",
        text: "The old cannery building, the zip line, and the beach are on the property. A whale-watching boat leaves from the dock. You can walk to Hoonah from the dock if you want the town.",
      },
      {
        name: "Seward",
        dock: "Seward is usually the end of a one-way Gulf cruise, not a four-hour call.",
        text: "The small-boat harbor is in town. A Kenai Fjords boat goes out through Resurrection Bay and, when the weather allows, toward the glaciers and the whales. If you are staying on, the Alaska Railroad runs between Seward and Anchorage.",
      },
      {
        name: "Whittier",
        dock: "The ship docks beside the tunnel.",
        text: "Whittier is the other end of a one-way cruise. The only road and the railroad share the tunnel into Anchorage, so the transfer is part of leaving the ship. There is not a walkable old town at the pier.",
      },
      {
        name: "Scenic sails",
        dock: "Tracy Arm, Endicott Arm, Glacier Bay, College Fjord, and Hubbard Glacier have no pier.",
        text: "You watch from the deck or a balcony. When a smaller boat is offered, it can get closer to the ice than the cruise ship can. Dress for wind even in July.",
      },
    ],
  },
  {
    slug: "caribbean",
    region: "Caribbean Cruises",
    title: "What you can do in port in the Caribbean",
    lede: "A western week, an eastern week, and a southern week do not share the same islands. This page says where the ship docks, and how far the sights are from that pier.",
    note: "A morning-to-afternoon stop usually leaves time for one plan: the reef, a beach, or the town. If the ship stays overnight, you can add another. An excursion sold by the ship comes with a wait if the tour runs late. A taxi or a tour you booked on your own does not.",
    image: "/media/day-caribbean.jpg",
    imageAlt: "A snorkel mask and fins on limestone beside clear reef water",
    stops: [
      {
        name: "Cozumel",
        dock: "Ships dock on the west side, at the international pier or at Punta Langosta, beside San Miguel.",
        text: "The west-side water is calm and about 80°F. A boat from those piers drifts over Palancar Reef, a coral wall where you can see parrotfish and, sometimes, a turtle. The east side of the island is rocky and the water is rough, and the snorkel boats do not use it. In San Miguel you can order grilled snapper, or ceviche, raw fish cured in lime.",
      },
      {
        name: "Grand Cayman",
        dock: "Most ships tender into George Town, or use a pier when one is assigned.",
        text: "Stingray City is a shallow sandbar. The boat ride from the harbor takes about 45 minutes, and southern stingrays swim up to the boat. A taxi from George Town to Seven Mile Beach takes about 15 to 20 minutes. The sand is pale, and the water on the west side is calm.",
      },
      {
        name: "Jamaica",
        dock: "Falmouth, Ocho Rios, and Montego Bay are different piers. The sailing names which one.",
        text: "Dunn’s River Falls is at Ocho Rios. The ride from that pier is short. Falmouth’s pier is beside the town, and you can walk the Georgian streets. Do not plan Dunn’s River on a Falmouth call.",
      },
      {
        name: "Costa Maya",
        dock: "The pier is a built port at Mahahual.",
        text: "You can walk from the terminal to the town and the beach, or take a short shuttle. The water on this coast is warm. A boat takes you to the reef. You do not swim there from the gangway.",
      },
      {
        name: "Nassau",
        dock: "Ships dock at Prince George Wharf, downtown.",
        text: "You can walk from the ship to the straw market and the old streets. Cable Beach is on the north shore. A taxi from the pier takes about 15 to 20 minutes, and the sand is pale. A short taxi across the bridge reaches Paradise Island. A conch fritter is chopped conch fried in a seasoned batter.",
      },
      {
        name: "St. Thomas",
        dock: "Ships use Havensight or Crown Bay.",
        text: "Charlotte Amalie has old warehouses and the 99 Steps. You can walk there from Havensight. From Crown Bay the ride is short. The ride over the hill to Magens Bay takes about 20 to 30 minutes. The beach is a long curve of pale sand, and the water on that north shore is usually calm.",
      },
      {
        name: "St. Maarten",
        dock: "Ships use the pier at Pointe Blanche or tender into Philipsburg.",
        text: "Great Bay Beach is in front of the town. Orient Bay is on the east side, about 30 minutes by taxi, and the water there is the Atlantic, so it is rougher than the bay in town. Maho Beach, beside the airport, is about 15 to 20 minutes from Philipsburg.",
      },
      {
        name: "Martinique",
        dock: "Ships dock at Fort-de-France, not at the small coves down the coast.",
        text: "A bakery in town sells a croissant, layered dough of flour and butter, or a pain au chocolat, that dough around a bar of chocolate. The covered market on Rue Isambert sells an accra, salted cod mashed with herbs and fried. You drive from this pier to the coves. They are not beside the dock.",
      },
      {
        name: "Antigua",
        dock: "Ships dock at St. John’s, at Heritage Quay or the deep-water harbor.",
        text: "Nelson’s Dockyard is a Georgian naval yard at English Harbour, about 30 to 40 minutes across the island. Dickenson Bay, on the west, has pale sand and calm water, about 15 minutes from St. John’s. Half Moon Bay, on the east, has reef and more surge. In St. John’s you can order fungi and saltfish, cornmeal cooked with salted cod.",
      },
      {
        name: "San Juan",
        dock: "Many eastern cruises begin and end here. The ships dock beside Old San Juan.",
        text: "You walk the blue cobblestones up to El Morro and the cathedral. A short taxi east of the old city reaches Condado. That beach faces the Atlantic, and the surf can be up. It is not a reef lagoon. In town you can order mofongo, mashed fried plantain with garlic, often topped with shrimp or pork.",
      },
      {
        name: "Aruba, Bonaire, and Curaçao",
        dock: "These are a southern routing, usually from San Juan, or a longer loop from Florida.",
        text: "They are not stops on a seven-night western week with Cozumel. In Aruba the ship docks at Oranjestad. A taxi from there goes up the west coast to Eagle Beach. The sand is pale, and the water is calm. In Bonaire the reef starts close to shore, which is why people snorkel from the coast. In Curaçao the ship docks at Willemstad. You can walk to the Handelskade, the colored waterfront, and the Queen Emma Bridge swings open for ships.",
      },
      {
        name: "Private islands",
        dock: "Perfect Day at CocoCay and Castaway Cay are stops the cruise line built.",
        text: "The ship docks at a sheltered cove. The water is warm and calm. There is no town and no local kitchen. The grill serves the ship’s burgers, not island food.",
      },
    ],
  },
  {
    slug: "mediterranean",
    region: "Mediterranean Cruises",
    title: "What you can do in port in the Mediterranean",
    lede: "The ship is often an hour or more from the city on the brochure. This page names the dock, the ride, and what is in the city.",
    note: "A port call usually leaves time for one sight and a meal, not every museum in the city. If you stay before or after the cruise, there is no all-aboard, and you can add the rest. An excursion can be arranged as an add-on.",
    image: "/media/day-mediterranean.jpg",
    imageAlt: "Empty blue chairs on a terrace above a caldera harbor at dawn",
    stops: [
      {
        name: "Athens",
        dock: "Ships dock at Piraeus. The metro or a taxi takes about 30 to 40 minutes to the Acropolis.",
        text: "The Acropolis Museum, beside the hill, holds the sculptures from the site, including the Parthenon marbles that remain in Athens. You can walk down the hill to the Ancient Agora. The National Archaeological Museum, across the city, holds the Mycenaean gold and the classical bronzes, so it fits a longer stay better than a single morning. In Plaka you can sit down after the hill. A souvlaki is pork or chicken on a skewer, often in pita with tomato, onion, and tzatziki, which is yogurt with cucumber and garlic. Hotel Grande Bretagne is a stay in the city before or after the cruise.",
      },
      {
        name: "Santorini",
        dock: "The ship anchors in the caldera. You come ashore by tender at the old port.",
        text: "A cable car and a steep path both go up to Fira. The line for both is shorter on the first tenders. The bus to Oia follows the rim and takes about 25 to 40 minutes from Fira. The white houses and the cliff path are in those two towns. To reach Kamari you ride down off the rim. The sand there is black volcanic sand.",
      },
      {
        name: "Mykonos",
        dock: "Most ships tender to the old port.",
        text: "You can walk from the landing to the windmills and the lanes. Little Venice is the row of houses on the water, in town. A taxi from the landing to Ornos takes about 10 to 20 minutes, and the water there is calmer than on the north shore.",
      },
      {
        name: "Crete",
        dock: "Most Greek weeks use Heraklion.",
        text: "The harbor fort is near the piers. Knossos, the Minoan palace, is about 15 to 20 minutes from the port. You walk the ruins of the palace. The Archaeological Museum in Heraklion holds the frescoes and finds from that site, and it is in town.",
      },
      {
        name: "Rome",
        dock: "The ship docks at Civitavecchia, not in Rome. The train or a coach takes about an hour to an hour and a half.",
        text: "St. Peter’s is in the city. The Vatican Museums hold Michelangelo’s ceiling in the Sistine Chapel and the classical sculpture galleries. The Colosseum, the Forum, and the Palatine are a separate part of the city, about a half hour on foot or a short taxi from the Vatican. A short call usually leaves time for one of those, not all of them. Cacio e pepe is pasta with pecorino and black pepper. Rome Cavalieri, a Waldorf Astoria hotel, looks over the city and is a stay before or after the cruise.",
      },
      {
        name: "Florence",
        dock: "The ship docks at Livorno. Florence is about an hour and a half from that pier.",
        text: "The Duomo and the Baptistery are in Florence. The Uffizi holds Italian Renaissance painting, including Botticelli’s Birth of Venus. The Leaning Tower is in Pisa. The ride from the ship takes about 30 minutes. Belmond Villa San Michele, in Fiesole above Florence, is a stay before or after the cruise.",
      },
      {
        name: "Venice",
        dock: "Large ships do not dock in the lagoon. The usual piers are Ravenna, about 2 to 2.5 hours from Venice, or Trieste, about 2 hours.",
        text: "St. Mark’s Basilica and the Doge’s Palace are in Venice, on the square. A cicchetto is a small snack at a bar, often salt cod on polenta, or sardines in saor, which is onion, vinegar, and raisins. The Gritti Palace, on the Grand Canal, is a stay in the city before or after the cruise.",
      },
      {
        name: "Dubrovnik",
        dock: "Many ships dock at Gruz, about 15 to 20 minutes by bus from the old town. Some smaller ships tender closer.",
        text: "The city walls are the walk around the old town. The cable car goes up to Mount Srđ. Hotel Excelsior looks at the old town and is a stay before or after the cruise.",
      },
      {
        name: "Kotor",
        dock: "The ship comes into the bay. Larger ships anchor and tender. Smaller ships can dock at the quay in town.",
        text: "The walls climb the hill behind the square. A walk on the lower streets does not require the full climb.",
      },
      {
        name: "Split",
        dock: "The ship docks close to the Riva, the waterfront walk.",
        text: "Diocletian’s Palace is the old town itself. You walk through the palace. You do not ride out to a site beyond the city.",
      },
      {
        name: "Amalfi",
        dock: "When the ship stops, it is usually a tender into Amalfi.",
        text: "The cathedral steps and the paper shops are in the town. A boat along the coast reaches Positano. That is not the Amalfi landing. Lunch can run long if all-aboard is late enough. A common plate is scialatielli ai frutti di mare, a short local pasta with mussels, clams, and shrimp.",
      },
      {
        name: "Barcelona",
        dock: "The cruise terminals are at the port. A shuttle or a walk of about 15 to 20 minutes reaches the bottom of La Rambla.",
        text: "The Gothic Quarter and La Boqueria, the covered market, are there. The Sagrada Família is about 20 to 30 minutes farther, by metro or taxi. Pa amb tomàquet is bread rubbed with tomato, olive oil, and salt. Hotel Arts, on the waterfront, is a stay before or after the cruise.",
      },
      {
        name: "Palma",
        dock: "Ships dock near the cathedral.",
        text: "You can walk into the old town from the port. The cathedral and the Arab baths are on that walk. A taxi from the pier reaches a beach on the bay. You do not walk off the ship onto that sand.",
      },
      {
        name: "Marseille",
        dock: "The cruise terminal is at the Joliette port. The Vieux-Port is about 10 to 15 minutes by shuttle or taxi.",
        text: "The old streets climb behind that harbor. Bouillabaisse is a stew of local rockfish, served with rouille, a garlic and saffron mayonnaise, and toasted bread.",
      },
      {
        name: "Nice and Monaco",
        dock: "Many ships tender at Villefranche-sur-Mer. Monaco is a separate stop when the itinerary lists it.",
        text: "From Villefranche you can take a short boat or a taxi along the coast into Nice. The old town and the Promenade des Anglais are in Nice. In Monaco the palace is up on the rock, and you can walk to the casino from the harbor.",
      },
    ],
  },
  ...extraPortPages,
];

const bySlug = new Map(portActivities.map((page) => [page.slug, page]));

export function portActivityBySlug(slug: string) {
  return bySlug.get(slug);
}
