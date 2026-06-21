import type { PropsWithChildren } from "react";

import { useCallback, useMemo, useState } from "react";

import type { LoginCredentials, LoginResponse } from "@/features/auth/types";

import type {
  AuthContextValue,
  AuthUser,
} from "@/app/providers/auth/auth.types";

import { AuthContext } from "@/app/providers/auth/auth-context";
import { authService } from "@/features/auth/services/auth.service";
import { authHandler } from "@/features/auth/utils/auth.handler";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<LoginResponse | null>(() =>
    authHandler.getSession(),
  );

  const [isLoading] = useState(false);

  const user: AuthUser | null = session?.user ?? null;

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<void> => {
      const session = await authService.login(credentials);

      authHandler.login(session);

      setSession(session);
    },
    [],
  );

  const logout = useCallback(async (): Promise<void> => {
    try {
      const refreshToken = authHandler.getRefreshToken();

      if (refreshToken) {
        await authService.logout(refreshToken);
      }
    } catch {
      //
    } finally {
      authHandler.logout();

      setSession(null);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      session,

      isAuthenticated: !!session,

      isLoading,

      login,
      logout,
    }),
    [user, session, isLoading, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
