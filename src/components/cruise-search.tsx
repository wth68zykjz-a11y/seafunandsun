import { useMemo, useState, type FormEvent } from "react";
import { destinations } from "@/data/destinations";
import { cruiseDestinationId, cruiseResultsHref } from "@/data/links";

const field =
  "min-h-11 w-full rounded-md border border-line bg-paper px-3 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tide";

const lengths = [
  { value: "", label: "Any length" },
  { value: "1-5", label: "1–5 nights" },
  { value: "6-8", label: "6–8 nights" },
  { value: "9-11", label: "9–11 nights" },
  { value: "12-16", label: "12–16 nights" },
  { value: "17-99", label: "17 nights or more" },
];

function monthChoices() {
  const choices: { value: string; label: string }[] = [];
  const now = new Date();
  for (let i = 0; i < 24; i += 1) {
    const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    const label = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    choices.push({ value, label });
  }
  return choices;
}

function monthBounds(value: string) {
  const [yearText, monthText] = value.split("-");
  const year = Number(yearText);
  const month = Number(monthText);
  if (!year || !month) return {};
  const last = new Date(year, month, 0).getDate();
  const mm = String(month).padStart(2, "0");
  return {
    start: `${mm}/01/${year}`,
    end: `${mm}/${String(last).padStart(2, "0")}/${year}`,
  };
}

export function CruiseSearch({
  destinationId = "",
  destinationType = "",
}: {
  destinationId?: string;
  destinationType?: string;
}) {
  const options = useMemo(
    () =>
      destinations.flatMap((place) => {
        if (place.slug === "river") return [{ value: "river", label: place.title }];
        if (place.slug === "rail" || place.slug === "expedition") return [];
        const id = cruiseDestinationId[place.slug];
        return id ? [{ value: id, label: place.title }] : [];
      }),
    [],
  );
  const months = useMemo(() => monthChoices(), []);
  const initial = destinationType.toLowerCase() === "river" ? "river" : destinationId;
  const [destination, setDestination] = useState(initial);
  const [month, setMonth] = useState("");
  const [length, setLength] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const bounds = month ? monthBounds(month) : {};
    const [minNights, maxNights] = length ? length.split("-") : [];
    const href = cruiseResultsHref({
      destinationId: destination && destination !== "river" ? destination : undefined,
      destinationType: destination === "river" ? "River" : undefined,
      start: bounds.start,
      end: bounds.end,
      minNights,
      maxNights,
    });
    window.location.assign(href);
  }

  return (
    <div id="search" className="rounded-xl border border-line bg-foam p-4 shadow-card sm:p-6">
      <p className="text-sm font-medium text-tide">Sailings</p>
      <h2 className="mt-1 font-display text-3xl">Set the destination, the month, and the length.</h2>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink">
        Search opens the booking system in this window. Choose the sailing and the cabin there. Payment goes to the cruise line. We do not hold the card.
      </p>
      <form onSubmit={onSubmit} className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="grid gap-1 text-sm font-medium sm:col-span-2">
          Region
          <select className={field} value={destination} onChange={(event) => setDestination(event.target.value)} aria-label="Region">
            <option value="">Any region</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Departing
          <select className={field} value={month} onChange={(event) => setMonth(event.target.value)}>
            <option value="">Any month</option>
            {months.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Length
          <select className={field} value={length} onChange={(event) => setLength(event.target.value)}>
            {lengths.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <div className="flex items-end">
          <button type="submit" className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-tide px-4 text-sm font-medium text-foam">
            Search sailings
          </button>
        </div>
      </form>
      <p className="mt-3 text-base leading-relaxed text-ink">Cruise line and ship can be filtered on that list.</p>
    </div>
  );
}
