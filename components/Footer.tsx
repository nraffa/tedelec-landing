import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="footer-brand">
          <div className="logo-circle">
            <Logo />
          </div>
          Tedelec
        </div>
        <div className="footer-meta">
          © {year} Tedelec · {site.brand.license} · {site.brand.serviceArea}
        </div>
      </div>
    </footer>
  );
}
