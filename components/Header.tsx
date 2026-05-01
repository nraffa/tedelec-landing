import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  return (
    <div className="container">
      <header className="nav">
        <div className="nav-brand">
          <div className="logo-circle">
            <Logo />
          </div>
          <div className="brand-name">Tedelec</div>
        </div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#coverage">Coverage</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href={`tel:${site.contact.phoneIntl}`} className="nav-cta">
          <Icon name="bolt" size={14} /> Call Now
        </a>
      </header>
    </div>
  );
}
