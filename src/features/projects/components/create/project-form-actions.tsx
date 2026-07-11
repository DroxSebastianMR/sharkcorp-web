import { ArrowRight } from "lucide-react";

type ProjectFormActionsProps = {
  onCancel: () => void;
};

export const ProjectFormActions = ({ onCancel }: ProjectFormActionsProps) => {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-end gap-5 border-t border-slate-200 pt-5">
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
        Crear proyecto
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};
