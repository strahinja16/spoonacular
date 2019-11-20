import { AuthActionTypes } from './action-types';
import { LoginUser } from './actions';

export const loginUser = (token: string): LoginUser => {
  return {
    token,
    type: AuthActionTypes.LOGIN_USER,
  };
};
