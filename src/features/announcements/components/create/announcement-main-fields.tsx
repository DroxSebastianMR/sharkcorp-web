import { UploadCloud } from "lucide-react";

type AnnouncementMainFieldsProps = {
  description: string;
  onDescriptionChange: (value: string) => void;
  onTitleChange: (value: string) => void;
  title: string;
};

export const AnnouncementMainFields = ({
  description,
  onDescriptionChange,
  onTitleChange,
  title,
}: AnnouncementMainFieldsProps) => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="space-y-5">
        <label className="block">
          <span className="font-heading text-sm font-bold text-slate-700">
            Titulo del anuncio
          </span>
          <input
            className="mt-2 h-14 w-full rounded-xl border border-transparent bg-slate-100 px-5 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
            onChange={(event) => onTitleChange(event.target.value)}
            placeholder="Ej. Alineamiento estrategico anual 2024"
            type="text"
            value={title}
          />
        </label>

        <label className="block">
          <span className="font-heading text-sm font-bold text-slate-700">
            Descripcion detallada
          </span>
          <textarea
            className="mt-2 min-h-[150px] w-full resize-none rounded-xl border border-transparent bg-slate-100 px-5 py-4 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
            onChange={(event) => onDescriptionChange(event.target.value)}
            placeholder="Describe el anuncio con claridad..."
            value={description}
          />
        </label>

        <label className="block">
          <span className="font-heading text-sm font-bold text-slate-700">
            Imagen destacada
          </span>
          <div className="mt-2 grid min-h-[170px] cursor-pointer place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center transition hover:border-[#0757ff] hover:bg-blue-50/50">
            <div>
              <UploadCloud className="mx-auto h-9 w-9 text-slate-500" />
              <p className="mt-3 text-sm font-semibold text-slate-700">
                Arrastra una imagen o{" "}
                <span className="text-[#0757ff] underline">selecciona</span>
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                PNG o JPG hasta 10MB. Recomendado 16:9.
              </p>
            </div>
          </div>
        </label>
      </div>
    </article>
  );
};
