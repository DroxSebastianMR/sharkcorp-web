import { QuickActionItem } from "@/features/dashboard/components/actions/quick-action-item";
import type { QuickAction } from "@/features/dashboard/types/dashboard.types";

interface QuickActionsProps {
  actions: QuickAction[];
  title?: string;
}

export const QuickActions = ({
  actions,
  title = "Accesos rápidos",
}: QuickActionsProps) => {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/70">
      <h2 className="font-heading text-lg font-extrabold text-slate-950">
        {title}
      </h2>

      <div className="mt-4 grid grid-cols-3 gap-3 xl:grid-cols-6">
        {actions
          .filter((action) => action.visible !== false)
          .map((action) => (
            <QuickActionItem key={action.id} action={action} />
          ))}
      </div>
    </section>
  );
};
