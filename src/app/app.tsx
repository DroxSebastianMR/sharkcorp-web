import { AppRouter } from '@/app/router/app-router';
import { AppProviders } from '@/app/providers';

export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};