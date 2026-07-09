import { ArrowLeft, Info, Mail, MailCheck, Send } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";

interface RecoverySentLocationState {
  email?: string;
}

export const RecoverySentPage = () => {
  const { state } = useLocation();
  const email =
    (state as RecoverySentLocationState | null)?.email ??
    "nombre@sharkcorp.com";

  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col">
      <Link
        to={PATHS.AUTH.FORGOT_PASSWORD}
        className="
          mb-12
          mt-10
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
        Volver a recuperar contraseña
      </Link>

      <header className="mb-6">
        <div className="relative">
          <div className="absolute -left-[72px] top-0 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shadow-[0_18px_50px_rgba(16,185,129,0.12)]">
            <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-icon-pulse" />
            <MailCheck className="relative z-10 h-7 w-7" />
          </div>

          <h1 className="text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-slate-950">
            ¡Enlace de recuperación enviado!
          </h1>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Hemos enviado un enlace para restablecer tu contraseña a:
        </p>
      </header>

      <div className="flex h-12 items-center gap-4 rounded-xl bg-slate-100 px-4 text-slate-950">
        <Mail className="h-4 w-4 text-slate-600" />
        <span className="text-sm font-extrabold">{email}</span>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-slate-600">
        Revisa tu bandeja de entrada y también la carpeta de spam o correo no
        deseado.
      </p>

      <div className="mt-6 flex gap-3 rounded-xl bg-[#f4f6ff] p-4">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0757ff]" />
        <div>
          <p className="text-xs font-extrabold text-[#0757ff]">
            El enlace expirará en 60 minutos.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Si no recibes el correo, puedes solicitar un nuevo enlace.
          </p>
        </div>
      </div>

      <Link
        to={PATHS.AUTH.FORGOT_PASSWORD}
        className="
          mt-6
          inline-flex
          h-14
          w-full
          items-center
          justify-center
          rounded-[14px]
          bg-[#0757ff]
          font-button
          text-base
          font-extrabold
          text-white
          shadow-[0_18px_36px_rgba(7,87,255,0.22)]
          transition-colors
          hover:bg-[#004be0]
        "
      >
        Enviar otro enlace
        <Send className="ml-2 h-5 w-5" />
      </Link>
    </div>
  );
};
