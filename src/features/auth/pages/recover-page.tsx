import { PATHS } from "@/app/router/constants/paths";
import { AuthBackButton } from "@/features/auth/components/AuthBackButton";
import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { AuthPageContainer } from "@/features/auth/components/AuthPageContainer";
import { RecoveryForm } from "@/features/auth/forms/recovery-form";
import { Mail } from "lucide-react";

export const RecoverPage = () => {
  return (
    <AuthPageContainer>
      <AuthBackButton
        to={PATHS.AUTH.LOGIN}
        text="Volver al inicio de sesión"
        className="mb-16"
      />

      <AuthHeader
        className="mb-8"
        icon={Mail}
        title="¿Olvidaste tu contraseña?"
        description={
          <>
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
          </>
        }
      />

      <RecoveryForm />
    </AuthPageContainer>
  );
};
