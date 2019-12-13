import { User } from '../../models/User';
import { AuthActionTypes } from './action-types';
import { AuthAction, LoginUserSuccess } from './actions';

export interface AuthState {
  token: string;
  user: User | null;
}

const initialState: AuthState = {
  token: '',
  user: null,
};

export function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      const { payload } = action as LoginUserSuccess;
      return {
        ...state,
        token: payload.token,
        user: payload.user,
      };
    }
    case AuthActionTypes.LOGOUT_SUCCESS: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
