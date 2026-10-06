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
  "This is how a day usually goes in the ports ships actually call. You can add an excursion. It is not in the fare unless the line includes it. Who runs it, how long it takes, and what it costs depend on the ship and the date.";

export const shores: Record<string, DestinationShore> = {
  alaskan: {
    photo: "/media/ex-alaskan.jpg",
    photoAlt: "A small boat near a whale in a cold Alaskan fjord",
    intro:
      "Alaska days split in two. The ship does the glaciers. The shore day is the wildlife or the railroad. Most calls last four to eight hours. The useful one matches the month: bears later, ice earlier. A bus to a gift shop is not one of them.",
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
          "Humpbacks are the usual show from late spring. Seasickness matters more than fitness. A small boat is a poor plan if anyone in the cabin gets motion-sick.",
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
      "Caribbean calls are short, and the beach is close. One plan is enough: a reef, a shaded beach, or a town. A zip line and a catamaran on the same day only works if the ship stays overnight.",
    excursions: [
      {
        title: "The reef, not the pool deck",
        where: "Cozumel, Grand Cayman, or a western Caribbean call",
        length: "2 to 3 hours",
        pace: "You need to be comfortable in the water",
        detail:
          "House reefs and short boat snorkels are the days people remember. The plan should fit the least confident swimmer in the cabin, not the keenest.",
      },
      {
        title: "A beach with an actual chair",
        where: "Cozumel, Nassau, or a private-island style call",
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
        title: "Acropolis, then Plaka slowly",
        where: "Athens, from Piraeus",
        length: "Half day",
        pace: "Uneven stone, real walking",
        detail:
          "The Acropolis is the visit. The rest of the city can wait for another trip. A guide who finishes in Plaka for lunch is a better day than a bus loop of three ruins.",
      },
      {
        title: "Kotor’s walls, or an Amalfi table",
        where: "Kotor or the Amalfi coast, when the ship calls",
        length: "2 to 4 hours",
        pace: "Stairs in Kotor; a car and a table in Amalfi",
        detail:
          "Kotor is a walk, not a museum. Amalfi is a long lunch only when the ship’s time in port is long enough. All-aboard decides which of those days is real.",
      },
    ],
  },
  european: {
    photo: "/media/ex-european.jpg",
    photoAlt: "A misty canal, a stone bridge, and bicycles along the quay",
    intro:
      "A European port day is a city day with a pier attached. Three capitals in one call is too many. If you have already been somewhere, the hours go to the place that is new.",
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
          "This is the France day that is not Paris. Paris from Le Havre is a long bus, and it fits only when the ship stays late enough.",
      },
      {
        title: "One garden, not the whole city",
        where: "Seville’s Alcázar, Lisbon’s hills, or a Riviera town",
        length: "4 hours",
        pace: "Walking, some hills",
        detail:
          "Alcázar in the morning, or a Lisbon neighborhood and a mirador, beats a “best of” coach. A call at Seville via Cádiz includes a longer drive than the map suggests.",
      },
    ],
  },
  hawaii: {
    photo: "/media/ex-hawaii.jpg",
    photoAlt: "Black lava rock, turquoise water, and an empty canoe on a Hawaiian beach",
    intro:
      "Inter-island ships often stay overnight, which is why a Road to Hana day can work. A sailing from the West Coast spends more of the week at sea. The excursion has to match which of those two trips you booked.",
    excursions: [
      {
        title: "Turtles in the water",
        where: "A sheltered bay on Maui, Kauai, or the Big Island",
        length: "2 to 3 hours",
        pace: "Comfortable swimmer",
        detail:
          "Snorkel or a sit-on kayak, not both. Winter whale season is a bonus from the boat, not a guarantee. The calm side of the island depends on that day’s wind.",
      },
      {
        title: "Pearl Harbor in the morning",
        where: "Oahu",
        length: "Half day",
        pace: "Easy, some standing",
        detail:
          "Go early, then leave the afternoon for a beach. A full-day circle of Oahu plus the memorial is how people miss the ship or miss the point.",
      },
      {
        title: "Hana only on an overnight",
        where: "Maui’s north shore road",
        length: "Full day",
        pace: "Mostly riding, some short walks",
        detail:
          "The road is the excursion. It belongs on a sailing that overnights in Maui, not on a dawn-to-dusk call.",
      },
    ],
  },
  bermuda: {
    photo: "/media/ex-bermuda.jpg",
    photoAlt: "A curve of pink sand and clear water toward pastel houses",
    intro:
      "Bermuda sailings usually stay more than a day, so the island does not have to be done at a sprint. Pink sand, the town, and one activity is a full plan. Horseshoe Bay in the middle of a ship day is crowded.",
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
          "The old wharf, then up the funicular only if the cloud is above the hill. A harbor walk in the rain is still the right use of Bergen.",
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
        where: "A Maine or Nova Scotia call",
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
          "The fare already includes this morning’s walk. On some calls that walk is the day. On others it is only a look at a square.",
      },
      {
        title: "Bikes in the Wachau or along the Rhine",
        where: "A vineyard day between the capitals",
        length: "Half day",
        pace: "Moderate, mostly flat",
        detail:
          "E-bikes change who can do this. The point is the villages between the famous cities, not the mileage. The shorter loop is the right one if anyone in the cabin is unsure.",
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
      "On an expedition ship the excursion is the landing or the Zodiac ride, run by the ship’s staff. Weather and wildlife can rewrite the day. The ship is chosen for the expedition team and for how active you want to be.",
    excursions: [
      {
        title: "A landing, if the ice allows",
        where: "Antarctic peninsula or a sub-Antarctic island",
        length: "An hour or two ashore",
        pace: "Wet boots, short walk",
        detail:
          "You stand with the colony at a set distance. There is no schedule you can hold the ship to. Boots and a real parka matter more than a camera lens.",
      },
      {
        title: "Galápagos with the naturalist",
        where: "A dry landing or a panga ride",
        length: "Half day",
        pace: "Uneven lava, some steps",
        detail:
          "The naturalist matters more than the size of the ship. The useful comparison is how much time is on the islands versus how much is on the ship. A bigger ship is not a better Galápagos day.",
      },
      {
        title: "Kayak or a polar plunge, only if you mean it",
        where: "Offered on some Arctic and Antarctic ships",
        length: "An hour",
        pace: "Active, cold",
        detail:
          "Optional, limited spaces, and not a personality test. It belongs on the plan only when someone asks for it. A landing day does not need it.",
      },
    ],
  },
  asia: {
    photo: "/media/ex-asia.jpg",
    photoAlt: "Lantern light on a calm harbor with limestone karsts beyond",
    intro:
      "The pier is often an hour from the place you came to see. The heat shortens the day. See one site, eat nearby, and go back.",
    excursions: [
      {
        title: "The Grand Palace, then lunch",
        where: "Bangkok. Most ships dock at Laem Chabang, about two hours away.",
        length: "Half day, including the drive",
        pace: "Walking in the heat. Shoes come off in the palace grounds.",
        detail:
          "Arrive at opening. See the palace and leave. A noodle lunch nearby is the right second stop. A floating market on the same morning turns the day into traffic.",
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
          "Kyoto is a train, not a stroll from the ship. One district is the day: Fushimi Inari or Arashiyama, not both, unless the ship overnights.",
      },
    ],
  },
  "south-america": {
    photo: "/media/ex-south-america.jpg",
    photoAlt: "A quiet South American waterfront and green hills at sunrise",
    intro:
      "A South American call is either a large city or a scenic day the ship already provides, such as Cape Horn. A city day needs one focus. A scenic day needs a window, not a bus.",
    excursions: [
      {
        title: "Rio with one view",
        where: "Sugarloaf or Corcovado, not both",
        length: "Half day",
        pace: "Crowds and some standing",
        detail:
          "Pick the view you actually want and leave time for the beach neighborhood if the ship is in port long enough. Doing both statues is how the day becomes traffic.",
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
    photoAlt: "An empty teak deck and lounge chairs facing an open-ocean dusk",
    intro:
      "A world cruise is mostly sea days, with a few ports long enough to use. The useful stop is often an overnight in a city, not a three-hour coach. The overnights are the ones to plan. A short call can be skipped.",
    excursions: [
      {
        title: "Use the overnight, ignore the glance",
        where: "A port where the ship stays past dinner",
        length: "A full day and an evening",
        pace: "Your choice",
        detail:
          "A guide is worth booking on an overnight: one neighborhood, a table, a late return. A two-hour call in a tender port is not the same kind of day.",
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
      "On a rail trip the train is the day. A dome car, a stop for fresh air, or a roomette instead of a coach seat is the choice that matters. A city night is added only where the connection needs it.",
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
        where: "Glacier, a Rockies town, or a Canadian park call",
        length: "A few hours, sometimes overnight",
        pace: "Easy walking",
        detail:
          "Some routes only pause. A real hike needs a night off the train. A ten-minute stop is not a national park.",
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
      "An Australia or New Zealand day is a city you can walk, a reef that needs real hours, or a fiord the ship already sails. A reef and a capital do not fit in the same call. One of them is the day.",
    excursions: [
      {
        title: "Sydney, from the harbor",
        where: "Circular Quay and the Opera House",
        length: "Half day on foot",
        pace: "Easy, some hills if you leave the water",
        detail:
          "The ship is often already in the city. Walk the quay, see the house, and stop. A coach tour of Bondi plus the Blue Mountains plus the zoo is how the day becomes traffic.",
      },
      {
        title: "The reef, only if the hours are real",
        where: "Cairns or Airlie Beach, when the call is long enough",
        length: "Most of the port day",
        pace: "A boat ride; swimming is optional",
        detail:
          "The reef is not at the pier. A mid-afternoon all-aboard does not leave time to get there and back. On a long call, a boat to the outer reef is the day. Snorkel only if everyone in the cabin wants the water.",
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
  alaskan: {
    detail: "/media/day-alaskan.jpg",
    detailAlt: "A train crossing a wooden trestle above a misty spruce valley",
    facts: [
      { label: "Time in port", text: "Most calls are four to eight hours. Glacier days can be the ship’s scenic sail, with no gangway at all." },
      { label: "Worth the time", text: "Stop in Juneau to visit the Mendenhall Glacier. You can eat salmon in town, or go out for a few hours and try to catch one. Stop in Skagway for the train up the White Pass. Neither port has a Michelin restaurant." },
      { label: "Best for", text: "People who want wildlife and ice more than nightlife. A balcony matters here more than a big ship theater." },
      { label: "Often a poor fit", text: "Gift-shop bus loops, and any “flightseeing plus six other stops” that spends the day in a van." },
    ],
    outings: [
      { fits: "Anyone who wants to hear the ice, including people who will not hike.", bring: "A wind layer, a hat, and shoes that can take spray. July is not warm on the water." },
      { fits: "Cabins where everyone can handle a small boat. Motion sickness matters more than fitness.", bring: "Layers you can peel, and a dry bag if you are bringing a phone on deck." },
      { fits: "The easy port day — families, knees that dislike trails, first-timers.", bring: "Almost nothing. A light jacket for the summit, which is colder than the pier." },
    ],
  },
  caribbean: {
    detail: "/media/day-caribbean.jpg",
    detailAlt: "A snorkel mask and fins on limestone beside clear reef water",
    facts: [
      { label: "Time in port", text: "Usually morning to late afternoon. Private-island calls are the ship’s own beach, not a town." },
      { label: "Worth the time", text: "Old San Juan is a walk up to El Morro and the cathedral. Martinique is better spent at a bakery than in a jewelry shop. Michelin does not cover these islands, so eat what the port actually cooks." },
      { label: "Best for", text: "A first cruise, a family, or anyone who wants short flights from the East Coast and a port every morning." },
      { label: "Often a poor fit", text: "Stacking a zip line on a catamaran in one call, and any beach club that is worse than the one the ship already owns." },
    ],
    outings: [
      { fits: "Swimmers, planned for the least confident person in the cabin, not the keenest.", bring: "Reef-safe sunscreen already on, and a rash guard if you burn. The boat may not have shade." },
      { fits: "People who want one thing: water, a chair, lunch, back to the ship.", bring: "Cash for a chair upgrade if the included setup is a patch of sand." },
      { fits: "Travelers who have done the beach and want a town that is not a jewelry stop.", bring: "Bring comfortable shoes for cobblestone streets. In Martinique, the bakery is the reason for the stop." },
    ],
  },
  mediterranean: {
    detail: "/media/day-mediterranean.jpg",
    detailAlt: "Empty blue chairs on a terrace above a caldera harbor at dawn",
    facts: [
      { label: "Time in port", text: "Often a long day, sometimes a tender. The useful hours are early, before the alleys fill." },
      { label: "Worth the time", text: "Athens means the Acropolis, and then you are done. Rome is a long ride from Civitavecchia, so a Michelin lunch only works if the ship stays late and the table was booked before you left home. On the Amalfi coast, a long lunch is the whole point." },
      { label: "Best for", text: "Travelers who want a different country at breakfast and will walk for it. Shoulder months beat August." },
      { label: "Often a poor fit", text: "Three-ruin coach loops, and any Santorini plan that starts after the other ships have tendered." },
    ],
    outings: [
      { fits: "This suits people who can manage the steps and are happy with a short stay at the top. Tell us if anyone has trouble with knees.", bring: "Sun protection, water, and shoes with a grip. The marble is polished by crowds." },
      { fits: "Spend half the day at the Acropolis, then have lunch in Plaka. This is not a tour of the whole city.", bring: "A hat and a bottle. The site is exposed, and the good cafes are after, not on the hill." },
      { fits: "A walking day in Kotor, or a seated lunch in Amalfi if the ship’s hours are honest.", bring: "All-aboard decides whether the day is a walk or a long lunch. Cash still helps in the old towns." },
    ],
  },
  european: {
    detail: "/media/day-european.jpg",
    detailAlt: "Bicycles beside a misty canal and a stone bridge in an old European town",
    facts: [
      { label: "Time in port", text: "City calls run most of the day, but the pier is often an hour from the place you actually want." },
      { label: "Worth the time", text: "Bruges is the belfry, then mussels. If you are in Barcelona and want a serious Catalan meal, Cocina Hermanos Torres has Michelin stars, but reserve it before the cruise. Camp Nou is only worth it if there is a match while the ship is in port." },
      { label: "Best for", text: "Travelers who have a city they still want, or who would rather have one garden than three capitals." },
      { label: "Often a poor fit", text: "Paris from a short Le Havre call, and any “two cities in one day” that is mostly highway." },
    ],
    outings: [
      { fits: "A full, easy city day. The transfer eats the extra stop you were hoping to add.", bring: "Layers. Canal weather changes, and the square is windier than the pier." },
      { fits: "People who want France that is not a Paris bus. The cliff path is optional.", bring: "A wind jacket. The town lunch works even if you skip the cliff." },
      { fits: "A focused morning: the Alcázar, one Lisbon hill, or a Riviera town. Not a coach of every sight.", bring: "Good walking shoes. The Cádiz-to-Seville drive is longer than it looks on a map." },
    ],
  },
  hawaii: {
    detail: "/media/day-hawaii.jpg",
    detailAlt: "A sea turtle in clear shallows beside black volcanic sand",
    facts: [
      { label: "Time in port", text: "Inter-island ships often overnight. A West Coast sailing spends more days just getting there." },
      { label: "Worth the time", text: "The USS Arizona is the reason to get off on Oahu. After that, a plate lunch is enough. Hawaii is not in the Michelin Guide." },
      { label: "Best for", text: "People who want the islands, not a new port every morning. Match the excursion to the kind of Hawaii trip you booked." },
      { label: "Often a poor fit", text: "Hana on a dawn-to-dusk call, and stacking a snorkel on a kayak in the same bay." },
    ],
    outings: [
      { fits: "Comfortable swimmers. The calm side of the island depends on that day’s wind.", bring: "Reef-safe sunscreen. Whales in winter are a bonus, not a promise." },
      { fits: "Spend a respectful half day at the memorial, then go to the beach. Do not try to circle the island. The memorial has security screening and time on your feet, so go early or choose another plan.", bring: "Time. The memorial has security and standing. Go early or don’t go." },
      { fits: "Only a sailing that stays the night in Maui. A dawn-to-dusk call is too short.", bring: "Patience in a car. The road is the excursion, not a checklist of waterfalls." },
    ],
  },
  bermuda: {
    detail: "/media/day-bermuda.jpg",
    detailAlt: "Pink sand curving toward a pastel cottage and clear water",
    facts: [
      { label: "Time in port", text: "Ships usually stay more than a day, so you do not have to see the island between breakfast and all-aboard." },
      { label: "Worth the time", text: "St. George’s is quiet enough for St. Peter’s Church without a schedule. In Hamilton, get the fish sandwich on raisin bread. Bermuda is not in the Michelin Guide." },
      { label: "Best for", text: "A short East Coast sailing that still feels like a real island, not a dash through three countries." },
      { label: "Often a poor fit", text: "Six-stop island tours, and Horseshoe Bay at the hour every ship arrives." },
    ],
    outings: [
      { fits: "The morning beach, before it becomes a ship party.", bring: "Reef shoes if you are tender-footed. The sand is soft; the walk in can be rocky." },
      { fits: "People who are done with another beach and want pastel streets and lunch.", bring: "A ferry schedule. St. George’s is the quieter town." },
      { fits: "One activity: the flat green trail, or the cool caves. Not both.", bring: "A light layer for the caves. They are short and colder than the beach." },
    ],
  },
  "northern-europe": {
    detail: "/media/day-northern-europe.jpg",
    detailAlt: "A row of painted wooden wharf houses reflected in calm water",
    facts: [
      { label: "Time in port", text: "Fjord villages can be a tender of a few hours. Baltic capitals are longer city days." },
      { label: "Worth the time", text: "Bergen is a walk on the Bryggen wharf and a shrimp sandwich at the fish market. A New Nordic tasting menu in Copenhagen is a Michelin table, and those are booked before you sail, not from the gangway." },
      { label: "Best for", text: "Long summer light, small ports, and people who like weather to be part of the trip." },
      { label: "Often a poor fit", text: "A scenic boat with no backup plan. If the tender cancels, you want a town walk already in mind." },
    ],
    outings: [
      { fits: "The view from the village. Add a walk only if the path is dry and the group wants it.", bring: "A real rain jacket. The ship’s fjord sail already did half the day’s work." },
      { fits: "Spend an easy hour on Bryggen’s cobblestone streets, rain or not. Take the funicular only if the cloud is above the hill.", bring: "Wear shoes that can take wet stone. A harbor walk in the rain is still the right use of a day in Bergen." },
      { fits: "Walk the old walls, sit in one square, and have coffee. A palace and a museum will not fit in the same morning.", bring: "A layer. Baltic mornings stay cool even when the brochure looks like July." },
    ],
  },
  "canada-new-england": {
    detail: "/media/day-new-england.jpg",
    detailAlt: "A gravel carriage road through peak autumn color near a rocky coast",
    facts: [
      { label: "Time in port", text: "Small Maine ports are half days. Halifax and Québec, when the ship goes upriver, are city calls." },
      { label: "Worth the time", text: "Halifax is the Citadel, and you can do it on foot. If the ship goes up to Québec, the view people want is from the Château Frontenac. In Maine, a lighthouse and a lobster roll are a full day." },
      { label: "Best for", text: "Fall color and small harbors, often without a flight. Peak leaves are a narrow window." },
      { label: "Often a poor fit", text: "A bus to a prettier brochure photo, and any “best of Acadia” that is mostly van time." },
    ],
    outings: [
      { fits: "An easy path near the pier in late September or early October.", bring: "A fleece. The leaves are the reason to go. The wind off the water is colder than it looks." },
      { fits: "A half day on your own feet — citadel view or the walls above the river.", bring: "Comfortable shoes. Québec is steeper than the waterfront in Halifax." },
      { fits: "Carriage roads if you want gravel and trees, or the town shore path if you want it shorter.", bring: "Nothing fancy. Skip the outlet mall. It is not why the ship stopped." },
    ],
  },
  river: {
    detail: "/media/day-river.jpg",
    detailAlt: "Bicycles by a vineyard wall, with a river ship on the water below",
    facts: [
      { label: "Time in port", text: "You dock in town, often overnight. Mornings are the walking tour. Afternoons can be a bike or a tasting." },
      { label: "Worth the time", text: "Budapest gives you the Parliament building and a real bowl of goulash. In Vienna, Steirereck is the Michelin restaurant for Austrian cooking, so book it before the cruise. If the afternoon is short, have Sachertorte in a café instead." },
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
      { label: "Time in port", text: "There often is no port. Landings are an hour or two, and weather can cancel the one you wanted." },
      { label: "Worth the time", text: "You came for the wildlife, not a restaurant. There is nowhere ashore for a Michelin meal. You eat on the ship." },
      { label: "Best for", text: "People who will accept a change of plan. The expedition team matters more than the entertainment staff." },
      { label: "Often a poor fit", text: "Ships that sell a bigger theater instead of more time off the ship. A bigger ship is not a better Galápagos day." },
    ],
    outings: [
      { fits: "Anyone who can step into a zodiac and stand with a colony at a distance. No fixed schedule.", bring: "The ship’s boots and a real parka. A longer lens matters less than staying warm." },
      { fits: "Travelers who want hours on the islands with a naturalist, not a floating hotel.", bring: "Shoes for lava, a tolerance for steps, and patience with the park rules." },
      { fits: "Only if you ask. It is not a personality test, and spaces are limited.", bring: "A wetsuit the ship provides, and a clear no if you are there for the landings instead." },
    ],
  },
  asia: {
    detail: "/media/day-asia.jpg",
    detailAlt: "Empty stone temple steps in warm morning light, with incense smoke",
    facts: [
      { label: "Time in port", text: "The ship often docks outside the city. The drive can take as long as the visit." },
      { label: "Worth the time", text: "Do the Grand Palace early, then eat noodles close by. That is a Bangkok day. Tokyo has more Michelin restaurants than any other city, and a sushi counter has to be reserved before you sail. In Singapore, pick a starred dining room or a hawker centre. You will not do both well." },
      { label: "Best for", text: "This suits travelers who will see one place well, such as the Grand Palace or one district in Kyoto. Do not try to do both on the same call." },
      { label: "Often a poor fit", text: "A bus that promises three temples and a market. Ha Long Bay only counts when the ship is already in that bay." },
    ],
    outings: [
      { fits: "The Grand Palace at opening, then a noodle lunch nearby. Not a second temple, and not a floating market the same morning.", bring: "Water, socks for the palace floors, and time for the drive back to Laem Chabang." },
      { fits: "Only when the itinerary is already in that scenery. Easy if you can sit on a boat.", bring: "Sun cover and a tolerance for some chop. A distant port is not the bay." },
      { fits: "One district — Fushimi Inari or Arashiyama — unless the ship overnights.", bring: "A transit card plan and walking shoes. Two famous sights in one call is how you see neither." },
    ],
  },
  "south-america": {
    detail: "/media/day-south-america.jpg",
    detailAlt: "An empty terrace looking across a bay toward a granite peak at morning",
    facts: [
      { label: "Time in port", text: "City calls can be long. Cape Horn is often a scenic hour from the deck, with no landing." },
      { label: "Worth the time", text: "Choose Christ the Redeemer or Sugarloaf. Rio traffic will not give you both. A Michelin dinner only works if the ship stays late and you reserved it ahead. In Buenos Aires, steak in San Telmo fits the hours most ships actually give you." },
      { label: "Best for", text: "A longer voyage where the city days are the memory and the scenic days are the ship’s job." },
      { label: "Often a poor fit", text: "Both Rio statues in one day, and a tango show that ends after the gangway closes." },
    ],
    outings: [
      { fits: "Pick one view. Leave the other, and the beach neighborhood, for time you actually have.", bring: "Patience with traffic. The day fails in the car, not at the viewpoint." },
      { fits: "A market afternoon is the simple plan. A show only if all-aboard is honestly late.", bring: "Comfortable shoes for San Telmo, and a backup that does not depend on the evening." },
      { fits: "Everyone. You stay aboard. Hiking boots will not get you onto the cape.", bring: "A jacket for the rail, and a camera. Weather decides if you see it." },
    ],
  },
  world: {
    detail: "/media/day-world.jpg",
    detailAlt: "A round porthole framing open ocean from a wood-paneled cabin",
    facts: [
      { label: "Time in port", text: "A few overnights matter. Many calls give you only a short look from the pier. Sea days make up most of the voyage." },
      { label: "Worth the time", text: "If the ship stays the night, pick one building and one good meal. A two-hour stop by tender is not the day for a stadium or a big museum." },
      { label: "Best for", text: "Travelers who like the ship, and who do not need a new city every morning." },
      { label: "Often a poor fit", text: "Treating a two-hour tender as a tour of a country. The overnights are the days that matter. The short calls are optional." },
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
      { label: "Time in port", text: "Sydney and Auckland can be long city calls. Reef ports need a full day. Milford is often a scenic sail, with no gangway." },
      { label: "Worth the time", text: "The Opera House is the Sydney stop that is actually next to the ship. A Michelin lunch of Australian food is possible if you book it ahead. If not, get a meat pie on the quay. Auckland is simpler: walk the harbor and have lamb for lunch." },
      { label: "Best for", text: "Travelers who can give the southern summer to one region, and who will fly to Sydney or Auckland to start." },
      { label: "Often a poor fit", text: "A reef and a capital in one call, and any Blue Mountains loop that spends the Sydney day on a highway." },
    ],
    outings: [
      { fits: "A half day on the quay. The ship is often already in the city.", bring: "Comfortable shoes and a plan that stops at the harbor. The suburbs can wait." },
      { fits: "Only a call long enough to reach the outer reef and get back. Swimming is optional.", bring: "Sun cover, and a clear answer about who wants to be in the water. The boat ride is the day either way." },
      { fits: "Everyone. You stay aboard. Hiking boots will not get you onto the sound if the ship does not land.", bring: "A jacket for the rail. Weather decides whether the ship goes in." },
    ],
  },
};

