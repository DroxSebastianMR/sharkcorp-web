import { Building2, Factory, Mail, Phone, User } from "lucide-react";

import type { ClientIndustryOption } from "@/features/clients/types/clients.types";

type ClientFormFieldsProps = {
  industryOptions: ClientIndustryOption[];
};

export const ClientFormFields = ({ industryOptions }: ClientFormFieldsProps) => {
  return (
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
            {industryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
  );
};
