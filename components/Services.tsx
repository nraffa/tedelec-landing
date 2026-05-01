import { site } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="border-b border-black/5 bg-paper-warm">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-28">
        <header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-spark-deep">What we do</p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tighter2 text-ink sm:text-4xl">
            From a single power point to a full smart-home build.
          </h2>
          <p className="mt-4 text-ink-soft">
            Eight focused services we do well. If it's electrical and it's in Sydney, we can help —
            and if it's outside what we do, we'll point you to someone good.
          </p>
        </header>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((s) => (
            <li key={s.title} className="bg-paper p-6 transition hover:bg-paper-warm">
              <h3 className="font-display text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
