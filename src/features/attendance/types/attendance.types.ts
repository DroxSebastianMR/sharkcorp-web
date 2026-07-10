import type { LucideIcon } from "lucide-react";

export interface AttendancePageHeaderAction {
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "outline";
}

export interface AttendanceSummaryCard {
  label: string;
  value: string;
  suffix?: string;
  detail: string;
  tone: string;
  icon: LucideIcon;
  iconClass: string;
}

export interface AttendanceRow {
  name: string;
  email: string;
  department: string;
  status: string;
  statusClass: string;
  entry: string;
  exit: string;
  avatar: string;
  avatarClass: string;
}

export interface DelayAlert {
  name: string;
  detail: string;
  action: string;
}

export interface WeeklyBar {
  day: string;
  value: number;
}

export interface WeeklyComparisonItem {
  day: string;
  current: number;
  previous: number;
}

export interface GeneratedReport {
  name: string;
  detail: string;
  icon: LucideIcon;
}

export interface AttendanceDetailRow {
  initials: string;
  name: string;
  id: string;
  department: string;
  date: string;
  entry: string;
  exit: string;
  status: string;
  statusClass: string;
  avatarClass: string;
}

export interface AbsenceSummaryCard {
  value: string;
  label: string;
  detail: string;
  icon: LucideIcon;
  iconClass: string;
  detailClass: string;
}

export interface AbsenceChartItem {
  department: string;
  justified: number;
  unjustified: number;
}

export interface RecurrenceAlert {
  name: string;
  detail: string;
  avatar: string;
  color: string;
}

export interface UpcomingLeave {
  month: string;
  day: string;
  title: string;
  detail: string;
}

export interface AbsenceIncident {
  initials: string;
  name: string;
  id: string;
  date: string;
  type: string;
  typeClass: string;
  department: string;
  status: string;
  statusColor: string;
}

export interface PendingJustification {
  name: string;
  role: string;
  type: string;
  typeClass: string;
  message: string;
  file: string;
  fileIcon: LucideIcon;
  sentAt: string;
  avatar: string;
  avatarClass: string;
}

export interface RecentResolution {
  status: string;
  title: string;
  detail: string;
  time: string;
  color: string;
}
