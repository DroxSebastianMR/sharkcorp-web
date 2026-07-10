import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  CalendarDays,
  ChevronLeft,
  Eye,
  Lightbulb,
  Paperclip,
  Plus,
  Send,
  UploadCloud,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

const accentColors = [
  { label: "Azul", className: "bg-[#0757ff]", value: "#0757ff" },
  { label: "Indigo", className: "bg-[#2e4a93]", value: "#2e4a93" },
  { label: "Verde", className: "bg-emerald-500", value: "#10b981" },
  { label: "Ambar", className: "bg-amber-500", value: "#f59e0b" },
  { label: "Rojo", className: "bg-red-500", value: "#ef4444" },
];

export const AnnouncementCreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [accentColor, setAccentColor] = useState(accentColors[0]);

  const previewTitle = title.trim() || "Titulo del anuncio aqui";
  const previewDescription =
    description.trim() ||
    "Aqui aparecera la descripcion del anuncio. El texto se ajustara automaticamente en esta vista previa para mantener una lectura clara...";

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <button
        className="mb-5 flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
        onClick={() => navigate(PATHS.ANNOUNCEMENTS.HOME)}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver
      </button>

      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Crear nuevo anuncio
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Publica comunicados importantes para areas o toda la organizacion.
          </p>
        </div>
      </section>

      <section className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-5">
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <div className="space-y-5">
              <label className="block">
                <span className="font-heading text-sm font-bold text-slate-700">
                  Titulo del anuncio
                </span>
                <input
                  className="mt-2 h-14 w-full rounded-xl border border-transparent bg-slate-100 px-5 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                  onChange={(event) => setTitle(event.target.value)}
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
                  onChange={(event) => setDescription(event.target.value)}
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

          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="font-heading text-sm font-bold text-slate-700">
                  Departamentos destino
                </span>
                <div className="mt-2 flex h-12 items-center gap-2 rounded-xl bg-slate-100 px-3">
                  <span className="rounded-lg bg-[#0757ff] px-3 py-2 text-xs font-extrabold text-white">
                    Todos los departamentos
                  </span>
                  <button
                    className="flex cursor-pointer items-center gap-1 font-button text-xs font-bold text-[#0757ff]"
                    type="button"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Agregar
                  </button>
                </div>
              </label>

              <label className="block">
                <span className="font-heading text-sm font-bold text-slate-700">
                  Fecha y hora de publicacion
                </span>
                <div className="mt-2 flex h-12 items-center justify-between rounded-xl bg-slate-100 px-4 text-sm font-semibold text-slate-500">
                  dd/mm/aaaa --:--
                  <CalendarDays className="h-4 w-4 text-slate-700" />
                </div>
              </label>
            </div>

            <div className="mt-5">
              <p className="font-heading text-sm font-bold text-slate-700">
                Color de acento
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {accentColors.map((color) => (
                  <button
                    aria-label={`Seleccionar color ${color.label}`}
                    className={[
                      "h-7 w-7 cursor-pointer rounded-full ring-2 ring-offset-2 transition hover:scale-105",
                      color.className,
                      accentColor.value === color.value
                        ? "ring-[#0757ff]"
                        : "ring-transparent",
                    ].join(" ")}
                    key={color.value}
                    onClick={() => setAccentColor(color)}
                    type="button"
                  />
                ))}
                <span className="h-7 w-px bg-slate-200" />
                <button
                  className="flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
                  type="button"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-300 bg-white">
                    <Paperclip className="h-4 w-4" />
                  </span>
                  Personalizado
                </button>
              </div>
            </div>
          </article>

          <div className="flex flex-wrap items-center justify-end gap-6 py-3">
            <button
              className="h-12 cursor-pointer px-5 font-button text-base font-bold text-slate-600 transition hover:text-[#0757ff]"
              onClick={() => navigate(PATHS.ANNOUNCEMENTS.HOME)}
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
        </div>

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
      </section>
    </div>
  );
};
