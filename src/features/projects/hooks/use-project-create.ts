import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import {
  projectClientOptions,
  projectPriorities,
  projectTeam,
} from "@/features/projects/mocks/projects.mock";

export const useProjectCreate = () => {
  const navigate = useNavigate();

  return {
    clientOptions: projectClientOptions,
    onBack: () => navigate(PATHS.PROJECTS.HOME),
    priorities: projectPriorities,
    team: projectTeam,
  };
};
