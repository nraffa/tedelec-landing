import { site } from "@/lib/site";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <h1>
          POWER
          <br />
          <span className="accent">DONE</span> <span className="out">RIGHT.</span>
        </h1>
        <div className="hero-row">
          <div className="hero-meta">
            <p className="hero-sub">
              Northern Beaches & North Shore electrician. {site.brand.years} years on the tools.
              Same-day callouts, fixed quotes, no nonsense.
            </p>
            <div className="hero-cta-row">
              <a href={`tel:${site.contact.phoneIntl}`} className="btn-big">
                <Icon name="phone" size={18} /> Call {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}?subject=Electrical%20enquiry`}
                className="btn-big alt"
              >
                Email a quote <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
          <div>
            <div className="hero-photo photo-frame">
              <div className="photo-ph">Hero photo · Job in progress</div>
              <img
                src="/images/hero.jpg"
                alt="Recent Tedelec project — Bilgola Beach build"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
