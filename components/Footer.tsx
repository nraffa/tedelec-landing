import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper/80">
      <div className="mx-auto max-w-shell px-5 py-14 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              {site.brand.longTagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <p className="font-display text-paper">Contact</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="hover:text-paper" href={`tel:${site.contact.phoneIntl}`}>
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <a className="hover:text-paper" href={`mailto:${site.contact.email}`}>
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-paper"
                    href={site.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.contact.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-display text-paper">Hours</p>
              <ul className="mt-3 space-y-2">
                <li>{site.hours.standard}</li>
                <li>{site.hours.emergency}</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-paper">Sections</p>
              <ul className="mt-3 space-y-2">
                <li><a className="hover:text-paper" href="#services">Services</a></li>
                <li><a className="hover:text-paper" href="#work">Recent work</a></li>
                <li><a className="hover:text-paper" href="#why">Why Tedelec</a></li>
                <li><a className="hover:text-paper" href="#areas">Areas</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/55">
          <p>© {year} {site.brand.name}. NSW Australia.</p>
          <p>Licensed electrical contractor — licence on quote & invoice.</p>
        </div>
      </div>
    </footer>
  );
}
