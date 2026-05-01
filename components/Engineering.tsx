import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ScrollPop } from "./ScrollPop";
import { ScrollTypewriter } from "./ScrollTypewriter";
import { GlassCard } from "./GlassCard";
import { Marquee } from "./Marquee";

const stack = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Spring Boot",
  "Docker",
  "Arduino",
  "Raspberry Pi",
  "TensorFlow",
  "Tailwind",
];

const certifications = [
  {
    title: "TensorFlow for Deep Learning Bootcamp",
    detail: "63 hours",
    year: "Feb 2026",
  },
  {
    title: "Machine Learning A–Z: AI, Python & R",
    detail: "43 hours",
    year: "May 2025",
  },
  {
    title: "The Complete 2024 Web Development Bootcamp",
    detail: "61.5 hours",
    year: "Oct 2024",
  },
  {
    title: "Ethical Hacking From Scratch",
    detail: "16 hours",
    year: "2022",
  },
];

const timeline = [
  {
    year: "2017",
    age: "Age 6",
    text: "First lines of code. Begins with Scratch and Python fundamentals.",
  },
  {
    year: "2019",
    age: "Age 8",
    text: "Builds and ships fireballtechnologies.com — first public website.",
  },
  {
    year: "2020",
    age: "Age 9",
    text: "Featured by GiveMeFive.AI; teaches at Kids Teach Tech; publishes coding tutorial videos on YouTube.",
  },
  {
    year: "2021",
    age: "Age 10",
    text: "Computer vision — face recognition in Python; cybersecurity foundations.",
  },
  {
    year: "2024",
    age: "Age 13",
    text: "61.5-hour Web Development Bootcamp; full-stack with React, Node, Express.",
  },
  {
    year: "2025",
    age: "Age 14",
    text: "Machine Learning A–Z (43 hrs). Begins competitive programming on Codeforces.",
  },
  {
    year: "2026",
    age: "Age 15",
    text: "Software Lead, Sage Hill FRC. TensorFlow for Deep Learning (63 hrs). OCSEF Outstanding Achievement.",
  },
];

