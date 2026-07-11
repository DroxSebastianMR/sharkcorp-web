import { UploadCloud } from "lucide-react";

import type { DocumentCategoryOption } from "@/features/documents/types/documents.types";

type DocumentFormFieldsProps = {
  categoryOptions: DocumentCategoryOption[];
};

export const DocumentFormFields = ({
  categoryOptions,
}: DocumentFormFieldsProps) => {
  return (
    <div className="grid gap-5 p-6 md:grid-cols-2">
      <label className="block">
        <span className="font-heading text-sm font-bold text-slate-700">
          Nombre del documento
        </span>
        <input
          className="mt-2 h-12 w-full rounded-xl border border-transparent bg-slate-100 px-4 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
          placeholder="Ej. Contrato_Q3_Enterprise"
          type="text"
        />
      </label>

      <label className="block">
        <span className="font-heading text-sm font-bold text-slate-700">
          Categoria
        </span>
        <select
          className="mt-2 h-12 w-full cursor-pointer rounded-xl border border-transparent bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
          defaultValue=""
        >
          <option value="" disabled>
            Seleccionar categoria
          </option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block md:col-span-2">
        <span className="font-heading text-sm font-bold text-slate-700">
          Descripcion
        </span>
        <textarea
          className="mt-2 min-h-[120px] w-full resize-none rounded-xl border border-transparent bg-slate-100 px-5 py-4 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
          placeholder="Anade una breve descripcion del contenido..."
        />
      </label>

      <label className="block md:col-span-2">
        <span className="font-heading text-sm font-bold text-slate-700">
          Archivos
        </span>
        <div className="mt-2 grid min-h-[190px] cursor-pointer place-items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 text-center transition hover:border-[#0757ff] hover:bg-blue-50/40">
          <div>
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-[#0757ff]">
              <UploadCloud className="h-6 w-6" />
            </span>
            <p className="mt-4 text-sm font-bold text-slate-700">
              Arrastra y suelta tus archivos aqui
            </p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              PDF, DOCX, ZIP. Max. 50MB.
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};
