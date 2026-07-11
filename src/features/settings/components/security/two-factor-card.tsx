import { ShieldCheck } from "lucide-react";

export const TwoFactorCard = () => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-[#0757ff]">
          <ShieldCheck className="h-6 w-6" />
        </span>
        <button
          aria-label="Activar autenticacion de dos pasos"
          className="flex h-8 w-14 cursor-pointer items-center justify-end rounded-full bg-[#0757ff] p-1"
          type="button"
        >
          <span className="h-6 w-6 rounded-full bg-white shadow-sm" />
        </button>
      </div>
      <h3 className="mt-7 font-heading text-xl font-extrabold text-slate-950">
        Autenticacion de dos pasos
      </h3>
      <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
        Anade una capa extra de seguridad para todos los usuarios de la
        plataforma.
      </p>
      <button
        className="mt-7 cursor-pointer font-button text-sm font-bold text-[#0757ff]"
        type="button"
      >
        Configurar metodos
      </button>
    </article>
  );
};
