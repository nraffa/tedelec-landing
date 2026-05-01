import { PhotoFrame } from "./PhotoFrame";

export function About() {
  return (
    <section className="section" id="about" style={{ paddingBottom: 100 }}>
      <div className="container">
        <div className="about-split">
          <PhotoFrame
            src="/images/portrait-ted.jpg"
            alt="Ted Hall on a Tedelec job site"
            placeholder="Portrait · Ted Hall"
            className="about-img"
          />
          <div className="about-text">
            <div className="num-tag">/ 04 — About</div>
            <h2>Meet Ted.</h2>
            <p>
              Tedelec is run by Ted Hall — a fully licensed, twenty-year sparky based on the Northern
              Beaches. He started Tedelec to do electrical work the way it should be done: properly,
              neatly, and on time.
            </p>
            <p>
              The business has grown almost entirely through word of mouth. There&apos;s a reason for
              that.
            </p>
            <div className="signoff">
              <span className="bar" /> TED HALL · OWNER · NORTHERN BEACHES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
