import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { HomePageView } from "@/components/site/home-page";
import { getSiteContent } from "@/lib/site-content";

type PageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getSiteContent(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageView content={getSiteContent(locale)} />;
}
