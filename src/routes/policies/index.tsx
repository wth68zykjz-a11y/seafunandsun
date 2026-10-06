import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/site-chrome";
import { policies } from "@/data/policies";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/policies/")({
  head: () =>
    pageHead({
      title: "Terms, refunds, and privacy",
      description:
        "Terms, refund policy, and privacy policy for Sea Fun & Sun, an independent travel agency in Farmington, Connecticut.",
      path: "/policies",
      image: "/media/page-harbor.jpg",
    }),
  component: PoliciesIndex,
});

function PoliciesIndex() {
  return (
    <Shell>
      <PageIntro
        kicker="Policies"
        title="Terms, refunds, and privacy."
        lede="How bookings, refunds, and calls or texts are handled."
      />
      <div className="mx-auto max-w-6xl px-4">
        <img
          src="/media/page-harbor.jpg"
          alt="A quiet harbor at dawn with moored boats"
          className="max-h-72 w-full rounded-xl object-cover"
        />
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pt-8 pb-20 md:grid-cols-3">
        {policies.map((doc) => (
          <Link
            key={doc.slug}
            to="/policies/$doc"
            params={{ doc: doc.slug }}
            className="rounded-xl border border-line bg-foam p-5"
          >
            <h2 className="font-display text-3xl">{doc.title}</h2>
            <p className="mt-3 text-sm text-mute">{doc.dek}</p>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
