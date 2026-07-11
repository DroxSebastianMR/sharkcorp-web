import { CalendarDays, MoreVertical, Pin } from "lucide-react";

import type { AnnouncementCard } from "@/features/announcements/types/announcements.types";

type AnnouncementCardsGridProps = {
  cards: AnnouncementCard[];
};

export const AnnouncementCardsGrid = ({ cards }: AnnouncementCardsGridProps) => {
  return (
    <section className="mt-5 grid gap-5 lg:grid-cols-3">
      {cards.map((card) => (
        <article
          className={[
            "flex min-h-[250px] flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(14,43,92,0.08)]",
            card.muted ? "opacity-70" : "",
          ].join(" ")}
          key={card.title}
        >
          <div className="flex items-start justify-between">
            <span
              className={`rounded-md px-3 py-1 text-[10px] font-extrabold uppercase ${card.statusClass}`}
            >
              {card.status}
            </span>
            {card.pinned ? (
              <Pin className="h-4 w-4 text-slate-500" />
            ) : (
              <MoreVertical className="h-4 w-4 text-slate-500" />
            )}
          </div>
          <h3 className="mt-5 max-w-xs font-heading text-xl font-extrabold leading-tight text-slate-950">
            {card.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Target: {card.target}
          </p>
          {card.pinned ? (
            <div className="mt-4 h-24 rounded-xl bg-[linear-gradient(135deg,#e9eef8,#ffffff_40%,#cbd8ee)]" />
          ) : (
            <p className="mt-6 text-sm font-medium leading-relaxed text-slate-600">
              {card.detail}
            </p>
          )}
          <div className="mt-auto flex items-center justify-between pt-5">
            <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <CalendarDays className="h-4 w-4" />
              {card.footer}
            </span>
            {card.pinned ? (
              <button
                className="cursor-pointer text-sm font-bold text-[#0757ff]"
                type="button"
              >
                Gestionar
              </button>
            ) : null}
          </div>
        </article>
      ))}
    </section>
  );
};
