import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { apiClient } from '@/services/api/client';

import { authHandler } from './handlers/auth.handler';
import { errorHandler } from './handlers/error.handler';
import { tokenHandler } from './handlers/token.handler';

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const accessToken =
    tokenHandler.getAccessToken();

  if (accessToken) {
    config.headers.Authorization =
      `Bearer ${accessToken}`;
  }

  return config;
};

const onRequestError = (
  error: AxiosError,
): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (
  response: AxiosResponse,
): AxiosResponse => {
  return response;
};

const onResponseError = async (
  error: AxiosError,
): Promise<never> => {
  const status = error.response?.status;

  switch (status) {
    case 401:
      authHandler.logout();
      break;
    case 403:
      break;
    case 500:
      break;

    default:
      break;
  }

  return errorHandler.handleApiError(
    error,
  );
};

export const setupInterceptors = (): void => {
  apiClient.interceptors.request.use(
    onRequest,
    onRequestError,
  );

  apiClient.interceptors.response.use(
    onResponse,
    onResponseError,
  );
};