import { CalendarDays, Paperclip, Plus } from "lucide-react";

import type { AnnouncementAccentColor } from "@/features/announcements/types/announcements.types";

type AnnouncementSettingsCardProps = {
  accentColor: AnnouncementAccentColor;
  accentColors: AnnouncementAccentColor[];
  onAccentColorChange: (color: AnnouncementAccentColor) => void;
};

export const AnnouncementSettingsCard = ({
  accentColor,
  accentColors,
  onAccentColorChange,
}: AnnouncementSettingsCardProps) => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="font-heading text-sm font-bold text-slate-700">
            Departamentos destino
          </span>
          <div className="mt-2 flex h-12 items-center gap-2 rounded-xl bg-slate-100 px-3">
            <span className="rounded-lg bg-[#0757ff] px-3 py-2 text-xs font-extrabold text-white">
              Todos los departamentos
            </span>
            <button
              className="flex cursor-pointer items-center gap-1 font-button text-xs font-bold text-[#0757ff]"
              type="button"
            >
              <Plus className="h-3.5 w-3.5" />
              Agregar
            </button>
          </div>
        </label>

        <label className="block">
          <span className="font-heading text-sm font-bold text-slate-700">
            Fecha y hora de publicacion
          </span>
          <div className="mt-2 flex h-12 items-center justify-between rounded-xl bg-slate-100 px-4 text-sm font-semibold text-slate-500">
            dd/mm/aaaa --:--
            <CalendarDays className="h-4 w-4 text-slate-700" />
          </div>
        </label>
      </div>

      <div className="mt-5">
        <p className="font-heading text-sm font-bold text-slate-700">
          Color de acento
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {accentColors.map((color) => (
            <button
              aria-label={`Seleccionar color ${color.label}`}
              className={[
                "h-7 w-7 cursor-pointer rounded-full ring-2 ring-offset-2 transition hover:scale-105",
                color.className,
                accentColor.value === color.value
                  ? "ring-[#0757ff]"
                  : "ring-transparent",
              ].join(" ")}
              key={color.value}
              onClick={() => onAccentColorChange(color)}
              type="button"
            />
          ))}
          <span className="h-7 w-px bg-slate-200" />
          <button
            className="flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
            type="button"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-300 bg-white">
              <Paperclip className="h-4 w-4" />
            </span>
            Personalizado
          </button>
        </div>
      </div>
    </article>
  );
};
