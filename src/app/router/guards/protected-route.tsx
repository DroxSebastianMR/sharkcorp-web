import { Navigate, Outlet } from 'react-router-dom';

import { PATHS } from '@/app/router/constants/paths';

const isAuthenticated = false;

export const ProtectedRoute = () => {
  if (!isAuthenticated) {
    return (
      <Navigate
        to={PATHS.AUTH.LOGIN}
        replace
      />
    );
  }

  return <Outlet />;
};