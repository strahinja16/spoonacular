import { call, put, takeLatest } from 'redux-saga/effects';
import apiService from '../../services/Api/ApiService';
import { setFeaturedRecipes, setFeaturedRecipesError } from './action-creators';
import { FeaturedRecipesActionTypes } from './action-types';

export function* getFeaturedRecipes() {
  try {
    const payload = yield call(apiService.getRecipeInformationBulk);

    yield put(setFeaturedRecipes(payload.data));
  } catch (e) {
    yield put(setFeaturedRecipesError(e.toString()));
  }
}

export function* watchFeaturedRecipes() {
  yield takeLatest(FeaturedRecipesActionTypes.GET_FEATURED_RECIPES, getFeaturedRecipes);
}
