import { FilePlus2, Filter, Plus } from "lucide-react";

import { AttendancePageShell } from "@/features/attendance/components/layout/attendance-page-shell";
import { RecordsReportsContent } from "@/features/attendance/components/records/records-reports-content";
import { useAttendanceRecordsReports } from "@/features/attendance/hooks/use-attendance-records-reports";

export const AttendanceRecordsReportsPage = () => {
  const { attendanceDetails, generatedReports, weeklyComparison } =
    useAttendanceRecordsReports();

  return (
    <AttendancePageShell
      title="Registro y reportes"
      description="Gestiona registros, filtros y reportes consolidados de asistencia."
      actions={[
        { label: "Generar reporte", icon: FilePlus2, variant: "primary" },
        { label: "Filtros avanzados", icon: Filter, variant: "secondary" },
        { label: "Nuevo registro", icon: Plus, variant: "outline" },
      ]}
    >
      <RecordsReportsContent
        attendanceDetails={attendanceDetails}
        generatedReports={generatedReports}
        weeklyComparison={weeklyComparison}
      />
    </AttendancePageShell>
  );
};
