import axios from 'axios';

import { env } from '@/app/config/env';

export const apiClient = axios.create({
  baseURL: env.API_URL,
  timeout: 10000,

  headers: {
    'Content-Type': 'application/json',
  },
});