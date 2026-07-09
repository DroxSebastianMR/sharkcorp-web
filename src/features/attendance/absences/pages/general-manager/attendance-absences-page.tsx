import {
  AlertTriangle,
  BriefcaseMedical,
  ChevronRight,
  Download,
  Filter,
  Plus,
  TrendingUp,
} from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const summaryCards = [
  {
    value: "14",
    label: "Ausencias hoy",
    detail: "+12%",
    icon: AlertTriangle,
    iconClass: "bg-red-50 text-red-600",
    detailClass: "text-red-600",
  },
  {
    value: "32",
    label: "Bajas medicas activas",
    detail: "-4%",
    icon: BriefcaseMedical,
    iconClass: "bg-blue-50 text-[#0757ff]",
    detailClass: "text-[#0757ff]",
  },
  {
    value: "3.8%",
    label: "Indice de ausentismo",
    detail: "Promedio",
    icon: TrendingUp,
    iconClass: "bg-slate-100 text-slate-600",
    detailClass: "text-slate-600",
  },
];

const absenceChartData = [
  { department: "IT", justified: 18, unjustified: 22 },
  { department: "Ventas", justified: 36, unjustified: 12 },
  { department: "RRHH", justified: 12, unjustified: 24 },
  { department: "Logistica", justified: 28, unjustified: 18 },
  { department: "Finanzas", justified: 20, unjustified: 16 },
  { department: "Operaciones", justified: 38, unjustified: 10 },
];

const recurrenceAlerts = [
  {
    name: "Ricardo Mendoza",
    detail: "5 faltas injustificadas (mes)",
    avatar: "RM",
    color: "bg-[#007c91]",
  },
  {
    name: "Sofia Guerrero",
    detail: "Patron de lunes ausente (3/4)",
    avatar: "SG",
    color: "bg-[#7c67c7]",
  },
];

const upcomingLeaves = [
  {
    month: "OCT",
    day: "14",
    title: "Vacaciones: Luis Paez",
    detail: "Soporte Tecnico - 10 dias",
  },
  {
    month: "OCT",
    day: "18",
    title: "Cirugia: Elena Rivas",
    detail: "Administracion - 5 dias",
  },
  {
    month: "OCT",
    day: "22",
    title: "Paternidad: Roberto T.",
    detail: "Ventas - 15 dias",
  },
];

const incidents = [
  {
    initials: "AM",
    name: "Andrea Montes",
    id: "ID: SK-9042",
    date: "Hoy, 08:30 AM",
    type: "Injustificada",
    typeClass: "bg-red-100 text-red-700",
    department: "Logistica",
    status: "Pendiente revision",
    statusColor: "bg-red-500",
  },
  {
    initials: "JS",
    name: "Javier Solis",
    id: "ID: SK-8812",
    date: "12 Oct, 2023",
    type: "Medica",
    typeClass: "bg-blue-100 text-[#0757ff]",
    department: "Operaciones",
    status: "Documentado",
    statusColor: "bg-[#2e4a93]",
  },
  {
    initials: "MC",
    name: "Marcos Cardenas",
    id: "ID: SK-7721",
    date: "11 Oct, 2023",
    type: "Personal",
    typeClass: "bg-slate-200 text-slate-700",
    department: "Ventas",
    status: "Justificado",
    statusColor: "bg-slate-400",
  },
];

type AbsenceTooltipProps = {
  active?: boolean;
  label?: string;
  payload?: {
    dataKey?: string | number;
    name?: string;
    value?: number | string;
  }[];
};

const ChartTooltip = ({ active, payload, label }: AbsenceTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
      <p className="font-heading text-xs font-extrabold text-slate-950">
        {label}
      </p>
      {payload.map((item) => (
        <p className="mt-1 text-xs font-semibold text-slate-600" key={item.dataKey}>
          {item.name}: {item.value}
        </p>
      ))}
    </div>
  );
};

