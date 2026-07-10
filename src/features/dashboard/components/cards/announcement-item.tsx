import { Megaphone, MoreVertical } from "lucide-react";

import type { Announcement } from "@/features/dashboard/types/dashboard.types";

interface AnnouncementItemProps {
  announcement: Announcement;
}

const colorStyles = {
  blue: "bg-blue-50 text-[#0757ff]",
  emerald: "bg-emerald-50 text-emerald-600",
  violet: "bg-violet-50 text-violet-600",
};

export const AnnouncementItem = ({ announcement }: AnnouncementItemProps) => {
  const { title, description, createdAt, color } = announcement;

  return (
    <div className="flex items-center gap-4">
      <span
        className={`
          grid
          h-13
          w-13
          place-items-center
          rounded-2xl
          ${colorStyles[color]}
        `}
      >
        <Megaphone className="h-6 w-6" strokeWidth={2.3} />
      </span>

      <div className="min-w-0 flex-1">
        <h3
          className="
          truncate
          font-heading
          text-sm
          font-extrabold
          text-slate-950
        "
        >
          {title}
        </h3>

        <p
          className="
          truncate
          text-xs
          font-medium
          text-slate-500
        "
        >
          {description}
        </p>

        <p
          className="
          mt-1
          text-xs
          font-medium
          text-slate-400
        "
        >
          {createdAt}
        </p>
      </div>

      <button
        type="button"
        aria-label="Más opciones"
        className="
          grid
          h-9
          w-9
          place-items-center
          rounded-full
          text-slate-500
          hover:bg-slate-100
        "
      >
        <MoreVertical className="h-5 w-5" />
      </button>
    </div>
  );
};
