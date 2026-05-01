import { site } from "@/lib/site";

export function Marquee() {
  const track = (
    <span>
      {site.marqueeWords.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
          {w} <span className="dot" />
        </span>
      ))}
      &nbsp;
    </span>
  );
  return (
    <div className="marquee-band" aria-hidden>
      <div className="marquee-track">
        {track}
        {track}
      </div>
    </div>
  );
}
