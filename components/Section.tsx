import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
};

export function Section({
  id,
  number,
  eyebrow,
  title,
  lede,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 px-6 py-12 md:px-12 md:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="hairline mb-10" />
        <header className="grid grid-cols-12 gap-x-8 gap-y-10 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span
                  className="numeral"
                  style={{
                    fontSize: "3rem",
                    background:
                      "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-warm) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {number}
                </span>
                <span className="eyebrow eyebrow-accent">{eyebrow}</span>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal delay={80}>
              <h2
                className="display text-[var(--color-text-strong)]"
                style={{
                  fontSize: "clamp(2.6rem, 6.4vw, 5.4rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {title}
              </h2>
            </Reveal>
            {lede ? (
              <Reveal delay={160}>
                <p
                  className="mt-8 max-w-2xl leading-snug text-[var(--color-text-soft)]"
                  style={{ fontSize: "1.2rem" }}
                >
                  {lede}
                </p>
              </Reveal>
            ) : null}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
