import { tokenHandler } from './token.handler';

export const authHandler = {
  logout: (): void => {
    tokenHandler.clearTokens();

    window.location.href = '/login';
  },
};