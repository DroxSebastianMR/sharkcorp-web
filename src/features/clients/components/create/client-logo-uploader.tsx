import { Camera } from "lucide-react";

export const ClientLogoUploader = () => {
  return (
    <aside>
      <p className="font-heading text-sm font-bold text-slate-700">
        Imagen de perfil / logo
      </p>
      <div className="mt-4 grid h-40 cursor-pointer place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center transition hover:border-[#0757ff] hover:bg-blue-50/50">
        <div>
          <Camera className="mx-auto h-8 w-8 text-slate-500" />
          <p className="mt-3 text-xs font-bold text-slate-700">Subir archivo</p>
        </div>
      </div>
      <p className="mt-4 text-center text-xs font-medium text-slate-500">
        PNG o JPG hasta 5MB. Recomendado 800x800px.
      </p>
    </aside>
  );
};
