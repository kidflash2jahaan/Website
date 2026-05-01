import { Reveal } from "./Reveal";
import { AnimatedNumber } from "./AnimatedNumber";

const stats = [
  { value: "9+", label: "Years building software", since: "since age 6" },
  {
    value: "30+",
    label: "Live performances",
    since: "guitar, vocals, piano",
  },
  {
    value: "L9",
    label: "MTAC Certificate of Merit",
    since: "State Honors, 2025",
  },
  {
    value: "6",
    label: "Engineers led",
    since: "FRC Software Lead, 2026",
  },
];

export function StatsStrip() {
  return (
    <section
      aria-label="Selected stats"
      className="relative px-6 py-8 md:px-12 md:py-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="hairline-accent mb-8" />
        <div className="glass p-8 md:p-12">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} as="li" delay={i * 80}>
                <div className="flex flex-col">
                  <AnimatedNumber
                    value={s.value}
                    className="numeral stat-pop text-[var(--color-text-strong)]"
                    style={{ fontSize: "4.5rem", lineHeight: 1 }}
                  />
                  <span
                    className="mt-3 text-[var(--color-text)]"
                    style={{ fontSize: "1rem", fontWeight: 500 }}
                  >
                    {s.label}
                  </span>
                  <span className="eyebrow mt-2">{s.since}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
