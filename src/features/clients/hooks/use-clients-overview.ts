import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import { clients, clientStats } from "@/features/clients/mocks/clients.mock";

export const useClientsOverview = () => {
  const navigate = useNavigate();

  return {
    clients,
    onCreateClient: () => navigate(PATHS.CLIENTS.CREATE),
    stats: clientStats,
  };
};
