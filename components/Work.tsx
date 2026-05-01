import { site } from "@/lib/site";

export function Work() {
  return (
    <section id="work" className="border-b border-black/5">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-28">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-spark-deep">Recent work</p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tighter2 text-ink sm:text-4xl">
              A few jobs we're proud of.
            </h2>
          </div>
          <a
            href={site.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-spark-deep underline-offset-4 hover:underline"
          >
            More on Instagram {site.contact.instagramHandle} →
          </a>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.work.map((w, i) => (
            <figure
              key={w.title}
              className={`group relative overflow-hidden rounded-2xl bg-ink ${
                i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-[4/5]"
              }`}
            >
              {/* Photos go in /public/images/work/ — see lib/site.ts for filenames.
                  If the file is missing the gradient + caption still render cleanly. */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,19,22,0) 35%, rgba(15,19,22,0.85) 100%), linear-gradient(135deg, #2F3437 0%, #14181B 100%)",
                }}
                aria-hidden="true"
              />
              <img
                src={w.image}
                alt={w.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, rgba(15,19,22,0) 50%, rgba(15,19,22,0.78) 100%)",
                }}
              />
              <figcaption className="absolute inset-x-5 bottom-5 text-paper">
                <p className="font-display text-base font-semibold">{w.title}</p>
                <p className="mt-1 text-sm text-paper/80">{w.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
