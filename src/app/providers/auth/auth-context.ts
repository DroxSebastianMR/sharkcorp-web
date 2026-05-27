import { createContext } from 'react';

import type { AuthContextValue } from '@/app/providers/auth';

export const AuthContext =
  createContext<AuthContextValue | null>(null);