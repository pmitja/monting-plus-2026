import { Building2, Globe2, ShieldCheck, UsersRound } from "lucide-react";
import Image from "next/image";

import type { SiteContent } from "@/lib/site-content";

import {
  CardGrid,
  ContactStrip,
  DisplayTitle,
  Eyebrow,
  GhostButton,
  GoldButton,
  SectionHeader,
  SiteShell,
} from "./layout";

export function AboutPageView({ content }: { content: SiteContent }) {
  const page = content.pages.about;

  return (
    <SiteShell content={content}>
      <main className="animate-page-enter">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src="/images/industrial-steel-structure.jpg"
              alt=""
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.13_0.006_260/0.97)_0%,oklch(0.13_0.006_260/0.8)_45%,oklch(0.13_0.006_260/0.4)_80%,oklch(0.13_0.006_260/0.65)_100%)]" />
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
                <GhostButton href="/team">{content.pages.team.eyebrow}</GhostButton>
              </div>
            </div>

            <div className="hidden items-end lg:flex">
              <div className="animate-float-in industrial-panel grid w-full grid-cols-3 divide-x divide-white/[0.07] rounded-2xl">
                {content.home.stats.slice(0, 3).map((stat) => (
                  <div key={stat.title} className="p-6">
                    <p className="display-index text-3xl font-semibold text-gradient-gold">
                      {stat.title}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-white/55">{stat.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Operating model */}
        <section className="relative bg-anthracite/60">
          <div className="absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-[88rem] px-5 py-24 sm:px-8 lg:px-12">
            <SectionHeader
              eyebrow="Monting Plus"
              title={content.home.contractorTitle}
              text={content.home.contractorText}
            />
            <div className="reveal-stagger mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ValueCard icon={UsersRound} title={content.home.why[0].title} text={content.home.why[0].text} />
              <ValueCard icon={Building2} title={content.home.why[1].title} text={content.home.why[1].text} />
              <ValueCard icon={ShieldCheck} title={content.home.certificationsTitle} text={content.home.certificationsIntro} />
              <ValueCard icon={Globe2} title={content.home.stats[3].title} text={content.home.stats[3].text} />
            </div>
          </div>
        </section>

        {/* Chain of command */}
        <section className="py-24">
          <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
            <SectionHeader title={content.home.workflowTitle} text={content.home.workflowText} />
            <ol>
              {content.home.workflow.map((step, i) => (
                <li key={step} className="scroll-reveal relative flex gap-7 pb-10 last:pb-0">
                  {i < content.home.workflow.length - 1 ? (
                    <span
                      className="absolute left-[15px] top-9 h-full w-px bg-linear-to-b from-gold/60 to-white/10"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/45 bg-graphite text-[11px] font-bold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-base font-semibold leading-7 text-white/85">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About cards */}
        <section className="relative bg-graphite/90 py-24">
          <div className="absolute inset-x-0 top-0 h-px gold-hairline opacity-40" aria-hidden="true" />
          <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
            <SectionHeader title={content.home.projectsTitle} text={content.home.projectsIntro} />
            <div className="mt-12">
              <CardGrid cards={page.cards} />
            </div>
          </div>
        </section>

        {/* Image + stats */}
        <section className="py-24">
          <div className="mx-auto grid max-w-[88rem] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
            <div className="scroll-reveal relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/industrial-team.jpg"
                alt="Monting Plus crews on site"
                fill
                className="object-cover opacity-90"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-graphite/75 to-transparent" />
            </div>
            <div className="reveal-stagger grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {content.home.stats.map((stat) => (
                <div key={stat.title} className="bg-anthracite p-7">
                  <p className="display-index text-[clamp(2.2rem,3.4vw,3.2rem)] font-semibold text-gradient-gold">
                    {stat.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/55">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden pb-32 pt-4">
          <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
            <SectionHeader eyebrow="Monting Plus" title={page.ctaTitle} text={page.ctaText} />
            <div className="scroll-reveal self-center">
              <ContactStrip content={content} />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function ValueCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof UsersRound;
  title: string;
  text: string;
}) {
  return (
    <article className="motion-card scroll-reveal group industrial-panel flex min-h-[200px] flex-col justify-between rounded-2xl p-7 transition-colors duration-300 hover:border-gold/30">
      <Icon className="motion-icon size-6 text-gold" aria-hidden="true" />
      <div>
        <h3 className="mt-6 text-lg font-semibold leading-snug text-white">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-white/55">{text}</p>
      </div>
    </article>
  );
}
