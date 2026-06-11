"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Sticky vertical rail mirroring the phases of an industrial project.
 * Sections opt in via data-phase="<index>"; the rail tracks which phase
 * currently dominates the viewport.
 */
export function PhaseRail({ phases }: { phases: string[] }) {
  const [active, setActive] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;
    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { rootMargin: "-15% 0px 0px 0px" },
    );
    heroObserver.observe(hero);
    return () => heroObserver.disconnect();
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-phase]"),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const phase = Number(entry.target.getAttribute("data-phase"));
            if (!Number.isNaN(phase)) setActive(phase);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 transition-opacity duration-700 2xl:block",
        heroVisible ? "opacity-0" : "opacity-100",
      )}
    >
      <ol className="flex flex-col gap-6">
        {phases.map((phase, index) => {
          const isActive = index === active;
          return (
            <li key={phase} className="flex items-center gap-2.5" title={phase}>
              <span
                className={cn(
                  "h-px transition-all duration-500",
                  isActive ? "w-6 bg-gold" : "w-3 bg-white/20",
                )}
              />
              <span
                className={cn(
                  "display-index text-[11px] font-bold transition-colors duration-500",
                  isActive ? "text-gold" : "text-white/30",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
