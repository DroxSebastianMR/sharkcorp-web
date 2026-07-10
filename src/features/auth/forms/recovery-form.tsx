import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import { Button } from "@/components/ui/button";
import { AuthInput } from "@/features/auth/components/auth-input";
import { useRecoveryForm } from "@/features/auth/hooks/use-recovery-form";

export const RecoveryForm = () => {
  const { email, isSubmitting, errors, setEmail, clearError, handleSubmit } =
    useRecoveryForm();

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <AuthInput
        id="recover-email"
        label="Correo electrónico"
        type="text"
        inputMode="email"
        autoComplete="email"
        placeholder="nombre@sharkcorp.com"
        Icon={Mail}
        value={email}
        error={errors.email}
        onChange={(event) => {
          setEmail(event.target.value);
          clearError("email");
        }}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-14 w-full rounded-[14px] bg-[#0757ff] text-base font-extrabold shadow-[0_18px_36px_rgba(7,87,255,0.22)] hover:bg-[#004be0]"
      >
        <span>
          {isSubmitting ? "Enviando..." : "Enviar enlace de recuperación"}
        </span>
        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
      </Button>

      <p className="text-center text-sm font-semibold text-slate-700">
        ¿Recordaste tu contraseña?{" "}
        <Link
          to={PATHS.AUTH.LOGIN}
          className="text-[#0052f5] transition-colors hover:text-[#003db8] hover:underline"
        >
          Iniciar sesión
        </Link>
      </p>
    </form>
  );
};
