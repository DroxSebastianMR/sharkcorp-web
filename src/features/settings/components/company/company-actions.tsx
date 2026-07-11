import { Save } from "lucide-react";

export const CompanyActions = () => {
  return (
    <div className="flex gap-3">
      <button
        className="h-11 cursor-pointer rounded-xl border border-slate-200 bg-white px-6 font-button text-sm font-bold text-slate-700 transition hover:border-[#0757ff] hover:text-[#0757ff]"
        type="button"
      >
        Descartar
      </button>
      <button
        className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
        type="button"
      >
        <Save className="h-4 w-4" />
        Guardar cambios
      </button>
    </div>
  );
};
