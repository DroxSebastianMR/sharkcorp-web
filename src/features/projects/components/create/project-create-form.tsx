import { ProjectFormActions } from "@/features/projects/components/create/project-form-actions";
import { ProjectMainFields } from "@/features/projects/components/create/project-main-fields";
import { ProjectPrioritySelector } from "@/features/projects/components/create/project-priority-selector";
import { ProjectTeamSelector } from "@/features/projects/components/create/project-team-selector";
import type {
  ProjectClientOption,
  ProjectPriority,
  ProjectTeamMember,
} from "@/features/projects/types/projects.types";

type ProjectCreateFormProps = {
  clientOptions: ProjectClientOption[];
  onCancel: () => void;
  priorities: ProjectPriority[];
  team: ProjectTeamMember[];
};

export const ProjectCreateForm = ({
  clientOptions,
  onCancel,
  priorities,
  team,
}: ProjectCreateFormProps) => {
  return (
    <section className="mt-6 rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="grid gap-5 md:grid-cols-2">
        <ProjectMainFields clientOptions={clientOptions} />
        <ProjectPrioritySelector priorities={priorities} />
        <ProjectTeamSelector team={team} />
      </div>

      <ProjectFormActions onCancel={onCancel} />
    </section>
  );
};
