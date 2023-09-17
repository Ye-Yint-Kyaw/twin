export interface LoginType {
  username?: string;
  email?: string;
  password: string;
}

export interface RegisterType {
  username: string;
  email: string;
  password: string;
  phone_number?: string;
  address?: string;
  gender: string;
  provider: string;
}
