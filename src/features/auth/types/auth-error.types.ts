import type { AuthErrorCode } from "@/features/auth/enums/auth-error-code.enum";

export interface AuthApiError {
  success: false;
  message: string;
  code: AuthErrorCode;
}
