import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ClipboardList,
  Download,
  Filter,
  ListChecks,
  Plus,
  Share2,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";
import tasksMascot from "@/assets/img/intranet/tareas.png";

const taskStats = [
  {
    label: "Tareas totales",
    value: "42",
    icon: ClipboardList,
    color: "bg-blue-50 text-[#0757ff]",
  },
  {
    label: "Pendientes de revision",
    value: "12",
    icon: ListChecks,
    color: "bg-indigo-50 text-[#2e4a93]",
  },
  {
    label: "Tareas asignadas",
    value: "28",
    icon: Share2,
    color: "bg-slate-100 text-slate-600",
  },
];

const strategicTasks = [
  {
    title: "Auditoria trimestral Q3",
    detail: "Revision de balances financieros",
    priority: "Alta",
    priorityClass: "bg-red-100 text-red-700",
    status: "En progreso",
    statusColor: "bg-blue-500",
    due: "24 Oct 2023",
    action: "Detalles",
  },
  {
    title: "Expansion Latam Phase 1",
    detail: "Analisis de mercado Colombia y Chile",
    priority: "Media",
    priorityClass: "bg-slate-200 text-slate-600",
    status: "Pendiente",
    statusColor: "bg-slate-500",
    due: "15 Nov 2023",
    action: "Detalles",
  },
  {
    title: "Renovacion de infraestructura TI",
    detail: "Migracion a nuevos servidores de seguridad",
    priority: "Alta",
    priorityClass: "bg-red-100 text-red-700",
    status: "Completada",
    statusColor: "bg-[#0757ff]",
    due: "10 Oct 2023",
    action: "Recibo",
  },
  {
    title: "Plan de bienestar RRHH",
    detail: "Implementacion de jornadas flexibles",
    priority: "Baja",
    priorityClass: "bg-blue-50 text-[#2e4a93]",
    status: "Pendiente",
    statusColor: "bg-slate-500",
    due: "01 Dic 2023",
    action: "Detalles",
  },
];

const workload = [
  { label: "TI (Cloud Core)", value: 85 },
  { label: "Finanzas", value: 42 },
];

export const TasksGeneralManagerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Gestion de tareas
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Supervisa responsabilidades, prioridades y carga operativa por area.
          </p>
        </div>

        <button
          className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
          onClick={() => navigate(PATHS.TASKS.CREATE)}
          type="button"
        >
          <Plus className="h-4 w-4" />
          Nueva tarea
        </button>
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-3">
        {taskStats.map(({ label, value, icon: Icon, color }) => (
          <article
            className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
            key={label}
          >
            <div className="flex items-center gap-5">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${color}`}>
                <Icon className="h-6 w-6" strokeWidth={2.3} />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <strong className="mt-1 block font-heading text-4xl font-extrabold leading-none text-slate-950">
                  {value}
                </strong>
              </div>
            </div>
          </article>
        ))}
      </section>

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

      <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
          <h3 className="font-heading text-xl font-extrabold text-slate-950">
            Revision de tareas estrategicas
          </h3>
          <div className="flex gap-3">
            <button
              className="flex h-9 cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              <Filter className="h-4 w-4" />
              Filtrar
            </button>
            <button
              className="flex h-9 cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              <Download className="h-4 w-4" />
              Exportar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr className="bg-slate-50 text-xs font-extrabold text-slate-500">
                <th className="px-5 py-4">Tarea estrategica</th>
                <th className="px-5 py-4">Prioridad</th>
                <th className="px-5 py-4">Estado</th>
                <th className="px-5 py-4">Limite</th>
                <th className="px-5 py-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {strategicTasks.map((task) => (
                <tr className="border-t border-slate-100" key={task.title}>
                  <td className="px-5 py-4">
                    <p className="font-heading text-sm font-extrabold text-slate-950">
                      {task.title}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {task.detail}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase ${task.priorityClass}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <span className={`h-2 w-2 rounded-full ${task.statusColor}`} />
                      {task.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-slate-600">
                    {task.due}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      className="cursor-pointer font-button text-sm font-bold text-[#0757ff] transition hover:text-[#064be0]"
                      type="button"
                    >
                      {task.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 bg-slate-50 font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-50"
          type="button"
        >
          Ver todas las tareas estrategicas
          <ArrowRight className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
};
