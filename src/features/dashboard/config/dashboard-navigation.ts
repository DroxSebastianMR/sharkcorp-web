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
    path: PATHS.ATTENDANCE.HOME,
    visible: true,
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
    visible: false,
  },
  {
    label: "Anuncios",
    icon: Megaphone,
    visible: false,
  },
  {
    label: "Clientes",
    icon: UserRoundCheck,
    visible: false,
  },
  {
    label: "Proyectos",
    icon: FolderKanban,
    visible: false,
  },
  {
    label: "Documentos",
    icon: Folder,
    visible: false,
  },
  {
    label: "Directorio",
    icon: Users,
    visible: false,
  },
  {
    label: "Historial",
    icon: Clock3,
    visible: false,
  },
  {
    label: "Configuración",
    icon: Settings,
    expandable: true,
    visible: true,
    children: [
      {
        label: "General",
        path: "/settings/general",
        icon: Settings,
      },
      {
        label: "Seguridad",
        path: "/settings/security",
        icon: Settings,
      },
    ],
  },
];
