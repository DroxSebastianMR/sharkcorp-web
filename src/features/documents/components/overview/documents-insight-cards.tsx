import { FileText, Send, Sparkles } from "lucide-react";

export const DocumentsInsightCards = () => {
  return (
    <section className="grid gap-5 md:grid-cols-2">
      <article className="relative overflow-hidden rounded-2xl bg-[#0757ff] p-6 text-white shadow-[0_16px_32px_rgba(7,87,255,0.22)]">
        <Sparkles className="h-7 w-7 text-blue-100" />
        <h3 className="mt-5 font-heading text-xl font-extrabold">
          Resumen inteligente
        </h3>
        <p className="mt-2 max-w-sm text-sm font-medium leading-relaxed text-blue-50">
          Obten un resumen de tus contratos mas recientes con nuestra IA integrada.
        </p>
        <button
          className="mt-5 h-10 cursor-pointer rounded-xl bg-white px-5 font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-50"
          type="button"
        >
          Probar ahora
        </button>
        <FileText className="absolute -bottom-4 right-4 h-28 w-28 text-white/12" />
      </article>

      <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-red-500">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Pendiente de firma
        </div>
        <h3 className="mt-4 font-heading text-xl font-extrabold text-slate-950">
          Acuerdo de servicio global
        </h3>
        <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
          Revision requerida para el departamento legal de SharkCorp Global.
        </p>
        <button
          className="mt-6 flex cursor-pointer items-center gap-2 font-button text-sm font-bold text-[#0757ff]"
          type="button"
        >
          Revisar documento
          <Send className="h-4 w-4" />
        </button>
      </article>
    </section>
  );
};
