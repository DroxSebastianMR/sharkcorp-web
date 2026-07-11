import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import { projects, projectStats } from "@/features/projects/mocks/projects.mock";
import type { Project } from "@/features/projects/types/projects.types";

export const useProjectsOverview = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return {
    onCloseProjectDetail: () => setSelectedProject(null),
    onCreateProject: () => navigate(PATHS.PROJECTS.CREATE),
    onSelectProject: setSelectedProject,
    projects,
    selectedProject,
    stats: projectStats,
  };
};
