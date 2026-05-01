import { site } from "@/lib/site";
import { Icon } from "./Icon";

export function StickyCallBar() {
  return (
    <div className="sticky-bar" role="region" aria-label="Quick contact">
      <div>
        <div className="label">24/7 emergency</div>
        <div className="num">{site.contact.phone}</div>
      </div>
      <a href={`tel:${site.contact.phoneIntl}`}>
        <Icon name="phone" size={14} /> Call now
      </a>
    </div>
  );
}
