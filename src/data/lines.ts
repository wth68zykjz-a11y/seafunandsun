export type LineRow = {
  line: string;
  ships: string;
  where: string;
  fare: string;
};

export type LinePage = {
  slug: string;
  title: string;
  card: string;
  image: string;
  alt: string;
  photos?: { src: string; alt: string; caption: string }[];
  lede: string;
  size: string;
  rows: LineRow[];
  notes: string[];
  benefits?: { title: string; text: string }[];
};

export const linePages: LinePage[] = [
  {
    slug: "large",
    title: "About 3,000 to 7,600 passengers",
    card: "The largest ocean ships",
    image: "/media/ship-symphony.jpg",
    alt: "Symphony of the Seas, an Oasis-class ship, at sea",
    photos: [
      {
        src: "/media/ship-symphony.jpg",
        alt: "Symphony of the Seas, an Oasis-class ship, at sea",
        caption: "Symphony of the Seas. An Oasis-class ship carries about 5,600 to 6,700 passengers. Icon-class ships are larger.",
      },
    ],
    lede: "These are the largest ocean ships. They sail Caribbean cruises that depart from Florida, and some of them spend a season on a Mediterranean cruise. Quantum-class ships also sail an Alaska cruise from Seattle.",
    size: "Passenger counts are the line’s double-occupancy figure. Icon-class ships are about 5,600 to 7,600. Oasis-class ships are about 5,600 to 6,700.",
    rows: [
      { line: "Celebrity", ships: "Edge class about 3,200.", where: "Caribbean cruises, Mediterranean cruises, and some Alaska cruises.", fare: "Balcony often $1,300–$2,800." },
      { line: "Princess", ships: "Royal class about 3,560. Sphere class, including Sun Princess, about 4,300.", where: "Caribbean and Mediterranean cruises.", fare: "Balcony often $1,200–$2,600." },
      { line: "Norwegian", ships: "Prima class about 3,100–3,600. Encore and Breakaway classes about 4,000.", where: "Caribbean cruises from Florida and the Northeast. Prima-class ships also sail some weeks from San Juan, and in winter 2027–28 Prima and Viva are scheduled to start there. Encore-class ships also sail an Alaska cruise from Seattle.", fare: "Interior often $500–$1,300. Balcony often $900–$2,200." },
      { line: "Disney", ships: "Wish class and Dream class, about 4,000.", where: "Caribbean cruises from Port Canaveral. Wish-class ships also sail Europe in some seasons.", fare: "The fare for about a week is often $2,000–$4,500 a person. The fare is not comparable to Carnival’s." },
      { line: "Carnival", ships: "Vista class about 4,000. Excel class, including Mardi Gras and the newer sisters, about 5,200–6,500.", where: "Caribbean and Bahamas cruises from Florida and other East Coast ports. A smaller European season.", fare: "Interior often $400–$1,100. Balcony often $800–$1,800." },
      { line: "MSC", ships: "Seaside class about 4,100–5,400. Meraviglia class about 4,500–6,300. World class about 6,700.", where: "Caribbean cruises from Miami and Port Canaveral. Mediterranean cruises from Barcelona, Rome, and other summer ports.", fare: "Interior often $400–$1,100. Balcony often $800–$1,900. Drinks and gratuities are sometimes bundled." },
      { line: "Royal Caribbean", ships: "Freedom and Voyager classes about 3,100–4,300. Quantum class about 4,100–4,900. Oasis class about 5,600–6,700. Icon class about 5,600–7,600.", where: "The largest ships depart from Florida. A cruise that starts in San Juan uses a smaller Royal Caribbean ship, about 2,000 to 2,400 guests. Some Oasis-class ships sail a Mediterranean season. Quantum-class ships sail an Alaska cruise from Seattle.", fare: "Interior often $500–$1,400. Balcony often $900–$2,400. The fare during a holiday week can be well above that." },
    ],
    notes: [
      "Costa also sails ships of this size in Europe. Ask if that itinerary is the one you want.",
      "A Caribbean cruise that departs from the Northeast on one of these ships adds sea days. Those sea days are on the itinerary.",
    ],
    benefits: [
      {
        title: "Pools and water parks",
        text: "Every ship in this group has several pools. The water park is not on all of them. Royal Caribbean’s Icon and Oasis ships have the largest, with slides and a surf simulator. Carnival’s Excel class and MSC’s World class have water parks too. Some Norwegian ships add slides and, on the Encore class, a go-kart track. Princess, Celebrity, and Disney have large pool decks. They do not have a water park on that scale.",
      },
      {
        title: "Restaurants",
        text: "A ship this size has a main dining room plus a dozen or more other places to eat. The main dining room and the buffet are in the fare. Steak, sushi, and the other specialty rooms are usually an extra charge, or a package. Norwegian does not assign a dining time. Disney rotates restaurants, and the characters are part of that.",
      },
      {
        title: "A sea day with somewhere to go",
        text: "The theater, the kids’ club, a sports court, and a casino are on these ships. On a day at sea you use those, rather than waiting for a port.",
      },
      {
        title: "What these ships leave out",
        text: "Getting off takes longer, some harbors cannot take a ship this size, and you will not know the other passengers.",
      },
    ],
  },
  {
    slug: "caribbean",
    title: "About 2,000 to 7,000 passengers",
    card: "Large ocean ships",
    image: "/media/caribbean.jpg",
    alt: "Turquoise water and a Caribbean beach",
    photos: [
      {
        src: "/media/ship-symphony.jpg",
        alt: "Symphony of the Seas, a large ship used on Caribbean weeks",
        caption: "A Caribbean cruise that departs from Florida often uses a ship this size. A Bermuda cruise is usually on a smaller ship, about 2,000 to 4,000 passengers.",
      },
    ],
    lede: "The biggest ships sail Caribbean cruises that depart from Florida. Bermuda cruises that depart from the Northeast are usually on a smaller ship, and the ship stays longer because Bermuda is the destination.",
    size: "These are large ocean ships. Many carry 4,000 to about 7,000 passengers. Some of the ships on the shorter cruises carry about 2,000 to 4,000.",
    rows: [
      { line: "Holland America", ships: "Older ships about 1,400–1,900. Pinnacle class about 2,650.", where: "Caribbean cruises, Alaska cruises, and longer voyages.", fare: "Balcony often $1,300–$2,600." },
      { line: "Celebrity", ships: "Older Millennium ships about 2,000. Solstice class about 2,850. Edge class about 3,200.", where: "Caribbean cruises from Fort Lauderdale, plus Europe and Alaska.", fare: "Balcony often $1,300–$2,800." },
      { line: "Carnival", ships: "Older Fantasy and Spirit ships about 2,100–2,600. Excel class (Mardi Gras and newer) about 5,200–6,500.", where: "Caribbean and Bahamas cruises from Florida and other East Coast ports.", fare: "Interior often $400–$1,100. Balcony often $800–$1,800." },
      { line: "Norwegian", ships: "Older Jewel-class ships about 2,400. Prima class about 3,100. Encore and Breakaway classes about 4,000.", where: "Caribbean cruises from Florida and the Northeast. A stop at the line’s private island is common on the short cruises.", fare: "Interior often $500–$1,300. Balcony often $900–$2,200." },
      { line: "Princess", ships: "Older Grand-class ships about 2,600. Sun and Sphere classes about 3,500–4,300.", where: "Caribbean cruises from Fort Lauderdale, including some longer ones.", fare: "Balcony often $1,200–$2,600." },
      { line: "Disney", ships: "Magic and Wonder about 2,700. Wish, Dream, and Fantasy about 4,000.", where: "Caribbean cruises from Port Canaveral. Wonder also sails Alaska.", fare: "The fare for about a week is often $2,000–$4,500 a person. The fare is higher during school holidays. The fare is not comparable to Carnival’s." },
      { line: "MSC", ships: "Smaller ships about 2,500–3,200. Seaside class about 4,100. World class about 6,700.", where: "The large ships start in Miami and Port Canaveral. MSC Opera, about 2,600 guests, starts southern Caribbean cruises in La Romana from late 2026, and later in Fort-de-France. Mediterranean cruises use the other ships.", fare: "Interior often $400–$1,100. Balcony often $800–$1,900. Drinks and gratuities are sometimes bundled, sometimes not." },
      { line: "Royal Caribbean", ships: "Freedom and Voyager classes about 3,100–4,300. Oasis and Icon classes about 5,600–7,600. The San Juan ships, such as Rhapsody of the Seas, are smaller, about 2,000–2,400.", where: "The largest ships depart from Florida. Mid-size ships start and end in San Juan through the year. An Oasis or Icon cruise usually starts in Florida and only stops in San Juan.", fare: "Interior often $500–$1,400. Balcony often $900–$2,400. The fare during a holiday week can be well above that." },
    ],
    notes: [
      "Bermuda cruises that depart from New York, Boston, or Baltimore are usually 5 to 7 nights on ships of about 2,000 to 4,000 passengers. The useful ones stay in port long enough to see the island.",
      "A Caribbean cruise that departs from the Northeast adds sea days. The ship can be the same size. Those extra sea days are still on the itinerary.",
    ],
    benefits: [
      {
        title: "Pools, water parks, and a private island",
        text: "The Florida ships are the ones with several pools and, on Royal Caribbean, Carnival’s Excel class, and MSC’s largest ships, a water park. Many of those weeks also stop at the line’s own beach: Perfect Day at CocoCay, Celebration Key, Ocean Cay, Great Stirrup Cay, or Castaway Cay. That stop has a beach and no city to walk. Holland America and Celebrity do not have that water park or that island.",
      },
      {
        title: "Restaurants",
        text: "The main dining room and the buffet are in the fare. Specialty rooms are usually extra. A ship of 4,000 passengers needs more than one restaurant, so the list is long. On a 2,000-passenger ship the list is shorter and the rooms are less crowded.",
      },
      {
        title: "Short stops",
        text: "The ship is usually in port from morning to late afternoon. One plan is enough: a beach, a reef, or a town. You are back on the ship for the rest of the time. Bermuda is the exception. Those sailings usually stay long enough to see the island, and the ships are smaller.",
      },
      {
        title: "What these ships leave out",
        text: "A Caribbean cruise of the same length that departs from the Northeast, on a ship of the same size, spends more nights at sea. A quieter ship is on the luxury and yacht pages.",
      },
    ],
  },
  {
    slug: "alaska",
    title: "About 1,800 to 4,200 passengers",
    card: "Mid-size ocean ships",
    image: "/media/ship-alaska.jpg",
    alt: "A mid-size cruise ship in a narrow Alaskan channel",
    photos: [
      {
        src: "/media/ship-alaska.jpg",
        alt: "A mid-size cruise ship in a narrow Alaskan channel, with mountains behind",
        caption: "Alaska ships are about 1,800 to 4,200 passengers, small enough for a narrow channel.",
      },
    ],
    lede: "An Alaska cruise uses a mid-size ship. Seattle is the departure port for a round-trip cruise through the Inside Passage. Vancouver is the Canadian departure port, often for a one-way cruise to Seward or Whittier. Hawaii’s inter-island ship is smaller and sails from Honolulu.",
    size: "These are mid-size ocean ships. Most carry about 1,800 to 4,200 passengers. One ship in this group is smaller and stays among the islands.",
    rows: [
      { line: "Silversea and Seabourn", ships: "About 450–600 on the Alaska ships.", where: "One-way cruises between Vancouver and Seward, and a smaller set of coastal cruises.", fare: "Often $6,000–$14,000 a person for 7 nights. More is included than on the lines above. An agent requests many of these fares." },
      { line: "Holland America", ships: "About 1,400–2,650.", where: "Round-trip cruises from Seattle, and one-way cruises between Vancouver and Whittier or Seward, including Glacier Bay.", fare: "Balcony, 7 nights, often $1,600–$3,200. A 10- to 14-night one-way is often $2,400–$5,000." },
      { line: "Princess", ships: "About 2,000–3,600 on an Alaska cruise.", where: "Cruises from Seattle, and a one-way cruise from Vancouver to Whittier on the Voyage of the Glaciers.", fare: "Balcony, 7 nights, often $1,500–$3,200." },
      { line: "Carnival", ships: "About 2,100–4,000.", where: "Inside Passage round-trip cruises from Seattle.", fare: "Balcony, 7 nights, often $900–$2,200." },
      { line: "Norwegian, Pride of America", ships: "About 2,200.", where: "Cruises among the Hawaiian islands from Honolulu. A cruise from California on Holland America, Princess, or Celebrity spends days at sea before the islands and is usually longer.", fare: "The fare for about a week is often $1,200–$2,800 a person." },
      { line: "Disney", ships: "Disney Wonder, about 2,700.", where: "Alaska round-trip cruises, including some that depart from Vancouver.", fare: "Often $3,000–$6,000 a person for a week." },
      { line: "Celebrity", ships: "Solstice class about 2,850. Edge class about 3,200 when that ship is assigned here.", where: "Cruises from Seattle, and one-way cruises from Vancouver to Seward on ships such as Solstice.", fare: "Balcony, 7 nights, often $1,400–$3,000." },
      { line: "Norwegian", ships: "Encore and Bliss about 4,000.", where: "Inside Passage cruises from Seattle, and a smaller set of coastal cruises from Vancouver.", fare: "Balcony, 7 nights, often $1,200–$2,800." },
      { line: "Royal Caribbean", ships: "Radiance and Serenade about 2,100. Quantum class about 4,100–4,900 from Seattle.", where: "Inside Passage round-trip cruises, and some one-way cruises to Seward.", fare: "Balcony, 7 nights, often $1,200–$2,800." },
    ],
    notes: [
      "A cruise that starts in Vancouver needs a passport. Prices in the city are in Canadian dollars. If you stay a few days before or after the cruise, the ship is not waiting. You can walk the seawall toward Stanley Park, in daylight or after dark, and eat where you want, such as a seafood counter on the water at lunch or a quieter dining room later.",
      "The ship and the ports can match in May and in August. What you see still changes. In May the tidewater glaciers are larger, because less of the winter ice has melted, and the weather is colder. In August the salmon are running and the bears are on the rivers to feed.",
    ],
    benefits: [
      {
        title: "Glaciers and wildlife",
        text: "Glacier days, whale water, and long evenings are why these ships are here. Norwegian’s larger Seattle ships and Royal Caribbean’s Quantum class have pools, slides, and a show. Holland America and Princess put more of the ship into lectures, naturalists, and the viewing decks.",
      },
      {
        title: "Restaurants",
        text: "The dining room is in the fare. Specialty rooms are usually extra, and there are fewer of them than on a Caribbean mega-ship. On Silversea and Seabourn the drinks, and more of the dining, are already in the price.",
      },
      {
        title: "Time in port, and time on deck",
        text: "Most stops last about six to eight hours. In Juneau you can walk from the dock to the Mount Roberts tram. In Skagway you can walk Broadway. In Ketchikan you can walk to Creek Street. At a glacier such as Glacier Bay or Tracy Arm, the ship may not land at all. Bring a warm layer. The pools are open, and the weather does not always agree.",
      },
      {
        title: "What these ships leave out",
        text: "A one-way cruise to Seward or Whittier shows more of the Gulf and needs a flight at one end. A round-trip cruise from Seattle uses one airport. Hawaii’s Pride of America sails among the islands, often overnight.",
      },
    ],
  },
  {
    slug: "europe",
    title: "About 1,500 to 6,000 passengers",
    card: "Mid-size and large ocean ships",
    image: "/media/mediterranean.jpg",
    alt: "A Mediterranean coast and hillside town",
    photos: [
      {
        src: "/media/ship-symphony.jpg",
        alt: "A large cruise ship of the size used on some western Mediterranean weeks",
        caption: "Barcelona and Rome sometimes have a ship of about 4,000 to 6,000 passengers.",
      },
      {
        src: "/media/ship-seabourn.jpg",
        alt: "Seabourn Ovation, a smaller ship, at sea",
        caption: "Norway, the Baltic, and many Greek-island weeks use a smaller ship. Seabourn Ovation carries about 600.",
      },
    ],
    lede: "A western Mediterranean cruise that departs from Barcelona, Rome, or Athens can be on a ship of 4,000 to 6,000 passengers. A cruise to the Greek islands, the Baltic, or Norway is more often on a ship of about 1,500 to 3,500. Venice is reached from Ravenna or Trieste.",
    size: "This group mixes mid-size and large ocean ships. Some carry about 1,500 to 3,500 passengers. Others carry 4,000 to 6,000.",
    rows: [
      { line: "Princess and Holland America", ships: "About 1,900–3,600.", where: "Mediterranean, British Isles, Baltic, and Norway cruises.", fare: "Balcony, 7 nights, often $1,500–$3,400." },
      { line: "Cunard", ships: "Queen Elizabeth and Queen Anne about 2,000–3,000. Queen Mary 2 about 2,700.", where: "Cruises from Southampton, including the Atlantic crossing, Norway, and northern Europe.", fare: "A 7-night crossing or a northern Europe cruise is often $1,500–$4,000 a person. An agent requests the suite price." },
      { line: "Norwegian and Carnival", ships: "About 2,400–4,000.", where: "Western Mediterranean cruises from Barcelona or Rome.", fare: "Balcony, 7 nights, often $900–$2,200." },
      { line: "Celebrity", ships: "Solstice class about 2,850. Edge class about 3,200.", where: "Mediterranean cruises, Greek-island cruises, and some northern Europe cruises.", fare: "Balcony, 7 nights, often $1,500–$3,200." },
      { line: "Royal Caribbean", ships: "Other ships about 3,000–4,500. Oasis-class ships of about 5,600 in some western Mediterranean seasons.", where: "Cruises from Barcelona and Rome.", fare: "Balcony, 7 nights, often $1,100–$2,600." },
      { line: "MSC", ships: "Smaller ships on some eastern routes. Often 4,000–6,700 in the western Mediterranean.", where: "Cruises from Barcelona, Rome, and Athens.", fare: "Balcony, 7 nights, often $900–$2,200. The fare in August is at the high end of that range." },
    ],
    notes: [
      "Luxury ships in these same ports carry fewer passengers. The fare is higher because drinks and gratuities are usually included. They are on the luxury ocean and yacht pages.",
      "River ships carry about 150 to 190 passengers and start in cities such as Budapest, Amsterdam, and Basel. See the river and expedition page.",
      "The cruise fare in July and August is higher than the cruise fare in May or October.",
    ],
    benefits: [
      {
        title: "Pools on the large ships, decks on the smaller ones",
        text: "A seven-night western Mediterranean cruise that departs from Barcelona or Rome can be on a ship with several pools and a long list of restaurants. Cruises to Norway, the Baltic, and many Greek islands use smaller ships. Those have a pool and a show, and they can dock in a harbor in the middle of town.",
      },
      {
        title: "Restaurants",
        text: "The main dining room is in the fare. Specialty dining is usually extra on MSC, Royal Caribbean, Norwegian, and Carnival. Celebrity, Princess, and Holland America have fewer rooms and a quieter dining room. Cunard still has a more formal evening on the Queens.",
      },
      {
        title: "The port is a city",
        text: "In these cities you walk. Start early, before the heat and the crowds. St. Mark’s is in Venice. Large ships dock at Ravenna or Trieste. Venice is about two hours from those piers.",
      },
      {
        title: "What these ships leave out",
        text: "July and August are hot in the Mediterranean, and the ships are full. May, June, and September are quieter months, often on a smaller ship. The luxury and yacht pages are the ones that trade the water park for a harbor in the middle of town.",
      },
    ],
  },
  {
    slug: "small",
    title: "About 100 to 400 passengers",
    card: "River and expedition ships",
    image: "/media/ship-river.jpg",
    alt: "Viking river ships tied along a European river",
    photos: [
      {
        src: "/media/ship-river.jpg",
        alt: "Three Viking river ships tied along a European river",
        caption: "A European river ship is long and low, and carries about 150 to 190 passengers.",
      },
      {
        src: "/media/ship-heritage.jpg",
        alt: "American Heritage, an American Cruise Lines paddlewheeler, on a river",
        caption: "American Heritage, a paddlewheeler of about 150 passengers. American Cruise Lines also sails Splendor, Pride, and West. These ships stay on U.S. rivers.",
      },
    ],
    lede: "These ships are chosen for the river or the landing, not for the number of restaurants. The luxury ocean ships and the yachts are on their own pages.",
    size: "A river ship is about 150 to 190 passengers. An expedition ship is often 100 to 400.",
    rows: [
      { line: "Lindblad, Quark, Silversea expedition, Ponant", ships: "About 100–400.", where: "Antarctica, the Arctic, and the Galápagos. Weather rewrites the landing list.", fare: "An Antarctica trip of 10 to 14 nights is often $8,000–$20,000 a person. Galápagos weeks are often $6,000–$12,000." },
      { line: "American Cruise Lines paddlewheelers", ships: "American Heritage, Splendor, Pride, and West, about 110–180. Heritage is about 150.", where: "Mississippi, Ohio, Columbia and Snake, and the Great Lakes. The red wheel turns, with modern engines behind it.", fare: "Often $4,500–$8,000 a person for a week." },
      { line: "AmaWaterways, Avalon, Uniworld, Scenic", ships: "About 120–190.", where: "Danube, Rhine, Seine, Douro, and other European rivers.", fare: "Often $3,000–$6,500 a person for a week. Uniworld and Scenic include more drinks. An agent often requests the fare." },
      { line: "American Cruise Lines riverboats", ships: "About 180. Song, Harmony, Jazz, Melody, Symphony, and Serenade.", where: "Mississippi, Ohio, Columbia and Snake, and the Great Lakes.", fare: "Often $4,000–$8,000 a person for a week." },
      { line: "Viking river", ships: "Longships about 190. Viking also has a Mississippi ship.", where: "Danube, Rhine, Seine, Douro, and other European rivers. The Mississippi ship sails the Mississippi.", fare: "The fare for about a week is often $2,500–$5,500 a person, with meals and a daily excursion on most European rivers." },
    ],
    notes: [
      "Do not compare these fares with a Carnival interior. More of the day is already in the price, and the ship cannot carry 5,000 people up the Danube.",
      "Regent, Silversea’s ocean ships, Seabourn, Explora, and the yacht lines are compared on the luxury pages. If a search comes back empty, the line is usually one of those. Send the plans and we will price them.",
    ],
    benefits: [
      {
        title: "A small deck, not a water park",
        text: "A European river ship has a small lounge, a dining room, and a sun deck. An American Cruise Lines paddlewheeler adds the red wheel, a paddlewheel lounge, and open-seating dining. An expedition ship has a lecture room and a place to board the Zodiacs. None of these has a casino district or a wave pool.",
      },
      {
        title: "Meals, and one outing a day",
        text: "On most European river ships the meals and a daily walking tour are in the fare. Bikes, a tasting, or a longer transfer are the paid extras. Uniworld and Scenic include more drinks. Read that list before adding another tour.",
      },
      {
        title: "Landings, not a port schedule",
        text: "On an expedition ship the plan is a landing or a Zodiac ride, run by the ship’s staff. Weather and wildlife can change it. Antarctica and the Galápagos are sold as that uncertainty. A printed list of ports is not a promise.",
      },
      {
        title: "What these ships leave out",
        text: "You see the same people all week. There is no second show if you skip the first one. The fare looks high next to a Caribbean interior because the meals, the guide, and the smaller ship are already in it.",
      },
    ],
  },
  {
    slug: "luxury",
    title: "About 450 to 1,250 passengers",
    card: "Luxury ocean ships",
    image: "/media/ship-seabourn.jpg",
    alt: "Seabourn Ovation at sea",
    photos: [
      {
        src: "/media/ship-seabourn.jpg",
        alt: "Seabourn Ovation, a luxury ship of about 600 passengers, at sea",
        caption: "Seabourn Ovation carries about 600 passengers. Regent’s ships are about 500 to 800.",
      },
      {
        src: "/media/ships/explora.jpg",
        alt: "Explora III, a dark-hulled ship of about 900 guests, seen from above the stern",
        caption: "Explora carries about 900 guests, all in suites. A Caribbean cruise usually starts in one of San Juan or Miami and ends in the other.",
      },
      {
        src: "/media/ships/viking-ocean.jpg",
        alt: "A Viking ocean ship in a Norwegian fjord",
        caption: "A Viking ocean ship carries about 930 guests. The Caribbean cruise starts and ends in San Juan. This photo is the same kind of ship in Norway.",
      },
      {
        src: "/media/ships/silver-shadow.jpg",
        alt: "Silver Shadow, a small white Silversea ship, with a glacier behind it",
        caption: "Silver Shadow carries about 390 guests. Some Caribbean cruises start and end in San Juan. This photo is the same ship in Alaska.",
      },
    ],
    lede: "These lines sail the Caribbean, Alaska, the Mediterranean, and longer routes on ships that stay under about 1,250 passengers. An agent requests most of these fares.",
    size: "These ships run from about 450 passengers to about 1,200. Explora is about 922. Oceania’s larger ships are about 1,200.",
    rows: [
      { line: "Silversea", ships: "Ocean ships about 300–730. Silver Shadow is about 390. Silver Nova and Silver Ray are about 728.", where: "Some Caribbean cruises start and end in San Juan, including Silver Shadow. Others sail one way between Miami and San Juan. Also Alaska, the Mediterranean, longer voyages, and expedition routes. Drinks, a butler, and gratuities are in the fare.", fare: "The fare for about a week is often $6,000–$15,000 a person." },
      { line: "Seabourn", ships: "Ocean ships about 450–650. Venture and Pursuit, the expedition ships, are about 260.", where: "Mediterranean cruises, Caribbean cruises, one-way Alaska cruises from Vancouver, and longer routes. Drinks and gratuities are included.", fare: "The fare for about a week is often $5,000–$12,000 a person." },
      { line: "Regent Seven Seas", ships: "About 500–750. Seven Seas Prestige, about 800, enters service in late 2026.", where: "Caribbean, Alaska, the Mediterranean, and longer voyages. Many shore trips and gratuities are in the fare, and economy air is often included.", fare: "The fare for about a week is often $6,000–$14,000 a person. The fare for a suite, or during a holiday week, is higher." },
      { line: "Oceania", ships: "About 680 on the smaller ships. Marina, Riviera, Vista, and Allura are about 1,200.", where: "Longer cruises with more port days, in Europe, the Caribbean, and elsewhere.", fare: "The fare for about a week is often $3,000–$7,000 a person. Drinks and excursions are often extra. An agent requests the fare on many sailings." },
      { line: "Explora Journeys", ships: "About 922, in about 460 suites. Explora III joined the fleet in 2026.", where: "Caribbean cruises are often one way between San Juan and Miami. They do not start and end in the same city every week. Also the Mediterranean and longer routes. Drinks and gratuities are included.", fare: "The fare for about a week is often $4,000–$10,000 a person." },
      { line: "Viking ocean", ships: "About 930 passengers. No one under 18.", where: "A 10-night Caribbean cruise round trip from San Juan, plus the Mediterranean, the Baltic, Norway, and longer voyages. Wine and beer with lunch and dinner, and one excursion in each port, are included on many sailings.", fare: "Often $3,000–$7,000 a person for 7 to 14 nights. An agent requests many of these fares." },
    ],
    notes: [
      "A luxury fare is not comparable to a Carnival interior. Drinks, gratuities, and sometimes excursions and air are already in the price. The ranges move with the month and the suite.",
      "Alaska luxury sailings are usually one way between Vancouver and Seward, on Silversea or Seabourn, not on a 4,000-passenger ship.",
    ],
    benefits: [
      {
        title: "A pool, not a water park",
        text: "These ships have a pool, a spa, and enough open deck to watch a sail-in. They do not have slides, surf simulators, or a private-island day on the mega-ship scale. The space per person is the amenity.",
      },
      {
        title: "Restaurants, with more included",
        text: "There are several restaurants, not twenty. On Regent, Silversea, Seabourn, and Explora the drinks and gratuities are in the fare. Regent also includes many shore trips, and often economy air. Oceania and Viking include more than a mass-market ship and less than Regent. Specialty dining on Oceania is often extra.",
      },
      {
        title: "A quieter ship, and smaller ports",
        text: "You can learn the names of the people at the next table. The ship can dock in smaller harbors. Staffing is higher. Silversea puts a butler in every suite.",
      },
      {
        title: "What these ships leave out",
        text: "There is no water park and no large kids’ club on most of these ships. An agent requests many of these fares. A family that wants slides and a character breakfast needs a ship that has them.",
      },
    ],
  },
  {
    slug: "yachts",
    title: "About 100 to 450 passengers",
    card: "Yachts",
    image: "/media/ship-ilma.jpg",
    alt: "The stern of Ilma, a Ritz-Carlton yacht, with the marina open",
    photos: [
      {
        src: "/media/ship-ilma.jpg",
        alt: "Ilma, a Ritz-Carlton yacht, seen from the stern with the marina open",
        caption: "Ilma carries about 450 passengers. The marina is at the stern. Four Seasons I is smaller, about 220. SeaDream is about 112.",
      },
      {
        src: "/media/ships/royal-clipper.jpg",
        alt: "Royal Clipper under full sail, with green islands behind the masts",
        caption: "Royal Clipper carries about 227 guests. Star Clipper and Star Flyer carry about 170. These cruises start in an island port, not in Miami or San Juan.",
      },
    ],
    lede: "These are the smallest ocean ships we book. They stop in smaller harbors, and an agent requests almost all of these fares.",
    size: "A yacht in this group carries about 100 to 450 passengers. Windstar’s largest ships are about 340. Four Seasons I carries about 220.",
    rows: [
      { line: "SeaDream", ships: "About 112.", where: "Mediterranean and Caribbean cruises, on two yachts. The ship is informal. It ties up at a marina, and you can swim from the stern.", fare: "The fare for about a week is often $5,000–$12,000 a person." },
      { line: "Windstar", ships: "About 150 on the smallest ships, and about 310–340 on the larger ones.", where: "Mediterranean, Caribbean, Tahiti, and other small-harbor routes.", fare: "The fare for about a week is often $3,000–$7,000 a person. Less is included than on Regent. An agent requests many of these fares." },
      { line: "Four Seasons I", ships: "About 220 guests, in 95 suites. One ship, in service from 2026.", where: "Mediterranean and Caribbean cruises, in short segments as well as longer ones. Drinks are included.", fare: "A short sailing can start near $20,000 a person." },
      { line: "Ritz-Carlton Yacht Collection", ships: "Evrima about 300. Ilma and Luminara about 450.", where: "Mediterranean and Caribbean cruises, and a smaller set of other coasts. Drinks and gratuities are included.", fare: "The fare for about a week is often $8,000–$20,000 a person." },
      { line: "Star Clippers", ships: "Star Clipper and Star Flyer about 170. Royal Clipper about 227. These are sailing ships.", where: "Caribbean cruises start in St. Maarten, Barbados, Antigua, Aruba, or Grenada. They do not start in San Juan or Miami. The ships anchor off small bays. Mediterranean cruises start in ports such as Málaga and Malta. The Caribbean dates run in the winter months. The Mediterranean dates run in the summer months.", fare: "The fare for about a week is often $2,500–$6,000 a person. An agent requests the fare." },
    ],
    notes: [
      "These fares are for the ship. The fare during a holiday week, or for a suite, can be far above that range.",
      "These yachts are not on a public fare list. Send the plans and we will price them.",
    ],
    benefits: [
      {
        title: "The marina, not a pool deck",
        text: "SeaDream, the Ritz-Carlton yachts, and Four Seasons I are built around a marina and the water at the back of the ship. You can swim, use a paddleboard, or take a tender into a small harbor. There is a pool. There is no water park.",
      },
      {
        title: "One dining room, done properly",
        text: "The restaurant list is short. Drinks and gratuities are included on the Ritz-Carlton yachts, Four Seasons I, and SeaDream. Windstar includes less. Most excursions are extra. You will not be choosing among fifteen restaurants.",
      },
      {
        title: "Harbors the large ships skip",
        text: "These ships stop in town, or at anchor close to it. Tahiti on Windstar, and small Mediterranean harbors, are examples. You will know a large share of the other guests by the third day.",
      },
      {
        title: "What these ships leave out",
        text: "No theater lineup, no kids’ water park, and almost no published fare. A week with a show every night, or a cabin under $2,000, belongs on a ship that has those.",
      },
    ],
  },
];

export function linePageBySlug(slug: string) {
  return linePages.find((page) => page.slug === slug);
}

const sizeOrder = ["small", "yachts", "luxury", "alaska", "europe", "caribbean", "large"];

export const linePagesInSizeOrder = sizeOrder
  .map((slug) => linePages.find((page) => page.slug === slug))
  .filter((page): page is LinePage => Boolean(page));
