import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import {
  scheduleImportanceOptions,
  schedulePreviewDays,
  selectedScheduleParticipants,
  suggestedScheduleParticipants,
} from "@/features/schedule/mocks/schedule.mock";

export const useScheduleCreateEvent = () => {
  const navigate = useNavigate();

  return {
    importanceOptions: scheduleImportanceOptions,
    onBack: () => navigate(PATHS.SCHEDULE.HOME),
    previewDays: schedulePreviewDays,
    selectedParticipants: selectedScheduleParticipants,
    suggestedParticipants: suggestedScheduleParticipants,
  };
};
