import {
  Download,
  FileText,
  Filter,
  Image,
  TrendingUp,
} from "lucide-react";

const pendingJustifications = [
  {
    name: "Beatriz Moreno",
    role: "Analista de datos - Operaciones",
    type: "Inasistencia",
    typeClass: "bg-red-100 text-red-700",
    message:
      "Cita medica de emergencia para familiar directo. Se adjunta constancia del hospital central emitida el dia de hoy.",
    file: "constancia_medica_1402.pdf",
    fileIcon: FileText,
    sentAt: "Hoy, 09:12 AM",
    avatar: "BM",
    avatarClass: "bg-[#007c91]",
  },
  {
    name: "Javier Solis",
    role: "Desarrollador Jr - Tecnologia",
    type: "Retardo",
    typeClass: "bg-blue-100 text-[#0757ff]",
    message:
      "Cierre de vialidad por mantenimiento mayor en la autopista Norte. Adjunto captura de pantalla de reporte de trafico en vivo.",
    file: "evidencia_trafico.jpg",
    fileIcon: Image,
    sentAt: "Ayer, 08:45 PM",
    avatar: "JS",
    avatarClass: "bg-[#3f75aa]",
  },
];

const recentResolutions = [
  {
    status: "Aprobado",
    title: "Permiso de Maria T.",
    detail: "Asunto personal validado por RH",
    time: "Hace 2 horas",
    color: "bg-emerald-500",
  },
  {
    status: "Rechazado",
    title: "Justificacion Juan P.",
    detail: "Evidencia insuficiente de desperfecto",
    time: "Hoy, 10:30 AM",
    color: "bg-red-500",
  },
  {
    status: "Aprobado",
    title: "Comision Especial I.G",
    detail: "Viaje corporativo autorizado",
    time: "Ayer",
    color: "bg-emerald-500",
  },
];

export const AttendanceJustificationsPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Bandeja de justificaciones
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Revisiones pendientes de aprobacion por la Direccion General.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            className="flex h-10 cursor-pointer items-center gap-2 rounded-xl bg-slate-200 px-4 font-button text-sm font-semibold text-slate-600 transition hover:bg-slate-300"
            type="button"
          >
            <Filter className="h-4 w-4" />
            Filtrar
          </button>
          <button
            className="flex h-10 cursor-pointer items-center gap-2 rounded-xl bg-slate-200 px-4 font-button text-sm font-semibold text-slate-600 transition hover:bg-slate-300"
            type="button"
          >
            <Download className="h-4 w-4" />
            Exportar
          </button>
        </div>
      </section>

      <section className="mt-7 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-[#0757ff]" />
            <h3 className="font-heading text-xl font-extrabold text-slate-950">
              Pendientes
            </h3>
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-extrabold text-[#0757ff]">
              3
            </span>
          </div>

          <div className="space-y-5">
            {pendingJustifications.map((item) => {
              const FileIcon = item.fileIcon;

              return (
                <article
                  className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
                  key={item.name}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white ${item.avatarClass}`}
                    >
                      {item.avatar}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h4 className="font-heading text-lg font-extrabold text-slate-950">
                            {item.name}
                          </h4>
                          <p className="text-sm font-medium text-slate-500">
                            {item.role}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-extrabold ${item.typeClass}`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <blockquote className="mt-4 rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium italic leading-relaxed text-slate-500">
                        "{item.message}"
                      </blockquote>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <button
                          className="flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-[#0757ff] transition hover:text-[#064be0]"
                          type="button"
                        >
                          <FileIcon className="h-4 w-4" />
                          {item.file}
                        </button>
                        <div className="flex items-center gap-3">
                          <span className="max-w-[72px] text-xs font-medium leading-tight text-slate-500">
                            Enviado {item.sentAt}
                          </span>
                          <button
                            className="h-10 cursor-pointer rounded-xl border border-slate-300 bg-white px-5 font-button text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                            type="button"
                          >
                            Rechazar
                          </button>
                          <button
                            className="h-10 cursor-pointer rounded-xl bg-[#0757ff] px-5 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
                            type="button"
                          >
                            Aprobar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="space-y-6">
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <h3 className="font-heading text-xl font-extrabold text-slate-950">
              Resoluciones recientes
            </h3>
            <div className="relative mt-6 space-y-7 before:absolute before:bottom-4 before:left-[11px] before:top-3 before:w-px before:bg-slate-200">
              {recentResolutions.map((item) => (
                <div className="relative flex gap-4" key={`${item.status}-${item.title}`}>
                  <span
                    className={`relative z-10 mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white ${item.color}`}
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-extrabold text-slate-950">
                      {item.status}: {item.title}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug text-slate-500">
                      "{item.detail}"
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-400">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-6 cursor-pointer font-button text-sm font-bold text-[#0757ff] transition hover:text-[#064be0]"
              type="button"
            >
              Ver historial completo
            </button>
          </article>

          <article className="rounded-2xl bg-[#9aa6c1] p-6 text-white shadow-[0_16px_32px_rgba(14,43,92,0.14)]">
            <p className="text-sm font-semibold text-white/80">
              Tasa de aprobacion mensual
            </p>
            <div className="mt-3 flex items-end justify-between">
              <strong className="font-heading text-5xl font-extrabold">84%</strong>
              <TrendingUp className="h-7 w-7 text-white/80" />
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
};
