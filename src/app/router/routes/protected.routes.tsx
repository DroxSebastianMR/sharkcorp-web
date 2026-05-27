import type { RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@/app/router/guards/protected-route';

import { DashboardLayout } from '@/layouts/dashboard/dashboard-layout';

import { DashboardPage } from '@/features/dashboard/pages';

import { PATHS } from '@/app/router/constants/paths';

export const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: PATHS.DASHBOARD.HOME,
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
];