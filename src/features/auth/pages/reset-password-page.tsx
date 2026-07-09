import { ArrowLeft, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import { ResetPasswordForm } from "@/features/auth/forms/reset-password-form";

export const ResetPasswordPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col">
      <Link
        to={PATHS.AUTH.LOGIN}
        className="
          mb-8
          mt-8
          inline-flex
          w-fit
          items-center
          gap-2
          text-sm
          font-medium
          text-slate-600
          transition-colors
          hover:text-slate-950
        "
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio de sesión
      </Link>

      <header className="mb-6">
        <div className="relative">
          <div className="absolute -left-16 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#e7edff] text-[#0757ff]">
            <span className="absolute inset-0 rounded-full bg-[#0757ff]/20 animate-icon-pulse" />
            <LockKeyhole className="relative z-10 h-6 w-6" />
          </div>

          <h1 className="text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-slate-950">
            Crea tu nueva contraseña
          </h1>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Tu nueva contraseña debe ser diferente a las contraseñas utilizadas
          anteriormente.
        </p>
      </header>

      <ResetPasswordForm />
    </div>
  );
};
