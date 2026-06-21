import type { LoginResponse } from "../types";

import { authStorage } from "./auth.storage";

export const authHandler = {
  login(session: LoginResponse): void {
    authStorage.setSession(session);
  },

  logout(): void {
    authStorage.clearSession();
  },

  hasSession(): boolean {
    return authStorage.isAuthenticated();
  },

  getSession(): LoginResponse | null {
    return authStorage.getSession();
  },

  getAccessToken(): string | null {
    return authStorage.getAccessToken();
  },

  getRefreshToken(): string | null {
    return authStorage.getRefreshToken();
  },
};
