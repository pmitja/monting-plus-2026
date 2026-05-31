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

type InquiryFormProps = {
  content: SiteContent["form"];
  compact?: boolean;
};

export function InquiryForm({ content, compact = false }: InquiryFormProps) {
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

  return (
    <Form className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 text-slate-950 shadow-2xl shadow-slate-950/35 sm:p-6 lg:p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-orange-500 via-sky-700 to-slate-950" />
      <div className={compact ? "mb-5" : "mb-7"}>
        <div className="eyebrow mb-4 inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
          <ShieldCheck className="size-4 text-sky-700" aria-hidden="true" />
          EN 1090 / SCC
        </div>
        <h3 className="text-2xl font-semibold tracking-normal text-slate-950">{content.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{content.description}</p>
      </div>
      <FieldGroup className="grid gap-4 sm:grid-cols-2">
        {fields.map(([key, Icon]) => {
          const fieldId = `inquiry-${key}`;

          return (
          <Field key={key} className={key === "name" ? "sm:col-span-2" : undefined}>
            <FieldLabel
              htmlFor={fieldId}
              className="text-xs font-bold uppercase tracking-[0.1em] text-slate-600"
            >
              {content.fields[key]}
            </FieldLabel>
            <div className="relative">
              <Icon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              {key === "projectType" ? (
                <Select name={key}>
                  <SelectTrigger
                    id={fieldId}
                    className="h-12 w-full border-slate-200 bg-slate-50/80 pl-10 text-base shadow-inner shadow-slate-200/60 transition-colors hover:border-slate-300 focus-visible:border-sky-700 focus-visible:ring-sky-700/20 md:text-sm"
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
                  className="h-12 border-slate-200 bg-slate-50/80 pl-10 shadow-inner shadow-slate-200/60 transition-colors placeholder:text-slate-500 hover:border-slate-300 focus-visible:border-sky-700 focus-visible:ring-sky-700/20"
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
        className="mt-1 h-12 w-full cursor-pointer bg-sky-700 text-white shadow-lg shadow-sky-950/20 hover:bg-sky-600 hover:shadow-sky-700/25 focus-visible:ring-sky-700/25"
      >
        {content.submit}
      </Button>
    </Form>
  );
}
