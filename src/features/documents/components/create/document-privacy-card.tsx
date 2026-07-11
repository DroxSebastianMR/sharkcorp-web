import { ShieldCheck } from "lucide-react";

export const DocumentPrivacyCard = () => {
  return (
    <div className="mx-6 mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#0757ff]">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="font-heading text-sm font-extrabold text-slate-800">
            Configuracion de privacidad
          </p>
          <p className="text-xs font-medium text-slate-500">
            Define quien puede editar este documento.
          </p>
        </div>
      </div>
      <div className="flex rounded-xl bg-white p-1">
        <button
          className="h-9 cursor-pointer rounded-lg bg-blue-50 px-4 font-button text-xs font-bold text-[#0757ff]"
          type="button"
        >
          Solo lectura
        </button>
        <button
          className="h-9 cursor-pointer rounded-lg px-4 font-button text-xs font-semibold text-slate-500 transition hover:text-[#0757ff]"
          type="button"
        >
          Editable
        </button>
      </div>
    </div>
  );
};
