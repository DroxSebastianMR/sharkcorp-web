import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import {
  taskDepartmentOptions,
  taskPriorities,
} from "@/features/tasks/mocks/tasks.mock";

export const useTaskCreate = () => {
  const navigate = useNavigate();

  return {
    departmentOptions: taskDepartmentOptions,
    onBack: () => navigate(PATHS.TASKS.HOME),
    priorities: taskPriorities,
  };
};
