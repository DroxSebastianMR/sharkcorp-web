import { Outlet, useLocation } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import passwordCreatedImg from "@/assets/img/intranet/contrasena_creada.png";
import recoverImg from "@/assets/img/intranet/olvidar_contrasena.png";
import resetPasswordImg from "@/assets/img/intranet/nueva_contrasena.png";
import { AuthHero } from "@/features/auth/components/auth-hero";

export const AuthLayout = () => {
  const { pathname } = useLocation();
  const isRecoverPage = pathname === PATHS.AUTH.FORGOT_PASSWORD;
  const isRecoverySentPage = pathname === PATHS.AUTH.RECOVERY_SENT;
  const isResetPasswordPage = pathname === PATHS.AUTH.RESET_PASSWORD;

  const heroImage = isResetPasswordPage
    ? passwordCreatedImg
    : isRecoverySentPage
      ? resetPasswordImg
      : isRecoverPage
        ? recoverImg
        : undefined;

  const heroImageAlt = isResetPasswordPage
    ? "Contraseña creada en SharkCorp Intranet"
    : isRecoverySentPage
      ? "Nueva contraseña en SharkCorp Intranet"
      : isRecoverPage
        ? "Recuperación de contraseña en SharkCorp Intranet"
        : undefined;

  return (
    <main className="grid min-h-screen overflow-hidden lg:h-screen lg:grid-cols-2">
      <AuthHero imageSrc={heroImage} imageAlt={heroImageAlt} />
      <section className="relative flex min-h-screen items-center justify-center bg-background px-6 py-6 lg:min-h-0 md:px-10">
        <div className="w-full max-w-[380px]">
          <Outlet />
        </div>
      </section>
    </main>
  );
};
