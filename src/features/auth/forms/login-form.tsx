import type { FormEvent } from "react";

import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { useAuth } from "@/app/providers/auth";
import { PATHS } from "@/app/router/constants/paths";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthInput } from "@/features/auth/components/auth-input";
import { loginSchema } from "@/features/auth/schemas/login.schema";

type LoginErrors = Partial<Record<"email" | "password", string>>;

export const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = loginSchema.safeParse({
      email,
      password,
    });

    if (!result.success) {
      const nextErrors: LoginErrors = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];

        if (field === "email" || field === "password") {
          nextErrors[field] = issue.message;
        }
      }

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
          onChange={(event) => {
            setEmail(event.target.value);
            setErrors((current) => ({ ...current, email: undefined }));
          }}
          error={errors.email}
        />

        <AuthInput
          id="password"
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder="••••••••••••••"
          Icon={Lock}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setErrors((current) => ({ ...current, password: undefined }));
          }}
          error={errors.password}
          rightElement={
            <button
              type="button"
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
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

          <span className="cursor-pointer text-sm text-slate-600">
            Recuérdame
          </span>
        </label>

        <Link
          to={PATHS.AUTH.FORGOT_PASSWORD}
          className="
            whitespace-nowrap
            text-sm
            font-bold
            text-[#0052f5]
            transition-colors
            hover:text-[#003db8]
            hover:underline
          "
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

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
        <span>{isSubmitting ? "Validando..." : "Iniciar sesión"}</span>
        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
      </Button>
    </form>
  );
};
