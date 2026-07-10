import { CheckCircle2, Eye, EyeOff, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuthInput } from "@/features/auth/components/auth-input";
import {
  TOTAL_STRENGTH_BARS,
  useResetPasswordForm,
} from "@/features/auth/hooks/use-reset-password-form";

export const ResetPasswordForm = () => {
  const {
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    passwordRules,
    strengthState,
    errors,
    setPassword,
    setConfirmPassword,
    clearError,
    togglePassword,
    toggleConfirmPassword,
    handleSubmit,
  } = useResetPasswordForm();

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
        error={errors.password}
        onChange={(event) => {
          setPassword(event.target.value);
          clearError("password");
        }}
        rightElement={
          <button
            type="button"
            onClick={togglePassword}
            aria-label={
              showPassword
                ? "Ocultar nueva contraseña"
                : "Mostrar nueva contraseña"
            }
            className="inline-flex cursor-pointer items-center justify-center text-slate-500 transition-colors hover:text-slate-800"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
      />

      <div className="space-y-3">
        <div className="flex items-center gap-1.5">
          {Array.from({
            length: TOTAL_STRENGTH_BARS,
          }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 flex-1 rounded-full ${
                index < strengthState.bars
                  ? strengthState.color
                  : "bg-slate-200"
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
        error={errors.confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
          clearError("confirmPassword");
        }}
        rightElement={
          <button
            type="button"
            onClick={toggleConfirmPassword}
            aria-label={
              showConfirmPassword
                ? "Ocultar confirmación de contraseña"
                : "Mostrar confirmación de contraseña"
            }
            className="inline-flex cursor-pointer items-center justify-center text-slate-500 transition-colors hover:text-slate-800"
          >
            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
      />

      <Button
        type="submit"
        className="h-14 w-full rounded-[14px] bg-[#0757ff] text-base font-extrabold shadow-[0_18px_36px_rgba(7,87,255,0.22)] hover:bg-[#004be0]"
      >
        Actualizar contraseña
      </Button>
    </form>
  );
};
