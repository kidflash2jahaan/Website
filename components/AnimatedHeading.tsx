import type { CSSProperties, ReactNode } from "react";

type Word = {
  text: string;
  italic?: boolean;
  gradient?: boolean;
  trailing?: ReactNode;
};

type AnimatedHeadingProps = {
  /**
   * Lines, each with words and a trailing punctuation node.
   * Letters within stagger; lines stagger by `lineDelay`.
   */
  lines: { words: Word[] }[];
  className?: string;
  style?: CSSProperties;
  /** ms between letters in a line */
  perLetter?: number;
  /** ms between lines */
  lineDelay?: number;
  /** initial offset before first letter (ms) */
  initialDelay?: number;
};

export function AnimatedHeading({
  lines,
  className = "",
  style,
  perLetter = 22,
  lineDelay = 220,
  initialDelay = 60,
}: AnimatedHeadingProps) {
  let cumulativeDelay = initialDelay;
  return (
    <h1 className={`display ${className}`} style={style}>
      {lines.map((line, li) => {
        const lineStart = cumulativeDelay;
        // Render each word, splitting into letters
        const wordEls: ReactNode[] = [];
        line.words.forEach((word, wi) => {
          const chars = Array.from(word.text);
          chars.forEach((ch, ci) => {
            const delay = cumulativeDelay;
            cumulativeDelay += perLetter;
            wordEls.push(
              <span
                key={`l${li}-w${wi}-c${ci}`}
                className={`letter ${
                  word.gradient ? "gradient-text" : ""
                } ${word.italic ? "display-italic" : ""}`}
                style={
                  {
                    "--letter-delay": `${delay}ms`,
                  } as CSSProperties
                }
              >
                {ch === " " ? " " : ch}
              </span>
            );
          });
          // Add trailing punctuation after the last char of the word, if any
          if (word.trailing) {
            wordEls.push(
              <span
                key={`l${li}-w${wi}-trail`}
                className="letter"
                style={
                  {
                    "--letter-delay": `${cumulativeDelay}ms`,
                  } as CSSProperties
                }
              >
                {word.trailing}
              </span>
            );
            cumulativeDelay += perLetter;
          }
          // small gap between words
          wordEls.push(
            <span
              key={`l${li}-w${wi}-space`}
              className="letter"
              style={
                {
                  "--letter-delay": `${cumulativeDelay - perLetter}ms`,
                } as CSSProperties
              }
            >
              {" "}
            </span>
          );
        });
        // Bump cumulative delay by lineDelay (line break)
        cumulativeDelay = lineStart + (cumulativeDelay - lineStart) + lineDelay;
        return (
          <span key={li} className="block">
            {wordEls}
          </span>
        );
      })}
    </h1>
  );
}
