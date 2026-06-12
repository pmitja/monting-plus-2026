import { BriefcaseBusiness, CalendarRange, HardHat, UsersRound } from "lucide-react";
import Image from "next/image";

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
import type { Locale } from "@/i18n/routing";
import type { SiteContent } from "@/lib/site-content";

import {
  CardGrid,
  DisplayTitle,
  Eyebrow,
  GoldButton,
  SectionHeader,
  SiteShell,
} from "./layout";

const darkFieldLabel = "text-xs font-bold uppercase tracking-[0.1em] text-white/55";
const darkInput =
  "h-11 border-white/12 bg-white/[0.05] text-white transition-colors placeholder:text-white/35 hover:border-white/25 focus-visible:border-gold focus-visible:ring-gold/25 [color-scheme:dark]";

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
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src="/images/industrial-team.jpg"
              alt=""
              fill
              priority
              className="object-cover opacity-35"
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
              <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
                {content.home.trust.slice(0, 5).map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[13px] font-semibold tracking-wide text-white/55"
                  >
                    <span className="size-1 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden items-end justify-end lg:flex">
              <div className="animate-float-in industrial-panel max-w-md rounded-sm p-8">
                <span className="block h-px w-12 gold-hairline" aria-hidden="true" />
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                  Monting Plus Teams
                </p>
                <p className="mt-4 text-2xl font-semibold leading-snug text-white">
                  {copy.requestTitle as string}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/55">{copy.requestText as string}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team structure */}
        <section className="relative bg-anthracite/60">
          <div className="absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-[88rem] px-5 py-24 sm:px-8 lg:px-12">
            <SectionHeader title={content.home.teamTitle} text={content.home.teamIntro} />
            <div className="mt-12">
              <CardGrid cards={page.cards} />
            </div>
          </div>
        </section>

        {/* Team request */}
        <section className="py-24">
          <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
            <div>
              <SectionHeader title={copy.requestTitle as string} text={copy.requestText as string} />
              <div className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-3">
                <MiniStat icon={BriefcaseBusiness} title={copy.industry as string} text={content.pages.industries.title} />
                <MiniStat icon={UsersRound} title={copy.people as string} text="4 / 6 / 12+" />
                <MiniStat icon={CalendarRange} title={copy.duration as string} text={(copy.durations as string[]).join(" · ")} />
              </div>
            </div>
            <div className="scroll-reveal industrial-panel rounded-sm p-2">
              <TeamRequestForm content={content} copy={copy} />
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="relative bg-graphite/90 py-24">
          <div className="absolute inset-x-0 top-0 h-px gold-hairline opacity-40" aria-hidden="true" />
          <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
            <SectionHeader
              eyebrow="Monting Plus Careers"
              title={copy.recruitTitle as string}
              text={copy.recruitText as string}
            />
            <div className="motion-card scroll-reveal group industrial-panel rounded-sm p-8 transition-colors duration-300 hover:border-gold/30">
              <HardHat className="motion-icon size-8 text-gold" aria-hidden="true" />
              <p className="mt-6 text-xl font-semibold text-white">{content.home.team[2].title}</p>
              <p className="mt-3 text-sm leading-7 text-white/55">{content.home.team[2].text}</p>
              <div className="mt-8">
                <GoldButton href="/contact">{copy.recruitCta as string}</GoldButton>
              </div>
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
    <Form className="relative overflow-hidden rounded-sm border border-white/10 p-4 text-white sm:p-6">
      <div className="absolute inset-x-0 top-0 h-px gold-hairline" aria-hidden="true" />
      <FieldGroup className="grid gap-4 sm:grid-cols-2">
        <Field>
          <FieldLabel className={darkFieldLabel}>
            {copy.industry as string}
          </FieldLabel>
          <Select name="industry">
            <SelectTrigger className={`w-full ${darkInput}`}>
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
          <FieldLabel className={darkFieldLabel}>
            {copy.people as string}
          </FieldLabel>
          <Input
            className={darkInput}
            name="people"
            placeholder="4-6 / 12 / 25"
            type="text"
          />
        </Field>
        <Field className="sm:col-span-2">
          <FieldLabel className={darkFieldLabel}>
            {copy.duration as string}
          </FieldLabel>
          <Select name="duration">
            <SelectTrigger className={`w-full ${darkInput}`}>
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
          <FieldLabel className={darkFieldLabel}>
            {copy.message as string}
          </FieldLabel>
          <Textarea
            className="min-h-28 border-white/12 bg-white/[0.05] text-white placeholder:text-white/35 hover:border-white/25 focus-visible:border-gold focus-visible:ring-gold/25"
            name="message"
            placeholder={content.form.description}
          />
        </Field>
      </FieldGroup>
      <Button
        type="submit"
        className="h-12 w-full cursor-pointer bg-gold font-semibold text-graphite shadow-lg shadow-gold/20 hover:bg-gold-bright hover:shadow-gold/30 focus-visible:ring-gold/30"
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
    <div className="motion-card scroll-reveal group industrial-panel rounded-sm p-5 transition-colors duration-300 hover:border-gold/30">
      <Icon className="motion-icon size-5 text-gold" aria-hidden="true" />
      <p className="mt-4 text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-xs leading-5 text-white/55">{text}</p>
    </div>
  );
}