export const AttendanceAbsencesPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Faltas y ausencias
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Analiza ausencias, bajas y reincidencias criticas del equipo.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl border border-[#0757ff]/20 bg-white px-5 font-button text-sm font-bold text-[#0757ff] shadow-sm transition hover:bg-blue-50"
            type="button"
          >
            <Download className="h-4 w-4" />
            Descargar reporte
          </button>
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
            type="button"
          >
            <Plus className="h-4 w-4" />
            Nueva incidencia
          </button>
        </div>
      </section>

      <section className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-6">
          <section className="grid gap-4 md:grid-cols-3">
            {summaryCards.map(({ value, label, detail, icon: Icon, iconClass, detailClass }) => (
              <article
                className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
                key={label}
              >
                <div className="flex items-start justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${iconClass}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`text-xs font-extrabold ${detailClass}`}>
                    {detail}
                  </span>
                </div>
                <p className="mt-8 font-heading text-3xl font-extrabold text-slate-950">
                  {value}
                </p>
                <p className="mt-1 max-w-[140px] text-sm font-medium leading-tight text-slate-600">
                  {label}
                </p>
              </article>
            ))}
          </section>

          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-slate-950">
                  Ausentismo por departamento
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Distribucion mensual de inasistencias totales.
                </p>
              </div>
              <div className="flex rounded-xl bg-slate-100 p-1">
                <button
                  className="h-9 cursor-pointer rounded-lg bg-white px-5 font-button text-xs font-bold text-[#0757ff] shadow-sm"
                  type="button"
                >
                  Mensual
                </button>
                <button
                  className="h-9 cursor-pointer rounded-lg px-5 font-button text-xs font-semibold text-slate-600 transition hover:text-[#0757ff]"
                  type="button"
                >
                  Trimestral
                </button>
              </div>
            </div>

            <div className="mt-7 h-[260px]">
              <ResponsiveContainer height="100%" width="100%">
                <BarChart data={absenceChartData}>
                  <XAxis
                    axisLine={false}
                    dataKey="department"
                    tickLine={false}
                    tickMargin={12}
                    tick={{ fill: "#0f1f3d", fontSize: 11, fontWeight: 700 }}
                  />
                  <Bar
                    dataKey="justified"
                    fill="#dfe7f7"
                    name="Justificadas"
                    radius={[0, 0, 8, 8]}
                    stackId="a"
                  />
                  <Bar
                    dataKey="unjustified"
                    fill="#0757ff"
                    name="Injustificadas"
                    radius={[8, 8, 0, 0]}
                    stackId="a"
                  />
                  <Tooltip content={<ChartTooltip />} cursor={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <article className="rounded-3xl border border-red-100 bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)]">
            <div className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-4 w-4" />
              <h3 className="font-heading text-sm font-extrabold uppercase">
                Alertas de reincidencia
              </h3>
            </div>
            <div className="mt-5 space-y-3">
              {recurrenceAlerts.map((alert) => (
                <button
                  className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-red-100 bg-red-50/30 p-4 text-left transition hover:bg-red-50"
                  key={alert.name}
                  type="button"
                >
                  <span className={`grid h-11 w-11 place-items-center rounded-full text-xs font-extrabold text-white ${alert.color}`}>
                    {alert.avatar}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-heading text-sm font-extrabold text-slate-950">
                      {alert.name}
                    </span>
                    <span className="text-xs font-bold text-red-600">
                      {alert.detail}
                    </span>
                  </span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </button>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-xl font-extrabold text-slate-950">
                Bajas proximas
              </h3>
              <button
                className="cursor-pointer font-button text-xs font-bold text-[#0757ff]"
                type="button"
              >
                Ver calendario
              </button>
            </div>
            <div className="mt-5 space-y-4">
              {upcomingLeaves.map((leave) => (
                <div className="flex gap-4" key={`${leave.day}-${leave.title}`}>
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-50 text-center">
                    <span>
                      <span className="block text-[10px] font-extrabold text-[#0757ff]">
                        {leave.month}
                      </span>
                      <strong className="font-heading text-lg font-extrabold text-[#0757ff]">
                        {leave.day}
                      </strong>
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-extrabold text-slate-950">
                      {leave.title}
                    </h4>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {leave.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>

      <section className="mt-6 rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
          <h2 className="font-heading text-xl font-extrabold text-slate-950">
            Incidencias recientes
          </h2>
          <div className="flex gap-3">
            <button
              className="h-10 cursor-pointer rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              Todos los estados
            </button>
            <button
              aria-label="Filtrar"
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead className="bg-slate-100">
              <tr className="text-xs font-extrabold uppercase tracking-[0.08em] text-slate-600">
                <th className="px-6 py-4">Empleado</th>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4">Departamento</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-right">Accion</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident) => (
                <tr
                  className="border-b border-slate-100 last:border-b-0"
                  key={incident.id}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-100 text-xs font-extrabold text-[#0757ff]">
                        {incident.initials}
                      </span>
                      <span>
                        <span className="block font-heading text-sm font-extrabold text-slate-950">
                          {incident.name}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {incident.id}
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    {incident.date}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase ${incident.typeClass}`}>
                      {incident.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    {incident.department}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                      <span className={`h-2 w-2 rounded-full ${incident.statusColor}`} />
                      {incident.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="cursor-pointer font-button text-sm font-extrabold text-[#0757ff] transition hover:text-[#064be0]"
                      type="button"
                    >
                      Gestionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
          <p className="text-sm font-medium text-slate-500">
            Mostrando 1-10 de 156 resultados
          </p>
          <div className="flex gap-2">
            <button
              className="h-10 cursor-pointer rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-500 transition hover:text-[#0757ff]"
              type="button"
            >
              Anterior
            </button>
            <button
              className="h-10 cursor-pointer rounded-xl bg-[#0757ff] px-4 font-button text-sm font-bold text-white transition hover:bg-[#064be0]"
              type="button"
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
