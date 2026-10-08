export type RailPhoto = { src: string; alt: string; caption: string };

export type RailPage = {
  slug: string;
  nav: string;
  title: string;
  lede: string;
  photos: RailPhoto[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const railPages: RailPage[] = [
  {
    slug: "california-zephyr",
    nav: "California Zephyr",
    title: "California Zephyr scenic stops",
    lede: "The train runs from Chicago to Emeryville. The canyons are between the stations. You see them from the glass car.",
    photos: [
      {
        src: "/media/rail/zephyr-canyon.jpg",
        alt: "The California Zephyr beside the Colorado River and red rock",
        caption: "The California Zephyr follows the Colorado beside red rock. You see this from the glass car. The train does not stop here.",
      },
      {
        src: "/media/rail/zephyr-glenwood.jpg",
        alt: "The California Zephyr along the Colorado River under a rock wall",
        caption: "Glenwood Canyon is between the stations. The train follows the river under the wall. In Glenwood Springs the train stops for about seven minutes, long enough to stretch on the platform. The hot-springs pool is a few blocks away, a large outdoor mineral pool that runs about 90°F. If you want to swim, get off and stay the night. The Zephyr runs once a day each way. The next train in the same direction is the next day, and it needs its own ticket.",
      },
    ],
    sections: [
      {
        heading: "The train",
        paragraphs: [
          "The California Zephyr runs between Chicago and Emeryville, across the bay from San Francisco. A bus from Emeryville connects into the city. The trip is about two nights on the train. A roomette has a bed and a door. A coach seat does not. You see the Colorado River and Donner Pass from the glass car.",
        ],
      },
      {
        heading: "What you see from the glass car",
        paragraphs: [
          "After Denver the train passes through the Moffat Tunnel, then Gore Canyon, Byers Canyon, and Glenwood Canyon along the Colorado River. West of Grand Junction it follows the river through Ruby Canyon. The train does not stop in those canyons.",
          "In California the train crosses Donner Pass. The Truckee River and Donner Lake are beside the tracks. The last stretch runs along San Pablo Bay into Emeryville.",
        ],
      },
      {
        heading: "Where the train actually stops",
        paragraphs: [
          "The station stop at Fraser–Winter Park is about five minutes. The stop at Glenwood Springs is about seven. The stop at Truckee, below Donner Pass, is short. Those minutes are enough to step onto the platform.",
          "Seven minutes in Glenwood Springs, about five in Fraser–Winter Park, and a short pause in Truckee are enough to step off and get back on. They are not enough for what is actually there. The Glenwood pool is a few blocks from the station. If you want a swim in that 90°F water, get off and stay the night. One train runs each way each day. On the current timetable the eastbound stops about 11:40 a.m. and the westbound about 2:40 p.m. The next train in the same direction is the next day, on a separate ticket. A hike in the forest above Winter Park takes hours, so the same plan works there: sleep in Fraser or Winter Park and continue the next day. Donner Lake is about two miles from the Truckee station. If you want to walk the shore, get off and stay in Truckee. You can also split the ticket and spend a night in Denver, Salt Lake City, or Reno.",
        ],
      },
    ],
  },
  {
    slug: "zephyr-dining",
    nav: "Zephyr dining",
    title: "California Zephyr dining",
    lede: "The dining car and the cafe are not the same meal. A roomette includes one. Coach passengers pay for the other.",
    photos: [
      {
        src: "/media/rail/superliner-diner.jpg",
        alt: "A Superliner dining car with white tablecloths and booths",
        caption: "A Superliner dining car on the Zephyr. A roomette includes the meal at one of these tables.",
      },
      {
        src: "/media/rail/zephyr-canyon.jpg",
        alt: "The California Zephyr beside the Colorado River",
        caption: "Dinner on the westbound train is often while the train is still on the plains or climbing toward Denver. The canyon comes the next day, and you can watch it from the glass car between meals.",
      },
    ],
    sections: [
      {
        heading: "Dining car",
        paragraphs: [
          "Meals in the dining car come with a roomette: breakfast, lunch, and a three-course dinner, plus room service. The first alcoholic drink at dinner is included.",
          "At breakfast you can order railroad French toast or a three-egg omelet. At dinner you can order a flatiron steak, pan-roasted chicken, or Atlantic salmon, and a dessert such as white-chocolate blueberry cobbler. Amtrak changes the menu, so the dishes on your date can differ.",
          "The westbound Zephyr leaves Chicago in the afternoon, so the first meal is dinner. The last day, into Emeryville, is breakfast and lunch.",
        ],
      },
      {
        heading: "Cafe",
        paragraphs: [
          "The cafe is on the lower level of the sightseer lounge. Every passenger can buy sandwiches, snacks, and drinks there.",
          "A coach passenger gets a dining-car table only if the sleeper guests have not filled it, and that meal is a separate charge.",
        ],
      },
    ],
  },
  {
    slug: "empire-builder",
    nav: "Empire Builder",
    title: "Empire Builder",
    lede: "Chicago to Seattle, or the section that splits at Spokane for Portland. You see Glacier National Park from the sightseer lounge as the train crosses Marias Pass.",
    photos: [
      {
        src: "/media/rail/empire-builder.jpg",
        alt: "The Empire Builder following a river through forested mountains",
        caption: "The Empire Builder follows a river through the northern Rockies. You see this from the sightseer lounge. A hike in Glacier National Park takes hours. The station pause is long enough to step onto the platform, not to start that hike.",
      },
      {
        src: "/media/rail/empire-trestle.jpg",
        alt: "The Empire Builder crossing a trestle with bare mountains behind",
        caption: "The train crosses the trestle. The mountains stay behind it. You see both from the sightseer lounge.",
      },
    ],
    sections: [
      {
        heading: "The train",
        paragraphs: [
          "The Empire Builder leaves Chicago for Seattle. At Spokane, the Portland cars are switched onto a separate section. The trip is about two nights. A roomette has a bed and a door. A coach seat does not.",
          "You see Glacier National Park from the sightseer lounge. Between East Glacier and Essex the train crosses Marias Pass, and that is the view from the lounge.",
        ],
      },
      {
        heading: "Where the train actually stops",
        paragraphs: [
          "East Glacier Park and West Glacier have summer service, and each station pause is brief. The Essex stop is a flag stop beside the Izaak Walton Inn. The stop at Whitefish is about fifteen minutes on the current timetable. Those minutes are enough to step onto the platform.",
          "Going-to-the-Sun Road crosses Glacier National Park, and Lake McDonald sits near the west entrance. A boat on the lake, or a walk beside it, takes hours inside the park. The drive from Whitefish to that entrance is about half an hour, and the train only stops in Whitefish for about fifteen minutes. Get off in Whitefish and stay the night if you want to be in the park the next day. The stop in Havre, out on the plains, is longer, about twenty minutes, and it is there so the crew can change. You will not see the park from Havre.",
          "On the Portland section the train follows the Columbia River through the gorge. The train stops briefly at Bingen–White Salmon, on the Washington side. Multnomah Falls is on the Oregon side, a two-tier waterfall about 620 feet high, with a trail to the bridge in front of it. The train does not stop at the falls. If you want that walk, get off in Portland and stay the night.",
        ],
      },
      {
        heading: "Meals",
        paragraphs: [
          "On the Seattle section, meals in the dining car come with a roomette: breakfast, lunch, and a three-course dinner. At breakfast you can order railroad French toast or a three-egg omelet. At dinner you can order steak, chicken, or salmon. Amtrak changes the menu.",
          "Between Spokane and Portland the dining car is not on that section. Amtrak serves a cold meal in the room. We check which section you booked before you choose the roomette.",
        ],
      },
    ],
  },
  {
    slug: "southwest-chief",
    nav: "Southwest Chief",
    title: "Southwest Chief",
    lede: "Chicago to Los Angeles, about two nights. You see Raton Pass and Apache Canyon from the sightseer lounge. The train does not stop in the canyon.",
    photos: [
      {
        src: "/media/rail/southwest-chief-raton.jpg",
        alt: "The Southwest Chief leaving a tunnel on Raton Pass",
        caption: "The Southwest Chief leaves a tunnel on Raton Pass. You see the pines from the sightseer lounge. The stop in the town of Raton is a few minutes. You see the pass from the lounge, not from the station.",
      },
      {
        src: "/media/rail/southwest-chief-albuquerque.jpg",
        alt: "The Southwest Chief at the platform in Albuquerque",
        caption: "In Albuquerque the train stops for about forty minutes, long enough to step onto the platform. Old Town is about two miles away, with the plaza and the church of San Felipe de Neri. If you want to walk the plaza, get off and stay the night.",
      },
    ],
    sections: [
      {
        heading: "The train",
        paragraphs: [
          "The Southwest Chief runs between Chicago and Los Angeles. The trip is about forty-three hours. A roomette has a bed and a door. A coach seat does not.",
          "West of Albuquerque the train crosses the high desert toward Gallup and Winslow. The San Francisco Peaks stand above Flagstaff. On many dates you pass them in the dark. A daylight look at Raton Pass and Apache Canyon is the westbound afternoon.",
        ],
      },
      {
        heading: "Where the train actually stops",
        paragraphs: [
          "The stop in Raton is about four minutes. The stop in Lamy is about four minutes. A van from Lamy takes you to a hotel in Santa Fe. Santa Fe is not at the platform.",
          "The train stops for about forty minutes in Albuquerque, and only a few minutes in Winslow. La Posada, the old Harvey hotel, sits beside the Winslow station, and a night there gives you dinner in the hotel and a walk on the Route 66 streets. You cannot do that from the platform. The Flagstaff stop is a few minutes as well, and on many dates the train is there at night. The South Rim, the southern edge of the Grand Canyon, is about an hour and a half by road from Flagstaff. The Rim Trail is a paved path along that edge. You walk it and look down into the canyon. If you want that walk, get off and stay.",
          "Amtrak has listed a bus connection at Williams Junction for the Grand Canyon Railway. We check whether that stop is on your date. The railway itself is a separate train, from Williams to the South Rim.",
        ],
      },
      {
        heading: "Meals",
        paragraphs: [
          "Meals in the dining car come with a roomette: breakfast, lunch, and a three-course dinner, plus room service. At breakfast you can order railroad French toast or a three-egg omelet. At dinner you can order steak, chicken, or salmon. Amtrak changes the menu.",
          "The cafe is on the lower level of the sightseer lounge. Every passenger can buy sandwiches, snacks, and drinks there. A coach passenger gets a dining-car table only if the sleeper guests have not filled it, and that meal is a separate charge.",
        ],
      },
    ],
  },
  {
    slug: "coast-starlight",
    nav: "Coast Starlight",
    title: "Coast Starlight",
    lede: "Seattle to Los Angeles, about one night. You see Mount Shasta and the Pacific from the sightseer lounge. The train does not stop on the beach.",
    photos: [
      {
        src: "/media/rail/coast-starlight.jpg",
        alt: "The Coast Starlight on a trestle above the Pacific, with green hills behind",
        caption: "South of San Luis Obispo the train runs beside the Pacific. You see the water from the sightseer lounge. There is no station on this stretch of beach.",
      },
      {
        src: "/media/rail/coast-cliffs.jpg",
        alt: "An Amtrak locomotive leading the Coast Starlight along a cliff above the surf",
        caption: "The train follows the cliff. The Santa Barbara station is about a mile from the beach and Stearns Wharf. If you want a swim, or a meal in San Luis Obispo, get off and stay the night. The train will not wait.",
      },
    ],
    sections: [
      {
        heading: "The train",
        paragraphs: [
          "The Coast Starlight runs between Seattle and Los Angeles in about thirty-five hours. A roomette has a bed and a door. A coach seat does not.",
          "In Oregon and northern California you can see the Cascades, and Mount Shasta when the weather is clear. The train does not stop at the mountain. Between San Luis Obispo and Santa Barbara the train runs along the Pacific. You see that shore from the sightseer lounge.",
        ],
      },
      {
        heading: "Where the train actually stops",
        paragraphs: [
          "Portland, Sacramento, Emeryville, San Luis Obispo, and Santa Barbara are cities where the train stops. The pause is too short to see the city. You can spend a night in Seattle, Portland, or Santa Barbara if you split the ticket.",
          "Crater Lake is not beside a platform. Chemult is the closest stop, and the drive from there to the lake is long. If you want to see the lake, leave the train and stay the night.",
        ],
      },
      {
        heading: "Meals",
        paragraphs: [
          "Meals in the dining car come with a roomette. Amtrak’s usual pattern on this train is lunch and dinner on the first day, then breakfast, lunch, and dinner on the second. At breakfast you can order railroad French toast or a three-egg omelet. At dinner you can order steak, chicken, or salmon. The menu changes.",
          "The cafe under the sightseer lounge sells food to every passenger. A dining-car table for a coach passenger opens only if the sleeper guests have not filled it.",
        ],
      },
    ],
  },
  {
    slug: "grand-canyon-railway",
    nav: "Grand Canyon Railway",
    title: "Grand Canyon Railway",
    lede: "Williams to the South Rim takes about two hours and fifteen minutes. You see the pines from the train. After you get off, walk the Rim Trail, the paved path along the southern edge of the canyon, and look down into it.",
    photos: [
      {
        src: "/media/rail/canyon-railway-steam.jpg",
        alt: "A Grand Canyon Railway steam locomotive at the depot",
        caption: "Steam runs on selected dates. Most days a diesel pulls the train. Either way, the canyon is at the other end of the ride.",
      },
      {
        src: "/media/rail/canyon-railway-cars.jpg",
        alt: "Grand Canyon Railway passenger cars crossing pine country",
        caption: "The train crosses the pines between Williams and the South Rim. You see that country from the window. The South Rim is the edge of the canyon. The Rim Trail, a paved path along that edge, starts a short walk from the depot.",
      },
    ],
    sections: [
      {
        heading: "The train",
        paragraphs: [
          "The Grand Canyon Railway leaves Williams in the morning, most of the year at 9:30, and reaches the South Rim depot about 11:45. The line is 65 miles. You ride back the same afternoon, or you stay overnight in the village and return on a later train.",
          "There are six classes: Pullman, Coach, First, Observation Dome, Luxury Dome, and Luxury Parlor. The dome is where the windows sit higher. The train still does the traveling.",
        ],
      },
      {
        heading: "The rim",
        paragraphs: [
          "The South Rim is the southern edge of the Grand Canyon, at Grand Canyon Village. From the depot it is a short walk to El Tovar and to the Rim Trail, a paved path along the edge. You walk it and look down into the canyon. A round trip the same afternoon gives you a few hours on that path. If you want sunset from the edge, or a longer walk west toward Hermits Rest, stay the night in the village and ride back to Williams on a later train.",
        ],
      },
      {
        heading: "Meals",
        paragraphs: [
          "The cafe car sells sandwiches, snacks, and drinks to every passenger. First Class and the dome and parlor cars add a snack: pastries and coffee on the way north, cheese and vegetables on the way back. That snack is not a dining-car dinner.",
          "A plated breakfast is at the Fred Harvey restaurant in Williams. Dinner is at El Tovar, beside the Rim Trail, a short walk from the depot. We book the hotel and the table with the train when you want them.",
        ],
      },
    ],
  },
  {
    slug: "northeast-trains",
    nav: "Northeast trains",
    title: "Adirondack, Vermonter, and Downeaster",
    lede: "These are day trains. You see the Hudson, the Connecticut River, or the Maine coast from the coach window. There is no sleeper and no dining car.",
    photos: [
      {
        src: "/media/rail/adirondack-hudson.jpg",
        alt: "An Amtrak train along the Hudson, with Bannerman Castle in the foreground",
        caption: "The Adirondack follows the Hudson north from New York. Bannerman Castle is on an island in the river. You see it from the train. The train does not stop there.",
      },
      {
        src: "/media/rail/adirondack-champlain.jpg",
        alt: "Lake Champlain seen from the Adirondack, with a low ridge on the far shore",
        caption: "Lake Champlain from the Adirondack. The water is beside the train. You drive from the Ticonderoga station to Fort Ticonderoga. The train does not pass the fort on this stretch of shore.",
      },
      {
        src: "/media/rail/downeaster.jpg",
        alt: "The Downeaster locomotive leading passenger cars through trees",
        caption: "The Downeaster between Boston and Brunswick. It stops in Portland on the way. The station is across the river from the Old Port.",
      },
    ],
    sections: [
      {
        heading: "Adirondack",
        paragraphs: [
          "The Adirondack runs from Moynihan Train Hall in New York to Montreal in about eleven hours. It follows the Hudson past Rhinecliff and Hudson, then the west shore of Lake Champlain, with the Adirondacks on the other side. You see the lake from the coach window.",
          "Ticonderoga is a station. From that station you drive to Fort Ticonderoga, on the lake. Port Kent, in season, is where you catch the ferry toward Burlington. None of those pauses is long enough to see the town. If you get off, the rest of the trip is a new ticket, and you need a hotel for the night.",
        ],
      },
      {
        heading: "Vermonter and Downeaster",
        paragraphs: [
          "The Vermonter runs from Washington to St. Albans. South of Springfield it runs through cities. North of there it follows the Connecticut River through Brattleboro and White River Junction. You see the valley from the window. Essex Junction is the stop for Burlington. A bus from there goes into Burlington. The train does not stop in the city. If you stay in Montpelier or Burlington, you sleep in a hotel, not on the train.",
          "The Downeaster runs from Boston’s North Station to Brunswick several times a day, in about three and a half hours. It stops at Old Orchard Beach in season, at Portland, and at Freeport. The Portland station is across the Fore River from the Old Port, about a fifteen-minute ride. Dinner in the Old Port, or time on the sand at Old Orchard, takes longer than the station pause, so you get off and stay the night.",
        ],
      },
      {
        heading: "Meals",
        paragraphs: [
          "Each of these trains has a cafe. You buy sandwiches, snacks, and drinks. There is no dining car and no sleeper.",
        ],
      },
    ],
  },
  {
    slug: "the-canadian",
    nav: "The Canadian",
    title: "The Canadian",
    lede: "VIA Rail from Toronto to Vancouver. You sleep in a cabin. You see the Shield and the Rockies from the dome.",
    photos: [
      {
        src: "/media/rail/canadian-rockies.jpg",
        alt: "The Canadian, with its dome car, beside a lake and snow-streaked peaks",
        caption: "The Canadian in the Rockies. Mount Robson is west of Jasper. You see it from the dome. The train does not stop at the mountain.",
      },
      {
        src: "/media/rail/canadian-dome.jpg",
        alt: "Seats under the curved glass of a dome car",
        caption: "Sleeper Plus includes time in the Skyline dome when a seat is free. You sleep in the cabin, not in this chair.",
      },
    ],
    sections: [
      {
        heading: "The train",
        paragraphs: [
          "The Canadian takes about four nights from Toronto to Vancouver. It crosses the lakes of the Canadian Shield, the prairie, and the Rockies. You see the Shield from the Skyline dome. West of Jasper you see Mount Robson from the train. Between Kamloops and Vancouver the train follows the Fraser Canyon. You see the river from the dome.",
          "Sleeper Plus is a cabin for one, a cabin for two, or an upper or lower berth. The bed is in the cabin or the berth. The dome is where you sit to look out. Prestige is a larger cabin, with more time in the Park car at the rear. That car has a second dome. Economy does not include the meals.",
        ],
      },
      {
        heading: "Where you can get off",
        paragraphs: [
          "Jasper is the town where people get off for a night. The station stop is longer than a platform stretch, and it is still too short for a visit to Maligne Lake or the Icefields. The stop in Winnipeg is longer, long enough to leave the station and come back. It is not long enough to see the city.",
        ],
      },
      {
        heading: "Meals",
        paragraphs: [
          "Sleeper Plus includes breakfast, lunch, and dinner in the dining car. Breakfast starts at 6:30. You choose one of two seatings for lunch and dinner. There is always a vegetarian dish. Wine is sold by the glass. It is not included the way the first drink is on Amtrak.",
          "VIA changes the menu. Breakfast has included a chef’s omelette. Lunch has included a pulled-turkey wrap and ginger beef on rice. Dinner has included trout, pesto chicken, and beef. The dishes on your date can differ.",
        ],
      },
    ],
  },
  {
    slug: "european-sleepers",
    nav: "European sleepers",
    title: "European sleeper trains",
    lede: "You dress for dinner as the train leaves the station. The dining car is set, the cabin is yours for the night, and the country goes past the window after dark. These are the Venice Simplon-Orient-Express, La Dolce Vita Orient Express, the Golden Eagle Danube Express, and the Royal Scotsman.",
    photos: [
      {
        src: "/media/rail/vsoe.jpg",
        alt: "A navy Venice Simplon-Orient-Express carriage with gold lettering and the train’s nameplate",
        caption: "The Venice Simplon-Orient-Express at the platform. The name is on the carriage. You sleep in a cabin on this train. Dinner is in the dining car.",
      },
      {
        src: "/media/rail/orient-dining.jpg",
        alt: "A dining car with white tablecloths, green chairs, and lamps",
        caption: "Dinner on the Venice Simplon-Orient-Express is in the dining car. You dress for it. The meal is included. The cabin is where you sleep.",
      },
      {
        src: "/media/rail/royal-scotsman.jpg",
        alt: "A wood-paneled cabin on the Royal Scotsman, with a bed and a view of hills",
        caption: "A cabin on the Royal Scotsman. You sleep here. The hills are outside the window. The day’s program stops at a distillery or a castle, and you get back on the train.",
      },
      {
        src: "/media/rail/scotsman-lounge.jpg",
        alt: "The lounge of the Royal Scotsman, with sofas and lamps",
        caption: "The lounge is where you sit between stops. It is not the cabin, and it is not the dining car.",
      },
      {
        src: "/media/rail/dolce-vita.jpg",
        alt: "La Dolce Vita Orient Express, a dark blue carriage with brass-framed windows, at a platform",
        caption: "La Dolce Vita Orient Express at the platform. You sleep in a cabin on this train. You can get off and spend the afternoon in Taormina.",
      },
      {
        src: "/media/rail/danube-express.jpg",
        alt: "The blue and cream Golden Eagle Danube Express crossing a stone viaduct",
        caption: "The Golden Eagle Danube Express crosses a stone viaduct. You sleep in a cabin. In Sarajevo or Mostar you get off the train. On some nights you sleep in a hotel, not on the train.",
      },
    ],
    sections: [
      {
        heading: "Venice Simplon-Orient-Express",
        paragraphs: [
          "This is Belmond. Many dates run from Paris toward Venice, and some continue toward Istanbul or Vienna. You sleep on the train. Dinner and breakfast are included. A longer route can include lunch.",
          "You can book a historic twin, a suite, or a grand suite. The cabin is where you sleep. Dinner is in the dining car, and the dress for dinner is formal. An agent requests the fare, because these dates are not posted like an Amtrak roomette.",
        ],
      },
      {
        heading: "La Dolce Vita Orient Express",
        paragraphs: [
          "This train stays in Italy. A one-night trip can run from Rome toward Venice, or the other way. A two-night trip can run from Palermo to Rome. The train follows the coast of Sicily, and you can get off and spend the afternoon in Taormina. Then the train is carried on a ferry across the Strait of Messina. You can watch that crossing from the deck. The train stops in Naples in the evening. You get off in Rome in the morning.",
          "You sleep on the train. A deluxe cabin is about seven square meters, with its own bathroom. A suite is larger, about eleven square meters. Lunch and dinner are included. On some Sicily dates the menus are Heinz Beck’s. An agent requests the fare.",
        ],
      },
      {
        heading: "Golden Eagle Danube Express",
        paragraphs: [
          "The Golden Eagle Danube Express runs through Central Europe and the Balkans. One route leaves Venice for Istanbul, and you get off in Trieste, Sarajevo, Mostar, Belgrade, Sofia, and Plovdiv. You do not sleep on the train every night. On some nights you sleep in a hotel in one of those cities.",
          "A Superior Deluxe cabin is about nine square meters, with a shower. Breakfast is at the table. Lunch and dinner come with wine. Dress on this train is informal. An agent requests the fare.",
        ],
      },
      {
        heading: "Royal Scotsman",
        paragraphs: [
          "The Royal Scotsman leaves Edinburgh for two, three, four, or seven nights in Scotland. You sleep on the train. Meals are included, and so are the off-train visits on that departure: a distillery, a castle, or a loch, depending on the date.",
          "If you want time in Edinburgh itself, book a hotel night before you board, or after you get off.",
        ],
      },
    ],
  },
  {
    slug: "alpine-trains",
    nav: "Alpine day trains",
    title: "Glacier Express and Bernina Express",
    lede: "These trains run in daylight. You see the passes from the panorama windows. You sleep in a hotel.",
    photos: [
      {
        src: "/media/rail/glacier-express.jpg",
        alt: "The red and white Glacier Express crossing a stone viaduct in snow",
        caption: "The Glacier Express crosses the Alps in daylight. The panorama windows are where you sit. The train is what crosses the viaduct.",
      },
      {
        src: "/media/rail/landwasser.jpg",
        alt: "A red train on the Landwasser Viaduct, curving into a tunnel in the cliff",
        caption: "The Landwasser Viaduct is on the Glacier Express route. The train curves into the tunnel. You see that curve from the window.",
      },
      {
        src: "/media/rail/bernina-express.jpg",
        alt: "The red Bernina Express on a stone viaduct below a cliff",
        caption: "The Bernina Express crosses a stone viaduct. The train does the climbing. You see the cliff and the valley from the window.",
      },
    ],
    sections: [
      {
        heading: "Glacier Express",
        paragraphs: [
          "The Glacier Express runs from Zermatt to St. Moritz, or the reverse, in about eight hours. It crosses 291 bridges and passes through 91 tunnels. The high point is the Oberalp Pass, at 2,033 meters. The Rhine Gorge is a pale canyon. You see both from the panorama windows.",
          "Meals are served at your seat. Excellence class includes a set menu. A recent menu started with Swiss smoked trout, then pea soup, a fillet of Swiss beef, a plate of Grisons mountain cheese and sheep’s cheese, and chocolate cake, with wine. First and second class can order a shorter lunch. The menu changes.",
          "You get off in the evening and sleep in a hotel in Zermatt or St. Moritz. The Matterhorn stands above Zermatt. You see it from the town, before the train or after it. The Glacier Express does not climb the mountain.",
        ],
      },
      {
        heading: "Bernina Express",
        paragraphs: [
          "The Bernina Express runs from Chur or St. Moritz to Tirano, in Italy. The high point is Ospizio Bernina, at 2,253 meters, beside Lago Bianco. The water there is glacial and pale.",
          "The stop at Alp Grüm is short, and the terrace faces the Palü Glacier. You can step off for the view and take a later train. The Brusio spiral is a full loop the train makes to lose height. Poschiavo is the town in the valley below. If you want time in Poschiavo or Tirano, get off and stay the night. The car has snacks.",
        ],
      },
    ],
  },
];

export function railPageBySlug(slug: string) {
  return railPages.find((page) => page.slug === slug);
}
