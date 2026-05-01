import { site } from "@/lib/site";
import { Icon } from "./Icon";

export function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-row">
        <div className="marquee">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span className="pulse" /> 24/7 Emergency Crew · On Call Now
          </span>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href={`tel:${site.contact.phoneIntl}`}>
            <Icon name="phone" size={12} /> {site.contact.phone}
          </a>
          <a href={`mailto:${site.contact.email}`}>
            <Icon name="mail" size={12} /> {site.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
