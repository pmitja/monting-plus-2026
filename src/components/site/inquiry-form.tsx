import { CalendarDays, Factory, Mail, Phone, ShieldCheck, UserRound } from "lucide-react";

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
import type { SiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type InquiryFormProps = {
  content: SiteContent["form"];
  compact?: boolean;
  dark?: boolean;
};

export function InquiryForm({ content, compact = false, dark = false }: InquiryFormProps) {
  const fields = [
    ["name", UserRound],
    ["company", Factory],
    ["country", Factory],
    ["email", Mail],
    ["phone", Phone],
    ["projectType", Factory],
    ["workforce", UserRound],
    ["startDate", CalendarDays],
  ] as const;

  const inputClass = dark
    ? "h-12 border-white/12 bg-white/[0.05] pl-10 text-white transition-colors placeholder:text-white/35 hover:border-white/25 focus-visible:border-gold focus-visible:ring-gold/25 [color-scheme:dark]"
    : "h-12 border-slate-200 bg-slate-50/80 pl-10 shadow-inner shadow-slate-200/60 transition-colors placeholder:text-slate-500 hover:border-slate-300 focus-visible:border-gold-dim focus-visible:ring-gold/25";

  return (
    <Form
      className={cn(
        "relative overflow-hidden rounded-lg p-4 sm:p-6 lg:p-7",
        dark
          ? "border border-white/10 bg-transparent text-white"
          : "border border-slate-200 bg-white text-slate-950 shadow-2xl shadow-slate-950/35",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px gold-hairline" />
      <div className={compact ? "mb-5" : "mb-7"}>
        <div
          className={cn(
            "eyebrow mb-4 inline-flex h-9 items-center gap-2 rounded-md border px-3 text-xs font-bold uppercase tracking-[0.14em]",
            dark
              ? "border-white/12 bg-white/[0.05] text-white/65"
              : "border-slate-200 bg-slate-50 text-slate-600",
          )}
        >
          <ShieldCheck className="size-4 text-gold" aria-hidden="true" />
          EN 1090 / SCC
        </div>
        <h3
          className={cn(
            "text-2xl font-semibold tracking-normal",
            dark ? "text-white" : "text-slate-950",
          )}
        >
          {content.title}
        </h3>
        <p
          className={cn(
            "mt-2 max-w-2xl text-sm leading-6",
            dark ? "text-white/55" : "text-slate-600",
          )}
        >
          {content.description}
        </p>
      </div>
      <FieldGroup className="grid gap-4 sm:grid-cols-2">
        {fields.map(([key, Icon]) => {
          const fieldId = `inquiry-${key}`;

          return (
          <Field key={key} className={key === "name" ? "sm:col-span-2" : undefined}>
            <FieldLabel
              htmlFor={fieldId}
              className={cn(
                "text-xs font-bold uppercase tracking-[0.1em]",
                dark ? "text-white/55" : "text-slate-600",
              )}
            >
              {content.fields[key]}
            </FieldLabel>
            <div className="relative">
              <Icon
                className={cn(
                  "pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2",
                  dark ? "text-white/35" : "text-slate-400",
                )}
                aria-hidden="true"
              />
              {key === "projectType" ? (
                <Select name={key}>
                  <SelectTrigger
                    id={fieldId}
                    className={cn("w-full text-base md:text-sm", inputClass)}
                  >
                    <SelectValue placeholder={content.fields[key]} />
                  </SelectTrigger>
                  <SelectContent>
                    {content.projectTypes.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id={fieldId}
                  className={inputClass}
                  name={key}
                  type={key === "email" ? "email" : key === "startDate" ? "date" : "text"}
                  placeholder={content.fields[key]}
                />
              )}
            </div>
          </Field>
          );
        })}
      </FieldGroup>
      <Button
        type="submit"
        size="lg"
        className="mt-1 h-12 w-full cursor-pointer bg-gold font-semibold text-graphite shadow-lg shadow-gold/20 hover:bg-gold-bright hover:shadow-gold/30 focus-visible:ring-gold/30"
      >
        {content.submit}
      </Button>
    </Form>
  );
}
