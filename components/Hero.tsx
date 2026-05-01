"use client";

import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { AnimatedHeading } from "./AnimatedHeading";

const identities = [
  { label: "Builder", detail: "Software · Robotics" },
  { label: "Composer", detail: "Piano · Production" },
  { label: "Leader", detail: "FRC · Bands · Teams" },
];

const currently = [
  { eyebrow: "Engineering", text: "FRC robot software stack, 2026 season" },
  { eyebrow: "Music", text: "Chopin Nocturne in G minor, Op. 15 No. 3" },
  { eyebrow: "Producing", text: "Logic Pro & Ableton — Archaic Symphony" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden px-6 pt-20 pb-20 md:px-12 md:pt-24 md:pb-28 lg:px-20">
      <div className="relative mx-auto flex max-w-7xl flex-col">
        {/* Top status row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Reveal>
            <div className="eyebrow flex items-center gap-3">
              <span
                aria-hidden
                className="breathe inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                style={{ boxShadow: "0 0 14px rgba(94,92,230,0.6)" }}
              />
              Portfolio · Class of 2029
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="eyebrow text-right">
              Sage Hill School · Newport Coast
            </div>
          </Reveal>
        </div>

        {/* Hero centerpiece */}
        <div className="mt-14 md:mt-20">
          <Reveal>
            <div className="eyebrow mb-6">Jahaan Pardhanani</div>
          </Reveal>
          <AnimatedHeading
            className="text-[var(--color-text-strong)]"
            style={{
              fontSize: "clamp(3.6rem, 12vw, 10.5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
              maxWidth: "16ch",
            }}
            perLetter={16}
            lineDelay={80}
            initialDelay={80}
            lines={[
              {
                words: [
                  { text: "I build" },
                  {
                    text: "systems",
                    italic: true,
                    gradient: true,
                    trailing: ",",
                  },
                ],
              },
              {
                words: [
                  { text: "arrange" },
                  {
                    text: "songs",
                    italic: true,
                    gradient: true,
                    trailing: ",",
                  },
                ],
              },
              {
                words: [
                  { text: "and lead" },
                  {
                    text: "teams",
                    italic: true,
                    gradient: true,
                    trailing: ".",
                  },
                ],
              },
            ]}
          />

          <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-10">
            <Reveal delay={420} className="col-span-12 md:col-span-6">
              <p
                className="leading-snug text-[var(--color-text-soft)]"
                style={{ fontSize: "1.25rem" }}
              >
                High school freshman at Sage Hill School with{" "}
                <span className="display-italic text-[var(--color-text)]">
                  nine years
                </span>{" "}
                of software development. Currently leading a team of six as
                Software Lead of Sage Hill&apos;s FRC robotics program — and a
                classically trained pianist preparing for MTAC Advanced.
              </p>
            </Reveal>
            <Reveal delay={520} className="col-span-12 md:col-span-6">
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <MagneticButton
                  href="#engineering"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-text-strong)] px-5 py-3 text-sm font-medium text-white transition-shadow hover:shadow-[0_8px_24px_-6px_rgba(94,92,230,0.45)]"
                >
                  See the work <span aria-hidden>↓</span>
                </MagneticButton>
                <MagneticButton
                  href="https://www.youtube.com/watch?v=N9CLOqs-Rz4&list=PLWOHimwior8yidwUl-l8q5GOvWJt9IBZt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-pill inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[var(--color-text)]"
                  strength={0.25}
                >
                  Performance reel{" "}
                  <span aria-hidden style={{ color: "var(--color-accent)" }}>
                    ↗
                  </span>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Identity glass tiles */}
        <Reveal delay={620}>
          <ul className="mt-14 grid grid-cols-3 gap-3 md:mt-20 md:gap-5">
            {identities.map((id, i) => (
              <motion.li
                key={id.label}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                className="glass shine flex flex-col items-start p-5 md:p-7"
              >
                <span className="eyebrow eyebrow-accent">0{i + 1}</span>
                <span
                  className="display mt-3 text-[var(--color-text-strong)]"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)" }}
                >
                  {id.label}
                  <span style={{ color: "var(--color-accent)" }}>.</span>
                </span>
                <span className="mt-2 text-xs text-[var(--color-text-mute)]">
                  {id.detail}
                </span>
              </motion.li>
            ))}
          </ul>
        </Reveal>

        {/* Currently strip */}
        <Reveal delay={760}>
          <div className="glass mt-10 p-2 md:mt-14">
            <div className="grid grid-cols-1 divide-y divide-[var(--color-text-fainter)] md:grid-cols-3 md:divide-x md:divide-y-0">
              {currently.map((c) => (
                <div
                  key={c.eyebrow}
                  className="flex items-center gap-4 px-5 py-4"
                >
                  <span
                    aria-hidden
                    className="breathe inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
                  />
                  <div className="flex flex-col">
                    <span className="eyebrow eyebrow-accent">{c.eyebrow}</span>
                    <span className="mt-0.5 text-sm text-[var(--color-text)]">
                      {c.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Contact */}
        <div className="mt-16 md:mt-20">
          <div className="hairline mb-8" />
          <div className="grid grid-cols-12 gap-y-6 gap-x-6 text-sm">
            <Reveal delay={120} className="col-span-6 md:col-span-3">
              <div className="eyebrow mb-2">Email</div>
              <a className="link" href="mailto:Kidflash2jahaan@gmail.com">
                Kidflash2jahaan@gmail.com
              </a>
            </Reveal>
            <Reveal delay={180} className="col-span-6 md:col-span-3">
              <div className="eyebrow mb-2">Phone</div>
              <a className="link" href="tel:+17147282243">
                (714) 728-2243
              </a>
            </Reveal>
            <Reveal delay={240} className="col-span-6 md:col-span-3">
              <div className="eyebrow mb-2">Location</div>
              <span className="text-[var(--color-text-soft)]">
                North Tustin, California
              </span>
            </Reveal>
            <Reveal delay={300} className="col-span-6 md:col-span-3">
              <div className="eyebrow mb-2">Reel</div>
              <a
                className="link"
                href="https://www.youtube.com/watch?v=N9CLOqs-Rz4&list=PLWOHimwior8yidwUl-l8q5GOvWJt9IBZt"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube playlist ↗
              </a>
            </Reveal>
          </div>
        </div>

        {/* Scroll cue */}
        <Reveal delay={900}>
          <div className="mt-16 flex flex-col items-center gap-3 text-[var(--color-text-mute)]">
            <span className="eyebrow">Scroll</span>
            <motion.span
              aria-hidden
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl"
            >
              ↓
            </motion.span>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
