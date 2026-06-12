"use client";

import { useTransition } from "react";
import { Globe2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("language");

  function handleLocaleChange(nextLocale: string) {
    if (nextLocale === locale) {
      return;
    }

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as Locale });
    });
  }

  return (
    <Select value={locale} onValueChange={handleLocaleChange} disabled={isPending}>
      <SelectTrigger
        aria-label={t("label")}
        className="group min-w-[4.25rem] overflow-hidden rounded-md border-white/12 bg-graphite/45 px-2.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] hover:border-gold/55 hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] focus-visible:border-gold/60 focus-visible:ring-gold/30 data-[size=default]:h-11 data-[state=open]:border-gold/65 data-[state=open]:bg-white/[0.09] sm:min-w-20 [&>svg]:text-gold/70 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:group-data-[state=open]:rotate-180"
      >
        <span className="flex items-center gap-1.5 sm:gap-2">
          <span className="hidden size-6 items-center justify-center rounded-[0.35rem] border border-white/10 bg-white/[0.06] text-gold sm:flex">
            <Globe2 className="size-3.5" aria-hidden="true" />
          </span>
          <SelectValue>
            <span className="font-heading text-[12px] font-bold uppercase leading-none tracking-[0.18em] text-white">
              {getLocaleCode(locale)}
            </span>
          </SelectValue>
        </span>
      </SelectTrigger>
      <SelectContent
        align="end"
        position="popper"
        sideOffset={8}
        className="min-w-48 rounded-md border border-white/10 bg-graphite/96 p-1.5 text-white shadow-[0_18px_42px_rgba(0,0,0,0.42)] ring-1 ring-gold/15 backdrop-blur-xl [&_[data-position=popper]]:h-auto"
      >
        {routing.locales.map((item) => (
          <SelectItem
            key={item}
            value={item}
            className="cursor-pointer gap-3 rounded-sm py-2.5 pl-2 pr-8 text-white/78 transition-colors focus:bg-white/[0.07] focus:text-white data-[state=checked]:bg-gold/10 data-[state=checked]:text-white [&_svg]:text-gold"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-[0.35rem] border border-white/10 bg-white/[0.05] font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
              {getLocaleCode(item)}
            </span>
            <span className="text-[13px] font-semibold leading-none">
              {localeNames[item]}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
