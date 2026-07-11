import { CheckCircle2, X } from "lucide-react";

import type { Project } from "@/features/projects/types/projects.types";

type ProjectDetailDialogProps = {
  onClose: () => void;
  project: Project | null;
};

export const ProjectDetailDialog = ({
  onClose,
  project,
}: ProjectDetailDialogProps) => {
  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 px-5 backdrop-blur-sm">
      <article className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${project.statusClass}`}>
              {project.status}
            </span>
            <h3 className="mt-4 font-heading text-3xl font-extrabold text-[#083da8]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-500">
              {project.description}
            </p>
          </div>
          <button
            aria-label="Cerrar detalle"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff]"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["Cliente", project.client],
            ["Responsable", project.owner],
            ["Prioridad", project.priority],
            ["Presupuesto", project.budget],
          ].map(([label, value]) => (
            <div className="rounded-2xl bg-slate-50 p-4" key={label}>
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-slate-400">
                {label}
              </p>
              <p className="mt-2 font-heading text-sm font-extrabold text-slate-900">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-blue-50 p-5">
          <div className="flex items-center justify-between text-sm font-bold text-slate-700">
            <span>Avance acumulado</span>
            <span className="text-[#0757ff]">{project.progress}%</span>
          </div>
          <div className="mt-3 h-3 rounded-full bg-white">
            <div
              className="h-full rounded-full bg-[#0757ff]"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <section>
            <h4 className="font-heading text-lg font-extrabold text-slate-950">
              Entregables
            </h4>
            <div className="mt-3 space-y-3">
              {project.deliverables.map((item) => (
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3" key={item}>
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="font-heading text-lg font-extrabold text-slate-950">
              Equipo asignado
            </h4>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.team.map((member) => (
                <span
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#2e4a93] text-sm font-extrabold text-white"
                  key={member}
                >
                  {member}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500">
              El detalle permite revisar contexto, avance, entregables,
              responsables y proximas decisiones del proyecto.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};
