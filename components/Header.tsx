import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center" aria-label="Tedelec home">
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          <a href="#services" className="hover:text-ink">Services</a>
          <a href="#work" className="hover:text-ink">Recent work</a>
          <a href="#why" className="hover:text-ink">Why Tedelec</a>
          <a href="#areas" className="hover:text-ink">Areas</a>
        </nav>
        <a
          href={`tel:${site.contact.phoneIntl}`}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink-soft"
        >
          <span aria-hidden="true">📞</span>
          <span className="hidden sm:inline">{site.contact.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
