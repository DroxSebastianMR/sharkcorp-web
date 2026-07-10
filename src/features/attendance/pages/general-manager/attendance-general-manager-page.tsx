import { AttendancePageShell } from "@/features/attendance/components/layout/attendance-page-shell";
import { AttendanceSidePanels } from "@/features/attendance/components/summary/attendance-side-panels";
import { AttendanceSummaryCards } from "@/features/attendance/components/summary/attendance-summary-cards";
import { AttendanceTableCard } from "@/features/attendance/components/summary/attendance-table-card";
import { useAttendanceOverview } from "@/features/attendance/hooks/use-attendance-overview";

export const AttendanceGeneralManagerPage = () => {
  const { attendanceRows, attendanceSummaryCards, delayAlerts, weeklyBars } =
    useAttendanceOverview();

  return (
    <AttendancePageShell
      title="Resumen de asistencias"
      description="Monitorea presencia, puntualidad y alertas principales del equipo."
    >
      <AttendanceSummaryCards cards={attendanceSummaryCards} />

      <section className="mt-6 grid min-w-0 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
        <AttendanceTableCard rows={attendanceRows} />
        <AttendanceSidePanels delayAlerts={delayAlerts} weeklyBars={weeklyBars} />
      </section>
    </AttendancePageShell>
  );
};
