import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/app/providers/auth";
import { PATHS } from "@/app/router/constants/paths";

const ALLOW_DASHBOARD_PREVIEW = true;

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (ALLOW_DASHBOARD_PREVIEW) {
    return <Outlet />;
  }

  if (!isAuthenticated) {
    return <Navigate to={PATHS.AUTH.LOGIN} replace />;
  }

  return <Outlet />;
};
