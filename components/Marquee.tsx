import type { ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
  className?: string;
};

/**
 * Pure-CSS infinite marquee. Items are duplicated so the loop is seamless.
 * Pause on hover via .marquee:hover .marquee-track in CSS.
 */
export function Marquee({ items, className = "" }: MarqueeProps) {
  return (
    <div className={`marquee ${className}`} aria-hidden>
      <ul className="marquee-track">
        {items.map((item, i) => (
          <li key={`a-${i}`}>{item}</li>
        ))}
        {items.map((item, i) => (
          <li key={`b-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
