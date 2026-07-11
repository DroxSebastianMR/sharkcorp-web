import type { BackupMetric } from "@/features/settings/types/settings.types";

type BackupMetricsGridProps = {
  metrics: BackupMetric[];
};

export const BackupMetricsGrid = ({ metrics }: BackupMetricsGridProps) => {
  return (
    <section className="mt-7 grid gap-4 md:grid-cols-3">
      {metrics.map(({ label, value, detail, icon: Icon }) => (
        <article
          className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
          key={label}
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#0757ff]">
            <Icon className="h-5 w-5" />
          </span>
          <p className="mt-4 text-sm font-bold text-[#2e4a93]">{label}</p>
          <p className="mt-2 font-heading text-3xl font-extrabold text-slate-950">
            {value}
          </p>
          <p className="mt-1 text-xs font-medium text-slate-500">{detail}</p>
        </article>
      ))}
    </section>
  );
};
