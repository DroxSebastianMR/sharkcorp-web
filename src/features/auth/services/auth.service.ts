import type {
  AuthApiResponse,
  RefreshApiResponse,
} from "@/features/auth/types/auth-api.types";

import type {
  LoginCredentials,
  LoginResponse,
  RefreshResponse,
} from "@/features/auth/types/auth.types";

import { mapAuthResponse, mapRefreshResponse } from "../utils/auth.mapper";

import { apiClient } from "@/services/api/client";
import { API_ENDPOINTS } from "@/services/api/endpoints";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const { data } = await apiClient.post<AuthApiResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials,
    );

    return mapAuthResponse(data);
  },

  refreshToken: async (refreshToken: string): Promise<RefreshResponse> => {
    const { data } = await apiClient.post<RefreshApiResponse>(
      API_ENDPOINTS.AUTH.REFRESH,
      {
        refresh_token: refreshToken,
      },
    );

    return mapRefreshResponse(data);
  },

  logout: async (refreshToken: string): Promise<void> => {
    await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT, {
      refresh_token: refreshToken,
    });
  },

  recover: async (email: string): Promise<void> => {
    await apiClient.post(API_ENDPOINTS.AUTH.RECOVER, {
      email,
    });
  },
};
