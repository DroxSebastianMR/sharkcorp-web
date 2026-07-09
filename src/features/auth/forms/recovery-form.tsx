import type { FormEvent } from "react";

import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { PATHS } from "@/app/router/constants/paths";
import { Button } from "@/components/ui/button";
import { AuthInput } from "@/features/auth/components/auth-input";
import { recoverSchema } from "@/features/auth/schemas/recover.schema";

export const RecoveryForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = recoverSchema.safeParse({ email });

    if (!result.success) {
      const message =
        result.error.issues[0]?.message ?? "Ingresa un correo válido.";

      setError(message);
      toast.error("Revisa el correo", {
        description: message,
      });
      return;
    }

    setError(undefined);
    setIsSubmitting(true);

    toast.success("Enlace enviado", {
      description: "Revisa tu correo para restablecer tu contraseña.",
    });

    navigate(PATHS.AUTH.RECOVERY_SENT, {
      state: {
        email: result.data.email,
      },
    });

    setIsSubmitting(false);
  };

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
        onChange={(event) => {
          setEmail(event.target.value);
          setError(undefined);
        }}
        error={error}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="
          h-14
          w-full
          rounded-[14px]
          bg-[#0757ff]
          text-base
          font-extrabold
          shadow-[0_18px_36px_rgba(7,87,255,0.22)]
          hover:bg-[#004be0]
        "
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
