import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import {
  strategicTasks,
  taskStats,
  taskWorkload,
} from "@/features/tasks/mocks/tasks.mock";

export const useTasksOverview = () => {
  const navigate = useNavigate();

  return {
    onCreateTask: () => navigate(PATHS.TASKS.CREATE),
    stats: taskStats,
    strategicTasks,
    workload: taskWorkload,
  };
};
