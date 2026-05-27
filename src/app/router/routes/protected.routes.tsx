import type { RouteObject } from 'react-router-dom';

import { PATHS } from '@/app/router/constants/paths';

import { ProtectedRoute } from '@/app/router/guards/protected-route';

import { DashboardLayout } from '@/layouts/dashboard/dashboard-layout';

import { DashboardPage } from '@/features/dashboard/pages/index';

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