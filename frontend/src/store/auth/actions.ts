import { Action } from 'redux';
import { LoginStartPayload, LoginSuccessPayload } from '../../models/Params/Login';
import { SignUpStartPayload } from '../../models/Params/SignUp';

export interface LoginUserStart extends Action {
  payload: LoginStartPayload;
}

export interface LoginUserSuccess extends Action {
  payload: LoginSuccessPayload;
}

export interface SignUpUserStart extends Action {
  payload: SignUpStartPayload;
}

export interface Logout extends Action {
  push: (path: string) => void;
}

export type AuthAction = LoginUserSuccess | LoginUserStart | SignUpUserStart | Logout;
