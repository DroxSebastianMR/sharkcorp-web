export type ScheduleEventTone = "blue" | "slate";

export type ScheduleCalendarEvent = {
  label: string;
  tone: ScheduleEventTone;
};

export type ScheduleCalendarDay = {
  day: string;
  muted?: boolean;
  active?: boolean;
  blocked?: boolean;
  events?: ScheduleCalendarEvent[];
};

export type ScheduleCommitment = {
  label: string;
  day: string;
  title: string;
  time: string;
  place: string;
  status: "Confirmado" | "Pendiente" | "Cancelado";
  meetingType: "Presencial" | "Virtual" | "Hibrida";
  importance: "Critica" | "Alta" | "Media" | "Baja";
};

export type ScheduleLegendItem = {
  label: string;
  color: string;
};

export type ScheduleTodayHighlight = {
  label: string;
  tone: string;
};

export type ScheduleParticipant = {
  initials: string;
  name: string;
  detail: string;
};

export type ScheduleSuggestedParticipant = {
  initials: string;
  name: string;
  role: string;
};

export type ScheduleSelectOption = {
  label: string;
  value: string;
};
