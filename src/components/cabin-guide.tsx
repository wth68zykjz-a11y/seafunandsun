const categories = [
  { name: "Inside", text: "No window. This is usually the lowest fare." },
  { name: "Oceanview", text: "A window or a porthole. It does not open onto a balcony." },
  { name: "Balcony", text: "A private outdoor space. Some lines call the same category a veranda." },
  { name: "Suite", text: "A larger room, often with a sitting area. Drinks, a butler, or priority boarding depend on the line. Read the fare." },
  { name: "Guarantee", text: "You book the category. The line assigns the cabin number later, and it can be a better cabin in that same category." },
];

export function CabinGuide() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <h2 className="font-display text-3xl text-ink">Cabin categories</h2>
      <p className="mt-2 max-w-3xl text-mute">
        The fare is for a category, not always for a specific cabin number. A balcony on one line is not the same size, or the same inclusion, as a balcony on another.
      </p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((item) => (
          <div key={item.name} className="rounded-xl border border-line bg-foam p-5">
            <dt className="font-display text-2xl text-ink">{item.name}</dt>
            <dd className="mt-2 text-sm text-mute">{item.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
