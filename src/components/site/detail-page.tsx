import Image from "next/image";

import type { DetailPageKey, SiteContent } from "@/lib/site-content";

import { InquiryForm } from "./inquiry-form";
import {
  CardGrid,
  ContactStrip,
  DisplayTitle,
  Eyebrow,
  GhostButton,
  GoldButton,
  SectionHeader,
  ServiceCardGrid,
  SiteShell,
} from "./layout";

const heroImages: Partial<Record<DetailPageKey, string>> = {
  services: "/images/cards/industrijske-montaze.webp",
  industries: "/images/cards/transportni-sistemi.webp",
  projects: "/images/cards/stahlbau.webp",
  certifications: "/images/cards/vodenje.webp",
  contact: "/images/cards/sotori.webp",
};

export function DetailPageView({
  content,
  pageKey,
}: {
  content: SiteContent;
  pageKey: DetailPageKey;
}) {
  const page = content.pages[pageKey];
  const isContact = pageKey === "contact";
  const heroImage = heroImages[pageKey] ?? "/images/industrial-steel-structure.jpg";

  return (
    <SiteShell content={content}>
      <main className="animate-page-enter">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              className="object-cover object-right opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.13_0.006_260/0.97)_0%,oklch(0.13_0.006_260/0.8)_45%,oklch(0.13_0.006_260/0.35)_80%,oklch(0.13_0.006_260/0.6)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-graphite to-transparent" />
          </div>

          <div className="relative mx-auto grid max-w-[88rem] gap-12 px-5 pb-20 pt-40 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-28 lg:pt-48">
            <div className="reveal-stagger flex flex-col justify-center">
              <Eyebrow withRule>{page.eyebrow}</Eyebrow>
              <DisplayTitle as="h1" className="mt-7 hyphens-auto">
                {page.title}
              </DisplayTitle>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-titanium/85">
                {page.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <GoldButton href="/contact">{content.nav.quote}</GoldButton>
                {!isContact ? (
                  <GhostButton href="/projects">{content.home.secondaryCta}</GhostButton>
                ) : null}
              </div>
            </div>

            <div className="hidden items-end justify-end lg:flex">
              <div className="animate-float-in industrial-panel max-w-md rounded-2xl p-8">
                <span className="block h-px w-12 gold-hairline" aria-hidden="true" />
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                  Monting Plus
                </p>
                <p className="mt-4 text-2xl font-semibold leading-snug text-white">
                  {page.ctaTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/55">{page.ctaText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="relative bg-anthracite/60">
          <div className="absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />
          <div className="scroll-reveal relative mx-auto max-w-[88rem] px-5 py-24 sm:px-8 lg:px-12">
            {pageKey === "services" ? (
              <ServiceCardGrid cards={page.cards} />
            ) : (
              <CardGrid cards={page.cards} columns="three" />
            )}
          </div>
        </section>

        {/* Closing: contact strip + form / availability */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-x-0 top-0 h-px gold-hairline opacity-50" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[88rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
            <div className="scroll-reveal lg:sticky lg:top-32">
              <SectionHeader eyebrow="Monting Plus" title={page.ctaTitle} text={page.ctaText} />
              <div className="mt-9">
                <ContactStrip content={content} />
              </div>
            </div>
            {isContact ? (
              <div className="scroll-reveal industrial-panel rounded-2xl p-2">
                <InquiryForm content={content.form} dark />
              </div>
            ) : (
              <div className="scroll-reveal">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                  {content.home.availabilityTitle}
                </p>
                <div className="reveal-stagger mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                  {content.home.availability.map((slot) => (
                    <div key={slot.title} className="bg-anthracite/90 p-7">
                      <h3 className="text-lg font-semibold text-gold">{slot.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">{slot.text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-white/45">
                  {content.home.availabilityIntro}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
