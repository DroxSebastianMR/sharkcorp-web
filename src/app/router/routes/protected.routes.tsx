import type { RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@/app/router/guards/protected-route';

import { DashboardLayout } from '@/layouts/dashboard/dashboard-layout';

import { DashboardPage } from '@/features/dashboard/pages';
import { AttendanceGeneralManagerPage } from '@/features/attendance/pages/general-manager';
import { AgendaGeneralManagerPage } from '@/features/agenda/pages/general-manager';

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
          {
            path: PATHS.ATTENDANCE.HOME,
            element: <AttendanceGeneralManagerPage />,
          },
          {
            path: PATHS.AGENDA.HOME,
            element: <AgendaGeneralManagerPage />,
          },
        ],
      },
    ],
  },
];
