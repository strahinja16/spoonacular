import { Recipe } from '../../models/Recipe';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import { SearchRecipesActionTypes } from './action-types';
import { SetBasicRecipes, SetNutritionRecipes, SetSearchError, SetSearchType } from './actions';

export const setBasicRecipes = (basicRecipes: Recipe[]): SetBasicRecipes => {
  return {
    basicRecipes,
    type: SearchRecipesActionTypes.SET_BASIC_RECIPES,
  };
};

export const setNutritionRecipes = (nutritionRecipes: RecipeByNutrient[]): SetNutritionRecipes => {
  return {
    nutritionRecipes,
    type: SearchRecipesActionTypes.SET_NUTRITION_RECIPES,
  };
};

export const setSearchType = (searchType: RecipeSearchType): SetSearchType => {
  return {
    searchType,
    type: SearchRecipesActionTypes.SET_SEARCH_TYPE,
  };
};

export const setSearchError = (error: string): SetSearchError => {
  return {
    error,
    type: SearchRecipesActionTypes.SET_SEARCH_ERROR,
  };
};
