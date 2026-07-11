import type { LucideIcon } from "lucide-react";

export type DocumentCategory = {
  label: string;
  count: number;
  active?: boolean;
};

export type CompanyDocument = {
  name: string;
  size: string;
  category: string;
  date: string;
  icon: LucideIcon;
  iconClass: string;
};

export type DocumentPaginationItem = {
  key: string;
  label?: string;
  active?: boolean;
  icon?: LucideIcon;
};

export type DocumentSizeFilter = {
  label: string;
  active: boolean;
};

export type DocumentCategoryOption = {
  label: string;
  value: string;
};
