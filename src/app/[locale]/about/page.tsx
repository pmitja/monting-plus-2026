import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AboutPageView } from "@/components/site/about-page";
import { getSiteContent } from "@/lib/site-content";

type PageProps = Readonly<{ params: Promise<{ locale: string }> }>;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getSiteContent(locale);
  const page = content.pages.about;
  return { title: page.title, description: page.description, keywords: content.meta.keywords };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageView content={getSiteContent(locale)} />;
}
