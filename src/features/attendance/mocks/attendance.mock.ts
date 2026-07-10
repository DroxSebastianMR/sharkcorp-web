import {
  AlertTriangle,
  BriefcaseMedical,
  Clock3,
  FileSpreadsheet,
  FileText,
  Image,
  TimerReset,
  TrendingUp,
  UserCheck,
} from "lucide-react";

import type {
  AbsenceChartItem,
  AbsenceIncident,
  AbsenceSummaryCard,
  AttendanceDetailRow,
  AttendanceRow,
  AttendanceSummaryCard,
  DelayAlert,
  GeneratedReport,
  PendingJustification,
  RecentResolution,
  RecurrenceAlert,
  UpcomingLeave,
  WeeklyBar,
  WeeklyComparisonItem,
} from "@/features/attendance/types/attendance.types";

export const attendanceSummaryCards: AttendanceSummaryCard[] = [
  {
    label: "Empleados presentes",
    value: "142",
    suffix: "/ 150",
    detail: "+2.4% vs ayer",
    tone: "text-emerald-600",
    icon: UserCheck,
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Puntualidad mensual",
    value: "94.2%",
    detail: "-0.8% vs mes ant.",
    tone: "text-red-500",
    icon: Clock3,
    iconClass: "bg-blue-50 text-[#0757ff]",
  },
  {
    label: "Permisos pendientes",
    value: "08",
    detail: "5 requieren accion",
    tone: "text-slate-600",
    icon: TimerReset,
    iconClass: "bg-amber-50 text-amber-500",
  },
];

export const attendanceRows: AttendanceRow[] = [
  {
    name: "Carlos Mendoza",
    email: "c.mendoza@sharkcorp.com",
    department: "Tecnologia",
    status: "Presente",
    statusClass: "bg-emerald-100 text-emerald-700",
    entry: "08:52 AM",
    exit: "-",
    avatar: "CM",
    avatarClass: "bg-[#007c91]",
  },
  {
    name: "Ana Lucia Torres",
    email: "a.torres@sharkcorp.com",
    department: "Recursos Humanos",
    status: "Retraso",
    statusClass: "bg-amber-100 text-amber-700",
    entry: "09:15 AM",
    exit: "-",
    avatar: "AT",
    avatarClass: "bg-[#c87d2f]",
  },
  {
    name: "Roberto Gomez",
    email: "r.gomez@sharkcorp.com",
    department: "Ventas",
    status: "Ausente",
    statusClass: "bg-red-100 text-red-700",
    entry: "-",
    exit: "-",
    avatar: "RG",
    avatarClass: "bg-[#17264f]",
  },
  {
    name: "Sofia Villalta",
    email: "s.villalta@sharkcorp.com",
    department: "Marketing",
    status: "Permiso",
    statusClass: "bg-blue-100 text-[#0757ff]",
    entry: "-",
    exit: "-",
    avatar: "SV",
    avatarClass: "bg-[#7c67c7]",
  },
  {
    name: "Diego Martinez",
    email: "d.martinez@sharkcorp.com",
    department: "Finanzas",
    status: "Completado",
    statusClass: "bg-slate-100 text-slate-600",
    entry: "08:05 AM",
    exit: "05:12 PM",
    avatar: "DM",
    avatarClass: "bg-[#3f75aa]",
  },
];

export const delayAlerts: DelayAlert[] = [
  {
    name: "Ana Lucia Torres",
    detail: "15 min de retraso - Notificado",
    action: "Gestionar",
  },
  {
    name: "Marcos Silva",
    detail: "32 min de retraso - Sin justificar",
    action: "Enviar alerta",
  },
];

export const weeklyBars: WeeklyBar[] = [
  { day: "LUN", value: 46 },
  { day: "MAR", value: 66 },
  { day: "MIE", value: 58 },
  { day: "JUE", value: 70 },
  { day: "VIE", value: 78 },
];

export const weeklyComparison: WeeklyComparisonItem[] = [
  { day: "Lunes", current: 82, previous: 54 },
  { day: "Martes", current: 90, previous: 68 },
  { day: "Miercoles", current: 54, previous: 62 },
  { day: "Jueves", current: 96, previous: 76 },
  { day: "Viernes", current: 104, previous: 82 },
];

export const generatedReports: GeneratedReport[] = [
  {
    name: "Reporte_Asistencia_Semanal",
    detail: "PDF - 2.4 MB",
    icon: FileText,
  },
  {
    name: "Metricas_RRHH_Q3",
    detail: "Excel - 1.1 MB",
    icon: FileSpreadsheet,
  },
  {
    name: "Nomina_Integrada",
    detail: "PDF - 4.8 MB",
    icon: FileText,
  },
];

export const attendanceDetails: AttendanceDetailRow[] = [
  {
    initials: "EG",
    name: "Elena Garrido",
    id: "ID: SK-2041",
    department: "Operaciones",
    date: "Oct 24, 2023",
    entry: "08:05 AM",
    exit: "05:15 PM",
    status: "Puntual",
    statusClass: "bg-emerald-100 text-emerald-700",
    avatarClass: "bg-slate-200 text-slate-600",
  },
  {
    initials: "MR",
    name: "Marcos Ruiz",
    id: "ID: SK-2055",
    department: "Tecnologia",
    date: "Oct 24, 2023",
    entry: "08:45 AM",
    exit: "05:30 PM",
    status: "Retraso",
    statusClass: "bg-amber-100 text-amber-700",
    avatarClass: "bg-blue-100 text-[#0757ff]",
  },
  {
    initials: "SA",
    name: "Sofia Alarcon",
    id: "ID: SK-2068",
    department: "Marketing",
    date: "Oct 24, 2023",
    entry: "-:-",
    exit: "-:-",
    status: "Inasistencia",
    statusClass: "bg-red-100 text-red-700",
    avatarClass: "bg-indigo-100 text-indigo-600",
  },
  {
    initials: "JP",
    name: "Julian Parra",
    id: "ID: SK-2089",
    department: "Operaciones",
    date: "Oct 24, 2023",
    entry: "07:55 AM",
    exit: "04:55 PM",
    status: "Puntual",
    statusClass: "bg-emerald-100 text-emerald-700",
    avatarClass: "bg-slate-300 text-slate-700",
  },
];

