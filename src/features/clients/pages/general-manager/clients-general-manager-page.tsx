import { useNavigate } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  Edit3,
  Eye,
  Filter,
  Plus,
  Trash2,
  UserRoundCheck,
  Users,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

const clientStats = [
  {
    label: "Total clientes",
    value: "1,284",
    detail: "+12%",
    icon: Users,
    color: "bg-blue-50 text-[#0757ff]",
    cardClass: "bg-white text-slate-950",
  },
  {
    label: "Clientes activos",
    value: "1,078",
    detail: "84% ratio",
    icon: UserRoundCheck,
    color: "bg-indigo-50 text-[#2e4a93]",
    cardClass: "bg-white text-slate-950",
  },
  {
    label: "Nuevos registros",
    value: "42",
    detail: "Este mes",
    icon: Plus,
    color: "bg-white/12 text-white",
    cardClass: "bg-[#0757ff] text-white",
  },
];

const clients = [
  {
    initials: "LM",
    name: "Lucia Mendez",
    id: "ID: CLI-0092",
    company: "Fintech Blue S.A.",
    sector: "Finanzas",
    email: "l.mendez@fintechblue.com",
    phone: "+34 912 345 678",
    status: "Activo",
    statusClass: "bg-emerald-100 text-emerald-700",
    avatarClass: "bg-[#007c91]",
  },
  {
    initials: "RG",
    name: "Roberto Galiano",
    id: "ID: CLI-1104",
    company: "Logistica Express",
    sector: "Servicios",
    email: "rgaliano@logistica.es",
    phone: "+34 934 112 233",
    status: "Prospecto",
    statusClass: "bg-amber-100 text-amber-700",
    avatarClass: "bg-[#c87d2f]",
  },
  {
    initials: "IC",
    name: "Iker Casado",
    id: "ID: CLI-0872",
    company: "Innovatech Soluciones",
    sector: "Tecnologia",
    email: "icasado@innovatech.io",
    phone: "+34 911 009 887",
    status: "Activo",
    statusClass: "bg-emerald-100 text-emerald-700",
    avatarClass: "bg-[#17264f]",
  },
  {
    initials: "EO",
    name: "Elena Okoro",
    id: "ID: CLI-0544",
    company: "Global Trading Ltd.",
    sector: "Finanzas",
    email: "e.okoro@globaltrade.co.uk",
    phone: "+44 20 7946 0958",
    status: "Inactivo",
    statusClass: "bg-slate-100 text-slate-600",
    avatarClass: "bg-[#3f75aa]",
  },
];

export const ClientsGeneralManagerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Directorio de clientes
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Gestiona y supervisa tu cartera comercial en tiempo real.
          </p>
        </div>

        <button
          className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
          onClick={() => navigate(PATHS.CLIENTS.CREATE)}
          type="button"
        >
          <Plus className="h-4 w-4" />
          Nuevo cliente
        </button>
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-3">
        {clientStats.map(({ label, value, detail, icon: Icon, color, cardClass }) => (
          <article
            className={`relative overflow-hidden rounded-2xl p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70 ${cardClass}`}
            key={label}
          >
            <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-blue-50/60" />
            <div className="relative flex items-start justify-between">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${color}`}>
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-extrabold opacity-80">{detail}</span>
            </div>
            <p className="relative mt-6 text-[11px] font-extrabold uppercase tracking-[0.12em] opacity-70">
              {label}
            </p>
            <strong className="relative mt-1 block font-heading text-4xl font-extrabold leading-none">
              {value}
            </strong>
          </article>
        ))}
      </section>

      <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 p-5">
          <div className="flex flex-wrap gap-3">
            <button
              className="h-10 cursor-pointer rounded-xl bg-slate-100 px-4 font-button text-xs font-bold uppercase tracking-[0.08em] text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              Estado: Todos los estados
            </button>
            <button
              className="h-10 cursor-pointer rounded-xl bg-slate-100 px-4 font-button text-xs font-bold uppercase tracking-[0.08em] text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              Sector: Todos los sectores
            </button>
          </div>

          <div className="flex gap-3">
            <button
              className="flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              <Filter className="h-4 w-4" />
              Filtros avanzados
            </button>
            <button
              aria-label="Descargar clientes"
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left">
            <thead>
              <tr className="bg-slate-50 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
                <th className="px-5 py-4">Cliente</th>
                <th className="px-5 py-4">Empresa</th>
                <th className="px-5 py-4">Contacto</th>
                <th className="px-5 py-4">Estado</th>
                <th className="px-5 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr className="border-t border-slate-100" key={client.id}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className={`grid h-10 w-10 place-items-center rounded-full text-xs font-extrabold text-white ${client.avatarClass}`}>
                        {client.initials}
                      </span>
                      <div>
                        <p className="font-heading text-sm font-extrabold text-slate-950">
                          {client.name}
                        </p>
                        <p className="text-xs font-medium text-slate-500">
                          {client.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-bold text-slate-800">
                      {client.company}
                    </p>
                    <p className="text-[10px] font-extrabold uppercase text-[#2e4a93]">
                      Sector: {client.sector}
                    </p>
                  </td>
                  <td className="px-5 py-4 text-xs font-medium text-slate-600">
                    <p>{client.email}</p>
                    <p className="mt-1">{client.phone}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase ${client.statusClass}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-3 text-slate-600">
                      {[Eye, Edit3, Trash2].map((Icon) => (
                        <button
                          className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg transition hover:bg-blue-50 hover:text-[#0757ff]"
                          key={Icon.displayName ?? Icon.name}
                          type="button"
                        >
                          <Icon className="h-4 w-4" />
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-500">
          <p>Mostrando 1 a 10 de 1,284 clientes</p>
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
            <span>129</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </section>
    </div>
  );
};
