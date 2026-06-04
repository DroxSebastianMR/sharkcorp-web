import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";

interface RecoverySentPageProps {
  email?: string;
}

export const RecoverySentPage = ({
  email = "nombre@sharkcorp.com",
}: RecoverySentPageProps) => {
  return (
    <div className="mx-auto w-full max-w-[420px]">
      <Link
        to={PATHS.AUTH.LOGIN}
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio de sesión
      </Link>

      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          ¡Enlace de recuperación enviado!
        </h1>

        <p className="mt-4 text-muted-foreground">
          Hemos enviado un enlace para restablecer tu contraseña a:
        </p>

        <div className="mt-6 flex w-full items-center gap-3 rounded-xl border bg-muted/40 px-4 py-4">
          <Mail className="h-5 w-5 text-muted-foreground" />

          <span className="text-sm font-medium">{email}</span>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Revisa tu bandeja de entrada y también la carpeta de spam o correo no
          deseado.
        </p>

        <div className="mt-8 w-full rounded-xl border bg-blue-50 p-4 text-left dark:bg-blue-950/30">
          <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
            El enlace expirará en 60 minutos.
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Si no recibes el correo, puedes solicitar uno nuevo.
          </p>
        </div>

        <Link
          to={PATHS.AUTH.FORGOT_PASSWORD}
          className="mt-8 flex h-12 w-full items-center justify-center rounded-xl bg-primary font-medium text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
        >
          Enviar otro enlace
        </Link>
      </div>
    </div>
  );
};
