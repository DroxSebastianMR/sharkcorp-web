import { PATHS } from "@/app/router/constants/paths";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthInput } from "@/features/auth/components/auth-input";
import { useLoginForm } from "@/features/auth/hooks/use-login-form";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const {
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
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="space-y-5">
        <AuthInput
          id="email"
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

        <AuthInput
          id="password"
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
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
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
              className="inline-flex cursor-pointer items-center justify-center text-slate-500 transition-colors hover:text-slate-800"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <label
          htmlFor="remember"
          className="flex cursor-pointer items-center gap-3"
        >
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked === true)}
            className="h-5 w-5 cursor-pointer rounded-md border-slate-300"
          />
          <span className="text-sm text-slate-600">Recuérdame</span>
        </label>
        <Link
          to={PATHS.AUTH.FORGOT_PASSWORD}
          className="text-sm font-bold text-[#0052f5] transition-colors hover:text-[#003db8] hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-14 w-full rounded-[14px] bg-[#0757ff] text-base font-extrabold shadow-[0_18px_36px_rgba(7,87,255,0.22)] hover:bg-[#004be0]"
      >
        <span>{isSubmitting ? "Validando..." : "Iniciar sesión"}</span>

        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
      </Button>
    </form>
  );
};
