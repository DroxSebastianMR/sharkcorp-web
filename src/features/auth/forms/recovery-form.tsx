import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { AuthInput } from '@/features/auth/components/auth-input';
import { AuthFooter } from '@/features/auth/components/auth-footer';

import { PATHS } from '@/app/router/constants/paths';

export const RecoveryForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Enviar recuperación');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[360px]"
    >
      <header className="mb-10 text-center">
        <h1 className="text-[36px] font-bold tracking-[-0.02em]">
          Recuperar acceso
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          Ingresa tu correo corporativo y te enviaremos un enlace para
          restablecer tu contraseña.
        </p>
      </header>

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
          mt-8
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
          mt-4
          flex
          items-center
          justify-center
          gap-2
          text-sm
          text-muted-foreground
          hover:text-foreground
        "
      >
        <ArrowLeft size={16} />
        Volver al inicio de sesión
      </Link>

      <AuthFooter />
    </form>
  );
};