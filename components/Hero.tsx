import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { PhotoFrame } from "./PhotoFrame";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-row">
        <div className="hero-content">
          <h1>
            POWER
            <br />
            <span className="accent">DONE</span>
            <br />
            <span className="out">RIGHT.</span>
          </h1>
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
        <PhotoFrame
          src="/images/hero.jpg"
          alt="Recent Tedelec project — Bilgola Beach build"
          placeholder="Hero photo · Job in progress"
          className="hero-photo"
          loading="eager"
        />
      </div>
    </section>
  );
}
