import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 px-6 pt-12 pb-12 md:px-12 md:pt-20 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="hairline mb-10" />
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <span className="eyebrow eyebrow-accent">In conversation</span>
              <h2
                className="display mt-6 text-[var(--color-text-strong)]"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  letterSpacing: "-0.035em",
                }}
              >
                Let&apos;s
                <br />
                <span className="display-italic gradient-text">
                  build something
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p
                className="mt-8 max-w-xl leading-snug text-[var(--color-text-soft)]"
                style={{ fontSize: "1.2rem" }}
              >
                Open to research opportunities, collaborations, and admissions
                conversations. References, certificates, and full performance
                portfolio available on request.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={120}>
              <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                <li className="border-t border-[var(--color-text-fainter)] pt-4">
                  <span className="eyebrow">Email</span>
                  <a
                    className="link mt-1 block"
                    href="mailto:Kidflash2jahaan@gmail.com"
                  >
                    Kidflash2jahaan@gmail.com
                  </a>
                </li>
                <li className="border-t border-[var(--color-text-fainter)] pt-4">
                  <span className="eyebrow">Phone</span>
                  <a className="link mt-1 block" href="tel:+17147282243">
                    (714) 728-2243
                  </a>
                </li>
                <li className="border-t border-[var(--color-text-fainter)] pt-4">
                  <span className="eyebrow">School</span>
                  <span className="mt-1 block text-[var(--color-text-soft)]">
                    Sage Hill School · Newport Coast, CA
                  </span>
                </li>
                <li className="border-t border-[var(--color-text-fainter)] pt-4">
                  <span className="eyebrow">Location</span>
                  <span className="mt-1 block text-[var(--color-text-soft)]">
                    North Tustin, California
                  </span>
                </li>
                <li className="border-t border-[var(--color-text-fainter)] pt-4 sm:col-span-2">
                  <span className="eyebrow">Performance Reel</span>
                  <a
                    className="link mt-1 inline-flex items-center gap-2"
                    href="https://www.youtube.com/watch?v=N9CLOqs-Rz4&list=PLWOHimwior8yidwUl-l8q5GOvWJt9IBZt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube playlist
                    <span aria-hidden style={{ color: "var(--color-accent)" }}>
                      ↗
                    </span>
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="hairline mt-24 mb-6" />
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div
            className="text-xs text-[var(--color-text-mute)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} Jahaan Pardhanani · Class of 2029
          </div>
          <div
            className="text-xs text-[var(--color-text-mute)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Designed and built by Jahaan
          </div>
        </div>
      </div>
    </footer>
  );
}
