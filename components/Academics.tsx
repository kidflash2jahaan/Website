import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ScrollPop } from "./ScrollPop";
import { GlassCard } from "./GlassCard";

export function Academics() {
  return (
    <Section
      id="academics"
      number="04"
      eyebrow="Academics & Recognition"
      title={
        <>
          Honor roll —
          <br />
          <span className="display-italic gradient-text">unbroken</span>.
        </>
      }
      lede={
        <>
          Sage Hill School, Class of 2029. Continuous Honor Roll from first
          grade to present, including High Academic Honor Roll in eighth grade.
        </>
      }
    >
      <div className="grid grid-cols-12 gap-x-8 gap-y-10">
        <ScrollPop className="col-span-12 lg:col-span-6">
          <GlassCard className="p-8 md:p-10">
            <span className="eyebrow eyebrow-accent">President&apos;s Award</span>
            <h3
              className="display mt-5 text-[var(--color-text-strong)]"
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)" }}
            >
              Presidential Award for
              <span className="display-italic">
                {" "}
                Outstanding Academic Excellence
              </span>
            </h3>
            <p className="mt-5 text-[var(--color-text-soft)]">
              Awarded in 5th, 6th, and 7th grade. White House congratulatory
              letter received in 8th grade (2025).
            </p>
            <ul className="mt-7 grid grid-cols-3 border-t border-[var(--color-text-fainter)] pt-5">
              {["5", "6", "7"].map((g) => (
                <li key={g}>
                  <div
                    className="numeral gradient-text"
                    style={{ fontSize: "2rem", lineHeight: 1 }}
                  >
                    {g}
                  </div>
                  <div className="eyebrow mt-1">grade</div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollPop>

        <ScrollPop className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-1 gap-y-6">
            <GlassCard className="p-7">
              <span className="eyebrow eyebrow-accent">School Awards</span>
              <h4
                className="mt-3 text-[var(--color-text)]"
                style={{ fontSize: "1.05rem", fontWeight: 500 }}
              >
                Principal&apos;s Award · Student of the Quarter (twice) ·
                Teacher&apos;s Choice Award · Academic Excellence medals ·
                Computer Achievement Certificates
              </h4>
            </GlassCard>
            <GlassCard className="p-7">
              <span className="eyebrow eyebrow-accent">Spelling Bee</span>
              <h4
                className="mt-3 text-[var(--color-text)]"
                style={{ fontSize: "1.05rem", fontWeight: 500 }}
              >
                Three-time school champion · Orange County Spelling Bee
                representative (2022 – 2024) · Scripps champion, 6th grade
              </h4>
            </GlassCard>
            <GlassCard className="p-7">
              <span className="eyebrow eyebrow-accent">Current</span>
              <h4
                className="mt-3 text-[var(--color-text)]"
                style={{ fontSize: "1.05rem", fontWeight: 500 }}
              >
                Sage Hill School · Newport Coast, CA · Freshman, Class of 2029
              </h4>
            </GlassCard>
          </div>
        </ScrollPop>
      </div>
    </Section>
  );
}
