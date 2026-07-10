import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";

const weekdays = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];

const calendarDays = [
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

const commitments = [
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

const categories = [
  { label: "Estrategico", color: "bg-[#0757ff]" },
  { label: "Interno", color: "bg-[#2e4a93]" },
  { label: "Externo", color: "bg-slate-300" },
  { label: "Urgente", color: "bg-red-400" },
];

const todayHighlights = [
  { label: "2 reuniones estrategicas", tone: "bg-blue-50 text-[#0757ff]" },
  { label: "1 decision pendiente", tone: "bg-amber-50 text-amber-600" },
  { label: "Cierre de nomina", tone: "bg-red-50 text-red-600" },
];

const importanceCategories = [
  { label: "Critica", color: "bg-red-500" },
  { label: "Alta", color: "bg-orange-500" },
  { label: "Media", color: "bg-blue-500" },
  { label: "Baja", color: "bg-slate-300" },
];

const getStatusClass = (status: string) => {
  if (status === "Confirmado") {
    return "bg-emerald-50 text-emerald-600";
  }

  if (status === "Pendiente") {
    return "bg-amber-50 text-amber-600";
  }

  return "bg-red-50 text-red-600";
};

const getImportanceClass = (importance: string) => {
  if (importance === "Critica") {
    return "bg-red-50 text-red-600";
  }

  if (importance === "Alta") {
    return "bg-orange-50 text-orange-600";
  }

  return "bg-blue-50 text-[#0757ff]";
};

export const AgendaGeneralManagerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] px-5 py-5 lg:px-12">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Agenda ejecutiva
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Gestiona reuniones, eventos y compromisos estrategicos del equipo.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex rounded-xl bg-slate-200 p-1">
            <button
              className="h-9 cursor-pointer rounded-lg bg-white px-5 font-button text-xs font-bold text-[#0757ff] shadow-sm"
              type="button"
            >
              Mensual
            </button>
            <button
              className="h-9 cursor-pointer rounded-lg px-5 font-button text-xs font-semibold text-slate-600 transition hover:text-[#0757ff]"
              type="button"
            >
              Semanal
            </button>
          </div>
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
            onClick={() => navigate(PATHS.AGENDA.CREATE)}
            type="button"
          >
            <Plus className="h-4 w-4" />
            Nuevo evento
          </button>
        </div>
      </section>

      <section className="mt-6 flex flex-wrap items-end gap-3 rounded-2xl bg-white p-4 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <label className="min-w-[150px] flex-1">
          <span className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
            Año
          </span>
          <select
            className="mt-2 h-11 w-full cursor-pointer rounded-xl border border-transparent bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
            defaultValue="2023"
          >
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </label>

        <label className="min-w-[170px] flex-1">
          <span className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
            Mes
          </span>
          <select
            className="mt-2 h-11 w-full cursor-pointer rounded-xl border border-transparent bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
            defaultValue="octubre"
          >
            <option value="enero">Enero</option>
            <option value="febrero">Febrero</option>
            <option value="marzo">Marzo</option>
            <option value="abril">Abril</option>
            <option value="mayo">Mayo</option>
            <option value="junio">Junio</option>
            <option value="julio">Julio</option>
            <option value="agosto">Agosto</option>
            <option value="septiembre">Septiembre</option>
            <option value="octubre">Octubre</option>
            <option value="noviembre">Noviembre</option>
            <option value="diciembre">Diciembre</option>
          </select>
        </label>

        <label className="min-w-[120px]">
          <span className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
            Día
          </span>
          <select
            className="mt-2 h-11 w-full cursor-pointer rounded-xl border border-transparent bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
            defaultValue="12"
          >
            {Array.from({ length: 31 }, (_, index) => String(index + 1)).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>

        <button
          className="h-11 cursor-pointer rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.18)] transition hover:bg-[#064be0]"
          type="button"
        >
          Aplicar filtro
        </button>
      </section>

      <section className="agenda-layout mt-6">
        <article className="rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-5">
            <div className="flex items-center gap-4">
              <h3 className="font-heading text-xl font-extrabold text-slate-950">
                Octubre 2023
              </h3>
              <button
                aria-label="Mes anterior"
                className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-[#0757ff]"
                type="button"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Mes siguiente"
                className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-[#0757ff]"
                type="button"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
              Vista mensual
            </span>
          </div>

          <div className="agenda-week-grid border-b border-slate-100 bg-slate-50 text-center text-[11px] font-extrabold text-slate-500">
            {weekdays.map((day) => (
              <div className="py-4" key={day}>
                {day}
              </div>
            ))}
          </div>

          <div className="agenda-month-grid">
            {calendarDays.map((cell, index) => (
              <div
                className={[
                  "min-h-[116px] border-b border-r border-slate-100 p-3 last:border-r-0",
                  cell.blocked ? "bg-slate-100/80" : "bg-white",
                ].join(" ")}
                key={`${cell.day}-${index}`}
              >
                <div
                  className={[
                    "grid h-6 w-6 place-items-center rounded-full text-xs font-extrabold",
                    cell.active
                      ? "bg-[#0757ff] text-white"
                      : cell.muted
                        ? "text-slate-300"
                        : "text-slate-800",
                  ].join(" ")}
                >
                  {cell.day}
                </div>

                <div className="mt-2 space-y-1.5">
                  {cell.events?.map((event) => (
                    <button
                      className={[
                        "w-full cursor-pointer truncate rounded-md px-2 py-1 text-left text-[10px] font-bold transition",
                        event.tone === "blue"
                          ? "bg-blue-50 text-[#0757ff] hover:bg-blue-100"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                      ].join(" ")}
                      key={event.label}
                      type="button"
                    >
                      {event.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 px-6 py-4">
            <div>
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
                Tipo de evento
              </p>
              <div className="mt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                {categories.map((category) => (
                  <span className="flex items-center gap-2" key={category.label}>
                    <span className={`h-2.5 w-2.5 rounded-full ${category.color}`} />
                    {category.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
                Importancia
              </p>
              <div className="mt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                {importanceCategories.map((item) => (
                  <span className="flex items-center gap-2" key={item.label}>
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-sm font-extrabold text-slate-950">
                Hoy
              </h3>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
                12 Oct
              </span>
            </div>
            <div className="mt-4 space-y-2">
              {todayHighlights.map((item) => (
                <div
                  className={`rounded-xl px-3 py-2 text-sm font-bold ${item.tone}`}
                  key={item.label}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h3 className="font-heading text-sm font-extrabold text-slate-950">
                Proximos compromisos
              </h3>
              <button
                className="cursor-pointer font-button text-xs font-bold text-[#0757ff]"
                type="button"
              >
                Ver todo
              </button>
            </div>
            <div className="divide-y divide-slate-100">
              {commitments.map((item) => (
                <div className="flex gap-4 px-5 py-4" key={`${item.title}-${item.time}`}>
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-50 text-center">
                    <span>
                      <span className="block text-[10px] font-extrabold text-[#0757ff]">
                        {item.label}
                      </span>
                      <strong className="font-heading text-lg font-extrabold text-[#0757ff]">
                        {item.day}
                      </strong>
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-extrabold text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500">
                      <Clock3 className="h-3.5 w-3.5" />
                      {item.time}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.place}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${getStatusClass(item.status)}`}>
                        {item.status}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-extrabold text-slate-600">
                        {item.meetingType}
                      </span>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${getImportanceClass(item.importance)}`}>
                        {item.importance}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
};
