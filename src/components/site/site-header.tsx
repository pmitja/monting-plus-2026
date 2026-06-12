"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { SiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader({ content }: { content: SiteContent }) {
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close the overlay on Escape; lock page scroll while open.
  useEffect(() => {
    if (!menuOpen) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
    <header
      className={cn(
        "animate-slide-down fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color,box-shadow] duration-300",
        pastHero || menuOpen
          ? "border-b border-white/10 bg-graphite/92 shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-white/5 bg-graphite/15 backdrop-blur-md",
      )}
    >
      {pastHero && !menuOpen ? (
        <div className="absolute inset-x-0 bottom-0 h-px gold-hairline opacity-40" aria-hidden="true" />
      ) : null}

      <div className="mx-auto flex min-h-20 w-full max-w-[88rem] items-center gap-6 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3.5"
          aria-label="Monting Plus"
        >
          <Image
            src="/images/monting-plus-logo-transparent.png"
            alt=""
            width={52}
            height={58}
            className="h-10 w-9 object-contain"
            priority
          />
          <span className="flex flex-col">
            <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-white">
              Monting Plus
            </span>
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.3em] text-gold sm:block">
              Industrial Assembly
            </span>
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-7 xl:flex"
          aria-label="Main"
        >
          {content.nav.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              {item.label}
              <span
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          <LanguageSwitcher />
          <Button
            asChild
            className="hidden h-11 bg-gold px-5 text-[13px] font-semibold text-graphite hover:bg-gold-bright sm:inline-flex"
          >
            <Link href="/contact">
              {content.nav.quote}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-sm border border-white/12 bg-white/[0.05] text-white transition-colors hover:border-gold/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gold/30 xl:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
    </header>

      {/* Full-screen overlay menu — outside <header>: its backdrop-filter
          would otherwise become the containing block for this fixed panel */}
      <div
        id="site-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-graphite/97 backdrop-blur-2xl transition-[opacity,visibility] duration-300 xl:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-full max-w-[88rem] flex-col px-5 pb-10 pt-8 sm:px-8">
          <nav aria-label="Mobile" className="flex-1">
            <ol>
              {content.nav.items.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-5 border-b border-white/[0.07] py-5 focus-visible:outline-none"
                  >
                    <span className="display-index w-8 shrink-0 text-sm font-bold text-gold/70 transition-colors group-hover:text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[clamp(1.5rem,4.5vw,2.2rem)] font-semibold leading-tight text-white/85 transition-colors group-hover:text-white group-focus-visible:text-gold">
                      {item.label}
                    </span>
                    <ArrowRight
                      className="ml-auto size-5 self-center text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-10">
            <span className="block h-px w-14 gold-hairline" />
            <div className="mt-6 flex flex-col gap-3 text-sm font-semibold text-white/65 sm:flex-row sm:gap-8">
              <a
                href={`tel:${content.contact.phone.replaceAll(" ", "")}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-gold" aria-hidden="true" />
                {content.contact.phone}
              </a>
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-gold" aria-hidden="true" />
                {content.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
