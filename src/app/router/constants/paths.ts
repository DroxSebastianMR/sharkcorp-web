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

  ATTENDANCE: {
    HOME: "/attendance",
    OVERVIEW: "/attendance",
    RECORDS_REPORTS: "/attendance/records-reports",
    ABSENCES: "/attendance/absences",
    JUSTIFICATIONS: "/attendance/justifications",
  },

  AGENDA: {
    HOME: "/agenda",
    CREATE: "/agenda/new",
  },

  ANNOUNCEMENTS: {
    HOME: "/announcements",
    CREATE: "/announcements/new",
  },

  TASKS: {
    HOME: "/tasks",
    CREATE: "/tasks/new",
  },

  CLIENTS: {
    HOME: "/clients",
    CREATE: "/clients/new",
  },

  PROJECTS: {
    HOME: "/projects",
    CREATE: "/projects/new",
  },

  DOCUMENTS: {
    HOME: "/documents",
    CREATE: "/documents/new",
  },

  DIRECTORY: {
    HOME: "/directory",
  },

  HISTORY: {
    HOME: "/history",
  },

  DIALOGS: {
    HOME: "/dialogs",
  },

  SETTINGS: {
    HOME: "/settings",
    SECURITY_ACCESS: "/settings/security-access",
    COMPANY: "/settings/company",
    NOTIFICATIONS: "/settings/notifications",
    INTEGRATIONS: "/settings/integrations",
    BACKUPS: "/settings/backups",
  },
} as const;
