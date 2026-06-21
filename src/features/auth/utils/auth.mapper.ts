import type {
  AuthApiResponse,
  RefreshApiResponse,
} from "../types/auth-api.types";

import type { LoginResponse, RefreshResponse } from "../types/auth.types";

export const mapAuthResponse = (response: AuthApiResponse): LoginResponse => {
  const { data } = response;

  return {
    accessToken: data.tokens.access_token,

    refreshToken: data.tokens.refresh_token,

    tokenType: data.tokens.token_type,

    expiresIn: data.tokens.expires_in,

    refreshExpiresIn: data.tokens.refresh_expires_in,

    user: {
      id: data.user.id,
      username: data.user.username,
      email: data.user.email,
      status: data.user.status,
    },

    profile: {
      fullName: data.profile.full_name,

      profilePhoto: data.profile.profile_photo,

      employmentStatus: data.profile.employment_status,
    },

    cargo: {
      id: data.cargo.id,
      name: data.cargo.name,
      icon: data.cargo.icon,
    },

    area: {
      id: data.area.id,
      name: data.area.name,
      color: data.area.color,
    },

    roles: data.roles,

    permissions: data.permissions,
  };
};

export const mapRefreshResponse = (
  data: RefreshApiResponse,
): RefreshResponse => ({
  accessToken: data.access_token,

  refreshToken: data.refresh_token,

  expiresIn: data.expires_in,
});
