import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { TeamPageView } from "@/components/site/team-page";
import type { Locale } from "@/i18n/routing";
import { getSiteContent } from "@/lib/site-content";

type PageProps = Readonly<{ params: Promise<{ locale: string }> }>;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getSiteContent(locale);
  const page = content.pages.team;
  return { title: page.title, description: page.description, keywords: content.meta.keywords };
}

export default async function TeamPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TeamPageView content={getSiteContent(locale)} locale={locale as Locale} />;
}
