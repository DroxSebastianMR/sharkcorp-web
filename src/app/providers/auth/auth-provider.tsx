import type { PropsWithChildren } from "react";

import { useMemo, useState } from "react";

import type { AuthContextValue, AuthUser } from "@/app/providers/auth";
import { AuthContext } from "@/app/providers/auth/auth-context";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user] = useState<AuthUser | null>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading: false,

      login: async () => {},

      logout: () => {},
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
