import {
  BarChart3,
  CalendarPlus,
  CalendarRange,
  Eye,
  FileText,
  Megaphone,
  MoreVertical,
  TrendingUp,
  Users,
  UserCheck,
} from "lucide-react";

const statCards = [
  {
    label: "Colaboradores",
    value: "248",
    detail: "+12 este mes",
    icon: Users,
    color: "#0757ff",
    sparkline: "M8 82 C24 78 21 45 42 42 C59 39 55 54 75 55 C93 56 97 62 114 62 C132 62 132 42 153 40 C169 38 172 23 184 18",
  },
  {
    label: "Asistencia Promedio Hoy",
    value: "92%",
    detail: "+4% vs ayer",
    icon: UserCheck,
    color: "#10a15a",
    sparkline: "M8 80 C29 76 22 34 49 36 C70 38 66 51 88 52 C108 53 109 70 132 66 C151 62 146 43 170 40 C181 38 178 24 184 22",
  },
  {
    label: "Anuncios Activos",
    value: "5",
    detail: "5 nuevos hoy",
    icon: Megaphone,
    color: "#7c1dff",
    sparkline: "M8 80 C28 77 20 36 49 37 C71 38 65 53 90 54 C112 55 112 69 136 66 C156 63 148 45 171 42 C182 40 177 25 184 22",
  },
  {
    label: "Eventos Próximos",
    value: "8",
    detail: "Esta semana",
    icon: CalendarRange,
    color: "#ff5a1f",
    sparkline: "M8 82 C28 79 18 45 44 43 C68 41 61 60 91 60 C115 60 113 74 139 70 C160 66 148 49 172 48 C184 47 178 27 184 23",
  },
];

const attendance = [
  { day: "Lunes", value: 40 },
  { day: "Martes", value: 88 },
  { day: "Miércoles", value: 60 },
  { day: "Jueves", value: 36 },
  { day: "Viernes", value: 37 },
  { day: "Sábado", value: 56 },
  { day: "Domingo", value: 56 },
];

const announcements = [
  { color: "blue", title: "Actualización de políticas" },
  { color: "emerald", title: "Actualización de políticas" },
  { color: "violet", title: "Actualización de políticas" },
];

const quickActions = [
  { label: "Comunicar anuncio", icon: Megaphone, color: "bg-blue-50 text-[#0757ff]" },
  { label: "Crear evento", icon: CalendarPlus, color: "bg-emerald-50 text-emerald-600" },
  { label: "Ver asistencias", icon: Eye, color: "bg-violet-50 text-violet-600" },
  { label: "Reportes", icon: BarChart3, color: "bg-orange-50 text-orange-600" },
  { label: "Directorio", icon: Users, color: "bg-indigo-50 text-indigo-600" },
  { label: "Documentos", icon: FileText, color: "bg-amber-50 text-amber-600" },
];

const events = [
  {
    day: "24",
    month: "MAY",
    title: "Reunión de liderazgo estratégico",
    time: "10:00 AM - 11:30 AM",
  },
  {
    day: "25",
    month: "MAY",
    title: "Taller de trabajo en equipo",
    time: "10:00 AM - 11:30 AM",
  },
];

