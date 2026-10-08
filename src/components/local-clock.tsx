import { useEffect, useState } from "react";

function formatZone(zone: string) {
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);
  const offset = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    timeZoneName: "longOffset",
  })
    .formatToParts(now)
    .find((part) => part.type === "timeZoneName")?.value;
  return `${time} local · ${offset ?? "GMT"}`;
}

export function LocalClock({ zone }: { zone: string }) {
  const [text, setText] = useState(() => formatZone(zone));
  useEffect(() => {
    const tick = () => setText(formatZone(zone));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [zone]);
  return (
    <p className="mt-2 text-base leading-relaxed text-ink">
      <span className="font-medium text-ink">Time: </span>
      {text}
    </p>
  );
}
