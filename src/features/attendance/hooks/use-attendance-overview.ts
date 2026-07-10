import {
  attendanceRows,
  attendanceSummaryCards,
  delayAlerts,
  weeklyBars,
} from "@/features/attendance/mocks/attendance.mock";

export const useAttendanceOverview = () => {
  return {
    attendanceRows,
    attendanceSummaryCards,
    delayAlerts,
    weeklyBars,
  };
};
