import { DashboardSidebarItem } from "@/features/dashboard/components/layout/dashboard-sidebar-item";
import { dashboardNavigation } from "@/features/dashboard/config/dashboard-navigation";
import { IMAGES } from "@/shared/constants/images";
import { useState } from "react";

export const DashboardSidebar = () => {
  const [openSidebarGroup, setOpenSidebarGroup] = useState<string | null>(
    "Gestion",
  );

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[280px] overflow-hidden bg-[#061b63] px-8 py-9 text-white lg:flex lg:flex-col">
      <div className="dashboard-sidebar-orbit" />
      <div className="dashboard-sidebar-circuit" />

      <span
        aria-hidden="true"
        className="dashboard-sidebar-node left-10 top-[180px]"
      />

      <span
        aria-hidden="true"
        className="dashboard-sidebar-node animation-delay-700 right-8 top-[360px]"
      />

      <span
        aria-hidden="true"
        className="dashboard-sidebar-node animation-delay-1400 bottom-[170px] left-[86px]"
      />

      <div className="relative z-10 flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10">
          <img
            src={IMAGES.branding.sidebarLogo}
            alt="SharkCorp"
            className="h-8 w-8 object-contain"
          />
        </span>

        <div>
          <span className="font-heading text-xl font-extrabold uppercase leading-none">
            SHARKCORP
          </span>

          <p className="mt-1 whitespace-nowrap font-heading text-[8px] font-bold uppercase tracking-[0.18em] text-blue-100/65">
            Soluciones Tecnologicas
          </p>
        </div>
      </div>

      <nav className="sidebar-scroll-hidden relative z-10 mt-20 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
        {dashboardNavigation
          .filter((item) => item.visible !== false)
          .map((item) => (
            <DashboardSidebarItem
              key={item.label}
              item={item}
              openSidebarGroup={openSidebarGroup}
              setOpenSidebarGroup={setOpenSidebarGroup}
            />
          ))}
      </nav>

      <div className="relative z-10" />
    </aside>
  );
};
