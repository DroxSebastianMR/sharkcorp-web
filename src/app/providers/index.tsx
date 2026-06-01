import type { PropsWithChildren } from "react";

import { AuthProvider } from "@/app/providers/auth";
import { QueryProvider } from "@/app/providers/query";
import { ThemeProvider } from "@/app/providers/theme";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};
