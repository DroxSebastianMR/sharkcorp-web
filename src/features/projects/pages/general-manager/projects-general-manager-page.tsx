import { ProjectsPageShell } from "@/features/projects/components/layout/projects-page-shell";
import { ProjectDetailDialog } from "@/features/projects/components/overview/project-detail-dialog";
import { ProjectsGrid } from "@/features/projects/components/overview/projects-grid";
import { ProjectsHeader } from "@/features/projects/components/overview/projects-header";
import { ProjectsStatsGrid } from "@/features/projects/components/overview/projects-stats-grid";
import { useProjectsOverview } from "@/features/projects/hooks/use-projects-overview";

export const ProjectsGeneralManagerPage = () => {
  const {
    onCloseProjectDetail,
    onCreateProject,
    onSelectProject,
    projects,
    selectedProject,
    stats,
  } = useProjectsOverview();

  return (
    <ProjectsPageShell>
      <ProjectsHeader onCreateProject={onCreateProject} />
      <ProjectsStatsGrid stats={stats} />
      <ProjectsGrid onSelectProject={onSelectProject} projects={projects} />
      <ProjectDetailDialog
        onClose={onCloseProjectDetail}
        project={selectedProject}
      />
    </ProjectsPageShell>
  );
};
