import type { LucideIcon } from "lucide-react";

export type DialogIntent = "blue" | "green" | "red" | "amber" | "slate";

export type DialogKind =
  | "confirm"
  | "detail"
  | "form"
  | "selector"
  | "upload"
  | "preview"
  | "advanced-filter"
  | "approval"
  | "critical-action"
  | "success"
  | "critical";

export type DialogVariant = {
  id: string;
  group: string;
  kind: DialogKind;
  title: string;
  description: string;
  actionLabel: string;
  cancelLabel?: string;
  icon: LucideIcon;
  actionIcon: LucideIcon;
  intent: DialogIntent;
};

export type DialogIntentStyle = {
  soft: string;
  action: string;
  border: string;
  badge: string;
};
