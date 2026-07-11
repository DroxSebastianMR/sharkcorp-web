import {
  Building2,
  Cloud,
  Database,
  DatabaseBackup,
  Fingerprint,
  MessageSquare,
  Monitor,
  RotateCcw,
  Smartphone,
} from "lucide-react";

import type {
  BackupMetric,
  IntegrationItem,
  IntegrationLog,
  SettingsField,
  SettingsPageHeader,
  SettingsSession,
  ToggleItem,
} from "@/features/settings/types/settings.types";

export const settingsHeaders = {
  security: {
    title: "Seguridad y acceso",
    description:
      "Administra parametros de seguridad global, politicas de autenticacion y sesiones activas de la organizacion.",
  },
  company: {
    title: "Configuracion de empresa",
    description:
      "Gestiona identidad visual, informacion legal y datos oficiales de contacto.",
  },
  notifications: {
    title: "Configuracion de alertas",
    description:
      "Administra como y cuando recibes actualizaciones criticas de SharkCorp Enterprise.",
  },
  integrations: {
    title: "Configuracion de integraciones",
    description:
      "Gestiona conexiones con servicios externos para optimizar flujos de trabajo y productividad.",
  },
  backups: {
    title: "Respaldos y retencion",
    description:
      "Gestiona resiliencia de datos, redundancia, archivo legal y recuperacion ante desastres.",
  },
} satisfies Record<string, SettingsPageHeader>;

export const activeSessions: SettingsSession[] = [
  {
    device: "MacBook Pro 16",
    detail: "Chrome / macOS Sonoma",
    location: "Madrid, Espana",
    activity: "Ahora (Sesion actual)",
    icon: Monitor,
  },
  {
    device: "iPhone 15 Pro",
    detail: "App Mobile / iOS 17",
    location: "Madrid, Espana",
    activity: "Hace 2 horas",
    icon: Smartphone,
  },
  {
    device: "Dell XPS 13",
    detail: "Edge / Windows 11",
    location: "Barcelona, Espana",
    activity: "Ayer, 18:45",
    icon: Monitor,
  },
];

export const hardeningItems = [
  "Bloqueo automatico tras intentos fallidos",
  "Caducidad de sesiones inactivas",
  "Registro de cambios en permisos",
  "Retencion de backups criticos",
];

export const companyFields: SettingsField[] = [
  {
    label: "Nombre de la empresa",
    value: "SharkCorp Enterprise",
    icon: Building2,
  },
  {
    label: "NIT / ID fiscal",
    value: "900.456.789-1",
    icon: Fingerprint,
  },
];

export const companyColors = ["#003EC7", "#061B63"];

export const emailAlerts: ToggleItem[] = [
  {
    title: "Resumen de operaciones",
    detail: "Reporte diario de actividades estrategicas.",
    enabled: true,
  },
  {
    title: "Alertas de seguridad",
    detail: "Accesos inusuales o cambios en roles criticos.",
    enabled: true,
  },
  {
    title: "Nuevas integraciones",
    detail: "Notifica cuando se vincula un nuevo servicio.",
    enabled: false,
  },
];

export const pushCards: ToggleItem[] = [
  {
    title: "Insights en tiempo real",
    detail: "Alertas inmediatas cuando se detectan anomalias.",
    enabled: true,
  },
  {
    title: "Chat del equipo",
    detail: "Mensajes directos y menciones en canales estrategicos.",
    enabled: true,
  },
  {
    title: "Actualizacion de tareas",
    detail: "Notificar al completar un hito operativo.",
    enabled: false,
  },
];

export const integrations: IntegrationItem[] = [
  {
    name: "Slack Enterprise Grid",
    detail: "Sincroniza alertas y actualizaciones con canales internos.",
    status: "Conectado",
    statusClass: "bg-emerald-100 text-emerald-700",
    icon: MessageSquare,
  },
  {
    name: "Google Workspace",
    detail: "Acceso unificado a Drive, Calendar y SSO corporativo.",
    status: "Pendiente",
    statusClass: "bg-amber-100 text-amber-700",
    icon: Cloud,
  },
  {
    name: "AWS Cloud Storage",
    detail: "Almacenamiento de activos y backups automaticos.",
    status: "Activo",
    statusClass: "bg-emerald-100 text-emerald-700",
    icon: Database,
  },
  {
    name: "Microsoft Azure",
    detail: "Active Directory y servicios de IA empresarial.",
    status: "Desactivado",
    statusClass: "bg-slate-200 text-slate-600",
    icon: Cloud,
  },
];

export const integrationLogs: IntegrationLog[] = [
  {
    service: "Slack Enterprise",
    action: "Sincronizacion de canal",
    status: "Exitoso",
    date: "Hace 5 minutos",
    user: "System Automator",
  },
  {
    service: "AWS Storage",
    action: "Rotacion de Access Key",
    status: "Exitoso",
    date: "Hoy, 09:12 AM",
    user: "GM Avatar",
  },
  {
    service: "Google Workspace",
    action: "Intento de conexion OAuth",
    status: "Fallido",
    date: "Ayer, 18:45 PM",
    user: "Admin Console",
  },
];

export const backupMetrics: BackupMetric[] = [
  {
    label: "Salud del sistema",
    value: "99.9%",
    detail: "Ultimo backup: hace 14 min",
    icon: Cloud,
  },
  {
    label: "Uso de nube",
    value: "1.4 TB",
    detail: "De 5 TB disponibles",
    icon: DatabaseBackup,
  },
  {
    label: "Puntos de restauracion",
    value: "48",
    detail: "Disponibles para recuperar",
    icon: RotateCcw,
  },
];

export const backupFrequencies = ["Cada 1h", "Cada 6h", "Diario"];

export const retentionOptions = [
  "2 anos (cumplimiento estandar)",
  "180 dias (recomendado)",
];

export const backupChecks = [
  "Cifrado de extremo a extremo en reposo",
  "Validacion de integridad automatica",
];
