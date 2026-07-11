import { Send } from "lucide-react";

type AnnouncementFormActionsProps = {
  onCancel: () => void;
};

export const AnnouncementFormActions = ({
  onCancel,
}: AnnouncementFormActionsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-end gap-6 py-3">
      <button
        className="h-12 cursor-pointer px-5 font-button text-base font-bold text-slate-600 transition hover:text-[#0757ff]"
        onClick={onCancel}
        type="button"
      >
        Cancelar
      </button>
      <button
        className="flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-base font-bold text-white shadow-[0_16px_32px_rgba(7,87,255,0.25)] transition hover:bg-[#064be0]"
        type="button"
      >
        <Send className="h-4 w-4" />
        Publicar anuncio
      </button>
    </div>
  );
};
