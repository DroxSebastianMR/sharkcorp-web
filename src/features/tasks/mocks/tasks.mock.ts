import { ClipboardList, ListChecks, Share2 } from "lucide-react";

import type {
  StrategicTask,
  TaskDepartmentOption,
  TaskPriority,
  TaskStat,
  TaskWorkloadItem,
} from "@/features/tasks/types/tasks.types";

export const taskStats: TaskStat[] = [
  {
    label: "Tareas totales",
    value: "42",
    icon: ClipboardList,
    color: "bg-blue-50 text-[#0757ff]",
  },
  {
    label: "Pendientes de revision",
    value: "12",
    icon: ListChecks,
    color: "bg-indigo-50 text-[#2e4a93]",
  },
  {
    label: "Tareas asignadas",
    value: "28",
    icon: Share2,
    color: "bg-slate-100 text-slate-600",
  },
];

export const strategicTasks: StrategicTask[] = [
  {
    title: "Auditoria trimestral Q3",
    detail: "Revision de balances financieros",
    priority: "Alta",
    priorityClass: "bg-red-100 text-red-700",
    status: "En progreso",
    statusColor: "bg-blue-500",
    due: "24 Oct 2023",
    action: "Detalles",
  },
  {
    title: "Expansion Latam Phase 1",
    detail: "Analisis de mercado Colombia y Chile",
    priority: "Media",
    priorityClass: "bg-slate-200 text-slate-600",
    status: "Pendiente",
    statusColor: "bg-slate-500",
    due: "15 Nov 2023",
    action: "Detalles",
  },
  {
    title: "Renovacion de infraestructura TI",
    detail: "Migracion a nuevos servidores de seguridad",
    priority: "Alta",
    priorityClass: "bg-red-100 text-red-700",
    status: "Completada",
    statusColor: "bg-[#0757ff]",
    due: "10 Oct 2023",
    action: "Recibo",
  },
  {
    title: "Plan de bienestar RRHH",
    detail: "Implementacion de jornadas flexibles",
    priority: "Baja",
    priorityClass: "bg-blue-50 text-[#2e4a93]",
    status: "Pendiente",
    statusColor: "bg-slate-500",
    due: "01 Dic 2023",
    action: "Detalles",
  },
];

export const taskWorkload: TaskWorkloadItem[] = [
  { label: "TI (Cloud Core)", value: 85 },
  { label: "Finanzas", value: 42 },
];

export const taskPriorities: TaskPriority[] = [
  { label: "Baja", selected: false },
  { label: "Media", selected: true },
  { label: "Alta", selected: false },
  { label: "Critica", selected: false },
];

export const taskDepartmentOptions: TaskDepartmentOption[] = [
  { label: "TI (Cloud Core)", value: "ti" },
  { label: "Finanzas", value: "finanzas" },
  { label: "Recursos Humanos", value: "rrhh" },
  { label: "Operaciones", value: "operaciones" },
];
