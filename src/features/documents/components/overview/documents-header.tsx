import { Filter, Plus } from "lucide-react";

type DocumentsHeaderProps = {
  onCreateDocument: () => void;
};

export const DocumentsHeader = ({ onCreateDocument }: DocumentsHeaderProps) => {
  return (
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
          onClick={onCreateDocument}
          type="button"
        >
          <Plus className="h-4 w-4" />
          Nuevo documento
        </button>
      </div>
    </section>
  );
};
