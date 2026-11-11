import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageIntro } from "@/components/site-chrome";
import { bookingEmail, phone, phoneHref } from "@/data/links";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Sea Fun & Sun",
      description:
        "Call, text, or email Sea Fun & Sun in Farmington, Connecticut. Request a quote for a cruise, resort, ski vacation, or rail trip.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  return (
    <Shell>
      <PageIntro
        kicker="Contact"
        title="Call, text, or email."
        lede="We are based in Farmington, Connecticut and book for travelers across the country. Weekdays about 9 AM to 6 PM Eastern."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16">
        <ul className="grid gap-3 text-base">
          <li>
            Phone / text:{" "}
            <a className="font-medium text-tide" href={phoneHref}>
              {phone}
            </a>
          </li>
          <li>
            Email:{" "}
            <a className="font-medium text-tide" href={`mailto:${bookingEmail}`}>
              {bookingEmail}
            </a>
          </li>
        </ul>
        <p className="mt-8">
          <Link
            to="/quote"
            className="inline-flex min-h-11 items-center rounded-md bg-coral px-5 text-sm font-medium text-foam"
          >
            Request a quote
          </Link>
        </p>
      </div>
    </Shell>
  );
}
