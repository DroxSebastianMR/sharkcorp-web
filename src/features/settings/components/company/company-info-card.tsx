import { Building2, ChevronDown, MapPin } from "lucide-react";

import type { SettingsField } from "@/features/settings/types/settings.types";

type CompanyInfoCardProps = {
  fields: SettingsField[];
};

export const CompanyInfoCard = ({ fields }: CompanyInfoCardProps) => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
        <Building2 className="h-5 w-5 text-[#0757ff]" />
        Informacion general
      </h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {fields.map(({ label, value, icon: Icon }) => (
          <label className="block" key={label}>
            <span className="font-heading text-sm font-bold text-slate-600">
              {label}
            </span>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
              <Icon className="h-4 w-4 text-slate-500" />
              <input
                className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none"
                defaultValue={value}
              />
            </div>
          </label>
        ))}
        <label className="block md:col-span-2">
          <span className="font-heading text-sm font-bold text-slate-600">
            Direccion de sede principal
          </span>
          <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
            <MapPin className="h-4 w-4 text-slate-500" />
            <input
              className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none"
              defaultValue="Av. El Dorado #69-76, Edificio Central, Bogota, Colombia"
            />
          </div>
        </label>
        {["Tecnologia y software", "501 - 1,000 empleados"].map((value, index) => (
          <button
            className="flex h-12 cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
            key={value}
            type="button"
          >
            {index === 0 ? "Sector: " : "Tamano: "}
            {value}
            <ChevronDown className="h-4 w-4" />
          </button>
        ))}
      </div>
    </article>
  );
};
