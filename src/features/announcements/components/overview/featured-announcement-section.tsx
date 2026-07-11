import { CalendarDays } from "lucide-react";

export const FeaturedAnnouncementSection = () => {
  return (
    <section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
      <article className="grid overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70 md:grid-cols-[210px_minmax(0,1fr)]">
        <div className="relative min-h-[280px] overflow-hidden bg-[#0c4ccf]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.55),transparent_22%),linear-gradient(135deg,#0a62df,#06236d)]" />
          <div className="absolute left-7 top-8 h-28 w-28 rounded-full bg-white/18 blur-sm" />
          <div className="absolute bottom-8 left-6 right-6 rounded-2xl border border-white/18 bg-white/12 p-4 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              SharkCorp
            </p>
            <p className="mt-2 font-heading text-xl font-extrabold text-white">
              Infraestructura 2024
            </p>
          </div>
          <span className="absolute left-5 top-5 rounded-md bg-emerald-100 px-3 py-1 text-[10px] font-extrabold uppercase text-emerald-700">
            Active
          </span>
        </div>
        <div className="flex min-w-0 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
              TI / Infraestructura
            </span>
            <span className="text-sm font-medium text-slate-500">Oct 24, 2023</span>
          </div>
          <h3 className="mt-5 max-w-md font-heading text-3xl font-extrabold leading-tight text-slate-950">
            Actualizacion de infraestructura de nube 2024
          </h3>
          <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-slate-600">
            Iniciaremos la migracion global a los nuevos servidores de alta
            disponibilidad. Este cambio mejorara la latencia en un 40% para
            todas nuestras sedes internacionales...
          </p>
          <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-5">
            <div className="flex -space-x-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-[10px] font-extrabold text-slate-500 ring-2 ring-white">
                HR
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0757ff] text-[10px] font-extrabold text-white ring-2 ring-white">
                CEO
              </span>
            </div>
            <button
              className="cursor-pointer font-button text-sm font-bold text-[#0757ff] transition hover:text-[#064be0]"
              type="button"
            >
              Ver detalles
            </button>
          </div>
        </div>
      </article>

      <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <h3 className="font-heading text-2xl font-extrabold leading-tight text-slate-950">
          Recordatorio de feedback
        </h3>
        <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
          No olvides que el proceso de evaluacion semestral cierra en 3 dias.
          Asegurate de que todos los gerentes hayan enviado sus reportes.
        </p>
        <div className="mt-6 flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-red-600">
            <CalendarDays className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-extrabold text-slate-950">
              Cierre de nomina
            </p>
            <p className="text-xs font-medium text-slate-500">
              Manana, 17:00 HRS
            </p>
          </div>
        </div>
        <button
          className="mt-6 h-11 w-full cursor-pointer rounded-xl border border-[#0757ff] font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-50"
          type="button"
        >
          Revisar pendientes
        </button>
      </article>
    </section>
  );
};
