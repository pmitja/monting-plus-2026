import { ArrowRight, Building2, Globe2, ShieldCheck, UsersRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { SiteContent } from "@/lib/site-content";

import { CardGrid, ContactStrip, SectionHeader, SiteShell } from "./layout";

export function AboutPageView({ content }: { content: SiteContent }) {
  const page = content.pages.about;

  return (
    <SiteShell content={content}>
      <main className="animate-page-enter">
        <section
          className="relative overflow-hidden bg-slate-950 bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/images/industrial-steel-structure.jpg')" }}
        >
          <div className="absolute inset-0 bg-slate-950/72" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/84 to-slate-950/32" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
            <div className="reveal-stagger flex max-w-[22rem] flex-col justify-center sm:max-w-none">
              <p className="eyebrow text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 text-[2rem] font-semibold leading-tight tracking-normal sm:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{page.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-orange-600 shadow-orange-950/20 hover:bg-orange-500 hover:shadow-orange-500/25">
                  <Link href="/contact">
                    {content.nav.quote}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/24 bg-white/10 text-white backdrop-blur hover:border-white/40 hover:bg-white/18 hover:text-white"
                >
                  <Link href="/team">{content.pages.team.eyebrow}</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-end">
              <div className="animate-float-in reveal-stagger grid w-full gap-3 rounded-lg border border-white/12 bg-slate-950/72 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur sm:grid-cols-3">
                {content.home.stats.slice(0, 3).map((stat) => (
                  <div key={stat.title} className="motion-card rounded-md bg-white/8 p-4">
                    <p className="text-2xl font-semibold">{stat.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">{stat.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title={content.home.contractorTitle}
              text={content.home.contractorText}
            />
            <div className="reveal-stagger mt-10 grid gap-4 lg:grid-cols-4">
              <ValueCard icon={UsersRound} title={content.home.why[0].title} text={content.home.why[0].text} />
              <ValueCard icon={Building2} title={content.home.why[1].title} text={content.home.why[1].text} />
              <ValueCard icon={ShieldCheck} title={content.home.certificationsTitle} text={content.home.certificationsIntro} />
              <ValueCard icon={Globe2} title={content.home.stats[3].title} text={content.home.stats[3].text} />
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeader title={content.home.workflowTitle} text={content.home.workflowText} />
            </div>
            <div className="reveal-stagger grid gap-3">
              {content.home.workflow.map((step, index) => (
                <div key={step} className="motion-card scroll-reveal flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="font-semibold uppercase tracking-[0.08em] text-slate-900">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader title={content.home.projectsTitle} text={content.home.projectsIntro} />
            <div className="mt-10">
              <CardGrid cards={page.cards} />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeader
                eyebrow="Monting Plus"
                title={page.ctaTitle}
                text={page.ctaText}
                inverted
              />
            </div>
            <div className="scroll-reveal">
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
    <article className="motion-card scroll-reveal group rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <Icon className="motion-icon size-6 text-orange-600" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-semibold tracking-normal text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </article>
  );
}
