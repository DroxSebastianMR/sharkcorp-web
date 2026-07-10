import type { LucideIcon } from "lucide-react";

export type DashboardNavigationItem = {
  label: string;
  icon: LucideIcon;
  path?: string;
  expandable?: boolean;
  visible?: boolean;
  children?: DashboardNavigationItem[];
};
