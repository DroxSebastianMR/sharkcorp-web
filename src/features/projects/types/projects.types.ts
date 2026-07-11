import type { LucideIcon } from "lucide-react";

export type ProjectStat = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  status: string;
  statusClass: string;
  client: string;
  description: string;
  progress: number;
  date: string;
  team: string[];
  priority: string;
  budget: string;
  owner: string;
  deliverables: string[];
};

export type ProjectPriority = {
  label: string;
  selected: boolean;
};

export type ProjectClientOption = {
  label: string;
  value: string;
};

export type ProjectTeamMember = {
  initials: string;
  name: string;
  role: string;
  selected: boolean;
};
