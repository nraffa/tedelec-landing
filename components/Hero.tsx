import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-black/5">
      <div className="mx-auto grid max-w-shell items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-spark/30 bg-spark-glow px-3 py-1 text-xs font-medium tracking-wide text-spark-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-spark" /> Available 24/7 across Sydney
          </p>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
            Sydney's <span className="text-spark-deep">Northern Beaches</span> electricians.
            <br className="hidden sm:block" />
            Considered work, reliably done.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
            {site.brand.longTagline} From a single power point to a full home rewire,
            commercial fitout or smart-home install — call Ted and the crew.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${site.contact.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full bg-spark px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-spark-deep hover:text-paper"
            >
              Call {site.contact.phone}
            </a>
            <a
              href={`mailto:${site.contact.email}?subject=Electrical%20enquiry`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              Email a quote request
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-black/5 pt-6 text-sm">
            <div>
              <dt className="text-ink-muted">Hours</dt>
              <dd className="mt-1 font-medium text-ink">{site.hours.standard}</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Emergency</dt>
              <dd className="mt-1 font-medium text-ink">24/7</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Areas</dt>
              <dd className="mt-1 font-medium text-ink">Beaches & North Shore</dd>
            </div>
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  // Gradient-only by default. To feature a photo, add `/public/images/hero.jpg`
  // and uncomment the <img/> below — there is no error handler so the file must exist.
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 80% 20%, rgba(127,186,66,0.28) 0%, rgba(27,31,35,0) 60%), linear-gradient(180deg, #1B1F23 0%, #0F1316 100%)",
        }}
      />
      {/* <img src="/images/hero.jpg" alt="" aria-hidden="true"
           className="absolute inset-0 h-full w-full object-cover" /> */}
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="500" fill="url(#grid)" />
        <g opacity="0.85">
          <path d="M210 90 L210 200 L260 200 L180 380 L180 280 L130 280 Z" fill="#7FBA42" />
        </g>
      </svg>
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
        <div className="rounded-2xl bg-paper/95 p-4 shadow-lg backdrop-blur">
          <p className="font-display text-sm font-semibold text-ink">Smart homes done well</p>
          <p className="mt-1 text-xs text-ink-muted">C-Bus · Hager · Legrand</p>
        </div>
        <div className="rounded-2xl bg-spark px-4 py-3 shadow-lg">
          <p className="font-display text-sm font-semibold text-ink">Emergency line open</p>
        </div>
      </div>
    </div>
  );
}
