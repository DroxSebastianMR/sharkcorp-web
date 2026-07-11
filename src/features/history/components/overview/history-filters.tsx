import { CalendarDays, ChevronDown, Search, SlidersHorizontal } from "lucide-react";

import type { HistoryFilterOption } from "@/features/history/types/history.types";

type HistoryFiltersProps = {
  filterOptions: HistoryFilterOption[];
};

export const HistoryFilters = ({ filterOptions }: HistoryFiltersProps) => {
  return (
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

        {filterOptions.map((option) => (
          <label className="block" key={option.label}>
            <span className="font-heading text-sm font-bold text-slate-600">
              {option.label}
            </span>
            <button
              className="mt-2 flex h-12 w-full cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              {option.value}
              <ChevronDown className="h-4 w-4" />
            </button>
          </label>
        ))}
      </div>
    </section>
  );
};
