import { ShieldAlert } from "lucide-react";

export const ManagementAlertsCard = () => {
  return (
    <article className="rounded-2xl bg-[#061b63] p-6 text-white shadow-[0_16px_32px_rgba(14,43,92,0.16)]">
      <ShieldAlert className="h-7 w-7 text-blue-100" />
      <h3 className="mt-5 font-heading text-xl font-extrabold">
        Alertas de gerencia
      </h3>
      <p className="mt-4 text-sm font-medium leading-relaxed text-blue-100">
        Canales exclusivos para incidentes criticos que requieren atencion
        inmediata.
      </p>
      <div className="mt-6 space-y-4 text-sm font-bold">
        <div className="flex items-center justify-between">
          Llamadas directas <span className="h-6 w-11 rounded-full bg-[#0757ff]" />
        </div>
        <div className="flex items-center justify-between">
          SMS de emergencia <span className="h-6 w-11 rounded-full bg-[#0757ff]" />
        </div>
      </div>
    </article>
  );
};
