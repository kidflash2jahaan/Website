import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";

const items = [
  {
    label: "Music Leadership",
    title: "Founder & Director — The Young Timers",
    body: "Formed and leads the band. Arranges every song, teaches bandmates their parts, and directs live sets across thirty-plus performances. Cross-cultural arrangement of Sun Raha Hai Na Tu — wrote all parts and coached every performer.",
  },
  {
    label: "Youth Education",
    title: "Instructor — Kids Teach Tech",
    body: "Teaching Assistant and Instructor. Took ownership of curriculum delivery: taught coding fundamentals to younger students.",
    year: "2020",
  },
  {
    label: "Student Government",
    title: "Continuous Student Council, 5th–8th grade",
    body: "Led sound-tech initiatives across school events. Campaigned for Vice President in eighth grade on a platform centered on student voice.",
  },
  {
    label: "News Production",
    title: "Lead Producer — Oakridge Private School",
    body: "Authored, edited, and produced monthly school highlight news videos.",
  },
  {
    label: "Community Music",
    title: "Volunteer performer",
    body: "Sunrise Senior Living, Independence Day cultural events, Diwali celebrations, and community festivals.",
  },
];

export function Leadership() {
  return (
    <Section
      id="leadership"
      number="03"
      eyebrow="Leadership & Impact"
      title={
        <>
          Take ownership.
          <br />
          <span className="display-italic gradient-text">Speak up.</span>{" "}
          Build.
        </>
      }
      lede={
        <>
          A pattern across roles: form the team, set the direction, take the
          uncomfortable conversations. From the Young Timers to the FRC pit, the
          throughline is the same — quiet ownership of whole systems.
        </>
      }
    >
      <ol className="grid grid-cols-12 gap-x-8 gap-y-10">
        {items.map((it, i) => (
          <Reveal
            as="li"
            key={it.title}
            delay={(i % 2) * 80}
            className="col-span-12 md:col-span-6"
          >
            <GlassCard className="flex h-full flex-col p-8 md:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <span className="eyebrow eyebrow-accent">{it.label}</span>
                {it.year ? (
                  <span
                    className="text-xs text-[var(--color-text-mute)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {it.year}
                  </span>
                ) : null}
              </div>
              <h3
                className="display mt-4 text-[var(--color-text-strong)]"
                style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.8rem)" }}
              >
                {it.title}
              </h3>
              <p className="mt-4 text-[var(--color-text-soft)]">{it.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
