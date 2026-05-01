import { site } from "@/lib/site";
import { Icon } from "./Icon";

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="head">
          <div>
            <div className="num-tag">/ 03 — Recent jobs</div>
            <h2>On the tools.</h2>
          </div>
          <div className="lead">
            A small slice of recent work across the Northern Beaches and North Shore — homes, fitouts
            and commercial.
          </div>
        </div>
        <div className="jobs-grid">
          {site.work.map((w) => (
            <article
              className={"job" + ("featured" in w && w.featured ? " featured" : "")}
              key={w.slug}
            >
              <div className="job-photo photo-frame">
                <div className="photo-ph">{w.title}</div>
                <img src={w.image} alt={w.caption} loading="lazy" />
              </div>
              <div className="job-meta">
                <div className="job-meta-top">
                  <h3>{w.title}</h3>
                  <Icon name="arrow" size={20} className="arrow" />
                </div>
                <div className="job-tags">
                  {w.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="jobs-cta">
          <a
            href={site.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-big alt"
          >
            <Icon name="instagram" size={18} /> More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
