import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import type { AuthApiError } from "@/features/auth/types/auth-error.types";

import { apiClient } from "./client";

import { AuthErrorCode } from "@/features/auth/enums/auth-error-code.enum";
import { authHandler } from "@/features/auth/utils/auth.handler";
import { errorHandler } from "./handlers/error.handler";

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const accessToken = authHandler.getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (
  error: AxiosError<AuthApiError>,
): Promise<never> => {
  const errorCode = error.response?.data?.code;

  switch (errorCode) {
    case AuthErrorCode.TOKEN_EXPIRED:
    case AuthErrorCode.INVALID_ACCESS_TOKEN:
    case AuthErrorCode.INVALID_REFRESH_TOKEN:
    case AuthErrorCode.REFRESH_TOKEN_EXPIRED:
    case AuthErrorCode.REFRESH_TOKEN_REVOKED:
      authHandler.logout();
      break;

    default:
      break;
  }

  return errorHandler.handleApiError(error);
};

export const setupInterceptors = (): void => {
  apiClient.interceptors.request.use(onRequest, onRequestError);

  apiClient.interceptors.response.use(onResponse, onResponseError);
};
