import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ScrollPop } from "./ScrollPop";
import { GlassCard } from "./GlassCard";
import { Marquee } from "./Marquee";
import { Waveform } from "./Waveform";

const mtacProgression = [
  { level: "Level 4", year: "2020", note: "Theory 79/80" },
  { level: "Level 6", year: "2022", note: "Theory 82/90" },
  { level: "Level 8", year: "2023", note: "Theory 92/95" },
  { level: "Level 9", year: "2025", note: "Theory 97 — State Honors" },
  { level: "Advanced", year: "Preparing", note: "Currently working toward" },
];

const venues = [
  "Tustin Tiller Days",
  "Orange Street Festival",
  "St. Norbert Festival",
  "Rock & Brews",
  "Stone Stock",
  "Make Music Day Orange",
  "Sunrise Senior Living",
  "Diwali Community Festivals",
];

const tools = [
  "Logic Pro",
  "Ableton Live",
  "Xfer Serum",
  "STL Emissary",
  "Custom Aux routing",
  "GarageBand",
];

export function Music() {
  return (
    <Section
      id="music"
      number="02"
      eyebrow="Music · Composition · Performance"
      title={
        <>
          Classically trained,
          <br />
          <span className="display-italic gradient-text">self-produced</span>.
        </>
      }
      lede={
        <>
          Piano since age five. Forms and leads bands. Arranges songs, teaches
          parts, directs sets — across more than thirty live performances. A
          parallel discipline as deeply developed as the engineering.
        </>
      }
    >
      <div className="relative">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          {/* Featured: Piano */}
          <ScrollPop className="col-span-12 lg:col-span-7">
            <GlassCard className="h-full p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-x-4">
                <span className="eyebrow eyebrow-accent">Featured</span>
                <span className="eyebrow">Piano · Classical</span>
              </div>
              <h3
                className="display mt-6 text-[var(--color-text-strong)]"
                style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)" }}
              >
                MTAC Certificate of Merit —
                <span className="display-italic"> Level 9, State Honors</span>
              </h3>
              <p
                className="mt-6 leading-snug text-[var(--color-text-soft)]"
                style={{ fontSize: "1.1rem" }}
              >
                97% theory score in 2025. Outstanding Achievement in Piano from
                Julie Carmona Rodriguez five times — 2019, 2022, 2023, 2024,
                2025. Performed Chopin&apos;s{" "}
                <span className="display-italic">
                  Nocturne in G minor, Op. 15 No. 3
                </span>{" "}
                at the Julie Carmona Studios Winter Recital, January 2026.
                Currently preparing for Advanced Level.
              </p>
              <div className="mt-10">
                <span className="eyebrow">Five-year progression</span>
                <ol className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-5">
                  {mtacProgression.map((m) => (
                    <li
                      key={m.level}
                      className="border-l border-[var(--color-text-fainter)] pl-4"
                    >
                      <div
                        className="numeral text-[var(--color-text-strong)]"
                        style={{ fontSize: "1.6rem", lineHeight: 1.1 }}
                      >
                        {m.level}
                      </div>
                      <div className="eyebrow mt-1">{m.year}</div>
                      <div
                        className="mt-1 leading-snug text-[var(--color-text-mute)]"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                        }}
                      >
                        {m.note}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </GlassCard>
          </ScrollPop>

          {/* Vocal Ensemble */}
          <ScrollPop className="col-span-12 lg:col-span-5">
            <GlassCard className="flex h-full flex-col justify-between p-8 md:p-10">
              <div>
                <span className="eyebrow eyebrow-accent">
                  Vocal Ensemble · Sage Hill
                </span>
                <h3
                  className="display mt-5 text-[var(--color-text-strong)]"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  Sage Hill Vocal Ensemble &
                  <span className="display-italic"> The Six Cs</span>
                </h3>
                <p className="mt-5 text-[var(--color-text-soft)]">
                  Member of the school&apos;s top select vocal group. Performed
                  in <span className="display-italic">Choir by Candlelight</span>{" "}
                  (December 2025) and{" "}
                  <span className="display-italic">Becoming</span> (March 2026,
                  Kazu Fukuda Black Box Theater).
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 border-t border-[var(--color-text-fainter)] pt-5">
                <div>
                  <span className="eyebrow eyebrow-accent">Dec 2025</span>
                  <p className="mt-1 text-sm text-[var(--color-text-mute)]">
                    Choir by Candlelight
                  </p>
                </div>
                <div>
                  <span className="eyebrow eyebrow-accent">Mar 2026</span>
                  <p className="mt-1 text-sm text-[var(--color-text-mute)]">
                    Becoming · Black Box
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollPop>
        </div>
      </div>

      {/* Live Performance */}
      <div className="mt-20 grid grid-cols-12 gap-x-8 gap-y-12">
        <Reveal className="col-span-12 lg:col-span-7">
          <div className="mb-6">
            <Waveform />
          </div>
          <span className="eyebrow eyebrow-accent">
            Lead Guitarist & Vocalist
          </span>
          <h3
            className="display mt-4 text-[var(--color-text-strong)]"
            style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)" }}
          >
            <span className="numeral gradient-text">30+</span> live shows
          </h3>
          <p
            className="mt-5 max-w-xl leading-snug text-[var(--color-text-soft)]"
            style={{ fontSize: "1.15rem" }}
          >
            Forms and leads bands. Arranges every song, teaches bandmates their
            parts, and directs live sets. Rearranged{" "}
            <span className="display-italic">Sun Raha Hai Na Tu</span> as a
            cross-cultural duet — wrote all the parts, coached every performer.
          </p>
          <div className="mt-10">
            <a
              className="link inline-flex items-center gap-2"
              href="https://www.youtube.com/watch?v=N9CLOqs-Rz4&list=PLWOHimwior8yidwUl-l8q5GOvWJt9IBZt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.15rem" }}
            >
              Watch the performance reel
              <span aria-hidden style={{ color: "var(--color-accent)" }}>
                ↗
              </span>
            </a>
          </div>
        </Reveal>

        {/* Congressional Recognition */}
        <ScrollPop className="col-span-12 lg:col-span-5">
          <GlassCard className="p-8 md:p-10" tilt={true}>
            <span className="eyebrow eyebrow-accent">
              Congressional Recognition
            </span>
            <h3
              className="display mt-5 text-[var(--color-text-strong)]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              U.S. House of Representatives —
              <span className="display-italic">
                {" "}
                Certificate of Congressional Recognition
              </span>
            </h3>
            <p className="mt-5 text-[var(--color-text-soft)]">
              From Rep. Young Kim, for music advocacy at Make Music Day Orange,
              June 2024.
            </p>
            <div className="mt-7 border-t border-[var(--color-text-fainter)] pt-5">
              <span className="eyebrow eyebrow-accent">Make Music Day</span>
              <p className="mt-1 text-sm text-[var(--color-text-mute)]">
                Performing across five OC chapters · June 21
              </p>
            </div>
          </GlassCard>
        </ScrollPop>
      </div>

      {/* Venues marquee */}
      <Reveal>
        <div className="mt-16">
          <span className="eyebrow eyebrow-accent">Featured at</span>
          <div className="mt-5">
            <Marquee
              items={venues.map((v) => (
                <span key={v} className="chip whitespace-nowrap">
                  {v}
                </span>
              ))}
            />
          </div>
        </div>
      </Reveal>

      {/* Composition & Production */}
      <div className="mt-20 grid grid-cols-12 gap-x-8 gap-y-12">
        <Reveal className="col-span-12 md:col-span-7">
          <span className="eyebrow eyebrow-accent">
            Composition & Production
          </span>
          <h3
            className="display mt-4 text-[var(--color-text-strong)]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
          >
            From{" "}
            <span className="display-italic gradient-text">Tirefall</span> (age
            7) to
            <span className="display-italic gradient-text">
              {" "}
              Archaic Symphony
            </span>
          </h3>
          <p className="mt-5 max-w-xl text-[var(--color-text-soft)]">
            Composed first piece on GarageBand at age seven. Four full
            compositions and productions in Logic Pro since. Builds custom Aux
            channel-strip routing with bus mixing and automation. Latest EDM
            work: <span className="display-italic">Archaic Symphony</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-5" delay={120}>
          <div className="border-l border-[var(--color-text-fainter)] pl-8">
            <span className="eyebrow eyebrow-accent">Other instruments</span>
            <ul className="mt-5 space-y-4">
              {[
                { name: "Yousician Guitar", detail: "L1–L4 · 2021" },
                { name: "Ableton Beat Drop", detail: "Certified · 2020" },
                { name: "Songwriting 101", detail: "Udemy · Apr 2025" },
                { name: "Serum Sound Design", detail: "Udemy · Jan 2026" },
              ].map((row, idx, arr) => (
                <li
                  key={row.name}
                  className={`flex items-baseline justify-between gap-4 ${
                    idx < arr.length - 1
                      ? "border-b border-[var(--color-text-fainter)] pb-3"
                      : "pb-3"
                  }`}
                >
                  <span className="text-[var(--color-text)]">{row.name}</span>
                  <span
                    className="text-xs text-[var(--color-text-mute)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {row.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
