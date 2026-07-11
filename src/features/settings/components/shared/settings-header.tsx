import type { ReactNode } from "react";

import type { SettingsPageHeader } from "@/features/settings/types/settings.types";

type SettingsHeaderProps = {
  actions?: ReactNode;
  header: SettingsPageHeader;
};

export const SettingsHeader = ({ actions, header }: SettingsHeaderProps) => {
  return (
    <section className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          {header.title}
        </h2>
        <p className="mt-1 max-w-3xl text-sm font-medium leading-relaxed text-slate-500">
          {header.description}
        </p>
      </div>
      {actions}
    </section>
  );
};
