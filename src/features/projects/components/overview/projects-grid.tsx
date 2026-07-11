import { ProjectCard } from "@/features/projects/components/overview/project-card";
import type { Project } from "@/features/projects/types/projects.types";

type ProjectsGridProps = {
  onSelectProject: (project: Project) => void;
  projects: Project[];
};

export const ProjectsGrid = ({
  onSelectProject,
  projects,
}: ProjectsGridProps) => {
  return (
    <section className="mt-7 grid gap-5 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          onSelect={onSelectProject}
          project={project}
        />
      ))}
    </section>
  );
};
