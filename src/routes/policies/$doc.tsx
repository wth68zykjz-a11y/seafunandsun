import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/site-chrome";
import { policyBySlug } from "@/data/policies";
import { adminEmail, phone, phoneHref } from "@/data/links";
import { clip, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/policies/$doc")({
  loader: ({ params }) => {
    const doc = policyBySlug(params.doc);
    if (!doc) throw notFound();
    return doc;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.title ?? "Policy",
      description: loaderData
        ? clip(loaderData.dek)
        : "Policies for Sea Fun & Sun, Farmington, Connecticut.",
      path: loaderData ? `/policies/${loaderData.slug}` : "/policies",
      noindex: !loaderData,
    }),
  component: PolicyPage,
});

function PolicyPage() {
  const doc = Route.useLoaderData();
  if (!doc) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h1 className="font-display text-4xl">That policy isn’t here.</h1>
          <Link to="/policies" className="mt-4 inline-flex text-tide">
            All policies
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-12 pb-20">
        <p className="text-sm font-medium text-tide">Sea Fun & Sun Travel Company</p>
        <h1 className="mt-2 font-display text-3xl sm:text-5xl">{doc.title}</h1>
        <p className="mt-4 text-lg text-mute">{doc.dek}</p>
        <p className="mt-3 text-sm text-mute">{doc.meta}</p>
        <img
          src="/media/page-harbor.jpg"
          alt="A calm harbor in early light"
          className="mt-8 max-h-64 w-full rounded-xl object-cover"
        />
        <div className="mt-10 space-y-8">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed">
                {section.blocks.map((block, index) =>
                  block.type === "ul" ? (
                    <ul key={index} className="list-disc space-y-2 pl-5 text-mute">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={index}>{block.text}</p>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-10 text-sm text-mute">
          Questions:{" "}
          <a className="text-tide" href={phoneHref}>
            {phone}
          </a>{" "}
          or{" "}
          <a className="text-tide" href={`mailto:${adminEmail}`}>
            {adminEmail}
          </a>
          . Also read the{" "}
          <Link to="/policies/$doc" params={{ doc: "terms" }} className="text-tide">
            terms
          </Link>
          ,{" "}
          <Link to="/policies/$doc" params={{ doc: "refund" }} className="text-tide">
            refund policy
          </Link>
          , and{" "}
          <Link to="/policies/$doc" params={{ doc: "privacy" }} className="text-tide">
            privacy policy
          </Link>
          .
        </p>
      </article>
    </Shell>
  );
}
