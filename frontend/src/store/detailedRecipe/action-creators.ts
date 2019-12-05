import { RecipeBulk } from '../../models/RecipeBulk';
import { DetailedRecipesActionTypes } from './action-types';
import { GetDetailedRecipe, SetDetailedRecipe, SetDetailedRecipeError } from './actions';

export const setDetailedRecipe = (detailedRecipe: RecipeBulk): SetDetailedRecipe => {
  return {
    detailedRecipe,
    type: DetailedRecipesActionTypes.SET_DETAILED_RECIPE,
  };
};

export const getDetailedRecipe = (id: string): GetDetailedRecipe => {
  return {
    id,
    type: DetailedRecipesActionTypes.GET_DETAILED_RECIPE,
  };
};

export const setDetailedRecipeError = (error: string): SetDetailedRecipeError => {
  return {
    error,
    type: DetailedRecipesActionTypes.SET_DETAILED_RECIPE_ERROR,
  };
};
