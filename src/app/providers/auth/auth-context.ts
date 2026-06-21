import { createContext } from "react";

import type { AuthContextValue } from "@/app/providers/auth/auth.types";

export const AuthContext = createContext<AuthContextValue | null>(null);
