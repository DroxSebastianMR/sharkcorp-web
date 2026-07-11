import { HistoryPageShell } from "@/features/history/components/layout/history-page-shell";
import { AuditLogTable } from "@/features/history/components/overview/audit-log-table";
import { HistoryFilters } from "@/features/history/components/overview/history-filters";
import { HistoryHeader } from "@/features/history/components/overview/history-header";
import { HistoryStatsGrid } from "@/features/history/components/overview/history-stats-grid";
import { useHistoryOverview } from "@/features/history/hooks/use-history-overview";

export const HistoryGeneralManagerPage = () => {
  const { filterOptions, paginationItems, rows, stats } = useHistoryOverview();

  return (
    <HistoryPageShell>
      <HistoryHeader />
      <HistoryStatsGrid stats={stats} />
      <HistoryFilters filterOptions={filterOptions} />
      <AuditLogTable paginationItems={paginationItems} rows={rows} />
    </HistoryPageShell>
  );
};
