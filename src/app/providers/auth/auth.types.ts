import type {
  LoginCredentials,
  LoginResponse,
  SessionUser,
} from "@/features/auth/types";

export type AuthUser = SessionUser;

export interface AuthContextValue {
  user: AuthUser | null;
  session: LoginResponse | null;

  isAuthenticated: boolean;
  isLoading: boolean;

  login(credentials: LoginCredentials): Promise<void>;

  logout(): Promise<void>;
}
