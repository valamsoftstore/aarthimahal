import { Link } from "react-router-dom";
import { InviteOrnament } from "../components/Atmosphere";
import { packages } from "../data";
import { GoldRule } from "../components/Decor";
import { Reveal } from "../components/Reveal";
import { packCopy, useLang } from "../i18n";

export function Packages() {
  const { lang, t } = useLang();

  return (
    <div className="page packages-page">
      <header className="page-intro">
        <p className="eyebrow">{t.packKicker}</p>
        <h1 className="serif">{t.packTitle}</h1>
        <GoldRule />
        <p className="muted">{t.packLead}</p>
      </header>

      <div className="pack-grid">
        {packages.map((pack, i) => {
          const copy = packCopy(pack.id, lang, pack);
          return (
            <Reveal key={pack.id} delay={i * 100} from="scale">
              <article className={pack.featured ? "pack pack--featured" : "pack"}>
                <InviteOrnament />
                {pack.featured ? <span className="wax-seal">ஆ</span> : <span className="pack__badge">{copy.tier}</span>}
                <p className="pack__tier">{copy.tier}</p>
                <h2 className="serif">{pack.name}</h2>
                <p className="pack__price">
                  {t.from} <strong>{pack.priceFrom}</strong>
                  <span>{copy.guests}</span>
                </p>
                <ul>
                  {copy.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <Link className="btn btn--gold btn--block" to={`/book?package=${pack.id}`}>
                  {t.enquirePlan}
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
