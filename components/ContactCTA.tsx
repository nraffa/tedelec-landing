import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-spark">
      <div className="mx-auto grid max-w-shell items-center gap-8 px-5 py-16 sm:grid-cols-[1.4fr_1fr] sm:px-8 sm:py-20">
        <div>
          <h2 className="font-display text-3xl leading-tight tracking-tighter2 text-ink sm:text-4xl">
            Need an electrician? Call Ted.
          </h2>
          <p className="mt-4 max-w-prose text-ink/80">
            Quotes are free. Emergencies answered any hour. Happy to chat through a job before
            we book in — no pressure.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href={`tel:${site.contact.phoneIntl}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-paper shadow-sm transition hover:bg-ink-soft"
          >
            Call {site.contact.phone}
          </a>
          <a
            href={`mailto:${site.contact.email}?subject=Electrical%20enquiry`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-paper px-6 py-4 text-base font-semibold text-ink transition hover:border-ink/40"
          >
            {site.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
