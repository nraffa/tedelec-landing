import { site } from "@/lib/site";
import { Icon } from "./Icon";

export function ContactCTA() {
  return (
    <section className="section" id="contact" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="head">
          <div>
            <div className="num-tag">/ 08 — Get in touch</div>
            <h2>
              Ready when
              <br />
              you are.
            </h2>
          </div>
          <div className="lead">Call for emergencies. Email for quotes. Either way — fast response.</div>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Speak to Ted directly.</h2>
            <p>
              No call centres, no gatekeepers. The number on this page rings the man with the tools.
            </p>
            <a className="ci-row" href={`tel:${site.contact.phoneIntl}`}>
              <Icon name="phone" size={20} />
              <div>
                <div className="lbl">Call</div>
                <div className="val">{site.contact.phone}</div>
              </div>
            </a>
            <a className="ci-row" href={`mailto:${site.contact.email}?subject=Electrical%20enquiry`}>
              <Icon name="mail" size={20} />
              <div>
                <div className="lbl">Email</div>
                <div className="val">{site.contact.email}</div>
              </div>
            </a>
            <a
              className="ci-row"
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" size={20} />
              <div>
                <div className="lbl">Instagram</div>
                <div className="val">{site.contact.instagramHandle}</div>
              </div>
            </a>
          </div>
          <div className="contact-card">
            <h3>Hours & details.</h3>
            <div className="ci-row">
              <Icon name="clock" size={20} />
              <div>
                <div className="lbl">Standard hours</div>
                <div className="val">{site.hours.standard}</div>
              </div>
            </div>
            <div className="ci-row">
              <Icon name="bolt" size={20} />
              <div>
                <div className="lbl">After hours</div>
                <div className="val">{site.hours.emergency}</div>
              </div>
            </div>
            <div className="ci-row">
              <Icon name="shield" size={20} />
              <div>
                <div className="lbl">Licensed & insured</div>
                <div className="val">{site.brand.license}</div>
              </div>
            </div>
            <div className="ci-row" style={{ borderBottom: "none" }}>
              <Icon name="phone" size={20} />
              <div>
                <div className="lbl">Service area</div>
                <div className="val">{site.brand.serviceArea}</div>
              </div>
            </div>
            <a href={`tel:${site.contact.phoneIntl}`} className="btn-big">
              <Icon name="phone" size={18} /> Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
