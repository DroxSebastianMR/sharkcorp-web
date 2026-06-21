import type { AxiosError } from "axios";

import type { AuthApiError } from "@/features/auth/types/auth-error.types";

import { mapAuthError } from "@/features/auth/utils/auth-error.mapper";

export const errorHandler = {
  handleApiError(error: AxiosError<AuthApiError>): never {
    const message = mapAuthError(error.response?.data?.code);

    throw new Error(message);
  },
};
