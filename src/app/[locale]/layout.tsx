import type { Metadata } from "next";
import { Archivo, Saira } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { routing, type Locale } from "@/i18n/routing";

import "../globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
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
      className={`${archivo.variable} ${saira.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
