import { DashboardStatCard } from "@/features/dashboard/components/cards/dashboard-stat-card";
import type { LucideIcon } from "lucide-react";

export interface DashboardStatCardItem {
  label: string;
  value: string | number;
  detail: string;
  color: string;
  sparkline: string;
  icon: LucideIcon;
}

interface DashboardStatCardsProps {
  cards: DashboardStatCardItem[];
}

export const DashboardStatCards = ({ cards }: DashboardStatCardsProps) => {
  return (
    <section className="grid gap-5 xl:grid-cols-4">
      {cards.map((card) => (
        <DashboardStatCard key={card.label} {...card} />
      ))}
    </section>
  );
};
