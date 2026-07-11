import { Download, Filter } from "lucide-react";

export const ClientsTableToolbar = () => {
  return (
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
  );
};
