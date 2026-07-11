import type { ProjectStat } from "@/features/projects/types/projects.types";

type ProjectsStatsGridProps = {
  stats: ProjectStat[];
};

export const ProjectsStatsGrid = ({ stats }: ProjectsStatsGridProps) => {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <article
          className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
          key={label}
        >
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#0757ff]">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium text-slate-500">{label}</p>
              <strong className="font-heading text-2xl font-extrabold text-slate-950">
                {value}
              </strong>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
