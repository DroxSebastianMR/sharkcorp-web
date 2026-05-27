import { publicRoutes } from '@/app/router/routes/public.routes';
import { protectedRoutes } from '@/app/router/routes/protected.routes';

export const rootRoutes = [
  ...publicRoutes,
  ...protectedRoutes,
];