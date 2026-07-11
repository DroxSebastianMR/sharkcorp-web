import { Building2, CalendarDays, Rocket } from "lucide-react";

import type { ProjectClientOption } from "@/features/projects/types/projects.types";

type ProjectMainFieldsProps = {
  clientOptions: ProjectClientOption[];
};

export const ProjectMainFields = ({ clientOptions }: ProjectMainFieldsProps) => {
  return (
    <>
      <label className="block">
        <span className="font-heading text-sm font-bold text-slate-700">
          Nombre del proyecto
        </span>
        <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
          <Rocket className="h-4 w-4 text-slate-500" />
          <input
            className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
            placeholder="Ej. Rediseno portal corporativo"
            type="text"
          />
        </div>
      </label>

      <label className="block">
        <span className="font-heading text-sm font-bold text-slate-700">
          Cliente / compania
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
            {clientOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
    </>
  );
};
