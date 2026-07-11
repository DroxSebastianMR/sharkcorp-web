import {
  auditRows,
  historyFilterOptions,
  historyPaginationItems,
  historyStats,
} from "@/features/history/mocks/history.mock";

export const useHistoryOverview = () => {
  return {
    filterOptions: historyFilterOptions,
    paginationItems: historyPaginationItems,
    rows: auditRows,
    stats: historyStats,
  };
};
