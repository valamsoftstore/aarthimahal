import { Link, NavLink } from "react-router-dom";
import { IconPhone } from "./Icons";
import { contact } from "../data";
import { useLang } from "../i18n";

export function AppHeader() {
  const { t } = useLang();
  const links = [
    { to: "/", label: t.navHome },
    { to: "/gallery", label: t.navGallery },
    { to: "/packages", label: t.navPackages },
    { to: "/book", label: t.navEnquire },
    { to: "/contact", label: t.navVisit },
  ];

  return (
    <header className="app-header">
      <div className="app-header__bar">
        <Link to="/" className="brand" aria-label="Aarthi Mahal">
          <span className="brand__mark">ஆ</span>
          <span className="brand__text">
            <small>ஆர்த்தி மஹால்</small>
            <em>Aarthi Mahal</em>
          </span>
        </Link>

        <nav className="desk-nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `desk-nav__link${isActive ? " is-active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-tools">
          <a className="header-cta" href={contact.phoneHref}>
            <IconPhone className="icon-18" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </header>
  );
}
