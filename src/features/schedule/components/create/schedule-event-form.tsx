import {
  CalendarDays,
  Clock3,
  FileText,
  MapPin,
  Save,
  Type,
} from "lucide-react";

type ScheduleEventFormProps = {
  importanceOptions: string[];
  onCancel: () => void;
};

export const ScheduleEventForm = ({
  importanceOptions,
  onCancel,
}: ScheduleEventFormProps) => {
  return (
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
          onClick={onCancel}
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
  );
};
