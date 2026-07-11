import { Plus } from "lucide-react";

type ScheduleHeaderProps = {
  onCreateEvent: () => void;
};

export const ScheduleHeader = ({ onCreateEvent }: ScheduleHeaderProps) => {
  return (
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
          onClick={onCreateEvent}
          type="button"
        >
          <Plus className="h-4 w-4" />
          Nuevo evento
        </button>
      </div>
    </section>
  );
};
