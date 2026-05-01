import { site } from "@/lib/site";

export function Areas() {
  return (
    <section id="areas" className="border-b border-black/5">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-28">
        <header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-spark-deep">Service areas</p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tighter2 text-ink sm:text-4xl">
            Northern Beaches and Sydney's North Shore.
          </h2>
          <p className="mt-4 text-ink-soft">
            Based locally — onsite quickly across the Beaches and surrounding suburbs.
            If you're nearby and not listed, call and ask.
          </p>
        </header>

        <ul className="mt-10 flex flex-wrap gap-2">
          {site.areas.map((a) => (
            <li
              key={a}
              className="rounded-full border border-ink/10 bg-paper px-4 py-2 text-sm text-ink-soft"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
