import type { PropsWithChildren } from 'react';

import { QueryProvider } from '@/app/providers/query';
import { ThemeProvider } from '@/app/providers/theme';
import { AuthProvider } from '@/app/providers/auth';

export const AppProviders = ({
  children,
}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};