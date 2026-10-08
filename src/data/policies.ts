export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type PolicySection = { heading: string; blocks: PolicyBlock[] };

export type PolicyDoc = {
  slug: "terms" | "refund" | "privacy";
  title: string;
  dek: string;
  meta: string;
  sections: PolicySection[];
};

export const policies: PolicyDoc[] = [
  {
    slug: "terms",
    title: "Terms & Conditions",
    dek: "How a booking works, who is responsible for what, and the terms.",
    meta: "Sea Fun & Sun · Farmington, Connecticut · Effective: August 21, 2026",
    sections: [
      {
        heading: "Agreement",
        blocks: [
          {
            type: "p",
            text: 'These Terms & Conditions ("Terms") govern your use of the services provided by Sea Fun & Sun ("we," "us," or "our"). By requesting a quote, making a booking, or otherwise using our services, you agree to these Terms on behalf of yourself and every traveler on your booking.',
          },
        ],
      },
      {
        heading: "1. Who We Are",
        blocks: [
          {
            type: "p",
            text: 'Sea Fun & Sun is a travel agency based in Farmington, Connecticut. We provide travel planning and booking services, including cruises, airfare, hotels, tours, group travel, and related travel products (together, "Travel").',
          },
        ],
      },
      {
        heading: "2. Agency Relationship",
        blocks: [
          {
            type: "p",
            text: "We act solely as an independent agent. All bookings are made on your behalf with third-party suppliers — including cruise lines, airlines, hotels, and tour operators. The contract for your travel is formed directly between you and the supplier. We are not a carrier, cruise line, hotel, tour operator, or insurer, and we are not responsible for the products, services, pricing, policies, or performance of any supplier.",
          },
        ],
      },
      {
        heading: "3. Bookings & Confirmations",
        blocks: [
          {
            type: "p",
            text: "All bookings are subject to supplier availability, acceptance, and published rules. We use reasonable efforts to keep itineraries, prices, and details accurate, but we do not guarantee the availability of any fare, cabin, stateroom, room, or service, and prices and inclusions may change without notice. A booking is not confirmed until the supplier issues a confirmation. Any discrepancy discovered after confirmation will be resolved with the supplier as fairly and promptly as possible.",
          },
        ],
      },
      {
        heading: "4. Payments",
        blocks: [
          {
            type: "p",
            text: "You pay suppliers directly — through our booking platform or the supplier's own channels. We never hold customer funds. No agent fee or service charge is added to your booking; our commission is paid by the supplier and is built into the published fare.",
          },
        ],
      },
      {
        heading: "5. Changes, Cancellations & Refunds",
        blocks: [
          {
            type: "p",
            text: "All changes, cancellations, and refunds are governed by the applicable supplier's fare rules and policies in effect at the time of purchase. Your refund options depend on the type of fare, room, or flight selected and on when your change is made. Please read our Refund Policy. We will assist you with change and cancellation requests, but we cannot override supplier rules.",
          },
        ],
      },
      {
        heading: "6. Travel Insurance",
        blocks: [
          {
            type: "p",
            text: "Travel insurance products may be offered for your convenience and are underwritten and issued by third-party insurers. We are not an insurance provider and do not guarantee, endorse, or control coverage. Whether a claim is approved is determined solely by the insurer under the terms of the policy, including its exclusions, conditions, and deadlines.",
          },
        ],
      },
      {
        heading: "7. Group Travel",
        blocks: [
          {
            type: "p",
            text: "Group bookings are subject to the applicable supplier's group terms, which typically include minimum party sizes, deposit schedules, and registration deadlines. Group rates, inclusions, and availability are subject to supplier confirmation and may change before final booking.",
          },
        ],
      },
      {
        heading: "8. Traveler Responsibilities",
        blocks: [
          { type: "p", text: "Each traveler is responsible for:" },
          {
            type: "ul",
            items: [
              "holding valid passports, visas, and any other documents required for entry into and transit through every destination;",
              "meeting supplier age, health, and fitness requirements;",
              "monitoring government travel advisories and health requirements before departure;",
              "arriving at the port, airport, or venue on time and in accordance with supplier instructions;",
              "providing accurate personal information for all bookings.",
            ],
          },
        ],
      },
      {
        heading: "9. Personal Information",
        blocks: [
          {
            type: "p",
            text: "Information you provide is used to plan and book your travel and to communicate with you about it. We share information with suppliers and service providers as necessary to complete your booking. We do not sell your personal information.",
          },
        ],
      },
      {
        heading: "10. Third-Party Platforms & Links",
        blocks: [
          {
            type: "p",
            text: "Bookings are processed through third-party booking platforms (such as Outside Agents) and supplier websites. We do not control the content or operation of third-party sites and accept no responsibility for them.",
          },
        ],
      },
      {
        heading: "11. Limitation of Liability",
        blocks: [
          {
            type: "p",
            text: "To the maximum extent permitted by law, we shall not be liable for any loss or damage arising from: the acts or omissions of suppliers or other third parties; cancellations, delays, or interruptions to any part of your travel; changes to itineraries, schedules, or inclusions; loss of use, inconvenience, or personal injury or property damage caused by a supplier's products or services; or any indirect, incidental, or consequential damages. Our total aggregate liability for any claim connected with our services shall not exceed the total commission we received in connection with the booking giving rise to the claim. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.",
          },
        ],
      },
      {
        heading: "12. No Partnership",
        blocks: [
          {
            type: "p",
            text: "Nothing in these Terms or in our services creates a partnership, joint venture, or employment relationship between you and us, or between us and any supplier.",
          },
        ],
      },
      {
        heading: "13. Acceptable Use",
        blocks: [
          {
            type: "p",
            text: "Our services may not be used for any unlawful purpose or in any way that infringes the rights of others.",
          },
        ],
      },
      {
        heading: "14. Changes to These Terms",
        blocks: [
          {
            type: "p",
            text: "We may update these Terms from time to time. The effective date above reflects the latest revision. Continued use of our services after a revision constitutes acceptance of the updated Terms.",
          },
        ],
      },
      {
        heading: "15. Governing Law & Venue",
        blocks: [
          {
            type: "p",
            text: "These Terms are governed by the laws of the State of Connecticut, without regard to conflict-of-law rules. Any dispute arising out of or relating to these Terms shall be brought exclusively in the state or federal courts located in Connecticut, and you consent to their jurisdiction and venue.",
          },
        ],
      },
      {
        heading: "16. Severability",
        blocks: [
          {
            type: "p",
            text: "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions continue in full force and effect.",
          },
        ],
      },
      {
        heading: "17. Contact",
        blocks: [
          {
            type: "p",
            text: "Sea Fun & Sun · Farmington, Connecticut. Phone: (959) 666-2062. Email: Admin@Seafunandsun.com. Instagram: @Seafunandsuntravel.",
          },
        ],
      },
    ],
  },
  {
    slug: "refund",
    title: "Refund Policy",
    dek: "What you can get back, how much, and when — the honest version, based on the fare you actually booked.",
    meta: "Sea Fun & Sun · Farmington, Connecticut · Effective: August 21, 2026",
    sections: [
      {
        heading: "How refunds work at a glance",
        blocks: [
          {
            type: "p",
            text: "Whether you can get your money back — and how much — depends on two things: (1) the type of fare, room, or flight you chose, and (2) when you make the change. There is no single refund rule that applies to every booking, which is why we confirm your specific fare rules with you before you pay.",
          },
        ],
      },
      {
        heading: "1. Who Issues Refunds",
        blocks: [
          {
            type: "p",
            text: "Refunds are issued by the supplier — the cruise line, airline, hotel, or tour operator — not by us. We never hold your payment: you pay the supplier directly, and any refund comes directly from the supplier to you. Our role is to help you understand your options, file requests, and follow through until it's resolved.",
          },
        ],
      },
      {
        heading: "2. How the Type of Fare, Room, or Flight Affects Your Refund",
        blocks: [
          { type: "p", text: "Every booking type carries its own rules, set by the supplier:" },
          {
            type: "ul",
            items: [
              "Cruise fares: your fare rules depend on the cabin category and the fare you selected. Most sailings work as a first deposit at booking plus a final payment due before sailing. After the final-payment date, the cruise line's cancellation schedule applies — which often allows refunds or travel credit up to a set number of days before departure, with amounts decreasing as the sailing date gets closer.",
              "Airfare: airlines define their own fare classes. Refundable fares generally allow a full refund (less any applicable fees) even close to departure; non-refundable fares may allow changes for a fee or fare difference, travel credit, or no refund — depending on the airline and timing.",
              "Hotel rooms: rate plans vary. Flexible rates usually include a free-cancellation window; discounted non-refundable rates trade flexibility for a lower price.",
              "Special inclusions: fares with added perks (upgrades, dining packages, pre-paid excursions) may have separate, stricter change deadlines for the included items.",
            ],
          },
          {
            type: "p",
            text: "Before you book, we'll walk you through the exact rules attached to the fare, room, or flight you're choosing, so there are no surprises later.",
          },
        ],
      },
      {
        heading: "3. Timing Matters",
        blocks: [
          {
            type: "p",
            text: "The earlier a change is made, the better the outcome. Changes made well before departure or sailing typically qualify for full refunds, travel credit, or free rebooking. Changes made after a supplier's final deadlines — or very close to departure — may result in a reduced refund or none at all, per the supplier's published schedule. If your plans change, contact us as soon as possible; acting quickly is the single best way to protect your money.",
          },
        ],
      },
      {
        heading: "4. Travel Insurance May Help",
        blocks: [
          {
            type: "p",
            text: "If you purchase travel insurance with your booking, it may help recover some or all of your costs when a covered event happens and the insurer's criteria are met — for example, a documented illness or other covered emergency that forces you to cancel. Please understand that:",
          },
          {
            type: "ul",
            items: [
              "coverage, exclusions, and claim deadlines are determined entirely by the insurer under the policy you buy;",
              "not every reason for cancelling is covered, and documentation is usually required;",
              "claims must be filed within the policy's deadline, which can be short;",
              "we are not an insurance provider — insurance is a third-party product.",
            ],
          },
          {
            type: "p",
            text: "We're happy to help you file a claim and gather the documentation insurers typically ask for.",
          },
        ],
      },
      {
        heading: "5. What May Not Be Refundable",
        blocks: [
          {
            type: "p",
            text: "Depending on supplier rules, some items are non-refundable regardless of timing, including supplier cancellation or change fees, taxes and government fees on non-refundable items, and amounts already paid out for pre-booked services (such as excursions). We'll flag anything like this on your specific booking before you commit.",
          },
        ],
      },
      {
        heading: "6. Our Role in the Process",
        blocks: [
          {
            type: "ul",
            items: [
              "explaining your exact fare rules before you book;",
              "filing change, cancellation, and refund requests with the supplier;",
              "chasing the supplier until your refund or credit is issued;",
              "supporting travel insurance claims with the paperwork insurers require;",
              "responding promptly — usually the same business day.",
            ],
          },
        ],
      },
      {
        heading: "7. Questions About a Specific Booking?",
        blocks: [
          {
            type: "p",
            text: "The rules depend on the fare, the room, and the flight. Call or text us at (959) 666-2062 or email Admin@Seafunandsun.com and we'll review those rules — and your best options — right away.",
          },
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    dek: "What we collect, how we use it, and how calls and texts are handled.",
    meta: "Sea Fun & Sun · Farmington, Connecticut · Effective: August 21, 2026 · Revised: October 6, 2026",
    sections: [
      {
        heading: "1. Who We Are",
        blocks: [
          {
            type: "p",
            text: "Sea Fun & Sun is a travel agency based in Farmington, Connecticut. We help travelers book cruises, flights, hotels, tours, and group travel. This Privacy Policy explains how we collect, use, and protect information when you use our website or book with us, including how we handle consent for marketing calls and text messages.",
          },
        ],
      },
      {
        heading: "2. Information We Collect",
        blocks: [
          { type: "p", text: "We collect information you provide to us, including:" },
          {
            type: "ul",
            items: [
              "Contact details: name, email address, and phone number;",
              "Travel details: destinations, dates, number of travelers, cabin or room preferences, and special requests;",
              "Traveler details needed for booking: full names, dates of birth, passport and government-issued ID details, and photos where required;",
              "Payment details: your bookings are paid directly to the supplier through our third-party booking platform — we do not store your full card or bank details;",
              "Communications: messages, emails, calls, and requests you send us; and",
              "Marketing preferences: whether you opt in to (or opt out of) marketing calls and text messages, which we keep separately from your booking details.",
            ],
          },
        ],
      },
      {
        heading: "3. How We Use Your Information",
        blocks: [
          { type: "p", text: "We use your information to:" },
          {
            type: "ul",
            items: [
              "plan, quote, and book your travel;",
              "store quote requests submitted on this website in our database, and email a copy to us;",
              "communicate with you about your travel and respond to your requests;",
              "process bookings and follow through on changes, cancellations, and refunds;",
              "send you marketing calls and text messages — only when you have opted in (see Section 4);",
              "comply with legal and industry requirements; and",
              "improve our services.",
            ],
          },
          { type: "p", text: "We do not sell your personal information." },
        ],
      },
      {
        heading: "4. Phone & Text Message Marketing Consent (TCPA & CTIA)",
        blocks: [
          {
            type: "p",
            text: "This section describes how we handle consent for marketing calls and text messages, in line with the U.S. Federal Communications Commission (FCC) rules under the Telephone Consumer Protection Act of 1991 (TCPA) and the CTIA guidelines for marketing communications.",
          },
          {
            type: "p",
            text: "How we get your consent. We do not send marketing calls or text messages to you unless you opt in. When you provide a mobile phone number and clearly select the marketing opt-in — a separate step from making a booking — you give us prior express consent to call you and send text (SMS/MMS) messages about travel offers and promotions from Sea Fun & Sun (and, where you have separately agreed, from travel suppliers we book for); and to use an automatic telephone dialing system (autodialer) or an artificial or pre-recorded voice for those marketing calls or messages.",
          },
          {
            type: "p",
            text: "That consent is specific to the phone number you enter — we will not use it to call or text a different number; freely given and separate from any booking or purchase; and not a condition of buying anything. You can book with us without agreeing to receive marketing calls or texts.",
          },
          {
            type: "p",
            text: "When we call or text. We contact you only between 8:00 AM and 9:00 PM, your local time. We honor the National Do Not Call Registry and applicable state do-not-call lists. Marketing texts are sent from a registered sender (10DLC/A2P) to the extent required by carriers, and clearly identify “SEA FUN & SUN” (or an approved shortened name) as the sender, and include a physical mailing address and website as required.",
          },
          {
            type: "p",
            text: "Opting out. You can stop marketing calls and texts at any time, at no charge. Texts: reply STOP or UNSUBSCRIBE to any marketing text. We will confirm, and we will not send further marketing texts to that number. Calls: call or text us and ask to be removed from marketing calls. We will honor the request promptly and keep that number on our internal do-not-call list. Replying STOP is free.",
          },
          {
            type: "p",
            text: "If you opt out, we keep a record of your request and the time it was made, and we will not send further marketing messages to that number. We may still send important service or booking confirmations about travel you have booked, where needed to complete or service your booking — those are not marketing messages.",
          },
          {
            type: "p",
            text: "Message and data rates may apply. We keep records of how, when, and from which number you gave or revoked marketing consent so we can demonstrate compliance.",
          },
        ],
      },
      {
        heading: "5. How We Share Information",
        blocks: [
          { type: "p", text: "We share information only as needed to complete your travel:" },
          {
            type: "ul",
            items: [
              "with suppliers (cruise lines, airlines, hotels, and tour operators) to make and manage your bookings;",
              "with our third-party booking platform and its payment processors;",
              "with insurers if you purchase travel insurance and need to make a claim;",
              "with professional advisors (such as legal counsel) where required; and",
              "with authorities where we are required by law.",
            ],
          },
        ],
      },
      {
        heading: "6. Payment Information",
        blocks: [
          {
            type: "p",
            text: "You pay suppliers directly through the third-party booking platform or the supplier's own channels. We never hold your payment card or bank information. Those platforms have their own privacy and security policies that apply to the payment step.",
          },
        ],
      },
      {
        heading: "7. Cookies and Website Analytics",
        blocks: [
          {
            type: "p",
            text: "We use Google Analytics to count visits and see which pages people open. It sets a cookie in your browser. The measurement ID on this site is G-R12KCXY9XE. It does not receive what you type into the quote form. You can control or disable cookies through your browser settings.",
          },
        ],
      },
      {
        heading: "8. Data Retention",
        blocks: [
          {
            type: "p",
            text: "We keep your information for as long as needed to provide our services, resolve issues, and meet legal obligations, after which we delete or anonymize it. Some travel and transaction records — and your marketing consent and opt-out records — may need to be kept longer under applicable law.",
          },
        ],
      },
      {
        heading: "9. Your Choices",
        blocks: [
          {
            type: "ul",
            items: [
              "you may ask us to correct or update your information;",
              "you may ask us what information we hold about you;",
              "you may ask us to stop contacting you in certain ways, including stopping all marketing calls and texts (reply STOP, or call or text us — see Section 4); and",
              "you may ask us to delete your information, subject to any legal hold requirements.",
            ],
          },
          { type: "p", text: "To make a request, contact us using the details below." },
        ],
      },
      {
        heading: "10. Children",
        blocks: [
          {
            type: "p",
            text: "Our services are not directed to children under 13, and we do not knowingly collect their personal information.",
          },
        ],
      },
      {
        heading: "11. Third-Party Links",
        blocks: [
          {
            type: "p",
            text: "Our website and booking platform include links to third-party sites. We are not responsible for their privacy practices and encourage you to read their policies.",
          },
        ],
      },
      {
        heading: "12. Security",
        blocks: [
          {
            type: "p",
            text: "We use reasonable administrative and technical measures to protect the information we hold, including consent and opt-out records. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
          },
        ],
      },
      {
        heading: "13. Changes to This Policy",
        blocks: [
          {
            type: "p",
            text: "We may update this Privacy Policy from time to time. The effective and revised dates above reflect the latest version. Continued use of our services after a revision constitutes acceptance of the updated policy.",
          },
        ],
      },
      {
        heading: "14. Contact",
        blocks: [
          {
            type: "p",
            text: "Sea Fun & Sun · Farmington, Connecticut. Phone: (959) 666-2062. Email: Admin@Seafunandsun.com. Instagram: @Seafunandsuntravel.",
          },
        ],
      },
    ],
  },
];

export function policyBySlug(slug: string) {
  return policies.find((item) => item.slug === slug);
}
