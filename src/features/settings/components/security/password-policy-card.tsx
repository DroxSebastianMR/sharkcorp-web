import { ChevronDown, LockKeyhole, Save } from "lucide-react";

export const PasswordPolicyCard = () => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-[#0757ff]">
          <LockKeyhole className="h-6 w-6" />
        </span>
        <h3 className="font-heading text-xl font-extrabold text-slate-950">
          Politicas de contrasena
        </h3>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {[
          ["Complejidad minima", "Fuerte (A-z, 0-9, !@#)"],
          ["Expiracion", "90 dias"],
        ].map(([label, value]) => (
          <label className="block" key={label}>
            <span className="font-heading text-sm font-bold text-slate-700">
              {label}
            </span>
            <button
              className="mt-2 flex h-14 w-full cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-5 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
              type="button"
            >
              {value}
              <ChevronDown className="h-4 w-4" />
            </button>
          </label>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          className="flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
          type="button"
        >
          <Save className="h-4 w-4" />
          Actualizar politicas
        </button>
      </div>
    </article>
  );
};
