import { PATHS } from "@/app/router/constants/paths";
import type { DashboardNavigationItem } from "@/features/dashboard/types/dashboard-navigation.types";
import {
  CalendarDays,
  ClipboardList,
  Clock3,
  Folder,
  FolderKanban,
  LayoutDashboard,
  Megaphone,
  PanelsTopLeft,
  Settings,
  SquareCheckBig,
  UserRoundCheck,
  Users,
} from "lucide-react";

export const dashboardNavigation: DashboardNavigationItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: PATHS.DASHBOARD.HOME,
    visible: true,
  },
  {
    label: "Asistencias",
    icon: ClipboardList,
    expandable: true,
    visible: true,
    children: [
      {
        label: "Resumen",
        icon: ClipboardList,
        path: PATHS.ATTENDANCE.OVERVIEW,
      },
      {
        label: "Registros y reportes",
        icon: ClipboardList,
        path: PATHS.ATTENDANCE.RECORDS_REPORTS,
      },
      {
        label: "Faltas y ausencias",
        icon: ClipboardList,
        path: PATHS.ATTENDANCE.ABSENCES,
      },
      {
        label: "Justificaciones",
        icon: ClipboardList,
        path: PATHS.ATTENDANCE.JUSTIFICATIONS,
      },
    ],
  },
  {
    label: "Agenda",
    icon: CalendarDays,
    path: PATHS.AGENDA.HOME,
    visible: true,
  },
  {
    label: "Tareas",
    icon: SquareCheckBig,
    path: PATHS.TASKS.HOME,
    visible: true,
  },
  {
    label: "Anuncios",
    icon: Megaphone,
    path: PATHS.ANNOUNCEMENTS.HOME,
    visible: true,
  },
  {
    label: "Clientes",
    icon: UserRoundCheck,
    path: PATHS.CLIENTS.HOME,
    visible: true,
  },
  {
    label: "Proyectos",
    icon: FolderKanban,
    path: PATHS.PROJECTS.HOME,
    visible: true,
  },
  {
    label: "Documentos",
    icon: Folder,
    path: PATHS.DOCUMENTS.HOME,
    visible: true,
  },
  {
    label: "Directorio",
    icon: Users,
    path: PATHS.DIRECTORY.HOME,
    visible: true,
  },
  {
    label: "Historial",
    icon: Clock3,
    path: PATHS.HISTORY.HOME,
    visible: true,
  },
  {
    label: "Dialogs",
    icon: PanelsTopLeft,
    path: PATHS.DIALOGS.HOME,
    visible: true,
  },
  {
    label: "Configuracion",
    icon: Settings,
    expandable: true,
    visible: true,
    children: [
      {
        label: "Seguridad y acceso",
        icon: Settings,
        path: PATHS.SETTINGS.SECURITY_ACCESS,
      },
      {
        label: "Perfil de empresa",
        icon: Settings,
        path: PATHS.SETTINGS.COMPANY,
      },
      {
        label: "Notificaciones",
        icon: Settings,
        path: PATHS.SETTINGS.NOTIFICATIONS,
      },
      {
        label: "Integraciones",
        icon: Settings,
        path: PATHS.SETTINGS.INTEGRATIONS,
      },
      {
        label: "Respaldos y retencion",
        icon: Settings,
        path: PATHS.SETTINGS.BACKUPS,
      },
    ],
  },
];
