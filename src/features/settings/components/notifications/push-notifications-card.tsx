import { Bell, CalendarDays, Save } from "lucide-react";

import type { ToggleItem } from "@/features/settings/types/settings.types";

type PushNotificationsCardProps = {
  pushCards: ToggleItem[];
};

export const PushNotificationsCard = ({
  pushCards,
}: PushNotificationsCardProps) => {
  return (
    <section className="mt-6 rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
          <CalendarDays className="h-5 w-5 text-[#0757ff]" />
          Notificaciones push
        </h3>
        <div className="flex gap-3">
          <button
            className="h-10 cursor-pointer rounded-xl border border-slate-200 px-5 font-button text-sm font-bold text-slate-600"
            type="button"
          >
            Pausar todo
          </button>
          <button
            className="h-10 cursor-pointer rounded-xl bg-[#0757ff] px-5 font-button text-sm font-bold text-white"
            type="button"
          >
            Probar notificacion
          </button>
        </div>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {pushCards.map((card) => (
          <article
            className={[
              "rounded-xl border p-5",
              card.enabled
                ? "border-[#0757ff] bg-blue-50"
                : "border-slate-200 bg-white",
            ].join(" ")}
            key={card.title}
          >
            <Bell className="h-5 w-5 text-[#0757ff]" />
            <p className="mt-5 font-heading text-sm font-extrabold text-slate-950">
              {card.title}
            </p>
            <p className="mt-2 text-xs font-medium leading-relaxed text-slate-500">
              {card.detail}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-7 flex justify-end gap-4">
        <button
          className="h-11 cursor-pointer rounded-xl border border-slate-200 px-6 font-button text-sm font-bold text-slate-600"
          type="button"
        >
          Descartar cambios
        </button>
        <button
          className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white"
          type="button"
        >
          <Save className="h-4 w-4" />
          Guardar configuracion
        </button>
      </div>
    </section>
  );
};
