import { site } from "@/lib/site";
import { Icon } from "./Icon";

export function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="head">
          <div>
            <div className="num-tag">/ 06 — Reviews</div>
            <h2>
              Word travels
              <br />
              fast around here.
            </h2>
          </div>
          <div className="lead">
            Tedelec has grown almost entirely on referral. Here&apos;s what people are telling their
            mates.
          </div>
        </div>
        <div className="testi-grid">
          {site.testimonials.map((t) => (
            <div className="testi" key={t.name}>
              <div className="stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>
              <q>{t.quote}</q>
              <div className="who">
                — {t.name}, {t.suburb}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
