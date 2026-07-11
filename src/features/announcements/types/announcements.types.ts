import type { LucideIcon } from "lucide-react";

export type AnnouncementMetric = {
  label: string;
  value: string;
  icon: LucideIcon;
  iconClassName: string;
  valueClassName: string;
};

export type AnnouncementCard = {
  status: string;
  statusClass: string;
  title: string;
  target: string;
  detail: string;
  footer: string;
  muted: boolean;
  pinned?: boolean;
};

export type AnnouncementPaginationItem = {
  key: string;
  label?: string;
  active?: boolean;
  icon?: LucideIcon;
};

export type AnnouncementTab = {
  label: string;
  active: boolean;
};

export type AnnouncementAccentColor = {
  label: string;
  className: string;
  value: string;
};
