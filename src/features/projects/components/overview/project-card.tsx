import { Building2, CalendarDays, MoreVertical } from "lucide-react";

import type { Project } from "@/features/projects/types/projects.types";

type ProjectCardProps = {
  onSelect: (project: Project) => void;
  project: Project;
};

export const ProjectCard = ({ onSelect, project }: ProjectCardProps) => {
  return (
    <button
      className="group flex min-h-[310px] cursor-pointer flex-col rounded-2xl bg-white p-5 text-left shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(14,43,92,0.12)]"
      onClick={() => onSelect(project)}
      type="button"
    >
      <div className="flex items-start justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${project.statusClass}`}>
          {project.status}
        </span>
        <MoreVertical className="h-4 w-4 text-slate-400 transition group-hover:text-[#0757ff]" />
      </div>
      <h3 className="mt-5 font-heading text-2xl font-extrabold leading-tight text-slate-950">
        {project.title}
      </h3>
      <p className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#2e4a93]">
        <Building2 className="h-3.5 w-3.5" />
        {project.client}
      </p>
      <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
        {project.description}
      </p>
      <div className="mt-auto pt-6">
        <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Progreso general</span>
          <span className="text-[#0757ff]">{project.progress}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100">
          <div
            className={[
              "h-full rounded-full",
              project.progress === 100 ? "bg-emerald-500" : "bg-[#0757ff]",
            ].join(" ")}
            style={{ width: `${project.progress}%` }}
          />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <CalendarDays className="h-4 w-4" />
            {project.date}
          </span>
          <div className="flex -space-x-2">
            {project.team.map((member) => (
              <span
                className="grid h-8 w-8 place-items-center rounded-full bg-[#2e4a93] text-[10px] font-extrabold text-white ring-2 ring-white"
                key={member}
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
};
