import type { ReactNode } from "react";

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`gold-rule ${className}`} aria-hidden>
      <span />
      <i />
      <span />
    </div>
  );
}

export function KolamMark() {
  return (
    <svg className="kolam" viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="3" fill="currentColor" />
      <circle cx="40" cy="18" r="2.2" fill="currentColor" />
      <circle cx="40" cy="62" r="2.2" fill="currentColor" />
      <circle cx="18" cy="40" r="2.2" fill="currentColor" />
      <circle cx="62" cy="40" r="2.2" fill="currentColor" />
      <path
        d="M40 14c14 8 22 14 26 26-4 12-12 18-26 26-14-8-22-14-26-26 4-12 12-18 26-26Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity=".7"
      />
    </svg>
  );
}

export function ArchFrame({ children }: { children: ReactNode }) {
  return (
    <div className="arch-frame">
      <div className="arch-frame__inner">{children}</div>
    </div>
  );
}
