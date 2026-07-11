import { ScheduleParticipantsCard } from "@/features/schedule/components/create/schedule-participants-card";
import { SchedulePreviewCard } from "@/features/schedule/components/create/schedule-preview-card";
import type {
  ScheduleParticipant,
  ScheduleSuggestedParticipant,
} from "@/features/schedule/types/schedule.types";

type ScheduleCreateSidePanelProps = {
  previewDays: string[];
  selectedParticipants: ScheduleParticipant[];
  suggestedParticipants: ScheduleSuggestedParticipant[];
};

export const ScheduleCreateSidePanel = ({
  previewDays,
  selectedParticipants,
  suggestedParticipants,
}: ScheduleCreateSidePanelProps) => {
  return (
    <aside className="space-y-5">
      <ScheduleParticipantsCard
        selectedParticipants={selectedParticipants}
        suggestedParticipants={suggestedParticipants}
      />
      <SchedulePreviewCard previewDays={previewDays} />
    </aside>
  );
};
