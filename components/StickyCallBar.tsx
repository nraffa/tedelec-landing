import { site } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-between gap-3 rounded-2xl bg-ink px-4 py-3 text-paper shadow-2xl ring-1 ring-black/10 sm:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <div className="min-w-0">
        <p className="truncate text-xs text-paper/65">Tedelec — 24/7 emergency</p>
        <p className="truncate text-sm font-semibold">{site.contact.phone}</p>
      </div>
      <a
        href={`tel:${site.contact.phoneIntl}`}
        className="inline-flex items-center gap-1.5 rounded-full bg-spark px-4 py-2 text-sm font-semibold text-ink"
      >
        Call now
      </a>
    </div>
  );
}
