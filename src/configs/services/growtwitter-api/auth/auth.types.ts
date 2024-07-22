export interface Credentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  ok: boolean;
  message: string;
  authToken?: string;
}
