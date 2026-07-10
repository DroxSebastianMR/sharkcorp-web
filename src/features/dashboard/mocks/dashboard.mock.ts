import {
  BarChart3,
  CalendarPlus,
  CalendarRange,
  Eye,
  FileText,
  Megaphone,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

import type {
  Announcement,
  QuickAction,
} from "@/features/dashboard/types/dashboard.types";

export const statCards = [
  {
    label: "Colaboradores",
    value: "248",
    detail: "+12 este mes",
    icon: Users,
    color: "#0757ff",
    sparkline:
      "M8 82 C24 78 21 45 42 42 C59 39 55 54 75 55 C93 56 97 62 114 62 C132 62 132 42 153 40 C169 38 172 23 184 18",
  },
  {
    label: "Asistencia Promedio Hoy",
    value: "92%",
    detail: "+4% vs ayer",
    icon: UserCheck,
    color: "#10a15a",
    sparkline:
      "M8 80 C29 76 22 34 49 36 C70 38 66 51 88 52 C108 53 109 70 132 66 C151 62 146 43 170 40 C181 38 178 24 184 22",
  },
  {
    label: "Anuncios Activos",
    value: "5",
    detail: "5 nuevos hoy",
    icon: Megaphone,
    color: "#7c1dff",
    sparkline:
      "M8 80 C28 77 20 36 49 37 C71 38 65 53 90 54 C112 55 112 69 136 66 C156 63 148 45 171 42 C182 40 177 25 184 22",
  },
  {
    label: "Eventos Próximos",
    value: "8",
    detail: "Esta semana",
    icon: CalendarRange,
    color: "#ff5a1f",
    sparkline:
      "M8 82 C28 79 18 45 44 43 C68 41 61 60 91 60 C115 60 113 74 139 70 C160 66 148 49 172 48 C184 47 178 27 184 23",
  },
];

export const attendance = [
  { day: "Lunes", value: 40 },
  { day: "Martes", value: 88 },
  { day: "Miércoles", value: 60 },
  { day: "Jueves", value: 36 },
  { day: "Viernes", value: 37 },
  { day: "Sábado", value: 56 },
  { day: "Domingo", value: 56 },
];

export const announcements: Announcement[] = [
  {
    id: "announcement-1",
    title: "Actualización de políticas",
    description: "Se han actualizado las políticas internas de la empresa.",
    createdAt: "Hace 2 horas",
    color: "blue",
  },

  {
    id: "announcement-2",
    title: "Nuevo comunicado interno",
    description: "Nuevo mensaje disponible para colaboradores.",
    createdAt: "Hace 4 horas",
    color: "emerald",
  },

  {
    id: "announcement-3",
    title: "Mantenimiento programado",
    description: "Se realizará mantenimiento del sistema.",
    createdAt: "Ayer",
    color: "violet",
  },
];

export const quickActions: QuickAction[] = [
  {
    id: "create-announcement",
    label: "Comunicar anuncio",
    icon: Megaphone,
    color: "bg-blue-50 text-[#0757ff]",
  },

  {
    id: "create-event",
    label: "Crear evento",
    icon: CalendarPlus,
    color: "bg-emerald-50 text-emerald-600",
  },

  {
    id: "attendance",
    label: "Ver asistencias",
    icon: Eye,
    color: "bg-violet-50 text-violet-600",
  },

  {
    id: "reports",
    label: "Reportes",
    icon: BarChart3,
    color: "bg-orange-50 text-orange-600",
  },

  {
    id: "directory",
    label: "Directorio",
    icon: Users,
    color: "bg-indigo-50 text-indigo-600",
  },

  {
    id: "documents",
    label: "Documentos",
    icon: FileText,
    color: "bg-amber-50 text-amber-600",
  },
];

export const events = [
  {
    day: "24",
    month: "MAY",
    title: "Reunión de liderazgo estratégico",
    time: "10:00 AM - 11:30 AM",
  },
  {
    day: "25",
    month: "MAY",
    title: "Taller de trabajo en equipo",
    time: "10:00 AM - 11:30 AM",
  },
];

export const attendanceSummary = {
  icon: TrendingUp,
  average: "90.8%",
  growth: "+3.2% vs semana anterior",
};
