import { AuthActionTypes } from './action-types';
import { AuthAction } from './actions';
import { LoginUser } from './actions';

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

export function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER: {
      const { token } = action as LoginUser;
      return {
        ...state,
        token,
      };
    }
    default:
      return state;
  }
}
