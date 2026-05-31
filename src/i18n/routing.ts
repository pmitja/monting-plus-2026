import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sl", "de", "en", "sr"],
  defaultLocale: "sl",
  localeDetection: false,
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
