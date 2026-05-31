import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { DetailPageKey, SiteContent } from "@/lib/site-content";

import { InquiryForm } from "./inquiry-form";
import { CardGrid, ContactStrip, SectionHeader, ServiceCardGrid, SiteShell } from "./layout";

export function DetailPageView({
  content,
  pageKey,
}: {
  content: SiteContent;
  pageKey: DetailPageKey;
}) {
  const page = content.pages[pageKey];
  const isContact = pageKey === "contact";
  const heroImage =
    pageKey === "projects" ? "/images/industrial-project.jpg" : "/images/industrial-welder.jpg";

  return (
    <SiteShell content={content}>
      <main className="animate-page-enter">
        <section
          className="relative overflow-hidden bg-slate-950 bg-cover bg-center text-white"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-slate-950/74" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/86 to-slate-950/34" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
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
              </div>
            </div>
            <div className="hidden items-end lg:flex">
              <div className="animate-float-in max-w-xl rounded-lg border border-white/12 bg-slate-950/72 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur">
                <p className="text-sm font-semibold text-orange-300">Monting Plus</p>
                <p className="mt-2 text-2xl font-semibold">{page.ctaTitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{page.ctaText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={pageKey === "services" ? "bg-slate-950 py-20" : "py-20"}>
          <div className="scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {pageKey === "services" ? (
              <ServiceCardGrid cards={page.cards} />
            ) : (
              <CardGrid cards={page.cards} columns={pageKey === "certifications" ? "three" : "three"} />
            )}
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.98)_0%,rgba(15,23,42,0.88)_48%,rgba(3,105,161,0.36)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-white/10" />
          <div className="relative mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <div className="scroll-reveal lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="Monting Plus"
                title={page.ctaTitle}
                text={page.ctaText}
                inverted
              />
              <div className="mt-8">
                <ContactStrip content={content} />
              </div>
            </div>
            {isContact ? (
              <div className="scroll-reveal">
                <InquiryForm content={content.form} />
              </div>
            ) : (
              <div className="scroll-reveal rounded-lg border border-white/10 bg-white/8 p-6 text-white shadow-2xl shadow-slate-950/30 backdrop-blur">
                <SectionHeader
                  eyebrow="Monting Plus"
                  title={content.home.availabilityTitle}
                  inverted
                />
                <div className="mt-6">
                  <CardGrid cards={content.home.availability} columns="three" muted />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
