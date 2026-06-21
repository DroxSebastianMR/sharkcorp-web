import { AuthErrorCode } from "@/features/auth/enums/auth-error-code.enum";

export const mapAuthError = (errorCode?: AuthErrorCode): string => {
  switch (errorCode) {
    case AuthErrorCode.INVALID_CREDENTIALS:
      return "Usuario o contraseña incorrectos.";

    case AuthErrorCode.ACCOUNT_DISABLED:
      return "La cuenta se encuentra deshabilitada.";

    case AuthErrorCode.USER_BLOCKED:
      return "La cuenta ha sido bloqueada.";

    case AuthErrorCode.TOKEN_EXPIRED:
      return "La sesión ha expirado.";

    case AuthErrorCode.INVALID_ACCESS_TOKEN:
      return "El token de acceso es inválido.";

    case AuthErrorCode.INVALID_TOKEN:
      return "El token es inválido.";

    case AuthErrorCode.INVALID_REFRESH_TOKEN:
      return "El token de actualización es inválido.";

    case AuthErrorCode.REFRESH_TOKEN_EXPIRED:
      return "La sesión ha expirado.";

    case AuthErrorCode.REFRESH_TOKEN_REVOKED:
      return "La sesión ha sido revocada.";

    default:
      return "Ha ocurrido un error inesperado.";
  }
};
