import { ChevronLeft, ChevronRight } from "lucide-react";

import type {
  ScheduleCalendarDay,
  ScheduleLegendItem,
} from "@/features/schedule/types/schedule.types";

type ScheduleCalendarCardProps = {
  days: ScheduleCalendarDay[];
  eventTypeLegends: ScheduleLegendItem[];
  importanceLegends: ScheduleLegendItem[];
  weekdays: string[];
};

export const ScheduleCalendarCard = ({
  days,
  eventTypeLegends,
  importanceLegends,
  weekdays,
}: ScheduleCalendarCardProps) => {
  return (
    <article className="rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-5">
        <div className="flex items-center gap-4">
          <h3 className="font-heading text-xl font-extrabold text-slate-950">
            Octubre 2023
          </h3>
          <CalendarNavButton label="Mes anterior" icon="left" />
          <CalendarNavButton label="Mes siguiente" icon="right" />
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
          Vista mensual
        </span>
      </div>

      <div className="schedule-week-grid border-b border-slate-100 bg-slate-50 text-center text-[11px] font-extrabold text-slate-500">
        {weekdays.map((day) => (
          <div className="py-4" key={day}>
            {day}
          </div>
        ))}
      </div>

      <div className="schedule-month-grid">
        {days.map((cell, index) => (
          <ScheduleCalendarCell cell={cell} index={index} key={`${cell.day}-${index}`} />
        ))}
      </div>

      <ScheduleLegends
        eventTypeLegends={eventTypeLegends}
        importanceLegends={importanceLegends}
      />
    </article>
  );
};

type CalendarNavButtonProps = {
  icon: "left" | "right";
  label: string;
};

const CalendarNavButton = ({ icon, label }: CalendarNavButtonProps) => {
  const Icon = icon === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      aria-label={label}
      className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-[#0757ff]"
      type="button"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
};

type ScheduleCalendarCellProps = {
  cell: ScheduleCalendarDay;
  index: number;
};

const ScheduleCalendarCell = ({ cell }: ScheduleCalendarCellProps) => {
  return (
    <div
      className={[
        "min-h-[116px] border-b border-r border-slate-100 p-3 last:border-r-0",
        cell.blocked ? "bg-slate-100/80" : "bg-white",
      ].join(" ")}
    >
      <div
        className={[
          "grid h-6 w-6 place-items-center rounded-full text-xs font-extrabold",
          cell.active
            ? "bg-[#0757ff] text-white"
            : cell.muted
              ? "text-slate-300"
              : "text-slate-800",
        ].join(" ")}
      >
        {cell.day}
      </div>

      <div className="mt-2 space-y-1.5">
        {cell.events?.map((event) => (
          <button
            className={[
              "w-full cursor-pointer truncate rounded-md px-2 py-1 text-left text-[10px] font-bold transition",
              event.tone === "blue"
                ? "bg-blue-50 text-[#0757ff] hover:bg-blue-100"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200",
            ].join(" ")}
            key={event.label}
            type="button"
          >
            {event.label}
          </button>
        ))}
      </div>
    </div>
  );
};

type ScheduleLegendsProps = {
  eventTypeLegends: ScheduleLegendItem[];
  importanceLegends: ScheduleLegendItem[];
};

const ScheduleLegends = ({
  eventTypeLegends,
  importanceLegends,
}: ScheduleLegendsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 px-6 py-4">
      <LegendGroup items={eventTypeLegends} title="Tipo de evento" />
      <LegendGroup items={importanceLegends} title="Importancia" />
    </div>
  );
};

type LegendGroupProps = {
  items: ScheduleLegendItem[];
  title: string;
};

const LegendGroup = ({ items, title }: LegendGroupProps) => {
  return (
    <div>
      <p className="font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
        {title}
      </p>
      <div className="mt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
        {items.map((item) => (
          <span className="flex items-center gap-2" key={item.label}>
            <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};
