import { ScheduleCreateHeader } from "@/features/schedule/components/create/schedule-create-header";
import { ScheduleCreateSidePanel } from "@/features/schedule/components/create/schedule-create-side-panel";
import { ScheduleEventForm } from "@/features/schedule/components/create/schedule-event-form";
import { SchedulePageShell } from "@/features/schedule/components/layout/schedule-page-shell";
import { useScheduleCreateEvent } from "@/features/schedule/hooks/use-schedule-create-event";

export const ScheduleCreateEventPage = () => {
  const {
    importanceOptions,
    onBack,
    previewDays,
    selectedParticipants,
    suggestedParticipants,
  } = useScheduleCreateEvent();

  return (
    <SchedulePageShell>
      <ScheduleCreateHeader onBack={onBack} />

      <section className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <ScheduleEventForm importanceOptions={importanceOptions} onCancel={onBack} />
        <ScheduleCreateSidePanel
          previewDays={previewDays}
          selectedParticipants={selectedParticipants}
          suggestedParticipants={suggestedParticipants}
        />
      </section>
    </SchedulePageShell>
  );
};
