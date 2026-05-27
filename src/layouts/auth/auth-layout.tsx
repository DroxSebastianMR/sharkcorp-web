import { Outlet } from 'react-router-dom';

import { AuthBrand } from '@/features/auth/components/auth-brand';
import { AuthHero } from '@/features/auth/components/auth-hero';

export const AuthLayout = () => {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <section className="flex flex-col p-6 md:p-10">
        <AuthBrand />

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <Outlet />
          </div>
        </div>
      </section>

      <AuthHero />
    </main>
  );
};