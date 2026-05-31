import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { SiteContent } from "@/lib/site-content";

import { InquiryForm } from "./inquiry-form";
import {
  CardGrid,
  ContactStrip,
  SectionHeader,
  ServiceCardGrid,
  SiteShell,
} from "./layout";

const statIcons = [
  "/images/icons/helmet.webp",
  "/images/icons/globe.webp",
  "/images/icons/shield.webp",
  "/images/icons/map.webp",
] as const;

const statCardMeta: ReadonlyArray<{
  className: string;
}> = [
  {
    className:
      "border-white/50 bg-white/74 text-slate-950 shadow-[0_18px_46px_rgba(15,23,42,0.12)] lg:mt-3",
  },
  {
    className:
      "border-white/48 bg-white/68 text-slate-950 shadow-[0_18px_46px_rgba(15,23,42,0.1)]",
  },
  {
    className:
      "border-white/14 bg-slate-950/78 text-white shadow-[0_24px_58px_rgba(8,18,40,0.32)] ring-1 ring-orange-300/22 lg:-mt-3 lg:min-h-72",
  },
  {
    className:
      "border-white/46 bg-white/70 text-slate-950 shadow-[0_18px_46px_rgba(15,23,42,0.11)] lg:mt-6",
  },
] as const;

const whyCardImages = [
  "/images/cards/team.webp",
  "/images/cards/vodenje.webp",
  "/images/cards/mobilizacija.webp",
] as const;

