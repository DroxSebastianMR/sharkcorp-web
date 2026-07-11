import type { LucideIcon } from "lucide-react";

export type SettingsPageHeader = {
  title: string;
  description: string;
};

export type SettingsSession = {
  device: string;
  detail: string;
  location: string;
  activity: string;
  icon: LucideIcon;
};

export type SettingsField = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type ToggleItem = {
  title: string;
  detail: string;
  enabled: boolean;
};

export type IntegrationItem = {
  name: string;
  detail: string;
  status: string;
  statusClass: string;
  icon: LucideIcon;
};

export type IntegrationLog = {
  service: string;
  action: string;
  status: string;
  date: string;
  user: string;
};

export type BackupMetric = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};
