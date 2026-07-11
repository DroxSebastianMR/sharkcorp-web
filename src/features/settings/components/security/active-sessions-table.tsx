import { Monitor } from "lucide-react";

import type { SettingsSession } from "@/features/settings/types/settings.types";

type ActiveSessionsTableProps = {
  sessions: SettingsSession[];
};

export const ActiveSessionsTable = ({ sessions }: ActiveSessionsTableProps) => {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-5">
        <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
          <Monitor className="h-5 w-5 text-[#0757ff]" />
          Sesiones activas
        </h3>
        <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-extrabold text-[#0757ff]">
          4 sesiones en curso
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left">
          <thead>
            <tr className="bg-slate-50 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
              <th className="px-6 py-4">Dispositivo</th>
              <th className="px-6 py-4">Ubicacion</th>
              <th className="px-6 py-4">Ultima actividad</th>
              <th className="px-6 py-4 text-right">Accion</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(({ device, detail, location, activity, icon: Icon }) => (
              <tr className="border-t border-slate-100" key={device}>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-slate-600" />
                    <div>
                      <p className="font-heading text-sm font-extrabold text-slate-950">
                        {device}
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        {detail}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-slate-600">
                  {location}
                </td>
                <td className="px-6 py-5 text-sm font-medium text-slate-600">
                  {activity}
                </td>
                <td className="px-6 py-5 text-right">
                  <button
                    className="cursor-pointer font-button text-sm font-bold text-red-600 transition hover:text-red-700"
                    type="button"
                  >
                    Cerrar sesion
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};
