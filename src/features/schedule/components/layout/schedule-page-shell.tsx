import type { ReactNode } from "react";

type SchedulePageShellProps = {
  children: ReactNode;
};

export const SchedulePageShell = ({ children }: SchedulePageShellProps) => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-12">
      {children}
    </div>
  );
};
