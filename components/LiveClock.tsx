"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function tick() {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(fmt.format(now));
    }
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return (
    <span
      className="hidden items-center gap-2 px-3 text-[0.72rem] font-medium text-[var(--color-text-mute)] md:inline-flex"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <span
        aria-hidden
        className="breathe inline-block h-1 w-1 rounded-full bg-[var(--color-accent)]"
      />
      {time} PT
    </span>
  );
}
