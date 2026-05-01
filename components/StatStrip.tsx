import { site } from "@/lib/site";

export function StatStrip() {
  return (
    <div className="stat-strip">
      {site.stats.map((s) => (
        <div key={s.lbl} className={"stat" + ("accent" in s && s.accent ? " accent" : "")}>
          <div className="num">{s.num}</div>
          <div className="lbl">{s.lbl}</div>
        </div>
      ))}
    </div>
  );
}
