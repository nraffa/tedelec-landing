import { site } from "@/lib/site";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/site";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="head">
          <div>
            <div className="num-tag">/ 01 — Services</div>
            <h2>
              Big jobs.
              <br />
              Small jobs.
              <br />
              All jobs.
            </h2>
          </div>
          <div className="lead">
            Residential and commercial electrical work across Sydney&apos;s north. Every job comes
            with a clear scope, a fixed quote, and a sparky who actually shows up.
          </div>
        </div>
        <div className="svc-grid">
          {site.services.map((s, i) => (
            <div className="svc" key={s.title}>
              <div className="num">/ {String(i + 1).padStart(2, "0")}</div>
              <Icon name={s.icon as IconName} size={32} />
              <h3>{s.title}</h3>
              <p>{s.blurb}</p>
            </div>
          ))}
        </div>
        <div className="svc-acc-list">
          {site.services.map((s, i) => (
            <details className="svc-acc" key={s.title}>
              <summary>
                <span className="svc-acc-num">/ {String(i + 1).padStart(2, "0")}</span>
                <Icon name={s.icon as IconName} size={20} />
                <span className="svc-acc-title">{s.title}</span>
                <span className="svc-acc-chev" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="svc-acc-blurb">{s.blurb}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
