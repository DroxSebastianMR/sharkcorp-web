import type {
  ScheduleCalendarDay,
  ScheduleCommitment,
  ScheduleLegendItem,
  ScheduleParticipant,
  ScheduleSelectOption,
  ScheduleSuggestedParticipant,
  ScheduleTodayHighlight,
} from "@/features/schedule/types/schedule.types";

export const scheduleWeekdays = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];

export const scheduleCalendarDays: ScheduleCalendarDay[] = [
  { day: "25", muted: true },
  { day: "26", muted: true },
  { day: "27", muted: true },
  { day: "28", muted: true },
  { day: "29", muted: true },
  { day: "30", muted: true },
  { day: "1", active: true },
  { day: "2", events: [{ label: "Almuerzo inversionistas", tone: "blue" }] },
  { day: "3" },
  { day: "4", events: [{ label: "Reunion de Directorio", tone: "blue" }] },
  { day: "5" },
  { day: "6" },
  { day: "7" },
  {
    day: "12",
    active: true,
    events: [
      { label: "Cierre de Nomina", tone: "blue" },
      { label: "Revision KPIs", tone: "slate" },
    ],
  },
  { day: "13" },
  { day: "14" },
  { day: "15" },
  { day: "16" },
  { day: "17" },
  { day: "18" },
  { day: "19" },
  { day: "20" },
  { day: "21" },
  { day: "22", blocked: true },
  { day: "23", blocked: true },
  { day: "24", blocked: true },
  { day: "25", blocked: true },
  { day: "26", blocked: true },
];

export const scheduleCommitments: ScheduleCommitment[] = [
  {
    label: "HOY",
    day: "12",
    title: "Revision de KPIs trimestrales",
    time: "15:30 - 17:00",
    place: "Sala Boardroom B",
    status: "Confirmado",
    meetingType: "Presencial",
    importance: "Alta",
  },
  {
    label: "HOY",
    day: "12",
    title: "Cierre de nomina octubre",
    time: "18:00 - 19:30",
    place: "Oficina Central",
    status: "Pendiente",
    meetingType: "Hibrida",
    importance: "Critica",
  },
  {
    label: "MAN",
    day: "13",
    title: "Entrevista Talento Senior",
    time: "09:00 - 10:00",
    place: "Meet: shark-talent-x",
    status: "Confirmado",
    meetingType: "Virtual",
    importance: "Media",
  },
];

export const scheduleEventTypeLegends: ScheduleLegendItem[] = [
  { label: "Estrategico", color: "bg-[#0757ff]" },
  { label: "Interno", color: "bg-[#2e4a93]" },
  { label: "Externo", color: "bg-slate-300" },
  { label: "Urgente", color: "bg-red-400" },
];

export const scheduleImportanceLegends: ScheduleLegendItem[] = [
  { label: "Critica", color: "bg-red-500" },
  { label: "Alta", color: "bg-orange-500" },
  { label: "Media", color: "bg-blue-500" },
  { label: "Baja", color: "bg-slate-300" },
];

export const scheduleTodayHighlights: ScheduleTodayHighlight[] = [
  { label: "2 reuniones estrategicas", tone: "bg-blue-50 text-[#0757ff]" },
  { label: "1 decision pendiente", tone: "bg-amber-50 text-amber-600" },
  { label: "Cierre de nomina", tone: "bg-red-50 text-red-600" },
];

export const scheduleYearOptions: ScheduleSelectOption[] = [
  { label: "2026", value: "2026" },
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
];

export const scheduleMonthOptions: ScheduleSelectOption[] = [
  { label: "Enero", value: "enero" },
  { label: "Febrero", value: "febrero" },
  { label: "Marzo", value: "marzo" },
  { label: "Abril", value: "abril" },
  { label: "Mayo", value: "mayo" },
  { label: "Junio", value: "junio" },
  { label: "Julio", value: "julio" },
  { label: "Agosto", value: "agosto" },
  { label: "Septiembre", value: "septiembre" },
  { label: "Octubre", value: "octubre" },
  { label: "Noviembre", value: "noviembre" },
  { label: "Diciembre", value: "diciembre" },
];

export const scheduleDayOptions: ScheduleSelectOption[] = Array.from(
  { length: 31 },
  (_, index) => {
    const value = String(index + 1);
    return { label: value, value };
  },
);

export const scheduleImportanceOptions = ["Critica", "Alta", "Media", "Baja"];

export const selectedScheduleParticipants: ScheduleParticipant[] = [
  { initials: "JD", name: "Julian Duarte", detail: "Host" },
  { initials: "MS", name: "Maria Silva", detail: "RRHH" },
  { initials: "RP", name: "Roberto Perez", detail: "Direccion" },
];

export const suggestedScheduleParticipants: ScheduleSuggestedParticipant[] = [
  { initials: "AC", name: "Ana Castro", role: "Dir. Operaciones" },
  { initials: "LV", name: "Luis Valdes", role: "Chief Technology Officer" },
];

export const schedulePreviewDays = ["L", "M", "X", "J", "V", "S", "D"];
