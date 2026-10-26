"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type Go = (href: string, label: string) => void;

const TransitionContext = createContext<Go>(() => {});
export const useTransitionNav = () => useContext(TransitionContext);

const BLOCKS = 5;
const COVER = 850; // bar duration (600) + stagger (4 x 55) + buffer

// wipe color = destination page background, ink = label color
const THEMES: Record<string, { bg: string; ink: string }> = {
  "/": { bg: "#2b211b", ink: "#f3ebdd" },          // cream page  → dark brown
  "/about": { bg: "#e5d5be", ink: "#2b211b" },     // brown page  → sand
  "/work": { bg: "#2b211b", ink: "#f3ebdd" },      // light page  → dark brown
  "/experience": { bg: "#a66a4c", ink: "#f3ebdd" }, // sand page   → terracotta
  "/contact": { bg: "#f3ebdd", ink: "#2b211b" },   // olive page  → cream
};

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const [covered, setCovered] = useState(false);
  const [label, setLabel] = useState("");
  const [theme, setTheme] = useState(THEMES["/"]);
  const target = useRef<string | null>(null);

    const go = useCallback<Go>(
    (href, name) => {
      if (phase !== "idle" || href === pathname) return;
      target.current = href;
      setLabel(name);
      setTheme(THEMES[href] ?? THEMES["/"]);
      setCovered(false);
      setPhase("cover");

      router.prefetch(href); // starts loading the page now, without swapping yet

      setTimeout(() => {
        router.push(href); // swap only once the screen is fully covered
        setCovered(true);
      }, COVER);
    },
    [phase, pathname, router]
  );

  useEffect(() => {
    if (phase === "cover" && covered && target.current === pathname) {
      window.scrollTo(0, 0);
      setPhase("reveal");

      // trigger the blur-to-clear fade on the page content
      const root = document.documentElement;
      root.classList.add("page-reveal");
      setTimeout(() => root.classList.remove("page-reveal"), 1000);
    }
  }, [phase, covered, pathname]);

  useEffect(() => {
    if (phase !== "reveal") return;
    const t = setTimeout(() => {
      setPhase("idle");
      setCovered(false);
      target.current = null;
    }, COVER);
    return () => clearTimeout(t);
  }, [phase]);

    useEffect(() => {
    document.documentElement.dataset.phase = phase;
    if (phase === "reveal") window.dispatchEvent(new Event("wipe-reveal"));
  }, [phase]);

  return (
    <TransitionContext.Provider value={go}>
      {children}

      <div
        className={`wipe wipe--${phase}`}
        aria-hidden="true"
        style={{
          ["--wipe-bg" as string]: theme.bg,
          ["--wipe-ink" as string]: theme.ink,
        }}
      >
        {Array.from({ length: BLOCKS }).map((_, i) => (
          <div
            key={i}
            className="wipe-block"
            style={{ ["--i" as string]: i }}
          />
        ))}
        <span className="wipe-label">{label}</span>
      </div>
    </TransitionContext.Provider>
  );
}
