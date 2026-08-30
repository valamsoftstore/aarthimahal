import { Link } from "react-router-dom";
import { contact } from "../data";
import { GoldRule } from "./Decor";
import { useLang } from "../i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <p className="site-footer__app">ஆர்த்தி மஹால் · Sivakasi</p>
      <div className="site-footer__inner">
        <GoldRule />
        <div className="site-footer__grid">
          <div>
            <p className="eyebrow">ஆர்த்தி மஹால்</p>
            <h2 className="serif">Aarthi Mahal</h2>
            <p className="muted">{t.footerCopy}</p>
          </div>
          <div>
            <p className="footer-label">{t.visit}</p>
            <p>{t.addr}</p>
            <p>{t.hours}</p>
          </div>
          <div>
            <p className="footer-label">{t.book}</p>
            <p>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <div className="footer-links">
              <Link to="/packages">{t.navPackages}</Link>
              <Link to="/book">{t.navEnquire}</Link>
              <Link to="/gallery">{t.navGallery}</Link>
            </div>
          </div>
        </div>
        <p className="site-footer__legal">
          © {new Date().getFullYear()} Aarthi Mahal. {t.legal}
        </p>
        <a
          className="site-footer__studio"
          href="https://valamsoftware.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="site-footer__studio-rule" aria-hidden />
          <p className="site-footer__studio-kicker">Software developed &amp; maintained by</p>
          <p className="site-footer__studio-name">Valam Software Technologies</p>
          <p className="site-footer__studio-author">SM Palaniselvam</p>
          <p className="site-footer__studio-url">valamsoftware.com</p>
        </a>
      </div>
    </footer>
  );
}
