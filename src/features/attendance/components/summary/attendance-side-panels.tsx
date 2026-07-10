import { AlertTriangle } from "lucide-react";

import type {
  DelayAlert,
  WeeklyBar,
} from "@/features/attendance/types/attendance.types";

interface AttendanceSidePanelsProps {
  delayAlerts: DelayAlert[];
  weeklyBars: WeeklyBar[];
}

export const AttendanceSidePanels = ({
  delayAlerts,
  weeklyBars,
}: AttendanceSidePanelsProps) => {
  return (
    <aside className="min-w-0 space-y-5">
      <article className="rounded-3xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-extrabold text-slate-950">
            Alertas de retraso hoy
          </h3>
          <button
            className="cursor-pointer font-button text-sm font-bold text-[#0757ff]"
            type="button"
          >
            Ver todo
          </button>
        </div>
        <div className="mt-5 space-y-3">
          {delayAlerts.map((alert) => (
            <div
              className="grid grid-cols-[44px_minmax(0,1fr)] gap-3 rounded-2xl border border-amber-200 bg-amber-50/40 p-4"
              key={alert.name}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-amber-100 text-amber-500">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-heading text-sm font-bold text-slate-950">
                  {alert.name}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  {alert.detail}
                </p>
              </div>
              <button
                className="col-span-2 h-8 cursor-pointer rounded-lg border border-amber-300 bg-white px-3 font-button text-xs font-bold text-amber-600 transition hover:bg-amber-100"
                type="button"
              >
                {alert.action}
              </button>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-3xl bg-[#074fe9] p-5 text-white shadow-[0_18px_38px_rgba(7,87,255,0.22)]">
        <h3 className="font-heading text-lg font-extrabold">Resumen semanal</h3>
        <p className="mt-3 max-w-sm text-sm font-medium text-blue-100">
          La asistencia promedio subio un 4% comparado a la semana anterior.
        </p>
        <div className="mt-5 flex h-28 items-end gap-4">
          {weeklyBars.map(({ day, value }) => (
            <div className="flex flex-1 flex-col items-center gap-3" key={day}>
              <div
                className="w-full rounded-t-lg bg-white/12"
                style={{ height: `${value}%` }}
              />
              <span className="text-[10px] font-extrabold text-blue-100">
                {day}
              </span>
            </div>
          ))}
        </div>
      </article>
    </aside>
  );
};
