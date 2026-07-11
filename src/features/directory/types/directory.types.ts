import type { LucideIcon } from "lucide-react";

export type DirectoryNode = {
  id: string;
  title: string;
  subtitle: string;
  acronym?: string;
  icon: LucideIcon;
  accentClass: string;
  children?: DirectoryNode[];
};

export type DirectoryPerson = {
  initials: string;
  name: string;
  role: string;
  badge?: string;
  colorClass: string;
};

export type DirectoryDepartment = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  members: string;
  activeProjects: string;
  image: string;
  initials: string;
  parent: string;
  leaders: DirectoryPerson[];
  collaborators: DirectoryPerson[];
};
