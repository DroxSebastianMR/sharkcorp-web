import { ProjectCreateForm } from "@/features/projects/components/create/project-create-form";
import { ProjectCreateHeader } from "@/features/projects/components/create/project-create-header";
import { ProjectsPageShell } from "@/features/projects/components/layout/projects-page-shell";
import { useProjectCreate } from "@/features/projects/hooks/use-project-create";

export const ProjectCreatePage = () => {
  const { clientOptions, onBack, priorities, team } = useProjectCreate();

  return (
    <ProjectsPageShell>
      <ProjectCreateHeader onBack={onBack} />
      <ProjectCreateForm
        clientOptions={clientOptions}
        onCancel={onBack}
        priorities={priorities}
        team={team}
      />
    </ProjectsPageShell>
  );
};
