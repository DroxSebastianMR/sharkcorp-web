export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: () => Promise<void>;
  logout: () => void;
}