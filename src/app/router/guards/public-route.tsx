import { Navigate, Outlet } from 'react-router-dom';

import { PATHS } from '@/app/router/constants/paths';

const isAuthenticated = false;

export const PublicRoute = () => {
  if (isAuthenticated) {
    return (
      <Navigate
        to={PATHS.DASHBOARD.HOME}
        replace
      />
    );
  }

  return <Outlet />;
};