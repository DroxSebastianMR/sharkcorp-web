import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Printer,
  Search,
  Share2,
} from "lucide-react";

import type {
  AttendanceDetailRow,
  GeneratedReport,
  WeeklyComparisonItem,
} from "@/features/attendance/types/attendance.types";

interface RecordsReportsContentProps {
  weeklyComparison: WeeklyComparisonItem[];
  generatedReports: GeneratedReport[];
  attendanceDetails: AttendanceDetailRow[];
}

export const RecordsReportsContent = ({
  weeklyComparison,
  generatedReports,
  attendanceDetails,
}: RecordsReportsContentProps) => {
  return (
    <>
      <section className="mt-7 grid items-stretch gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
        <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-heading text-2xl font-extrabold text-slate-950">
              Asistencia semanal comparativa
            </h3>
            <div className="flex items-center gap-5 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#0757ff]" />
                Actual
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-slate-300" />
                Pasada
              </span>
            </div>
          </div>

          <div className="mt-8 flex h-[260px] items-end justify-around gap-8 px-6">
            {weeklyComparison.map((item) => (
              <div className="flex h-full flex-1 flex-col items-center justify-end" key={item.day}>
                <div className="flex h-[210px] items-end gap-3">
                  <div
                    className="w-8 rounded-t-sm bg-[#0757ff]"
                    style={{ height: `${item.current}%` }}
                  />
                  <div
                    className="w-8 rounded-t-sm bg-slate-300"
                    style={{ height: `${item.previous}%` }}
                  />
                </div>
                <span className="mt-4 text-sm font-semibold text-slate-800">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-2xl bg-white p-6 text-slate-950 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <h3 className="font-heading text-2xl font-extrabold text-[#083da8]">
            Reportes generados
          </h3>
          <p className="mt-3 text-sm font-medium text-slate-500">
            Descargas disponibles
          </p>

          <div className="mt-7 space-y-4">
            {generatedReports.map(({ name, detail, icon: Icon }) => (
              <button
                className="flex w-full cursor-pointer items-center gap-4 rounded-xl bg-blue-50 p-4 text-left text-slate-800 transition hover:bg-blue-100"
                key={name}
                type="button"
              >
                <Icon className="h-5 w-5 shrink-0 text-[#0757ff]" />
                <span className="min-w-0">
                  <span className="block truncate font-heading text-sm font-extrabold">
                    {name}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {detail}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-6 rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="grid gap-4 border-b border-slate-100 p-5 xl:grid-cols-[1fr_1fr_1fr_auto]">
          {["Rango de fecha", "Departamento", "Empleado"].map((label) => (
            <label className="space-y-2" key={label}>
              <span className="text-xs font-semibold text-slate-600">
                {label}
              </span>
              <button
                className="flex h-10 w-full cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
                type="button"
              >
                {label === "Rango de fecha" ? (
                  <span className="flex items-center gap-3">
                    <CalendarDays className="h-4 w-4" />
                    01 Oct, 2023 - 31 Oct, 2023
                  </span>
                ) : (
                  `Todos los ${label.toLowerCase()}s`
                )}
                <ChevronDown className="h-4 w-4" />
              </button>
            </label>
          ))}
          <button
            className="mt-auto flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white transition hover:bg-[#064be0]"
            type="button"
          >
            <Search className="h-4 w-4" />
            Aplicar
          </button>
        </div>

        <div className="flex items-center justify-between px-6 py-6">
          <h3 className="font-heading text-xl font-extrabold text-slate-950">
            Detalle de asistencias
          </h3>
          <div className="flex gap-3">
            {[Share2, Printer].map((Icon, index) => (
              <button
                aria-label={index === 0 ? "Compartir" : "Imprimir"}
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-xl text-slate-600 transition hover:bg-slate-100"
                key={index}
                type="button"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead className="bg-slate-100">
              <tr className="text-xs font-extrabold text-slate-600">
                {["Empleado", "Departamento", "Fecha", "Entrada", "Salida", "Estado", "Acciones"].map((head) => (
                  <th className="px-6 py-4" key={head}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attendanceDetails.map((row) => (
                <tr className="border-b border-slate-100 last:border-b-0" key={row.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className={`grid h-10 w-10 place-items-center rounded-full text-xs font-extrabold ${row.avatarClass}`}>
                        {row.initials}
                      </span>
                      <span>
                        <span className="block font-heading text-sm font-bold text-slate-950">{row.name}</span>
                        <span className="text-xs font-medium text-slate-500">{row.id}</span>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{row.department}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{row.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{row.entry}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{row.exit}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${row.statusClass}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="inline-grid h-9 w-9 cursor-pointer place-items-center rounded-xl text-[#0757ff] transition hover:bg-blue-50" type="button">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
          <p className="text-sm font-medium text-slate-500">
            Mostrando 4 de 128 registros
          </p>
          <div className="flex gap-2">
            <button className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-slate-200 text-slate-400 transition hover:text-[#0757ff]" type="button">
              <ChevronLeft className="h-4 w-4" />
            </button>
            {[1, 2, 3].map((page) => (
              <button
                className={[
                  "h-9 w-9 cursor-pointer rounded-lg font-button text-sm font-bold transition",
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
            <button className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:text-[#0757ff]" type="button">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
