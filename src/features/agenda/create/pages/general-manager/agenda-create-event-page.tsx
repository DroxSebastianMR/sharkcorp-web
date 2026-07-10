import { useNavigate } from "react-router-dom";

import {
  CalendarDays,
  ChevronLeft,
  Clock3,
  FileText,
  MapPin,
  Plus,
  Save,
  Search,
  Type,
  Users,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

const importanceOptions = ["Critica", "Alta", "Media", "Baja"];

const selectedParticipants = [
  { initials: "JD", name: "Julian Duarte", detail: "Host" },
  { initials: "MS", name: "Maria Silva", detail: "RRHH" },
  { initials: "RP", name: "Roberto Perez", detail: "Direccion" },
];

const suggestedParticipants = [
  { initials: "AC", name: "Ana Castro", role: "Dir. Operaciones" },
  { initials: "LV", name: "Luis Valdes", role: "Chief Technology Officer" },
];

const previewDays = ["L", "M", "X", "J", "V", "S", "D"];

export const AgendaCreateEventPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <button
        className="mb-5 flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
        onClick={() => navigate(PATHS.AGENDA.HOME)}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver
      </button>

      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Nuevo evento de agenda
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Registra reuniones, compromisos y actividades estrategicas.
          </p>
        </div>

        <article className="hidden min-w-[260px] rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200/80 md:block">
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-7 gap-1 text-center text-[7px] font-bold text-slate-400">
              {Array.from({ length: 21 }, (_, index) => (
                <span
                  className={[
                    "h-1.5 w-4 rounded-full",
                    index === 11 ? "bg-[#0757ff]" : "bg-slate-200",
                  ].join(" ")}
                  key={index}
                />
              ))}
            </div>
            <div>
              <p className="font-heading text-xs font-extrabold text-slate-600">
                Vista previa calendario
              </p>
              <p className="text-xs font-bold text-[#0757ff]">Semana 42</p>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block md:col-span-2">
              <span className="flex items-center gap-2 font-heading text-sm font-bold text-slate-700">
                <Type className="h-4 w-4 text-slate-500" />
                Titulo del evento
              </span>
              <input
                className="mt-2 h-14 w-full rounded-xl border border-transparent bg-slate-100 px-5 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                placeholder="Ej. Revision estrategica Q4"
                type="text"
              />
            </label>

            <label className="block">
              <span className="flex items-center gap-2 font-heading text-sm font-bold text-slate-700">
                <CalendarDays className="h-4 w-4 text-slate-500" />
                Tipo de evento
              </span>
              <select
                className="mt-2 h-12 w-full cursor-pointer rounded-xl border border-transparent bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                defaultValue="estrategico"
              >
                <option value="estrategico">Estrategico</option>
                <option value="interno">Interno</option>
                <option value="externo">Externo</option>
                <option value="urgente">Urgente</option>
              </select>
            </label>

            <div>
              <span className="flex items-center gap-2 font-heading text-sm font-bold text-slate-700">
                <span className="text-lg font-extrabold text-slate-500">!</span>
                Nivel de importancia
              </span>
              <div className="mt-2 grid h-12 grid-cols-4 rounded-xl bg-slate-100 p-1">
                {importanceOptions.map((option) => (
                  <button
                    className={[
                      "cursor-pointer rounded-lg font-button text-xs font-bold transition",
                      option === "Critica"
                        ? "bg-red-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-white hover:text-[#0757ff]",
                    ].join(" ")}
                    key={option}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="flex items-center gap-2 font-heading text-sm font-bold text-slate-700">
                <CalendarDays className="h-4 w-4 text-slate-500" />
                Fecha
              </span>
              <input
                className="mt-2 h-12 w-full rounded-xl border border-transparent bg-slate-100 px-4 font-body text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                type="date"
              />
            </label>

            <label className="block">
              <span className="flex items-center gap-2 font-heading text-sm font-bold text-slate-700">
                <Clock3 className="h-4 w-4 text-slate-500" />
                Hora
              </span>
              <input
                className="mt-2 h-12 w-full rounded-xl border border-transparent bg-slate-100 px-4 font-body text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                type="time"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="flex items-center gap-2 font-heading text-sm font-bold text-slate-700">
                <MapPin className="h-4 w-4 text-slate-500" />
                Ubicacion o enlace
              </span>
              <input
                className="mt-2 h-12 w-full rounded-xl border border-transparent bg-slate-100 px-4 font-body text-sm font-semibold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                placeholder="Sala, oficina o enlace de reunion"
                type="text"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="flex items-center gap-2 font-heading text-sm font-bold text-slate-700">
                <FileText className="h-4 w-4 text-slate-500" />
                Descripcion
              </span>
              <textarea
                className="mt-2 min-h-[150px] w-full resize-none rounded-xl border border-transparent bg-slate-100 px-5 py-4 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                placeholder="Detalles de la reunion, objetivos y preparacion requerida..."
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap justify-end gap-4">
            <button
              className="h-11 cursor-pointer px-5 font-button text-sm font-bold text-slate-600 transition hover:text-[#0757ff]"
              onClick={() => navigate(PATHS.AGENDA.HOME)}
              type="button"
            >
              Cancelar
            </button>
            <button
              className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-7 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
              type="button"
            >
              <Save className="h-4 w-4" />
              Guardar evento
            </button>
          </div>
        </article>

        <aside className="space-y-5">
          <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <h3 className="flex items-center gap-2 font-heading text-xl font-extrabold text-[#083da8]">
              <Users className="h-5 w-5" />
              Participantes
            </h3>

            <div className="mt-4 flex h-12 items-center gap-2 rounded-xl bg-slate-100 px-4 text-slate-400">
              <Search className="h-4 w-4" />
              <span className="text-sm font-medium">Buscar por nombre</span>
              <button
                aria-label="Agregar participante"
                className="ml-auto grid h-8 w-8 cursor-pointer place-items-center rounded-lg bg-blue-50 text-[#0757ff] transition hover:bg-blue-100"
                type="button"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-slate-300 p-4">
              <div className="space-y-2">
                {selectedParticipants.map((person, index) => (
                  <div
                    className={[
                      "flex items-center gap-3 rounded-full px-3 py-2",
                      index === 0
                        ? "bg-[#0757ff] text-white"
                        : "bg-slate-100 text-slate-600",
                    ].join(" ")}
                    key={person.name}
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-[10px] font-extrabold">
                      {person.initials}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-xs font-bold">
                      {person.name} ({person.detail})
                    </span>
                    {index > 0 ? (
                      <button className="cursor-pointer text-xs" type="button">
                        x
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs font-medium text-slate-400">
                Agrega hasta 25 participantes.
              </p>
            </div>

            <p className="mt-5 font-heading text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
              Sugeridos frecuentemente
            </p>
            <div className="mt-3 space-y-3">
              {suggestedParticipants.map((person) => (
                <button
                  className="flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 text-left transition hover:bg-slate-50"
                  key={person.name}
                  type="button"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#2e4a93] text-xs font-extrabold text-white">
                    {person.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold text-slate-700">
                      {person.name}
                    </span>
                    <span className="block truncate text-xs font-medium text-slate-400">
                      {person.role}
                    </span>
                  </span>
                  <Plus className="h-4 w-4 text-[#0757ff]" />
                </button>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <h3 className="font-heading text-sm font-extrabold text-slate-950">
              Vista previa
            </h3>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-extrabold text-slate-400">
                {previewDays.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-600">
                {Array.from({ length: 14 }, (_, index) => (
                  <span
                    className={[
                      "grid h-8 place-items-center rounded-lg",
                      index === 11 ? "bg-[#0757ff] text-white" : "bg-white",
                    ].join(" ")}
                    key={index}
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-blue-50 p-4">
              <p className="font-heading text-sm font-extrabold text-[#0757ff]">
                Semana 42
              </p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">
                El evento se mostrara en la agenda ejecutiva con su tipo,
                importancia y participantes asignados.
              </p>
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
};
