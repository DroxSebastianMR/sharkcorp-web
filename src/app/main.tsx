import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/app';
import { setupInterceptors } from '@/services/api/interceptors';

export const bootstrap = (): void => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('Root element not found');
  }

  setupInterceptors();
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};