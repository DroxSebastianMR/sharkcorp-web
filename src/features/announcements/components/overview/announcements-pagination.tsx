import type { AnnouncementPaginationItem } from "@/features/announcements/types/announcements.types";

type AnnouncementsPaginationProps = {
  items: AnnouncementPaginationItem[];
};

export const AnnouncementsPagination = ({
  items,
}: AnnouncementsPaginationProps) => {
  return (
    <section className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm font-medium text-slate-600">
      <p>Mostrando 4 de 48 anuncios corporativos</p>
      <div className="flex gap-2">
        {items.map(({ key, icon: Icon, label, active }) => (
          <button
            className={[
              "grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-slate-200 font-button text-sm font-bold transition",
              active
                ? "bg-[#0757ff] text-white"
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-[#0757ff]",
            ].join(" ")}
            key={key}
            type="button"
          >
            {Icon ? <Icon className="h-4 w-4" /> : label}
          </button>
        ))}
      </div>
    </section>
  );
};
