import type { AttendanceSummaryCard } from "@/features/attendance/types/attendance.types";

interface AttendanceSummaryCardsProps {
  cards: AttendanceSummaryCard[];
}

export const AttendanceSummaryCards = ({ cards }: AttendanceSummaryCardsProps) => {
  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-3">
      {cards.map(({ label, value, suffix, detail, tone, icon: Icon, iconClass }) => (
        <article
          className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
          key={label}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-600">{label}</p>
              <p className="mt-2 font-heading text-3xl font-extrabold text-slate-950">
                {value}
                {suffix ? (
                  <span className="ml-1 text-sm font-bold text-slate-500">
                    {suffix}
                  </span>
                ) : null}
              </p>
              <p className={`mt-3 text-xs font-extrabold ${tone}`}>{detail}</p>
            </div>
            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${iconClass}`}>
              <Icon className="h-6 w-6" strokeWidth={2.5} />
            </span>
          </div>
          <div className="pointer-events-none absolute -bottom-8 right-5 h-24 w-24 rounded-full border-[10px] border-slate-100" />
        </article>
      ))}
    </section>
  );
};
