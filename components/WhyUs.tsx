import { site } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="why" className="border-b border-black/5 bg-ink text-paper">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-28">
        <header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-spark">Why Tedelec</p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tighter2 sm:text-4xl">
            Local, licensed, and properly thorough.
          </h2>
        </header>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.trust.map((t) => (
            <li key={t.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-spark/15 text-spark">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/75">{t.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
