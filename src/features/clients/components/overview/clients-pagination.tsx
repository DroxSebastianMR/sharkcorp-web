import { ChevronLeft, ChevronRight } from "lucide-react";

export const ClientsPagination = () => {
  return (
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
  );
};
