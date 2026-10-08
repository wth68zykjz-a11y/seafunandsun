import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { cruisePlaces } from "@/data/place-names";
import { submitInquiry } from "@/lib/inquiries";

const field =
  "min-h-11 w-full rounded-md border border-line bg-foam px-3 text-base text-ink outline-none placeholder:text-mute focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tide";

const trips = [
  { id: "cruise", label: "Cruise" },
  { id: "expedition", label: "Expedition" },
  { id: "resort", label: "All-inclusive resort" },
  { id: "ski", label: "Ski vacation" },
  { id: "land", label: "Rail and land" },
  { id: "other", label: "Not sure yet" },
] as const;

type Trip = (typeof trips)[number]["id"];

const tripPlaces: Record<Trip, string[]> = {
  cruise: [],
  expedition: ["Antarctica", "The Arctic", "Galápagos", "Not sure yet"],
  resort: ["All-inclusive resort", "Caribbean", "Mexico", "Hawaii", "Europe or the Mediterranean", "Not sure yet"],
  ski: ["Club Med ski", "Luxury ski", "The Alps", "Japan", "Not sure yet"],
  land: ["Rail Vacations", "Luxury train", "A North American train", "A city stay", "Not sure yet"],
  other: ["Disney", "Flights, hotels, or a group", "Not sure yet"],
};

const styleCopy: Record<Trip, { label: string; placeholder: string; plans: string }> = {
  cruise: {
    label: "Cabin",
    placeholder: "Veranda, suite, or a river stateroom",
    plans: "Ports you want, a budget, and whether you prefer a quiet ship or a full resort ship.",
  },
  expedition: {
    label: "Cabin",
    placeholder: "A cabin with a balcony, or the smallest ship that still has one",
    plans: "Antarctica, the Arctic, or the Galápagos, the month, and a budget.",
  },
  resort: {
    label: "Room",
    placeholder: "Ocean view, a suite, or a family room",
    plans: "Adults-only or family, the airport you can fly from, and a budget.",
  },
  ski: {
    label: "Stay",
    placeholder: "A Club Med village, or a hotel",
    plans: "The mountain, whether the lift pass should be included, and a budget.",
  },
  land: {
    label: "Train or room",
    placeholder: "A sleeper, a hotel room, or a city stay",
    plans: "The cities, the nights between them, and a budget. A guided tour only if that place has one.",
  },
  other: {
    label: "What you want",
    placeholder: "A ship, a hotel, a train, or a mix",
    plans: "The shape of the trip, who is going, and a budget. We will say which kind of booking fits.",
  },
};

function tripFromPreset(preset: string): Trip {
  if (preset === "All-inclusive resort") return "resort";
  if (preset === "Club Med ski" || preset === "Luxury ski") return "ski";
  if (preset === "Luxury train" || preset === "Rail Vacations") return "land";
  if (/expedition/i.test(preset)) return "expedition";
  if (preset === "Disney" || preset === "Flights, hotels, or a group" || preset === "Not sure yet") return "other";
  return "cruise";
}

