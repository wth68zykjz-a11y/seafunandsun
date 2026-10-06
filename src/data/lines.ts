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
    title: "Ships over 3,000 passengers",
    card: "The large ships",
    image: "/media/ship-symphony.jpg",
    alt: "Symphony of the Seas, an Oasis-class ship, at sea",
    photos: [
      {
        src: "/media/ship-symphony.jpg",
        alt: "Symphony of the Seas, an Oasis-class ship, at sea",
        caption: "Symphony of the Seas. An Oasis-class ship carries about 5,600 to 6,700 passengers. Icon-class ships are larger.",
      },
    ],
    lede: "Only a handful of lines sail ships this large. They turn in Florida for a Caribbean cruise, and some of them spend a season on a Mediterranean cruise. They do not sail river cruises, and the newest 6,000-passenger ships do not sail an Alaska cruise.",
    size: "Passenger counts are the line’s double-occupancy figure. Icon-class ships are about 5,600 to 7,600. Oasis-class ships are about 5,600 to 6,700.",
    rows: [
      { line: "Royal Caribbean", ships: "Icon class about 5,600–7,600. Oasis class about 5,600–6,700. Quantum class about 4,100–4,900. Freedom and Voyager classes about 3,100–4,300.", where: "Short Caribbean cruises from Florida. Some Oasis-class ships do a Mediterranean season. Quantum-class ships sail an Alaska cruise from Seattle. Icon and Oasis class do not sail an Alaska cruise.", fare: "Interior often $500–$1,400. Balcony often $900–$2,400. A holiday week can be well above that." },
      { line: "Carnival", ships: "Excel class, including Mardi Gras and the newer sisters, about 5,200–6,500. Vista class about 4,000.", where: "Florida and other East Coast ports for the Caribbean and the Bahamas. A smaller European season.", fare: "Interior often $400–$1,100. Balcony often $800–$1,800." },
      { line: "MSC", ships: "World class about 6,700. Meraviglia class about 4,500–6,300. Seaside class about 4,100–5,400.", where: "Miami and Port Canaveral for the Caribbean. Barcelona, Rome, and other Mediterranean turns in summer.", fare: "Interior often $400–$1,100. Balcony often $800–$1,900. Drinks and gratuities are sometimes bundled." },
      { line: "Norwegian", ships: "Encore and Breakaway classes about 4,000. Prima class about 3,100–3,600.", where: "Florida and the Northeast for a Caribbean cruise. Encore-class ships also sail an Alaska cruise from Seattle. Prima-class ships sail a European cruise.", fare: "Interior often $500–$1,300. Balcony often $900–$2,200." },
      { line: "Disney", ships: "Wish class and Dream class, about 4,000.", where: "Port Canaveral for most Caribbean weeks. Wish-class ships also do Europe in some seasons.", fare: "A week is often $2,000–$4,500 a person. The fare is not comparable to Carnival’s." },
      { line: "Princess", ships: "Sphere class, including Sun Princess, about 4,300. Royal class about 3,560.", where: "Caribbean and Mediterranean cruises. These ships do not sail an Alaska cruise.", fare: "Balcony often $1,200–$2,600." },
      { line: "Celebrity", ships: "Edge class about 3,200.", where: "Caribbean, the Mediterranean, and some Alaska seasons.", fare: "Balcony often $1,300–$2,800." },
    ],
    notes: [
      "Costa also sails ships of this size in Europe. Ask if that itinerary is the one you want.",
      "A Northeast departure on one of these ships adds sea days. The ship can be the same size. The week is not.",
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
        text: "The theater, the kids’ club, a sports court, and a casino are on these ships. A day at sea is the resort, not a day spent waiting for port.",
      },
      {
        title: "What these ships leave out",
        text: "Getting off takes longer, some harbors cannot take a ship this size, and you will not know the other passengers.",
      },
    ],
  },
  {
    slug: "caribbean",
    title: "Caribbean and Bermuda",
    card: "The largest ships",
    image: "/media/caribbean.jpg",
    alt: "Turquoise water and a Caribbean beach",
    photos: [
      {
        src: "/media/ship-symphony.jpg",
        alt: "Symphony of the Seas, a large ship used on Caribbean weeks",
        caption: "A Florida week often uses a ship this size. Bermuda weeks are usually smaller, about 2,000 to 4,000 passengers.",
      },
    ],
    lede: "A week from Florida is where the biggest ships sail. Bermuda sailings from the Northeast are usually smaller, and the ship stays longer because Bermuda is the destination.",
    size: "The ships that turn in Miami, Fort Lauderdale, and Port Canaveral are often 4,000 to about 7,000 passengers. Bermuda and many of the smaller-island weeks use ships of about 2,000 to 4,000.",
    rows: [
      { line: "Royal Caribbean", ships: "Oasis and Icon classes about 5,600–7,600. Freedom and Voyager classes about 3,100–4,300.", where: "Short Caribbean weeks from Florida, and some longer ones from the Northeast.", fare: "Interior often $500–$1,400. Balcony often $900–$2,400. A holiday week can be well above that." },
      { line: "Carnival", ships: "Excel class (Mardi Gras and newer) about 5,200–6,500. Older Fantasy and Spirit ships about 2,100–2,600.", where: "Florida, and some Bahamas and Caribbean weeks from other East Coast ports.", fare: "Interior often $400–$1,100. Balcony often $800–$1,800." },
      { line: "Norwegian", ships: "Encore and Breakaway classes about 4,000. Prima class about 3,100. Older Jewel-class ships about 2,400.", where: "Florida and the Northeast. Private-island days are common on the short weeks.", fare: "Interior often $500–$1,300. Balcony often $900–$2,200." },
      { line: "MSC", ships: "World class about 6,700. Seaside class about 4,100. Smaller ships about 2,500–3,200.", where: "Miami and Port Canaveral for the Caribbean. Also the Mediterranean, on the Europe page.", fare: "Interior often $400–$1,100. Balcony often $800–$1,900. Drinks and gratuities are sometimes bundled, sometimes not." },
      { line: "Disney", ships: "Wish class about 4,000. Dream and Fantasy about 4,000. Magic and Wonder about 2,700.", where: "Port Canaveral for most Caribbean weeks. Wonder also does Alaska, on that page.", fare: "A week is often $2,000–$4,500 a person. Peak school holidays sit higher. The fare is not comparable to Carnival’s." },
      { line: "Celebrity", ships: "Edge class about 3,200. Solstice class about 2,850. Older Millennium ships about 2,000.", where: "Fort Lauderdale and shorter island weeks. Also Europe and Alaska.", fare: "Balcony often $1,300–$2,800." },
      { line: "Princess", ships: "Sun and Sphere classes about 3,500–4,300. Older Grand-class ships about 2,600.", where: "Fort Lauderdale and some longer Caribbean routes. The larger new ships are not the Alaska fleet.", fare: "Balcony often $1,200–$2,600." },
      { line: "Holland America", ships: "Pinnacle class about 2,650. Older ships about 1,400–1,900.", where: "Fewer Caribbean weeks than the lines above. More of the fleet is in Alaska and longer voyages.", fare: "Balcony often $1,300–$2,600." },
    ],
    notes: [
      "Bermuda weeks from New York, Boston, or Baltimore are usually 5 to 7 nights on ships of about 2,000 to 4,000 passengers. The useful ones stay in port long enough to see the island.",
      "A Northeast departure to the Caribbean adds sea days. The ship can be the same size. The week is not.",
    ],
    benefits: [
      {
        title: "Pools, water parks, and a private island",
        text: "The Florida ships are the ones with several pools and, on Royal Caribbean, Carnival’s Excel class, and MSC’s largest ships, a water park. Many of those weeks also stop at the line’s own beach: Perfect Day at CocoCay, Celebration Key, Ocean Cay, Great Stirrup Cay, or Castaway Cay. That day is a beach, not a port city. Holland America and Celebrity do not have that water park or that island.",
      },
      {
        title: "Restaurants",
        text: "The main dining room and the buffet are in the fare. Specialty rooms are usually extra. A ship of 4,000 passengers needs more than one restaurant, so the list is long. On a 2,000-passenger ship the list is shorter and the rooms are less crowded.",
      },
      {
        title: "Short island days",
        text: "A typical day in port is morning to late afternoon. One plan is enough: a beach, a reef, or a town. The ship is the rest of the day. Bermuda is the exception. Those sailings usually stay long enough to see the island, and the ships are smaller.",
      },
      {
        title: "What these ships leave out",
        text: "A week from the Northeast on the same size ship spends more nights at sea. A water park does not remove those sea days. If you want a quiet ship, or a harbor the large ships cannot enter, look at the luxury and yacht pages.",
      },
    ],
  },
  {
    slug: "alaska",
    title: "Alaska and Hawaii",
    card: "Mid-size ships",
    image: "/media/ship-alaska.jpg",
    alt: "A mid-size cruise ship in a narrow Alaskan channel",
    photos: [
      {
        src: "/media/ship-alaska.jpg",
        alt: "A mid-size cruise ship in a narrow Alaskan channel, with mountains behind",
        caption: "Alaska ships are about 1,800 to 4,200 passengers, small enough for a narrow channel. The 6,000-passenger ships do not sail here.",
      },
    ],
    lede: "The 6,000-passenger ships do not sail an Alaska cruise. Seattle is the departure port for a round-trip cruise through the Inside Passage. Vancouver is the Canadian departure port, often for a one-way cruise to Seward or Whittier.",
    size: "Most Alaska ships carry about 1,800 to 4,200 passengers. Hawaii’s inter-island ship is smaller. The longer Hawaii sailings from California are mid-size.",
    rows: [
      { line: "Holland America", ships: "About 1,400–2,650.", where: "Seattle round trips, and one-way sailings between Vancouver and Whittier or Seward. A regular Glacier Bay line.", fare: "Balcony, 7 nights, often $1,600–$3,200. A 10- to 14-night one-way is often $2,400–$5,000." },
      { line: "Princess", ships: "About 2,000–3,600 on the ships that sail an Alaska cruise. The newest 4,000-passenger ships stay in other regions.", where: "Seattle, and a one-way cruise from Vancouver to Whittier on the Voyage of the Glaciers.", fare: "Balcony, 7 nights, often $1,500–$3,200." },
      { line: "Celebrity", ships: "Solstice class about 2,850. Edge class about 3,200 when that ship is assigned here.", where: "Seattle, and Vancouver one-ways to Seward on ships such as Solstice.", fare: "Balcony, 7 nights, often $1,400–$3,000." },
      { line: "Royal Caribbean", ships: "Quantum class (Ovation, Anthem, and similar) about 4,100–4,900 from Seattle. Radiance and Serenade about 2,100, including Vancouver.", where: "Inside Passage round-trip cruises, and some one-way cruises to Seward. Oasis and Icon class ships do not sail an Alaska cruise.", fare: "Balcony, 7 nights, often $1,200–$2,800." },
      { line: "Norwegian", ships: "Encore and Bliss about 4,000, mostly from Seattle. Fewer Vancouver sailings.", where: "Inside Passage cruises from Seattle. A smaller set of coastal cruises from Vancouver.", fare: "Balcony, 7 nights, often $1,200–$2,800." },
      { line: "Carnival", ships: "About 2,100–4,000, from Seattle rather than Vancouver.", where: "Inside Passage round trips.", fare: "Balcony, 7 nights, often $900–$2,200." },
      { line: "Disney", ships: "Disney Wonder, about 2,700.", where: "Alaska round trips, including some from Vancouver.", fare: "Often $3,000–$6,000 a person for a week." },
      { line: "Silversea and Seabourn", ships: "About 450–600 on the Alaska ships.", where: "One-way between Vancouver and Seward, and a smaller set of coastal weeks.", fare: "Often $6,000–$14,000 a person for 7 nights. More is included than on the lines above. Many of these are quoted." },
      { line: "Norwegian, Pride of America", ships: "About 2,200.", where: "Honolulu, inter-island, year-round. This is not an Alaska ship.", fare: "A week is often $1,200–$2,800. A Hawaii sailing from California on Holland America, Princess, or Celebrity is a different trip and usually longer." },
    ],
    notes: [
      "A Vancouver embarkation needs a passport. Prices in the city are in Canadian dollars. If you stay a few days before or after the cruise, the ship is not counting you back. You can walk the harbor in the daytime or after dark, talk with people, and eat where you want, such as a seafood counter on the water at lunch or a quieter dining room in the evening.",
      "The ship and the ports can match in May and in August. What you see still changes. In May the tidewater glaciers are larger, because less of the winter ice has melted, and the weather is colder. In August the salmon are running and the bears are on the rivers to feed.",
    ],
    benefits: [
      {
        title: "Glaciers and wildlife",
        text: "Glacier days, whale water, and long evenings are why these ships are here. There is no water park on an Alaska sailing that matches Icon of the Seas. Norwegian’s larger Seattle ships and Royal Caribbean’s Quantum class still have pools, slides, and a show. Holland America and Princess put more of the ship into lectures, naturalists, and the viewing decks.",
      },
      {
        title: "Restaurants",
        text: "The dining room is in the fare. Specialty rooms are usually extra, and there are fewer of them than on a Caribbean mega-ship. On Silversea and Seabourn the drinks, and more of the dining, are already in the price.",
      },
      {
        title: "Time in port, and time on deck",
        text: "Most stops last about six to eight hours. Juneau, Skagway, and Ketchikan are the walking ports. A glacier day may not include a landing at all. Bring a warm layer. The pools are open, and the weather does not always agree.",
      },
      {
        title: "What these ships leave out",
        text: "You do not get the newest 6,000-passenger ships, or their water parks. A one-way to Seward or Whittier shows more of the Gulf and needs a flight at one end. A Seattle round trip is one airport. Hawaii’s Pride of America is a different week: the islands, overnight, and no glaciers.",
      },
    ],
  },
  {
    slug: "europe",
    title: "Mediterranean and northern Europe",
    card: "A mix of sizes",
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
    lede: "Western Mediterranean weeks from Barcelona, Rome, and Athens can be on very large ships. The Greek islands, the Baltic, and Norway are more often mid-size. Large ships do not embark in the Venice lagoon.",
    size: "Barcelona and Civitavecchia (Rome) regularly see ships of 4,000 to 6,000 passengers. Norway, the Baltic, and many Greek-island weeks are about 1,500 to 3,500.",
    rows: [
      { line: "MSC", ships: "Often 4,000–6,700 in the western Mediterranean. Smaller ships on some eastern routes.", where: "Barcelona, Rome, and Athens.", fare: "Balcony, 7 nights, often $900–$2,200. August is the high end." },
      { line: "Royal Caribbean", ships: "Oasis-class ships of about 5,600 do some western Mediterranean seasons. Other weeks are 3,000–4,500.", where: "Barcelona and Rome more than the small Greek ports.", fare: "Balcony, 7 nights, often $1,100–$2,600." },
      { line: "Norwegian and Carnival", ships: "About 2,400–4,000.", where: "Western Mediterranean from Barcelona or Rome. Carnival’s European season is smaller than its Caribbean season.", fare: "Balcony, 7 nights, often $900–$2,200." },
      { line: "Celebrity", ships: "Edge class about 3,200. Solstice class about 2,850.", where: "Mediterranean and Greek islands. Also northern Europe in some summers.", fare: "Balcony, 7 nights, often $1,500–$3,200." },
      { line: "Princess and Holland America", ships: "About 1,900–3,600.", where: "Mediterranean, the British Isles, the Baltic, and Norway.", fare: "Balcony, 7 nights, often $1,500–$3,400." },
      { line: "Cunard", ships: "Queen Mary 2 about 2,700. Queen Elizabeth and Queen Anne about 2,000–3,000.", where: "Southampton for the Atlantic crossing, Norway, and northern Europe. Not a weekly Mediterranean ferry.", fare: "A 7-night crossing or a northern Europe week is often $1,500–$4,000 a person. Suites are quoted." },
    ],
    notes: [
      "Luxury ships in these same ports are a different size and a different fare. They are on the luxury ocean and yacht pages.",
      "River ships carry about 150 to 190 passengers and start in cities such as Budapest, Amsterdam, and Basel. See the river and expedition page.",
      "July and August fares in the Mediterranean are not the May or October fares.",
    ],
    benefits: [
      {
        title: "Pools on the large ships, decks on the smaller ones",
        text: "A western Mediterranean week from Barcelona or Rome can be on a ship with several pools and a long list of restaurants. Norway, the Baltic, and many Greek-island weeks use smaller ships. Those have a pool and a show. They do not have a water park, and they can dock in harbors the large ships miss.",
      },
      {
        title: "Restaurants",
        text: "The main dining room is in the fare. Specialty dining is usually extra on MSC, Royal Caribbean, Norwegian, and Carnival. Celebrity, Princess, and Holland America have fewer rooms and a quieter dining room. Cunard still has a more formal evening on the Queens.",
      },
      {
        title: "The port is a city",
        text: "These are walking days. The useful day starts early, before the heat and the crowds. A large ship tendering into a small harbor spends the first hour just getting people ashore. Large ships do not embark in the Venice lagoon.",
      },
      {
        title: "What these ships leave out",
        text: "July and August are hot in the Mediterranean, and the ships are full. A quieter week is May, June, or September, often on a smaller ship. The luxury and yacht pages are the ones that trade the water park for a harbor in the middle of town.",
      },
    ],
  },
  {
    slug: "small",
    title: "River and expedition ships",
    card: "About 100 to 400 passengers",
    image: "/media/ship-river.jpg",
    alt: "Viking river ships tied along a European river",
    photos: [
      {
        src: "/media/ship-river.jpg",
        alt: "Three Viking river ships tied along a European river",
        caption: "A European river ship is long and low, and carries about 150 to 190 passengers. It is not an ocean ship.",
      },
      {
        src: "/media/ship-heritage.jpg",
        alt: "American Heritage, an American Cruise Lines paddlewheeler, on a river",
        caption: "American Heritage, a paddlewheeler of about 150 passengers. American Cruise Lines also sails Splendor, Pride, and West. These ships stay on U.S. rivers.",
      },
    ],
    lede: "These ships are chosen for the river or the landing, not for the number of restaurants. The luxury ocean ships and the yachts are on their own pages.",
    size: "A European river ship is about 150 to 190 passengers. An expedition ship is often 100 to 400.",
    rows: [
      { line: "Viking river", ships: "Longships about 190.", where: "Danube, Rhine, Seine, Douro, and other European rivers. Viking also has a Mississippi ship. That is not a European product.", fare: "A week is often $2,500–$5,500 a person, with meals and a daily excursion on most European rivers." },
      { line: "AmaWaterways, Avalon, Uniworld, Scenic", ships: "About 120–190.", where: "The same European rivers. American Cruise Lines does not sail them.", fare: "Often $3,000–$6,500 a person for a week. Uniworld and Scenic include more drinks. The fare is often quoted." },
      { line: "American Cruise Lines riverboats", ships: "About 180. Song, Harmony, Jazz, Melody, Symphony, and Serenade.", where: "U.S. rivers only: Mississippi, Ohio, Columbia and Snake, and the Great Lakes. These are the modern boats, not the paddlewheelers.", fare: "Often $4,000–$8,000 a person for a week. Quoted." },
      { line: "American Cruise Lines paddlewheelers", ships: "American Heritage, Splendor, Pride, and West, about 110–180. Heritage is about 150.", where: "The same U.S. rivers. The red wheel turns, with modern engines behind it. Not Europe. The American Queen boats were a different line, and they are no longer sailing.", fare: "Often $4,500–$8,000 a person for a week. Quoted." },
      { line: "Lindblad, Quark, Silversea expedition, Ponant", ships: "About 100–400.", where: "Antarctica, the Arctic, and the Galápagos. Weather rewrites the landing list.", fare: "An Antarctica trip of 10 to 14 nights is often $8,000–$20,000 a person. Galápagos weeks are often $6,000–$12,000. Quoted." },
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
        text: "On an expedition ship the day’s plan is a landing or a Zodiac ride, run by the ship’s staff. Weather and wildlife can change it. Antarctica and the Galápagos are sold as that uncertainty. A printed list of ports is not a promise.",
      },
      {
        title: "What these ships leave out",
        text: "You see the same people all week. There is no second show if you skip the first one. The fare looks high next to a Caribbean interior because the meals, the guide, and the smaller ship are already in it.",
      },
    ],
  },
  {
    slug: "luxury",
    title: "Luxury ocean ships",
    card: "About 450 to 1,250 passengers",
    image: "/media/ship-seabourn.jpg",
    alt: "Seabourn Ovation at sea",
    photos: [
      {
        src: "/media/ship-seabourn.jpg",
        alt: "Seabourn Ovation, a luxury ship of about 600 passengers, at sea",
        caption: "Seabourn Ovation carries about 600 passengers. Regent’s ships are about 500 to 800. Explora is about 922. None of these is a 5,000-passenger ship.",
      },
    ],
    lede: "These lines sail the Caribbean, Alaska, the Mediterranean, and longer routes on ships that stay under about 1,250 passengers. Most do not publish a fare you can book yourself.",
    size: "These ships run from about 450 passengers to about 1,200. Explora is about 922. Oceania’s larger ships are about 1,200. None of them is a 5,000-passenger ship.",
    rows: [
      { line: "Regent Seven Seas", ships: "About 500–750. Seven Seas Prestige, about 800, enters service in late 2026.", where: "Caribbean, Alaska, the Mediterranean, and longer voyages. Many shore trips and gratuities are in the fare, and economy air is often included.", fare: "A week is often $6,000–$14,000 a person. Suites and holiday weeks sit higher. Quoted." },
      { line: "Silversea", ships: "Ocean ships about 300–730. Silver Nova and Silver Ray are about 728. Expedition ships are smaller and are on the river and expedition page.", where: "The same oceans as Regent, plus expedition routes. Drinks, a butler, and gratuities are in the fare.", fare: "A week is often $6,000–$15,000 a person. Quoted." },
      { line: "Seabourn", ships: "Ocean ships about 450–650. Venture and Pursuit, the expedition ships, are about 260.", where: "Mediterranean, Caribbean, Alaska one-ways from Vancouver, and longer routes. Drinks and gratuities are included. Air is not.", fare: "A week is often $5,000–$12,000 a person. Quoted." },
      { line: "Explora Journeys", ships: "About 922, in about 460 suites. Explora III joined the fleet in 2026.", where: "Mediterranean, Caribbean, and longer ocean routes. Drinks and gratuities are included. Most excursions are not.", fare: "A week is often $4,000–$10,000 a person. Quoted." },
      { line: "Viking ocean", ships: "About 930. These are not the Viking river ships.", where: "Mediterranean, the Baltic, Norway, and longer voyages. Drinks and a daily excursion are included on many sailings. Shore trips are not included the way Regent includes them.", fare: "Often $3,000–$7,000 a person for 7 to 14 nights. Many sailings are quoted." },
      { line: "Oceania", ships: "About 680 on the smaller ships. Marina, Riviera, Vista, and Allura are about 1,200.", where: "Longer, port-heavy routes in Europe, the Caribbean, and elsewhere. This is a smaller premium ship, not an all-suite yacht.", fare: "A week is often $3,000–$7,000 a person. Drinks and excursions are often extra. Quoted on many sailings." },
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
        text: "You can learn the names of the people at the next table. The ship can dock in harbors that a 5,000-passenger ship tenders to, or skips. Staffing is higher. Silversea puts a butler in every suite. The others do not all do that.",
      },
      {
        title: "What these ships leave out",
        text: "There is no water park, no large kids’ club on most of these ships, and no fare you can grab from a public search on many sailings. A family that wants slides and a character breakfast wants a different ship.",
      },
    ],
  },
  {
    slug: "yachts",
    title: "Yacht ships",
    card: "About 100 to 450 passengers",
    image: "/media/ship-ilma.jpg",
    alt: "The stern of Ilma, a Ritz-Carlton yacht, with the marina open",
    photos: [
      {
        src: "/media/ship-ilma.jpg",
        alt: "Ilma, a Ritz-Carlton yacht, seen from the stern with the marina open",
        caption: "Ilma carries about 450 passengers. The marina is at the stern. Four Seasons I is smaller, about 220. SeaDream is about 112.",
      },
    ],
    lede: "These are the smallest ships we book on the ocean. They stop in harbors the large ships do not enter. Almost all of them are quoted.",
    size: "A yacht in this group carries about 100 to 450 passengers. Windstar’s largest ships are about 340. Four Seasons I carries about 220.",
    rows: [
      { line: "Ritz-Carlton Yacht Collection", ships: "Evrima about 300. Ilma and Luminara about 450.", where: "Mediterranean, Caribbean, and a smaller set of other coasts. Drinks and gratuities are included. Most excursions are not.", fare: "A week is often $8,000–$20,000 a person. Quoted." },
      { line: "Four Seasons I", ships: "About 220 guests, in 95 suites. One ship, in service from 2026.", where: "Mediterranean and Caribbean weeks, in short segments as well as longer ones. Drinks are included.", fare: "Higher than the lines above. A short sailing can start near $20,000 a person. Quoted." },
      { line: "Windstar", ships: "About 150 on the smallest ships, and about 310–340 on the larger ones.", where: "Mediterranean, Caribbean, Tahiti, and other small-port routes. Not a river line.", fare: "A week is often $3,000–$7,000 a person. Less is included than on Regent. Many sailings are quoted." },
      { line: "SeaDream", ships: "About 112.", where: "Mediterranean and Caribbean, on two yachts. The week is informal, and the marina is part of the day.", fare: "A week is often $5,000–$12,000 a person. Quoted." },
    ],
    notes: [
      "These fares are for the ship. A holiday week, or a suite, can be far above the range.",
      "If the public search does not list the yacht, that is normal. Send the plans and we will price them.",
    ],
    benefits: [
      {
        title: "The marina, not a pool deck",
        text: "SeaDream, the Ritz-Carlton yachts, and Four Seasons I are built around a marina and the water at the back of the ship. Swimming, paddleboards, and a tender into a small harbor are the day. There is a pool. There is no water park.",
      },
      {
        title: "One dining room, done properly",
        text: "The restaurant list is short. Drinks and gratuities are included on the Ritz-Carlton yachts, Four Seasons I, and SeaDream. Windstar includes less. Most excursions are extra. You will not be choosing among fifteen restaurants.",
      },
      {
        title: "Harbors the large ships skip",
        text: "These ships stop in town, or at anchor close to it. A large ship skips many of those harbors. Tahiti on Windstar, and small Mediterranean harbors, are examples. You will know a large share of the other guests by the third day.",
      },
      {
        title: "What these ships leave out",
        text: "No theater lineup, no kids’ water park, and almost no published fare. A week that needs a show every night, or a cabin under $2,000, is a different ship.",
      },
    ],
  },
];

export function linePageBySlug(slug: string) {
  return linePages.find((page) => page.slug === slug);
}
