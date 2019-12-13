import { Action } from 'redux';
import { LoginStartPayload, LoginSuccessPayload } from '../../models/Params/Login';
import { SignUpStartPayload } from '../../models/Params/SignUp';
import { AuthActionTypes } from './action-types';
import { LoginUserStart, LoginUserSuccess, Logout, SignUpUserStart } from './actions';

export const loginUserStart = (payload: LoginStartPayload): LoginUserStart => {
  return {
    payload,
    type: AuthActionTypes.LOGIN_START,
  };
};

export const loginUserSuccess = (payload: LoginSuccessPayload): LoginUserSuccess => {
  return {
    payload,
    type: AuthActionTypes.LOGIN_SUCCESS,
  };
};

export const signUpUserStart = (payload: SignUpStartPayload): SignUpUserStart => {
  return {
    payload,
    type: AuthActionTypes.SIGN_UP_START,
  };
};

export const logout = (push: (path: string) => void): Logout => {
  return {
    push,
    type: AuthActionTypes.LOGOUT,
  };
};

export const logoutSuccess = (): Action => {
  return {
    type: AuthActionTypes.LOGOUT_SUCCESS,
  };
};
