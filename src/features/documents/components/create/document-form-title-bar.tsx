import { FileText } from "lucide-react";

export const DocumentFormTitleBar = () => {
  return (
    <div className="flex items-center gap-3 bg-slate-50 px-6 py-5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0757ff] text-white">
        <FileText className="h-5 w-5" />
      </span>
      <h3 className="font-heading text-xl font-extrabold text-slate-950">
        Informacion del documento
      </h3>
    </div>
  );
};
