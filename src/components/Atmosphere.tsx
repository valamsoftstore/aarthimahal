export function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden>
      {Array.from({ length: 12 }, (_, i) => (
        <i key={i} className={`petal petal--${i + 1}`} />
      ))}
    </div>
  );
}

export function InviteOrnament() {
  return (
    <div className="invite-ornament" aria-hidden>
      <b />
      <b />
      <b />
      <b />
    </div>
  );
}

export function TempleArch() {
  return (
    <svg className="temple-arch" viewBox="0 0 300 180" fill="none" aria-hidden>
      <path
        d="M20 170 V78 C20 28 150 8 150 8 C150 8 280 28 280 78 V170"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M38 170 V86 C38 42 150 24 150 24 C150 24 262 42 262 86 V170"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity=".55"
      />
      <circle cx="150" cy="22" r="3.2" fill="currentColor" />
    </svg>
  );
}

export function HangingBells() {
  return (
    <div className="hanging-bells" aria-hidden>
      <span />
      <span />
      <span />
    </div>
  );
}
