"use client";

import { useTransition } from "react";
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

const localeLabels: Record<Locale, string> = {
  sl: "SL",
  de: "DE",
  en: "EN",
  sr: "SR",
};

const localeNames: Record<Locale, string> = {
  sl: "Slovenščina",
  de: "Deutsch",
  en: "English",
  sr: "Srpski",
};

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
        className="h-11 border-white/12 bg-white/[0.05] px-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white/80 backdrop-blur transition-colors hover:border-gold/50 hover:bg-white/10 hover:text-white focus-visible:ring-gold/30 max-sm:[&_.text-muted-foreground]:hidden sm:min-w-20 [&_svg]:text-white/50"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" className="min-w-40">
        {routing.locales.map((item) => (
          <SelectItem key={item} value={item}>
            <span className="font-semibold">{localeLabels[item]}</span>
            <span className="text-muted-foreground">{localeNames[item]}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
