import { useNavigate } from "react-router-dom";

import {
  CalendarDays,
  ChevronLeft,
  FileUp,
  Info,
  PenLine,
  Send,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

const priorities = ["Baja", "Media", "Alta", "Critica"];

export const TaskCreatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <button
        className="mb-5 flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
        onClick={() => navigate(PATHS.TASKS.HOME)}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver
      </button>

      <section>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Crear nueva tarea
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Complete la informacion requerida para asignar una nueva responsabilidad.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border-l-4 border-[#0757ff] bg-blue-50 p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#0757ff]" />
          <div>
            <h3 className="font-heading text-sm font-extrabold text-[#0757ff]">
              Nota de proceso
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-600">
              Al asignar esta tarea, el responsable recibira una notificacion
              inmediata en su terminal de SharkCorp Enterprise.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="grid gap-5 p-6 md:grid-cols-2">
          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-700">
              Departamento / Destino
            </span>
            <select
              className="mt-2 h-12 w-full cursor-pointer rounded-xl border border-transparent bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
              defaultValue=""
            >
              <option value="" disabled>
                Seleccione un area...
              </option>
              <option value="ti">TI (Cloud Core)</option>
              <option value="finanzas">Finanzas</option>
              <option value="rrhh">Recursos Humanos</option>
              <option value="operaciones">Operaciones</option>
            </select>
          </label>

          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-700">
              Fecha limite
            </span>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
              <CalendarDays className="h-4 w-4 text-slate-500" />
              <input
                className="h-full flex-1 bg-transparent font-body text-sm font-semibold text-slate-700 outline-none"
                type="date"
              />
            </div>
          </label>

          <label className="block md:col-span-2">
            <span className="font-heading text-sm font-bold text-slate-700">
              Titulo de la tarea
            </span>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
              <PenLine className="h-4 w-4 text-slate-500" />
              <input
                className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                placeholder="Ej. Auditoria de seguridad Q3"
                type="text"
              />
            </div>
          </label>

          <div className="md:col-span-2">
            <p className="font-heading text-sm font-bold text-slate-700">
              Nivel de prioridad
            </p>
            <div className="mt-2 grid gap-3 md:grid-cols-4">
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

          <label className="block md:col-span-2">
            <span className="font-heading text-sm font-bold text-slate-700">
              Descripcion detallada
            </span>
            <textarea
              className="mt-2 min-h-[150px] w-full resize-none rounded-xl border border-transparent bg-slate-100 px-5 py-4 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Describa el alcance de la tarea, los entregables esperados y cualquier contexto relevante..."
            />
          </label>

          <label className="block md:col-span-2">
            <span className="font-heading text-sm font-bold text-slate-700">
              Adjuntos y documentacion
            </span>
            <div className="mt-2 grid min-h-[170px] cursor-pointer place-items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 text-center transition hover:border-[#0757ff] hover:bg-blue-50/40">
              <div>
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-[#0757ff]">
                  <FileUp className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-bold text-slate-700">
                  Arrastre archivos aqui o haga clic para subir
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  PDF, DOCX, PNG o JPG. Max. 25MB.
                </p>
              </div>
            </div>
          </label>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-5 bg-slate-50 px-6 py-5">
          <button
            className="h-11 cursor-pointer px-5 font-button text-sm font-bold text-slate-600 transition hover:text-[#0757ff]"
            onClick={() => navigate(PATHS.TASKS.HOME)}
            type="button"
          >
            Cancelar
          </button>
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
            type="button"
          >
            <Send className="h-4 w-4" />
            Asignar tarea
          </button>
        </div>
      </section>
    </div>
  );
};
