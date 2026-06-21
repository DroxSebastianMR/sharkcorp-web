export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SessionUser {
  id: number;
  username: string;
  email: string | null;
  status: string;
}

export interface SessionProfile {
  fullName: string;
  profilePhoto: string | null;
  employmentStatus: string;
}

export interface SessionCargo {
  id: number;
  name: string;
  icon: string | null;
}

export interface SessionArea {
  id: number;
  name: string;
  color: string;
}

export interface SessionRole {
  id: number;
  code: string;
  name: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  refreshExpiresIn: number;

  user: SessionUser;
  profile: SessionProfile;
  cargo: SessionCargo;
  area: SessionArea;

  roles: SessionRole[];
  permissions: string[];
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
