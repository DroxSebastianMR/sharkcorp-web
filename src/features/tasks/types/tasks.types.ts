import type { LucideIcon } from "lucide-react";

export type TaskStat = {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
};

export type StrategicTask = {
  title: string;
  detail: string;
  priority: string;
  priorityClass: string;
  status: string;
  statusColor: string;
  due: string;
  action: string;
};

export type TaskWorkloadItem = {
  label: string;
  value: number;
};

export type TaskPriority = {
  label: string;
  selected: boolean;
};

export type TaskDepartmentOption = {
  label: string;
  value: string;
};
