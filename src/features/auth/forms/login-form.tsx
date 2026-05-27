import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { PATHS } from '@/app/router/constants/paths';

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">
          Welcome back
        </h1>

        <p className="text-sm text-muted-foreground">
          Sign in to continue to SHARKCORP
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium"
          >
            Email
          </label>

          <Input
            id="email"
            type="email"
            placeholder="name@company.com"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium"
            >
              Password
            </label>

            <Link
              to={PATHS.AUTH.RECOVER}
              className="text-sm text-muted-foreground hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Input
            id="password"
            type="password"
          />
        </div>
      </div>

      <Button type="submit">
        Sign in
      </Button>
    </form>
  );
};