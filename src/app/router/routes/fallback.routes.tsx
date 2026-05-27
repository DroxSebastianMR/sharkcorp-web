import type { RouteObject } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

import { PATHS } from '@/app/router/constants/paths';

export const fallbackRoutes: RouteObject[] = [
  {
    path: '*',
    element: (
      <Navigate
        to={PATHS.AUTH.LOGIN}
        replace
      />
    ),
  },
];