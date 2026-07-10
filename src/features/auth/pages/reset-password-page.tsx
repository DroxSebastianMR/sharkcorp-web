import { LockKeyhole } from "lucide-react";

import { PATHS } from "@/app/router/constants/paths";
import { AuthBackButton } from "@/features/auth/components/AuthBackButton";
import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { AuthPageContainer } from "@/features/auth/components/AuthPageContainer";
import { ResetPasswordForm } from "@/features/auth/forms/reset-password-form";

export const ResetPasswordPage = () => {
  return (
    <AuthPageContainer>
      <AuthBackButton
        to={PATHS.AUTH.LOGIN}
        text="Volver al inicio de sesión"
        className="mt-8 mb-8"
      />

      <AuthHeader
        className="mb-6"
        icon={LockKeyhole}
        rounded="full"
        iconContainerClassName="bg-[#e7edff] text-[#0757ff]"
        iconClassName="bg-[#0757ff]/20"
        title="Crea tu nueva contraseña"
        description="Tu nueva contraseña debe ser diferente a las contraseñas utilizadas anteriormente."
      />

      <ResetPasswordForm />
    </AuthPageContainer>
  );
};
