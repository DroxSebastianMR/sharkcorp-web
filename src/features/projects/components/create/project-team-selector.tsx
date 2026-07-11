import { UserPlus } from "lucide-react";

import type { ProjectTeamMember } from "@/features/projects/types/projects.types";

type ProjectTeamSelectorProps = {
  team: ProjectTeamMember[];
};

export const ProjectTeamSelector = ({ team }: ProjectTeamSelectorProps) => {
  return (
    <section className="md:col-span-2">
      <div className="flex items-center justify-between gap-4">
        <p className="font-heading text-sm font-bold text-slate-700">
          Asignar equipo
        </p>
        <button
          className="flex cursor-pointer items-center gap-2 font-button text-xs font-bold text-[#0757ff]"
          type="button"
        >
          <UserPlus className="h-4 w-4" />
          Invitar externo
        </button>
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {team.map((member) => (
          <button
            className={[
              "flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-left transition",
              member.selected
                ? "border-[#0757ff] bg-blue-50"
                : "border-transparent bg-slate-100 hover:border-[#0757ff]",
            ].join(" ")}
            key={member.name}
            type="button"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2e4a93] text-xs font-extrabold text-white">
              {member.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-bold text-slate-700">
                {member.name}
              </span>
              <span className="block truncate text-xs font-medium text-slate-500">
                {member.role}
              </span>
            </span>
            <span
              className={[
                "h-4 w-4 rounded border",
                member.selected
                  ? "border-[#0757ff] bg-[#0757ff]"
                  : "border-slate-300 bg-white",
              ].join(" ")}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
