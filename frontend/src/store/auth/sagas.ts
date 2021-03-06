import { call, put, takeLatest } from 'redux-saga/effects';
import apiService from '../../services/Api/ApiService';
import { setProfileRecipes } from '../profile/action-creators';
import { loginUserSuccess, logoutSuccess } from './action-creators';
import { AuthActionTypes } from './action-types';
import { LoginUserStart, Logout, SignUpUserStart } from './actions';

export function* login(action: LoginUserStart) {
  try {
    const { push, ...loginPayload } = action.payload;
    const payload = yield call(apiService.login, loginPayload);
    const recipes = yield call(apiService.getUserRecipes, payload.user.id);

    localStorage.setItem('_token', payload.token);

    yield put(loginUserSuccess(payload));
    yield put(setProfileRecipes(recipes.data));

    yield call(push, '/');
  } catch (e) {
    console.log(e.toString());
  }
}

export function* signUp(action: SignUpUserStart) {
  try {
    const { push, ...signUpPayload } = action.payload;
    yield call(apiService.signUp, signUpPayload);

    yield call(push, '/login');
  } catch (e) {
    console.log(e.toString());
  }
}

export function* logout(action: Logout) {
  try {
    localStorage.removeItem('_token');

    yield put(logoutSuccess());

    yield call(action.push, '/');
  } catch (e) {
    console.log(e.toSTring());
  }
}

export function* watchAuth() {
  yield takeLatest(AuthActionTypes.LOGIN_START, login);
  yield takeLatest(AuthActionTypes.SIGN_UP_START, signUp);
  yield takeLatest(AuthActionTypes.LOGOUT, logout);
}
