import type { QuickAction } from "@/features/dashboard/types/dashboard.types";

interface QuickActionItemProps {
  action: QuickAction;
}

export const QuickActionItem = ({ action }: QuickActionItemProps) => {
  const { label, icon: Icon, color, onClick, disabled } = action;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="
        group
        flex
        flex-col
        items-center
        gap-2
        rounded-2xl
        px-2
        py-3
        text-center
        transition
        hover:bg-slate-50
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      <span
        className={`grid h-11 w-11 place-items-center rounded-full ${color} transition group-hover:scale-105`}
      >
        <Icon className="h-5 w-5" strokeWidth={2.4} />
      </span>

      <span className="text-[11px] font-semibold leading-tight text-slate-500">
        {label}
      </span>
    </button>
  );
};
