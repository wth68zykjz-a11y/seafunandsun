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
  sections?: { heading: string; paragraphs: string[]; photo?: SkiPhoto }[];
};

export const skiPages: SkiPage[] = [
  {
    slug: "north-america",
    nav: "North America",
    title: "North America ski vacations",
    lede: "Jackson Hole, Aspen, and Whistler in the West. Stowe, Jay Peak, and Le Massif in the East and Quebec.",
    image: "/media/ski-stowe.jpg",
    alt: "The ski village at Stowe, Vermont, lit at dusk beneath the trails",
    photos: [
      {
        src: "/media/ski-stowe.jpg",
        alt: "The ski village at Stowe, Vermont, lit at dusk beneath the trails",
        caption: "Stowe, Vermont. The village sits under the trails.",
      },
      {
        src: "/media/ski-whistler.jpg",
        alt: "Whistler village at dusk, with ski runs on the mountains behind it",
        caption: "Whistler. The village is below the runs, and the peaks stay lit after the lifts close.",
      },
      {
        src: "/media/ski-louise.jpg",
        alt: "Frozen Lake Louise with snow-covered peaks behind it",
        caption: "Lake Louise in winter. The Fairmont is at the lake, and the ski area is above the village.",
      },
      {
        src: "/media/ski-lemassif.jpg",
        alt: "A skier on Le Massif with the frozen St. Lawrence River below",
        caption: "Le Massif, Quebec. The trails drop toward the St. Lawrence.",
      },
    ],
    paragraphs: [
      "From the legendary powder of Jackson Hole to the classic New England charm of Stowe, North America offers some of the most iconic mountain experiences in the world. We curate ski packages across premier destinations in the West—including Aspen, Deer Valley, Vail, Mammoth, and Whistler—as well as the legendary peaks of the East.",
      "Where you stay shapes your entire ski day. Choosing a room right at the mountain’s base allows you to clip in and ski directly from your door, while staying in town offers vibrant dining and nightlife just a short shuttle ride from the lifts. We match you with the perfect property for your travel style—whether that is the ultimate ski-in luxury of The Little Nell at Aspen Mountain, or the elegant alpine retreats of the Four Seasons in Jackson Hole’s Teton Village and Whistler.",
      "If you are heading to the Canadian Rockies, you can choose between the grand, historic Fairmont hotels in the town of Banff or out by Lake Louise, granting you easy access to the spectacular runs at Sunshine, Lake Louise, and Norquay. For a lively and relaxed California vibe, Mammoth offers incredibly convenient village hotels positioned right at the base so you are never far from the action.",
      "Closer to the East Coast, we arrange escapes to the massive, interconnected peaks of Killington and the picturesque descents of Le Massif in Quebec, where the trails seem to plunge directly into the icy St. Lawrence River. If you are chasing deep eastern powder, we can send you to the northern reaches of Vermont to ski Jay Peak, renowned for a unique mountain microclimate that produces some of the most prolific and reliable snowfall on this side of the continent.",
      "A slopeside room at Aspen Mountain, Teton Village, or Whistler Blackcomb puts the lift at the door. The Fairmont Banff Springs and Château Lake Louise are the grand hotels in the Canadian Rockies. Le Massif de Charlevoix drops toward the St. Lawrence, and Jay Peak is the mountain for eastern snow.",
      "A great ski trip is about more than just the descent. Beyond the slopes, these mountain towns are destinations in their own right. Whether you are looking for world-class après-ski in Aspen, a horse-drawn sleigh ride in the Rockies, or a quiet heated pool to relax your legs after a long day on the mountain, we design the entire alpine escape from morning to night.",
    ],
  },
  {
    slug: "alps",
    nav: "The Alps",
    title: "Alps ski vacations",
    lede: "Courchevel, Megève, St. Moritz, and car-free Zermatt, with the Matterhorn above the village.",
    image: "/media/ski-alps-run.jpg",
    alt: "A skier on a slope with the Matterhorn behind",
    photos: [
      {
        src: "/media/ski-zermatt.jpg",
        alt: "Zermatt at dusk, with the Matterhorn above the lit village",
        caption: "Zermatt is car-free. The Matterhorn stands over the village.",
      },
      {
        src: "/media/ski-megeve.jpg",
        alt: "The snow-covered church and village of Megève at sunset",
        caption: "Megève. The village sits in the valley, with the slopes on the ridges above it.",
      },
      {
        src: "/media/ski-alps-run.jpg",
        alt: "A skier on a slope with the Matterhorn behind",
        caption: "A run above Zermatt, with the Matterhorn behind the slope.",
      },
    ],
    paragraphs: [
      "Courchevel 1850 for Les 3 Vallées: Cheval Blanc, Les Airelles, and Aman Le Mélézin. Those rooms are requested, not taken off a public calendar. Megève is quieter skiing: Four Seasons is ski-in on Mont d’Arbois and reopens for winter on December 16, 2026. In St. Moritz the grand hotels are in town, not on the piste. Zermatt is car-free, under the Matterhorn.",
      "A few dates are worth planning around. White Turf is the horse race on the frozen lake at St. Moritz, usually on three Sundays in February. Some Alpine villages open a floodlit slope in the evening and sell it as moonlight skiing. It runs on a scheduled evening, and not at every mountain. In Austria, a December week can include a Christmas market in Innsbruck, Salzburg, or a resort village such as Kitzbühel. Most markets are finished by Christmas Eve. Those belong on the trip only when the dates match.",
      "Les 3 Vallées, including Courchevel and Val Thorens, are on the Epic Pass, along with Verbier and several resorts in Austria. Zermatt, St. Moritz, Chamonix, and Megève are on the Ikon Pass. A Club Med week in Val d’Isère, Tignes, Val Thorens, La Plagne, Les Arcs, Alpe d’Huez, Grand Massif Samoëns, or Saint-Moritz often includes the local lifts already, so a pass may not lower that price.",
    ],
  },
  {
    slug: "japan",
    nav: "Japan",
    title: "Japan ski vacations",
    lede: "Niseko, Rusutsu, and Furano on Hokkaido, and Hakuba and Nozawa Onsen in the Japanese Alps. Powder snow, an onsen, and a slopeside hotel.",
    image: "/media/ski-japan.jpg",
    alt: "Mount Yotei above the ski runs at Niseko, Japan",
    photos: [],
    paragraphs: [
      "Niseko and Rusutsu are the Hokkaido powder resorts, and Niseko runs floodlit night skiing. Furano sits farther inland, with groomed runs and a smaller village. Hakuba is the Olympic valley on Honshu. Nozawa Onsen is a hot-spring village under the mountain.",
      "When your priority is chasing the world’s deepest, most legendary powder rather than a traditional Alpine village, Japan is the ultimate destination. From the storm-tracked volcanoes of Hokkaido to the dramatic peaks of the Japanese Alps on Honshu, we curate bespoke itineraries that match your exact skiing style.",
    ],
    sections: [
      {
        heading: "Niseko and Hokkaido’s powder",
        paragraphs: [
          "When your heart is set on dry, weightless powder rather than a European chalet scene, Niseko on Hokkaido’s western coast is legendary. Here, you carve through waist-deep snow with the volcanic cone of Mount Yotei towering over the runs. For a seamless stay, we recommend the Park Hyatt Niseko Hanazono, where you can ski directly from the mountain to your door before soaking your tired legs in the hotel’s traditional hot spring onsen baths.",
          "Timing your journey to Japan requires careful planning. While January and early February deliver the deepest, most famous snow—making them the busiest weeks on the mountain—we can also arrange a quieter escape in mid-December or March, carefully tracking the forecasts to ensure the snow has arrived or is holding strong. Niseko is famous for its illuminated night skiing. Rather than hoping for the light of a full moon, the resort operates floodlit slopes on scheduled evenings, and we secure your tickets in advance so you can ski through the powder long after the sun goes down.",
        ],
        photo: {
          src: "/media/ski-japan.jpg",
          alt: "Mount Yotei above the ski runs at Niseko, Japan",
          caption: "Mount Yotei stands above the runs at Niseko.",
        },
      },
      {
        heading: "Rusutsu",
        paragraphs: [
          "Just south of Niseko lies Rusutsu, a resort spread across three peaks: West Mountain, East Mountain, and Mount Isola. While Niseko attracts the international spotlight, Rusutsu remains a favorite for skiers who live for wide-open spaces and tree skiing. The resort features natural glades that channel the same Hokkaido powder, with fewer crowds on the slopes. At the base, The Westin Rusutsu Resort provides spacious rooms and access to the lifts, at a quieter pace about an hour and a half from New Chitose Airport.",
        ],
      },
      {
        heading: "Furano",
        paragraphs: [
          "For travelers seeking a deeper connection to traditional Japanese mountain culture alongside the snow, Furano in central Hokkaido is the choice. Because it sits further inland than the coastal resorts, Furano’s snow is dry and light, falling across long groomed runs and steep off-piste terrain. Divided into the Furano and Kitanomine zones, the area keeps a local character, with izakayas and family-run ramen shops. Staying at the Shin Furano Prince Hotel puts you on the slope edge, so you can step out of your room and straight onto the snow.",
        ],
        photo: {
          src: "/media/ski-furano.jpg",
          alt: "Groomed ski runs and the gondola at Furano’s Kitanomine zone",
          caption: "Furano. The Kitanomine runs are wide and groomed, with the lifts at the base.",
        },
      },
      {
        heading: "Hakuba Valley",
        paragraphs: [
          "If you want vertical scale, dramatic peaks, and an alpine feel, look to the Hakuba Valley in Nagano Prefecture on Honshu, the main island. Home to ten resorts clustered along the Northern Alps, the site of the 1998 Winter Olympics, Hakuba runs from steep couloirs to wide family runs. Whether you want the village at Happo-One or the tree runs at Cortina, tucked at the north end of the valley, we match your lodging to the terrain you want to ski.",
        ],
        photo: {
          src: "/media/ski-hakuba.jpg",
          alt: "Snowy peaks of the Hakuba Valley above the village and ski jumps",
          caption: "Hakuba Valley. The Northern Alps rise behind the village. The Olympic jumps are still on the hill.",
        },
      },
      {
        heading: "Nozawa Onsen",
        paragraphs: [
          "For skiers who want their powder days paired with a historic village, Nozawa Onsen is the match. This hot spring village sits directly beneath a ski mountain that stretches over 10 kilometers from top to bottom. Rather than a modern resort base, your afternoons here are spent wandering narrow lanes lined with traditional wooden inns, sampling local food, and soaking in thirteen free public sotoyu, the community hot spring baths maintained by the villagers. Village life and the skiing are in the same place.",
        ],
        photo: {
          src: "/media/ski-nozawa.jpg",
          alt: "Steam rising from a public hot-spring bath in snowy Nozawa Onsen",
          caption: "Nozawa Onsen. Steam rises from a public bath in the village, with the mountain behind it.",
        },
      },
    ],
  },
];

export function skiPageBySlug(slug: string) {
  return skiPages.find((page) => page.slug === slug);
}
