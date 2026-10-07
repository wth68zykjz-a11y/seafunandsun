export const celebrityFallSale =
  "Celebrity’s Fall Sale takes 75% off the second guest’s fare. On select dates there is also up to $800 off per stateroom, or up to $700 in onboard credit. On select sailings, the 3rd, 4th, and 5th guests sail free. Book from September 22, 2026, through November 5, 2026.";

export function explainPromotion(title: string): string {
  const t = title.replace(/\s+/g, " ").trim();
  if (/free at sea/i.test(t)) {
    return "Norwegian adds drinks, specialty dining, Wi-Fi, or an excursion credit to the cruise. Which of those is included depends on the sailing.";
  }
  if (/first class air/i.test(t)) {
    return "Regent includes a first-class flight with the cruise on the sailings in this offer.";
  }
  if (/upgrade rewards/i.test(t)) {
    return "AmaWaterways is offering a cabin upgrade on select 2027 river cruises.";
  }
  if (/riviera/i.test(t)) {
    return "Riviera river cruises are marked down by as much as half, and the offer includes more than the discount.";
  }
  if (/windstar/i.test(t)) {
    return "Windstar is discounting small-ship sailings under this offer.";
  }
  if (/savings you deserve/i.test(t)) return celebrityFallSale;
  if (/celebrity/i.test(t)) {
    return "Celebrity is discounting the cruise fare. The amount depends on the ship, the date, and the cabin.";
  }
  if (/princess/i.test(t) && /40/.test(t)) {
    return "Princess is taking as much as 40% off the cruise fare on the sailings this offer covers.";
  }
  if (/princess/i.test(t) && /early booking/i.test(t)) {
    return "Booking a 2028 Princess cruise early adds a bonus, usually money off the fare or onboard credit.";
  }
  if (/virgin/i.test(t)) {
    return "Virgin Voyages takes as much as $1,000 off the fare at booking. The ships are adults only.";
  }
  if (/avalon/i.test(t)) {
    return "Avalon is taking $3,000 per couple off select 2026 Europe river cruises. Some dates also include a flight from certain U.S. cities.";
  }
  if (/conrad/i.test(t)) {
    return "The Conrad in Las Vegas adds a $150 beverage credit to the stay.";
  }
  if (/waldorf/i.test(t)) {
    return "The Waldorf Astoria in Costa Rica includes a room upgrade and as much as $1,000 in resort credit.";
  }
  if (/palladium|kids.{0,40}free/i.test(t)) {
    return "Children and teens stay and eat free at Grand Palladium in Punta Cana on the dates this offer covers.";
  }
  if (/cie/i.test(t)) {
    return "CIE Tours is taking 15% off select guided trips in Europe.";
  }
  if (/globus/i.test(t)) {
    return "Globus is taking $200 per couple off select rail tours.";
  }
  if (/united vacation/i.test(t)) {
    return "United Vacations discounts an air-and-hotel stay, including the nights before or after a cruise.";
  }
  if (/early booking/i.test(t)) {
    return "Booking a 2028 cruise early adds a bonus from the line, usually money off the fare or onboard credit.";
  }
  if (/explora|historic gateway|middle eastern|red sea|arabian/i.test(t)) {
    return "Explora Journeys is a luxury cruise line. The staterooms are suites, and the fare usually includes drinks, Wi-Fi, and gratuities.";
  }
  if (/alexandria|port said/i.test(t)) {
    return "A private day in Alexandria for ships that stop at Port Said.";
  }
  const pct = t.match(/(\d+)\s*%\s*off/i);
  if (pct) return `The price is reduced by as much as ${pct[1]}% on the trips this offer covers.`;
  const money = t.match(/\$([0-9,]+)/);
  if (money && /sav|off|credit/i.test(t)) {
    return `This offer takes $${money[1]} off the price, or adds that amount as a credit.`;
  }
  return t.endsWith(".") ? t : `${t}.`;
}

const disclaimer = /fare and the rules belong|rules belong to the supplier|terms belong to the line|confirm both before|confirm the fare|confirm the current terms|supplier can change the fare|we confirm it before/i;

export function promotionDetail(title: string, summary: string): string {
  const text = summary.replace(/\s+/g, " ").trim();
  if (/savings you deserve/i.test(`${title} ${text}`)) return explainPromotion(title + " savings you deserve");
  if (!text || disclaimer.test(text)) return explainPromotion(title);
  return text;
}
