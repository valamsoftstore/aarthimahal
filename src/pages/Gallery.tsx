import { useMemo, useState } from "react";
import { gallery } from "../data";
import { GoldRule } from "../components/Decor";
import { Reveal } from "../components/Reveal";
import { useLang } from "../i18n";

export function Gallery() {
  const { t } = useLang();
  const filters = [
    { id: "All", label: t.fAll },
    { id: "Halls", label: t.fHalls },
    { id: "Mandapam", label: t.fMandapam },
    { id: "Cuisine", label: t.fCuisine },
    { id: "Celebrations", label: t.fCelebrations },
  ] as const;
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("All");
  const [open, setOpen] = useState<string | null>(null);
  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );
  const active = items.find((i) => i.id === open);
  const catLabel: Record<string, string> = {
    Halls: t.fHalls,
    Mandapam: t.fMandapam,
    Cuisine: t.fCuisine,
    Celebrations: t.fCelebrations,
  };

  return (
    <div className="page gallery-page">
      <header className="page-intro">
        <p className="eyebrow">{t.galKicker}</p>
        <h1 className="serif">{t.galTitle}</h1>
        <GoldRule />
        <p className="muted">{t.galLead}</p>
      </header>

      <Reveal>
        <div className="chip-row" role="tablist">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? "chip is-on" : "chip"}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="masonry" key={filter}>
        {items.map((item) => (
          <figure key={item.id} className="masonry__item">
            <button type="button" className="masonry__hit" onClick={() => setOpen(item.id)}>
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
            </button>
            <figcaption>
              <span>{catLabel[item.category]}</span>
              <em>{item.alt}</em>
            </figcaption>
          </figure>
        ))}
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button type="button" aria-label="Close" onClick={() => setOpen(null)}>
            ×
          </button>
          <img src={active.src} alt={active.alt} />
        </div>
      ) : null}
    </div>
  );
}
