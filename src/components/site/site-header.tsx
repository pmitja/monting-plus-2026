"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { SiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader({ content }: { content: SiteContent }) {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateHeaderState = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const hero = document.querySelector<HTMLElement>("[data-hero]");

        if (!hero) {
          setPastHero(window.scrollY > 8);
          return;
        }

        const heroBottom = hero.offsetTop + hero.offsetHeight;
        setPastHero(window.scrollY >= heroBottom - 88);
      });
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  return (
    <header
      className={cn(
        "animate-slide-down fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color,box-shadow] duration-300",
        pastHero
          ? "border-b border-slate-200/10 bg-slate-950/94 shadow-[0_12px_34px_rgba(2,6,23,0.28)] backdrop-blur-xl"
          : "border-b border-white/8 bg-slate-950/18 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Monting Plus"
        >
          <Image
            src="/images/monting-plus-logo.jpg"
            alt="Monting Plus logo"
            width={52}
            height={58}
            className="h-11 w-10 object-contain"
            priority
          />
          <span className="hidden text-sm font-bold uppercase tracking-[0.14em] text-white sm:block">
            Monting Plus
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-1.5 lg:flex"
          aria-label="Main"
        >
          {content.nav.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3.5 py-2 text-sm font-medium text-white/72 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-orange-300/30"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            asChild
            className="hidden border-white/10 bg-white/12 text-white hover:bg-white/18 hover:shadow-white/10 sm:inline-flex"
          >
            <Link href="/contact">
              {content.nav.quote}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
      <nav
        className="flex gap-1 overflow-x-auto border-t border-white/10 px-4 py-2 lg:hidden"
        aria-label="Mobile"
      >
        {content.nav.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
