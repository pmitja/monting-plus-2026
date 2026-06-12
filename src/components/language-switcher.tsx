"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const localeNames: Record<Locale, string> = {
  sl: "Slovenščina",
  de: "Deutsch",
  en: "English",
  sr: "Srpski",
};

function getLocaleCode(locale: Locale) {
  return locale.toUpperCase();
}

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const menuId = useId();
  const switcherRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("language");

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function handleLocaleChange(nextLocale: Locale) {
    if (nextLocale === locale) {
      setOpen(false);
      return;
    }

    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div ref={switcherRef} className="relative shrink-0">
      <button
        type="button"
        aria-label={t("label")}
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="listbox"
        disabled={isPending}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="group flex h-11 w-[4.75rem] cursor-pointer items-center justify-between gap-1.5 overflow-hidden rounded-md border border-white/12 bg-graphite/45 px-2.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] hover:border-gold/60 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_24px_rgba(0,0,0,0.18)] focus-visible:border-gold/60 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gold/30 disabled:pointer-events-none disabled:opacity-60 data-[open=true]:border-gold/70 data-[open=true]:bg-white/10 data-[open=true]:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_24px_rgba(0,0,0,0.18)] sm:w-24"
        data-open={open}
      >
        <span className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="hidden size-6 items-center justify-center rounded-[0.35rem] border border-white/10 bg-white/[0.06] text-gold transition-colors duration-200 group-hover:border-gold/35 group-hover:bg-gold/12 group-hover:text-gold-bright group-data-[open=true]:border-gold/40 group-data-[open=true]:bg-gold/12 group-data-[open=true]:text-gold-bright sm:flex">
            <Globe2 className="size-3.5" aria-hidden="true" />
          </span>
          <span className="shrink-0 font-heading text-[12px] font-bold uppercase leading-none tracking-[0.18em] text-white transition-colors duration-200 group-hover:text-gold-bright group-data-[open=true]:text-gold-bright">
            {getLocaleCode(locale)}
          </span>
        </span>
        <ChevronDown
          className="size-4 shrink-0 text-gold/75 transition-all duration-200 group-hover:text-gold-bright group-data-[open=true]:rotate-180 group-data-[open=true]:text-gold-bright"
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="listbox"
          aria-label={t("label")}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-48 rounded-md border border-white/10 bg-graphite/96 p-1.5 text-white shadow-[0_18px_42px_rgba(0,0,0,0.42)] ring-1 ring-gold/15 backdrop-blur-xl"
        >
          {routing.locales.map((item) => (
            <button
              key={item}
              type="button"
              role="option"
              aria-selected={item === locale}
              onClick={() => handleLocaleChange(item)}
              className="group flex w-full cursor-pointer items-center gap-3 rounded-sm py-2.5 pl-2 pr-3 text-left text-white/78 transition-colors hover:bg-white/[0.07] hover:text-white focus:bg-white/[0.07] focus:text-white focus:outline-none aria-selected:bg-gold/10 aria-selected:text-white aria-selected:hover:bg-gold/15"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-[0.35rem] border border-white/10 bg-white/[0.05] font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-gold transition-colors group-hover:border-gold/30 group-hover:bg-gold/10 group-hover:text-gold-bright group-focus:border-gold/30 group-focus:bg-gold/10 group-focus:text-gold-bright">
                {getLocaleCode(item)}
              </span>
              <span className="text-[13px] font-semibold leading-none text-white">
                {localeNames[item]}
              </span>
              {item === locale ? (
                <Check className="ml-auto size-4 shrink-0 text-gold" aria-hidden="true" />
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
