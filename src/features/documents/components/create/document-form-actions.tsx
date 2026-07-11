import { Send } from "lucide-react";

type DocumentFormActionsProps = {
  onCancel: () => void;
};

export const DocumentFormActions = ({ onCancel }: DocumentFormActionsProps) => {
  return (
    <div className="flex flex-wrap justify-end gap-4 bg-slate-50 px-6 py-5">
      <button
        className="h-11 cursor-pointer px-5 font-button text-sm font-bold text-slate-600 transition hover:text-[#0757ff]"
        onClick={onCancel}
        type="button"
      >
        Cancelar
      </button>
      <button
        className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
        type="button"
      >
        Subir documento
        <Send className="h-4 w-4" />
      </button>
    </div>
  );
};
