import { Download, Edit3 } from "lucide-react";

export const DirectoryHeader = () => {
  return (
    <section className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-[#083da8]">
          Directorio corporativo - Organigrama general
        </h2>
        <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">
          Visualiza la jerarquia de SharkCorp Enterprise desde gerencia general
          hasta las areas funcionales, directivas y departamentos tecnicos.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-white px-5 font-button text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-[#0757ff]"
          type="button"
        >
          <Download className="h-4 w-4" />
          Exportar PDF
        </button>
        <button
          className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
          type="button"
        >
          <Edit3 className="h-4 w-4" />
          Gestionar
        </button>
      </div>
    </section>
  );
};
