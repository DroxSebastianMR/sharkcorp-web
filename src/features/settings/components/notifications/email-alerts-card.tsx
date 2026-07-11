import { Mail } from "lucide-react";

import { TogglePill } from "@/features/settings/components/shared/toggle-pill";
import type { ToggleItem } from "@/features/settings/types/settings.types";

type EmailAlertsCardProps = {
  alerts: ToggleItem[];
};

export const EmailAlertsCard = ({ alerts }: EmailAlertsCardProps) => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
        <Mail className="h-5 w-5 text-[#0757ff]" />
        Notificaciones por correo
      </h3>
      <div className="mt-6 space-y-4">
        {alerts.map((alert) => (
          <div
            className="flex items-center justify-between gap-4 rounded-xl bg-slate-100 p-4"
            key={alert.title}
          >
            <div>
              <p className="font-heading text-sm font-extrabold text-slate-950">
                {alert.title}
              </p>
              <p className="text-xs font-medium text-slate-500">
                {alert.detail}
              </p>
            </div>
            <TogglePill enabled={alert.enabled} label={alert.title} />
          </div>
        ))}
      </div>
    </article>
  );
};
