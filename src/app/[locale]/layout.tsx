import type { Metadata } from "next";
import { IBM_Plex_Sans, Sora } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { routing, type Locale } from "@/i18n/routing";

import "../globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Monting Plus",
    template: "%s | Monting Plus",
  },
  description:
    "Industrial assembly subcontractor with certified teams, onsite leadership and heavy industry experience across Europe.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: paramLocale } = await params;

  if (!hasLocale(routing.locales, paramLocale)) {
    notFound();
  }

  const locale = paramLocale as Locale;
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${ibmPlexSans.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
