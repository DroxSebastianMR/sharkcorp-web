import type { RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@/app/router/guards/protected-route';

import { DashboardLayout } from '@/layouts/dashboard/dashboard-layout';

import { DashboardPage } from '@/features/dashboard/pages';
import { AttendanceGeneralManagerPage } from '@/features/attendance/pages/general-manager';
import { AttendanceRecordsReportsPage } from '@/features/attendance/records-reports/pages/general-manager';
import { AttendanceAbsencesPage } from '@/features/attendance/absences/pages/general-manager';
import { AttendanceJustificationsPage } from '@/features/attendance/justifications/pages/general-manager';
import { AgendaGeneralManagerPage } from '@/features/agenda/pages/general-manager';
import { AgendaCreateEventPage } from '@/features/agenda/create/pages/general-manager';
import { AnnouncementsGeneralManagerPage } from '@/features/announcements/pages/general-manager';
import { AnnouncementCreatePage } from '@/features/announcements/create/pages/general-manager';
import { TasksGeneralManagerPage } from '@/features/tasks/pages/general-manager';
import { TaskCreatePage } from '@/features/tasks/create/pages/general-manager';
import { ClientsGeneralManagerPage } from '@/features/clients/pages/general-manager';
import { ClientCreatePage } from '@/features/clients/create/pages/general-manager';
import { ProjectsGeneralManagerPage } from '@/features/projects/pages/general-manager';
import { ProjectCreatePage } from '@/features/projects/create/pages/general-manager';
import { DocumentsGeneralManagerPage } from '@/features/documents/pages/general-manager';
import { DocumentCreatePage } from '@/features/documents/create/pages/general-manager';
import { DirectoryGeneralManagerPage } from '@/features/directory/pages/general-manager';
import { HistoryGeneralManagerPage } from '@/features/history/pages/general-manager';
import {
  SettingsBackupsPage,
  SettingsCompanyPage,
  SettingsGeneralManagerPage,
  SettingsIntegrationsPage,
  SettingsNotificationsPage,
} from '@/features/settings/pages/general-manager';

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
            path: PATHS.ATTENDANCE.RECORDS_REPORTS,
            element: <AttendanceRecordsReportsPage />,
          },
          {
            path: PATHS.ATTENDANCE.ABSENCES,
            element: <AttendanceAbsencesPage />,
          },
          {
            path: PATHS.ATTENDANCE.JUSTIFICATIONS,
            element: <AttendanceJustificationsPage />,
          },
          {
            path: PATHS.AGENDA.HOME,
            element: <AgendaGeneralManagerPage />,
          },
          {
            path: PATHS.AGENDA.CREATE,
            element: <AgendaCreateEventPage />,
          },
          {
            path: PATHS.ANNOUNCEMENTS.HOME,
            element: <AnnouncementsGeneralManagerPage />,
          },
          {
            path: PATHS.ANNOUNCEMENTS.CREATE,
            element: <AnnouncementCreatePage />,
          },
          {
            path: PATHS.TASKS.HOME,
            element: <TasksGeneralManagerPage />,
          },
          {
            path: PATHS.TASKS.CREATE,
            element: <TaskCreatePage />,
          },
          {
            path: PATHS.CLIENTS.HOME,
            element: <ClientsGeneralManagerPage />,
          },
          {
            path: PATHS.CLIENTS.CREATE,
            element: <ClientCreatePage />,
          },
          {
            path: PATHS.PROJECTS.HOME,
            element: <ProjectsGeneralManagerPage />,
          },
          {
            path: PATHS.PROJECTS.CREATE,
            element: <ProjectCreatePage />,
          },
          {
            path: PATHS.DOCUMENTS.HOME,
            element: <DocumentsGeneralManagerPage />,
          },
          {
            path: PATHS.DOCUMENTS.CREATE,
            element: <DocumentCreatePage />,
          },
          {
            path: PATHS.DIRECTORY.HOME,
            element: <DirectoryGeneralManagerPage />,
          },
          {
            path: PATHS.HISTORY.HOME,
            element: <HistoryGeneralManagerPage />,
          },
          {
            path: PATHS.SETTINGS.HOME,
            element: <SettingsGeneralManagerPage />,
          },
          {
            path: PATHS.SETTINGS.SECURITY_ACCESS,
            element: <SettingsGeneralManagerPage />,
          },
          {
            path: PATHS.SETTINGS.COMPANY,
            element: <SettingsCompanyPage />,
          },
          {
            path: PATHS.SETTINGS.NOTIFICATIONS,
            element: <SettingsNotificationsPage />,
          },
          {
            path: PATHS.SETTINGS.INTEGRATIONS,
            element: <SettingsIntegrationsPage />,
          },
          {
            path: PATHS.SETTINGS.BACKUPS,
            element: <SettingsBackupsPage />,
          },
        ],
      },
    ],
  },
];
