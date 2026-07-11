import { FileText, Link2 } from "lucide-react";

export const CustomWebhooksCard = () => {
  return (
    <article className="rounded-2xl border border-dashed border-slate-300 bg-white p-6">
      <Link2 className="h-7 w-7 text-[#0757ff]" />
      <h3 className="mt-5 font-heading text-xl font-extrabold text-slate-950">
        API Custom Webhooks
      </h3>
      <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
        Crea conexiones personalizadas REST y webhooks en tiempo real.
      </p>
      <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-500">
        <FileText className="h-4 w-4" />
        12 endpoints activos
      </div>
      <button
        className="mt-6 h-11 w-full cursor-pointer rounded-xl bg-slate-900 font-button text-sm font-bold text-white"
        type="button"
      >
        Documentacion API
      </button>
    </article>
  );
};
