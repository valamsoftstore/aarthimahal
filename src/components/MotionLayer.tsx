import { useEffect, useState } from "react";

export function IntroSplash() {
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const leave = window.setTimeout(() => setOut(true), 2200);
    const remove = window.setTimeout(() => setGone(true), 2800);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`intro-splash${out ? " is-out" : ""}`} aria-hidden>
      <div className="intro-splash__orbit">
        <i className="intro-splash__spin" />
        <span className="intro-splash__mark">ஆ</span>
      </div>
      <p>ஆர்த்தி மஹால்</p>
      <em>Aarthi Mahal</em>
      <small>Heritage · Sivakasi</small>
    </div>
  );
}
