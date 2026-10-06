import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { listInquiries, type InquiryRow } from "@/lib/inquiries";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/desk")({
  head: () =>
    pageHead({
      title: "Request log",
      description: "Private quote log for Sea Fun & Sun.",
      path: "/desk",
      noindex: true,
    }),
  component: DeskPage,
});

function DeskPage() {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [rows, setRows] = useState<InquiryRow[] | null>(null);
  const [busy, setBusy] = useState(false);

  async function openLog(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const result = await listInquiries({ data: { key } });
      if (!result.ok) {
        setRows(null);
        setError(result.error);
      } else {
        setRows(result.rows);
      }
    } catch {
      setError("The log didn’t open. Try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Shell>
      <PageIntro
        kicker="Private log"
        title="Quote requests, not a public list."
        lede="Names, emails, and travel plans stay off the public pages. This log opens only with the access code. On the published site they live in the app database. A Hostinger MySQL kit is available if you want the same fields in hPanel."
      />
      <div className="mx-auto max-w-6xl px-4">
        <img
          src="/media/page-itineraries.jpg"
          alt="A notebook and binoculars on a wooden desk by a window over the water"
          className="mb-8 aspect-photo max-h-64 w-full max-w-3xl rounded-xl object-cover"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <form onSubmit={openLog} className="flex max-w-xl flex-col gap-3 sm:flex-row">
          <label className="grid flex-1 gap-1 text-sm font-medium">
            Access code
            <input
              value={key}
              onChange={(event) => setKey(event.target.value)}
              type="password"
              autoComplete="current-password"
              className="min-h-11 rounded-md border border-line bg-foam px-3 text-base"
            />
          </label>
          <button
            type="submit"
            disabled={busy}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-tide px-4 text-sm font-medium text-foam sm:self-end"
          >
            {busy ? "Opening…" : "Open log"}
          </button>
        </form>
        {error ? <p className="mt-4 text-sm text-tide-deep">{error}</p> : null}
        <p className="mt-6 max-w-xl text-sm text-mute">
          This site stores quotes in its own database. If you want the same fields in Hostinger’s MySQL
          (hPanel), use the{" "}
          <a className="font-medium text-tide underline-offset-2 hover:underline" href="/sea-fun-and-sun-hostinger-leads.zip">
            Hostinger lead kit
          </a>
          . It has the table, the form handler, and a private log. Change the access code before you upload it.
        </p>
        {rows ? (
          <div className="mt-8 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-foam text-mute">
                <tr>
                  <th className="px-3 py-3 font-medium">When</th>
                  <th className="px-3 py-3 font-medium">Ref</th>
                  <th className="px-3 py-3 font-medium">Name</th>
                  <th className="px-3 py-3 font-medium">Email</th>
                  <th className="px-3 py-3 font-medium">Trip</th>
                  <th className="px-3 py-3 font-medium">Plans</th>
                  <th className="px-3 py-3 font-medium">Mail</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-3 py-6 text-mute">
                      No requests yet.
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => (
                    <tr key={row.id} className="border-t border-line align-top">
                      <td className="px-3 py-3 whitespace-nowrap tabular-nums">{row.created_at.slice(0, 16)}</td>
                      <td className="px-3 py-3 whitespace-nowrap">{row.reference}</td>
                      <td className="px-3 py-3">
                        {row.name}
                        <span className="block text-mute">{row.phone}</span>
                      </td>
                      <td className="px-3 py-3">{row.email}</td>
                      <td className="px-3 py-3">
                        {row.destination}
                        <span className="block text-mute">
                          {row.travel_window} · {row.party_size} · {row.cabin}
                        </span>
                        {row.marketing_opt_in ? <span className="text-tide">Marketing opt-in</span> : null}
                      </td>
                      <td className="px-3 py-3 max-w-xs">{row.plans}</td>
                      <td className="px-3 py-3 whitespace-nowrap">{row.email_status || "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </Shell>
  );
}
