import { call, put, takeLatest } from 'redux-saga/effects';
import spoonacularService from '../../services/Api/SpoonacularService';
import { setDetailedRecipe, setDetailedRecipeError } from './action-creators';
import { DetailedRecipesActionTypes } from './action-types';
import { GetDetailedRecipe } from './actions';

export function* getDetailedRecipe(action: GetDetailedRecipe) {
  try {
    const payload = yield call(spoonacularService.getRecipeInformationBulk, action.id);

    yield put(setDetailedRecipe(payload[0]));
  } catch (e) {
    yield put(setDetailedRecipeError(e.toString()));
  }
}

export function* watchDetailedRecipe() {
  yield takeLatest(DetailedRecipesActionTypes.GET_DETAILED_RECIPE, getDetailedRecipe);
}
