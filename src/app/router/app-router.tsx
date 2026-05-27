import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router/index';

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};