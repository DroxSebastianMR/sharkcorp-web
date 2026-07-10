import { PATHS } from "@/app/router/constants/paths";
import { recoverSchema } from "@/features/auth/schemas/recover.schema";
import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type RecoveryErrors = Partial<Record<"email", string>>;

export const useRecoveryForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<RecoveryErrors>({});

  const clearError = (field: keyof RecoveryErrors) => {
    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = recoverSchema.safeParse({
      email,
    });

    if (!result.success) {
      const nextErrors: RecoveryErrors = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0] === "email") {
          nextErrors.email = issue.message;
        }
      });

      setErrors(nextErrors);
      toast.error("Revisa el correo", {
        description: "Corrige el correo electrónico para continuar.",
      });
      return;
    }

    setErrors({});

    try {
      setIsSubmitting(true);

      /**
       * Aquí luego irá la llamada al endpoint:
       *
       * await authService.recoverPassword(...)
       */

      toast.success("Enlace enviado", {
        description: "Revisa tu correo para restablecer tu contraseña.",
      });

      navigate(PATHS.AUTH.RECOVERY_SENT, {
        state: {
          email: result.data.email,
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    isSubmitting,
    errors,

    setEmail,

    clearError,

    handleSubmit,
  };
};
