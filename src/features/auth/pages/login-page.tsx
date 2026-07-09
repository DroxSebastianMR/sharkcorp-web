import { LoginForm } from "@/features/auth/forms/login-form";

export const LoginPage = () => {
  return (
    <div className="mx-auto w-full max-w-[360px]">
      <header className="mb-8 text-center">
        <h1 className="text-[36px] font-extrabold tracking-[-0.02em]">
          Bienvenido de nuevo
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Inicia sesión para acceder a tu intranet.
        </p>
      </header>
      <LoginForm />
    </div>
  );
};
