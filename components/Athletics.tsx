import { Section } from "./Section";
import { ScrollPop } from "./ScrollPop";
import { ScrollTypewriter } from "./ScrollTypewriter";
import { GlassCard } from "./GlassCard";

const sports = [
  {
    name: "Tennis",
    duration: "5+ years",
    detail:
      "Sage Hill School tennis team. Spring 2025 USTA Junior Team Tennis Championship — OC 14U Novice.",
  },
  {
    name: "Volleyball",
    duration: "3 years",
    detail: "East Anaheim League.",
  },
  {
    name: "Hip-hop dance",
    duration: "5 years",
    detail: "Pacific Dance Academy and South Coast Performing Arts.",
  },
];

export function Athletics() {
  return (
    <Section
      id="athletics"
      number="05"
      eyebrow="Athletics"
      title={
        <>
          On the court,
          <br />
          <span className="display-italic gradient-text">on the floor</span>.
        </>
      }
    >
      <ol className="grid grid-cols-12 gap-x-8 gap-y-8">
        {sports.map((s) => (
          <ScrollPop key={s.name} className="col-span-12 md:col-span-4">
            <GlassCard className="flex h-full flex-col p-7 md:p-8">
              <span className="eyebrow eyebrow-accent">{s.duration}</span>
              <ScrollTypewriter
                className="display mt-3 text-[var(--color-text-strong)]"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 1.9rem)", lineHeight: 1.15 }}
                lines={[[{ text: s.name }]]}
                charDelay={50}
              />
              <p className="mt-3 text-[var(--color-text-soft)]">{s.detail}</p>
            </GlassCard>
          </ScrollPop>
        ))}
      </ol>
    </Section>
  );
}
