import { Reveal } from "./Reveal";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative scroll-mt-24 px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="hairline-accent mb-10" />
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
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
                  06
                </span>
                <span className="eyebrow eyebrow-accent">Vision</span>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal delay={80}>
              <p
                className="display text-[var(--color-text-strong)]"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                I want to{" "}
                <span className="display-italic gradient-text">
                  found a technology company
                </span>{" "}
                — building toward it through deep technical expertise in AI,
                robotics, and intelligent systems. Pursue CS or engineering at a
                top university. Lead teams that build things that matter, across
                technology, music, and community.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p
                className="mt-12 max-w-2xl leading-snug text-[var(--color-text-soft)]"
                style={{ fontSize: "1.2rem" }}
              >
                The way I&apos;ve always worked — take ownership of whole
                systems, lead teams under pressure, and speak up when something
                needs to change. The robot stack and the band, the science fair
                project and the recital — same instinct, same throughline.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
