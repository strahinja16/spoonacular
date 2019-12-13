import { Action } from 'redux';
import { Recipe } from '../../models/Recipe';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import { QueryRecipesLocationState } from '../../pages/QueriedRecipes/QueriedRecipes';
import { QueryRecipesActionTypes } from './action-types';

export interface GetQueryRecipes extends Action {
  type: QueryRecipesActionTypes.GET_QUERY_RECIPES;
  payload: QueryRecipesLocationState;
}

export interface SetBasicRecipes extends Action {
  type: QueryRecipesActionTypes.SET_BASIC_RECIPES;
  basicRecipes: Recipe[];
}

export interface SetNutritionRecipes extends Action {
  type: QueryRecipesActionTypes.SET_NUTRITION_RECIPES;
  nutritionRecipes: RecipeByNutrient[];
}

export interface SetSearchType extends Action {
  type: QueryRecipesActionTypes.SET_SEARCH_TYPE;
  searchType: RecipeSearchType;
}

export interface SetSearchError extends Action {
  type: QueryRecipesActionTypes.SET_SEARCH_ERROR;
  error: string;
}

export type QueryRecipesActions =
  | GetQueryRecipes
  | SetBasicRecipes
  | SetNutritionRecipes
  | SetSearchType
  | SetSearchError;
