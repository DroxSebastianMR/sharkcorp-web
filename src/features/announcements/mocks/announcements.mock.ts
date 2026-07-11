import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
} from "lucide-react";

import type {
  AnnouncementAccentColor,
  AnnouncementCard,
  AnnouncementMetric,
  AnnouncementPaginationItem,
  AnnouncementTab,
} from "@/features/announcements/types/announcements.types";

export const announcementMetrics: AnnouncementMetric[] = [
  {
    label: "Anuncios activos",
    value: "12",
    icon: CheckCircle2,
    iconClassName: "bg-blue-50 text-[#0757ff]",
    valueClassName: "text-[#0757ff]",
  },
  {
    label: "Programados",
    value: "4",
    icon: Clock3,
    iconClassName: "bg-indigo-50 text-[#2e4a93]",
    valueClassName: "text-[#2e4a93]",
  },
];

export const announcementTabs: AnnouncementTab[] = [
  { label: "Todos", active: true },
  { label: "Activos", active: false },
  { label: "Programados", active: false },
  { label: "Archivados", active: false },
];

export const announcementCards: AnnouncementCard[] = [
  {
    status: "Scheduled",
    statusClass: "bg-amber-100 text-amber-700",
    title: "Evento anual de integracion: SharkSummit",
    target: "Todos los empleados",
    detail: "Preparamos el evento mas grande del ano en Cancun...",
    footer: "Publicacion: Nov 01, 2023",
    muted: false,
  },
  {
    status: "Archived",
    statusClass: "bg-slate-200 text-slate-500",
    title: "Protocolos de seguridad COVID-Q3",
    target: "Operaciones",
    detail: "Actualizacion de los protocolos sanitarios para...",
    footer: "Finalizado: Sep 15, 2023",
    muted: true,
  },
  {
    status: "Active",
    statusClass: "bg-emerald-100 text-emerald-700",
    title: "Nuevos beneficios de salud SharkCare+",
    target: "Recursos Humanos / Todo",
    detail: "",
    footer: "Publicado hace 2h",
    muted: false,
    pinned: true,
  },
];

export const announcementPaginationItems: AnnouncementPaginationItem[] = [
  { key: "prev", icon: ChevronLeft },
  { key: "1", label: "1", active: true },
  { key: "2", label: "2" },
  { key: "3", label: "3" },
  { key: "next", icon: ChevronRight },
];

export const announcementAccentColors: AnnouncementAccentColor[] = [
  { label: "Azul", className: "bg-[#0757ff]", value: "#0757ff" },
  { label: "Indigo", className: "bg-[#2e4a93]", value: "#2e4a93" },
  { label: "Verde", className: "bg-emerald-500", value: "#10b981" },
  { label: "Ambar", className: "bg-amber-500", value: "#f59e0b" },
  { label: "Rojo", className: "bg-red-500", value: "#ef4444" },
];
