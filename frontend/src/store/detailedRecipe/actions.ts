import { Action } from 'redux';
import { RecipeBulk } from '../../models/RecipeBulk';
import { DetailedRecipesActionTypes } from './action-types';

export interface GetDetailedRecipe extends Action {
  id: string;
  type: DetailedRecipesActionTypes.GET_DETAILED_RECIPE;
}

export interface SetDetailedRecipe extends Action {
  detailedRecipe: RecipeBulk;
  type: DetailedRecipesActionTypes.SET_DETAILED_RECIPE;
}

export interface SetDetailedRecipeError extends Action {
  error: string;
  type: DetailedRecipesActionTypes.SET_DETAILED_RECIPE_ERROR;
}


export type DetailedRecipeActions =
  | GetDetailedRecipe
  | SetDetailedRecipe
  | SetDetailedRecipeError;