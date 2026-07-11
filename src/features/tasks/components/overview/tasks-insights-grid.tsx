import tasksMascot from "@/assets/img/intranet/tareas.png";
import type { TaskWorkloadItem } from "@/features/tasks/types/tasks.types";

type TasksInsightsGridProps = {
  workload: TaskWorkloadItem[];
};

export const TasksInsightsGrid = ({ workload }: TasksInsightsGridProps) => {
  return (
    <section className="mt-6 grid gap-5 xl:grid-cols-2">
      <article className="rounded-2xl border border-blue-100 bg-[#eef4ff] p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)]">
        <h3 className="font-heading text-2xl font-extrabold text-[#083da8]">
          Carga por area
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-600">
          Distribucion de tareas activas por equipo.
        </p>
        <div className="mt-7 space-y-5">
          {workload.map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-700">
                <span>{item.label}</span>
                <span className="text-[#0757ff]">{item.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-[#0757ff] shadow-[0_8px_18px_rgba(7,87,255,0.2)]"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-blue-50" />
        <div className="relative grid h-full gap-5 md:grid-cols-[minmax(0,1fr)_180px]">
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-extrabold text-slate-950">
              Pulso operativo SharkCorp
            </h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
              Seguimiento visual del avance y coordinacion entre equipos.
            </p>
            <p className="mt-6 max-w-md font-heading text-lg font-extrabold leading-snug text-[#2e4a93]">
              Avance estable y prioridades bajo control.
            </p>
            <span className="mt-4 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
              Estado operativo saludable
            </span>
          </div>
          <div className="relative flex items-center justify-end">
            <img
              alt="Mascota de tareas SharkCorp"
              className="h-40 w-40 object-contain drop-shadow-[0_18px_26px_rgba(7,87,255,0.16)]"
              src={tasksMascot}
            />
          </div>
        </div>
      </article>
    </section>
  );
};
