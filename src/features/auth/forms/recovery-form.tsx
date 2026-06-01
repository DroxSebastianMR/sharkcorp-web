import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { AuthInput } from "@/features/auth/components/auth-input";

import { PATHS } from "@/app/router/constants/paths";

export const RecoveryForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Enviar recuperación");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AuthInput
        id="email"
        label="Correo electrónico"
        type="email"
        placeholder="nombre@sharkcorp.com"
        Icon={Mail}
      />

      <Button
        type="submit"
        className="
          h-12
          w-full
          rounded-xl
          text-sm
          font-semibold
        "
      >
        Enviar enlace
      </Button>

      <Link
        to={PATHS.AUTH.LOGIN}
        className="
          flex
          items-center
          justify-center
          gap-2
          text-sm
          text-muted-foreground
          transition-colors
          hover:text-foreground
        "
      >
        <ArrowLeft size={16} />
        Volver al inicio de sesión
      </Link>
    </form>
  );
};
