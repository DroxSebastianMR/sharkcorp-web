import type { AttendanceItem } from "../../types/dashboard.types";

interface AttendanceBarProps {
  item: AttendanceItem;
}

export const AttendanceBar = ({ item }: AttendanceBarProps) => {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-end">
      <span className="mb-2 text-xs font-bold text-slate-500">
        {item.value} %
      </span>

      <div
        className="w-full max-w-11 rounded-t-xl bg-[#0757ff] shadow-[0_12px_22px_rgba(7,87,255,0.22)]"
        style={{
          height: `${item.value}%`,
        }}
      />

      <span className="mt-3 text-xs font-semibold text-slate-500">
        {item.day}
      </span>
    </div>
  );
};
