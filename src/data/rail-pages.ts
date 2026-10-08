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
        caption: "Glenwood Canyon is between the stations. The train follows the river under the wall. Glenwood Springs, the town, is a stop of about seven minutes.",
      },
    ],
    sections: [
      {
        heading: "The train",
        paragraphs: [
          "The California Zephyr runs between Chicago and Emeryville, across the bay from San Francisco. A bus from Emeryville connects into the city. The trip is about two nights on the train. A roomette has a bed and a door. A coach seat does not.",
          "The Empire Builder is a different train. It crosses the Rockies farther north, through Glacier National Park. You see the Colorado River and Donner Pass best from the Zephyr’s glass car.",
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
          "Fraser–Winter Park is about five minutes. Glenwood Springs is about seven. Truckee, below Donner Pass, is a short stop. Those minutes are enough to step onto the platform.",
          "The hot-springs pool in Glenwood Springs, a hike near Winter Park, or a walk to Donner Lake means you get off and sleep in town. Denver, Salt Lake City, or Reno can be a night in the city if you split the ticket.",
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
        caption: "A Superliner dining car, the same kind of car on the Zephyr, the Chief, the Empire Builder, and the Coast Starlight. A roomette includes the meal at one of these tables.",
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
          "The westbound Zephyr leaves Chicago in the afternoon, so the first meal is dinner. The last day, into Emeryville, is breakfast and lunch. The same dining car runs on the Southwest Chief, on the Seattle section of the Empire Builder, and on the Coast Starlight. Between Spokane and Portland the Empire Builder does not carry it. Amtrak serves a cold meal in the room on that section.",
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
    lede: "Chicago to Seattle, or the section that splits at Spokane for Portland. You see Glacier from the sightseer lounge. The lounge does not cross the pass. The train does.",
    photos: [
      {
        src: "/media/rail/empire-builder.jpg",
        alt: "The Empire Builder following a river through forested mountains",
        caption: "The Empire Builder follows a river through the northern Rockies. You see this from the sightseer lounge. A hike is a night off the train, not the station pause.",
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
          "You see Glacier National Park from the sightseer lounge. Between East Glacier and Essex the train crosses Marias Pass. The lounge does not cross the pass. The train does.",
        ],
      },
      {
        heading: "Where the train actually stops",
        paragraphs: [
          "East Glacier Park and West Glacier are summer stops, and each is a brief station pause. Essex is a flag stop beside the Izaak Walton Inn. Whitefish is about fifteen minutes on the current timetable. Those minutes are enough to step onto the platform.",
          "A hike on Going-to-the-Sun Road, or a boat on Lake McDonald, means you get off and sleep in Whitefish. Havre is a longer pause on the plains, about twenty minutes. That stop is for the crew. It is not a day in the park.",
          "On the Portland section the train follows the Columbia River through the gorge. Bingen–White Salmon is a short stop. A walk at Multnomah Falls is not that stop. It means a night in Portland.",
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
        caption: "The Southwest Chief leaves a tunnel on Raton Pass. You see the pines from the sightseer lounge. Raton, the town, is a few minutes at the station. It is not this pass.",
      },
      {
        src: "/media/rail/southwest-chief-albuquerque.jpg",
        alt: "The Southwest Chief at the platform in Albuquerque",
        caption: "Albuquerque is a stop of about forty minutes on a recent timetable. That is long enough to step onto the platform. Old Town is a night off the train.",
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
          "Raton is about four minutes. Lamy is about four minutes. A van from Lamy takes you to a hotel in Santa Fe. Santa Fe is not at the platform.",
          "Albuquerque is about forty minutes. Winslow is a few minutes, and La Posada sits beside that station. A night in the hotel is how you use the town. Flagstaff is a few minutes as well, and on many dates that stop is at night. The South Rim of the Grand Canyon is about an hour and a half by road from Flagstaff. A walk on the rim means you get off and stay.",
          "Amtrak has listed a bus connection at Williams Junction for the Grand Canyon Railway. We check whether that stop is on your date. The railway itself is a separate train, from Williams to the rim.",
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
        caption: "The train follows the cliff. A walk on the sand in Santa Barbara, or a meal in San Luis Obispo, means you get off and stay the night.",
      },
    ],
    sections: [
      {
        heading: "The train",
        paragraphs: [
          "The Coast Starlight runs between Seattle and Los Angeles in about thirty-five hours. A roomette has a bed and a door. A coach seat does not.",
          "In Oregon and northern California you can see the Cascades, and Mount Shasta when the weather is clear. The mountain is not a station. Between San Luis Obispo and Santa Barbara the train runs along the Pacific. You see that shore from the sightseer lounge.",
        ],
      },
      {
        heading: "Where the train actually stops",
        paragraphs: [
          "Portland, Sacramento, Emeryville, San Luis Obispo, and Santa Barbara are the city stops people use. A same-day pause is not a day in any of them. Seattle, Portland, or Santa Barbara can be a night if you split the ticket.",
          "Crater Lake is not beside a platform. Chemult is the closest stop, and the lake is a long drive from there. A visit means you leave the train and stay the night.",
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
    lede: "Williams to the South Rim, about two hours and fifteen minutes. You see the pines from the train. The canyon is the walk after you get off.",
    photos: [
      {
        src: "/media/rail/canyon-railway-steam.jpg",
        alt: "A Grand Canyon Railway steam locomotive at the depot",
        caption: "Steam runs on selected dates. Most days the train is pulled by a diesel. The locomotive is not the canyon.",
      },
      {
        src: "/media/rail/canyon-railway-cars.jpg",
        alt: "Grand Canyon Railway passenger cars crossing pine country",
        caption: "The train crosses the pines between Williams and the South Rim. You see that country from the window. The rim is a walk from the depot at the other end.",
      },
    ],
    sections: [
      {
        heading: "The train",
        paragraphs: [
          "The Grand Canyon Railway leaves Williams in the morning, most of the year at 9:30, and reaches the South Rim depot about 11:45. The line is 65 miles. You ride back the same afternoon, or you stay at the rim and return on a later day.",
          "There are six classes: Pullman, Coach, First, Observation Dome, Luxury Dome, and Luxury Parlor. The dome is where the windows sit higher. The train still does the traveling.",
        ],
      },
      {
        heading: "The rim",
        paragraphs: [
          "The Grand Canyon Depot is in the village, a short walk from El Tovar and the rim. A same-day round trip leaves a few hours for that walk. Sunset, or a longer walk along the rim, means a night at the canyon.",
          "This train does not replace the Southwest Chief. The Chief stops in Flagstaff. Williams is a separate ride. We check the connection on your date before we pair them.",
        ],
      },
      {
        heading: "Meals",
        paragraphs: [
          "The cafe car sells sandwiches, snacks, and drinks to every passenger. First Class and the dome and parlor cars add a snack: pastries and coffee on the way north, cheese and vegetables on the way back. That snack is not a dining-car dinner.",
          "A plated breakfast is at the Fred Harvey restaurant in Williams. Dinner at the rim is at El Tovar, a short walk from the depot. We book the hotel and the table with the train when you want them.",
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
        caption: "Lake Champlain from the Adirondack. The water is beside the train. Fort Ticonderoga is a drive from the Ticonderoga station, not this stretch of shore.",
      },
      {
        src: "/media/rail/downeaster.jpg",
        alt: "The Downeaster locomotive leading passenger cars through trees",
        caption: "The Downeaster between Boston and Brunswick. Portland is the city on the way. The station is across the river from the Old Port.",
      },
    ],
    sections: [
      {
        heading: "Adirondack",
        paragraphs: [
          "The Adirondack runs from Moynihan Train Hall in New York to Montreal in about eleven hours. It follows the Hudson past Rhinecliff and Hudson, then the west shore of Lake Champlain, with the Adirondacks on the other side. You see the lake from the coach window.",
          "Ticonderoga is a station. Fort Ticonderoga is a drive from that station, on the lake. Port Kent, in season, is the stop for the ferry toward Burlington. None of those pauses is a day in town. If you get off, the rest of the trip is a new ticket, and the night is a hotel.",
        ],
      },
      {
        heading: "Vermonter and Downeaster",
        paragraphs: [
          "The Vermonter runs from Washington to St. Albans. South of Springfield it is a city railroad. North of there it follows the Connecticut River through Brattleboro and White River Junction. You see the valley from the window. Essex Junction is the stop for Burlington, and Burlington itself is a bus ride. A night in Montpelier or Burlington is a hotel.",
          "The Downeaster runs from Boston’s North Station to Brunswick several times a day, in about three and a half hours. It stops at Old Orchard Beach in season, at Portland, and at Freeport. The Portland station is across the Fore River from the Old Port. A table there, or a walk on the sand at Old Orchard, means you get off and stay. The ride itself is not that evening.",
        ],
      },
      {
        heading: "Meals",
        paragraphs: [
          "Each of these trains has a cafe. You buy sandwiches, snacks, and drinks. There is no dining car and no roomette meal the way there is on the California Zephyr.",
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
          "Jasper is the town for a night off the train. The station stop is longer than a platform stretch, and it is still not a day at Maligne Lake or the Icefields. Winnipeg is a longer stop, long enough to leave the station and come back. It is not a day in the city.",
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
    lede: "You sleep on the train. Meals are included. The cabin you choose is what changes the price.",
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
        caption: "A cabin on the Royal Scotsman. You sleep here. The hills are outside the window. A distillery or a castle is a stop on the day’s program, and you get back on the train.",
      },
      {
        src: "/media/rail/scotsman-lounge.jpg",
        alt: "The lounge of the Royal Scotsman, with sofas and lamps",
        caption: "The lounge is where you sit between stops. It is not the cabin, and it is not the dining car.",
      },
      {
        src: "/media/rail/dolce-vita.jpg",
        alt: "La Dolce Vita Orient Express, a dark blue carriage with brass-framed windows, at a platform",
        caption: "La Dolce Vita Orient Express at the platform. You sleep in a cabin on this train. An afternoon in Taormina is time off the train.",
      },
      {
        src: "/media/rail/danube-express.jpg",
        alt: "The blue and cream Golden Eagle Danube Express crossing a stone viaduct",
        caption: "The Golden Eagle Danube Express crosses a stone viaduct. You sleep in a cabin. A day in Sarajevo or Mostar is time off the train, and some nights on that route are in a hotel.",
      },
    ],
    sections: [
      {
        heading: "Venice Simplon-Orient-Express",
        paragraphs: [
          "This is Belmond. Many dates run from Paris toward Venice, and some continue toward Istanbul or Vienna. You sleep on the train. Dinner and breakfast are included. A longer route can include lunch.",
          "You can book a historic twin, a suite, or a grand suite. The cabin is where you sleep. Dinner is in the dining car, and the evening is formal. An agent requests the fare, because these dates are not posted like an Amtrak roomette.",
        ],
      },
      {
        heading: "La Dolce Vita Orient Express",
        paragraphs: [
          "This train stays in Italy. A one-night trip can run from Rome toward Venice, or the other way. A two-night trip can run from Palermo to Rome: the coast of Sicily, an afternoon in Taormina, then the train is carried on a ferry across the Strait of Messina. You can watch that crossing from the deck. Naples is an evening stop. Rome is the morning you get off.",
          "You sleep on the train. A deluxe cabin is about seven square meters, with its own bathroom. A suite is larger, about eleven square meters. Lunch and dinner are included. On some Sicily dates the menus are Heinz Beck’s. The cabin is what changes the price. An agent requests the fare.",
        ],
      },
      {
        heading: "Golden Eagle Danube Express",
        paragraphs: [
          "The Golden Eagle Danube Express runs through Central Europe and the Balkans. One route leaves Venice for Istanbul, with time off the train in Trieste, Sarajevo, Mostar, Belgrade, Sofia, and Plovdiv. You do not stay on the train for every night. Some of those cities are a hotel.",
          "A Superior Deluxe cabin is about nine square meters, with a shower. Breakfast is at the table. Lunch and dinner come with wine. Dress on this train is informal, which is not the case on the Venice Simplon-Orient-Express. An agent requests the fare.",
        ],
      },
      {
        heading: "Royal Scotsman",
        paragraphs: [
          "The Royal Scotsman leaves Edinburgh for two, three, four, or seven nights in Scotland. You sleep on the train. Meals are included, and so are the off-train visits on that departure: a distillery, a castle, or a loch, depending on the date.",
          "Those visits are on the program. They are not a station you can stretch at for five minutes. A day you want in Edinburgh itself is a hotel night before you board, or after you get off.",
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
          "Alp Grüm is a short stop with a terrace facing the Palü Glacier. You can step off for the view and take a later train. The Brusio spiral is a full loop the train makes to lose height. Poschiavo is the town in the valley below. A night in Poschiavo or Tirano is how you use the town. The Bernina car has snacks. It does not have the Glacier Express kitchen.",
        ],
      },
    ],
  },
];

export function railPageBySlug(slug: string) {
  return railPages.find((page) => page.slug === slug);
}
