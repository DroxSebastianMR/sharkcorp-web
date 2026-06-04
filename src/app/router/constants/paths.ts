export const PATHS = {
  ROOT: "/",

  AUTH: {
    LOGIN: "/login",
    FORGOT_PASSWORD: "/recover",
    RESET_PASSWORD: "/reset-password",
    RECOVERY_SENT: "/recover/sent",
  },

  DASHBOARD: {
    HOME: "/dashboard",
  },
} as const;
