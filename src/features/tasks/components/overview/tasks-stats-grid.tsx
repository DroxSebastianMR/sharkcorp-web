import type { TaskStat } from "@/features/tasks/types/tasks.types";

type TasksStatsGridProps = {
  stats: TaskStat[];
};

export const TasksStatsGrid = ({ stats }: TasksStatsGridProps) => {
  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-3">
      {stats.map(({ label, value, icon: Icon, color }) => (
        <article
          className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
          key={label}
        >
          <div className="flex items-center gap-5">
            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${color}`}>
              <Icon className="h-6 w-6" strokeWidth={2.3} />
            </span>
            <div>
              <p className="text-sm font-medium text-slate-500">{label}</p>
              <strong className="mt-1 block font-heading text-4xl font-extrabold leading-none text-slate-950">
                {value}
              </strong>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
