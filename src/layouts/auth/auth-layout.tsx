import { AuthHero } from "@/features/auth/components/auth-hero";
import { getAuthHero } from "@/features/auth/constants/auth-hero";
import { Outlet, useLocation } from "react-router-dom";

export const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <main className="grid min-h-screen overflow-hidden lg:h-screen lg:grid-cols-2">
      <AuthHero hero={getAuthHero(pathname)} />
      <section className="relative flex min-h-screen items-center justify-center bg-background px-6 py-6 md:px-10 lg:min-h-0">
        <div className="w-full max-w-[380px]">
          <Outlet />
        </div>
      </section>
    </main>
  );
};