export function QuoteForm({
  preset = "",
  note = "",
  kind = "cruise",
  chooseTrip = false,
}: {
  preset?: string;
  note?: string;
  kind?: "cruise" | "ski" | "land";
  chooseTrip?: boolean;
}) {
  const knownPreset =
    preset &&
    (cruisePlaces.some((item) => item.title === preset) ||
      tripPlaces.expedition.includes(preset) ||
      tripPlaces.resort.includes(preset) ||
      tripPlaces.ski.includes(preset) ||
      tripPlaces.land.includes(preset) ||
      tripPlaces.other.includes(preset) ||
      preset === "All-inclusive resort" ||
      preset === "Club Med ski" ||
      preset === "Luxury ski" ||
      preset === "Luxury train" ||
      preset === "Rail Vacations")
      ? preset
      : "";
  const [trip, setTrip] = useState<Trip>(kind === "ski" ? "ski" : kind === "land" ? "land" : tripFromPreset(knownPreset));
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [reference, setReference] = useState("");
  const [emailNote, setEmailNote] = useState("");
  const [error, setError] = useState("");
  const active: Trip = chooseTrip ? trip : kind === "ski" ? "ski" : kind === "land" ? "land" : "cruise";
  const style = styleCopy[active];
  const placeDefault =
    active === "cruise"
      ? cruisePlaces.some((item) => item.title === knownPreset)
        ? knownPreset
        : ""
      : tripPlaces[active].includes(knownPreset)
        ? knownPreset
        : "";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      const result = await submitInquiry({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          destination: String(data.get("destination") ?? ""),
          travelWindow: String(data.get("travelWindow") ?? ""),
          partySize: String(data.get("partySize") ?? ""),
          cabin: String(data.get("cabin") ?? ""),
          plans: `${trips.find((item) => item.id === active)?.label ?? "Trip"}. ${String(data.get("plans") ?? "")}`,
          marketingOptIn: data.get("marketingOptIn") === "on",
          companyWebsite: String(data.get("companyWebsite") ?? ""),
        },
      });
      if (!result.ok) {
        setStatus("error");
        setError(result.error);
        return;
      }
      setReference(result.reference);
      setEmailNote(result.emailed ? "" : result.emailStatus || "not sent");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
      setError("We couldn’t save that just now. Call or text (959) 666-2062 and we will take the request by phone.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-line bg-foam p-5">
        <p className="text-sm font-medium text-tide">Request saved</p>
        <h3 className="mt-2 font-display text-3xl text-ink">We have the request.</h3>
        <p className="mt-3 text-mute">
          Your name, email, and travel plans are saved in our database
          {emailNote ? "" : " and emailed to us"}. The reference is{" "}
          <span className="font-medium text-ink tabular-nums">{reference}</span>. We reply the same day in most cases.
          {emailNote ? ` The email did not go out (${emailNote}).` : ""}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-lg rounded-xl border border-line bg-foam p-3 shadow-card sm:p-4 lg:mx-0">
      <h3 className="font-display text-xl text-ink">Request a quote</h3>
      <p className="mt-1 text-base leading-relaxed text-ink">Your name, your email, and the destination. There is no separate agent fee.</p>
      {chooseTrip ? (
        <label className="mt-4 grid gap-1 text-sm font-medium">
          What kind of trip
          <select
            className={field}
            value={trip}
            onChange={(event) => setTrip(event.target.value as Trip)}
            aria-label="What kind of trip"
          >
            {trips.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      <label className="mt-3 grid gap-1 text-sm font-medium">
        {active === "cruise" ? "Region" : "Place"}
        <select className={field} name="destination" key={active + placeDefault} defaultValue={placeDefault} required aria-label={active === "cruise" ? "Region" : "Place"}>
          <option value="">{active === "cruise" ? "Select a region" : "Select a place"}</option>
          {active === "cruise"
            ? cruisePlaces.map((item) => (
                <option key={item.slug} value={item.title}>
                  {item.title}
                </option>
              ))
            : tripPlaces[active].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          {active === "cruise" ? <option value="Not sure yet">Not sure yet</option> : null}
        </select>
      </label>
      <div className={`${chooseTrip ? "mt-2" : "mt-3"} grid grid-cols-2 gap-2`}>
        <label className="grid gap-1 text-sm font-medium">
          Name
          <input className={field} name="name" autoComplete="name" required placeholder="Full name" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Email
          <input className={field} name="email" type="email" autoComplete="email" required placeholder="Email" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Phone
          <input className={field} name="phone" type="tel" autoComplete="tel" placeholder="Optional" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          When
          <input className={field} name="travelWindow" placeholder="Optional" />
        </label>
        <label className="col-span-2 grid gap-1 text-sm font-medium">
          Who is traveling
          <input className={field} name="partySize" placeholder="Optional" />
        </label>
      </div>
      <label className="mt-3 grid gap-1 text-sm font-medium">
        {style.label}
        <input className={field} name="cabin" placeholder="Optional" />
      </label>
      <label className="mt-3 grid gap-1 text-sm font-medium">
        Travel plans
        <textarea className={`${field} min-h-20 py-2`} name="plans" defaultValue={note} placeholder="Optional. Flights, a hotel, a shore excursion, or other notes." />
      </label>
      <label className="mt-3 flex items-start gap-3 text-base leading-relaxed text-ink">
        <input name="marketingOptIn" type="checkbox" className="mt-1 size-4 accent-tide" />
        <span>
          You may call or text me about this trip. This is optional, and it is not required in order to request a quote. Reply STOP to opt out later. See the{" "}
          <Link to="/policies/$doc" params={{ doc: "privacy" }} className="text-tide underline-offset-2 hover:underline">
            privacy policy
          </Link>
          .
        </span>
      </label>
      <input className="hidden" tabIndex={-1} autoComplete="off" name="companyWebsite" aria-hidden="true" />
      {error ? <p className="mt-3 text-sm text-tide-deep">{error}</p> : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-coral px-4 text-sm font-medium text-foam hover:bg-coral-deep disabled:bg-line disabled:text-ink"
      >
        {status === "sending" ? "Sending…" : "Request a quote"}
      </button>
      <p className="mt-2 text-center text-base leading-relaxed text-ink">We reply the same day in most cases.</p>
    </form>
  );
}
