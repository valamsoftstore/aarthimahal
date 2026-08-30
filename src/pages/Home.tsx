import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { amenities, contact, halls, rites, testimonials } from "../data";
import { GoldRule, KolamMark } from "../components/Decor";
import { IconArrow } from "../components/Icons";
import { CountUp, Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { amenCopy, hallCopy, quoteCopy, riteCopy, useLang } from "../i18n";

const bannerSlides = [
  { src: "/images/banner-interior.png", pos: "center 52%" },
  { src: "/images/banner-exterior.png", pos: "center 58%" },
];

export function Home() {
  const { lang, t } = useLang();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    bannerSlides.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
    const tick = window.setInterval(() => {
      setSlide((n) => (n + 1) % bannerSlides.length);
    }, 12000);
    return () => window.clearInterval(tick);
  }, []);

  return (
    <div className="page home">
      <section className="hero hero--enter">
        <div className="hero__media" aria-hidden>
          {bannerSlides.map((item, i) => (
            <img
              key={item.src}
              className={`hero__shot${i === slide ? " is-on" : ""}`}
              src={item.src}
              alt=""
              style={{ objectPosition: item.pos }}
            />
          ))}
        </div>
        <div className="hero__veil" />
        <div className="hero__stage">
          <p className="hero__tamil">ஆர்த்தி மஹால்</p>
          <p className="hero__line">Beautiful halls. Impeccable service.</p>
          <div className="hero__actions">
            <Link className="btn btn--gold" to="/book">
              {t.reserve} <IconArrow className="icon-18" />
            </Link>
            <Link className="btn btn--ghost" to="/gallery">
              {t.walkHalls}
            </Link>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {(lang === "ta"
            ? ["முகூர்த்தம்", "நாதஸ்வரம்", "விருந்து", "சங்கீதம்", "வரவேற்பு"]
            : ["Muhurtham", "Nadaswaram", "Virundhu", "Sangeet", "Reception"]
          )
            .concat(lang === "ta"
              ? ["முகூர்த்தம்", "நாதஸ்வரம்", "விருந்து", "சங்கீதம்", "வரவேற்பு"]
              : ["Muhurtham", "Nadaswaram", "Virundhu", "Sangeet", "Reception"])
            .map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
            ))}
        </div>
      </div>

      <section className="section">
        <Reveal>
          <SectionHead kicker={t.dayKicker} title={t.dayTitle} />
        </Reveal>
        <div className="rite-rail">
          {rites.map((rite, i) => (
            <Reveal key={rite.n} delay={i * 80} from="up">
              <article className="rite-card">
                <em>{rite.n}</em>
                <h3 className="serif">{rite.en}</h3>
                <p>{riteCopy(lang, i, rite.copy)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section story">
        <Reveal from="left" className="story__copy">
          <p className="eyebrow">{t.houseKicker}</p>
          <h2 className="serif">{t.houseTitle}</h2>
          <GoldRule />
          <p>{t.houseP1}</p>
          <p className="muted">{t.houseP2}</p>
          <ul className="stat-row">
            <li>
              <strong>
                <CountUp to={3} />
              </strong>
              <span>{t.statSpaces}</span>
            </li>
            <li>
              <strong>
                <CountUp to={1200} />
              </strong>
              <span>{t.statGuests}</span>
            </li>
            <li>
              <strong>
                <CountUp to={12} />
              </strong>
              <span>{t.statRooms}</span>
            </li>
          </ul>
        </Reveal>
        <Reveal from="right" delay={80} className="story__frame">
          <img src="/images/tn-devi-mandapam.jpg" alt="" />
          <div className="story__caption">
            <KolamMark />
            <p>{t.storyCap}</p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <SectionHead kicker={t.spacesKicker} title={t.spacesTitle} />
        </Reveal>
        <div className="hall-rail">
          {halls.map((hall, i) => {
            const copy = hallCopy(hall.id, lang, hall);
            return (
              <Reveal key={hall.id} delay={i * 90} from="scale">
                <article className="hall-card">
                  <span className="hall-card__index">0{i + 1}</span>
                  <div className="hall-card__media">
                    <img src={hall.image} alt={copy.name} />
                    <span>{copy.name}</span>
                  </div>
                  <div className="hall-card__body">
                    <h3 className="serif">{copy.name}</h3>
                    <p>{copy.blurb}</p>
                    <div className="pill-row">
                      <b>{copy.capacity}</b>
                      <b>{copy.area}</b>
                      {copy.tags.map((tag) => (
                        <i key={tag}>{tag}</i>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section amenities">
        <Reveal>
          <SectionHead kicker={t.careKicker} title={t.careTitle} />
        </Reveal>
        <div className="amenity-grid">
          {amenities.map((item, i) => {
            const copy = amenCopy(lang, i, item);
            return (
              <Reveal key={item.title} delay={i * 50} from="up">
                <article className="amenity">
                  <em>0{i + 1}</em>
                  <h3>{copy.title}</h3>
                  <p>{copy.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section quotes">
        <Reveal>
          <SectionHead kicker={t.lettersKicker} title={t.lettersTitle} />
        </Reveal>
        <div className="quote-grid">
          {testimonials.map((item, i) => {
            const copy = quoteCopy(lang, i, item);
            return (
              <Reveal key={item.name} delay={i * 90} from="right">
                <blockquote className="quote">
                  <p>“{copy.quote}”</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{copy.place}</span>
                  </footer>
                </blockquote>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Reveal from="scale">
        <section className="cta-band">
          <p className="eyebrow eyebrow--gold">{t.ctaKicker}</p>
          <h2 className="serif">{t.ctaTitle}</h2>
          <p>{t.ctaLead}</p>
          <div className="hero__actions">
            <Link className="btn btn--gold" to="/book">
              {t.enquireNow}
            </Link>
            <a className="btn btn--ghost" href={contact.phoneHref}>
              {contact.phone}
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
