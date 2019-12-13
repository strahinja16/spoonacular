import { call, put, takeLatest } from 'redux-saga/effects';
import { RecipeSearchByNutrientParams } from '../../models/Params/RecipeSearchByNutrientParams';
import { RecipeSearchParams } from '../../models/Params/RecipeSearchParams';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import spoonacularService from '../../services/Api/SpoonacularService';
import {
  setBasicRecipes,
  setNutritionRecipes,
  setSearchError,
  setSearchType,
} from './action-creators';
import { QueryRecipesActionTypes } from './action-types';
import { GetQueryRecipes } from './actions';

export function* getQueryRecipes(action: GetQueryRecipes) {
  try {
    if (action.payload.searchType === RecipeSearchType.BASIC) {
      const basicRecipes = yield call(
        spoonacularService.searchRecipe,
        action.payload.inputValues as RecipeSearchParams
      );

      yield put(setBasicRecipes(basicRecipes));
    }

    if (action.payload.searchType === RecipeSearchType.BY_NUTRITION) {
      const nutritionRecipes = yield call(
        spoonacularService.searchRecipeByNutrient,
        action.payload.inputValues as RecipeSearchByNutrientParams
      );

      yield put(setNutritionRecipes(nutritionRecipes));
    }

    yield put(setSearchType(action.payload.searchType));
  } catch (e) {
    yield put(setSearchError(e.toString()));
  }
}

export function* watchQueryRecipes() {
  yield takeLatest(QueryRecipesActionTypes.GET_QUERY_RECIPES, getQueryRecipes);
}
