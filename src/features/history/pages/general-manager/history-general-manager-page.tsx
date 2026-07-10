import {
  AlertTriangle,
  BarChart3,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Search,
  SlidersHorizontal,
  Users,
} from "lucide-react";

const stats = [
  {
    label: "Total eventos hoy",
    value: "1,284",
    detail: "+12% vs ayer",
    icon: BarChart3,
    iconClass: "bg-blue-50 text-[#0757ff]",
    detailClass: "text-emerald-600",
  },
  {
    label: "Alertas criticas",
    value: "12",
    detail: "Requiere atencion inmediata",
    icon: AlertTriangle,
    iconClass: "bg-red-50 text-red-600",
    detailClass: "text-slate-500",
  },
  {
    label: "Usuarios activos",
    value: "84",
    detail: "Sesiones concurrentes",
    icon: Users,
    iconClass: "bg-blue-50 text-[#0757ff]",
    detailClass: "text-slate-500",
  },
];

const auditRows = [
  {
    date: "Oct 24, 2024 - 14:22:15",
    user: "Ana Martinez",
    initials: "AM",
    action: "Creacion de cuenta",
    module: "RRHH",
    ip: "192.168.1.45",
    status: "Exito",
    statusClass: "text-emerald-600",
    dotClass: "bg-emerald-500",
  },
  {
    date: "Oct 24, 2024 - 13:05:42",
    user: "Carlos Ruiz",
    initials: "CR",
    action: "Acceso fallido",
    module: "Seguridad",
    ip: "10.0.4.128",
    status: "Fallido",
    statusClass: "text-red-600",
    dotClass: "bg-red-500",
  },
  {
    date: "Oct 24, 2024 - 12:45:00",
    user: "Sistema Automatico",
    initials: "SA",
    action: "Backup de archivos",
    module: "Documentos",
    ip: "127.0.0.1",
    status: "Pendiente",
    statusClass: "text-[#0757ff]",
    dotClass: "bg-[#0757ff]",
  },
  {
    date: "Oct 24, 2024 - 11:12:10",
    user: "Laura Chen",
    initials: "LC",
    action: "Cambio de rol",
    module: "RRHH",
    ip: "192.168.1.12",
    status: "Exito",
    statusClass: "text-emerald-600",
    dotClass: "bg-emerald-500",
  },
];

export const HistoryGeneralManagerPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Historial de auditoria
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Registro centralizado de actividades, accesos y cambios en el sistema.
        </p>
      </section>

      <section className="mt-7 grid gap-4 xl:grid-cols-3">
        {stats.map(({ label, value, detail, icon: Icon, iconClass, detailClass }) => (
          <article
            className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
            key={label}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <strong className="mt-1 block font-heading text-3xl font-extrabold text-slate-950">
                  {value}
                </strong>
                <p className={`mt-2 text-xs font-extrabold ${detailClass}`}>
                  {detail}
                </p>
              </div>
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${iconClass}`}>
                <Icon className="h-5 w-5" />
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-7 rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-heading text-2xl font-extrabold text-slate-950">
            Filtros avanzados
          </h3>
          <button
            className="flex cursor-pointer items-center gap-2 font-button text-sm font-bold text-[#0757ff]"
            type="button"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Limpiar filtros
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-600">
              Buscar
            </span>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
              <input
                className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                placeholder="Usuario o accion..."
                type="text"
              />
              <Search className="h-4 w-4 text-slate-500" />
            </div>
          </label>

          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-600">
              Rango de fecha
            </span>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
              <input
                className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none"
                type="date"
              />
              <CalendarDays className="h-4 w-4 text-slate-500" />
            </div>
          </label>

          {["Categoria", "Severidad"].map((label) => (
            <label className="block" key={label}>
              <span className="font-heading text-sm font-bold text-slate-600">
                {label}
              </span>
              <button
                className="mt-2 flex h-12 w-full cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
                type="button"
              >
                Todos
                <ChevronDown className="h-4 w-4" />
              </button>
            </label>
          ))}
        </div>
      </section>

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
              {auditRows.map((row) => (
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
                    <span className={`flex items-center gap-2 text-xs font-extrabold uppercase ${row.statusClass}`}>
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
            {[1, 2, 3].map((page) => (
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
            ))}
            <span>...</span>
            <span>321</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </section>
    </div>
  );
};
