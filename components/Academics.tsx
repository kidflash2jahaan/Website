import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ScrollPop } from "./ScrollPop";
import { ScrollTypewriter } from "./ScrollTypewriter";
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
            <ScrollTypewriter
              className="display mt-5 text-[var(--color-text-strong)]"
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)", lineHeight: 1.1 }}
              lines={[
                [
                  { text: "Presidential Award for" },
                  {
                    text: " Outstanding Academic Excellence",
                    className: "display-italic",
                  },
                ],
              ]}
              charDelay={22}
            />
            <ScrollTypewriter
              className="mt-5 text-[var(--color-text-soft)]"
              charDelay={11}
              lines={[
                [
                  {
                    text:
                      "Awarded in 5th, 6th, and 7th grade. White House congratulatory letter received in 8th grade (2025).",
                  },
                ],
              ]}
            />
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
              <ScrollTypewriter
                className="mt-3 text-[var(--color-text)]"
                style={{ fontSize: "1.05rem", fontWeight: 500 }}
                charDelay={9}
                lines={[
                  [
                    {
                      text:
                        "Principal’s Award · Student of the Quarter (twice) · Teacher’s Choice Award · Academic Excellence medals · Computer Achievement Certificates",
                    },
                  ],
                ]}
              />
            </GlassCard>
            <GlassCard className="p-7">
              <span className="eyebrow eyebrow-accent">Spelling Bee</span>
              <ScrollTypewriter
                className="mt-3 text-[var(--color-text)]"
                style={{ fontSize: "1.05rem", fontWeight: 500 }}
                charDelay={11}
                lines={[
                  [
                    {
                      text:
                        "Three-time school champion · Orange County Spelling Bee representative (2022 – 2024) · Scripps champion, 6th grade",
                    },
                  ],
                ]}
              />
            </GlassCard>
            <GlassCard className="p-7">
              <span className="eyebrow eyebrow-accent">Current</span>
              <ScrollTypewriter
                className="mt-3 text-[var(--color-text)]"
                style={{ fontSize: "1.05rem", fontWeight: 500 }}
                charDelay={14}
                lines={[
                  [
                    {
                      text:
                        "Sage Hill School · Newport Coast, CA · Freshman, Class of 2029",
                    },
                  ],
                ]}
              />
            </GlassCard>
          </div>
        </ScrollPop>
      </div>
    </Section>
  );
}
