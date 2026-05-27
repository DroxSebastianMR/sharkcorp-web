import type { RouteObject } from 'react-router-dom';

import { publicRoutes } from '@/app/router/routes/public.routes';
import { protectedRoutes } from '@/app/router/routes/protected.routes';
import { redirectRoutes } from '@/app/router/routes/redirect.routes';
import { fallbackRoutes } from '@/app/router/routes/fallback.routes';

export const rootRoutes: RouteObject[] = [
  ...redirectRoutes,

  ...publicRoutes,

  ...protectedRoutes,

  ...fallbackRoutes,
];