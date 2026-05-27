import type { RouteObject } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

import { PATHS } from '@/app/router/constants/paths';

import { AuthLayout } from '@/layouts/auth/auth-layout';

import {
  LoginPage,
  RecoverPage,
} from '@/features/auth/pages';

export const publicRoutes: RouteObject[] = [
  {
    path: PATHS.ROOT,
    element: (
      <Navigate
        to={PATHS.AUTH.LOGIN}
        replace
      />
    ),
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: PATHS.AUTH.LOGIN,
        element: <LoginPage />,
      },

      {
        path: PATHS.AUTH.RECOVER,
        element: <RecoverPage />,
      },
    ],
  },
];