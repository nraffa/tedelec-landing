import { site } from "@/lib/site";

export function Coverage() {
  return (
    <section className="section coverage-band" id="coverage">
      <div className="container">
        <div className="head">
          <div>
            <div className="num-tag">/ 05 — Coverage</div>
            <h2>
              Northern Beaches.
              <br />
              North Shore.
            </h2>
          </div>
          <div className="lead">
            Local sparky, local knowledge. If your suburb&apos;s not listed, ring anyway — we
            probably cover it.
          </div>
        </div>
        <div className="suburb-chips">
          {site.areas.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