export const DashboardPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] px-5 py-5 lg:px-12">
      <section className="mb-6">
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Dashboard general
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Visualiza indicadores clave, anuncios, eventos y accesos prioritarios.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-4">
        {statCards.map(({ label, value, detail, icon: Icon, color, sparkline }) => (
          <article
            className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/70"
            key={label}
          >
            <div className="flex items-start gap-3">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl"
                style={{ backgroundColor: `${color}14`, color }}
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={2.5} />
              </span>
              <div>
                <p className="font-heading text-xs font-extrabold text-slate-950">
                  {label}
                </p>
                <strong className="mt-1 block font-heading text-3xl font-extrabold leading-none text-slate-950">
                  {value}
                </strong>
                <span className="mt-2 block text-xs font-extrabold text-emerald-600">
                  {detail}
                </span>
              </div>
            </div>

            <svg
              className="mt-4 h-16 w-full"
              preserveAspectRatio="none"
              viewBox="0 0 192 92"
            >
              <path
                d={`${sparkline} L184 92 L8 92 Z`}
                fill={color}
                opacity="0.08"
              />
              <path
                d={sparkline}
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
          </article>
        ))}
      </section>

      <section className="mt-6 grid items-start gap-6 xl:grid-cols-[1.55fr_0.95fr]">
        <div className="space-y-5">
        <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/70">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-heading text-xl font-extrabold text-slate-950">
                Asistencia por día
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-400">
                esta semana
              </p>
            </div>
            <button
              className="flex h-10 items-center gap-3 rounded-full bg-slate-100 px-5 font-button text-sm font-bold text-slate-700"
              type="button"
            >
              Esta semana
            </button>
          </div>

          <div className="mt-5 h-[230px] rounded-2xl bg-[linear-gradient(to_right,#dbe3ef_1px,transparent_1px),linear-gradient(to_bottom,#dbe3ef_1px,transparent_1px)] bg-[size:20%_25%] px-6 pt-4">
            <div className="flex h-full items-end justify-between gap-5">
              {attendance.map(({ day, value }) => (
                <div className="flex h-full flex-1 flex-col items-center justify-end" key={day}>
                  <span className="mb-2 text-xs font-bold text-slate-500">
                    {value} %
                  </span>
                  <div
                    className="w-full max-w-11 rounded-t-xl bg-[#0757ff] shadow-[0_12px_22px_rgba(7,87,255,0.22)]"
                    style={{ height: `${value}%` }}
                  />
                  <span className="mt-3 text-xs font-semibold text-slate-500">
                    {day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-[#0757ff]">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-medium text-slate-500">
                Promedio semanal:{" "}
                <strong className="font-heading text-slate-950">90.8%</strong>
              </p>
              <p className="text-xs font-extrabold text-emerald-600">
                +3.2% vs semana anterior
              </p>
            </div>
          </div>
        </article>

        <section className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/70">
          <h2 className="font-heading text-lg font-extrabold text-slate-950">
            Accesos rápidos
          </h2>
          <div className="mt-4 grid grid-cols-3 gap-3 xl:grid-cols-6">
            {quickActions.map(({ label, icon: Icon, color }) => (
              <button
                className="group flex cursor-pointer flex-col items-center gap-2 rounded-2xl px-2 py-3 text-center transition hover:bg-slate-50"
                key={label}
                type="button"
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full ${color} transition group-hover:scale-105`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <span className="text-[11px] font-semibold leading-tight text-slate-500">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </section>
        </div>

        <aside className="space-y-7">
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/70">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-extrabold text-slate-950">
                Anuncios recientes
              </h2>
              <button
                className="font-button text-sm font-extrabold text-[#0757ff]"
                type="button"
              >
                Ver todos
              </button>
            </div>

            <div className="mt-6 space-y-5">
              {announcements.map(({ color, title }) => (
                <div className="flex items-center gap-4" key={color}>
                  <span
                    className={[
                      "grid h-13 w-13 place-items-center rounded-2xl",
                      color === "blue" ? "bg-blue-50 text-[#0757ff]" : "",
                      color === "emerald" ? "bg-emerald-50 text-emerald-600" : "",
                      color === "violet" ? "bg-violet-50 text-violet-600" : "",
                    ].join(" ")}
                  >
                    <Megaphone className="h-6 w-6" strokeWidth={2.3} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-heading text-sm font-extrabold text-slate-950">
                      {title}
                    </h3>
                    <p className="truncate text-xs font-medium text-slate-500">
                      Se han actualizado las políticas internas de la...
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-400">
                      Hace 2 horas
                    </p>
                  </div>
                  <button
                    aria-label="Más opciones"
                    className="grid h-9 w-9 place-items-center rounded-full text-slate-500 hover:bg-slate-100"
                    type="button"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/70">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-extrabold text-slate-950">
                Próximos eventos
              </h2>
              <button
                className="font-button text-sm font-extrabold text-[#0757ff]"
                type="button"
              >
                Ver agenda
              </button>
            </div>

            <div className="mt-6 space-y-5">
              {events.map(({ day, month, title, time }) => (
                <div className="flex gap-4" key={title}>
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-blue-50 text-center">
                    <span>
                      <strong className="block font-heading text-xl font-extrabold text-[#0757ff]">
                        {day}
                      </strong>
                      <span className="text-xs font-extrabold text-[#0757ff]">
                        {month}
                      </span>
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-extrabold text-slate-950">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{time}</p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      Sala de juntas 1 (Piso 4)
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="mt-6 font-button text-sm font-extrabold text-[#0757ff]"
              type="button"
            >
              Ver todos los eventos
            </button>
          </article>
        </aside>
      </section>

      <section className="hidden">
        <h2 className="font-heading text-xl font-extrabold text-slate-950">
          Accesos rápidos
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
          {quickActions.map(({ label, icon: Icon, color }) => (
            <button
              className="group flex flex-col items-center gap-4 rounded-2xl p-4 text-center transition hover:bg-slate-50"
              key={label}
              type="button"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-full ${color} transition group-hover:scale-105`}
              >
                <Icon className="h-6 w-6" strokeWidth={2.4} />
              </span>
              <span className="text-sm font-semibold leading-tight text-slate-500">
                {label}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
