import type { ReactNode, CSSProperties } from "react";

type RevealAs = "div" | "section" | "li" | "article" | "header" | "p" | "span";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: RevealAs;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const style = {
    ["--reveal-delay" as string]: `${delay}ms`,
  } as CSSProperties;
  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
