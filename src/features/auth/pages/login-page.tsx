import { AuthFooter } from '@/features/auth/components/auth-footer';
import { LoginForm } from '@/features/auth/forms/login-form';

export const LoginPage = () => {
  return (
    <div className="mx-auto w-full max-w-[360px]">
      <header className="mb-10 text-center">
        <h1 className="text-[36px] font-bold tracking-[-0.02em]">
          Bienvenido de nuevo
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Inicia sesión para acceder a tu intranet.
        </p>
      </header>
      <LoginForm />
      <AuthFooter />
    </div>
  );
};