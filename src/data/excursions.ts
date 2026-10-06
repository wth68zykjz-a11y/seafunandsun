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
        title: "Panama City, only if you dock",
        where: "A listed stop, not the transit day",
        length: "The hours the ship is alongside",
        pace: "A drive, then a walk",
        detail:
          "The old quarter and the canal visitor areas are different stops. If the itinerary does not list a dock, you will not get off.",
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
          "Humpbacks are the usual show from late spring. Seasickness rules out a small boat more often than fitness does. Skip it if anyone in the cabin gets motion-sick.",
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
        pace: "You need to be comfortable in the water",
        detail:
          "House reefs and short boat snorkels are the water days. The plan should fit the least confident swimmer in the cabin, not the keenest.",
      },
      {
        title: "A beach with an actual chair",
        where: "Cozumel, Nassau, or a private-island style stop",
        length: "Most of the port day",
        pace: "Easy",
        detail:
          "Loungers, a swim, lunch, back to the ship. Skip this if the ship already has a beach club that is better.",
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
          "The cable car and the donkeys both have lines by late morning. The useful plan is the first tender and a short stay up top, not a six-hour photo chase. It is a poor fit if knees are a problem.",
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
      "Inter-island ships often stay overnight, so a Road to Hana day can work. A cruise that departs from the West Coast spends more of the week at sea. The excursion has to match which of those two cruises you booked.",
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
          "The view from the village is the excursion. Add a waterfall walk only if the path is dry and the group wants it. The ship’s scenic cruise in the fjord already did half the work.",
      },
      {
        title: "Bergen’s wharf, on foot",
        where: "Bryggen and the fish market",
        length: "3 hours",
        pace: "Easy walking on cobblestone streets",
        detail:
          "The old wharf, then up the funicular only if the cloud is above the hill. A harbor walk in the rain is still a good way to see Bergen.",
      },
      {
        title: "One Baltic old town",
        where: "Tallinn, Stockholm’s Gamla Stan, or Copenhagen",
        length: "Half day",
        pace: "Walking",
        detail:
          "Walk the old walls, stop in one square, and sit for coffee. A palace and a museum will not fit in the same morning.",
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
        title: "Kayak or a polar plunge, only if you mean it",
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
          "Lectures, the deck, nothing scheduled. A world cruise is the wrong product if the trip needs a port every morning.",
      },
      {
        title: "A segment, not the whole circle",
        where: "A 20- to 40-night slice of a longer voyage",
        length: "The sector you choose",
        pace: "Varies",
        detail:
          "A full world cruise is not required. A shorter sector can hold the cities that matter and leave out the ones that do not.",
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
        title: "The reef, only if the hours are real",
        where: "Cairns or Airlie Beach, when the day is long enough",
        length: "Most of the port day",
        pace: "A boat ride; swimming is optional",
        detail:
          "The reef is not at the pier. A mid-afternoon all-aboard does not leave time to get there and back. On a long day, a boat to the outer reef is the day. Snorkel only if everyone in the cabin wants the water.",
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
      { label: "Often a poor fit", text: "A seven-night Caribbean loop. A partial transit goes into Gatun Lake and comes back out the same side. A full transit goes from one ocean to the other, and it takes longer." },
    ],
    outings: [
      { fits: "Everyone on the ship. There is nothing to book.", bring: "A hat and sun cover. The day is hot, and rain is ordinary." },
      { fits: "A walking day in a walled city. Skip it if you wanted a beach stop.", bring: "Comfortable shoes. The streets are stone." },
      { fits: "Only a sailing that lists a Panama City dock.", bring: "Nothing extra. Confirm the dock before you plan a tour." },
    ],
  },
  alaskan: {
    detail: "/media/day-alaskan.jpg",
    detailAlt: "A train crossing a wooden trestle above a misty spruce valley",
    facts: [
      { label: "Time in port", text: "Most stops are four to eight hours. Glacier days can be the ship’s scenic sail, with no gangway at all." },
      { label: "Worth the time", text: "Stop in Juneau to visit the Mendenhall Glacier. You can eat grilled salmon, or a chowder made from it, or go out for a few hours and try to catch one. Stop in Skagway for the train up the White Pass." },
      { label: "Best for", text: "People who want wildlife and ice more than nightlife. A balcony is the better cabin here than a seat in a big theater." },
      { label: "Often a poor fit", text: "Gift-shop bus loops, and any “flightseeing plus six other stops” that spends the day in a van." },
    ],
    outings: [
      { fits: "Anyone who wants to hear the ice, including people who will not hike.", bring: "A wind layer, a hat, and shoes that can take spray. July is not warm on the water." },
      { fits: "Cabins where everyone can handle a small boat. Motion sickness rules this out more often than fitness does.", bring: "Layers you can peel, and a dry bag if you are bringing a phone on deck." },
      { fits: "The easy port day — families, knees that dislike trails, first-timers.", bring: "Almost nothing. A light jacket for the summit, which is colder than the pier." },
    ],
  },
  caribbean: {
    detail: "/media/day-caribbean.jpg",
    detailAlt: "A snorkel mask and fins on limestone beside clear reef water",
    facts: [
      { label: "Time in port", text: "Usually morning to late afternoon. Private-island days are the ship’s own beach, not a town." },
      { label: "Worth the time", text: "Stop in Old San Juan and walk up to El Morro and the cathedral. In Martinique, stop at a bakery instead of a jewelry shop." },
      { label: "Best for", text: "A first cruise, a family, or anyone who wants short flights from the East Coast and a port every morning." },
      { label: "Often a poor fit", text: "Stacking a zip line on a catamaran in one day, and any beach club that is worse than the one the ship already owns." },
    ],
    outings: [
      { fits: "Swimmers, planned for the least confident person in the cabin, not the keenest.", bring: "Reef-safe sunscreen already on, and a rash guard if you burn. The boat may not have shade." },
      { fits: "People who want one thing: water, a chair, lunch, back to the ship.", bring: "Cash for a chair upgrade if the included setup is a patch of sand." },
      { fits: "Travelers who have done the beach and want a town that is not a jewelry stop.", bring: "Bring comfortable shoes for cobblestone streets. In Martinique, the bakery is on the stop." },
    ],
  },
  mediterranean: {
    detail: "/media/day-mediterranean.jpg",
    detailAlt: "Empty blue chairs on a terrace above a caldera harbor at dawn",
    facts: [
      { label: "Time in port", text: "Often a long day, sometimes a tender. The useful hours are early, before the alleys fill." },
      { label: "Worth the time", text: "The Acropolis is in Athens. The Acropolis Museum beside it holds the sculptures from the site. The Ancient Agora is nearby. The National Archaeological Museum holds the Mycenaean gold and the classical bronzes. Rome is a long ride from Civitavecchia. St. Peter’s is in Rome, and the Vatican Museums hold the Sistine Chapel ceiling. The Colosseum and the Forum are in the city too. Lunch can fit if the ship leaves later. Rome Cavalieri, a Waldorf Astoria hotel, is a stay in the city before or after the cruise. Long lunches are on the Amalfi coast." },
      { label: "Best for", text: "Travelers who want a different country at breakfast and will walk for it. Shoulder months beat August." },
      { label: "Often a poor fit", text: "Three-ruin coach loops, and any Santorini plan that starts after the other ships have tendered." },
    ],
    outings: [
      { fits: "This suits people who can manage the steps and are happy with a short stay at the top. Tell us if anyone has trouble with knees.", bring: "Sun protection, water, and shoes with a grip. The marble is polished by crowds." },
      { fits: "Ideas include the Acropolis, the museum beside it, the Ancient Agora, and lunch in Plaka.", bring: "A hat and a bottle. The site is exposed, and the good cafes are after, not on the hill." },
      { fits: "St. Peter’s is in Rome. The Vatican Museums hold the Sistine Chapel ceiling. The Colosseum and the Forum are in the city. The Borghese Gallery holds Bernini’s sculptures and Caravaggio’s paintings, and it needs a timed ticket booked ahead.", bring: "Comfortable shoes. The drive from Civitavecchia is part of the day." },
      { fits: "A walking day in Kotor, or a seated lunch in Amalfi if the ship’s hours are honest.", bring: "All-aboard decides whether the day is a walk or a long lunch. Cash still helps in the old towns." },
    ],
  },
  european: {
    detail: "/media/day-european.jpg",
    detailAlt: "Bicycles beside a misty canal and a stone bridge in an old European town",
    facts: [
      { label: "Time in port", text: "A city day uses most of the hours, but the pier is often an hour from the place you actually want." },
      { label: "Worth the time", text: "The belfry is in Bruges, and the menus have mussels steamed in white wine, onion, and celery, usually with fries. Paris is a long ride from Le Havre. The Louvre is in Paris. It holds the Mona Lisa and the Winged Victory of Samothrace. Notre-Dame and the Eiffel Tower are in the city too. Lunch can fit if the ship leaves later. Shangri-La Paris, looking toward the Eiffel Tower, is a stay in the city before or after the cruise. Westminster Abbey and the Tower of London are in London. The Savoy is a stay in the city. The Sagrada Família and the Gothic Quarter are in Barcelona. Cocina Hermanos Torres is a Michelin table in the city if you reserved it ahead, and Camp Nou is there when there is a match. Belém and Alfama are in Lisbon. Hotel Arts is a stay in Barcelona. The Four Seasons Hotel Ritz is a stay in Lisbon." },
      { label: "Best for", text: "Travelers who have a city they still want, or who would rather have one garden than three capitals." },
      { label: "Often a poor fit", text: "Paris from a short stop in Le Havre, and any “two cities in one day” that is mostly highway." },
    ],
    outings: [
      { fits: "A full, easy city day. The transfer eats the extra stop you were hoping to add.", bring: "Layers. Canal weather changes, and the square is windier than the pier." },
      { fits: "People who want France that is not a Paris bus. The cliff path is optional.", bring: "A wind jacket. The town lunch works even if you skip the cliff." },
      { fits: "A focused morning at the Alcázar, one Lisbon hill, or a Riviera town. This is not a coach tour of every sight.", bring: "Good walking shoes. The Cádiz-to-Seville drive is longer than it looks on a map." },
    ],
  },
  hawaii: {
    detail: "/media/day-hawaii.jpg",
    detailAlt: "A sea turtle in clear shallows beside black volcanic sand",
    facts: [
      { label: "Time in port", text: "Inter-island ships often overnight. A West Coast sailing spends more days just getting there." },
      { label: "Worth the time", text: "Stop on Oahu to visit the USS Arizona Memorial. After that, a plate lunch is an idea." },
      { label: "Best for", text: "People who want the islands, not a new port every morning. Match the excursion to the kind of Hawaii trip you booked." },
      { label: "Often a poor fit", text: "Hana on a dawn-to-dusk stop, and stacking a snorkel on a kayak in the same bay." },
    ],
    outings: [
      { fits: "Comfortable swimmers. The calm side of the island depends on that day’s wind.", bring: "Reef-safe sunscreen. Whales in winter are a bonus, not a promise." },
      { fits: "Ideas include the memorial and the beach. The memorial has security screening, so go early if you want both.", bring: "Allow time for security screening. You will be standing." },
      { fits: "Only a sailing that stays the night in Maui. A dawn-to-dusk stop is too short.", bring: "Patience in a car. The road is the excursion, not a checklist of waterfalls." },
    ],
  },
  bermuda: {
    detail: "/media/day-bermuda.jpg",
    detailAlt: "Pink sand curving toward a pastel cottage and clear water",
    facts: [
      { label: "Time in port", text: "Ships usually stay more than a day, so you do not have to see the island between breakfast and all-aboard." },
      { label: "Worth the time", text: "Stop in St. George’s to see St. Peter’s Church. The town is quiet enough that you do not need a timed tour. In Hamilton, the fish sandwich on raisin bread is an idea." },
      { label: "Best for", text: "A short East Coast sailing that still feels like a real island, not a dash through three countries." },
      { label: "Often a poor fit", text: "Six-stop island tours, and Horseshoe Bay at the hour every ship arrives." },
    ],
    outings: [
      { fits: "The morning beach, before it becomes a ship party.", bring: "Reef shoes if you are tender-footed. The sand is soft; the walk in can be rocky." },
      { fits: "People who are done with another beach and want pastel streets and lunch.", bring: "A ferry schedule. St. George’s is the quieter town." },
      { fits: "Ideas include the flat green trail and the cool caves.", bring: "A light layer for the caves. They are short and colder than the beach." },
    ],
  },
  "northern-europe": {
    detail: "/media/day-northern-europe.jpg",
    detailAlt: "A row of painted wooden wharf houses reflected in calm water",
    facts: [
      { label: "Time in port", text: "Fjord villages can be a tender of a few hours. Baltic capitals are longer city days." },
      { label: "Worth the time", text: "The Bryggen wharf is in Bergen, and the fish market serves a shrimp sandwich: cold peeled shrimp on buttered bread, with mayonnaise and lemon. In Copenhagen, a New Nordic menu is local seafood, vegetables, and foraged herbs, and those tables are booked before you sail. Amsterdam’s ocean ships dock at IJmuiden, not in the canals. The Rijksmuseum is in Amsterdam. It holds Rembrandt’s The Night Watch. The Anne Frank House is the rooms where she hid. Lunch can fit if the ship leaves later. The Waldorf Astoria Amsterdam is a stay in the city before or after the cruise. Nyhavn and Rosenborg are in Copenhagen. Hotel d’Angleterre is a stay in the city if you want the night. Gamla Stan is in Stockholm. The Vasa Museum holds the warship Vasa, raised from the harbor. Grand Hôtel looks across the water at the palace." },
      { label: "Best for", text: "Long summer light, small ports, and people who like weather to be part of the trip." },
      { label: "Often a poor fit", text: "A scenic boat with no backup plan. If the tender cancels, you want a town walk already in mind." },
    ],
    outings: [
      { fits: "The view from the village. Add a walk only if the path is dry and the group wants it.", bring: "A real rain jacket. The ship’s fjord sail already did half the day’s work." },
      { fits: "Spend an easy hour on Bryggen’s cobblestone streets, rain or not. Take the funicular only if the cloud is above the hill.", bring: "Wear shoes that can take wet stone. A harbor walk in the rain is still a good way to see Bergen." },
      { fits: "Walk the old walls, sit in one square, and have coffee. A palace and a museum will not fit in the same morning.", bring: "A layer. Baltic mornings stay cool even when the brochure looks like July." },
    ],
  },
  "canada-new-england": {
    detail: "/media/day-new-england.jpg",
    detailAlt: "A gravel carriage road through peak autumn color near a rocky coast",
    facts: [
      { label: "Time in port", text: "Small Maine ports are half days. Halifax and Québec, when the ship goes upriver, are city days." },
      { label: "Worth the time", text: "Stop in Halifax to see the Citadel. You can do it on foot. If the ship goes up to Québec, stop there for the view from the Château Frontenac. You can also stay in that hotel before or after the cruise. In Maine, stop for a lighthouse and a lobster roll: lobster meat in a split bun, with mayonnaise or melted butter. That is a full day." },
      { label: "Best for", text: "Fall color and small harbors, often without a flight. Peak leaves are a narrow window." },
      { label: "Often a poor fit", text: "A bus to a prettier brochure photo, and any “best of Acadia” that is mostly van time." },
    ],
    outings: [
      { fits: "An easy path near the pier in late September or early October.", bring: "A fleece. The maples are in color. The wind off the water is colder than it looks." },
      { fits: "A half day on your own feet — citadel view or the walls above the river.", bring: "Comfortable shoes. Québec is steeper than the waterfront in Halifax." },
      { fits: "Carriage roads if you want gravel and trees, or the town shore path if you want it shorter.", bring: "Nothing fancy. Skip the outlet mall. It is not why the ship stopped." },
    ],
  },
  river: {
    detail: "/media/day-river.jpg",
    detailAlt: "Bicycles by a vineyard wall, with a river ship on the water below",
    facts: [
      { label: "Time in port", text: "You dock in town, often overnight. Mornings are the walking tour. Afternoons can be a bike or a tasting." },
      { label: "Worth the time", text: "Stop in Budapest to see the Parliament and have a bowl of goulash. In Vienna, Steirereck is the Michelin restaurant for Austrian cooking, so book it before the cruise. If the afternoon is short, have Sachertorte in a café instead. To see either city properly, stay before or after the cruise: Four Seasons Hotel Gresham Palace in Budapest, on the Danube, or Hotel Sacher in Vienna." },
      { label: "Best for", text: "Travelers who want the city at the gangway and are happy with one river, not a new ocean every week." },
      { label: "Often a poor fit", text: "A paid tour that repeats the walk already in the fare, and a 90-minute coach for one glass of wine." },
    ],
    outings: [
      { fits: "This is the morning walk the fare already includes. Sometimes that walk is enough.", bring: "Bring the ship’s listening set if the guide uses one, and wear shoes for uneven stone." },
      { fits: "The villages between the capitals. The shorter loop is the one if anyone is unsure.", bring: "A light layer. The point is the stops, not the mileage." },
      { fits: "A tasting on the route the ship is already sailing. Say whether you want the wine or the view. They are different stops.", bring: "Nothing formal. Skip it if the coach ride is longer than the tasting." },
    ],
  },
  expedition: {
    detail: "/media/day-expedition.jpg",
    detailAlt: "Expedition boots and a red parka on a zodiac, with sea ice beyond",
    facts: [
      { label: "Time in port", text: "There often is no port. You may spend an hour or two ashore after a Zodiac ride, or the landing may be called off." },
      { label: "Worth the time", text: "The day may be gear, a Zodiac, a short walk, and pictures. A kayak or a canoe is separate, and only if the water allows." },
      { label: "Best for", text: "People who will accept a change of plan. The guides run the day." },
      { label: "Often a poor fit", text: "A fixed schedule, or a ship that sells a bigger theater instead of time off the ship." },
    ],
    outings: [
      { fits: "You put on the ship’s boots and parka, ride a Zodiac, and walk a short path. The landing can be canceled.", bring: "The boots and parka the ship issues. Keep the camera inside the jacket until you are ashore." },
      { fits: "A panga or a dry landing with a naturalist. You follow the trail and take pictures from the marked line.", bring: "Shoes for lava, and patience with the park rules." },
      { fits: "A kayak, a canoe, or a plunge, only if you ask and the water is calm.", bring: "The suit the ship provides. Skip it if you came for the landing." },
    ],
  },
  asia: {
    detail: "/media/day-asia.jpg",
    detailAlt: "The Singapore skyline across Marina Bay at night",
    facts: [
      { label: "Time in port", text: "The ship often docks outside the city. The drive can take as long as the visit." },
      { label: "Worth the time", text: "The Grand Palace is in Bangkok, about two hours from Laem Chabang. The Peninsula Tokyo is a stay in the city before or after the cruise. Gardens by the Bay is in Singapore. Raffles is a stay in the city. The Peak and the Star Ferry are in Hong Kong. The Peninsula is a stay there." },
      { label: "Best for", text: "A visit to the Grand Palace, or a district in Kyoto such as Fushimi Inari or Arashiyama." },
      { label: "Often a poor fit", text: "A bus that promises three temples and a market. Ha Long Bay only counts when the ship is already in that bay." },
    ],
    outings: [
      { fits: "Visit the Grand Palace, another temple, or a floating market. The drive back to Laem Chabang is part of the day.", bring: "Water, socks for the palace floors, and time for the drive back to Laem Chabang." },
      { fits: "Only when the itinerary is already in that scenery. Easy if you can sit on a boat.", bring: "Sun cover and a tolerance for some chop. A distant port is not the bay." },
      { fits: "Fushimi Inari and Arashiyama are both in Kyoto. The train from Osaka or Kobe is part of the day.", bring: "A transit card and walking shoes." },
    ],
  },
  "south-america": {
    detail: "/media/day-south-america.jpg",
    detailAlt: "An empty terrace looking across a bay toward a granite peak at morning",
    facts: [
      { label: "Time in port", text: "City days can be long. Cape Horn is often a scenic hour from the deck, with no landing." },
      { label: "Worth the time", text: "Christ the Redeemer and Sugarloaf are in Rio. A Michelin dinner is another idea when the ship stays late and you reserved it ahead. In Buenos Aires, the lunch in San Telmo is grilled beef, often a sirloin, cooked over coals." },
      { label: "Best for", text: "A longer voyage where the city days are the memory and the scenic days are the ship’s job." },
      { label: "Often a poor fit", text: "Both Rio statues in one day, and a tango show that ends after the gangway closes." },
    ],
    outings: [
      { fits: "Pick one view. Leave the other, and the beach neighborhood, for time you actually have.", bring: "Comfortable shoes for the viewpoint." },
      { fits: "A market afternoon is the simple plan. A show only if all-aboard is honestly late.", bring: "Comfortable shoes for San Telmo, and a backup that does not depend on the evening." },
      { fits: "Everyone. You stay aboard. Hiking boots will not get you onto the cape.", bring: "A jacket for the rail, and a camera. Weather decides if you see it." },
    ],
  },
  world: {
    detail: "/media/day-world.jpg",
    detailAlt: "A round porthole framing open ocean from a wood-paneled cabin",
    facts: [
      { label: "Time in port", text: "A few overnights matter. Many stops give you only a short look from the pier. Sea days make up most of the voyage." },
      { label: "Worth the time", text: "If the ship stays the night, pick one building and one good meal. A two-hour stop by tender is not the day for a stadium or a big museum." },
      { label: "Best for", text: "Travelers who like the ship, and who do not need a new city every morning." },
      { label: "Often a poor fit", text: "Treating a two-hour tender as a tour of a country. The overnights are the days that matter. The short stops are optional." },
    ],
    outings: [
      { fits: "The port where the ship stays past dinner: one neighborhood, a table, a late return.", bring: "A plan for that one city, not a list of five. A guide is worth booking here." },
      { fits: "People who can enjoy a lecture, a deck, and nothing scheduled.", bring: "Books, and an honest answer. If you need a port every morning, this is the wrong product." },
      { fits: "A 20- to 40-night slice that holds the cities you want and leaves out the ones you do not.", bring: "Flexibility on the cabin. Segments sell differently than the full circle." },
    ],
  },
  rail: {
    detail: "/media/day-rail.jpg",
    detailAlt: "A river canyon seen from a train roomette window",
    facts: [
      { label: "Time at a stop", text: "The train is the day. Fresh-air stops are minutes. A hike means a night off the train, in a town or a park." },
      { label: "Worth the time", text: "The canyon, or the coast, is why you took the train, and you see it from the window. The stops are too short for a cathedral or a real lunch." },
      { label: "Best for", text: "The Northwest, the Rockies, or a Canadian route, in a roomette if the trip is overnight." },
      { label: "Often a poor fit", text: "A coach seat as a bed, and a same-day flight the afternoon you step off a two-night train." },
    ],
    outings: [
      { fits: "Daylight on the Empire Builder or the Zephyr, with a roomette so the lounge is a choice.", bring: "Layers. The glass car is colder than the room, and the scenery is the whole point." },
      { fits: "A route that actually pauses, or a night off the train if the point is a hike.", bring: "Do not pack for a national park on a ten-minute stop. The timetable shows which kind of stop it is." },
      { fits: "One hotel night in Chicago, Seattle, San Francisco, Vancouver, or Toronto before you fly.", bring: "Nothing heroic. A walk, a table, then home. That night belongs in the same plan as the rail." },
    ],
  },
  "australia-new-zealand": {
    detail: "/media/day-australia-new-zealand.jpg",
    detailAlt: "A glacial lake and snow-dusted mountains on New Zealand’s South Island",
    facts: [
      { label: "Time in port", text: "Sydney and Auckland can be long city days. Reef ports need a full day. Milford is often a scenic sail, with no gangway." },
      { label: "Worth the time", text: "Stop in Sydney to see the Opera House. It sits next to where most ships dock. If the ship leaves later, have lunch, or a meat pie on the quay: minced beef in gravy, baked in a pastry case. To see more than the harbor, stay at the Park Hyatt Sydney, across from the Opera House, before the cruise or after you return. In Auckland, walk the harbor and have a grilled lamb chop, the usual lunch." },
      { label: "Best for", text: "Travelers who can spend October through April, Australia’s summer, in one place, and who will fly to Sydney or Auckland to start." },
      { label: "Often a poor fit", text: "A reef and a capital in one day, and any Blue Mountains loop that spends the Sydney day on a highway." },
    ],
    outings: [
      { fits: "A half day on the quay. The ship is often already in the city.", bring: "Comfortable shoes and a plan that stops at the harbor. The suburbs can wait." },
      { fits: "Only a day long enough to reach the outer reef and get back. Swimming is optional.", bring: "Sun cover, and a clear answer about who wants to be in the water. The boat ride is the day either way." },
      { fits: "Everyone. You stay aboard. Hiking boots will not get you onto the sound if the ship does not land.", bring: "A jacket for the rail. Weather decides whether the ship goes in." },
    ],
  },
};

