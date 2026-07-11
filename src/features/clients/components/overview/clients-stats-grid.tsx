import type { ClientStat } from "@/features/clients/types/clients.types";

type ClientsStatsGridProps = {
  stats: ClientStat[];
};

export const ClientsStatsGrid = ({ stats }: ClientsStatsGridProps) => {
  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-3">
      {stats.map(({ label, value, detail, icon: Icon, color, cardClass }) => (
        <article
          className={`relative overflow-hidden rounded-2xl p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70 ${cardClass}`}
          key={label}
        >
          <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-blue-50/60" />
          <div className="relative flex items-start justify-between">
            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${color}`}>
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-xs font-extrabold opacity-80">{detail}</span>
          </div>
          <p className="relative mt-6 text-[11px] font-extrabold uppercase tracking-[0.12em] opacity-70">
            {label}
          </p>
          <strong className="relative mt-1 block font-heading text-4xl font-extrabold leading-none">
            {value}
          </strong>
        </article>
      ))}
    </section>
  );
};
