import type { FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";

import { useAuth } from "@/app/providers/auth";
import { loginSchema } from "@/features/auth/schemas/login.schema";

type LoginErrors = Partial<Record<"email" | "password", string>>;

export const useLoginForm = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  const clearError = (field: keyof LoginErrors) => {
    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  const togglePassword = () => {
    setShowPassword((current) => !current);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = loginSchema.safeParse({
      email,
      password,
    });

    if (!result.success) {
      const nextErrors: LoginErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (field === "email" || field === "password") {
          nextErrors[field] = issue.message;
        }
      });

      setErrors(nextErrors);

      toast.error("Revisa tus credenciales", {
        description: "Corrige los campos marcados para continuar.",
      });

      return;
    }

    setErrors({});

    if (rememberMe) {
      localStorage.setItem("remember_me", "true");
    } else {
      localStorage.removeItem("remember_me");
    }

    try {
      setIsSubmitting(true);

      await login({
        username: result.data.email,
        password: result.data.password,
      });

      toast.success("Sesión iniciada", {
        description: "Bienvenido de nuevo a SharkCorp Intranet.",
      });
    } catch (error) {
      toast.error("No pudimos iniciar sesión", {
        description:
          error instanceof Error
            ? error.message
            : "Usuario o contraseña incorrectos.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    password,
    rememberMe,
    showPassword,
    isSubmitting,
    errors,

    setEmail,
    setPassword,
    setRememberMe,

    clearError,
    togglePassword,

    handleSubmit,
  };
};
