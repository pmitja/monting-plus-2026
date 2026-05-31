import { ArrowRight, BriefcaseBusiness, CalendarRange, HardHat, UsersRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { SiteContent } from "@/lib/site-content";

import { CardGrid, SectionHeader, SiteShell } from "./layout";

type TeamPageProps = {
  content: SiteContent;
  locale: Locale;
};

const teamCopy = {
  sl: {
    requestTitle: "Povejte nam, kakšno ekipo potrebujete",
    requestText: "Izberite industrijo, število ljudi in trajanje projekta.",
    industry: "Industrija",
    people: "Koliko ljudi potrebujete?",
    duration: "Trajanje",
    message: "Kratek opis projekta",
    submit: "Pošlji zahtevo za ekipo",
    industries: ["Cement", "Apno", "Kemija", "Energetika", "Lesna predelava", "Drugo"],
    durations: ["1-2 meseca", "3-6 mesecev", "6-12 mesecev ali več"],
    recruitTitle: "Ste monter ali varilec za industrijske projekte?",
    recruitText:
      "Iščemo nove montažne ljudi za evropske projekte, delo na višini, jeklene konstrukcije, HVAC in shutdown okolja.",
    recruitCta: "Prijava za montažno ekipo",
  },
  de: {
    requestTitle: "Sagen Sie uns, welches Team Sie brauchen",
    requestText: "Wählen Sie Branche, Teamgröße und Projektdauer.",
    industry: "Branche",
    people: "Wie viele Personen benötigen Sie?",
    duration: "Dauer",
    message: "Kurze Projektbeschreibung",
    submit: "Teamanfrage senden",
    industries: ["Zement", "Kalk", "Chemie", "Energie", "Holzverarbeitung", "Andere"],
    durations: ["1-2 Monate", "3-6 Monate", "6-12 Monate oder mehr"],
    recruitTitle: "Sind Sie Monteur oder Schweißer für Industrieprojekte?",
    recruitText:
      "Wir suchen neue Montagekräfte für europäische Projekte, Höhenarbeit, Stahlbau, HVAC und Shutdown-Umgebungen.",
    recruitCta: "Für Montageteam bewerben",
  },
  en: {
    requestTitle: "Tell us what team you need",
    requestText: "Select your industry, required headcount and project duration.",
    industry: "Industry",
    people: "How many people do you need?",
    duration: "Duration",
    message: "Short project description",
    submit: "Send team request",
    industries: ["Cement", "Lime", "Chemical", "Energy", "Wood processing", "Other"],
    durations: ["1-2 months", "3-6 months", "6-12 months or more"],
    recruitTitle: "Are you a fitter or welder for industrial projects?",
    recruitText:
      "We are looking for new assembly people for European projects, work at height, steel structures, HVAC and shutdown environments.",
    recruitCta: "Apply for montage team",
  },
  sr: {
    requestTitle: "Recite nam kakav tim vam treba",
    requestText: "Izaberite industriju, broj ljudi i trajanje projekta.",
    industry: "Industrija",
    people: "Koliko ljudi vam treba?",
    duration: "Trajanje",
    message: "Kratak opis projekta",
    submit: "Pošalji zahtev za tim",
    industries: ["Cement", "Kreč", "Hemija", "Energetika", "Prerada drveta", "Drugo"],
    durations: ["1-2 meseca", "3-6 meseci", "6-12 meseci ili više"],
    recruitTitle: "Da li ste monter ili zavarivač za industrijske projekte?",
    recruitText:
      "Tražimo nove montažne ljude za evropske projekte, rad na visini, čelične konstrukcije, HVAC i shutdown okruženja.",
    recruitCta: "Prijava za montažni tim",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

export function TeamPageView({ content, locale }: TeamPageProps) {
  const page = content.pages.team;
  const copy = teamCopy[locale];

  return (
    <SiteShell content={content}>
      <main className="animate-page-enter">
        <section
          className="relative overflow-hidden bg-slate-950 bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/images/industrial-team.jpg')" }}
        >
          <div className="absolute inset-0 bg-slate-950/72" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/84 to-slate-950/32" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
            <div className="reveal-stagger flex max-w-[22rem] flex-col justify-center sm:max-w-none">
              <p className="eyebrow text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 text-[2rem] font-semibold leading-tight tracking-normal sm:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{page.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {content.home.trust.slice(0, 5).map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden items-end lg:flex">
              <div className="animate-float-in max-w-xl rounded-lg border border-white/12 bg-slate-950/72 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur">
                <p className="text-sm font-semibold text-orange-300">Monting Plus Teams</p>
                <p className="mt-2 text-2xl font-semibold">{copy.requestTitle as string}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{copy.requestText as string}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader title={content.home.teamTitle} text={content.home.teamIntro} />
            <div className="mt-10">
              <CardGrid cards={page.cards} />
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeader title={copy.requestTitle as string} text={copy.requestText as string} />
              <div className="reveal-stagger mt-8 grid gap-4 sm:grid-cols-3">
                <MiniStat icon={BriefcaseBusiness} title={copy.industry as string} text={content.pages.industries.title} />
                <MiniStat icon={UsersRound} title={copy.people as string} text="4 / 6 / 12+" />
                <MiniStat icon={CalendarRange} title={copy.duration as string} text={(copy.durations as string[]).join(" · ")} />
              </div>
            </div>
            <div className="scroll-reveal">
              <TeamRequestForm content={content} copy={copy} />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeader
                eyebrow="Monting Plus Careers"
                title={copy.recruitTitle as string}
                text={copy.recruitText as string}
                inverted
              />
            </div>
            <div className="motion-card scroll-reveal group rounded-lg border border-white/10 bg-white/6 p-6">
              <HardHat className="motion-icon size-8 text-orange-300" aria-hidden="true" />
              <p className="mt-5 text-xl font-semibold">{content.home.team[2].title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{content.home.team[2].text}</p>
              <Button asChild size="lg" className="mt-6 bg-orange-600 shadow-orange-950/20 hover:bg-orange-500 hover:shadow-orange-500/25">
                <Link href="/contact">
                  {copy.recruitCta as string}
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function TeamRequestForm({
  content,
  copy,
}: {
  content: SiteContent;
  copy: (typeof teamCopy)[Locale];
}) {
  return (
    <Form className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
      <FieldGroup className="grid gap-4 sm:grid-cols-2">
        <Field>
          <FieldLabel className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            {copy.industry as string}
          </FieldLabel>
          <Select name="industry">
            <SelectTrigger className="h-11 w-full bg-white">
              <SelectValue placeholder={copy.industry as string} />
            </SelectTrigger>
            <SelectContent>
            {(copy.industries as string[]).map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            {copy.people as string}
          </FieldLabel>
          <Input
            className="h-11 bg-white"
            name="people"
            placeholder="4-6 / 12 / 25"
            type="text"
          />
        </Field>
        <Field className="sm:col-span-2">
          <FieldLabel className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            {copy.duration as string}
          </FieldLabel>
          <Select name="duration">
            <SelectTrigger className="h-11 w-full bg-white">
              <SelectValue placeholder={copy.duration as string} />
            </SelectTrigger>
            <SelectContent>
            {(copy.durations as string[]).map((duration) => (
              <SelectItem key={duration} value={duration}>
                {duration}
              </SelectItem>
            ))}
            </SelectContent>
          </Select>
        </Field>
        <Field className="sm:col-span-2">
          <FieldLabel className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            {copy.message as string}
          </FieldLabel>
          <Textarea
            className="min-h-28 bg-white"
            name="message"
            placeholder={content.form.description}
          />
        </Field>
      </FieldGroup>
      <Button
        type="submit"
        className="h-12 w-full cursor-pointer bg-orange-600 text-white hover:bg-orange-500 hover:shadow-orange-500/25"
      >
        {copy.submit as string}
      </Button>
    </Form>
  );
}

function MiniStat({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof BriefcaseBusiness;
  title: string;
  text: string;
}) {
  return (
    <div className="motion-card scroll-reveal group rounded-lg border border-slate-200 bg-slate-50 p-4">
      <Icon className="motion-icon size-5 text-orange-600" aria-hidden="true" />
      <p className="mt-4 text-sm font-semibold text-slate-950">{title}</p>
      <p className="mt-1 text-xs leading-5 text-slate-600">{text}</p>
    </div>
  );
}
