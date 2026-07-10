import { useAuth } from "@/app/providers/auth";
import { IMAGES } from "@/shared/constants/images";
import { Bell, LogOut } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const DashboardHeader = () => {
  const { session, logout } = useAuth();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const profileName = session?.profile.fullName ?? "Gerente General";
  const roleName = session?.roles[0]?.name ?? "Gerente General";

  const initials = profileName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header
      className="
        sticky
        top-0
        z-20
        flex
        h-20
        items-center
        justify-between
        border-b
        border-slate-200/70
        bg-white/95
        px-5
        backdrop-blur
        lg:ml-[280px]
        lg:w-[calc(100%-280px)]
        lg:px-12
      "
    >
      <div className="flex items-center gap-3 lg:hidden">
        <span
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-xl
            bg-[#eaf0ff]
          "
        >
          <img
            src={IMAGES.branding.sidebarLogo}
            alt="SharkCorp"
            className="h-7 w-7 object-contain"
          />
        </span>

        <span
          className="
            font-heading
            text-lg
            font-extrabold
          "
        >
          SharkCorp
        </span>
      </div>

      {/* Welcome */}

      <div className="min-w-0">
        <h1
          className="
            truncate
            font-heading
            text-xl
            font-extrabold
            text-slate-950
            lg:text-2xl
          "
        >
          ¡Bienvenido, {profileName}!
        </h1>

        <p
          className="
            mt-0.5
            truncate
            text-xs
            font-medium
            text-slate-500
          "
        >
          Aquí tienes un resumen de lo que sucede en SharkCorp.
        </p>
      </div>

      <div className="ml-auto flex items-center gap-5">
        {/* Notifications */}

        <div className="relative">
          <button
            type="button"
            aria-label="Abrir notificaciones"
            aria-expanded={isNotificationsOpen}
            onClick={() => setIsNotificationsOpen((current) => !current)}
            className="
              relative
              grid
              h-11
              w-11
              cursor-pointer
              place-items-center
              rounded-full
              bg-white
              text-slate-600
              shadow-sm
              ring-1
              ring-slate-200
              transition
              hover:text-[#0757ff]
            "
          >
            <Bell className="h-5 w-5" />

            <span
              className="
                absolute
                right-2
                top-2
                grid
                h-5
                min-w-5
                place-items-center
                rounded-full
                bg-[#0757ff]
                px-1
                text-[10px]
                font-bold
                text-white
              "
            >
              3
            </span>
          </button>
        </div>

        <span className="h-9 w-px bg-slate-200" />

        {/* Profile */}

        <div ref={profileMenuRef} className="relative">
          <button
            type="button"
            aria-label="Abrir menú de perfil"
            aria-expanded={isProfileMenuOpen}
            onClick={() => setIsProfileMenuOpen((current) => !current)}
            className="
              grid
              h-12
              w-12
              cursor-pointer
              place-items-center
              rounded-full
              bg-[#0757ff]
              font-heading
              text-sm
              font-extrabold
              text-white
              shadow-[0_12px_24px_rgba(7,87,255,0.28)]
              transition
              hover:scale-105
            "
          >
            {initials || "GG"}
          </button>

          {isProfileMenuOpen && (
            <div
              className="
                absolute
                right-0
                top-15
                w-64
                rounded-2xl
                bg-white
                p-3
                shadow-[0_18px_45px_rgba(15,23,42,0.14)]
                ring-1
                ring-slate-200
              "
            >
              <div
                className="
                  rounded-xl
                  bg-slate-50
                  px-4
                  py-3
                "
              >
                <p
                  className="
                    font-heading
                    text-sm
                    font-extrabold
                    text-slate-950
                  "
                >
                  {profileName}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-semibold
                    text-slate-500
                  "
                >
                  {roleName}
                </p>
              </div>

              <button
                type="button"
                onClick={() => void logout()}
                className="
                  mt-2
                  flex
                  h-11
                  w-full
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  font-button
                  text-sm
                  font-bold
                  text-slate-700
                  transition
                  hover:bg-red-50
                  hover:text-red-600
                "
              >
                <LogOut className="h-4.5 w-4.5" />
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
