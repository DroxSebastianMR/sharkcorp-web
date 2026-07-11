import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import { clientIndustryOptions } from "@/features/clients/mocks/clients.mock";

export const useClientCreate = () => {
  const navigate = useNavigate();

  return {
    industryOptions: clientIndustryOptions,
    onBack: () => navigate(PATHS.CLIENTS.HOME),
  };
};
