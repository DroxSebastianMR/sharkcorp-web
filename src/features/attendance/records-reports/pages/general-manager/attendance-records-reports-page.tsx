import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileSpreadsheet,
  FileText,
  Filter,
  FilePlus2,
  Plus,
  Printer,
  Search,
  Share2,
} from "lucide-react";

const weeklyComparison = [
  { day: "Lunes", current: 82, previous: 54 },
  { day: "Martes", current: 90, previous: 68 },
  { day: "Miercoles", current: 54, previous: 62 },
  { day: "Jueves", current: 96, previous: 76 },
  { day: "Viernes", current: 104, previous: 82 },
];

const generatedReports = [
  {
    name: "Reporte_Asistencia_Semanal",
    detail: "PDF - 2.4 MB",
    icon: FileText,
  },
  {
    name: "Metricas_RRHH_Q3",
    detail: "Excel - 1.1 MB",
    icon: FileSpreadsheet,
  },
  {
    name: "Nomina_Integrada",
    detail: "PDF - 4.8 MB",
    icon: FileText,
  },
];

const attendanceDetails = [
  {
    initials: "EG",
    name: "Elena Garrido",
    id: "ID: SK-2041",
    department: "Operaciones",
    date: "Oct 24, 2023",
    entry: "08:05 AM",
    exit: "05:15 PM",
    status: "Puntual",
    statusClass: "bg-emerald-100 text-emerald-700",
    avatarClass: "bg-slate-200 text-slate-600",
  },
  {
    initials: "MR",
    name: "Marcos Ruiz",
    id: "ID: SK-2055",
    department: "Tecnologia",
    date: "Oct 24, 2023",
    entry: "08:45 AM",
    exit: "05:30 PM",
    status: "Retraso",
    statusClass: "bg-amber-100 text-amber-700",
    avatarClass: "bg-blue-100 text-[#0757ff]",
  },
  {
    initials: "SA",
    name: "Sofia Alarcon",
    id: "ID: SK-2068",
    department: "Marketing",
    date: "Oct 24, 2023",
    entry: "-:-",
    exit: "-:-",
    status: "Inasistencia",
    statusClass: "bg-red-100 text-red-700",
    avatarClass: "bg-indigo-100 text-indigo-600",
  },
  {
    initials: "JP",
    name: "Julian Parra",
    id: "ID: SK-2089",
    department: "Operaciones",
    date: "Oct 24, 2023",
    entry: "07:55 AM",
    exit: "04:55 PM",
    status: "Puntual",
    statusClass: "bg-emerald-100 text-emerald-700",
    avatarClass: "bg-slate-300 text-slate-700",
  },
];

export const AttendanceRecordsReportsPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Registro y reportes
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Gestiona registros, filtros y reportes consolidados de asistencia.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
            type="button"
          >
            <FilePlus2 className="h-4 w-4" />
            Generar reporte
          </button>
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-slate-200 px-5 font-button text-sm font-semibold text-slate-700 transition hover:bg-slate-300"
            type="button"
          >
            <Filter className="h-4 w-4" />
            Filtros avanzados
          </button>
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl border border-[#0757ff]/20 bg-white px-5 font-button text-sm font-bold text-[#0757ff] shadow-sm transition hover:bg-blue-50"
            type="button"
          >
            <Plus className="h-4 w-4" />
            Nuevo registro
          </button>
        </div>
      </section>

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

          <button
            className="mt-8 h-12 w-full cursor-pointer rounded-xl border border-[#0757ff]/20 bg-[#0757ff] font-button text-sm font-bold text-white transition hover:bg-[#064be0]"
            type="button"
          >
            Ver historico
          </button>
        </aside>
      </section>

      <section className="mt-6 rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="grid gap-4 border-b border-slate-100 p-5 xl:grid-cols-[1fr_1fr_1fr_auto]">
          <label className="space-y-2">
            <span className="text-xs font-semibold text-slate-600">
              Rango de fecha
            </span>
            <button
              className="flex h-10 w-full cursor-pointer items-center gap-3 rounded-xl bg-slate-100 px-4 text-left font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              <CalendarDays className="h-4 w-4" />
              01 Oct, 2023 - 31 Oct, 2023
            </button>
          </label>
          <label className="space-y-2">
            <span className="text-xs font-semibold text-slate-600">
              Departamento
            </span>
            <button
              className="flex h-10 w-full cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              Todos los departamentos
              <ChevronDown className="h-4 w-4" />
            </button>
          </label>
          <label className="space-y-2">
            <span className="text-xs font-semibold text-slate-600">
              Empleado
            </span>
            <button
              className="flex h-10 w-full cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              Todos los empleados
              <ChevronDown className="h-4 w-4" />
            </button>
          </label>
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
            <button
              aria-label="Compartir"
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-xl text-slate-600 transition hover:bg-slate-100"
              type="button"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              aria-label="Imprimir"
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-xl text-slate-600 transition hover:bg-slate-100"
              type="button"
            >
              <Printer className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead className="bg-slate-100">
              <tr className="text-xs font-extrabold text-slate-600">
                <th className="px-6 py-4">Empleado</th>
                <th className="px-6 py-4">Departamento</th>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Entrada</th>
                <th className="px-6 py-4">Salida</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-right">Acciones</th>
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
                        <span className="block font-heading text-sm font-bold text-slate-950">
                          {row.name}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {row.id}
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    {row.department}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    {row.date}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    {row.entry}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    {row.exit}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${row.statusClass}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      aria-label="Ver detalle"
                      className="inline-grid h-9 w-9 cursor-pointer place-items-center rounded-xl text-[#0757ff] transition hover:bg-blue-50"
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

        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
          <p className="text-sm font-medium text-slate-500">
            Mostrando 4 de 128 registros
          </p>
          <div className="flex gap-2">
            <button
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-slate-200 text-slate-400 transition hover:text-[#0757ff]"
              type="button"
            >
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
            <button
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:text-[#0757ff]"
              type="button"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
