import type { ReactNode } from "react";

import type { AttendancePageHeaderAction } from "@/features/attendance/types/attendance.types";

const actionStyles = {
  primary:
    "bg-[#0757ff] text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] hover:bg-[#064be0]",
  secondary:
    "bg-slate-200 text-slate-700 hover:bg-slate-300",
  outline:
    "border border-[#0757ff]/20 bg-white text-[#0757ff] shadow-sm hover:bg-blue-50",
};

interface AttendancePageShellProps {
  title: string;
  description: string;
  actions?: AttendancePageHeaderAction[];
  children: ReactNode;
}

export const AttendancePageShell = ({
  title,
  description,
  actions = [],
  children,
}: AttendancePageShellProps) => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            {title}
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            {description}
          </p>
        </div>

        {actions.length ? (
          <div className="flex flex-wrap gap-3">
            {actions.map(({ label, icon: Icon, variant = "primary" }) => (
              <button
                className={[
                  "flex h-11 cursor-pointer items-center gap-2 rounded-xl px-5 font-button text-sm font-bold transition",
                  actionStyles[variant],
                ].join(" ")}
                key={label}
                type="button"
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        ) : null}
      </section>

      {children}
    </div>
  );
};
