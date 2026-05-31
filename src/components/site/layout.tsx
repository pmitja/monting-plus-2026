import Image from "next/image";
import {
  ChevronRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { Card, SiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

import { SiteHeader } from "./site-header";

type ShellProps = {
  children: React.ReactNode;
  content: SiteContent;
};

const serviceCardImages = [
  "/images/cards/industrijske-montaze.webp",
  "/images/cards/remont.webp",
  "/images/cards/hvac.webp",
  "/images/cards/transportni-sistemi.webp",
  "/images/cards/stahlbau.webp",
  "/images/industrial-welder.jpg",
] as const;

export function SiteShell({ children, content }: ShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <SiteHeader content={content} />
      {children}
      <StickyCta content={content} />
      <SiteFooter content={content} />
    </div>
  );
}

export function StickyCta({ content }: { content: SiteContent }) {
  return (
    <div className="animate-sticky-enter fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/94 px-4 py-3 text-white shadow-2xl backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-2">
        <a
          href={`tel:${content.contact.phone.replaceAll(" ", "")}`}
          className="inline-flex h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-white/10 px-3 text-sm font-semibold transition-all duration-200 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/30"
        >
          <Phone className="size-4" aria-hidden="true" />
          <span className="truncate">{content.contact.phone}</span>
        </a>
        <Link
          href="/contact"
          className="inline-flex h-11 min-w-0 flex-1 items-center justify-center rounded-lg bg-orange-600 px-4 text-sm font-semibold shadow-sm transition-all duration-200 hover:bg-orange-500 hover:shadow-md hover:shadow-orange-500/25 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-orange-300/40"
        >
          <span className="truncate">{content.nav.quote}</span>
        </Link>
      </div>
    </div>
  );
}

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="scroll-reveal bg-slate-950 pb-24 pt-14 text-white sm:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/monting-plus-logo.jpg"
              alt="Monting Plus logo"
              width={58}
              height={64}
              className="h-12 w-11 rounded-sm bg-white object-contain"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em]">Monting Plus</p>
              <p className="mt-1 text-sm text-slate-400">{content.footer.company}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">{content.meta.description}</p>
        </div>

        <FooterGroup title={content.footer.legal}>
          <p>{content.contact.address}</p>
          <p>{content.contact.vat}</p>
          <Link href="/legal">{content.footer.legal}</Link>
        </FooterGroup>

        <FooterGroup title={content.footer.contact}>
          <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
          <a href={`tel:${content.contact.phone.replaceAll(" ", "")}`}>{content.contact.phone}</a>
          <a href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`}>WhatsApp</a>
        </FooterGroup>

        <FooterGroup title={content.footer.certifications}>
          <p>EN 1090 EXC4</p>
          <p>SCC</p>
          <p>DIN EN ISO 9606-1</p>
          <Link href="/certifications">
            {content.footer.downloads}
          </Link>
        </FooterGroup>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-4 text-xs text-slate-500 sm:px-6 lg:px-8">
        {content.footer.copyright}
      </p>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{title}</h3>
      <div className="mt-4 grid gap-2 text-sm leading-6 text-slate-300 [&_a]:transition [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  inverted = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("scroll-reveal max-w-5xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow mb-4 text-xs font-bold uppercase tracking-[0.24em]", inverted ? "text-orange-300" : "text-orange-600")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-[clamp(2rem,3.2vw,3rem)] font-semibold leading-[1.08] tracking-normal", inverted ? "text-white" : "text-slate-950")}>
        {title}
      </h2>
      {text ? (
        <p className={cn("mt-5 max-w-3xl text-lg leading-8", align === "center" && "mx-auto", inverted ? "text-slate-300" : "text-slate-600")}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function CardGrid({
  cards,
  columns = "three",
  muted = false,
}: {
  cards: Card[];
  columns?: "two" | "three";
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        "reveal-stagger grid gap-4",
        columns === "two" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {cards.map((card, index) => (
        <article
          key={`${card.title}-${index}`}
          className={cn(
            "motion-card scroll-reveal rounded-lg border p-6",
            muted
              ? "border-white/10 bg-white/6 text-white"
              : "border-slate-200 bg-white shadow-sm shadow-slate-200/60",
          )}
        >
          <p className={cn("text-xs font-bold uppercase tracking-[0.16em]", muted ? "text-orange-300" : "text-orange-600")}>
            / {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-5 text-xl font-semibold tracking-normal">{card.title}</h3>
          <p className={cn("mt-3 whitespace-pre-line text-sm leading-7", muted ? "text-slate-300" : "text-slate-600")}>
            {card.text}
          </p>
          {card.items ? (
            <ul className={cn("mt-5 grid gap-2 text-sm", muted ? "text-slate-200" : "text-slate-700")}>
              {card.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function ServiceCardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="reveal-stagger grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
          <article
            key={`${card.title}-${index}`}
            className="motion-card scroll-reveal group relative min-h-[430px] overflow-hidden rounded-lg border border-slate-700/70 bg-slate-950 text-white shadow-[0_24px_70px_rgba(2,6,23,0.28)] ring-1 ring-white/5"
          >
            <Image
              src={serviceCardImages[index % serviceCardImages.length]}
              alt=""
              fill
              className="object-cover object-right transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/92 via-slate-950/58 to-slate-950/18" />

            <div className="relative flex min-h-[430px] flex-col p-6 sm:p-7">
              <div className="flex items-start">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                  / {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="mt-10 max-w-[27rem]">
                <h3 className="text-3xl font-semibold leading-tight tracking-normal text-white">
                  {card.title}
                </h3>
                <p className="mt-6 text-lg font-medium leading-8 text-slate-300">
                  {card.text}
                </p>
                <div className="mt-8 h-px w-12 bg-orange-600" />
              </div>

              {card.items ? (
                <ul className="mt-8 grid gap-0 text-base font-semibold text-slate-100">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex min-h-14 items-center gap-4 border-b border-white/7 py-3 first:border-t"
                    >
                      <ChevronRight
                        className="motion-icon size-5 shrink-0 stroke-[2.4] text-orange-500"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
      ))}
    </div>
  );
}

export function ContactStrip({ content }: { content: SiteContent }) {
  const linkClass =
    "motion-card group flex min-h-16 cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-white/8 p-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition-all duration-200 hover:border-orange-300/70 hover:bg-white/12 hover:shadow-orange-950/10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-orange-300/30";
  const iconClass =
    "motion-icon flex size-10 shrink-0 items-center justify-center rounded-md bg-orange-500/12 text-orange-200 transition-colors duration-200 group-hover:bg-orange-500/18 group-hover:text-orange-100";

  return (
    <div className="reveal-stagger grid gap-3">
      <a
        href={`tel:${content.contact.phone.replaceAll(" ", "")}`}
        className={linkClass}
      >
        <span className={iconClass}>
          <Phone className="size-5" aria-hidden="true" />
        </span>
        <span className="leading-6">{content.contact.phone}</span>
      </a>
      <a
        href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`}
        className={linkClass}
      >
        <span className={iconClass}>
          <MessageCircle className="size-5" aria-hidden="true" />
        </span>
        <span className="leading-6">WhatsApp</span>
      </a>
      <a
        href={`mailto:${content.contact.email}`}
        className={linkClass}
      >
        <span className={iconClass}>
          <Mail className="size-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 break-words leading-6">{content.contact.email}</span>
      </a>
    </div>
  );
}
