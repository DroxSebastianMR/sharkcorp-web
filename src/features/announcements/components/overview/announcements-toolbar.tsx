import { Filter } from "lucide-react";

import type { AnnouncementTab } from "@/features/announcements/types/announcements.types";

type AnnouncementsToolbarProps = {
  tabs: AnnouncementTab[];
};

export const AnnouncementsToolbar = ({ tabs }: AnnouncementsToolbarProps) => {
  return (
    <section className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
      <div className="flex gap-6 text-sm font-semibold text-slate-500">
        {tabs.map((tab) => (
          <button
            className={[
              "cursor-pointer pb-3 transition hover:text-[#0757ff]",
              tab.active ? "border-b-2 border-[#0757ff] text-[#0757ff]" : "",
            ].join(" ")}
            key={tab.label}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <button
          className="flex h-10 cursor-pointer items-center gap-2 rounded-xl bg-white px-4 font-button text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-[#0757ff]"
          type="button"
        >
          Filtrar por departamento
        </button>
        <button
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-[#0757ff]"
          type="button"
        >
          <Filter className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
