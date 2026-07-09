import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import { RecoveryForm } from "@/features/auth/forms/recovery-form";

export const RecoverPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col">
      <Link
        to={PATHS.AUTH.LOGIN}
        className="
          mb-16
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

      <header className="mb-8">
        <div className="relative">
          <div className="absolute -left-16 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#dfe7ff] text-[#0757ff]">
            <span className="absolute inset-0 rounded-xl bg-[#0757ff]/20 animate-icon-pulse" />
            <Mail className="relative z-10 h-6 w-6" />
          </div>

          <h1 className="text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-slate-950">
            ¿Olvidaste tu contraseña?
          </h1>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          No te preocupes, sucede. Ingresa tu correo electrónico y te
          <strong className="font-extrabold text-slate-950">
            {" "}
            enviaremos un enlace
          </strong>{" "}
          para restablecer tu
          <strong className="font-extrabold text-slate-950">
            {" "}
            contraseña.
          </strong>
        </p>
      </header>

      <RecoveryForm />
    </div>
  );
};
