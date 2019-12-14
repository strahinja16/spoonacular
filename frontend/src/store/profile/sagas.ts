import { call, put, takeLatest } from 'redux-saga/effects';
import apiService from '../../services/Api/ApiService';
import {
  addProfileRecipe,
  removeProfileRecipeSuccess,
  setProfileError,
  setProfileRecipes,
} from './action-creators';
import { ProfileActionTypes } from './action-types';
import { CreateProfileRecipe, GetProfileRecipes, RemoveProfileRecipeStart } from './actions';

export function* getProfileRecipes(action: GetProfileRecipes) {
  try {
    const payload = yield call(apiService.getUserRecipes, action.userId);

    yield put(setProfileRecipes(payload.data));
  } catch (e) {
    yield put(setProfileError(e.toString()));
  }
}

export function* createProfileRecipe(action: CreateProfileRecipe) {
  try {
    const { payload } = action;
    const response = yield call(apiService.createUserRecipe, payload.userId, payload.recipe);

    yield put(addProfileRecipe(response.recipe));
  } catch (e) {
    yield put(setProfileError(e.toString()));
  }
}

export function* removeProfileRecipe(action: RemoveProfileRecipeStart) {
  try {
    const { payload } = action;
    const response = yield call(apiService.removeUserRecipe, payload.userId, payload.recipeId);

    yield put(removeProfileRecipeSuccess(response.recipe));
  } catch (e) {
    yield put(setProfileError(e.toString()));
  }
}

export function* watchProfile() {
  yield takeLatest(ProfileActionTypes.GET_PROFILE_RECIPES, getProfileRecipes);
  yield takeLatest(ProfileActionTypes.CREATE_PROFILE_RECIPE, createProfileRecipe);
  yield takeLatest(ProfileActionTypes.REMOVE_PROFILE_RECIPE_START, removeProfileRecipe);
}
