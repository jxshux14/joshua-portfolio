"use client";

import { useEffect, useState } from "react";

const NAME = "Joshua";

export default function TypewriterName() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(NAME.length);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let i = 0;

    const tick = () => {
      i += 1;
      setCount(i);
      if (i < NAME.length) {
        timer = setTimeout(tick, 100 + Math.random() * 70);
      }
    };

    const start = (wait: number) => {
      timer = setTimeout(tick, wait);
    };

    const onReveal = () => start(450);

    // If a page transition is in progress, wait for the reveal.
    const phase = document.documentElement.dataset.phase;
    if (phase === "cover") {
      window.addEventListener("wipe-reveal", onReveal, { once: true });
    } else {
      start(phase === "reveal" ? 450 : 400);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wipe-reveal", onReveal);
    };
  }, []);

  const typed = NAME.slice(0, count);
  const done = count >= NAME.length;

  return (
    <h1 className="about-name" aria-label={`Hi, I'm ${NAME}. Web Developer.`}>
      <span className="tw-line" aria-hidden="true">
        Hi, I'm{" "}
        <span className="tw-name">
          <span className="tw-ghost" style={{ visibility: "hidden" }}>
            {NAME}
          </span>
          <span className="tw-typed">
            {typed}
            <span className={`tw-caret${done ? " done" : ""}`} />
          </span>
        </span>
      </span>

      <em className="tw-line" aria-hidden="true">
        Web Developer.
      </em>
    </h1>
  );
}