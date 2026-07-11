import { ScheduleCalendarCard } from "@/features/schedule/components/calendar/schedule-calendar-card";
import { SchedulePageShell } from "@/features/schedule/components/layout/schedule-page-shell";
import { ScheduleFilters } from "@/features/schedule/components/overview/schedule-filters";
import { ScheduleHeader } from "@/features/schedule/components/overview/schedule-header";
import { ScheduleSidePanel } from "@/features/schedule/components/overview/schedule-side-panel";
import { useScheduleOverview } from "@/features/schedule/hooks/use-schedule-overview";

export const ScheduleGeneralManagerPage = () => {
  const {
    calendarDays,
    commitments,
    dayOptions,
    eventTypeLegends,
    importanceLegends,
    monthOptions,
    onCreateEvent,
    todayHighlights,
    weekdays,
    yearOptions,
  } = useScheduleOverview();

  return (
    <SchedulePageShell>
      <ScheduleHeader onCreateEvent={onCreateEvent} />
      <ScheduleFilters
        dayOptions={dayOptions}
        monthOptions={monthOptions}
        yearOptions={yearOptions}
      />

      <section className="schedule-layout mt-6">
        <ScheduleCalendarCard
          days={calendarDays}
          eventTypeLegends={eventTypeLegends}
          importanceLegends={importanceLegends}
          weekdays={weekdays}
        />
        <ScheduleSidePanel commitments={commitments} highlights={todayHighlights} />
      </section>
    </SchedulePageShell>
  );
};
