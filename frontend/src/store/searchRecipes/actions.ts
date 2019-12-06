import { Action } from 'redux';
import { Recipe } from '../../models/Recipe';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import { SearchRecipesActionTypes } from './action-types';

export interface SetBasicRecipes extends Action {
  type: SearchRecipesActionTypes.SET_BASIC_RECIPES;
  basicRecipes: Recipe[];
}

export interface SetNutritionRecipes extends Action {
  type: SearchRecipesActionTypes.SET_NUTRITION_RECIPES;
  nutritionRecipes: RecipeByNutrient[];
}

export interface SetSearchType extends Action {
  type: SearchRecipesActionTypes.SET_SEARCH_TYPE;
  searchType: RecipeSearchType;
}

export interface SetSearchError extends Action {
  type: SearchRecipesActionTypes.SET_SEARCH_ERROR;
  error: string;
}

export type SearchRecipesActions =
  | SetBasicRecipes
  | SetNutritionRecipes
  | SetSearchType
  | SetSearchError;
