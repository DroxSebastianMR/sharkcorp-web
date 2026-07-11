import type { HistoryStat } from "@/features/history/types/history.types";

type HistoryStatsGridProps = {
  stats: HistoryStat[];
};

export const HistoryStatsGrid = ({ stats }: HistoryStatsGridProps) => {
  return (
    <section className="mt-7 grid gap-4 xl:grid-cols-3">
      {stats.map(({ label, value, detail, icon: Icon, iconClass, detailClass }) => (
        <article
          className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
          key={label}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">{label}</p>
              <strong className="mt-1 block font-heading text-3xl font-extrabold text-slate-950">
                {value}
              </strong>
              <p className={`mt-2 text-xs font-extrabold ${detailClass}`}>
                {detail}
              </p>
            </div>
            <span
              className={`grid h-12 w-12 place-items-center rounded-2xl ${iconClass}`}
            >
              <Icon className="h-5 w-5" />
            </span>
          </div>
        </article>
      ))}
    </section>
  );
};
