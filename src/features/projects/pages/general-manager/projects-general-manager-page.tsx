import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  FolderKanban,
  MoreVertical,
  Plus,
  Users,
  X,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

const projectStats = [
  { label: "Proyectos totales", value: "12", icon: FolderKanban },
  { label: "Progreso promedio", value: "74%", icon: ArrowUpRight },
  { label: "Fechas limite proximas", value: "3", icon: AlertCircle },
  { label: "Miembros activos", value: "24", icon: Users },
];

const projects = [
  {
    title: "Migracion Cloud Ph-2",
    status: "En progreso",
    statusClass: "bg-blue-50 text-[#0757ff]",
    client: "SharkCorp Enterprise",
    description:
      "Optimizacion de infraestructura global para mejorar escalabilidad, seguridad y cumplimiento.",
    progress: 65,
    date: "24 Oct 2023",
    team: ["AM", "CG", "LS"],
    priority: "Alta",
    budget: "$84,000",
    owner: "Ana Duarte",
    deliverables: ["Auditoria cloud", "Migracion controlada", "Monitoreo post despliegue"],
  },
  {
    title: "Alpha UI Revamp",
    status: "En pausa",
    statusClass: "bg-slate-100 text-slate-600",
    client: "Alpha Corp",
    description:
      "Rediseño completo de la interfaz del sistema corporativo y sus tokens visuales.",
    progress: 24,
    date: "12 Nov 2023",
    team: ["JR", "EV"],
    priority: "Media",
    budget: "$38,500",
    owner: "Carlos Paredes",
    deliverables: ["Sistema visual", "Componentes base", "QA de accesibilidad"],
  },
  {
    title: "Auditoria financiera Q3",
    status: "Completado",
    statusClass: "bg-emerald-100 text-emerald-700",
    client: "Global Trading Ltd.",
    description:
      "Auditoria integral de gastos internos y conciliacion de registros fiscales.",
    progress: 100,
    date: "30 Sep 2023",
    team: ["EO", "RM", "AT"],
    priority: "Critica",
    budget: "$52,000",
    owner: "Elena Okoro",
    deliverables: ["Informe ejecutivo", "Validacion fiscal", "Cierre documental"],
  },
];

export const ProjectsGeneralManagerPage = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Proyectos empresariales
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Supervisa iniciativas, avance operativo y entregables clave.
          </p>
        </div>

        <button
          className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
          onClick={() => navigate(PATHS.PROJECTS.CREATE)}
          type="button"
        >
          <Plus className="h-4 w-4" />
          Crear proyecto
        </button>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {projectStats.map(({ label, value, icon: Icon }) => (
          <article
            className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
            key={label}
          >
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#0757ff]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-slate-500">{label}</p>
                <strong className="font-heading text-2xl font-extrabold text-slate-950">
                  {value}
                </strong>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-7 grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <button
            className="group flex min-h-[310px] cursor-pointer flex-col rounded-2xl bg-white p-5 text-left shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(14,43,92,0.12)]"
            key={project.title}
            onClick={() => setSelectedProject(project)}
            type="button"
          >
            <div className="flex items-start justify-between">
              <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${project.statusClass}`}>
                {project.status}
              </span>
              <MoreVertical className="h-4 w-4 text-slate-400 transition group-hover:text-[#0757ff]" />
            </div>
            <h3 className="mt-5 font-heading text-2xl font-extrabold leading-tight text-slate-950">
              {project.title}
            </h3>
            <p className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#2e4a93]">
              <Building2 className="h-3.5 w-3.5" />
              {project.client}
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
              {project.description}
            </p>
            <div className="mt-auto pt-6">
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Progreso general</span>
                <span className="text-[#0757ff]">{project.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className={[
                    "h-full rounded-full",
                    project.progress === 100 ? "bg-emerald-500" : "bg-[#0757ff]",
                  ].join(" ")}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CalendarDays className="h-4 w-4" />
                  {project.date}
                </span>
                <div className="flex -space-x-2">
                  {project.team.map((member) => (
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full bg-[#2e4a93] text-[10px] font-extrabold text-white ring-2 ring-white"
                      key={member}
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </section>

      {selectedProject ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 px-5 backdrop-blur-sm">
          <article className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${selectedProject.statusClass}`}>
                  {selectedProject.status}
                </span>
                <h3 className="mt-4 font-heading text-3xl font-extrabold text-[#083da8]">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {selectedProject.description}
                </p>
              </div>
              <button
                aria-label="Cerrar detalle"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff]"
                onClick={() => setSelectedProject(null)}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                ["Cliente", selectedProject.client],
                ["Responsable", selectedProject.owner],
                ["Prioridad", selectedProject.priority],
                ["Presupuesto", selectedProject.budget],
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
                <span className="text-[#0757ff]">{selectedProject.progress}%</span>
              </div>
              <div className="mt-3 h-3 rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-[#0757ff]"
                  style={{ width: `${selectedProject.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <section>
                <h4 className="font-heading text-lg font-extrabold text-slate-950">
                  Entregables
                </h4>
                <div className="mt-3 space-y-3">
                  {selectedProject.deliverables.map((item) => (
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
                  {selectedProject.team.map((member) => (
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
      ) : null}
    </div>
  );
};
