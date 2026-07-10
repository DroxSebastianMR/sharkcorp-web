import {
  absenceChartData,
  absenceSummaryCards,
  incidents,
  recurrenceAlerts,
  upcomingLeaves,
} from "@/features/attendance/mocks/attendance.mock";

export const useAttendanceAbsences = () => {
  return {
    absenceChartData,
    absenceSummaryCards,
    incidents,
    recurrenceAlerts,
    upcomingLeaves,
  };
};
