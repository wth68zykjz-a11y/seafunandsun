export type Excursion = {
  title: string;
  where: string;
  length: string;
  pace: string;
  detail: string;
};

export type DestinationShore = {
  photo: string;
  photoAlt: string;
  intro: string;
  excursions: Excursion[];
};

export const shoreNote =
  "This is how a day usually goes in the ports ships actually use. You can add an excursion. It is not in the fare unless the line includes it. Who runs it, how long it takes, and what it costs depend on the ship and the date.";

export const shores: Record<string, DestinationShore> = {
  "panama-canal": {
    photo: "/media/panama-canal.jpg",
    photoAlt: "A ship in the Miraflores Locks on the Panama Canal",
    intro:
      "The transit is the reason for the cruise, and it happens from the deck. A shore day is separate. Cartagena is the usual city. Panama City only counts when the ship docks.",
    excursions: [
      {
        title: "The locks, from the ship",
        where: "Gatun or Agua Clara, then Miraflores or Cocoli",
        length: "Most of one day",
        pace: "None. You stay aboard.",
        detail:
          "The ship moves through the locks. You watch from the deck. There is no pier and no tour to book for the transit itself.",
      },
      {
        title: "Cartagena’s old city",
        where: "Cartagena, Colombia, when the itinerary includes it",
        length: "A morning or an afternoon",
        pace: "Easy walking on stone streets",
        detail:
          "The walls, the squares, and one lunch are a full day ashore. A bus that also promises a beach leaves less time in the old city.",
      },
      {
        title: "Panama City, when the ship docks",
        where: "A listed stop, not the transit day",
        length: "The hours the ship is alongside",
        pace: "A car into the city, then a walk",
        detail:
          "The old quarter and the canal visitor areas are in Panama City. The ship has to dock there.",
      },
    ],
  },
  alaskan: {
    photo: "/media/ex-alaskan.jpg",
    photoAlt: "A small boat near a whale in a cold Alaskan fjord",
    intro:
      "A May day and an August day can use the same ports. May still has the larger glaciers, and it is colder. August is when the salmon run and the bears come to the rivers. Most stops last four to eight hours. The ship sails the glacier. The hours ashore can go to the wildlife or the railroad. A bus to a gift shop is neither.",
    excursions: [
      {
        title: "Glacier water, up close",
        where: "Tracy Arm, Endicott Arm, or a similar fjord day",
        length: "Half day on the water",
        pace: "Easy if you stay seated",
        detail:
          "A smaller boat gets nearer the ice than the ship can. You hear the calving. If you stay aboard, the deck or a balcony is the other way to watch the fjord. Dress for wind even in July.",
      },
      {
        title: "Whales from Juneau or Seward",
        where: "Auke Bay or Resurrection Bay",
        length: "3 to 4 hours",
        pace: "Moderate if the chop is up",
        detail:
          "Humpbacks are the usual show from late spring. A small boat gets closer than the ship does, and the water moves.",
      },
      {
        title: "White Pass from Skagway",
        where: "Skagway to the summit",
        length: "Half day",
        pace: "Easy",
        detail:
          "The railroad climbs out of town into the Klondike route. It is the port day that works for people who do not want a hike. Pair it with a short walk in town, not a second full tour.",
      },
    ],
  },
  caribbean: {
    photo: "/media/ex-caribbean.jpg",
    photoAlt: "Clear water over a pale reef beside a quiet Caribbean beach",
    intro:
      "Caribbean stops are short, and the beach is close. One plan is enough: a reef, a shaded beach, or a town. A zip line and a catamaran on the same day only works if the ship stays overnight.",
    excursions: [
      {
        title: "The reef, not the pool deck",
        where: "Cozumel, Grand Cayman, or a western Caribbean stop",
        length: "2 to 3 hours",
        pace: "Time in the water",
        detail:
          "In Cozumel the west-side water is calm and about 80°F. The boat drifts you over Palancar’s coral wall. You can see parrotfish, and sometimes a turtle. The east side of the island is rocky and rough, and the snorkel boats do not go there. At Grand Cayman, Stingray City is a shallow sandbar where southern stingrays swim up to the boat.",
      },
      {
        title: "A beach with an actual chair",
        where: "Cozumel, Nassau, or a private-island style stop",
        length: "Most of the port day",
        pace: "Easy",
        detail:
          "Cozumel’s west beaches have pale sand, and the water there is calm. At Nassau’s Cable Beach you can order a conch fritter, chopped conch fried in a seasoned batter. CocoCay and Castaway Cay have a sheltered cove. The water is warm and calm. The grill serves the ship’s burgers, not food from a local kitchen.",
      },
      {
        title: "A bakery, then the market",
        where: "Fort-de-France, Martinique",
        length: "About 3 hours on foot",
        pace: "Easy walking",
        detail:
          "Start at a bakery for a croissant, layered dough of flour and butter. Then walk the covered market on Rue Isambert. The fritter there is an accra: salted cod mashed with herbs and fried. One street is enough. If you came by tender, leave time for the last boat.",
      },
    ],
  },
  mediterranean: {
    photo: "/media/ex-mediterranean.jpg",
    photoAlt: "An empty morning path above a white Mediterranean harbor",
    intro:
      "Mediterranean days are walking days, and the good light is early. Santorini, Athens, and the Amalfi coast are hard later in the day. Take the morning version. The afternoon is better on the ship, once the alleys fill.",
    excursions: [
      {
        title: "Santorini before the boats stack",
        where: "Fira or Oia, from the caldera tender",
        length: "Morning",
        pace: "Steep walking and steps",
        detail:
          "The cable car and the donkeys both have lines by late morning. The first tender leaves time at the top.",
      },
      {
        title: "The Acropolis, and one stop nearby",
        where: "Athens, from Piraeus",
        length: "Half day",
        pace: "Uneven stone, real walking",
        detail:
          "See the Acropolis in the morning. The Acropolis Museum next door holds the sculptures from the site, including the Parthenon marbles that remain in Athens. You can walk down the hill to the Ancient Agora. The National Archaeological Museum, across the city, holds the Mycenaean gold and the classical bronzes, so it fits a longer stay. In Plaka you can have lunch after the hill.",
      },
      {
        title: "St. Peter's, or the Colosseum",
        where: "Rome, from Civitavecchia",
        length: "Most of the port day",
        pace: "A lot of walking in the city",
        detail:
          "St. Peter's is in Rome. The Vatican Museums hold Michelangelo’s ceiling in the Sistine Chapel and the classical sculpture galleries. The Colosseum, the Forum, and the Palatine are in the city too. The Borghese Gallery holds Bernini’s sculptures and Caravaggio’s paintings, and it needs a timed ticket. Rome Cavalieri, a Waldorf Astoria hotel, is a stay in the city before or after the cruise. The ship docks at Civitavecchia. Rome is about an hour and a half from the pier. Lunch can fit if the ship leaves later.",
      },
      {
        title: "Kotor’s walls, or an Amalfi table",
        where: "Kotor or the Amalfi coast, when the ship stops",
        length: "2 to 4 hours",
        pace: "Stairs in Kotor; a car and a table in Amalfi",
        detail:
          "In Kotor you walk the streets. It is not a museum tour. In Amalfi, lunch can take the afternoon when the ship stays long enough. All-aboard decides which of those days is real.",
      },
    ],
  },
  european: {
    photo: "/media/ex-european.jpg",
    photoAlt: "A misty canal, a stone bridge, and bicycles along the quay",
    intro:
      "A European day in port is a city day. Ideas include the capitals on that sailing. If you have already been somewhere, the hours can go to a place that is new.",
    excursions: [
      {
        title: "Bruges from the Zeebrugge pier",
        where: "Canals and the old square",
        length: "Most of the day",
        pace: "Easy walking on cobblestone streets",
        detail:
          "Bruges has the canals, the belfry, and a table for mussels. The ship docks at Zeebrugge. Bruges is about 20 minutes from the pier.",
      },
      {
        title: "Étretat from Le Havre",
        where: "The chalk cliffs, then a Norman lunch",
        length: "Half to full day",
        pace: "A short cliff path, or the view from the town",
        detail:
          "Étretat has the chalk cliffs and a Norman lunch. Paris has the Louvre, Notre-Dame, and the Eiffel Tower. The ship docks at Le Havre. Paris is about two hours from the pier, so a short stop leaves time for one sight. To see Paris properly, stay at Shangri-La Paris before the cruise or after you return.",
      },
      {
        title: "One garden, not the whole city",
        where: "Seville’s Alcázar, Lisbon’s hills, or a Riviera town",
        length: "4 hours",
        pace: "Walking, some hills",
        detail:
          "The Alcázar is in Seville. Belém and Alfama are in Lisbon. A Riviera town is its own stop. Ships for Seville often dock at Cádiz. Seville is about two hours from that pier. If the ship leaves later, lunch can fit at Time Out Market in Lisbon. To see Lisbon properly, stay at the Four Seasons Hotel Ritz before the cruise or after you return.",
      },
    ],
  },
  hawaii: {
    photo: "/media/ex-hawaii.jpg",
    photoAlt: "Black lava rock, turquoise water, and an empty canoe on a Hawaiian beach",
    intro:
      "Inter-island ships often stay overnight, so a day in Hana can work. A cruise that departs from San Diego, Los Angeles, or Vancouver spends more of the week at sea. The excursion has to match which of those two cruises you booked.",
    excursions: [
      {
        title: "Turtles in the water",
        where: "A sheltered bay on Maui, Kauai, or the Big Island",
        length: "2 to 3 hours",
        pace: "Comfortable swimmer",
        detail:
          "Ideas include a snorkel and a sit-on kayak. Winter whale season is a bonus from the boat, not a guarantee. The calm side of the island depends on that day’s wind.",
      },
      {
        title: "Pearl Harbor in the morning",
        where: "Oahu",
        length: "Half day",
        pace: "Easy, some standing",
        detail:
          "Go early, then leave the afternoon for a beach. A full-day circle of Oahu plus the memorial does not fit a short stop.",
      },
      {
        title: "A day in Hana",
        where: "Hana, on Maui",
        length: "Time in town",
        pace: "A swim, a walk, and lunch",
        detail:
          "In Hana you can swim at Hana Bay, walk the black-sand beach at Waiʻānapanapa, and get banana bread or a plate lunch. The ship docks in Kahului, about two and a half hours away. A morning-to-evening stop leaves little time in town after that. An overnight in Maui leaves the afternoon and the evening.",
      },
    ],
  },
  bermuda: {
    photo: "/media/ex-bermuda.jpg",
    photoAlt: "A curve of pink sand and clear water toward pastel houses",
    intro:
      "Bermuda sailings usually stay more than a day, so you do not have to rush the island. On a short stop, book the excursion through the ship if you want to leave the Dockyard. If that tour runs late, the ship waits. A tour you arranged yourself does not make the ship wait.",
    excursions: [
      {
        title: "Pink sand, earlier than the ship",
        where: "Horseshoe Bay or a quieter south-shore beach",
        length: "Half day",
        pace: "Easy",
        detail:
          "Horseshoe Bay has the pink sand. Go in the morning. Ships dock at the Royal Naval Dockyard. The beach is about 30 minutes by taxi and closer to 45 by bus.",
      },
      {
        title: "Town by ferry",
        where: "Hamilton or St. George’s",
        length: "3 hours",
        pace: "Easy walking",
        detail:
          "Walk the pastel streets, see one fort, and stop for lunch. St. George’s is the quieter of the two towns. Choose this day if you do not want another beach.",
      },
      {
        title: "Railway Trail or a cave",
        where: "The old rail bed, or Crystal Caves",
        length: "Half day",
        pace: "Moderate on a bike; easy in the caves",
        detail:
          "The trail is flat and green. The caves are cool and short. Both do not fit in the same afternoon.",
      },
    ],
  },
  "northern-europe": {
    photo: "/media/ex-northern-europe.jpg",
    photoAlt: "A steep fjord village and a waterfall above dark water",
    intro:
      "A northern Europe day can be a tender into a fjord village, or a walk in a Baltic city. Weather decides which tender runs. If the scenic boat is canceled, you can walk in town.",
    excursions: [
      {
        title: "A village at the end of the fjord",
        where: "A tender port such as Geiranger or Flåm",
        length: "2 to 4 hours ashore",
        pace: "Easy unless you add a hike",
        detail:
          "You can tender into the village, or stay aboard and watch the walls from the deck. Room service on the balcony is the quiet version of the same sail. A waterfall walk can be added if you go ashore.",
      },
      {
        title: "Bergen’s wharf, on foot",
        where: "Bryggen and the fish market",
        length: "3 hours",
        pace: "Easy walking on cobblestone streets",
        detail:
          "The old wharf, then the funicular when the hill is clear. A harbor walk in the rain is still a good way to see Bergen.",
      },
      {
        title: "One Baltic old town",
        where: "Tallinn, Stockholm’s Gamla Stan, or Copenhagen",
        length: "Half day",
        pace: "Walking",
        detail:
          "The old walls, a square, and coffee.",
      },
    ],
  },
  "canada-new-england": {
    photo: "/media/ex-new-england.jpg",
    photoAlt: "A lighthouse and autumn trees on a rocky New England point",
    intro:
      "Fall sailings here are about color and small ports. A lighthouse, a town, and time to walk is a full day. Quebec and Halifax are the cities. Bar Harbor and the Maine ports are the slower ones.",
    excursions: [
      {
        title: "Lighthouse and a leaf walk",
        where: "A stop in Maine or Nova Scotia",
        length: "Half day",
        pace: "Easy paths",
        detail:
          "Peak color is a narrow window, usually late September into early October. The useful walk is the one near the pier, not an hour on a bus to a prettier brochure photo.",
      },
      {
        title: "Halifax or the Québec ramparts",
        where: "Halifax waterfront, or Québec if the ship goes upriver",
        length: "Half day on foot",
        pace: "Moderate hills in Québec",
        detail:
          "The citadel view in Halifax, or the walls above the St. Lawrence. Both are better on your own feet than from a coach window.",
      },
      {
        title: "Bar Harbor without the outlet mall",
        where: "Acadia’s carriage roads or the town shore path",
        length: "3 to 4 hours",
        pace: "Easy to moderate",
        detail:
          "Carriage roads are gravel and gentle. The town path is shorter. A “best of Acadia” loop spends the port day in the van.",
      },
    ],
  },
  river: {
    photo: "/media/ex-river.jpg",
    photoAlt: "A river ship passing a castle and vineyards at dusk",
    intro:
      "On most river ships the walking tour is already in the fare. The paid tour is the bike, the tasting, or the longer transfer. That list gets read before a paid day is added.",
    excursions: [
      {
        title: "The included walk, done properly",
        where: "Budapest, Vienna, Cologne, Paris, or Porto",
        length: "2 to 3 hours",
        pace: "Easy walking on cobblestone streets",
        detail:
          "The fare already includes this morning’s walk. On some stops that walk uses the hours you have. On others you only see a square.",
      },
      {
        title: "Bikes in the Wachau or along the Rhine",
        where: "A vineyard day between the capitals",
        length: "Half day",
        pace: "Moderate, mostly flat",
        detail:
          "E-bikes change who can do this. The villages between the famous cities are the point, not the mileage. Take the shorter loop if anyone in the cabin is unsure.",
      },
      {
        title: "A tasting that is not a detour",
        where: "Wachau wine, Douro port, or a Normandy cider stop",
        length: "2 to 3 hours",
        pace: "Easy",
        detail:
          "A tasting is worth it when the vineyard is on the way the ship is already going. It is not worth a 90-minute coach for one glass.",
      },
    ],
  },
  expedition: {
    photo: "/media/ex-expedition.jpg",
    photoAlt: "A distant zodiac among sea ice in pale polar light",
    intro:
      "An expedition day starts with the gear the ship issues: boots, a parka, and a life jacket. You ride a Zodiac to a beach or the ice, walk where the guides mark the path, and take pictures from the distance they set. A kayak or a canoe may be offered if the water is calm. Weather can cancel the landing.",
    excursions: [
      {
        title: "A landing, if the ice allows",
        where: "Antarctic peninsula or a sub-Antarctic island",
        length: "An hour or two ashore",
        pace: "Wet boots, short walk",
        detail:
          "You dress on the ship, ride the Zodiac in, and step onto rock, snow, or a beach. The walk is short. You may be with penguins or seals, or with nothing but ice. Pictures are from the line the staff holds. Then the Zodiac takes you back.",
      },
      {
        title: "Galápagos with the naturalist",
        where: "A dry landing or a panga ride",
        length: "Half day",
        pace: "Uneven lava, some steps",
        detail:
          "You land dry, or you come in by panga. The naturalist sets the trail over lava or a boardwalk, and you stop where the animals are. A swim or a short ride may be part of the same morning. The park rules set the pace.",
      },
      {
        title: "Kayak or a polar plunge",
        where: "Offered on some Arctic and Antarctic ships",
        length: "An hour",
        pace: "Active, cold",
        detail:
          "Some ships offer a kayak, a canoe, or a polar plunge when the water allows. You put on the suit they provide and go out for about an hour. It is optional. A landing day does not require it.",
      },
    ],
  },
  asia: {
    photo: "/media/ex-asia.jpg",
    photoAlt: "Lantern light on a calm harbor with limestone karsts beyond",
    intro:
      "The pier is often an hour or more from the place you came to see, and the heat is real. Visit the palace or one district, and leave time to get back to the ship.",
    excursions: [
      {
        title: "The Grand Palace, then lunch",
        where: "Bangkok",
        length: "Half day",
        pace: "Walking in the heat. Shoes come off in the palace grounds.",
        detail:
          "The Grand Palace is in Bangkok. Arrive when the gates open and walk the grounds. The ship docks at Laem Chabang. The palace is about two hours from the pier.",
      },
      {
        title: "Karsts from the water",
        where: "Ha Long style scenery, when the itinerary actually includes it",
        length: "Half day",
        pace: "Easy, some boat motion",
        detail:
          "Ha Long Bay has limestone karsts rising from the water. The ship has to already be in that bay.",
      },
      {
        title: "A Japanese port, on foot",
        where: "Kyoto",
        length: "Half to full day",
        pace: "Walking in the city",
        detail:
          "Fushimi Inari and Arashiyama are in Kyoto. The ship docks in Osaka or Kobe. Kyoto is about 45 minutes by train from Osaka and closer to an hour and a quarter from Kobe.",
      },
    ],
  },
  "south-america": {
    photo: "/media/ex-south-america.jpg",
    photoAlt: "A quiet South American waterfront and green hills at sunrise",
    intro:
      "A South American day can be time in a large city, or time on deck for a scenic sail such as Cape Horn. In a city, pick one neighborhood. On a scenic sail you want a window, not a bus.",
    excursions: [
      {
        title: "Rio with one view",
        where: "Sugarloaf and Corcovado",
        length: "Half day",
        pace: "Crowds and some standing",
        detail:
          "Ideas include Sugarloaf, Corcovado, and time in a beach neighborhood if the ship is in port long enough.",
      },
      {
        title: "Buenos Aires after dark, or a market by day",
        where: "San Telmo or a tango evening",
        length: "3 to 4 hours",
        pace: "Easy walking",
        detail:
          "A market afternoon is the simpler plan. A tango show is the evening plan, and only when all-aboard is late enough that the show ends before the gangway closes.",
      },
      {
        title: "Cape Horn from the deck",
        where: "The scenic day at the tip, weather permitting",
        length: "The ship’s routing",
        pace: "None — you stay aboard",
        detail:
          "Cape Horn is the headland. You see it from the deck when the weather is clear. Most ships do not land.",
      },
    ],
  },
  world: {
    photo: "/media/ex-world.jpg",
    photoAlt: "A large cruise ship crossing open ocean",
    intro:
      "A world cruise is mostly sea days, with a few ports long enough to explore. The stop worth planning is often an overnight in a city, not a three-hour coach. The overnights are the ones to plan. A short stop can be skipped.",
    excursions: [
      {
        title: "Use the overnight, ignore the glance",
        where: "A port where the ship stays past dinner",
        length: "A full day and an evening",
        pace: "Your choice",
        detail:
          "A guide is worth booking on an overnight: one neighborhood, a table, and a late return. On a two-hour tender stop you can walk near the landing.",
      },
      {
        title: "Crossing days, on purpose",
        where: "The Atlantic or a long Pacific stretch",
        length: "Several days at sea",
        pace: "Rest",
        detail:
          "Lectures, the deck, and an unscheduled day at sea.",
      },
      {
        title: "A segment, not the whole circle",
        where: "A 20- to 40-night slice of a longer voyage",
        length: "The sector you choose",
        pace: "Varies",
        detail:
          "A shorter sector can hold the cities you want. It is booked on its own.",
      },
    ],
  },
  rail: {
    photo: "/media/ex-rail.jpg",
    photoAlt: "A silver train crossing a high trestle above a mountain river",
    intro:
      "The California Zephyr follows the Colorado River through the canyon. The Empire Builder crosses the Rockies. You see the river and the pass best from the glass car. A fresh-air stop is a few minutes on the platform, long enough to stretch. If the train runs overnight, you sleep in a roomette and the lounge stays a place to sit. A hotel night in Chicago, Seattle, or Vancouver goes in only where the connection needs it.",
    excursions: [
      {
        title: "The sightseer lounge, not just a seat",
        where: "Empire Builder or California Zephyr",
        length: "The daylight hours of the route",
        pace: "Sitting, with a walk at fresh-air stops",
        detail:
          "You take the train instead of a flight so you can watch the canyon or the pass from the glass car. On an overnight trip you sleep in a roomette. The lounge is then a place to sit, not the bed.",
      },
      {
        title: "A stop that is long enough",
        where: "Glacier, a Rockies town, or a stop in a Canadian park",
        length: "A few hours, sometimes overnight",
        pace: "Easy walking",
        detail:
          "Glacier and the Canadian parks stay outside the window for hours, and the station stop can be ten minutes. A hike means you leave the train and sleep in a town or in the park.",
      },
      {
        title: "The city on either end",
        where: "Chicago, Seattle, San Francisco, Vancouver, or Toronto",
        length: "One night",
        pace: "Easy",
        detail:
          "A same-afternoon flight after a two-night train is a poor connection. One hotel night, a walk, then home, belongs in the same plan as the rail.",
      },
    ],
  },
  "australia-new-zealand": {
    photo: "/media/ex-australia-new-zealand.jpg",
    photoAlt: "Sunlight on a coral reef and a school of reef fish",
    intro:
      "An Australia or New Zealand day can be time in a city, hours on the reef, or a fiord the ship sails through. A reef and a capital do not fit in the same day. You pick one.",
    excursions: [
      {
        title: "Sydney, from the harbor",
        where: "Circular Quay and the Opera House",
        length: "Half day on foot",
        pace: "Easy, some hills if you leave the water",
        detail:
          "The Opera House and Circular Quay are in Sydney. Most ships dock beside them.",
      },
      {
        title: "The reef",
        where: "Cairns or Airlie Beach",
        length: "Most of the port day",
        pace: "A boat ride, with time in the water if you want it",
        detail:
          "The reef has the coral and the fish. A boat from Cairns or Airlie Beach is how you get there, and the trip uses most of the port stop.",
      },
      {
        title: "Milford, from the deck",
        where: "The scenic day in the fiords, weather permitting",
        length: "The ship’s routing",
        pace: "None — you stay aboard",
        detail:
          "Most ships do not land. Watch the walls from the deck, or order room service and take it on the balcony.",
      },
    ],
  },
};

