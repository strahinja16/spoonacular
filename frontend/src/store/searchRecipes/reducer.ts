import { Recipe } from '../../models/Recipe';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import { SearchRecipesActionTypes } from './action-types';
import {
  SearchRecipesActions,
  SetBasicRecipes,
  SetNutritionRecipes,
  SetSearchError,
  SetSearchType,
} from './actions';

export interface SearchRecipesState {
  error: string;
  nutritionRecipes: RecipeByNutrient[];
  basicRecipes: Recipe[];
  searchType: RecipeSearchType;
}

const initialState: SearchRecipesState = {
  basicRecipes: [],
  error: '',
  nutritionRecipes: [],
  searchType: RecipeSearchType.BASIC,
};

export function searchRecipesReducer(
  state = initialState,
  action: SearchRecipesActions
): SearchRecipesState {
  switch (action.type) {
    case SearchRecipesActionTypes.SET_SEARCH_TYPE: {
      const { searchType } = action as SetSearchType;
      return {
        ...state,
        searchType,
      };
    }
    case SearchRecipesActionTypes.SET_NUTRITION_RECIPES: {
      const { nutritionRecipes } = action as SetNutritionRecipes;
      return {
        ...state,
        nutritionRecipes,
      };
    }
    case SearchRecipesActionTypes.SET_BASIC_RECIPES: {
      const { basicRecipes } = action as SetBasicRecipes;
      return {
        ...state,
        basicRecipes,
      };
    }
    case SearchRecipesActionTypes.SET_SEARCH_ERROR: {
      const { error } = action as SetSearchError;
      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
}
