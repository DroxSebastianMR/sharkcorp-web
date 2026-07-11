import { TriangleAlert } from "lucide-react";

export const DisasterRecoveryCard = () => {
  return (
    <article className="rounded-2xl bg-slate-900 p-6 text-white shadow-[0_16px_32px_rgba(14,43,92,0.18)]">
      <h3 className="font-heading text-2xl font-extrabold">
        Recuperacion ante desastres
      </h3>
      <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300">
        Activa protocolo de emergencia para restaurar infraestructura completa.
      </p>
      <div className="mt-7 space-y-4 text-sm font-bold">
        <p>
          <span className="mr-2 text-emerald-400">●</span>
          Region primaria: US-East-1
        </p>
        <p>
          <span className="mr-2 text-slate-400">●</span>
          Region espejo: EU-West-1
        </p>
      </div>
      <button
        className="mt-12 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 font-button text-sm font-bold text-white"
        type="button"
      >
        <TriangleAlert className="h-4 w-4" />
        Iniciar failover
      </button>
    </article>
  );
};
