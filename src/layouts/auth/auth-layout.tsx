import { Outlet } from "react-router-dom";

import { AuthHero } from "@/features/auth/components/auth-hero";
import { AuthThemeToggle } from "@/features/auth/components/auth-theme-toggle";

export const AuthLayout = () => {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <AuthHero />
      <section className="relative flex items-center justify-center bg-background px-6 py-8 md:px-10">
        <div className="absolute right-6 top-6">
          <AuthThemeToggle />
        </div>
        <div className="w-full max-w-[380px]">
          <Outlet />
        </div>
      </section>
    </main>
  );
};
