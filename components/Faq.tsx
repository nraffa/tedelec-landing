import { site } from "@/lib/site";

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="head">
          <div>
            <div className="num-tag">/ 07 — FAQ</div>
            <h2>
              Common
              <br />
              questions.
            </h2>
          </div>
          <div className="lead">
            Anything not answered here, ring or email — usually faster than typing it out anyway.
          </div>
        </div>
        <div className="faq-list">
          {site.faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>
                <span>{f.q}</span>
                <span className="plus" aria-hidden>
                  +
                </span>
              </summary>
              <div className="faq-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
