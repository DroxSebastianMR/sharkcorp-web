export interface AuthApiResponse {
  success: boolean;
  message: string;

  data: {
    tokens: {
      access_token: string;
      refresh_token: string;
      token_type: string;
      expires_in: number;
      refresh_expires_in: number;
    };

    user: {
      id: number;
      username: string;
      email: string | null;
      status: string;
    };

    profile: {
      full_name: string;
      profile_photo: string | null;
      employment_status: string;
    };

    cargo: {
      id: number;
      name: string;
      icon: string | null;
    };

    area: {
      id: number;
      name: string;
      color: string;
    };

    roles: {
      id: number;
      code: string;
      name: string;
    }[];

    permissions: string[];
  };
}

export interface RefreshApiResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}
