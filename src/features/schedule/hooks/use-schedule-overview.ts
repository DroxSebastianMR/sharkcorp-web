import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import {
  scheduleCalendarDays,
  scheduleCommitments,
  scheduleDayOptions,
  scheduleEventTypeLegends,
  scheduleImportanceLegends,
  scheduleMonthOptions,
  scheduleTodayHighlights,
  scheduleWeekdays,
  scheduleYearOptions,
} from "@/features/schedule/mocks/schedule.mock";

export const useScheduleOverview = () => {
  const navigate = useNavigate();

  return {
    calendarDays: scheduleCalendarDays,
    commitments: scheduleCommitments,
    dayOptions: scheduleDayOptions,
    eventTypeLegends: scheduleEventTypeLegends,
    importanceLegends: scheduleImportanceLegends,
    monthOptions: scheduleMonthOptions,
    onCreateEvent: () => navigate(PATHS.SCHEDULE.CREATE),
    todayHighlights: scheduleTodayHighlights,
    weekdays: scheduleWeekdays,
    yearOptions: scheduleYearOptions,
  };
};
