export type SkiPhoto = { src: string; alt: string; caption: string };

export type SkiPage = {
  slug: string;
  nav: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
  photos: SkiPhoto[];
  paragraphs: string[];
};

export const skiPages: SkiPage[] = [
  {
    slug: "north-america",
    nav: "North America",
    title: "North America ski vacations",
    lede: "From the powder at Jackson Hole to the trails at Stowe, including the East and Quebec.",
    image: "/media/ski-stowe.jpg",
    alt: "The ski village at Stowe, Vermont, lit at dusk beneath the trails",
    photos: [
      {
        src: "/media/ski-stowe.jpg",
        alt: "The ski village at Stowe, Vermont, lit at dusk beneath the trails",
        caption: "Stowe, Vermont. The village sits under the trails.",
      },
      {
        src: "/media/ski-north.jpg",
        alt: "Snow-covered pines on a ridge at sunrise",
        caption: "A ridge in the Rockies at first light.",
      },
    ],
    paragraphs: [
      "From the legendary powder of Jackson Hole to the classic New England charm of Stowe, North America offers some of the most iconic mountain experiences in the world. We curate ski packages across premier destinations in the West—including Aspen, Deer Valley, Vail, Mammoth, and Whistler—as well as the legendary peaks of the East.",
      "Where you stay shapes your entire ski day. Choosing a room right at the mountain’s base allows you to clip in and ski directly from your door, while staying in town offers vibrant dining and nightlife just a short shuttle ride from the lifts. We match you with the perfect property for your travel style—whether that is the ultimate ski-in luxury of The Little Nell at Aspen Mountain, or the elegant alpine retreats of the Four Seasons in Jackson Hole’s Teton Village and Whistler.",
      "If you are heading to the Canadian Rockies, you can choose between the grand, historic Fairmont hotels in the town of Banff or out by Lake Louise, granting you easy access to the spectacular runs at Sunshine, Lake Louise, and Norquay. For a lively and relaxed California vibe, Mammoth offers incredibly convenient village hotels positioned right at the base so you are never far from the action.",
      "Closer to the East Coast, we arrange escapes to the massive, interconnected peaks of Killington and the picturesque descents of Le Massif in Quebec, where the trails seem to plunge directly into the icy St. Lawrence River. If you are chasing deep eastern powder, we can send you to the northern reaches of Vermont to ski Jay Peak, renowned for a unique mountain microclimate that produces some of the most prolific and reliable snowfall on this side of the continent.",
      "Because North American mountains are often governed by complex lift networks like the Epic or Ikon pass systems, planning ahead is essential. We help you navigate these pass options and secure your access long before you reach the mountain. Whether you are chasing deep January powder or sunny, bluebird spring skiing in March, we ensure the logistics are handled.",
      "A great ski trip is about more than just the descent. Beyond the slopes, these mountain towns are destinations in their own right. Whether you are looking for world-class après-ski in Aspen, a horse-drawn sleigh ride in the Rockies, or a quiet heated pool to relax your legs after a long day on the mountain, we design the entire alpine escape from morning to night.",
    ],
  },
  {
    slug: "alps",
    nav: "The Alps",
    title: "Alps ski vacations",
    lede: "Courchevel, Megève, St. Moritz, and Zermatt, with the dates that are worth planning around.",
    image: "/media/ski-alps-run.jpg",
    alt: "A skier on a slope with the Matterhorn behind",
    photos: [
      {
        src: "/media/ski-alps-run.jpg",
        alt: "A skier on a slope with the Matterhorn behind",
        caption: "Zermatt sits under the Matterhorn. The village is car-free.",
      },
      {
        src: "/media/ski-alps.jpg",
        alt: "A person in a red jacket facing the Matterhorn across a snowfield",
        caption: "The Matterhorn across a snowfield above Zermatt.",
      },
    ],
    paragraphs: [
      "Courchevel 1850 for Les 3 Vallées: Cheval Blanc, Les Airelles, and Aman Le Mélézin. Those rooms are requested, not taken off a public calendar. Megève is quieter skiing: Four Seasons is ski-in on Mont d’Arbois and reopens for winter on December 16, 2026. In St. Moritz the grand hotels are in town, not on the piste. Zermatt is car-free, under the Matterhorn.",
      "A few dates are worth planning around. White Turf is the horse race on the frozen lake at St. Moritz, usually on three Sundays in February. Some Alpine villages open a floodlit slope in the evening and sell it as moonlight skiing. It runs on a scheduled evening, and not at every mountain. In Austria, a December week can include a Christmas market in Innsbruck, Salzburg, or a resort village such as Kitzbühel. Most markets are finished by Christmas Eve. Those belong on the trip only when the dates match.",
      "Vail’s sister mountains in France, Les 3 Vallées, including Courchevel and Val Thorens, are on Epic, along with Verbier and several resorts in Austria. Zermatt, St. Moritz, Chamonix, and Megève are on Ikon. A Club Med week in Val d’Isère, Tignes, Val Thorens, La Plagne, Les Arcs, Alpe d’Huez, Grand Massif Samoëns, or Saint-Moritz often includes the local lifts already, so a pass may not lower that price.",
    ],
  },
  {
    slug: "japan",
    nav: "Japan",
    title: "Japan ski vacations",
    lede: "Niseko, on Hokkaido, when you want powder and a night on the lit slopes.",
    image: "/media/ski-japan.jpg",
    alt: "Mount Yotei above the ski runs at Niseko, Japan",
    photos: [
      {
        src: "/media/ski-japan.jpg",
        alt: "Mount Yotei above the ski runs at Niseko, Japan",
        caption: "Mount Yotei stands above the runs at Niseko.",
      },
    ],
    paragraphs: [
      "Choose Niseko, on Hokkaido, when you want powder rather than an Alpine village. Mount Yotei sits above the runs. Park Hyatt Niseko Hanazono is ski-in, ski-out, with onsen baths in the hotel. January and early February are the deep weeks, and they are also the busiest. Mid-December and March are the quieter request, if the snow is in. Niseko also runs night skiing on lit slopes. That is a ticket for a set evening, not a promise of a full moon.",
      "Niseko United is on Ikon. A pass covers a set number of days, not the whole season, and it does not replace a hotel rate that already includes the local lifts. We check that season’s rules before counting the lifts as paid.",
    ],
  },
];

export function skiPageBySlug(slug: string) {
  return skiPages.find((page) => page.slug === slug);
}
