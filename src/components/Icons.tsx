type IconProps = { className?: string };

export function IconHome({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1v-8.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconGallery({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8 14 2.4-2.6L14 15l2-1.8 3 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="9" cy="9.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconPackages({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 8.2 12 4.5l7.5 3.7v7.6L12 19.5 4.5 15.8V8.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 19.2V12M4.8 8.4 12 12l7.2-3.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconBook({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.8v3.4M16 3.8v3.4M4.4 10.4h15.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconContact({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-6.5-4.4-6.5-9.2A6.5 6.5 0 0 1 12 5.3a6.5 6.5 0 0 1 6.5 6.5C18.5 16.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11.6" r="2.1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7.2 4.8h2.4l1.2 3-1.8 1.2a12 12 0 0 0 6 6l1.2-1.8 3 1.2v2.4c0 .7-.6 1.3-1.3 1.3C9.6 18.1 5.9 14.4 5.9 6.1c0-.7.6-1.3 1.3-1.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
