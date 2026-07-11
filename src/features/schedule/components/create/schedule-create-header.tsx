import { ChevronLeft } from "lucide-react";

type ScheduleCreateHeaderProps = {
  onBack: () => void;
};

export const ScheduleCreateHeader = ({ onBack }: ScheduleCreateHeaderProps) => {
  return (
    <>
      <button
        className="mb-5 flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
        onClick={onBack}
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
    </>
  );
};
