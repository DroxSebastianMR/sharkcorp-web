import { Save } from "lucide-react";

type ClientFormActionsProps = {
  onCancel: () => void;
};

export const ClientFormActions = ({ onCancel }: ClientFormActionsProps) => {
  return (
    <div className="mt-8 flex flex-wrap justify-end gap-4 border-t border-slate-200 pt-5">
      <button
        className="h-11 cursor-pointer rounded-xl border border-slate-300 px-8 font-button text-sm font-bold text-slate-700 transition hover:border-[#0757ff] hover:text-[#0757ff]"
        onClick={onCancel}
        type="button"
      >
        Cancelar
      </button>
      <button
        className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
        type="button"
      >
        <Save className="h-4 w-4" />
        Registrar cliente
      </button>
    </div>
  );
};
