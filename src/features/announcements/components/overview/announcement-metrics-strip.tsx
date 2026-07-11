import { TrendingUp } from "lucide-react";

import type { AnnouncementMetric } from "@/features/announcements/types/announcements.types";

type AnnouncementMetricsStripProps = {
  metrics: AnnouncementMetric[];
};

export const AnnouncementMetricsStrip = ({
  metrics,
}: AnnouncementMetricsStripProps) => {
  return (
    <section className="mt-5 grid gap-4 xl:grid-cols-[140px_140px_minmax(0,1fr)]">
      {metrics.map(({ label, value, icon: Icon, iconClassName, valueClassName }) => (
        <article
          className="flex min-h-[132px] flex-col justify-between rounded-2xl bg-white p-4 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
          key={label}
        >
          <span className={`grid h-9 w-9 place-items-center rounded-xl ${iconClassName}`}>
            <Icon className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className={`font-heading text-3xl font-extrabold ${valueClassName}`}>
              {value}
            </p>
            <p className="mt-0.5 text-sm font-bold leading-tight text-slate-700">
              {label}
            </p>
          </div>
        </article>
      ))}

      <article className="relative min-h-[132px] overflow-hidden rounded-2xl bg-[#084ad6] p-5 text-white shadow-[0_18px_36px_rgba(7,87,255,0.22)]">
        <div className="absolute -right-8 -top-16 h-36 w-36 rounded-full bg-white/10" />
        <div className="absolute bottom-0 right-20 h-24 w-24 rounded-full bg-[#1d6cff]/35 blur-2xl" />
        <div className="relative flex h-full items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-blue-100">
              Alcance organizacional
            </p>
            <h3 className="mt-2 max-w-md font-heading text-2xl font-extrabold leading-tight">
              Impacto de comunicacion: +15%
            </h3>
            <p className="mt-2 max-w-lg text-sm font-semibold leading-relaxed text-blue-50">
              La tasa de lectura ha incrementado tras la actualizacion de TI.
            </p>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/16">
            <TrendingUp className="h-6 w-6" />
          </span>
        </div>
      </article>
    </section>
  );
};
