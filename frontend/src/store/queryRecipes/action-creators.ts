import { Recipe } from '../../models/Recipe';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import { QueryRecipesLocationState } from '../../pages/QueriedRecipes/QueriedRecipes';
import { QueryRecipesActionTypes } from './action-types';
import {
  GetQueryRecipes,
  SetBasicRecipes,
  SetNutritionRecipes,
  SetSearchError,
  SetSearchType,
} from './actions';

export const getQueryRecipes = (payload: QueryRecipesLocationState): GetQueryRecipes => {
  return {
    payload,
    type: QueryRecipesActionTypes.GET_QUERY_RECIPES,
  };
};

export const setBasicRecipes = (basicRecipes: Recipe[]): SetBasicRecipes => {
  return {
    basicRecipes,
    type: QueryRecipesActionTypes.SET_BASIC_RECIPES,
  };
};

export const setNutritionRecipes = (nutritionRecipes: RecipeByNutrient[]): SetNutritionRecipes => {
  return {
    nutritionRecipes,
    type: QueryRecipesActionTypes.SET_NUTRITION_RECIPES,
  };
};

export const setSearchType = (searchType: RecipeSearchType): SetSearchType => {
  return {
    searchType,
    type: QueryRecipesActionTypes.SET_SEARCH_TYPE,
  };
};

export const setSearchError = (error: string): SetSearchError => {
  return {
    error,
    type: QueryRecipesActionTypes.SET_SEARCH_ERROR,
  };
};
