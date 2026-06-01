import { AuthFooter } from "@/features/auth/components/auth-footer";
import { RecoveryForm } from "@/features/auth/forms/recovery-form";

export const RecoverPage = () => {
  return (
    <div className="mx-auto w-full max-w-[360px]">
      <header className="mb-10 text-center">
        <h1 className="text-[36px] font-bold tracking-[-0.02em]">
          Recuperar acceso
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          Ingresa tu correo corporativo y te enviaremos un enlace para
          restablecer tu contraseña.
        </p>
      </header>
      <RecoveryForm />
      <AuthFooter />
    </div>
  );
};
