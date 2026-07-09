import { useState } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import {
  Bell,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  Clock3,
  Folder,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Megaphone,
  Settings,
  SquareCheckBig,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { useAuth } from "@/app/providers/auth";
import { PATHS } from "@/app/router/constants/paths";
import brandLogo from "@/assets/img/intranet/logo4.png";

type NavigationItem = {
  label: string;
  icon: LucideIcon;
  path?: string;
  expandable?: boolean;
  children?: string[];
};

const navigationItems: NavigationItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, path: PATHS.DASHBOARD.HOME },
  { label: "Asistencias", icon: ClipboardList, path: PATHS.ATTENDANCE.HOME },
  { label: "Agenda", icon: CalendarDays, path: PATHS.AGENDA.HOME },
  { label: "Tareas", icon: SquareCheckBig },
  { label: "Anuncios", icon: Megaphone },
  { label: "Clientes", icon: UserRoundCheck },
  { label: "Proyectos", icon: FolderKanban },
  { label: "Documentos", icon: Folder },
  { label: "Directorio", icon: Users },
  { label: "Historial", icon: Clock3 },
  { label: "Configuración", icon: Settings, expandable: true },
];

export const DashboardLayout = () => {
  const { session, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [openSidebarGroup, setOpenSidebarGroup] = useState<string | null>(
    "Gestion",
  );

  const profileName = session?.profile.fullName ?? "Gerente General";
  const roleName = session?.roles[0]?.name ?? "Gerente General";
  const initials = profileName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-[#f4f7ff] text-slate-950">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[280px] overflow-hidden bg-[#061b63] px-8 py-9 text-white lg:flex lg:flex-col">
        <div className="dashboard-sidebar-orbit" aria-hidden="true" />
        <div className="dashboard-sidebar-circuit" aria-hidden="true" />
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
              src={brandLogo}
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
          {navigationItems.map(
            ({ label, icon: Icon, path, expandable, children }) => {
              const hasChildren = !!children?.length;
              const isGroupOpen = openSidebarGroup === label;
              const active = path ? location.pathname === path : false;

              return (
                <div key={label}>
                  <button
                    className={[
                      "group relative flex h-12 w-full cursor-pointer items-center gap-3.5 overflow-hidden rounded-2xl px-5 text-left font-button text-base font-semibold transition duration-200 hover:translate-x-1 hover:shadow-[0_14px_30px_rgba(7,87,255,0.18)]",
                      active
                        ? "bg-[#0757ff] text-white shadow-[0_18px_36px_rgba(7,87,255,0.28)]"
                        : "text-blue-100/90 hover:bg-white/12 hover:text-white",
                    ].join(" ")}
                    onClick={() =>
                      hasChildren
                        ? setOpenSidebarGroup(isGroupOpen ? null : label)
                        : path
                          ? navigate(path)
                          : undefined
                    }
                    type="button"
                  >
                    <span
                      className={[
                        "absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full transition-all duration-200",
                        active
                          ? "bg-white"
                          : "bg-white/0 group-hover:bg-white/70",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition duration-200",
                        active
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
                    {hasChildren || expandable ? (
                      <ChevronDown
                        className={[
                          "h-3.5 w-3.5 transition duration-200",
                          isGroupOpen ? "rotate-180" : "group-hover:rotate-180",
                        ].join(" ")}
                      />
                    ) : null}
                  </button>

                  {hasChildren ? (
                    <div
                      className={[
                        "grid transition-all duration-200",
                        isGroupOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-[52px] mt-2 space-y-1.5 border-l border-white/12 pl-4">
                          {children.map((child) => (
                            <button
                              className="block h-8 w-full cursor-pointer rounded-xl px-3 text-left font-button text-sm font-medium text-blue-100/75 transition hover:bg-white/10 hover:text-white"
                              key={child}
                              type="button"
                            >
                              {child}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            },
          )}
        </nav>

        <div className="relative z-10" />
      </aside>

      <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200/70 bg-white/95 px-5 backdrop-blur lg:ml-[280px] lg:w-[calc(100%-280px)] lg:px-12">
        <div className="flex items-center gap-3 lg:hidden">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eaf0ff]">
            <img
              src={brandLogo}
              alt="SharkCorp"
              className="h-7 w-7 object-contain"
            />
          </span>
          <span className="font-heading text-lg font-extrabold">SharkCorp</span>
        </div>

        <div className="min-w-0">
          <h1 className="truncate font-heading text-xl font-extrabold tracking-normal text-slate-950 lg:text-2xl">
            ¡Bienvenido, {profileName}!
          </h1>
          <p className="mt-0.5 truncate text-xs font-medium text-slate-500">
            Aquí tienes un resumen de lo que sucede en SharkCorp.
          </p>
        </div>

        <div className="ml-auto flex items-center gap-5">
          <div className="relative">
            <button
              aria-expanded={isNotificationsOpen}
              aria-label="Abrir notificaciones"
              className="relative grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:text-[#0757ff]"
              onClick={() => setIsNotificationsOpen((value) => !value)}
              type="button"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 grid h-5 min-w-5 place-items-center rounded-full bg-[#0757ff] px-1 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            <div
              className={[
                "absolute right-0 top-14 w-80 origin-top-right rounded-2xl bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-slate-200 transition duration-200",
                isNotificationsOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0",
              ].join(" ")}
            >
              <div className="flex items-center justify-between px-2 py-2">
                <h2 className="font-heading text-sm font-extrabold text-slate-950">
                  Notificaciones
                </h2>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-extrabold text-[#0757ff]">
                  3 nuevas
                </span>
              </div>

              <div className="mt-2 space-y-2">
                {[
                  "Nueva solicitud de aprobación pendiente.",
                  "Actualización de políticas publicada.",
                  "Reunión estratégica inicia en 30 minutos.",
                ].map((notification) => (
                  <button
                    className="flex w-full cursor-pointer gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-slate-50"
                    key={notification}
                    type="button"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0757ff]" />
                    <span>
                      <span className="block text-sm font-bold text-slate-800">
                        {notification}
                      </span>
                      <span className="mt-1 block text-xs font-medium text-slate-400">
                        Hace unos minutos
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <span className="h-9 w-px bg-slate-200" />
          <div className="relative">
            <button
              aria-expanded={isProfileMenuOpen}
              aria-label="Abrir menú de perfil"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-[#0757ff] font-heading text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(7,87,255,0.28)] transition hover:scale-105"
              onClick={() => setIsProfileMenuOpen((value) => !value)}
              type="button"
            >
              {initials || "GG"}
            </button>

            <div
              className={[
                "absolute right-0 top-15 w-64 origin-top-right rounded-2xl bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-slate-200 transition duration-200",
                isProfileMenuOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0",
              ].join(" ")}
            >
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="font-heading text-sm font-extrabold text-slate-950">
                  {profileName}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  {roleName}
                </p>
              </div>
              <button
                className="mt-2 flex h-11 w-full cursor-pointer items-center gap-3 rounded-xl px-4 font-button text-sm font-bold text-slate-700 transition hover:bg-red-50 hover:text-red-600"
                onClick={() => void logout()}
                type="button"
              >
                <LogOut className="h-4.5 w-4.5" />
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="overflow-x-hidden lg:ml-[280px] lg:w-[calc(100%-280px)]">
        <Outlet />
      </main>
    </div>
  );
};
