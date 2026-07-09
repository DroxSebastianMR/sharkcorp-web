import {
  AlertTriangle,
  CalendarDays,
  ChevronDown,
  Clock3,
  MoreVertical,
  Search,
  TimerReset,
  UserCheck,
} from "lucide-react";

const summaryCards = [
  {
    label: "Empleados presentes",
    value: "142",
    suffix: "/ 150",
    detail: "+2.4% vs ayer",
    tone: "text-emerald-600",
    icon: UserCheck,
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Puntualidad mensual",
    value: "94.2%",
    suffix: "",
    detail: "-0.8% vs mes ant.",
    tone: "text-red-500",
    icon: Clock3,
    iconClass: "bg-blue-50 text-[#0757ff]",
  },
  {
    label: "Permisos pendientes",
    value: "08",
    suffix: "",
    detail: "5 requieren accion",
    tone: "text-slate-600",
    icon: TimerReset,
    iconClass: "bg-amber-50 text-amber-500",
  },
];

const attendanceRows = [
  {
    name: "Carlos Mendoza",
    email: "c.mendoza@sharkcorp.com",
    department: "Tecnologia",
    status: "Presente",
    statusClass: "bg-emerald-100 text-emerald-700",
    entry: "08:52 AM",
    exit: "-",
    avatar: "CM",
    avatarClass: "bg-[#007c91]",
  },
  {
    name: "Ana Lucia Torres",
    email: "a.torres@sharkcorp.com",
    department: "Recursos Humanos",
    status: "Retraso",
    statusClass: "bg-amber-100 text-amber-700",
    entry: "09:15 AM",
    exit: "-",
    avatar: "AT",
    avatarClass: "bg-[#c87d2f]",
  },
  {
    name: "Roberto Gomez",
    email: "r.gomez@sharkcorp.com",
    department: "Ventas",
    status: "Ausente",
    statusClass: "bg-red-100 text-red-700",
    entry: "-",
    exit: "-",
    avatar: "RG",
    avatarClass: "bg-[#17264f]",
  },
  {
    name: "Sofia Villalta",
    email: "s.villalta@sharkcorp.com",
    department: "Marketing",
    status: "Permiso",
    statusClass: "bg-blue-100 text-[#0757ff]",
    entry: "-",
    exit: "-",
    avatar: "SV",
    avatarClass: "bg-[#7c67c7]",
  },
  {
    name: "Diego Martinez",
    email: "d.martinez@sharkcorp.com",
    department: "Finanzas",
    status: "Completado",
    statusClass: "bg-slate-100 text-slate-600",
    entry: "08:05 AM",
    exit: "05:12 PM",
    avatar: "DM",
    avatarClass: "bg-[#3f75aa]",
  },
];

const delayAlerts = [
  {
    name: "Ana Lucia Torres",
    detail: "15 min de retraso - Notificado",
    action: "Gestionar",
  },
  {
    name: "Marcos Silva",
    detail: "32 min de retraso - Sin justificar",
    action: "Enviar alerta",
  },
];

const weeklyBars = [
  { day: "LUN", value: 46 },
  { day: "MAR", value: 66 },
  { day: "MIE", value: 58 },
  { day: "JUE", value: 70 },
  { day: "VIE", value: 78 },
];

export const AttendanceGeneralManagerPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-4 lg:px-10">
      <section className="mb-6">
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Resumen de asistencias
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Monitorea presencia, puntualidad y alertas principales del equipo.
        </p>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        {summaryCards.map(({ label, value, suffix, detail, tone, icon: Icon, iconClass }) => (
          <article
            className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
            key={label}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-600">{label}</p>
                <p className="mt-2 font-heading text-3xl font-extrabold text-slate-950">
                  {value}
                  {suffix ? (
                    <span className="ml-1 text-sm font-bold text-slate-500">
                      {suffix}
                    </span>
                  ) : null}
                </p>
                <p className={`mt-3 text-xs font-extrabold ${tone}`}>{detail}</p>
              </div>
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${iconClass}`}>
                <Icon className="h-6 w-6" strokeWidth={2.5} />
              </span>
            </div>
            <div className="pointer-events-none absolute -bottom-8 right-5 h-24 w-24 rounded-full border-[10px] border-slate-100" />
          </article>
        ))}
      </section>

      <section className="mt-6 grid min-w-0 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
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
                {filter === "12 May - 18 May" ? (
                  <CalendarDays className="h-4 w-4" />
                ) : null}
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
                {attendanceRows.map((row) => (
                  <tr
                    className="border-b border-slate-100 last:border-b-0"
                    key={row.email}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid h-10 w-10 place-items-center rounded-full text-xs font-extrabold text-white ${row.avatarClass}`}
                        >
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
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-extrabold ${row.statusClass}`}
                      >
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

        <aside className="min-w-0 space-y-5">
          <article className="rounded-3xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-extrabold text-slate-950">
                Alertas de retraso hoy
              </h3>
              <button
                className="cursor-pointer font-button text-sm font-bold text-[#0757ff]"
                type="button"
              >
                Ver todo
              </button>
            </div>
            <div className="mt-5 space-y-3">
              {delayAlerts.map((alert) => (
                <div
                  className="grid grid-cols-[44px_minmax(0,1fr)] gap-3 rounded-2xl border border-amber-200 bg-amber-50/40 p-4"
                  key={alert.name}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-amber-100 text-amber-500">
                    <AlertTriangle className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-bold text-slate-950">
                      {alert.name}
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      {alert.detail}
                    </p>
                  </div>
                  <button
                    className="col-span-2 h-8 cursor-pointer rounded-lg border border-amber-300 bg-white px-3 font-button text-xs font-bold text-amber-600 transition hover:bg-amber-100"
                    type="button"
                  >
                    {alert.action}
                  </button>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-[#074fe9] p-5 text-white shadow-[0_18px_38px_rgba(7,87,255,0.22)]">
            <h3 className="font-heading text-lg font-extrabold">
              Resumen semanal
            </h3>
            <p className="mt-3 max-w-sm text-sm font-medium text-blue-100">
              La asistencia promedio subio un 4% comparado a la semana anterior.
            </p>
            <div className="mt-5 flex h-28 items-end gap-4">
              {weeklyBars.map(({ day, value }) => (
                <div className="flex flex-1 flex-col items-center gap-3" key={day}>
                  <div
                    className="w-full rounded-t-lg bg-white/12"
                    style={{ height: `${value}%` }}
                  />
                  <span className="text-[10px] font-extrabold text-blue-100">
                    {day}
                  </span>
                </div>
              ))}
            </div>
          </article>

        </aside>
      </section>
    </div>
  );
};
