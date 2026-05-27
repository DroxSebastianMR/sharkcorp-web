import type { PropsWithChildren } from 'react';

import { useMemo, useState } from 'react';

import { AuthContext } from '@/app/providers/auth/auth-context';
import type {
  AuthContextValue,
  AuthUser,
} from '@/app/providers/auth';

export const AuthProvider = ({
  children,
}: PropsWithChildren) => {
  const [user] = useState<AuthUser | null>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading: false,

      login: async () => {
        // TODO:
        // Implement login flow
      },

      logout: () => {
        // TODO:
        // Implement logout flow
      },
    }),
    [user],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};