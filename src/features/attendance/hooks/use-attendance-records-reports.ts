import {
  attendanceDetails,
  generatedReports,
  weeklyComparison,
} from "@/features/attendance/mocks/attendance.mock";

export const useAttendanceRecordsReports = () => {
  return {
    attendanceDetails,
    generatedReports,
    weeklyComparison,
  };
};
