export type RailPage = {
  slug: string;
  nav: string;
  title: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const railPages: RailPage[] = [
  {
    slug: "california-zephyr",
    nav: "California Zephyr",
    title: "California Zephyr scenic stops",
    lede: "The train runs from Chicago to Emeryville. The canyons are between the stations. You see them from the glass car.",
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
    lede: "Chicago to Seattle, or the section that splits at Spokane for Portland. Glacier National Park is the stretch people take the train to see.",
    sections: [
      {
        heading: "The route",
        paragraphs: [
          "The Empire Builder leaves Chicago and runs west to Seattle. At Spokane, part of the train continues to Portland. You see the Rockies and Glacier National Park from the sightseer lounge. The glass car does not cross the mountains. The train does.",
          "In summer the train stops at East Glacier Park and West Glacier. Whitefish is the town people use for a night. The station pauses in the park are short. A hike means you leave the train and sleep in town or near the park.",
        ],
      },
      {
        heading: "Meals",
        paragraphs: [
          "On the Seattle section, meals in the dining car come with a roomette, the same way they do on the California Zephyr. Between Spokane and Portland, Amtrak serves a cold meal in the room instead of the dining car. We check which section you are on before you book the roomette.",
        ],
      },
    ],
  },
  {
    slug: "the-canadian",
    nav: "The Canadian",
    title: "The Canadian",
    lede: "VIA Rail from Toronto to Vancouver. You sleep on the train. The dome is where you see the Shield and the Rockies.",
    sections: [
      {
        heading: "The route",
        paragraphs: [
          "The Canadian takes about four nights from Toronto to Vancouver. It crosses the Canadian Shield, the prairie, and the Rockies. Jasper is the town where people get off for a night. A ten-minute station stop is not a hike.",
          "Sleeper Plus includes a cabin, meals in the dining car, and time in the dome. Prestige is a larger cabin on the same train. You see the mountains from the dome. You sleep in the cabin.",
        ],
      },
    ],
  },
  {
    slug: "european-sleepers",
    nav: "European sleepers",
    title: "European sleeper trains",
    lede: "You sleep on the train. Meals are usually included. The cabin you choose is what changes the price.",
    sections: [
      {
        heading: "The trains",
        paragraphs: [
          "The Venice Simplon-Orient-Express is Belmond. Many dates run from Paris toward Venice, and some continue to Istanbul. You sleep on the train.",
          "La Dolce Vita Orient Express runs in Italy, including Rome, Venice, and some dates to Sicily. The Golden Eagle Danube Express runs through Central Europe and the Balkans in a private cabin. The Royal Scotsman runs in Scotland, with time off the train at the stops.",
          "An agent requests many of these dates, because the fares are not posted. A scenic day train such as the Bernina Express is a different booking. You get off that train in the evening and sleep in a hotel.",
        ],
      },
    ],
  },
  {
    slug: "alpine-trains",
    nav: "Alpine day trains",
    title: "Glacier Express and Bernina Express",
    lede: "These trains run in daylight through the Alps. You get off in the evening and sleep in a hotel.",
    sections: [
      {
        heading: "What you see",
        paragraphs: [
          "The Glacier Express crosses Switzerland in daylight. The Bernina Express climbs past alpine lakes and stone viaducts. You see both from the window. These trains are not sleepers.",
          "A hotel night belongs at the end of the day, and often at the start if you are connecting from a flight. A guided walk may be available in the town where you get off. It depends on the stop.",
        ],
      },
    ],
  },
];

export function railPageBySlug(slug: string) {
  return railPages.find((page) => page.slug === slug);
}
