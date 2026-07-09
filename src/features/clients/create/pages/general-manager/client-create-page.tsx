import { useNavigate } from "react-router-dom";

import {
  Building2,
  Camera,
  ChevronLeft,
  Factory,
  Mail,
  Phone,
  Save,
  User,
} from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";

export const ClientCreatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <button
        className="mb-5 flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
        onClick={() => navigate(PATHS.CLIENTS.HOME)}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver
      </button>

      <section>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Nuevo registro de cliente
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Complete la informacion para integrar un nuevo socio comercial.
        </p>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="grid gap-8 xl:grid-cols-[180px_minmax(0,1fr)]">
          <aside>
            <p className="font-heading text-sm font-bold text-slate-700">
              Imagen de perfil / logo
            </p>
            <div className="mt-4 grid h-40 cursor-pointer place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center transition hover:border-[#0757ff] hover:bg-blue-50/50">
              <div>
                <Camera className="mx-auto h-8 w-8 text-slate-500" />
                <p className="mt-3 text-xs font-bold text-slate-700">
                  Subir archivo
                </p>
              </div>
            </div>
            <p className="mt-4 text-center text-xs font-medium text-slate-500">
              PNG o JPG hasta 5MB. Recomendado 800x800px.
            </p>
          </aside>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="font-heading text-sm font-bold text-slate-700">
                Nombre completo
              </span>
              <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
                <User className="h-4 w-4 text-slate-500" />
                <input
                  className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                  placeholder="Ej. Juan Perez"
                  type="text"
                />
              </div>
            </label>

            <label className="block">
              <span className="font-heading text-sm font-bold text-slate-700">
                Nombre de empresa
              </span>
              <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
                <Building2 className="h-4 w-4 text-slate-500" />
                <input
                  className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                  placeholder="Ej. TechFlow Solutions"
                  type="text"
                />
              </div>
            </label>

            <label className="block">
              <span className="font-heading text-sm font-bold text-slate-700">
                Industria / sector
              </span>
              <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
                <Factory className="h-4 w-4 text-slate-500" />
                <select
                  className="h-full flex-1 cursor-pointer bg-transparent font-button text-sm font-semibold text-slate-700 outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccione una industria
                  </option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="finanzas">Finanzas</option>
                  <option value="servicios">Servicios</option>
                  <option value="retail">Retail</option>
                </select>
              </div>
            </label>

            <label className="block">
              <span className="font-heading text-sm font-bold text-slate-700">
                Email de contacto
              </span>
              <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
                <Mail className="h-4 w-4 text-slate-500" />
                <input
                  className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                  placeholder="contacto@empresa.com"
                  type="email"
                />
              </div>
            </label>

            <label className="block">
              <span className="font-heading text-sm font-bold text-slate-700">
                Numero de telefono
              </span>
              <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
                <Phone className="h-4 w-4 text-slate-500" />
                <input
                  className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                  placeholder="+34 000 000 000"
                  type="tel"
                />
              </div>
            </label>

            <div>
              <span className="font-heading text-sm font-bold text-slate-700">
                Estado del cliente
              </span>
              <div className="mt-2 flex h-12 items-center rounded-xl bg-emerald-50 px-4 text-sm font-extrabold text-emerald-700 ring-1 ring-emerald-100">
                Activo
              </div>
            </div>

            <label className="block md:col-span-2">
              <span className="font-heading text-sm font-bold text-slate-700">
                Notas adicionales
              </span>
              <textarea
                className="mt-2 min-h-[130px] w-full resize-none rounded-xl border border-transparent bg-slate-100 px-5 py-4 font-body text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                placeholder="Agregue informacion relevante sobre el cliente, acuerdos previos o preferencias de contacto..."
              />
            </label>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-4 border-t border-slate-200 pt-5">
          <button
            className="h-11 cursor-pointer rounded-xl border border-slate-300 px-8 font-button text-sm font-bold text-slate-700 transition hover:border-[#0757ff] hover:text-[#0757ff]"
            onClick={() => navigate(PATHS.CLIENTS.HOME)}
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
      </section>
    </div>
  );
};
