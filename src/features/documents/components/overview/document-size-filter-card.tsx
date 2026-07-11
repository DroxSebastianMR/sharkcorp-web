import type { DocumentSizeFilter } from "@/features/documents/types/documents.types";

type DocumentSizeFilterCardProps = {
  filters: DocumentSizeFilter[];
};

export const DocumentSizeFilterCard = ({
  filters,
}: DocumentSizeFilterCardProps) => {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <h3 className="font-heading text-sm font-extrabold text-slate-950">
        Tamano de archivo
      </h3>
      <div className="mt-4 space-y-3 text-sm font-medium text-slate-600">
        {filters.map((size) => (
          <label className="flex cursor-pointer items-center gap-3" key={size.label}>
            <span
              className={[
                "grid h-4 w-4 place-items-center rounded border",
                size.active
                  ? "border-[#0757ff] bg-[#0757ff]"
                  : "border-slate-300 bg-white",
              ].join(" ")}
            />
            {size.label}
          </label>
        ))}
      </div>
    </article>
  );
};
