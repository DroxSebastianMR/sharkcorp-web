import type { LucideIcon } from "lucide-react";

export interface AttendanceItem {
  day: string;
  value: number;
}

export interface AttendanceChartProps {
  data: AttendanceItem[];
  average: number;
  variation: string;
  periodLabel?: string;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
  visible?: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  color: "blue" | "emerald" | "violet";
}