export const absenceSummaryCards: AbsenceSummaryCard[] = [
  {
    value: "14",
    label: "Ausencias hoy",
    detail: "+12%",
    icon: AlertTriangle,
    iconClass: "bg-red-50 text-red-600",
    detailClass: "text-red-600",
  },
  {
    value: "32",
    label: "Bajas medicas activas",
    detail: "-4%",
    icon: BriefcaseMedical,
    iconClass: "bg-blue-50 text-[#0757ff]",
    detailClass: "text-[#0757ff]",
  },
  {
    value: "3.8%",
    label: "Indice de ausentismo",
    detail: "Promedio",
    icon: TrendingUp,
    iconClass: "bg-slate-100 text-slate-600",
    detailClass: "text-slate-600",
  },
];

export const absenceChartData: AbsenceChartItem[] = [
  { department: "IT", justified: 18, unjustified: 22 },
  { department: "Ventas", justified: 36, unjustified: 12 },
  { department: "RRHH", justified: 12, unjustified: 24 },
  { department: "Logistica", justified: 28, unjustified: 18 },
  { department: "Finanzas", justified: 20, unjustified: 16 },
  { department: "Operaciones", justified: 38, unjustified: 10 },
];

export const recurrenceAlerts: RecurrenceAlert[] = [
  {
    name: "Ricardo Mendoza",
    detail: "5 faltas injustificadas (mes)",
    avatar: "RM",
    color: "bg-[#007c91]",
  },
  {
    name: "Sofia Guerrero",
    detail: "Patron de lunes ausente (3/4)",
    avatar: "SG",
    color: "bg-[#7c67c7]",
  },
];

export const upcomingLeaves: UpcomingLeave[] = [
  {
    month: "OCT",
    day: "14",
    title: "Vacaciones: Luis Paez",
    detail: "Soporte Tecnico - 10 dias",
  },
  {
    month: "OCT",
    day: "18",
    title: "Cirugia: Elena Rivas",
    detail: "Administracion - 5 dias",
  },
  {
    month: "OCT",
    day: "22",
    title: "Paternidad: Roberto T.",
    detail: "Ventas - 15 dias",
  },
];

export const incidents: AbsenceIncident[] = [
  {
    initials: "AM",
    name: "Andrea Montes",
    id: "ID: SK-9042",
    date: "Hoy, 08:30 AM",
    type: "Injustificada",
    typeClass: "bg-red-100 text-red-700",
    department: "Logistica",
    status: "Pendiente revision",
    statusColor: "bg-red-500",
  },
  {
    initials: "JS",
    name: "Javier Solis",
    id: "ID: SK-8812",
    date: "12 Oct, 2023",
    type: "Medica",
    typeClass: "bg-blue-100 text-[#0757ff]",
    department: "Operaciones",
    status: "Documentado",
    statusColor: "bg-[#2e4a93]",
  },
  {
    initials: "MC",
    name: "Marcos Cardenas",
    id: "ID: SK-7721",
    date: "11 Oct, 2023",
    type: "Personal",
    typeClass: "bg-slate-200 text-slate-700",
    department: "Ventas",
    status: "Justificado",
    statusColor: "bg-slate-400",
  },
];

export const pendingJustifications: PendingJustification[] = [
  {
    name: "Beatriz Moreno",
    role: "Analista de datos - Operaciones",
    type: "Inasistencia",
    typeClass: "bg-red-100 text-red-700",
    message:
      "Cita medica de emergencia para familiar directo. Se adjunta constancia del hospital central emitida el dia de hoy.",
    file: "constancia_medica_1402.pdf",
    fileIcon: FileText,
    sentAt: "Hoy, 09:12 AM",
    avatar: "BM",
    avatarClass: "bg-[#007c91]",
  },
  {
    name: "Javier Solis",
    role: "Desarrollador Jr - Tecnologia",
    type: "Retardo",
    typeClass: "bg-blue-100 text-[#0757ff]",
    message:
      "Cierre de vialidad por mantenimiento mayor en la autopista Norte. Adjunto captura de pantalla de reporte de trafico en vivo.",
    file: "evidencia_trafico.jpg",
    fileIcon: Image,
    sentAt: "Ayer, 08:45 PM",
    avatar: "JS",
    avatarClass: "bg-[#3f75aa]",
  },
];

export const recentResolutions: RecentResolution[] = [
  {
    status: "Aprobado",
    title: "Permiso de Maria T.",
    detail: "Asunto personal validado por RH",
    time: "Hace 2 horas",
    color: "bg-emerald-500",
  },
  {
    status: "Rechazado",
    title: "Justificacion Juan P.",
    detail: "Evidencia insuficiente de desperfecto",
    time: "Hoy, 10:30 AM",
    color: "bg-red-500",
  },
  {
    status: "Aprobado",
    title: "Comision Especial I.G",
    detail: "Viaje corporativo autorizado",
    time: "Ayer",
    color: "bg-emerald-500",
  },
];