export type PortFact = { label: string; text: string };
export type OutingNote = { fits: string; bring: string };

export type PortGuide = {
  detail: string;
  detailAlt: string;
  facts: PortFact[];
  outings: OutingNote[];
};

export const portGuides: Record<string, PortGuide> = {
  "panama-canal": {
    detail: "/media/panama-canal.jpg",
    detailAlt: "The Miraflores Locks building beside a ship in the Panama Canal",
    facts: [
      { label: "Time in port", text: "The canal day has no gangway. A stop in Cartagena is usually a morning or an afternoon. Panama City is a port only when the itinerary says the ship docks." },
      { label: "Worth the time", text: "Watch the locks from the deck. In Cartagena, you can walk the walled city, and you can eat there. A long coach to a beach uses the hours you would have spent in the city." },
      { label: "Best for", text: "Travelers who want the transit itself, and who can fly home from the other ocean on a full transit." },
      { label: "Also", text: "A partial transit goes into Gatun Lake and comes back out the same side. A full transit goes from one ocean to the other, and it takes longer." },
    ],
    outings: [
      { fits: "People who will sit on deck while the ship climbs the locks.", bring: "A hat and sun cover. The day is hot, and rain is ordinary." },
      { fits: "People who will walk the walls and stay for lunch in the old city.", bring: "Comfortable shoes. The streets are stone." },
      { fits: "People who will use a docked day for the old quarter or the canal visitor center.", bring: "Confirm the dock before you plan the day." },
    ],
  },
  alaskan: {
    detail: "/media/day-alaskan.jpg",
    detailAlt: "A train crossing a wooden trestle above a misty spruce valley",
    facts: [
      { label: "Time in port", text: "Most stops are four to eight hours. Glacier days can be the ship’s scenic sail, with no gangway at all." },
      { label: "Worth the time", text: "Stop in Juneau to visit the Mendenhall Glacier. You can eat grilled salmon, or a chowder made from it, or go out for a few hours and try to catch one. Stop in Skagway for the train up the White Pass." },
      { label: "Best for", text: "People who want wildlife and ice more than nightlife. A balcony is the better cabin here than a seat in a big theater." },
      { label: "Also", text: "The glacier and the White Pass train are the stops people come for." },
    ],
    outings: [
      { fits: "People who will take a small boat toward the ice, or watch from the deck or a balcony.", bring: "A wind layer, a hat, and shoes that can take spray. July is not warm on the water." },
      { fits: "People who will spend a few hours in a small boat looking for humpbacks.", bring: "Layers you can peel, and a dry bag if you are bringing a phone on deck." },
      { fits: "People who will take the train to the summit and ride it back down.", bring: "A light jacket for the summit, which is colder than the pier." },
    ],
  },
  caribbean: {
    detail: "/media/day-caribbean.jpg",
    detailAlt: "A snorkel mask and fins on limestone beside clear reef water",
    facts: [
      { label: "Time in port", text: "Usually morning to late afternoon. Private-island days are the ship’s own beach, not a town." },
      { label: "Worth the time", text: "Stop in Old San Juan and walk up to El Morro and the cathedral. In Martinique, stop at a bakery instead of a jewelry shop." },
      { label: "Best for", text: "A first cruise, a family, or anyone who wants short flights from the East Coast and a port every morning." },
      { label: "Also", text: "A beach day and a town day are separate plans." },
    ],
    outings: [
      { fits: "People who will get in the water over a reef, not beside the pool.", bring: "Reef-safe sunscreen already on, and a rash guard if you burn. The boat may not have shade." },
      { fits: "People who will take a shaded chair and lunch away from the buffet.", bring: "Cash for a chair upgrade if the included setup is a patch of sand." },
      { fits: "People who will trade the beach for a bakery and a market.", bring: "Comfortable shoes for cobblestone streets. In Martinique, the bakery is on the stop." },
    ],
  },
  mediterranean: {
    detail: "/media/day-mediterranean.jpg",
    detailAlt: "Empty blue chairs on a terrace above a caldera harbor at dawn",
    facts: [
      { label: "Time in port", text: "Often a long day, sometimes a tender. The useful hours are early, before the alleys fill." },
      { label: "Worth the time", text: "The Acropolis is in Athens. The Acropolis Museum beside it holds the sculptures from the site. The Ancient Agora is nearby. The National Archaeological Museum holds the Mycenaean gold and the classical bronzes. St. Peter’s is in Rome, and the Vatican Museums hold the Sistine Chapel ceiling. The Colosseum and the Forum are in the city too. The ship docks at Civitavecchia. Rome is about an hour and a half from the pier. Lunch can fit if the ship leaves later. Rome Cavalieri, a Waldorf Astoria hotel, is a stay in the city before or after the cruise. Long lunches are on the Amalfi coast." },
      { label: "Best for", text: "Travelers who want a new country each morning and will walk for it. Shoulder months beat August." },
      { label: "Also", text: "The Acropolis, or one town, is a full morning." },
    ],
    outings: [
      { fits: "People who will take the first tender up for the caldera, then come back down.", bring: "Sun protection, water, and shoes with a grip. The marble is polished by crowds." },
      { fits: "People who will give the morning to the Acropolis, then lunch in Plaka.", bring: "A hat and a bottle. The site is exposed, and the good cafes are after, not on the hill." },
      { fits: "People who will spend the day in Rome, at St. Peter’s, the museums, or the Colosseum.", bring: "Comfortable shoes." },
      { fits: "People who will walk Kotor’s walls, or sit down to lunch on the Amalfi coast.", bring: "Cash still helps in the old towns." },
    ],
  },
  european: {
    detail: "/media/day-european.jpg",
    detailAlt: "Bicycles beside a misty canal and a stone bridge in an old European town",
    facts: [
      { label: "Time in port", text: "A city day uses most of the hours, but the pier is often an hour from the place you actually want." },
      { label: "Worth the time", text: "The belfry is in Bruges, and the menus have mussels steamed in white wine, onion, and celery, usually with fries. The ship docks at Zeebrugge. Bruges is about 20 minutes from the pier. The Louvre is in Paris. It holds the Mona Lisa and the Winged Victory of Samothrace. Notre-Dame and the Eiffel Tower are in the city too. The ship docks at Le Havre. Paris is about two hours from the pier, so a short stop leaves time for one sight. Lunch can fit if the ship leaves later. Shangri-La Paris, looking toward the Eiffel Tower, is a stay in the city before or after the cruise. Westminster Abbey and the Tower of London are in London. The ship docks at Southampton. London is about an hour and a half to two hours from the pier. The Savoy is a stay in the city. The Sagrada Família and the Gothic Quarter are in Barcelona. Cocina Hermanos Torres is a Michelin table in the city if you reserved it ahead, and Camp Nou is there when there is a match. Belém and Alfama are in Lisbon. Hotel Arts is a stay in Barcelona. The Four Seasons Hotel Ritz is a stay in Lisbon." },
      { label: "Best for", text: "Travelers who have a city they still want, or who would rather have one garden than three capitals." },
      { label: "Also", text: "In Paris you can see the Louvre, Notre-Dame, or the Eiffel Tower. The ship docks at Le Havre. Paris is about two hours from the pier, so a short stop leaves time for one sight." },
    ],
    outings: [
      { fits: "People who will spend the day in Bruges, on the canals, at the belfry, and at a table for mussels.", bring: "Layers. Canal weather changes, and the square is windier than the pier." },
      { fits: "People who will stay in Étretat for the cliffs and lunch, rather than go on to Paris.", bring: "A wind jacket." },
      { fits: "People who will pick the Alcázar, one Lisbon hill, or a town on the Riviera.", bring: "Good walking shoes. Seville is about two hours from the pier at Cádiz." },
    ],
  },
  hawaii: {
    detail: "/media/day-hawaii.jpg",
    detailAlt: "A sea turtle in clear shallows beside black volcanic sand",
    facts: [
      { label: "Time in port", text: "Inter-island ships often overnight. A sailing from San Diego, Los Angeles, or Vancouver spends more days just getting there." },
      { label: "Worth the time", text: "Stop on Oahu to visit the USS Arizona Memorial. After that, you can order a plate lunch: rice, macaroni salad, and a meat such as kalua pork or chicken katsu." },
      { label: "Best for", text: "People who want the islands, not a new port every morning. Match the excursion to the kind of Hawaii trip you booked." },
      { label: "Also", text: "Hana Bay, the black-sand beach, and the food stands are in Hana. The ship docks in Kahului. Hana is about two and a half hours from the pier." },
    ],
    outings: [
      { fits: "People who will swim with the turtles on the calmer side of the island.", bring: "Reef-safe sunscreen. Whales in winter are a bonus, not a promise." },
      { fits: "People who will do the Arizona memorial in the morning and the beach after.", bring: "Allow time for security screening." },
      { fits: "People who want a swim, the black-sand beach, and lunch in Hana.", bring: "A swimsuit, cash for the food stands, and water." },
    ],
  },
  bermuda: {
    detail: "/media/day-bermuda.jpg",
    detailAlt: "Pink sand curving toward a pastel cottage and clear water",
    facts: [
      { label: "Time in port", text: "Ships usually stay more than a day, so you do not have to see the island between breakfast and all-aboard." },
      { label: "Worth the time", text: "Stop in St. George’s to see St. Peter’s Church. The town is quiet enough that you do not need a timed tour. In Hamilton, the fish sandwich on raisin bread is an idea." },
      { label: "Best for", text: "A short East Coast sailing that still feels like a real island, not a dash through three countries." },
      { label: "Also", text: "Horseshoe Bay and the town are the usual days." },
    ],
    outings: [
      { fits: "People who will take the pink sand in the morning, before the beach fills.", bring: "Reef shoes if the walk in is rocky. The sand itself is soft." },
      { fits: "People who will ferry into Hamilton or St. George’s for lunch.", bring: "A ferry schedule. St. George’s is the quieter town." },
      { fits: "People who will walk the Railway Trail, or step into a cave.", bring: "A light layer for the caves. They are short and colder than the beach." },
    ],
  },
  "northern-europe": {
    detail: "/media/day-northern-europe.jpg",
    detailAlt: "A row of painted wooden wharf houses reflected in calm water",
    facts: [
      { label: "Time in port", text: "Fjord villages can be a tender of a few hours. Baltic capitals are longer city days." },
      { label: "Worth the time", text: "The Bryggen wharf is in Bergen, and the fish market serves a shrimp sandwich: cold peeled shrimp on buttered bread, with mayonnaise and lemon. In Copenhagen, a New Nordic menu is local seafood, vegetables, and foraged herbs, and those tables are booked before you sail. The Rijksmuseum is in Amsterdam. It holds Rembrandt’s The Night Watch. The Anne Frank House is the rooms where she hid. Ocean ships dock at IJmuiden, not in the canals. The museum is about 30 to 45 minutes from the pier. Lunch can fit if the ship leaves later. The Waldorf Astoria Amsterdam is a stay in the city before or after the cruise. Nyhavn and Rosenborg are in Copenhagen. Hotel d’Angleterre is a stay in the city if you want to stay the night. Gamla Stan is in Stockholm. The Vasa Museum holds the warship Vasa, raised from the harbor. Grand Hôtel looks across the water at the palace." },
      { label: "Best for", text: "Long summer light, small ports, and people who like weather to be part of the trip." },
      { label: "Also", text: "If the tender does not run, you can walk in the town for the hours you have." },
    ],
    outings: [
      { fits: "People who will tender ashore, or stay on deck. Room service on the balcony is the same sail without the tender.", bring: "A real rain jacket." },
      { fits: "People who will walk Bryggen and ride the funicular when the hill is clear.", bring: "Shoes that can take wet stone." },
      { fits: "People who will walk the old walls, sit in one square, and have coffee.", bring: "A layer. Baltic mornings stay cool even when the brochure looks like July." },
    ],
  },
  "canada-new-england": {
    detail: "/media/day-new-england.jpg",
    detailAlt: "A gravel carriage road through peak autumn color near a rocky coast",
    facts: [
      { label: "Time in port", text: "Small Maine ports are half days. Halifax and Québec, when the ship goes upriver, are city days." },
      { label: "Worth the time", text: "Stop in Halifax to see the Citadel. You can do it on foot. If the ship goes up to Québec, stop there for the view from the Château Frontenac. You can also stay in that hotel before or after the cruise. In Maine, stop for a lighthouse and a lobster roll: lobster meat in a split bun, with mayonnaise or melted butter. That is a full day." },
      { label: "Best for", text: "Fall color and small harbors, often without a flight. Peak leaves are a narrow window." },
      { label: "Also", text: "You can walk the harbor and the ramparts." },
    ],
    outings: [
      { fits: "People who will time the stop for the maples and a walk out to a lighthouse.", bring: "A fleece. The maples are in color. The wind off the water is colder than it looks." },
      { fits: "People who will climb to the Citadel, or up to the Château Frontenac.", bring: "Comfortable shoes. Québec is steeper than the waterfront in Halifax." },
      { fits: "People who will take the carriage roads, or the shorter path along the shore.", bring: "The carriage roads and the shore path are the stop." },
    ],
  },
  river: {
    detail: "/media/day-river.jpg",
    detailAlt: "Bicycles by a vineyard wall, with a river ship on the water below",
    facts: [
      { label: "Time in port", text: "You dock in town, often overnight. The morning includes the walking tour. The afternoon can be a bike ride or a tasting." },
      { label: "Worth the time", text: "Stop in Budapest to see the Parliament and have a bowl of goulash. In Vienna, Steirereck is the Michelin restaurant for Austrian cooking, so book it before the cruise. If the afternoon is short, have Sachertorte in a café instead. To see either city properly, stay before or after the cruise: Four Seasons Hotel Gresham Palace in Budapest, on the Danube, or Hotel Sacher in Vienna." },
      { label: "Best for", text: "Travelers who want the city at the gangway and are happy with one river, not a new ocean every week." },
      { label: "Also", text: "The included walk is already the morning." },
    ],
    outings: [
      { fits: "People who will take the morning walk that is already in the fare.", bring: "The ship’s listening set if the guide uses one, and shoes for uneven stone." },
      { fits: "People who will bike the Wachau or the Rhine instead of sitting on a coach.", bring: "A light layer." },
      { fits: "People who will stop for a glass. A tasting is a vineyard. A view stop is a lookout. You do not get both from the same stop.", bring: "Nothing formal." },
    ],
  },
  expedition: {
    detail: "/media/day-expedition.jpg",
    detailAlt: "Expedition boots and a red parka on a zodiac, with sea ice beyond",
    facts: [
      { label: "Time in port", text: "There often is no port. You may spend an hour or two ashore after a Zodiac ride, or the landing may be called off." },
      { label: "Worth the time", text: "The day may be gear, a Zodiac, a short walk, and pictures. A kayak or a canoe can be added when the water is calm." },
      { label: "Best for", text: "A landing, pictures, and a plan that can change with the weather." },
      { label: "Also", text: "The guides change the plan with the weather." },
    ],
    outings: [
      { fits: "People who will put on the boots and parka, ride the Zodiac, and walk where the guides stop.", bring: "The boots and parka the ship issues. Keep the camera inside the jacket until you are ashore." },
      { fits: "People who will follow the naturalist and stop for the animals.", bring: "Shoes for lava." },
      { fits: "People who will ask for the kayak, the canoe, or the plunge.", bring: "The suit the ship provides." },
    ],
  },
  asia: {
    detail: "/media/day-asia.jpg",
    detailAlt: "The Singapore skyline across Marina Bay at night",
    facts: [
      { label: "Time in port", text: "Bangkok, Kyoto, and the other cities are inland from the pier. The visit and the trip back to the ship are separate." },
      { label: "Worth the time", text: "The Grand Palace is in Bangkok. The ship docks at Laem Chabang. The palace is about two hours from the pier. The Peninsula Tokyo is a stay in the city before or after the cruise. Gardens by the Bay is in Singapore. Raffles is a stay in the city. The Peak and the Star Ferry are in Hong Kong. The Peninsula is a stay there." },
      { label: "Best for", text: "A visit to the Grand Palace, or a district in Kyoto such as Fushimi Inari or Arashiyama." },
      { label: "Also", text: "One temple, or one district in the city, is the visit. Getting back to the ship takes its own time." },
    ],
    outings: [
      { fits: "People who will spend the day in Bangkok, at the Grand Palace, another temple, or a market on the water.", bring: "Water and socks for the palace floors. The palace is about two hours from the pier at Laem Chabang." },
      { fits: "People who will see the karsts from the boat.", bring: "Sun cover." },
      { fits: "People who will spend the day in Kyoto, at Fushimi Inari or Arashiyama.", bring: "A transit card and walking shoes." },
    ],
  },
  "south-america": {
    detail: "/media/day-south-america.jpg",
    detailAlt: "An empty terrace looking across a bay toward a granite peak at morning",
    facts: [
      { label: "Time in port", text: "City days can be long. Cape Horn is often a scenic hour from the deck, with no landing." },
      { label: "Worth the time", text: "Christ the Redeemer and Sugarloaf are in Rio. You can reserve a Michelin dinner if the ship stays late. In Buenos Aires, San Telmo has parrillas where you can order grilled beef, often a sirloin, cooked over coals." },
      { label: "Best for", text: "A longer voyage where the city days are the memory and the scenic days are the ship’s job." },
      { label: "Also", text: "One view is a full day in Rio. A show in Buenos Aires works when the ship stays late." },
    ],
    outings: [
      { fits: "People who will choose Sugarloaf or Christ the Redeemer and stay with that view.", bring: "Comfortable shoes for the viewpoint." },
      { fits: "People who will take the San Telmo market by day, or a late table if the ship stays overnight.", bring: "Comfortable shoes for San Telmo." },
      { fits: "People who will watch Cape Horn from the rail, often with a coffee.", bring: "A jacket for the rail, and a camera. Weather decides if you see it." },
    ],
  },
  world: {
    detail: "/media/day-world.jpg",
    detailAlt: "A round porthole framing open ocean from a wood-paneled cabin",
    facts: [
      { label: "Time in port", text: "A few overnights matter. Many stops give you only a short look from the pier. Sea days make up most of the voyage." },
      { label: "Worth the time", text: "If the ship stays the night, pick one building and one good meal. A two-hour stop by tender is not the day for a stadium or a big museum." },
      { label: "Best for", text: "Travelers who like the ship, and who do not need a new city every morning." },
      { label: "Also", text: "On an overnight you can use the city into the evening. On a short tender you see the area around the landing." },
    ],
    outings: [
      { fits: "People who will use an overnight for one neighborhood and dinner, then walk back.", bring: "A plan for the city the ship is in." },
      { fits: "People who like a sea day: a book in the lounge, or breakfast on the balcony. There is no port.", bring: "A book for the day." },
      { fits: "People who will take twenty or forty nights of the long voyage, not every port on the circle.", bring: "Segments are booked on their own, separate from the full circle." },
    ],
  },
  rail: {
    detail: "/media/day-rail.jpg",
    detailAlt: "A river canyon seen from a train roomette window",
    facts: [
      { label: "Time at a stop", text: "On the Zephyr you can watch the Colorado River from the glass car for hours. A fresh-air stop lasts a few minutes on the platform. A hike in Glacier or the Rockies means a night off the train, in a town or a park." },
      { label: "Worth the time", text: "The Zephyr follows the canyon. The Bernina Express climbs past alpine lakes and stone viaducts. You see both from the window. If you want time in a town, you spend a night off the train." },
      { label: "Best for", text: "The Northwest, the Rockies, or a Canadian route, in a roomette if the trip is overnight." },
      { label: "Also", text: "On an overnight train a roomette has a bed and a door. A coach seat does not." },
    ],
    outings: [
      { fits: "People who will sit in the sightseer car for the canyon, and sleep in a roomette.", bring: "Layers. The glass car is colder than the room." },
      { fits: "People who will get off when the timetable allows, or spend a night off the train to hike.", bring: "The timetable shows how long each stop is." },
      { fits: "People who will take one night in Chicago, Seattle, or Vancouver before they fly.", bring: "A walk and a table, then the flight home." },
    ],
  },
  "australia-new-zealand": {
    detail: "/media/day-australia-new-zealand.jpg",
    detailAlt: "A glacial lake and snow-dusted mountains on New Zealand’s South Island",
    facts: [
      { label: "Time in port", text: "Sydney and Auckland can be long city days. Reef ports need a full day. Milford is often a scenic sail, with no gangway." },
      { label: "Worth the time", text: "Stop in Sydney to see the Opera House. It sits next to where most ships dock. If the ship leaves later, have lunch, or a meat pie on the quay: minced beef in gravy, baked in a pastry case. To see more than the harbor, stay at the Park Hyatt Sydney, across from the Opera House, before the cruise or after you return. In Auckland, walk the harbor and have a grilled lamb chop, the usual lunch." },
      { label: "Best for", text: "Travelers who can spend October through April, Australia’s summer, in one place, and who will fly to Sydney or Auckland to start." },
      { label: "Also", text: "The Great Barrier Reef has warm water, often around 80°F in the Australian summer, and hard coral. You can see clownfish, parrotfish, and giant clams. In Sydney the Opera House stands on the harbor, and you can walk the quay. You can also get a meat pie there: minced beef in gravy, baked in a pastry case." },
    ],
    outings: [
      { fits: "People who will walk the quay to the Opera House.", bring: "Comfortable shoes and a plan near the harbor." },
      { fits: "People who want time on the reef, over the coral, looking for clownfish and parrotfish.", bring: "Sun cover." },
      { fits: "People who will watch Milford from the deck, or from the balcony with room service.", bring: "A jacket for the rail. Weather decides whether the ship goes in." },
    ],
  },
};

