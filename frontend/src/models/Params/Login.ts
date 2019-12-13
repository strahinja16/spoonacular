import { User } from '../User';

export interface LoginStartPayload {
  email: string;
  password: string;
  push: (path: string) => void;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginSuccessPayload {
  token: string;
  user: User;
}
