import type { Announcement } from "@/features/dashboard/types/dashboard.types";

import { AnnouncementItem } from "./announcement-item";

interface AnnouncementsCardProps {
  announcements: Announcement[];
  title?: string;
}

export const AnnouncementsCard = ({
  announcements,
  title = "Anuncios recientes",
}: AnnouncementsCardProps) => {
  return (
    <article
      className="
      rounded-2xl
      bg-white
      p-6
      shadow-[0_16px_32px_rgba(14,43,92,0.1)]
      ring-1
      ring-slate-200/70
    "
    >
      <div className="flex items-center justify-between">
        <h2
          className="
          font-heading
          text-xl
          font-extrabold
          text-slate-950
        "
        >
          {title}
        </h2>

        <button
          type="button"
          className="
            font-button
            text-sm
            font-extrabold
            text-[#0757ff]
          "
        >
          Ver todos
        </button>
      </div>

      <div className="mt-6 space-y-5">
        {announcements.map((announcement) => (
          <AnnouncementItem key={announcement.id} announcement={announcement} />
        ))}
      </div>
    </article>
  );
};
