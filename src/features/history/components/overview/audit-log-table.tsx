import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

import type {
  AuditLogRow,
  HistoryPaginationItem,
} from "@/features/history/types/history.types";

type AuditLogTableProps = {
  paginationItems: HistoryPaginationItem[];
  rows: AuditLogRow[];
};

export const AuditLogTable = ({
  paginationItems,
  rows,
}: AuditLogTableProps) => {
  return (
    <section className="mt-7 overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="bg-slate-50 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
              <th className="px-5 py-4">Fecha y hora</th>
              <th className="px-5 py-4">Usuario</th>
              <th className="px-5 py-4">Accion</th>
              <th className="px-5 py-4">Modulo</th>
              <th className="px-5 py-4">Direccion IP</th>
              <th className="px-5 py-4">Estado</th>
              <th className="px-5 py-4 text-right">Detalles</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr className="border-t border-slate-100" key={`${row.user}-${row.date}`}>
                <td className="px-5 py-5 text-sm font-medium text-slate-600">
                  {row.date}
                </td>
                <td className="px-5 py-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-50 font-heading text-xs font-extrabold text-[#0757ff]">
                      {row.initials}
                    </span>
                    <span className="font-heading text-sm font-extrabold text-slate-950">
                      {row.user}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-5 text-sm font-medium text-slate-700">
                  {row.action}
                </td>
                <td className="px-5 py-5">
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-slate-600">
                    {row.module}
                  </span>
                </td>
                <td className="px-5 py-5 font-mono text-sm text-slate-600">
                  {row.ip}
                </td>
                <td className="px-5 py-5">
                  <span
                    className={`flex items-center gap-2 text-xs font-extrabold uppercase ${row.statusClass}`}
                  >
                    <span className={`h-2 w-2 rounded-full ${row.dotClass}`} />
                    {row.status}
                  </span>
                </td>
                <td className="px-5 py-5">
                  <button
                    aria-label={`Ver detalle de ${row.action}`}
                    className="ml-auto grid h-8 w-8 cursor-pointer place-items-center rounded-lg text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff]"
                    type="button"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-500">
        <p>Mostrando 1-4 de 1,284 registros</p>
        <div className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          {paginationItems.map((page) =>
            page === "..." ? (
              <span key={page}>...</span>
            ) : (
              <button
                className={[
                  "grid h-8 w-8 cursor-pointer place-items-center rounded-lg font-button text-sm font-bold",
                  page === 1
                    ? "bg-[#0757ff] text-white"
                    : "bg-white text-slate-700 hover:bg-blue-50 hover:text-[#0757ff]",
                ].join(" ")}
                key={page}
                type="button"
              >
                {page}
              </button>
            ),
          )}
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
};
