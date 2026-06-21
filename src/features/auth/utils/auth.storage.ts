import type { LoginResponse, SessionUser } from "../types";

const SESSION_KEY = "session";

export const authStorage = {
  setSession(session: LoginResponse): void {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  },

  clearSession(): void {
    localStorage.removeItem(SESSION_KEY);
  },

  getSession(): LoginResponse | null {
    const session = localStorage.getItem(SESSION_KEY);

    if (!session) {
      return null;
    }

    return JSON.parse(session) as LoginResponse;
  },

  getAccessToken(): string | null {
    return authStorage.getSession()?.accessToken ?? null;
  },

  getRefreshToken(): string | null {
    return authStorage.getSession()?.refreshToken ?? null;
  },

  getUser(): SessionUser | null {
    return authStorage.getSession()?.user ?? null;
  },

  getPermissions(): string[] {
    return authStorage.getSession()?.permissions ?? [];
  },

  hasPermission(permission: string): boolean {
    return authStorage.getPermissions().includes(permission);
  },

  isAuthenticated(): boolean {
    return !!authStorage.getAccessToken();
  },
};
