import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Mail, Lock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { AuthInput } from '@/features/auth/components/auth-input';

import { PATHS } from '@/app/router/constants/paths';

export const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem('remember_me', 'true');
    } else {
      localStorage.removeItem('remember_me');
    }

    console.log('Remember Me:', rememberMe);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-6">
        <AuthInput
          id="email"
          label="Correo electrónico"
          type="email"
          placeholder="nombre@sharkcorp.com"
          Icon={Mail}
        />

        <AuthInput
          id="password"
          label="Contraseña"
          type="password"
          placeholder="••••••••••••••"
          Icon={Lock}
          rightElement={
            <Eye
              size={16}
              className="cursor-pointer"
            />
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
            onCheckedChange={(checked) =>
              setRememberMe(checked === true)
            }
            className="h-5 w-5 rounded-md border-gray-300"
          />

          <span className="text-sm text-muted-foreground">
            Recuérdame
          </span>
        </label>

        <Link
          to={PATHS.AUTH.FORGOT_PASSWORD}
          className="
            whitespace-nowrap
            text-sm
            font-medium
            text-primary
            hover:underline
          "
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

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
        Iniciar sesión
      </Button>
    </form>
  );
};