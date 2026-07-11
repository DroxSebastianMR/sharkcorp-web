import { ArrowRight, Download, Filter } from "lucide-react";

import type { StrategicTask } from "@/features/tasks/types/tasks.types";

type StrategicTasksTableProps = {
  tasks: StrategicTask[];
};

export const StrategicTasksTable = ({ tasks }: StrategicTasksTableProps) => {
  return (
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
            {tasks.map((task) => (
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
  );
};
