import { Settings } from "lucide-react";

import type { IntegrationItem } from "@/features/settings/types/settings.types";

type IntegrationCardProps = {
  integration: IntegrationItem;
};

export const IntegrationCard = ({ integration }: IntegrationCardProps) => {
  const Icon = integration.icon;

  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex items-start justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-50 text-[#0757ff]">
          <Icon className="h-6 w-6" />
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-extrabold ${integration.statusClass}`}
        >
          {integration.status}
        </span>
      </div>
      <h3 className="mt-6 font-heading text-xl font-extrabold text-slate-950">
        {integration.name}
      </h3>
      <p className="mt-2 min-h-16 text-sm font-medium leading-relaxed text-slate-500">
        {integration.detail}
      </p>
      <button
        className="mt-5 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0757ff] px-4 font-button text-sm font-bold text-white transition hover:bg-[#064be0]"
        type="button"
      >
        <Settings className="h-4 w-4" />
        Configurar
      </button>
    </article>
  );
};
