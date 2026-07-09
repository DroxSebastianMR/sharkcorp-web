import type { FormEvent } from "react";

import { CheckCircle2, Eye, EyeOff, Lock } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { AuthInput } from "@/features/auth/components/auth-input";

const MIN_PASSWORD_LENGTH = 8;
const TOTAL_STRENGTH_BARS = 5;

export const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | undefined
  >();

  const passwordRules = useMemo(
    () => [
      {
        label: "Mínimo 8 caracteres",
        isValid: password.length >= MIN_PASSWORD_LENGTH,
      },
      {
        label: "Incluir mayúsculas y minúsculas",
        isValid: /[a-z]/.test(password) && /[A-Z]/.test(password),
      },
      {
        label: "Incluir números o símbolos",
        isValid: /[\d\W_]/.test(password),
      },
    ],
    [password],
  );

  const validRules = passwordRules.filter((rule) => rule.isValid).length;
  const isStrong = validRules === passwordRules.length;

  const strengthState = useMemo(() => {
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
  }, [password, validRules]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextPasswordError = !password
      ? "Ingresa una nueva contraseña."
      : !isStrong
        ? "La contraseña debe cumplir todos los requisitos."
        : undefined;
    const nextConfirmPasswordError = !confirmPassword
      ? "Confirma tu nueva contraseña."
      : password !== confirmPassword
        ? "Las contraseñas no coinciden."
        : undefined;

    setPasswordError(nextPasswordError);
    setConfirmPasswordError(nextConfirmPasswordError);

    if (nextPasswordError || nextConfirmPasswordError) {
      toast.error("Revisa las contraseñas", {
        description: "Corrige los campos marcados para continuar.",
      });
      return;
    }

    setPasswordError(undefined);
    setConfirmPasswordError(undefined);

    toast.success("Contraseña actualizada", {
      description: "Ya puedes iniciar sesión con tu nueva contraseña.",
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <AuthInput
        id="password"
        label="Nueva contraseña"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        placeholder="••••••••••••••"
        Icon={Lock}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
          setPasswordError(undefined);
        }}
        error={passwordError}
        rightElement={
          <button
            type="button"
            aria-label={
              showPassword ? "Ocultar nueva contraseña" : "Mostrar nueva contraseña"
            }
            onClick={() => setShowPassword((current) => !current)}
            className="
              inline-flex
              cursor-pointer
              items-center
              justify-center
              text-slate-500
              transition-colors
              hover:text-slate-800
            "
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
      />

      <div className="space-y-3">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL_STRENGTH_BARS }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 flex-1 rounded-full ${
                index < strengthState.bars ? strengthState.color : "bg-slate-200"
              }`}
            />
          ))}
          <span
            className={`ml-2 min-w-12 text-xs font-extrabold ${strengthState.textColor}`}
          >
            {strengthState.label || "Vacía"}
          </span>
        </div>

        <ul className="space-y-1.5">
          {passwordRules.map((rule) => (
            <li
              key={rule.label}
              className="flex items-center gap-2 text-xs font-medium text-slate-600"
            >
              <CheckCircle2
                className={`h-4 w-4 ${
                  rule.isValid ? "text-emerald-500" : "text-slate-300"
                }`}
              />
              {rule.label}
            </li>
          ))}
        </ul>
      </div>

      <AuthInput
        id="confirm-password"
        label="Confirmar nueva contraseña"
        type={showConfirmPassword ? "text" : "password"}
        autoComplete="new-password"
        placeholder="••••••••••••••"
        Icon={Lock}
        value={confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
          setConfirmPasswordError(undefined);
        }}
        error={confirmPasswordError}
        rightElement={
          <button
            type="button"
            aria-label={
              showConfirmPassword
                ? "Ocultar confirmación de contraseña"
                : "Mostrar confirmación de contraseña"
            }
            onClick={() => setShowConfirmPassword((current) => !current)}
            className="
              inline-flex
              cursor-pointer
              items-center
              justify-center
              text-slate-500
              transition-colors
              hover:text-slate-800
            "
          >
            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
      />

      <Button
        type="submit"
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
        Actualizar contraseña
      </Button>
    </form>
  );
};
