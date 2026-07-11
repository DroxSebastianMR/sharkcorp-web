import { Eye, Lightbulb } from "lucide-react";

import type { AnnouncementAccentColor } from "@/features/announcements/types/announcements.types";

type AnnouncementPreviewCardProps = {
  accentColor: AnnouncementAccentColor;
  previewDescription: string;
  previewTitle: string;
};

export const AnnouncementPreviewCard = ({
  accentColor,
  previewDescription,
  previewTitle,
}: AnnouncementPreviewCardProps) => {
  return (
    <aside className="space-y-5">
      <div className="flex items-center gap-2 font-heading text-sm font-bold text-slate-700">
        <Eye className="h-4 w-4 text-[#0757ff]" />
        Vista previa
      </div>

      <article className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/80">
        <div className="relative h-40 overflow-hidden bg-[#082b83]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.38),transparent_18%),linear-gradient(135deg,#0a62df,#061b63)]" />
          <div className="absolute inset-x-6 bottom-5">
            <span
              className="rounded-md px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white"
              style={{ backgroundColor: accentColor.value }}
            >
              Empresa
            </span>
            <h3 className="mt-2 font-heading text-lg font-extrabold leading-tight text-white">
              {previewTitle}
            </h3>
          </div>
        </div>
        <div className="p-5">
          <p className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: accentColor.value }}
            />
            Publicado hoy
          </p>
          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
            {previewDescription}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
                Dirigido a
              </p>
              <span className="mt-1 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                Todos los departamentos
              </span>
            </div>
            <button
              className="cursor-pointer font-button text-xs font-bold text-[#0757ff]"
              style={{ color: accentColor.value }}
              type="button"
            >
              Leer mas
            </button>
          </div>
        </div>
      </article>

      <article className="rounded-2xl border border-[#0757ff]/20 bg-blue-50 p-5">
        <div className="flex items-center gap-2 font-heading text-sm font-extrabold text-[#0757ff]">
          <Lightbulb className="h-4 w-4" />
          Consejo de engagement
        </div>
        <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
          Usa imagenes con buen contraste y un llamado a la accion claro. Los
          anuncios con identidad visual consistente tienen mejor lectura.
        </p>
      </article>
    </aside>
  );
};
