import { KeyRound } from "lucide-react";

type SecurityInsightsProps = {
  hardeningItems: string[];
};

export const SecurityInsights = ({ hardeningItems }: SecurityInsightsProps) => {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <article className="rounded-2xl bg-[#0757ff] p-6 text-white shadow-[0_16px_32px_rgba(7,87,255,0.22)]">
        <KeyRound className="h-7 w-7 text-blue-100" />
        <h3 className="mt-5 font-heading text-xl font-extrabold">
          Recomendaciones clave
        </h3>
        <div className="mt-4 space-y-3">
          {hardeningItems.map((item) => (
            <div
              className="rounded-xl bg-white/12 px-3 py-2 text-sm font-semibold"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <h3 className="font-heading text-xl font-extrabold text-slate-950">
          Acceso a auditoria
        </h3>
        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
          Consulta logs de acceso y actividad para complementar el modulo de
          historial.
        </p>
        <button
          className="mt-5 h-10 cursor-pointer rounded-xl bg-blue-50 px-5 font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-100"
          type="button"
        >
          Ver logs de acceso
        </button>
      </article>
    </div>
  );
};