export function Engineering() {
  return (
    <Section
      id="engineering"
      number="01"
      eyebrow="Technical Leadership"
      title={
        <>
          Engineering teams,
          <br />
          <span className="display-italic gradient-text">
            architecting systems
          </span>
          .
        </>
      }
      lede={
        <>
          Nine years of hands-on software development. Currently leading a team
          of six through two FRC District events as Software Lead — owning the
          full robot stack from autonomous routines to endgame logic.
        </>
      }
    >
      <div className="grid grid-cols-12 gap-x-8 gap-y-10">
        {/* Featured FRC */}
        <ScrollPop className="col-span-12 lg:col-span-8">
          <GlassCard className="h-full p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="eyebrow eyebrow-accent">Featured</span>
              <span className="eyebrow">
                Sage Hill School FRC · 2026 Season
              </span>
            </div>
            <ScrollTypewriter
              className="display mt-6 text-[var(--color-text-strong)]"
              style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)", lineHeight: 1.1 }}
              lines={[[{ text: "Software Lead — full robot stack, team of six" }]]}
              charDelay={22}
            />
            <ScrollTypewriter
              className="mt-6 max-w-2xl leading-snug text-[var(--color-text-soft)]"
              style={{ fontSize: "1.1rem" }}
              charDelay={10}
              lines={[
                [
                  {
                    text:
                      "Architected and authored the complete competition software stack: autonomous routines, motor control, sensor fusion, and endgame logic. At the LA District event, diagnosed and fixed a mid-match sensor integration failure between matches — kept the robot competing.",
                  },
                ],
              ]}
            />
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--color-text-fainter)] pt-6">
              <div className="flex items-baseline gap-3">
                <span
                  className="numeral gradient-text"
                  style={{ fontSize: "1.6rem" }}
                >
                  Mar
                </span>
                <span className="text-[var(--color-text-soft)]">
                  2026 CA District · Los Angeles Event
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span
                  className="numeral gradient-text"
                  style={{ fontSize: "1.6rem" }}
                >
                  Apr
                </span>
                <span className="text-[var(--color-text-soft)]">
                  2026 CA District · Mission Viejo Event
                </span>
              </div>
            </div>
          </GlassCard>
        </ScrollPop>

        {/* OCSEF */}
        <ScrollPop className="col-span-12 lg:col-span-4">
          <GlassCard className="flex h-full flex-col justify-between p-8 md:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-x-3">
                <span className="eyebrow eyebrow-accent">Award</span>
                <span className="eyebrow">71st Annual OCSEF · Mar 2026</span>
              </div>
              <ScrollTypewriter
                className="display mt-6 text-[var(--color-text-strong)]"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.1 }}
                lines={[
                  [
                    { text: "Mind in Motion —" },
                    { text: " assistive mobility", className: "display-italic" },
                  ],
                ]}
                charDelay={26}
              />
              <ScrollTypewriter
                className="mt-5 text-[var(--color-text-soft)]"
                charDelay={10}
                lines={[
                  [
                    {
                      text:
                        "Designed and built a motorized wheelchair system with remote control and a dead-man safety switch. Advocated for the kill-switch architecture during the Scientific Review Committee process.",
                    },
                  ],
                ]}
              />
            </div>
            <div className="mt-8 border-t border-[var(--color-text-fainter)] pt-5">
              <span className="eyebrow eyebrow-accent">
                Outstanding Achievement
              </span>
              <p className="mt-2 text-sm text-[var(--color-text-mute)]">
                Orange County Science & Engineering Fair, team project
              </p>
            </div>
          </GlassCard>
        </ScrollPop>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-x-8 gap-y-12">
        <Reveal className="col-span-12 md:col-span-6">
          <h3
            className="display text-[var(--color-text-strong)]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
          >
            <span className="display-italic gradient-text">
              AI & Machine Learning
            </span>
          </h3>
          <p className="mt-4 text-[var(--color-text-soft)]">
            106 certified hours across deep learning and classical ML. Hands-on
            with TensorFlow, Python data tooling, and computer vision from face
            recognition through model training.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {certifications.slice(0, 2).map((c) => (
              <li
                key={c.title}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-[var(--color-text-fainter)] pt-3"
              >
                <span className="text-[var(--color-text)]">{c.title}</span>
                <span
                  className="text-xs text-[var(--color-text-mute)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {c.detail} · {c.year}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-6" delay={120}>
          <h3
            className="display text-[var(--color-text-strong)]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
          >
            <span className="display-italic gradient-text">
              Full-stack & systems
            </span>
          </h3>
          <p className="mt-4 text-[var(--color-text-soft)]">
            React, Node, Spring Boot, Docker, Arduino, Raspberry Pi. Production
            web work since age 8 — a public, indexed website at
            fireballtechnologies.com, featured by GiveMeFive.AI.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {certifications.slice(2, 4).map((c) => (
              <li
                key={c.title}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-[var(--color-text-fainter)] pt-3"
              >
                <span className="text-[var(--color-text)]">{c.title}</span>
                <span
                  className="text-xs text-[var(--color-text-mute)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {c.detail} · {c.year}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Tech stack — infinite marquee */}
      <Reveal>
        <div className="mt-20">
          <span className="eyebrow eyebrow-accent">Working stack</span>
          <div className="mt-6">
            <Marquee
              items={stack.map((s) => (
                <span key={s} className="chip whitespace-nowrap">
                  {s}
                </span>
              ))}
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-24">
        <Reveal>
          <span className="eyebrow eyebrow-accent">
            Nine years, age six to fifteen
          </span>
          <h3
            className="display mt-4 text-[var(--color-text-strong)]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
          >
            A continuous build —
            <span className="display-italic"> from Scratch to TensorFlow</span>
          </h3>
        </Reveal>
        <ol className="mt-10 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.year} delay={(i % 2) * 80}>
              <div className="flex gap-6 border-l border-[var(--color-text-fainter)] pl-6">
                <div className="min-w-20">
                  <div
                    className="numeral text-[var(--color-text-strong)]"
                    style={{ fontSize: "2.4rem", lineHeight: 1 }}
                  >
                    {t.year}
                  </div>
                  <div className="eyebrow mt-1">{t.age}</div>
                </div>
                <p className="pt-1 text-[var(--color-text-soft)]">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
