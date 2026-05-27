import type { AxiosError } from 'axios';

export const errorHandler = {
  handleApiError: (
    error: AxiosError,
  ): Promise<never> => {
    /*
      Aquí luego puedes:
      - toast notifications
      - sentry
      - logs
      - analytics
    */

    return Promise.reject(error);
  },
};