export function HomePageView({ content }: { content: SiteContent }) {
  return (
    <SiteShell content={content}>
      <main className="animate-page-enter">
        <Hero content={content} />
        <section className="relative z-10 -mt-16 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(248,250,252,0.94)_38%,rgb(255,255,255)_100%)] pt-12 pb-14 sm:-mt-20 sm:pt-16 lg:-mt-24 lg:pt-20">
          <div className="reveal-stagger mx-auto grid max-w-7xl items-start gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {content.home.stats.map((stat, index) => {
              const meta = statCardMeta[index % statCardMeta.length];
              const isFeatured = index === 2;

              return (
                <article
                  key={stat.title}
                  className={`${meta.className} motion-card scroll-reveal group relative min-h-64 overflow-hidden rounded-3xl p-7 backdrop-blur-xl transition-shadow duration-[250ms] hover:shadow-[0_28px_70px_rgba(15,23,42,0.22)] sm:p-8`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-linear-to-br from-orange-300/22 via-cyan-200/16 to-transparent blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />
                  <div className="relative z-10 flex h-full min-h-50 flex-col justify-between gap-8">
                    <div>
                      <p className="text-4xl font-semibold leading-none sm:text-5xl">
                        {stat.title}
                      </p>
                      <p
                        className={`mt-4 text-base font-medium leading-7 ${
                          isFeatured ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {stat.text}
                      </p>
                    </div>
                  </div>
                  <Image
                    src={statIcons[index % statIcons.length]}
                    alt=""
                    width={360}
                    height={240}
                    className="absolute -bottom-5 -right-10 h-auto w-52 object-contain opacity-90 transition-transform duration-300 group-hover:scale-[1.03] sm:-right-12 lg:w-44 xl:w-52"
                    sizes="(min-width: 1280px) 208px, (min-width: 1024px) 176px, 208px"
                  />
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Monting Plus"
              title={content.home.whyTitle}
              text={content.home.whyIntro}
            />
            <div className="mt-10">
              <WhyImageCards cards={content.home.why} />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 pt-20 pb-10 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="EPC / Main Contractors"
              title={content.home.contractorTitle}
              text={content.home.contractorText}
              inverted
            />
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white pt-12 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title={content.home.servicesTitle}
              text={content.home.servicesIntro}
            />
            <div className="mt-10">
              <ServiceCardGrid cards={content.home.services} />
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <SectionHeader
              title={content.home.workflowTitle}
              text={content.home.workflowText}
            />
            <div className="reveal-stagger grid gap-3">
              {content.home.workflow.map((step, index) => (
                <div
                  key={step}
                  className="motion-card scroll-reveal flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="font-semibold uppercase tracking-[0.08em] text-slate-900">
                    {step}
                  </p>
                  {index < content.home.workflow.length - 1 ? (
                    <ArrowRight className="motion-icon ml-auto hidden size-5 text-orange-600 sm:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6  lg:px-8">
            <div>
              <SectionHeader
                title={content.home.certificationsTitle}
                text={content.home.certificationsIntro}
              />
              <div className="reveal-stagger mt-8 grid gap-3 sm:grid-cols-2">
                {content.home.certifications.map((item) => (
                  <div
                    key={item}
                    className="motion-card scroll-reveal flex items-center gap-3 rounded-md bg-white p-4 shadow-sm"
                  >
                    <ShieldCheck
                      className="size-5 text-orange-600"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-slate-900">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div className="scroll-reveal relative min-h-80 overflow-hidden rounded-lg bg-slate-900">
              <Image
                src="/images/industrial-team.jpg"
                alt="Industrial steel structures and access platforms"
                fill
                className="object-cover opacity-80 transition-transform duration-700 hover:scale-[1.03]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
            <div>
              <SectionHeader
                title={content.home.teamTitle}
                text={content.home.teamIntro}
              />
              <div className="mt-8">
                <CardGrid cards={content.home.team} columns="three" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title={content.home.projectsTitle}
              text={content.home.projectsIntro}
              inverted
            />
            <div className="reveal-stagger mt-10 grid gap-5 lg:grid-cols-2">
              {content.home.projects.map((project) => (
                <article
                  key={project.title}
                  className="motion-card scroll-reveal rounded-lg border border-white/10 bg-white/6 p-6"
                >
                  <p className="text-sm font-semibold text-orange-300">
                    {project.meta}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <ul className="mt-6 grid gap-3 text-sm text-slate-200">
                    {project.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              align="center"
              title={content.home.availabilityTitle}
              text={content.home.availabilityIntro}
            />
            <div className="mt-10">
              <CardGrid cards={content.home.availability} />
            </div>
            <div className="scroll-reveal mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange-600 shadow-orange-950/20 hover:bg-orange-500 hover:shadow-orange-500/25"
              >
                <Link href="/contact">
                  {content.home.primaryCta}
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
            <div>
              <SectionHeader
                eyebrow="Monting Plus"
                title={content.home.finalTitle}
                text={content.home.finalText}
                inverted
              />
              <div className="mt-8">
                <ContactStrip content={content} />
              </div>
            </div>
            <div className="scroll-reveal">
              <InquiryForm content={content.form} />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function WhyImageCards({ cards }: { cards: SiteContent["home"]["why"] }) {
  return (
    <div className="reveal-stagger grid gap-3 lg:grid-cols-3">
      {cards.map((card, index) => (
        <article
          key={`${card.title}-${index}`}
          className="motion-card scroll-reveal group relative min-h-[520px] overflow-hidden rounded-lg border border-slate-950/10 bg-slate-950 shadow-[0_24px_56px_rgba(15,23,42,0.18)]"
        >
          <Image
            src={whyCardImages[index % whyCardImages.length]}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/10 via-slate-950/24 to-slate-950/80" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-950 via-slate-950/88 to-transparent" />
          <Image
            src="/images/monting-plus-logo-transparent.png"
            alt=""
            width={96}
            height={106}
            className="absolute left-6 top-6 h-16 w-auto opacity-80 drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] sm:left-8 sm:top-8 sm:h-20"
            sizes="80px"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <p className="text-lg font-bold tracking-[0.08em] text-orange-300">
              / {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-5 text-3xl font-semibold tracking-normal">
              {card.title}
            </h3>
            <p className="mt-5 max-w-md text-base leading-8 text-slate-200">
              {card.text}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Hero({ content }: { content: SiteContent }) {
  return (
    <section
      data-hero
      className="relative overflow-hidden bg-slate-950 pt-20 text-white"
    >
      <Image
        src="/images/hero-img.webp"
        alt=""
        fill
        fetchPriority="high"
        className="hero-media object-cover md:hidden"
        sizes="100vw"
      />
      <video
        className="hero-media absolute inset-0 hidden size-full object-cover md:block"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-img.webp"
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/videos/hero-bg-video.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,25,0.92)_0%,rgba(3,10,25,0.72)_35%,rgba(3,10,25,0.30)_60%,rgba(3,10,25,0.10)_100%)]" />
      <div className="pointer-events-none absolute inset-0 hero-industrial-motion" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_22%_42%,rgba(249,115,22,0.16),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-[690px] max-w-7xl gap-8 px-4 pt-12 pb-12 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.62fr)] lg:px-8">
        <div className="reveal-stagger flex max-w-[620px] flex-col justify-center py-10">
          <p className="eyebrow text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
            {content.home.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[620px] text-[clamp(2.3rem,3.45vw,3.55rem)] font-semibold leading-[1.06] tracking-normal">
            {content.home.title}
          </h1>
          <p className="mt-6 max-w-[560px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {content.home.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-14 bg-orange-600 px-8 text-base shadow-[0_18px_42px_rgba(249,115,22,0.34),0_0_34px_rgba(249,115,22,0.18)] hover:bg-orange-500 hover:shadow-[0_22px_50px_rgba(249,115,22,0.4),0_0_42px_rgba(249,115,22,0.24)]"
            >
              <Link href="/contact">
                {content.home.primaryCta}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-14 border border-white/14 bg-white/6 px-6 text-white/78 backdrop-blur hover:border-white/28 hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">{content.home.secondaryCta}</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center py-10 lg:justify-end">
          <div className="animate-float-in w-full max-w-md rounded-lg border border-white/14 bg-[rgba(5,15,35,0.55)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6 lg:mt-24">
            <p className="text-sm font-semibold text-orange-300">
              EN 1090 EXC4 / SCC
            </p>
            <p className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
              {content.home.contractorTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {content.home.contractorText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
