import { useNavigate } from "react-router-dom";

import {
  ChevronLeft,
  FileText,
  Send,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

export const DocumentCreatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <button
        className="mb-5 flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
        onClick={() => navigate(PATHS.DOCUMENTS.HOME)}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver
      </button>

      <section>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Cargar nuevo documento
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Registra archivos importantes para el repositorio documental de la empresa.
        </p>
      </section>

      <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="flex items-center gap-3 bg-slate-50 px-6 py-5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0757ff] text-white">
            <FileText className="h-5 w-5" />
          </span>
          <h3 className="font-heading text-xl font-extrabold text-slate-950">
            Informacion del documento
          </h3>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">
          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-700">
              Nombre del documento
            </span>
            <input
              className="mt-2 h-12 w-full rounded-xl border border-transparent bg-slate-100 px-4 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Ej. Contrato_Q3_Enterprise"
              type="text"
            />
          </label>

          <label className="block">
            <span className="font-heading text-sm font-bold text-slate-700">
              Categoria
            </span>
            <select
              className="mt-2 h-12 w-full cursor-pointer rounded-xl border border-transparent bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
              defaultValue=""
            >
              <option value="" disabled>
                Seleccionar categoria
              </option>
              <option value="contratos">Contratos</option>
              <option value="certificados">Certificados</option>
              <option value="propuestas">Propuestas</option>
              <option value="backups">Backups</option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="font-heading text-sm font-bold text-slate-700">
              Descripcion
            </span>
            <textarea
              className="mt-2 min-h-[120px] w-full resize-none rounded-xl border border-transparent bg-slate-100 px-5 py-4 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Anade una breve descripcion del contenido..."
            />
          </label>

          <label className="block md:col-span-2">
            <span className="font-heading text-sm font-bold text-slate-700">
              Archivos
            </span>
            <div className="mt-2 grid min-h-[190px] cursor-pointer place-items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 text-center transition hover:border-[#0757ff] hover:bg-blue-50/40">
              <div>
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-[#0757ff]">
                  <UploadCloud className="h-6 w-6" />
                </span>
                <p className="mt-4 text-sm font-bold text-slate-700">
                  Arrastra y suelta tus archivos aqui
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  PDF, DOCX, ZIP. Max. 50MB.
                </p>
              </div>
            </div>
          </label>
        </div>

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

        <div className="flex flex-wrap justify-end gap-4 bg-slate-50 px-6 py-5">
          <button
            className="h-11 cursor-pointer px-5 font-button text-sm font-bold text-slate-600 transition hover:text-[#0757ff]"
            onClick={() => navigate(PATHS.DOCUMENTS.HOME)}
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
      </section>
    </div>
  );
};
