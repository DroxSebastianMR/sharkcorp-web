import { Globe2, Mail, Phone } from "lucide-react";

export const CompanyContactCard = () => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
        <Mail className="h-5 w-5 text-[#0757ff]" />
        Datos de contacto oficiales
      </h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
          <Mail className="h-4 w-4 text-slate-500" />
          <span className="text-sm font-medium text-slate-700">
            contact@sharkcorp.com
          </span>
        </div>
        <div className="flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
          <Phone className="h-4 w-4 text-slate-500" />
          <span className="text-sm font-medium text-slate-700">
            +57 (601) 456-7890
          </span>
        </div>
        <div className="flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4 md:col-span-2">
          <Globe2 className="h-4 w-4 text-slate-500" />
          <span className="text-sm font-medium text-slate-700">
            https://sharkcorp-enterprise.com
          </span>
        </div>
      </div>
    </article>
  );
};
