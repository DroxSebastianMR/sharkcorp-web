import { CalendarDays, ChevronDown, MoreVertical, Search } from "lucide-react";

import type { AttendanceRow } from "@/features/attendance/types/attendance.types";

interface AttendanceTableCardProps {
  rows: AttendanceRow[];
}

export const AttendanceTableCard = ({ rows }: AttendanceTableCardProps) => {
  return (
    <article className="min-w-0 rounded-3xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex flex-wrap gap-3 border-b border-slate-100 p-4">
        <div className="flex h-10 min-w-[220px] flex-1 items-center gap-3 rounded-xl bg-slate-100 px-4 text-slate-400">
          <Search className="h-4 w-4" />
          <span className="text-sm font-medium">Filtrar por empleado...</span>
        </div>
        {["Departamento", "Estado", "12 May - 18 May"].map((filter) => (
          <button
            className="flex h-10 cursor-pointer items-center gap-2 rounded-xl bg-slate-100 px-3 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
            key={filter}
            type="button"
          >
            {filter === "12 May - 18 May" ? <CalendarDays className="h-4 w-4" /> : null}
            {filter}
            <ChevronDown className="h-4 w-4" />
          </button>
        ))}
        <button
          className="h-10 cursor-pointer rounded-xl px-3 font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-50"
          type="button"
        >
          Limpiar filtros
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] uppercase tracking-[0.12em] text-slate-500">
              <th className="px-4 py-3 font-extrabold">Empleado</th>
              <th className="px-4 py-3 font-extrabold">Departamento</th>
              <th className="px-4 py-3 font-extrabold">Estado</th>
              <th className="px-4 py-3 font-extrabold">Entrada</th>
              <th className="px-4 py-3 font-extrabold">Salida</th>
              <th className="px-4 py-3 text-right font-extrabold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr className="border-b border-slate-100 last:border-b-0" key={row.email}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-10 w-10 place-items-center rounded-full text-xs font-extrabold text-white ${row.avatarClass}`}>
                      {row.avatar}
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-bold text-slate-950">
                        {row.name}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {row.email}
                      </span>
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm font-medium text-slate-600">
                  {row.department}
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-extrabold ${row.statusClass}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                  {row.entry}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-slate-600">
                  {row.exit}
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    aria-label="Mas opciones"
                    className="inline-grid h-9 w-9 cursor-pointer place-items-center rounded-full text-slate-500 transition hover:bg-slate-100"
                    type="button"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
        <p className="text-sm font-medium text-slate-500">
          Mostrando 5 de 150 empleados
        </p>
        <div className="flex gap-2">
          {[1, 2, 3].map((page) => (
            <button
              className={[
                "h-9 w-9 cursor-pointer rounded-xl font-button text-sm font-bold transition",
                page === 1
                  ? "bg-[#0757ff] text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-[#0757ff]/40 hover:text-[#0757ff]",
              ].join(" ")}
              key={page}
              type="button"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
};
