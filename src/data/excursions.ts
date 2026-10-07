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
        pace: "A drive, then a walk",
        detail:
          "The old quarter and the canal visitor areas are different stops. The day is there when the itinerary lists a dock.",
      },
    ],
  },
  alaskan: {
    photo: "/media/ex-alaskan.jpg",
    photoAlt: "A small boat near a whale in a cold Alaskan fjord",
    intro:
      "A May day and an August day can use the same ports. May still has the larger glaciers, and it is colder. August is when the salmon run and the bears come to the rivers. Most stops last four to eight hours. The ship does the glacier day. The time ashore is the wildlife or the railroad. A bus to a gift shop is not one of those.",
    excursions: [
      {
        title: "Glacier water, up close",
        where: "Tracy Arm, Endicott Arm, or a similar fjord day",
        length: "Half day on the water",
        pace: "Easy if you stay seated",
        detail:
          "A smaller boat gets nearer the ice than the ship can. You hear the calving. Dress for wind even in July. If the fjord is socked in, a later sailing is the practical answer.",
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
          "House reefs and short boat snorkels are the water days.",
      },
      {
        title: "A beach with an actual chair",
        where: "Cozumel, Nassau, or a private-island style stop",
        length: "Most of the port day",
        pace: "Easy",
        detail:
          "Loungers, a swim, and lunch.",
      },
      {
        title: "A bakery, then the market",
        where: "Fort-de-France, Martinique",
        length: "About 3 hours on foot",
        pace: "Easy walking",
        detail:
          "Start at a bakery for a croissant. Then walk the covered market on Rue Isambert. One street is enough. If you came by tender, leave time for the last boat.",
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
          "See the Acropolis in the morning. The Acropolis Museum next door holds the sculptures from the site, including the Parthenon marbles that remain in Athens. The Ancient Agora is a walk down the hill. The National Archaeological Museum, across the city, holds the Mycenaean gold and the classical bronzes, so it fits a longer stay. Plaka is the neighborhood for lunch after the hill.",
      },
      {
        title: "St. Peter's, or the Colosseum",
        where: "Rome, from Civitavecchia",
        length: "Most of the port day, including the drive",
        pace: "A lot of walking, and a long ride each way",
        detail:
          "The drive from the port takes about an hour and a half. St. Peter's is in Rome. The Vatican Museums hold Michelangelo’s ceiling in the Sistine Chapel and the classical sculpture galleries. The Colosseum, the Forum, and the Palatine are in the city too. The Borghese Gallery holds Bernini’s sculptures and Caravaggio’s paintings, and it needs a timed ticket. Lunch can fit if the ship leaves later. Rome Cavalieri, a Waldorf Astoria hotel, is a stay in the city before or after the cruise.",
      },
      {
        title: "Kotor’s walls, or an Amalfi table",
        where: "Kotor or the Amalfi coast, when the ship stops",
        length: "2 to 4 hours",
        pace: "Stairs in Kotor; a car and a table in Amalfi",
        detail:
          "Kotor is a town you walk through, not a museum you tour. Amalfi is a long lunch only when the ship’s time in port is long enough. All-aboard decides which of those days is real.",
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
          "A canal boat, then a walk and a cheese or chocolate stop that is not the first shop off the square. The transfer eats the time a second city would need.",
      },
      {
        title: "Étretat from Le Havre",
        where: "The chalk cliffs, then a Norman lunch",
        length: "Half to full day",
        pace: "A short cliff path, or the view from the town",
        detail:
          "This is the France day that is not Paris. Paris from Le Havre is a long ride. If that is the city you want, pick one sight and, if the ship leaves later, squeeze lunch in. To see Paris properly, stay at Shangri-La Paris before the cruise or after you return.",
      },
      {
        title: "One garden, not the whole city",
        where: "Seville’s Alcázar, Lisbon’s hills, or a Riviera town",
        length: "4 hours",
        pace: "Walking, some hills",
        detail:
          "Alcázar in the morning, or a Lisbon neighborhood and a mirador, beats a “best of” coach. A stop at Seville via Cádiz includes a longer drive than the map suggests. In Lisbon, choose Belém or Alfama. If the ship leaves later, squeeze lunch in at Time Out Market. To see the city properly, stay at the Four Seasons Hotel Ritz before the cruise or after you return.",
      },
    ],
  },
  hawaii: {
    photo: "/media/ex-hawaii.jpg",
    photoAlt: "Black lava rock, turquoise water, and an empty canoe on a Hawaiian beach",
    intro:
      "Inter-island ships often stay overnight, so a Road to Hana day can work. A cruise that departs from San Diego, Los Angeles, or Vancouver spends more of the week at sea. The excursion has to match which of those two cruises you booked.",
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
        title: "Hana only on an overnight",
        where: "Maui’s north shore road",
        length: "Full day",
        pace: "Mostly riding, some short walks",
        detail:
          "The road is the excursion. It belongs on a sailing that overnights in Maui, not on a dawn-to-dusk stop.",
      },
    ],
  },
  bermuda: {
    photo: "/media/ex-bermuda.jpg",
    photoAlt: "A curve of pink sand and clear water toward pastel houses",
    intro:
      "Bermuda sailings usually stay more than a day, so the island does not have to be done at a sprint. On a short stop, book the excursion through the ship if you want to leave the Dockyard. If that tour runs late, the ship waits. A tour you arranged yourself does not.",
    excursions: [
      {
        title: "Pink sand, earlier than the ship",
        where: "Horseshoe Bay or a quieter south-shore beach",
        length: "Half day",
        pace: "Easy",
        detail:
          "Go in the morning. The sand really is that color. A ferry or a short transfer is the way there. A six-stop island tour only waves at the beach.",
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
      "A northern Europe day is either a tender into a fjord village or a walk in a Baltic city. Weather decides which tender runs. A town walk is the backup when the scenic boat is canceled.",
    excursions: [
      {
        title: "A village at the end of the fjord",
        where: "A tender port such as Geiranger or Flåm",
        length: "2 to 4 hours ashore",
        pace: "Easy unless you add a hike",
        detail:
          "The view from the village is the day. A waterfall walk can be added. The ship’s sail in the fjord is already part of the day.",
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
          "The fare already includes this morning’s walk. On some stops that walk is the day. On others it is only a look at a square.",
      },
      {
        title: "Bikes in the Wachau or along the Rhine",
        where: "A vineyard day between the capitals",
        length: "Half day",
        pace: "Moderate, mostly flat",
        detail:
          "E-bikes change who can do this. The villages between the famous cities are the ride, not the mileage. Take the shorter loop if anyone in the cabin is unsure.",
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
        where: "Bangkok. Most ships dock at Laem Chabang, about two hours away.",
        length: "Half day, including the drive",
        pace: "Walking in the heat. Shoes come off in the palace grounds.",
        detail:
          "Arrive when the gates open and walk the palace grounds. The drive back to Laem Chabang takes about two hours, so leave time for it.",
      },
      {
        title: "Karsts from the water",
        where: "Ha Long style scenery, when the itinerary actually includes it",
        length: "Half day",
        pace: "Easy, some boat motion",
        detail:
          "This belongs only on a sailing that is already in that bay. A distant pier is not Ha Long Bay.",
      },
      {
        title: "A Japanese port, on foot",
        where: "Kyoto access from Osaka or Kobe, or a smaller shrine town",
        length: "Half to full day",
        pace: "Trains and walking",
        detail:
          "To reach Kyoto you take a train from Osaka or Kobe. You cannot walk there from the ship. Ideas include Fushimi Inari and Arashiyama.",
      },
    ],
  },
  "south-america": {
    photo: "/media/ex-south-america.jpg",
    photoAlt: "A quiet South American waterfront and green hills at sunrise",
    intro:
      "A South American day is either a large city or a scenic day the ship already provides, such as Cape Horn. A city day needs one focus. A scenic day needs a window, not a bus.",
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
          "There is often no landing. The day is a clear hour at the rail. Hiking boots do not help on a morning that never leaves the ship.",
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
          "A guide is worth booking on an overnight: one neighborhood, a table, and a late return. A two-hour tender stop is a walk near the landing.",
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
      "On a rail trip the train is the day. Choose a dome car, a stop for fresh air, or a roomette instead of a coach seat. A city night is added only where the connection needs it.",
    excursions: [
      {
        title: "The sightseer lounge, not just a seat",
        where: "Empire Builder or California Zephyr",
        length: "The daylight hours of the route",
        pace: "Sitting, with a walk at fresh-air stops",
        detail:
          "The glass car is why you take the train instead of a flight. On an overnight trip, a roomette means the lounge is a choice, not a bed.",
      },
      {
        title: "A stop that is long enough",
        where: "Glacier, a Rockies town, or a stop in a Canadian park",
        length: "A few hours, sometimes overnight",
        pace: "Easy walking",
        detail:
          "Some routes only pause. A hike needs a night off the train. A ten-minute station stop is not long enough for a national park.",
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
      "An Australia or New Zealand day is a city you can walk, a reef that needs real hours, or a fiord the ship already sails. A reef and a capital do not fit in the same day. One of them is the day.",
    excursions: [
      {
        title: "Sydney, from the harbor",
        where: "Circular Quay and the Opera House",
        length: "Half day on foot",
        pace: "Easy, some hills if you leave the water",
        detail:
          "The ship is often already in the city. Walk the quay and see the house.",
      },
      {
        title: "The reef",
        where: "Cairns or Airlie Beach",
        length: "Most of the port day",
        pace: "A boat ride, with time in the water if you want it",
        detail:
          "The reef is a boat ride from the pier. On a long day, that ride is the day.",
      },
      {
        title: "Milford, from the deck",
        where: "The scenic day in the fiords, weather permitting",
        length: "The ship’s routing",
        pace: "None — you stay aboard",
        detail:
          "There is often no landing. The walls and the waterfalls are the day. Hiking boots do not help on a morning that never leaves the ship.",
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
      { label: "Worth the time", text: "Watch the locks from the deck. In Cartagena, the walled city is the walk, and you can eat there. A long coach to a beach is a different plan." },
      { label: "Best for", text: "Travelers who want the transit itself, and who can fly home from a different coast on a full transit." },
      { label: "Also", text: "A partial transit goes into Gatun Lake and comes back out the same side. A full transit goes from one ocean to the other, and it takes longer." },
    ],
    outings: [
      { fits: "You, if you’d rather watch the locks than get off.", bring: "A hat and sun cover. The day is hot, and rain is ordinary." },
      { fits: "Walkers. The old streets are the day.", bring: "Comfortable shoes. The streets are stone." },
      { fits: "Anyone who wants the city, on a sailing that actually docks.", bring: "Confirm the dock before you plan the day." },
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
      { fits: "Anyone curious about the ice, from the boat or on a short walk.", bring: "A wind layer, a hat, and shoes that can take spray. July is not warm on the water." },
      { fits: "Whale watchers. The boat is small, and it moves.", bring: "Layers you can peel, and a dry bag if you are bringing a phone on deck." },
      { fits: "Families, and anyone who wants the train without a hard hike.", bring: "A light jacket for the summit, which is colder than the pier." },
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
      { fits: "Swimmers.", bring: "Reef-safe sunscreen already on, and a rash guard if you burn. The boat may not have shade." },
      { fits: "Anyone happy with a chair, the water, and lunch.", bring: "Cash for a chair upgrade if the included setup is a patch of sand." },
      { fits: "People who’d rather wander a town than sit on a beach.", bring: "Comfortable shoes for cobblestone streets. In Martinique, the bakery is on the stop." },
    ],
  },
  mediterranean: {
    detail: "/media/day-mediterranean.jpg",
    detailAlt: "Empty blue chairs on a terrace above a caldera harbor at dawn",
    facts: [
      { label: "Time in port", text: "Often a long day, sometimes a tender. The useful hours are early, before the alleys fill." },
      { label: "Worth the time", text: "The Acropolis is in Athens. The Acropolis Museum beside it holds the sculptures from the site. The Ancient Agora is nearby. The National Archaeological Museum holds the Mycenaean gold and the classical bronzes. Rome is a long ride from Civitavecchia. St. Peter’s is in Rome, and the Vatican Museums hold the Sistine Chapel ceiling. The Colosseum and the Forum are in the city too. Lunch can fit if the ship leaves later. Rome Cavalieri, a Waldorf Astoria hotel, is a stay in the city before or after the cruise. Long lunches are on the Amalfi coast." },
      { label: "Best for", text: "Travelers who want a different country at breakfast and will walk for it. Shoulder months beat August." },
      { label: "Also", text: "The Acropolis, or one town, is a full morning." },
    ],
    outings: [
      { fits: "Anyone up for the steps, for the view at the top.", bring: "Sun protection, water, and shoes with a grip. The marble is polished by crowds." },
      { fits: "Walkers who want the ruins or a museum, then lunch off the hill.", bring: "A hat and a bottle. The site is exposed, and the good cafes are after, not on the hill." },
      { fits: "Anyone willing to ride into the city, for the churches and the ruins.", bring: "Comfortable shoes. The drive from Civitavecchia is part of the day." },
      { fits: "Walkers, or anyone who’d rather sit down to a long lunch.", bring: "Cash still helps in the old towns." },
    ],
  },
  european: {
    detail: "/media/day-european.jpg",
    detailAlt: "Bicycles beside a misty canal and a stone bridge in an old European town",
    facts: [
      { label: "Time in port", text: "A city day uses most of the hours, but the pier is often an hour from the place you actually want." },
      { label: "Worth the time", text: "The belfry is in Bruges, and the menus have mussels steamed in white wine, onion, and celery, usually with fries. Paris is a long ride from Le Havre. The Louvre is in Paris. It holds the Mona Lisa and the Winged Victory of Samothrace. Notre-Dame and the Eiffel Tower are in the city too. Lunch can fit if the ship leaves later. Shangri-La Paris, looking toward the Eiffel Tower, is a stay in the city before or after the cruise. Westminster Abbey and the Tower of London are in London. The Savoy is a stay in the city. The Sagrada Família and the Gothic Quarter are in Barcelona. Cocina Hermanos Torres is a Michelin table in the city if you reserved it ahead, and Camp Nou is there when there is a match. Belém and Alfama are in Lisbon. Hotel Arts is a stay in Barcelona. The Four Seasons Hotel Ritz is a stay in Lisbon." },
      { label: "Best for", text: "Travelers who have a city they still want, or who would rather have one garden than three capitals." },
      { label: "Also", text: "Le Havre to Paris is a long ride for a short stop." },
    ],
    outings: [
      { fits: "Anyone who doesn’t mind the ride in, for a full day by the canal.", bring: "Layers. Canal weather changes, and the square is windier than the pier." },
      { fits: "People who’d take a cliff walk and lunch over a long bus ride.", bring: "A wind jacket." },
      { fits: "Anyone content with one palace, one hill, or one town on the water.", bring: "Good walking shoes. The Cádiz-to-Seville drive is longer than it looks on a map." },
    ],
  },
  hawaii: {
    detail: "/media/day-hawaii.jpg",
    detailAlt: "A sea turtle in clear shallows beside black volcanic sand",
    facts: [
      { label: "Time in port", text: "Inter-island ships often overnight. A sailing from San Diego, Los Angeles, or Vancouver spends more days just getting there." },
      { label: "Worth the time", text: "Stop on Oahu to visit the USS Arizona Memorial. After that, a plate lunch is an idea." },
      { label: "Best for", text: "People who want the islands, not a new port every morning. Match the excursion to the kind of Hawaii trip you booked." },
      { label: "Also", text: "The road to Hana takes a full day." },
    ],
    outings: [
      { fits: "Swimmers. The boat picks the calmer side.", bring: "Reef-safe sunscreen. Whales in winter are a bonus, not a promise." },
      { fits: "Anyone who wants the memorial, with the beach after.", bring: "Allow time for security screening." },
      { fits: "Drivers. The road takes the whole day.", bring: "The road is the outing, not a list of waterfalls." },
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
      { fits: "Beach people, especially in the morning.", bring: "Reef shoes if the walk in is rocky. The sand itself is soft." },
      { fits: "Anyone who’d rather take the ferry into town.", bring: "A ferry schedule. St. George’s is the quieter town." },
      { fits: "Walkers, and anyone who wants to see a cave.", bring: "A light layer for the caves. They are short and colder than the beach." },
    ],
  },
  "northern-europe": {
    detail: "/media/day-northern-europe.jpg",
    detailAlt: "A row of painted wooden wharf houses reflected in calm water",
    facts: [
      { label: "Time in port", text: "Fjord villages can be a tender of a few hours. Baltic capitals are longer city days." },
      { label: "Worth the time", text: "The Bryggen wharf is in Bergen, and the fish market serves a shrimp sandwich: cold peeled shrimp on buttered bread, with mayonnaise and lemon. In Copenhagen, a New Nordic menu is local seafood, vegetables, and foraged herbs, and those tables are booked before you sail. Amsterdam’s ocean ships dock at IJmuiden, not in the canals. The Rijksmuseum is in Amsterdam. It holds Rembrandt’s The Night Watch. The Anne Frank House is the rooms where she hid. Lunch can fit if the ship leaves later. The Waldorf Astoria Amsterdam is a stay in the city before or after the cruise. Nyhavn and Rosenborg are in Copenhagen. Hotel d’Angleterre is a stay in the city if you want the night. Gamla Stan is in Stockholm. The Vasa Museum holds the warship Vasa, raised from the harbor. Grand Hôtel looks across the water at the palace." },
      { label: "Best for", text: "Long summer light, small ports, and people who like weather to be part of the trip." },
      { label: "Also", text: "If the tender does not run, the town walk is the day." },
    ],
    outings: [
      { fits: "Anyone who likes a small village at the end of a fjord.", bring: "A real rain jacket." },
      { fits: "Walkers. The wharf is easy, and the ride up is there when the hill is clear.", bring: "Shoes that can take wet stone." },
      { fits: "People who like old walls, one square, and a coffee.", bring: "A layer. Baltic mornings stay cool even when the brochure looks like July." },
    ],
  },
  "canada-new-england": {
    detail: "/media/day-new-england.jpg",
    detailAlt: "A gravel carriage road through peak autumn color near a rocky coast",
    facts: [
      { label: "Time in port", text: "Small Maine ports are half days. Halifax and Québec, when the ship goes upriver, are city days." },
      { label: "Worth the time", text: "Stop in Halifax to see the Citadel. You can do it on foot. If the ship goes up to Québec, stop there for the view from the Château Frontenac. You can also stay in that hotel before or after the cruise. In Maine, stop for a lighthouse and a lobster roll: lobster meat in a split bun, with mayonnaise or melted butter. That is a full day." },
      { label: "Best for", text: "Fall color and small harbors, often without a flight. Peak leaves are a narrow window." },
      { label: "Also", text: "The harbor and the ramparts are the walk." },
    ],
    outings: [
      { fits: "Walkers who time the trip for the leaves.", bring: "A fleece. The maples are in color. The wind off the water is colder than it looks." },
      { fits: "Anyone happy to spend half a day on their feet.", bring: "Comfortable shoes. Québec is steeper than the waterfront in Halifax." },
      { fits: "Walkers who want the woods, or a shorter turn along the shore.", bring: "The carriage roads and the shore path are the stop." },
    ],
  },
  river: {
    detail: "/media/day-river.jpg",
    detailAlt: "Bicycles by a vineyard wall, with a river ship on the water below",
    facts: [
      { label: "Time in port", text: "You dock in town, often overnight. Mornings are the walking tour. Afternoons can be a bike or a tasting." },
      { label: "Worth the time", text: "Stop in Budapest to see the Parliament and have a bowl of goulash. In Vienna, Steirereck is the Michelin restaurant for Austrian cooking, so book it before the cruise. If the afternoon is short, have Sachertorte in a café instead. To see either city properly, stay before or after the cruise: Four Seasons Hotel Gresham Palace in Budapest, on the Danube, or Hotel Sacher in Vienna." },
      { label: "Best for", text: "Travelers who want the city at the gangway and are happy with one river, not a new ocean every week." },
      { label: "Also", text: "The included walk is already the morning." },
    ],
    outings: [
      { fits: "Anyone happy with the walk that’s already in the fare.", bring: "The ship’s listening set if the guide uses one, and shoes for uneven stone." },
      { fits: "Riders. The bikes go between the villages.", bring: "A light layer." },
      { fits: "People who like a tasting. The wine and the view are different stops.", bring: "Nothing formal." },
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
      { fits: "Anyone ready to pull on the ship’s gear, ride a Zodiac, and walk a little.", bring: "The boots and parka the ship issues. Keep the camera inside the jacket until you are ashore." },
      { fits: "Picture-takers. A naturalist sets the pace.", bring: "Shoes for lava." },
      { fits: "Anyone who wants to paddle, or get in the water.", bring: "The suit the ship provides." },
    ],
  },
  asia: {
    detail: "/media/day-asia.jpg",
    detailAlt: "The Singapore skyline across Marina Bay at night",
    facts: [
      { label: "Time in port", text: "The ship often docks outside the city. The drive can take as long as the visit." },
      { label: "Worth the time", text: "The Grand Palace is in Bangkok, about two hours from Laem Chabang. The Peninsula Tokyo is a stay in the city before or after the cruise. Gardens by the Bay is in Singapore. Raffles is a stay in the city. The Peak and the Star Ferry are in Hong Kong. The Peninsula is a stay there." },
      { label: "Best for", text: "A visit to the Grand Palace, or a district in Kyoto such as Fushimi Inari or Arashiyama." },
      { label: "Also", text: "One temple, or one district, is a full day once the drive is included." },
    ],
    outings: [
      { fits: "Sightseers. A palace, another temple, or a market on the water.", bring: "Water, socks for the palace floors, and time for the drive back to Laem Chabang." },
      { fits: "Anyone who’d rather see the rocks from a boat.", bring: "Sun cover." },
      { fits: "Train people. The old districts are a ride from the ship.", bring: "A transit card and walking shoes." },
    ],
  },
  "south-america": {
    detail: "/media/day-south-america.jpg",
    detailAlt: "An empty terrace looking across a bay toward a granite peak at morning",
    facts: [
      { label: "Time in port", text: "City days can be long. Cape Horn is often a scenic hour from the deck, with no landing." },
      { label: "Worth the time", text: "Christ the Redeemer and Sugarloaf are in Rio. A Michelin dinner is another idea when the ship stays late and you reserved it ahead. In Buenos Aires, the lunch in San Telmo is grilled beef, often a sirloin, cooked over coals." },
      { label: "Best for", text: "A longer voyage where the city days are the memory and the scenic days are the ship’s job." },
      { label: "Also", text: "One view is a full day in Rio. A show in Buenos Aires works when the ship stays late." },
    ],
    outings: [
      { fits: "Anyone who wants a look over the city. One viewpoint is enough.", bring: "Comfortable shoes for the viewpoint." },
      { fits: "Market browsers, or anyone out late when the ship stays overnight.", bring: "Comfortable shoes for San Telmo." },
      { fits: "Deck people. You see the cape from the ship.", bring: "A jacket for the rail, and a camera. Weather decides if you see it." },
    ],
  },
  world: {
    detail: "/media/day-world.jpg",
    detailAlt: "A round porthole framing open ocean from a wood-paneled cabin",
    facts: [
      { label: "Time in port", text: "A few overnights matter. Many stops give you only a short look from the pier. Sea days make up most of the voyage." },
      { label: "Worth the time", text: "If the ship stays the night, pick one building and one good meal. A two-hour stop by tender is not the day for a stadium or a big museum." },
      { label: "Best for", text: "Travelers who like the ship, and who do not need a new city every morning." },
      { label: "Also", text: "An overnight is the day to use the city. A short tender is a look at the port." },
    ],
    outings: [
      { fits: "Night owls, on a port where the ship stays for dinner.", bring: "A plan for the city the ship is in." },
      { fits: "Readers. Some days are just the ship.", bring: "A book for the day." },
      { fits: "Anyone who wants a piece of the long voyage, not the whole loop.", bring: "Segments are booked on their own, separate from the full circle." },
    ],
  },
  rail: {
    detail: "/media/day-rail.jpg",
    detailAlt: "A river canyon seen from a train roomette window",
    facts: [
      { label: "Time at a stop", text: "The train is the day. Fresh-air stops are minutes. A hike means a night off the train, in a town or a park." },
      { label: "Worth the time", text: "The canyon, or the coast, is why you took the train, and you see it from the window. A longer stop is a night off the train." },
      { label: "Best for", text: "The Northwest, the Rockies, or a Canadian route, in a roomette if the trip is overnight." },
      { label: "Also", text: "An overnight train is more comfortable in a roomette." },
    ],
    outings: [
      { fits: "Window people, and anyone who wants a roomette when the train runs overnight.", bring: "Layers. The glass car is colder than the room." },
      { fits: "Hikers, when the stop is long enough or you get off for a night.", bring: "The timetable shows how long each stop is." },
      { fits: "Anyone who likes one night in town before the flight home.", bring: "A walk and a table, then the flight home." },
    ],
  },
  "australia-new-zealand": {
    detail: "/media/day-australia-new-zealand.jpg",
    detailAlt: "A glacial lake and snow-dusted mountains on New Zealand’s South Island",
    facts: [
      { label: "Time in port", text: "Sydney and Auckland can be long city days. Reef ports need a full day. Milford is often a scenic sail, with no gangway." },
      { label: "Worth the time", text: "Stop in Sydney to see the Opera House. It sits next to where most ships dock. If the ship leaves later, have lunch, or a meat pie on the quay: minced beef in gravy, baked in a pastry case. To see more than the harbor, stay at the Park Hyatt Sydney, across from the Opera House, before the cruise or after you return. In Auckland, walk the harbor and have a grilled lamb chop, the usual lunch." },
      { label: "Best for", text: "Travelers who can spend October through April, Australia’s summer, in one place, and who will fly to Sydney or Auckland to start." },
      { label: "Also", text: "The reef and the city are different days." },
    ],
    outings: [
      { fits: "Walkers. The harbor is right there.", bring: "Comfortable shoes and a plan near the harbor." },
      { fits: "Anyone who wants a day on the water, out at the reef.", bring: "Sun cover. The boat ride is the day." },
      { fits: "Deck people. The fiord is the view from the ship.", bring: "A jacket for the rail. Weather decides whether the ship goes in." },
    ],
  },
};

