import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { Card, SiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

import { SiteHeader } from "./site-header";

type ShellProps = {
  children: React.ReactNode;
  content: SiteContent;
  dark?: boolean;
};

const serviceCardImages = [
  "/images/cards/industrijske-montaze.webp",
  "/images/cards/remont.webp",
  "/images/cards/hvac.webp",
  "/images/cards/transportni-sistemi.webp",
  "/images/cards/stahlbau.webp",
  "/images/cards/sotori.webp",
] as const;

export function SiteShell({ children, content, dark = true }: ShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen",
        dark ? "bg-graphite text-white" : "bg-slate-50 text-slate-950",
      )}
    >
      <SiteHeader content={content} />
      {children}
      <StickyCta content={content} />
      <SiteFooter content={content} />
    </div>
  );
}

export function StickyCta({ content }: { content: SiteContent }) {
  return (
    <div className="animate-sticky-enter fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-graphite/95 px-4 py-3 text-white shadow-2xl backdrop-blur sm:hidden">
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
          className="inline-flex h-11 min-w-0 flex-1 items-center justify-center rounded-lg bg-gold text-graphite px-4 text-sm font-semibold shadow-sm transition-all duration-200 hover:bg-gold-bright hover:shadow-md hover:shadow-gold/25 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gold/40"
        >
          <span className="truncate">{content.nav.quote}</span>
        </Link>
      </div>
    </div>
  );
}

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-graphite pb-24 pt-20 text-white sm:pb-12">
      <div className="absolute inset-x-0 top-0 h-px gold-hairline opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />

      {/* Top row: brand statement + primary action */}
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 border-b border-white/[0.07] pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <Image
                src="/images/monting-plus-logo-transparent.png"
                alt="Monting Plus logo"
                width={58}
                height={64}
                className="h-14 w-12 object-contain"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em]">Monting Plus</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                  Industrial Assembly · Europe
                </p>
              </div>
            </div>
            <p className="mt-7 text-base leading-8 text-white/55">{content.meta.description}</p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center gap-3 rounded-lg bg-gold px-8 text-base font-semibold text-graphite shadow-[0_18px_44px_oklch(0.74_0.105_88/0.25)] transition-all duration-300 hover:bg-gold-bright focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gold/40"
            >
              {content.nav.quote}
              <ChevronRight className="motion-icon size-4 stroke-[2.6]" aria-hidden="true" />
            </Link>
            <p className="text-xs font-semibold text-white/35">{content.contact.response}</p>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <FooterGroup index={1} title={content.footer.contact}>
            <a href={`tel:${content.contact.phone.replaceAll(" ", "")}`} className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
              {content.contact.phone}
            </a>
            <a href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`} className="flex items-center gap-3">
              <MessageCircle className="size-4 shrink-0 text-gold" aria-hidden="true" />
              WhatsApp
            </a>
            <a href={`mailto:${content.contact.email}`} className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
              {content.contact.email}
            </a>
          </FooterGroup>

          <FooterGroup index={2} title={content.footer.certifications}>
            <p>EN 1090 EXC4</p>
            <p>SCC</p>
            <p>DIN EN ISO 9606-1</p>
            <Link href="/certifications">{content.footer.downloads}</Link>
          </FooterGroup>

          <FooterGroup index={3} title={content.footer.legal}>
            <p>{content.footer.company}</p>
            <p>{content.contact.address}</p>
            <p>{content.contact.vat}</p>
            <Link href="/legal">{content.footer.legal}</Link>
          </FooterGroup>

          <FooterGroup index={4} title="Navigation">
            {content.nav.items.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </FooterGroup>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">{content.footer.copyright}</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
            EN 1090 EXC4 <span className="mx-2 text-gold/60">·</span> SCC
            <span className="mx-2 text-gold/60">·</span> ISO 9606-1
          </p>
        </div>
      </div>

      {/* Oversized engineering watermark */}
      <div
        className="pointer-events-none relative mx-auto mt-14 max-w-[88rem] select-none overflow-hidden px-5 sm:px-8 lg:px-12"
        aria-hidden="true"
      >
        <p className="display-index -mb-[0.18em] whitespace-nowrap text-[clamp(4rem,11.5vw,11rem)] font-bold uppercase text-white/[0.04]">
          Monting Plus
        </p>
      </div>
    </footer>
  );
}

function FooterGroup({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="display-index text-[11px] font-bold text-gold/70">
          {String(index).padStart(2, "0")}
        </span>
        <span className="h-px w-6 bg-white/15" aria-hidden="true" />
        <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/45">
          {title}
        </h3>
      </div>
      <div className="mt-5 grid gap-2.5 text-sm leading-6 text-white/60 [&_a]:transition-colors [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}

export function Eyebrow({
  children,
  withRule = false,
}: {
  children: React.ReactNode;
  withRule?: boolean;
}) {
  return (
    <div className={cn(withRule && "flex items-center gap-5")}>
      {withRule ? <span className="h-px w-14 gold-hairline" aria-hidden="true" /> : null}
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
        {children}
      </p>
    </div>
  );
}

export function DisplayTitle({
  children,
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "text-balance text-[clamp(2.1rem,4.2vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.01em] text-white",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function GoldButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button
      asChild
      size="lg"
      className="h-14 bg-gold px-8 text-base font-semibold text-graphite shadow-[0_18px_44px_oklch(0.74_0.105_88/0.28)] hover:bg-gold-bright hover:shadow-[0_22px_54px_oklch(0.74_0.105_88/0.36)]"
    >
      <Link href={href}>
        {children}
        <ArrowRight data-icon="inline-end" />
      </Link>
    </Button>
  );
}

export function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button
      asChild
      size="lg"
      variant="ghost"
      className="h-14 border border-white/15 bg-white/[0.04] px-7 text-base text-white/80 backdrop-blur hover:border-gold/50 hover:bg-white/[0.08] hover:text-white"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
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
        <div className={cn("mb-5 flex items-center gap-5", align === "center" && "justify-center")}>
          <span className="h-px w-12 gold-hairline" aria-hidden="true" />
          <p className="eyebrow text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="text-balance text-[clamp(2rem,3.4vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.01em] text-white">
        {title}
      </h2>
      {text ? (
        <p className={cn("mt-5 max-w-3xl text-lg leading-8 text-white/60", align === "center" && "mx-auto")}>
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
            "motion-card scroll-reveal group flex min-h-[180px] flex-col justify-between rounded-2xl p-7 transition-colors duration-300",
            muted
              ? "border border-white/10 bg-white/[0.04] hover:border-gold/30"
              : "industrial-panel hover:border-gold/30",
            "text-white",
          )}
        >
          <div className="flex items-start justify-between">
            <span className="mt-1.5 h-px w-7 bg-gold" aria-hidden="true" />
            <span className="display-index text-3xl font-bold text-white/[0.12] transition-colors duration-500 group-hover:text-gold/50">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h3 className="mt-6 text-lg font-semibold leading-snug text-white">{card.title}</h3>
            <p className="mt-2 whitespace-pre-line text-sm leading-7 text-white/55">
              {card.text}
            </p>
            {card.items ? (
              <ul className="mt-4 grid gap-2 text-sm text-titanium/80">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-px w-4 bg-gold/60" aria-hidden="true" />
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

export function ServiceCardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="reveal-stagger grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <article
          key={`${card.title}-${index}`}
          className="motion-card scroll-reveal group relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-graphite text-white transition-colors duration-300 hover:border-gold/30"
        >
          <Image
            src={serviceCardImages[index % serviceCardImages.length]}
            alt=""
            fill
            className="object-cover object-left transition duration-700 group-hover:scale-[1.03]"
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-graphite via-graphite/55 to-graphite/15" />

          <div className="relative flex min-h-[430px] flex-col justify-between p-6 sm:p-7">
            <div className="flex items-start justify-between">
              <span className="mt-1.5 h-px w-7 bg-gold" aria-hidden="true" />
              <span className="display-index text-4xl font-bold text-white/[0.16] transition-colors duration-500 group-hover:text-gold/50">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-semibold leading-tight text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-titanium/80">
                {card.text}
              </p>
              {card.items ? (
                <ul className="mt-6 grid gap-0 text-sm font-semibold text-white/85">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex min-h-12 items-center gap-3 border-b border-white/[0.07] py-2.5 first:border-t"
                    >
                      <ChevronRight
                        className="motion-icon size-4 shrink-0 stroke-[2.4] text-gold-dim"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ContactStrip({ content }: { content: SiteContent }) {
  const linkClass =
    "motion-card group flex min-h-16 cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-white/8 p-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition-all duration-200 hover:border-gold/60 hover:bg-white/12 hover:shadow-black/15 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gold/30";
  const iconClass =
    "motion-icon flex size-10 shrink-0 items-center justify-center rounded-md bg-gold/15 text-gold-bright transition-colors duration-200 group-hover:bg-gold-bright/18 group-hover:text-gold-bright";

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
