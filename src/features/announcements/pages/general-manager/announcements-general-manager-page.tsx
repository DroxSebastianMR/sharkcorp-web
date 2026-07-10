import { useNavigate } from "react-router-dom";

import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Filter,
  MoreVertical,
  Pin,
  Plus,
  TrendingUp,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

const announcementCards = [
  {
    status: "Scheduled",
    statusClass: "bg-amber-100 text-amber-700",
    title: "Evento anual de integracion: SharkSummit",
    target: "Todos los empleados",
    detail: "Preparamos el evento mas grande del ano en Cancun...",
    footer: "Publicacion: Nov 01, 2023",
    muted: false,
  },
  {
    status: "Archived",
    statusClass: "bg-slate-200 text-slate-500",
    title: "Protocolos de seguridad COVID-Q3",
    target: "Operaciones",
    detail: "Actualizacion de los protocolos sanitarios para...",
    footer: "Finalizado: Sep 15, 2023",
    muted: true,
  },
  {
    status: "Active",
    statusClass: "bg-emerald-100 text-emerald-700",
    title: "Nuevos beneficios de salud SharkCare+",
    target: "Recursos Humanos / Todo",
    detail: "",
    footer: "Publicado hace 2h",
    muted: false,
    pinned: true,
  },
];

const paginationItems = [
  { key: "prev", icon: ChevronLeft },
  { key: "1", label: "1", active: true },
  { key: "2", label: "2" },
  { key: "3", label: "3" },
  { key: "next", icon: ChevronRight },
];

export const AnnouncementsGeneralManagerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Comunicacion corporativa
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Gestiona comunicados oficiales y anuncios para toda la organizacion.
          </p>
        </div>

        <button
          className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
          onClick={() => navigate(PATHS.ANNOUNCEMENTS.CREATE)}
          type="button"
        >
          <Plus className="h-4 w-4" />
          Crear nuevo anuncio
        </button>
      </section>

      <section className="mt-5 grid gap-4 xl:grid-cols-[140px_140px_minmax(0,1fr)]">
        <article className="flex min-h-[132px] flex-col justify-between rounded-2xl bg-white p-4 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-[#0757ff]">
            <CheckCircle2 className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="font-heading text-3xl font-extrabold text-[#0757ff]">
              12
            </p>
            <p className="mt-0.5 text-sm font-bold leading-tight text-slate-700">
              Anuncios activos
            </p>
          </div>
        </article>

        <article className="flex min-h-[132px] flex-col justify-between rounded-2xl bg-white p-4 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-50 text-[#2e4a93]">
            <Clock3 className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="font-heading text-3xl font-extrabold text-[#2e4a93]">
              4
            </p>
            <p className="mt-0.5 text-sm font-bold leading-tight text-slate-700">
              Programados
            </p>
          </div>
        </article>

        <article className="relative min-h-[132px] overflow-hidden rounded-2xl bg-[#084ad6] p-5 text-white shadow-[0_18px_36px_rgba(7,87,255,0.22)]">
          <div className="absolute -right-8 -top-16 h-36 w-36 rounded-full bg-white/10" />
          <div className="absolute bottom-0 right-20 h-24 w-24 rounded-full bg-[#1d6cff]/35 blur-2xl" />
          <div className="relative flex h-full items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-blue-100">
                Alcance organizacional
              </p>
              <h3 className="mt-2 max-w-md font-heading text-2xl font-extrabold leading-tight">
                Impacto de comunicacion: +15%
              </h3>
              <p className="mt-2 max-w-lg text-sm font-semibold leading-relaxed text-blue-50">
                La tasa de lectura ha incrementado tras la actualizacion de TI.
              </p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/16">
              <TrendingUp className="h-6 w-6" />
            </span>
          </div>
        </article>
      </section>

      <section className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex gap-6 text-sm font-semibold text-slate-500">
          {["Todos", "Activos", "Programados", "Archivados"].map((tab) => (
            <button
              className={[
                "cursor-pointer pb-3 transition hover:text-[#0757ff]",
                tab === "Todos"
                  ? "border-b-2 border-[#0757ff] text-[#0757ff]"
                  : "",
              ].join(" ")}
              key={tab}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <button
            className="flex h-10 cursor-pointer items-center gap-2 rounded-xl bg-white px-4 font-button text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-[#0757ff]"
            type="button"
          >
            Filtrar por departamento
          </button>
          <button
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-[#0757ff]"
            type="button"
          >
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
        <article className="grid overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70 md:grid-cols-[210px_minmax(0,1fr)]">
          <div className="relative min-h-[280px] overflow-hidden bg-[#0c4ccf]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.55),transparent_22%),linear-gradient(135deg,#0a62df,#06236d)]" />
            <div className="absolute left-7 top-8 h-28 w-28 rounded-full bg-white/18 blur-sm" />
            <div className="absolute bottom-8 left-6 right-6 rounded-2xl border border-white/18 bg-white/12 p-4 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
                SharkCorp
              </p>
              <p className="mt-2 font-heading text-xl font-extrabold text-white">
                Infraestructura 2024
              </p>
            </div>
            <span className="absolute left-5 top-5 rounded-md bg-emerald-100 px-3 py-1 text-[10px] font-extrabold uppercase text-emerald-700">
              Active
            </span>
          </div>
          <div className="flex min-w-0 flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
                TI / Infraestructura
              </span>
              <span className="text-sm font-medium text-slate-500">Oct 24, 2023</span>
            </div>
            <h3 className="mt-5 max-w-md font-heading text-3xl font-extrabold leading-tight text-slate-950">
              Actualizacion de infraestructura de nube 2024
            </h3>
            <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-slate-600">
              Iniciaremos la migracion global a los nuevos servidores de alta
              disponibilidad. Este cambio mejorara la latencia en un 40% para
              todas nuestras sedes internacionales...
            </p>
            <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-5">
              <div className="flex -space-x-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-[10px] font-extrabold text-slate-500 ring-2 ring-white">
                  HR
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0757ff] text-[10px] font-extrabold text-white ring-2 ring-white">
                  CEO
                </span>
              </div>
              <button
                className="cursor-pointer font-button text-sm font-bold text-[#0757ff] transition hover:text-[#064be0]"
                type="button"
              >
                Ver detalles
              </button>
            </div>
          </div>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <h3 className="font-heading text-2xl font-extrabold leading-tight text-slate-950">
            Recordatorio de feedback
          </h3>
          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
            No olvides que el proceso de evaluacion semestral cierra en 3 dias.
            Asegurate de que todos los gerentes hayan enviado sus reportes.
          </p>
          <div className="mt-6 flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-red-600">
              <CalendarDays className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-slate-950">
                Cierre de nomina
              </p>
              <p className="text-xs font-medium text-slate-500">
                Manana, 17:00 HRS
              </p>
            </div>
          </div>
          <button
            className="mt-6 h-11 w-full cursor-pointer rounded-xl border border-[#0757ff] font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-50"
            type="button"
          >
            Revisar pendientes
          </button>
        </article>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-3">
        {announcementCards.map((card) => (
          <article
            className={[
              "flex min-h-[250px] flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(14,43,92,0.08)]",
              card.muted ? "opacity-70" : "",
            ].join(" ")}
            key={card.title}
          >
            <div className="flex items-start justify-between">
              <span
                className={`rounded-md px-3 py-1 text-[10px] font-extrabold uppercase ${card.statusClass}`}
              >
                {card.status}
              </span>
              {card.pinned ? (
                <Pin className="h-4 w-4 text-slate-500" />
              ) : (
                <MoreVertical className="h-4 w-4 text-slate-500" />
              )}
            </div>
            <h3 className="mt-5 max-w-xs font-heading text-xl font-extrabold leading-tight text-slate-950">
              {card.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-500">
              Target: {card.target}
            </p>
            {card.pinned ? (
              <div className="mt-4 h-24 rounded-xl bg-[linear-gradient(135deg,#e9eef8,#ffffff_40%,#cbd8ee)]" />
            ) : (
              <p className="mt-6 text-sm font-medium leading-relaxed text-slate-600">
                {card.detail}
              </p>
            )}
            <div className="mt-auto flex items-center justify-between pt-5">
              <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CalendarDays className="h-4 w-4" />
                {card.footer}
              </span>
              {card.pinned ? (
                <button
                  className="cursor-pointer text-sm font-bold text-[#0757ff]"
                  type="button"
                >
                  Gestionar
                </button>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm font-medium text-slate-600">
        <p>Mostrando 4 de 48 anuncios corporativos</p>
        <div className="flex gap-2">
          {paginationItems.map(({ key, icon: Icon, label, active }) => (
            <button
              className={[
                "grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-slate-200 font-button text-sm font-bold transition",
                active
                  ? "bg-[#0757ff] text-white"
                  : "bg-white text-slate-700 hover:bg-blue-50 hover:text-[#0757ff]",
              ].join(" ")}
              key={key}
              type="button"
            >
              {Icon ? <Icon className="h-4 w-4" /> : label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
