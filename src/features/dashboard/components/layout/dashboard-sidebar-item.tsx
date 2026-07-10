import type { DashboardNavigationItem } from "@/features/dashboard/types/dashboard-navigation.types";
import { ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  item: DashboardNavigationItem;
  openSidebarGroup: string | null;
  setOpenSidebarGroup: React.Dispatch<React.SetStateAction<string | null>>;
};

export const DashboardSidebarItem = ({
  item,
  openSidebarGroup,
  setOpenSidebarGroup,
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { label, icon: Icon, path, expandable, children = [] } = item;

  const hasChildren = children.length > 0;

  const isActive =
    path === location.pathname ||
    children.some((child) => child.path === location.pathname);
  const isOpen = openSidebarGroup === label || isActive;

  const handleClick = () => {
    if (hasChildren) {
      setOpenSidebarGroup((current) => (current === label ? null : label));

      return;
    }

    if (path) {
      navigate(path);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className={[
          "group relative flex h-12 w-full cursor-pointer items-center gap-3.5 overflow-hidden rounded-2xl px-5 text-left font-button text-base font-semibold transition duration-200 hover:translate-x-1 hover:shadow-[0_14px_30px_rgba(7,87,255,0.18)]",
          isActive
            ? "bg-[#0757ff] text-white shadow-[0_18px_36px_rgba(7,87,255,0.28)]"
            : "text-blue-100/90 hover:bg-white/12 hover:text-white",
        ].join(" ")}
      >
        <span
          className={[
            "absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full transition-all duration-200",
            isActive ? "bg-white" : "bg-white/0 group-hover:bg-white/70",
          ].join(" ")}
        />

        <span
          className={[
            "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition duration-200",
            isActive
              ? "bg-white/12"
              : "bg-white/6 group-hover:bg-white/14 group-hover:text-white",
          ].join(" ")}
        >
          <Icon
            className="h-4.5 w-4.5 transition duration-200 group-hover:scale-110"
            strokeWidth={2.3}
          />
        </span>

        <span className="flex-1 transition duration-200 group-hover:translate-x-0.5">
          {label}
        </span>

        {(expandable || hasChildren) && (
          <ChevronDown
            className={[
              "h-3.5 w-3.5 transition duration-200",
              isOpen ? "rotate-180" : "group-hover:rotate-180",
            ].join(" ")}
          />
        )}
      </button>

      {hasChildren && (
        <div
          className={[
            "grid transition-all duration-200",
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          ].join(" ")}
        >
          <div className="overflow-hidden">
            <div className="ml-[46px] mt-2 space-y-1.5 border-l border-white/12 pl-3">
              {children.map(({ label, path }) => {
                const isChildActive = path === location.pathname;

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => path && navigate(path)}
                    className={[
                      "block min-h-9 w-full cursor-pointer rounded-xl px-3 py-2 text-left font-button text-sm font-semibold leading-snug transition hover:bg-white/10 hover:text-white",
                      isChildActive
                        ? "bg-white/12 text-white"
                        : "text-blue-100/75",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
