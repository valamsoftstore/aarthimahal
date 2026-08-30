import { contact } from "../data";
import { GoldRule } from "../components/Decor";
import { Reveal } from "../components/Reveal";
import { useLang } from "../i18n";

export function Contact() {
  const { t } = useLang();

  return (
    <div className="page contact-page">
      <header className="page-intro">
        <p className="eyebrow">{contact.name}</p>
        <h1 className="serif">{t.visitTitle}</h1>
        <GoldRule />
        <p className="muted">{t.visitLead}</p>
      </header>

      <div className="contact-cards">
        <Reveal delay={40}>
          <article className="info-card">
            <h2>{t.address}</h2>
            <p>
              <a
                className="map-pin-link"
                href={contact.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.addr}
              </a>
            </p>
            <p>
              <a
                className="map-pin-link"
                href={contact.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                {contact.plusCode}
              </a>
            </p>
          </article>
        </Reveal>
        <Reveal delay={120}>
          <article className="info-card">
            <h2>{t.desk}</h2>
            <p>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>{t.hours}</p>
          </article>
        </Reveal>
      </div>

      <Reveal delay={180}>
        <div className="contact-actions">
          <a className="btn btn--gold" href={contact.phoneHref}>
            {t.callHouse}
          </a>
          <a className="btn btn--outline" href={contact.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </Reveal>

      <div className="map-wrap">
        <iframe
          title="Aarthi Mahal — FPGW+R8 Sivakasi"
          src={contact.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          className="map-wrap__open"
          href={contact.mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
