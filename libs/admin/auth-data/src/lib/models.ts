export interface LoginRequest {
  username: string;
  password: string;
}
export interface User {
  id: string;
  fullName: string;
  roles: 'admin' | 'user';
  email: string;
  image: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
