import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
};

function scrollRoot() {
  return null;
}

export function Reveal({ children, className = "", delay = 0, from = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setOn(true);
    const root = scrollRoot();
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { root: root ?? null, threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${from} ${on ? "is-in" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

type CountProps = {
  to: number;
  suffix?: string;
};

export function CountUp({ to, suffix = "" }: CountProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const run = () => {
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - t) ** 3;
        setValue(Math.round(to * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const root = scrollRoot();
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { root: root ?? null, threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  const text = to >= 1000 ? value.toLocaleString("en-IN") : String(value);

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}
