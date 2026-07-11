import { FolderOpen } from "lucide-react";

import type { DocumentCategory } from "@/features/documents/types/documents.types";

type DocumentCategoriesCardProps = {
  categories: DocumentCategory[];
};

export const DocumentCategoriesCard = ({
  categories,
}: DocumentCategoriesCardProps) => {
  return (
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
  );
};
