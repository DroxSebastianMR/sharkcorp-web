import type { RouteObject } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

import { PATHS } from '@/app/router/constants/paths';

export const redirectRoutes: RouteObject[] = [
  {
    path: PATHS.ROOT,
    element: (
      <Navigate
        to={PATHS.AUTH.LOGIN}
        replace
      />
    ),
  },
];