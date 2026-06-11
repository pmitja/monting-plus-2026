import { CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";

import type { SiteContent } from "@/lib/site-content";

import { IndustrialScene } from "./industrial-scene";
import { InquiryForm } from "./inquiry-form";
import {
  ContactStrip,
  DisplayTitle,
  Eyebrow,
  GhostButton,
  GoldButton,
  SiteShell,
} from "./layout";
import { PhaseRail } from "./phase-rail";

const whyCardImages = [
  "/images/cards/sotori.webp",
  "/images/cards/vodenje.webp",
  "/images/cards/mobilizacija.webp",
] as const;

export function HomePageView({ content }: { content: SiteContent }) {
  const phases = content.home.phases;

  return (
    <SiteShell content={content} dark>
      <IndustrialScene />
      <div className="pointer-events-none fixed inset-0 z-0 cinematic-vignette" />
      <PhaseRail phases={phases} />

      <main className="animate-page-enter relative z-10">
        <Hero content={content} />

        {/* Phase 01 — Planning: the statement of intent over open space */}
        <section data-phase="0" className="relative">
          <PhaseMarker index={0} label={phases[0]} />
          <StatsBand stats={content.home.stats} />
          <PlanningStatement content={content} />
        </section>

        {/* Phase 02 — Engineering: structure, leadership, blueprint logic */}
        <section data-phase="1" className="relative bg-anthracite/92 backdrop-blur-sm">
          <div className="absolute inset-0 blueprint-grid opacity-60" aria-hidden="true" />
          <div className="relative">
            <PhaseMarker index={1} label={phases[1]} />
            <EngineeringSection content={content} />
          </div>
        </section>

        {/* Phase 03 — Fabrication: the service catalogue as a precision index */}
        <section data-phase="2" className="relative">
          <PhaseMarker index={2} label={phases[2]} />
          <FabricationSection content={content} />
        </section>

        {/* Phase 04 — Installation: people, scale, executed references */}
        <section data-phase="3" className="relative bg-graphite/94 backdrop-blur-sm">
          <PhaseMarker index={3} label={phases[3]} />
          <InstallationSection content={content} />
          <ReferencesSection content={content} />
        </section>

        {/* Phase 05 — Completion: certification, availability, handover */}
        <section data-phase="4" className="relative">
          <PhaseMarker index={4} label={phases[4]} />
          <CompletionSection content={content} />
          <FinalSection content={content} />
        </section>
      </main>
    </SiteShell>
  );
}

/* ------------------------------------------------------------------ */
/* Shared primitives                                                    */
/* ------------------------------------------------------------------ */

function PhaseMarker({ index, label }: { index: number; label: string }) {
  return (
    <div className="mx-auto max-w-[88rem] px-5 pt-24 sm:px-8 lg:px-12">
      <div className="scroll-reveal flex items-center gap-5">
        <span className="display-index text-sm font-bold text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-16 gold-hairline" />
        <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-white/45">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero — standing inside the project                                   */
/* ------------------------------------------------------------------ */

function Hero({ content }: { content: SiteContent }) {
  return (
    <section data-hero data-phase="0" className="relative min-h-svh overflow-hidden">
      {/* Layered photography behind the wireframe environment */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/industrial-steel-structure.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="hero-media object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.13_0.006_260/0.96)_0%,oklch(0.13_0.006_260/0.78)_45%,oklch(0.13_0.006_260/0.4)_75%,oklch(0.13_0.006_260/0.65)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-graphite to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-[88rem] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 lg:px-12">
        <div className="reveal-stagger max-w-[60rem]">
          <div className="flex items-center gap-5">
            <span className="h-px w-14 gold-hairline" />
            <Eyebrow>{content.home.eyebrow}</Eyebrow>
          </div>

          <h1 className="mt-8 hyphens-auto text-balance text-[clamp(2.1rem,6vw,5.4rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-white">
            {content.home.title}
          </h1>

          <p className="mt-8 max-w-[42rem] text-pretty text-lg leading-8 text-titanium/85 sm:text-xl sm:leading-9">
            {content.home.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GoldButton href="/contact">{content.home.primaryCta}</GoldButton>
            <GhostButton href="/projects">{content.home.secondaryCta}</GhostButton>
          </div>
        </div>

        {/* Technical trust strip pinned to the hero base */}
        <div className="scroll-reveal mt-16 border-t border-white/10 pt-6">
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {content.home.trust.map((tag) => (
              <li
                key={tag}
                className="flex items-center gap-2.5 text-[13px] font-semibold tracking-wide text-white/55"
              >
                <span className="size-1 rounded-full bg-gold" aria-hidden="true" />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 lg:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
          Scroll
        </span>
        <span className="block h-14 w-px overflow-hidden bg-white/10">
          <span className="scroll-cue-line block h-full w-full bg-gold/80" />
        </span>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Phase 01 — Planning                                                  */
/* ------------------------------------------------------------------ */

function StatsBand({ stats }: { stats: SiteContent["home"]["stats"] }) {
  return (
    <div className="mx-auto max-w-[88rem] px-5 pt-14 sm:px-8 lg:px-12">
      <div className="reveal-stagger industrial-panel grid grid-cols-2 divide-white/[0.07] rounded-2xl lg:grid-cols-4 lg:divide-x">
        {stats.map((stat) => (
          <div key={stat.title} className="px-7 py-8 lg:px-9 lg:py-10">
            <p className="display-index text-[clamp(2.6rem,4vw,3.8rem)] font-semibold text-gradient-gold">
              {stat.title}
            </p>
            <p className="mt-3 text-sm font-medium leading-6 text-white/55">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanningStatement({ content }: { content: SiteContent }) {
  return (
    <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:py-36 lg:px-12">
      <div className="scroll-reveal">
        <Eyebrow>Monting Plus</Eyebrow>
        <DisplayTitle className="mt-6">{content.home.whyTitle}</DisplayTitle>
      </div>
      <div className="scroll-reveal flex flex-col justify-end">
        <p className="text-pretty text-xl font-medium leading-9 text-titanium/80 sm:text-2xl sm:leading-10">
          {content.home.whyIntro}
        </p>
        <div className="mt-10 h-px w-full bg-white/10" />
        <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
          {content.home.contractorText}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Phase 02 — Engineering                                               */
/* ------------------------------------------------------------------ */

function EngineeringSection({ content }: { content: SiteContent }) {
  return (
    <div className="mx-auto max-w-[88rem] px-5 pb-32 pt-14 sm:px-8 lg:px-12">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="scroll-reveal">
          <Eyebrow>EPC / Main Contractors</Eyebrow>
          <DisplayTitle className="mt-6">{content.home.contractorTitle}</DisplayTitle>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
            {content.home.workflowText}
          </p>

          {/* Chain of command rendered as an engineering schematic */}
          <ol className="mt-12">
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

        <div className="scroll-reveal relative min-h-[420px] lg:min-h-0">
          <div className="absolute -left-4 top-10 hidden h-[calc(100%-5rem)] w-px gold-hairline lg:block" />
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/cards/stahlbau.webp"
              alt="Large-scale steel construction site at night"
              fill
              className="object-cover object-left transition-transform duration-700 hover:scale-[1.025]"
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-graphite/85 via-transparent to-graphite/20" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
                {content.home.workflowTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Phase 03 — Fabrication: services as a precision index                */
/* ------------------------------------------------------------------ */

function FabricationSection({ content }: { content: SiteContent }) {
  return (
    <div className="mx-auto max-w-[88rem] px-5 pb-32 pt-14 sm:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="scroll-reveal industrial-panel rounded-2xl p-8 lg:p-9">
            <Eyebrow>{content.home.servicesTitle}</Eyebrow>
            <p className="mt-5 text-pretty text-lg leading-8 text-titanium/85">
              {content.home.servicesIntro}
            </p>
            <div className="mt-8">
              <GoldButton href="/services">{content.home.primaryCta}</GoldButton>
            </div>
          </div>
        </div>

        <div>
          {content.home.services.map((service, i) => (
            <article
              key={service.title}
              className="scroll-reveal group grid gap-5 border-b border-white/10 py-10 first:border-t sm:grid-cols-[5.5rem_1fr] lg:grid-cols-[7rem_1fr_minmax(12rem,0.5fr)]"
            >
              <span className="display-index text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold text-white/[0.13] transition-colors duration-500 group-hover:text-gold/55">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-semibold leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-white/55">
                  {service.text}
                </p>
              </div>
              {service.items ? (
                <ul className="flex flex-col gap-2 sm:col-start-2 lg:col-start-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[13px] font-semibold text-white/45"
                    >
                      <span className="h-px w-4 bg-gold/60" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Phase 04 — Installation                                              */
/* ------------------------------------------------------------------ */

function InstallationSection({ content }: { content: SiteContent }) {
  return (
    <div className="mx-auto max-w-[88rem] px-5 pt-14 sm:px-8 lg:px-12">
      <div className="reveal-stagger grid gap-4 lg:grid-cols-3">
        {content.home.why.map((card, index) => (
          <article
            key={card.title}
            className="motion-card scroll-reveal group relative min-h-[480px] overflow-hidden rounded-2xl border border-white/10 lg:[&:nth-child(2)]:translate-y-10"
          >
            <Image
              src={whyCardImages[index % whyCardImages.length]}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-graphite via-graphite/35 to-graphite/10" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="display-index text-sm font-bold text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-titanium/80">
                {card.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Team structure */}
      <div className="grid gap-12 pb-8 pt-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-36">
        <div className="scroll-reveal relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/industrial-team.jpg"
            alt="Monting Plus assembly crews on a European industrial site"
            fill
            className="object-cover opacity-90"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-graphite/80 to-transparent" />
        </div>
        <div>
          <div className="scroll-reveal">
            <Eyebrow>{content.home.teamTitle}</Eyebrow>
            <DisplayTitle className="mt-6">{content.home.teamIntro}</DisplayTitle>
          </div>
          <div className="reveal-stagger mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {content.home.team.map((member) => (
              <div key={member.title} className="bg-anthracite p-6">
                <h3 className="text-base font-semibold text-white">{member.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{member.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReferencesSection({ content }: { content: SiteContent }) {
  return (
    <div className="mx-auto max-w-[88rem] px-5 pb-32 pt-16 sm:px-8 lg:px-12">
      <div className="scroll-reveal max-w-3xl">
        <Eyebrow>{content.home.projectsTitle}</Eyebrow>
        <p className="mt-5 text-lg leading-8 text-white/60">
          {content.home.projectsIntro}
        </p>
      </div>
      <div className="reveal-stagger mt-12 grid gap-4 lg:grid-cols-2">
        {content.home.projects.map((project) => (
          <article
            key={project.title}
            className="motion-card scroll-reveal industrial-panel rounded-2xl p-8 transition-colors hover:border-gold/30"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
              {project.meta}
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-white">
              {project.title}
            </h3>
            <ul className="mt-6 grid gap-2.5 text-sm text-titanium/80">
              {project.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Phase 05 — Completion                                                */
/* ------------------------------------------------------------------ */

function CompletionSection({ content }: { content: SiteContent }) {
  return (
    <div className="mx-auto max-w-[88rem] px-5 pt-14 sm:px-8 lg:px-12">
      <div className="scroll-reveal max-w-3xl">
        <Eyebrow>{content.home.certificationsTitle}</Eyebrow>
        <p className="mt-5 text-lg leading-8 text-white/60">
          {content.home.certificationsIntro}
        </p>
      </div>
      <div className="reveal-stagger mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {content.home.certifications.map((item) => (
          <div
            key={item}
            className="motion-card scroll-reveal industrial-panel flex items-center gap-3.5 rounded-xl p-5"
          >
            <ShieldCheck className="size-5 shrink-0 text-gold" aria-hidden="true" />
            <span className="text-sm font-semibold text-white/85">{item}</span>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div className="pt-24">
        <div className="scroll-reveal mx-auto max-w-2xl text-center">
          <Eyebrow>{content.home.availabilityTitle}</Eyebrow>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {content.home.availabilityIntro}
          </p>
        </div>
        <div className="reveal-stagger mx-auto mt-10 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {content.home.availability.map((slot) => (
            <div key={slot.title} className="bg-anthracite/90 p-7 text-center">
              <h3 className="text-lg font-semibold text-gold">{slot.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{slot.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FinalSection({ content }: { content: SiteContent }) {
  return (
    <div className="mx-auto grid max-w-[88rem] gap-14 px-5 pb-36 pt-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
      <div>
        <div className="scroll-reveal">
          <span className="block h-px w-16 gold-hairline" />
          <DisplayTitle className="mt-8">{content.home.finalTitle}</DisplayTitle>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            {content.home.finalText}
          </p>
        </div>
        <div className="mt-10">
          <ContactStrip content={content} />
        </div>
      </div>
      <div className="scroll-reveal">
        <div className="industrial-panel rounded-2xl p-2">
          <InquiryForm content={content.form} dark />
        </div>
      </div>
    </div>
  );
}
