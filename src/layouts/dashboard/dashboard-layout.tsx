import { DashboardHeader } from "@/features/dashboard/components/layout/dashboard-header";
import { DashboardSidebar } from "@/features/dashboard/components/layout/dashboard-sidebar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#f4f7ff] text-slate-950">
      <DashboardSidebar />
      <DashboardHeader />
      <main
        className="
          overflow-x-hidden
          lg:ml-[280px]
          lg:w-[calc(100%-280px)]
        "
      >
        <Outlet />
      </main>
    </div>
  );
};
