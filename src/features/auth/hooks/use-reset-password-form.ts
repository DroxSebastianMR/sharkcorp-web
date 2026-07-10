import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

const PASSWORD_RULES = [
  {
    key: "length",
    label: "Mínimo 8 caracteres",
    validate: (value: string) => value.length >= 8,
  },
  {
    key: "uppercase",
    label: "Incluir mayúsculas y minúsculas",
    validate: (value: string) => /[a-z]/.test(value) && /[A-Z]/.test(value),
  },
  {
    key: "symbol",
    label: "Incluir números o símbolos",
    validate: (value: string) => /[\d\W_]/.test(value),
  },
] as const;

export const TOTAL_STRENGTH_BARS = 5;
type PasswordField = "password" | "confirmPassword";
type ResetPasswordErrors = Partial<Record<PasswordField, string>>;
const getStrengthState = (password: string, validRules: number) => {
  if (!password) {
    return {
      label: "",
      bars: 0,
      color: "bg-slate-200",
      textColor: "text-slate-400",
    };
  }

  if (validRules <= 1) {
    return {
      label: "Débil",
      bars: 2,
      color: "bg-rose-500",
      textColor: "text-rose-600",
    };
  }

  if (validRules === 2) {
    return {
      label: "Normal",
      bars: 4,
      color: "bg-[#0757ff]",
      textColor: "text-[#0757ff]",
    };
  }

  return {
    label: "Fuerte",
    bars: TOTAL_STRENGTH_BARS,
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
  };
};

export const useResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<ResetPasswordErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordRules = useMemo(() => {
    return PASSWORD_RULES.map((rule) => ({
      label: rule.label,
      isValid: rule.validate(password),
    }));
  }, [password]);

  const validRules = useMemo(
    () => passwordRules.filter((rule) => rule.isValid).length,
    [passwordRules],
  );

  const isPasswordStrong = validRules === PASSWORD_RULES.length;
  const strengthState = useMemo(
    () => getStrengthState(password, validRules),
    [password, validRules],
  );

  const clearError = (field: PasswordField) => {
    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };
  const toggleVisibility = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setter((current) => !current);
  };
  const validateForm = (): ResetPasswordErrors => {
    const nextErrors: ResetPasswordErrors = {};

    if (!password) {
      nextErrors.password = "Ingresa una nueva contraseña.";
    } else if (!isPasswordStrong) {
      nextErrors.password = "La contraseña debe cumplir todos los requisitos.";
    }
    if (!confirmPassword) {
      nextErrors.confirmPassword = "Confirma tu nueva contraseña.";
    } else if (password !== confirmPassword) {
      nextErrors.confirmPassword = "Las contraseñas no coinciden.";
    }
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      toast.error("Revisa las contraseñas", {
        description: "Corrige los campos marcados para continuar.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      /**
       * API:
       *
       * await authService.resetPassword({
       *   password,
       * });
       */

      toast.success("Contraseña actualizada", {
        description: "Ya puedes iniciar sesión con tu nueva contraseña.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    password,
    confirmPassword,
    showPassword: visiblePassword,
    showConfirmPassword: visibleConfirmPassword,
    passwordRules,
    strengthState,
    errors,
    isSubmitting,
    setPassword,
    setConfirmPassword,
    clearError,
    togglePassword: () => toggleVisibility(setVisiblePassword),
    toggleConfirmPassword: () => toggleVisibility(setVisibleConfirmPassword),
    handleSubmit,
  };
};
