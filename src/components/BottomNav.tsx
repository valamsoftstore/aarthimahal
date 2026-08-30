import { NavLink } from "react-router-dom";
import { IconBook, IconContact, IconGallery, IconHome, IconPackages } from "./Icons";
import { useLang } from "../i18n";

export function BottomNav() {
  const { t } = useLang();
  const tabs = [
    { to: "/", label: t.navHome, icon: IconHome, end: true },
    { to: "/gallery", label: t.navGallery, icon: IconGallery },
    { to: "/packages", label: t.navPackages, icon: IconPackages },
    { to: "/book", label: t.navBook, icon: IconBook },
    { to: "/contact", label: t.navVisit, icon: IconContact },
  ];

  return (
    <nav className="bottom-nav" aria-label="App">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) =>
              `bottom-nav__tab${tab.to === "/book" ? " bottom-nav__tab--book" : ""}${isActive ? " is-active" : ""}`
            }
          >
            <span className="bottom-nav__icon">
              <Icon className="icon-22" />
            </span>
            <span>{tab.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
