import type { DocumentPaginationItem } from "@/features/documents/types/documents.types";

type DocumentsPaginationProps = {
  items: DocumentPaginationItem[];
};

export const DocumentsPagination = ({ items }: DocumentsPaginationProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-500">
      <p>Mostrando 5 de 124 documentos</p>
      <div className="flex gap-2">
        {items.map(({ key, icon: Icon, label, active }) => (
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
  );
};
