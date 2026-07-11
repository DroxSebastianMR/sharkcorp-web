import { ChevronDown, Save } from "lucide-react";

type BackupScheduleCardProps = {
  checks: string[];
  frequencies: string[];
  retentionOptions: string[];
};

export const BackupScheduleCard = ({
  checks,
  frequencies,
  retentionOptions,
}: BackupScheduleCardProps) => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <h3 className="font-heading text-xl font-extrabold text-slate-950">
        Frecuencia y programacion
      </h3>
      <div className="mt-5 border-t border-slate-200 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-heading text-sm font-bold text-slate-700">
              Backups automaticos
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Intervalo entre capturas de estado de la base de datos.
            </p>
          </div>
          <div className="flex rounded-xl bg-slate-100 p-1">
            {frequencies.map((item, index) => (
              <button
                className={[
                  "h-10 cursor-pointer rounded-lg px-5 font-button text-sm font-bold",
                  index === 0
                    ? "bg-white text-[#0757ff] shadow-sm"
                    : "text-slate-600",
                ].join(" ")}
                key={item}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {retentionOptions.map((item) => (
            <button
              className="flex h-12 cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700"
              key={item}
              type="button"
            >
              {item}
              <ChevronDown className="h-4 w-4" />
            </button>
          ))}
        </div>
        <div className="mt-7 space-y-4">
          {checks.map((item, index) => (
            <label className="flex cursor-pointer items-center gap-3" key={item}>
              <span
                className={[
                  "grid h-5 w-5 place-items-center rounded-md border",
                  index === 0
                    ? "border-[#0757ff] bg-[#0757ff]"
                    : "border-[#0757ff] bg-white",
                ].join(" ")}
              />
              <span className="text-sm font-bold text-slate-700">{item}</span>
            </label>
          ))}
        </div>
        <div className="mt-8 flex justify-end gap-4">
          <button
            className="h-11 cursor-pointer px-5 font-button text-sm font-bold text-slate-600"
            type="button"
          >
            Descartar cambios
          </button>
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-sm font-bold text-white"
            type="button"
          >
            <Save className="h-4 w-4" />
            Guardar configuracion
          </button>
        </div>
      </div>
    </article>
  );
};
