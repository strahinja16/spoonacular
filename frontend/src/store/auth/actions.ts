import { Action } from 'redux';

export interface LoginUser extends Action {
  token: string;
}

export type AuthAction = LoginUser;
