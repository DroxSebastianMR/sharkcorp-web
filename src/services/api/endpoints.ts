export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    RECOVER: '/auth/recover',
    REFRESH: '/auth/refresh',
  },

  EMPLOYEES: {
    LIST: '/employees',
    CREATE: '/employees',
    UPDATE: (id: string) => `/employees/${id}`,
    DELETE: (id: string) => `/employees/${id}`,
    DETAIL: (id: string) => `/employees/${id}`,
  },

  DASHBOARD: {
    METRICS: '/dashboard/metrics',
  },
} as const;