import { useNavigate } from "react-router-dom";

import {
  Archive,
  ChevronLeft,
  ChevronRight,
  Download,
  FileArchive,
  FileBadge,
  FileText,
  Filter,
  FolderOpen,
  MoreVertical,
  Plus,
  Send,
  Sparkles,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

const categories = [
  { label: "Todos", count: 124, active: true },
  { label: "Contratos", count: 42 },
  { label: "Certificados", count: 18 },
  { label: "Propuestas", count: 35 },
  { label: "Backups", count: 29 },
];

const documents = [
  {
    name: "Contrato Marco 2024.pdf",
    size: "4.2 MB",
    category: "Contratos",
    date: "12 de Abr, 2024",
    icon: FileBadge,
    iconClass: "bg-red-50 text-red-600",
  },
  {
    name: "Propuesta Tecnica V3.docx",
    size: "12.8 MB",
    category: "Propuestas",
    date: "Ayer, 16:45",
    icon: FileText,
    iconClass: "bg-blue-50 text-[#0757ff]",
  },
  {
    name: "Backup_Database_Q1.zip",
    size: "84.2 MB",
    category: "Backups",
    date: "01 de Mar, 2024",
    icon: FileArchive,
    iconClass: "bg-slate-100 text-slate-600",
  },
  {
    name: "Certificado Cumplimiento ISO.pdf",
    size: "1.5 MB",
    category: "Certificados",
    date: "28 de Feb, 2024",
    icon: FileBadge,
    iconClass: "bg-red-50 text-red-600",
  },
  {
    name: "Acuerdo Confidencialidad Shark.docx",
    size: "0.8 MB",
    category: "Contratos",
    date: "Hace 2 horas",
    icon: FileText,
    iconClass: "bg-blue-50 text-[#0757ff]",
  },
];

const paginationItems = [
  { key: "prev", icon: ChevronLeft },
  { key: "1", label: "1", active: true },
  { key: "2", label: "2" },
  { key: "3", label: "3" },
  { key: "next", icon: ChevronRight },
];

export const DocumentsGeneralManagerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Gestion documental
          </h2>
          <p className="mt-1 max-w-xl text-sm font-medium text-slate-500">
            Repositorio seguro de contratos, certificados, propuestas y backups empresariales.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-white px-5 font-button text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-[#0757ff]"
            type="button"
          >
            <Filter className="h-4 w-4" />
            Filtros avanzados
          </button>
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
            onClick={() => navigate(PATHS.DOCUMENTS.CREATE)}
            type="button"
          >
            <Plus className="h-4 w-4" />
            Nuevo documento
          </button>
        </div>
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="space-y-5">
          <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <h3 className="flex items-center gap-2 font-heading text-sm font-extrabold text-slate-950">
              <FolderOpen className="h-4 w-4 text-[#0757ff]" />
              Categorias
            </h3>
            <div className="mt-4 space-y-2">
              {categories.map((category) => (
                <button
                  className={[
                    "flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-left font-button text-sm font-semibold transition",
                    category.active
                      ? "bg-blue-50 text-[#0757ff]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0757ff]",
                  ].join(" ")}
                  key={category.label}
                  type="button"
                >
                  {category.label}
                  <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-slate-400">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <h3 className="font-heading text-sm font-extrabold text-slate-950">
              Tamano de archivo
            </h3>
            <div className="mt-4 space-y-3 text-sm font-medium text-slate-600">
              {["Pequeno (< 10MB)", "Mediano (10MB - 100MB)", "Grande (> 100MB)"].map((size, index) => (
                <label className="flex cursor-pointer items-center gap-3" key={size}>
                  <span
                    className={[
                      "grid h-4 w-4 place-items-center rounded border",
                      index === 1
                        ? "border-[#0757ff] bg-[#0757ff]"
                        : "border-slate-300 bg-white",
                    ].join(" ")}
                  />
                  {size}
                </label>
              ))}
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl bg-[#061b63] text-white shadow-[0_16px_32px_rgba(14,43,92,0.1)]">
            <div className="h-28 bg-[linear-gradient(135deg,#0b3db8,#061b63)] p-5">
              <Archive className="h-7 w-7 text-blue-100" />
              <p className="mt-3 font-heading text-sm font-extrabold">
                Espacio de almacenamiento
              </p>
            </div>
            <div className="p-5">
              <div className="h-2 rounded-full bg-white/20">
                <div className="h-full w-[68%] rounded-full bg-white" />
              </div>
              <p className="mt-3 text-xs font-semibold text-blue-100">
                68% de 10TB utilizado
              </p>
            </div>
          </article>
        </aside>

        <main className="space-y-5">
          <article className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="bg-slate-50 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
                    <th className="px-5 py-4">Nombre del documento</th>
                    <th className="px-5 py-4">Categoria</th>
                    <th className="px-5 py-4">Fecha modificacion</th>
                    <th className="px-5 py-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map(({ name, size, category, date, icon: Icon, iconClass }) => (
                    <tr className="border-t border-slate-100" key={name}>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <span className={`grid h-10 w-10 place-items-center rounded-xl ${iconClass}`}>
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="font-heading text-sm font-extrabold text-slate-950">
                              {name}
                            </p>
                            <p className="text-xs font-medium text-slate-500">
                              {size}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-extrabold text-[#2e4a93]">
                          {category}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-slate-600">
                        {date}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            aria-label={`Descargar ${name}`}
                            className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg text-[#0757ff] transition hover:bg-blue-50"
                            type="button"
                          >
                            <Download className="h-4 w-4" />
                          </button>
                          <button
                            aria-label={`Mas acciones para ${name}`}
                            className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff]"
                            type="button"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-500">
              <p>Mostrando 5 de 124 documentos</p>
              <div className="flex gap-2">
                {paginationItems.map(({ key, icon: Icon, label, active }) => (
                  <button
                    className={[
                      "grid h-8 w-8 cursor-pointer place-items-center rounded-lg border border-slate-200 font-button text-xs font-bold",
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
            </div>
          </article>

          <section className="grid gap-5 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-2xl bg-[#0757ff] p-6 text-white shadow-[0_16px_32px_rgba(7,87,255,0.22)]">
              <Sparkles className="h-7 w-7 text-blue-100" />
              <h3 className="mt-5 font-heading text-xl font-extrabold">
                Resumen inteligente
              </h3>
              <p className="mt-2 max-w-sm text-sm font-medium leading-relaxed text-blue-50">
                Obten un resumen de tus contratos mas recientes con nuestra IA integrada.
              </p>
              <button
                className="mt-5 h-10 cursor-pointer rounded-xl bg-white px-5 font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-50"
                type="button"
              >
                Probar ahora
              </button>
              <FileText className="absolute -bottom-4 right-4 h-28 w-28 text-white/12" />
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-red-500">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Pendiente de firma
              </div>
              <h3 className="mt-4 font-heading text-xl font-extrabold text-slate-950">
                Acuerdo de servicio global
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                Revision requerida para el departamento legal de SharkCorp Global.
              </p>
              <button
                className="mt-6 flex cursor-pointer items-center gap-2 font-button text-sm font-bold text-[#0757ff]"
                type="button"
              >
                Revisar documento
                <Send className="h-4 w-4" />
              </button>
            </article>
          </section>
        </main>
      </section>
    </div>
  );
};
