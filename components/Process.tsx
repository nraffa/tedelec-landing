import { site } from "@/lib/site";

export function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="head">
          <div>
            <div className="num-tag">/ 02 — How it works</div>
            <h2>
              Three steps.
              <br />
              That&apos;s it.
            </h2>
          </div>
          <div className="lead">No quoting circus, no waiting around, no chasing tradies.</div>
        </div>
        <div className="process-grid">
          {site.process.map((step) => (
            <div className="step" key={step.n}>
              <div className="n">{step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.blurb}</p>
            </div>
          ))}
        </div>
        <div className="process-acc-list">
          {site.process.map((step) => (
            <details className="step-acc" key={step.n}>
              <summary>
                <span className="step-acc-num">{step.n}</span>
                <span className="step-acc-title">{step.title}</span>
                <span className="step-acc-chev" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="step-acc-blurb">{step.blurb}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
