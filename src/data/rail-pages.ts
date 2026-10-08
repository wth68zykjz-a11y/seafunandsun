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
          "The westbound train leaves Chicago in the afternoon, so the first meal is dinner. The last day, into Emeryville, is breakfast and lunch.",
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
        heading: "La Dolce Vita and the Golden Eagle",
        paragraphs: [
          "La Dolce Vita Orient Express runs in Italy. Dates include Rome, Venice, and Sicily. You sleep on the train, and meals are included.",
          "The Golden Eagle Danube Express runs through Central Europe and the Balkans in a private cabin. Meals are included. An agent requests that fare as well.",
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
