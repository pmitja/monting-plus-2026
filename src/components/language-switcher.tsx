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
        className="h-9 min-w-20 border-slate-200 bg-white px-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:ring-orange-500/25"
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
