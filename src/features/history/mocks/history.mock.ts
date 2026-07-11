import { AlertTriangle, BarChart3, Users } from "lucide-react";

import type {
  AuditLogRow,
  HistoryFilterOption,
  HistoryPaginationItem,
  HistoryStat,
} from "@/features/history/types/history.types";

export const historyStats: HistoryStat[] = [
  {
    label: "Total eventos hoy",
    value: "1,284",
    detail: "+12% vs ayer",
    icon: BarChart3,
    iconClass: "bg-blue-50 text-[#0757ff]",
    detailClass: "text-emerald-600",
  },
  {
    label: "Alertas criticas",
    value: "12",
    detail: "Requiere atencion inmediata",
    icon: AlertTriangle,
    iconClass: "bg-red-50 text-red-600",
    detailClass: "text-slate-500",
  },
  {
    label: "Usuarios activos",
    value: "84",
    detail: "Sesiones concurrentes",
    icon: Users,
    iconClass: "bg-blue-50 text-[#0757ff]",
    detailClass: "text-slate-500",
  },
];

export const auditRows: AuditLogRow[] = [
  {
    date: "Oct 24, 2024 - 14:22:15",
    user: "Ana Martinez",
    initials: "AM",
    action: "Creacion de cuenta",
    module: "RRHH",
    ip: "192.168.1.45",
    status: "Exito",
    statusClass: "text-emerald-600",
    dotClass: "bg-emerald-500",
  },
  {
    date: "Oct 24, 2024 - 13:05:42",
    user: "Carlos Ruiz",
    initials: "CR",
    action: "Acceso fallido",
    module: "Seguridad",
    ip: "10.0.4.128",
    status: "Fallido",
    statusClass: "text-red-600",
    dotClass: "bg-red-500",
  },
  {
    date: "Oct 24, 2024 - 12:45:00",
    user: "Sistema Automatico",
    initials: "SA",
    action: "Backup de archivos",
    module: "Documentos",
    ip: "127.0.0.1",
    status: "Pendiente",
    statusClass: "text-[#0757ff]",
    dotClass: "bg-[#0757ff]",
  },
  {
    date: "Oct 24, 2024 - 11:12:10",
    user: "Laura Chen",
    initials: "LC",
    action: "Cambio de rol",
    module: "RRHH",
    ip: "192.168.1.12",
    status: "Exito",
    statusClass: "text-emerald-600",
    dotClass: "bg-emerald-500",
  },
];

export const historyFilterOptions: HistoryFilterOption[] = [
  { label: "Categoria", value: "Todas" },
  { label: "Severidad", value: "Todos" },
];

export const historyPaginationItems: HistoryPaginationItem[] = [1, 2, 3, "...", 321];
