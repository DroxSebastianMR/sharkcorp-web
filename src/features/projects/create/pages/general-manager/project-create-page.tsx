import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronLeft,
  Rocket,
  UserPlus,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

const priorities = ["Baja", "Media", "Alta"];

const team = [
  { initials: "AD", name: "Ana Duarte", role: "Lead Dev" },
  { initials: "CP", name: "Carlos Paredes", role: "Producto" },
  { initials: "ER", name: "Elena Ruiz", role: "Data Analyst" },
];

export const ProjectCreatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <button
        className="mb-5 flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
        onClick={() => navigate(PATHS.PROJECTS.HOME)}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver
      </button>

      <section>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Crear nuevo proyecto
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Define parametros basicos y equipo para iniciar una nueva iniciativa.
        </p>
      </section>

      <section className="mt-6 rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-700">
              Nombre del proyecto
            </span>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
              <Rocket className="h-4 w-4 text-slate-500" />
              <input
                className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                placeholder="Ej. Rediseño portal corporativo"
                type="text"
              />
            </div>
          </label>

          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-700">
              Cliente / compañia
            </span>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
              <Building2 className="h-4 w-4 text-slate-500" />
              <select
                className="h-full flex-1 cursor-pointer bg-transparent font-button text-sm font-semibold text-slate-700 outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Seleccionar cliente...
                </option>
                <option value="sharkcorp">SharkCorp Enterprise</option>
                <option value="alpha">Alpha Corp</option>
                <option value="global">Global Trading Ltd.</option>
              </select>
            </div>
          </label>

          <label className="block md:col-span-2">
            <span className="font-heading text-sm font-bold text-slate-700">
              Descripcion detallada
            </span>
            <textarea
              className="mt-2 min-h-[140px] w-full resize-none rounded-xl border border-transparent bg-slate-100 px-5 py-4 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Describe objetivos, alcance y entregables clave del proyecto..."
            />
          </label>

          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-700">
              Fecha inicio
            </span>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
              <CalendarDays className="h-4 w-4 text-slate-500" />
              <input
                className="h-full flex-1 bg-transparent font-body text-sm font-semibold text-slate-700 outline-none"
                type="date"
              />
            </div>
          </label>

          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-700">
              Fecha fin estimada
            </span>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
              <CalendarDays className="h-4 w-4 text-slate-500" />
              <input
                className="h-full flex-1 bg-transparent font-body text-sm font-semibold text-slate-700 outline-none"
                type="date"
              />
            </div>
          </label>

          <div className="md:col-span-2">
            <p className="font-heading text-sm font-bold text-slate-700">
              Prioridad
            </p>
            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              {priorities.map((priority) => (
                <button
                  className={[
                    "h-11 cursor-pointer rounded-xl border font-button text-sm font-bold transition",
                    priority === "Media"
                      ? "border-[#0757ff] bg-blue-50 text-[#0757ff]"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#0757ff] hover:text-[#0757ff]",
                  ].join(" ")}
                  key={priority}
                  type="button"
                >
                  {priority}
                </button>
              ))}
            </div>
          </div>

          <section className="md:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <p className="font-heading text-sm font-bold text-slate-700">
                Asignar equipo
              </p>
              <button
                className="flex cursor-pointer items-center gap-2 font-button text-xs font-bold text-[#0757ff]"
                type="button"
              >
                <UserPlus className="h-4 w-4" />
                Invitar externo
              </button>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {team.map((member, index) => (
                <button
                  className={[
                    "flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-left transition",
                    index === 0
                      ? "border-[#0757ff] bg-blue-50"
                      : "border-transparent bg-slate-100 hover:border-[#0757ff]",
                  ].join(" ")}
                  key={member.name}
                  type="button"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2e4a93] text-xs font-extrabold text-white">
                    {member.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold text-slate-700">
                      {member.name}
                    </span>
                    <span className="block truncate text-xs font-medium text-slate-500">
                      {member.role}
                    </span>
                  </span>
                  <span
                    className={[
                      "h-4 w-4 rounded border",
                      index === 0
                        ? "border-[#0757ff] bg-[#0757ff]"
                        : "border-slate-300 bg-white",
                    ].join(" ")}
                  />
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-end gap-5 border-t border-slate-200 pt-5">
          <button
            className="h-11 cursor-pointer px-5 font-button text-sm font-bold text-slate-600 transition hover:text-[#0757ff]"
            onClick={() => navigate(PATHS.PROJECTS.HOME)}
            type="button"
          >
            Cancelar
          </button>
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
            type="button"
          >
            Crear proyecto
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
