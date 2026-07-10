import {
  pendingJustifications,
  recentResolutions,
} from "@/features/attendance/mocks/attendance.mock";

export const useAttendanceJustifications = () => {
  return {
    pendingJustifications,
    recentResolutions,
  };
};
