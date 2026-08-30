import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { InviteOrnament } from "../components/Atmosphere";
import { halls, packages } from "../data";
import { GoldRule } from "../components/Decor";
import { Reveal } from "../components/Reveal";
import { useLang } from "../i18n";

type FormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  hall: string;
  pack: string;
  guests: string;
  notes: string;
};

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  date: "",
  hall: "",
  pack: "",
  guests: "",
  notes: "",
};

export function Book() {
  const { lang, t } = useLang();
  const [params] = useSearchParams();
  const preset = params.get("package") ?? "";
  const [form, setForm] = useState<FormState>({ ...empty, pack: preset });
  const [sent, setSent] = useState(false);

  const selectedPack = useMemo(
    () => packages.find((p) => p.id === form.pack),
    [form.pack],
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="page book-page">
        <div className="success-card">
          <InviteOrnament />
          <p className="eyebrow">{t.received}</p>
          <h1 className="serif">{t.receivedTitle}</h1>
          <GoldRule />
          <p>
            {t.thanks}
            {form.name ? `, ${form.name}` : ""}. {t.weCall}
          </p>
          <button type="button" className="btn btn--gold" onClick={() => setSent(false)}>
            {t.another}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page book-page">
      <header className="page-intro">
        <p className="eyebrow">{t.bookKicker}</p>
        <h1 className="serif">{t.bookTitle}</h1>
        <GoldRule />
        <p className="muted">{t.bookLead}</p>
      </header>

      <Reveal from="up">
      <form className="book-form" onSubmit={onSubmit}>
        <InviteOrnament />
        <div className="invite-head">
          <p>{t.inviteLine}</p>
          <strong>{t.inviteSub}</strong>
        </div>
        <label>
          {t.name}
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={t.namePh}
          />
        </label>
        <label>
          {t.mobile}
          <input
            required
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91"
          />
        </label>
        <label>
          {t.email}
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={t.optional}
          />
        </label>
        <label>
          {t.date}
          <input
            required
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </label>
        <label>
          {t.hall}
          <select value={form.hall} onChange={(e) => setForm({ ...form, hall: e.target.value })}>
            <option value="">{t.guideUs}</option>
            {halls.map((h) => (
              <option key={h.id} value={h.id}>
                {lang === "ta" ? h.tamil : h.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t.pack}
          <select value={form.pack} onChange={(e) => setForm({ ...form, pack: e.target.value })}>
            <option value="">{t.openAdvice}</option>
            {packages.map((p) => (
              <option key={p.id} value={p.id}>
                {lang === "ta" ? p.tamil : p.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t.guests}
          <input
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            placeholder="e.g. 600"
          />
        </label>
        <label className="book-form__wide">
          {t.notes}
          <textarea
            rows={4}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder={t.notesPh}
          />
        </label>
        {selectedPack ? (
          <p className="form-hint">
            {t.enquiring} <strong>{lang === "ta" ? selectedPack.tamil : selectedPack.name}</strong> — {selectedPack.priceFrom}.
          </p>
        ) : null}
        <button type="submit" className="btn btn--gold btn--block book-form__submit">
          {t.send}
        </button>
      </form>
      </Reveal>
    </div>
  );
}
