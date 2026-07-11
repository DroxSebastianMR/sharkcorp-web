import type { LucideIcon } from "lucide-react";

export type ClientStat = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  color: string;
  cardClass: string;
};

export type Client = {
  initials: string;
  name: string;
  id: string;
  company: string;
  sector: string;
  email: string;
  phone: string;
  status: string;
  statusClass: string;
  avatarClass: string;
};

export type ClientIndustryOption = {
  label: string;
  value: string;
};
