export type GuideSide = {
  title: string;
  points: { label: string; text: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  lede: string;
  image: string;
  alt: string;
  note: string;
  quotePlace: string;
  sides: GuideSide[];
  related: { href: "/destinations/$slug" | "/ports"; slug?: string; label: string };
};

export const guides: Guide[] = [
  {
    slug: "alaska-seattle-vancouver",
    title: "Alaska cruise from Seattle or Vancouver",
    description:
      "Seattle is the usual departure port for a round-trip Alaska cruise. Vancouver is the usual departure port for a one-way cruise to Seward or Whittier. Sea Fun & Sun, Farmington, Connecticut.",
    lede: "Seattle and Vancouver are departure ports. They are not the cruise. The city you leave from changes the airports, the passport, and whether you come back to the same place.",
    image: "/media/ports/seattle.jpg",
    alt: "The Seattle waterfront, a departure port for Alaska cruises",
    note: "Holland America and Princess sail from Vancouver often. Norwegian, Royal Caribbean, Carnival, Celebrity, Princess, and Holland America sail from Seattle. A past-guest number, or a military discount, belongs on the quote.",
    quotePlace: "Alaskan Cruises",
    related: { href: "/destinations/$slug", slug: "alaskan", label: "Alaska cruises" },
    sides: [
      {
        title: "Seattle",
        points: [
          {
            label: "The cruise",
            text: "A round trip through the Inside Passage, usually seven nights. You board in Seattle and leave the ship in Seattle.",
          },
          {
            label: "Flights",
            text: "One airport. You fly into Seattle and fly home from Seattle.",
          },
          {
            label: "Passport",
            text: "Many of these cruises stop in Victoria, British Columbia. A passport is required for that stop, even though you boarded in the United States.",
          },
          {
            label: "In the city",
            text: "Seattle is a place to stay before the cruise. The ship is at the waterfront. The currency in the city is the US dollar.",
          },
        ],
      },
      {
        title: "Vancouver",
        points: [
          {
            label: "The cruise",
            text: "Often a one-way cruise to Seward or Whittier, across the Gulf of Alaska. Some Inside Passage cruises also start and end here.",
          },
          {
            label: "Flights",
            text: "A one-way cruise needs a second airport. You fly into Vancouver, and you fly home from Anchorage after Seward or Whittier.",
          },
          {
            label: "Passport",
            text: "You are boarding in Canada. A passport is required.",
          },
          {
            label: "In the city",
            text: "A few days in Vancouver sit well before or after the cruise. The Fairmont Pacific Rim looks over the harbor and the mountains. The currency is the Canadian dollar. Order it from your bank, or use a card with no foreign transaction fee.",
          },
        ],
      },
    ],
  },
  {
    slug: "bermuda-northeast",
    title: "Bermuda cruise from Boston, New York, or Baltimore",
    description:
      "Bermuda cruises depart from Boston, New York, and Baltimore. Each one has a sea day on the way there and a sea day on the way back. Sea Fun & Sun, Farmington, Connecticut.",
    lede: "Boston, New York, and Baltimore are the departure ports. Bermuda is the island. The ship still spends a day at sea each way, including from Boston.",
    image: "/media/bermuda.jpg",
    alt: "Pink sand and clear shallow water on a Bermuda beach",
    note: "Royal Caribbean, Carnival, Norwegian, and Celebrity sail these weeks. A cruise from Miami does not routinely include Bermuda. Many ships stay overnight at the Royal Naval Dockyard, on the west end. Horseshoe Bay is about 30 minutes by taxi. Hamilton is about 20 minutes by ferry. St. George's is about an hour by bus. On a short stop, use the excursion sold by the ship if you leave the Dockyard. If that tour is late, the ship waits.",
    quotePlace: "Bermuda Cruises",
    related: { href: "/destinations/$slug", slug: "bermuda", label: "Bermuda cruises" },
    sides: [
      {
        title: "Boston",
        points: [
          {
            label: "The cruise",
            text: "A Bermuda cruise of about seven nights. You board in Boston and leave the ship in Boston.",
          },
          {
            label: "The days at sea",
            text: "There is still a sea day on the way to Bermuda and a sea day on the way back. Boston is closer than Baltimore. It does not remove those days.",
          },
          {
            label: "Flights",
            text: "JetBlue, Delta, American, and United fly Boston. If you live in New England, you may not need a flight at all.",
          },
        ],
      },
      {
        title: "New York and Baltimore",
        points: [
          {
            label: "New York",
            text: "Ships depart from Manhattan, and Royal Caribbean departs from Cape Liberty in Bayonne, New Jersey. The cruise is about seven nights, with a sea day each way.",
          },
          {
            label: "Baltimore",
            text: "The same pattern: Bermuda, a sea day each way, and a return to Baltimore. Southwest has the most flights into BWI.",
          },
          {
            label: "Which one",
            text: "Pick the airport you can use without a connection. The island days are the same. The difference is the city you leave from and the length of the sea days.",
          },
        ],
      },
    ],
  },
  {
    slug: "panama-transit",
    title: "Panama Canal full transit or partial transit",
    description:
      "A full Panama Canal transit goes from one ocean to the other. A partial transit enters Gatun Lake and comes back out the same locks. Sea Fun & Sun, Farmington, Connecticut.",
    lede: "Both cruises use the canal. Only a full transit leaves one ocean and arrives in the other. A partial transit enters from the Caribbean, crosses Gatun Lake, and comes back out the same locks.",
    image: "/media/panama-canal.jpg",
    alt: "A ship in the Panama Canal",
    note: "These are recent published ranges on Princess, Holland America, and Celebrity, for two people in a cabin. Taxes and port fees can add a few hundred dollars. Drinks, gratuities, and Wi-Fi are extra on most of these ships unless the fare says they are included. Regent, Silversea, and Viking ocean cost more, and an agent requests those fares. Most of these cruises run in spring and fall.",
    quotePlace: "Panama Canal Cruises",
    related: { href: "/destinations/$slug", slug: "panama-canal", label: "Panama Canal cruises" },
    sides: [
      {
        title: "Full transit",
        points: [
          {
            label: "Direction",
            text: "One way, Atlantic to Pacific, or the reverse. The ship passes every lock and the Culebra Cut.",
          },
          {
            label: "Start and finish",
            text: "You board in one city and leave the ship in another. Florida to California is the common pair. Some cruises start in Seattle or Vancouver and end in Florida.",
          },
          {
            label: "Length",
            text: "Usually 14 to 17 nights. A voyage that also includes Mexico, or the move toward an Alaska season, runs longer.",
          },
          {
            label: "Flights",
            text: "Two airports. The flight home does not leave from the city where you boarded.",
          },
          {
            label: "What you see",
            text: "Both sets of locks, the lake, and the cut. Cartagena is a common stop. The Pacific side often adds a Mexican or Central American port.",
          },
          {
            label: "Cruise fare",
            text: "An interior cabin is often about $1,200–$2,200 per person for 14 to 17 nights. A balcony is often about $2,200–$4,000. A sale can put an interior near $1,000. That is the cruise only.",
          },
        ],
      },
      {
        title: "Partial transit",
        points: [
          {
            label: "Direction",
            text: "A round trip. The ship uses the Caribbean locks, spends time on Gatun Lake, and comes back out the same side.",
          },
          {
            label: "Start and finish",
            text: "You return to the port where you boarded, usually Fort Lauderdale or Miami.",
          },
          {
            label: "Length",
            text: "Often 10 or 11 nights. It is still longer than a Caribbean cruise of seven nights.",
          },
          {
            label: "Flights",
            text: "One airport. The flight out and the flight home use the same city.",
          },
          {
            label: "What you see",
            text: "The Caribbean locks and the lake. You do not pass the Culebra Cut or the Pacific locks. The other days are often Cartagena or a Caribbean stop.",
          },
          {
            label: "Cruise fare",
            text: "An interior cabin is often about $800–$1,800 per person for 10 to 12 nights. A balcony is often about $1,500–$3,000. The flight back to Florida is booked separately.",
          },
        ],
      },
    ],
  },
];

export function guideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
