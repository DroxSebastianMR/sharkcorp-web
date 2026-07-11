import type { LucideIcon } from "lucide-react";

export type HistoryStat = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  iconClass: string;
  detailClass: string;
};

export type AuditLogRow = {
  date: string;
  user: string;
  initials: string;
  action: string;
  module: string;
  ip: string;
  status: string;
  statusClass: string;
  dotClass: string;
};

export type HistoryFilterOption = {
  label: string;
  value: string;
};

export type HistoryPaginationItem = number | "...";
