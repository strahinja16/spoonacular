import { Recipe } from '../../models/Recipe';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import { QueryRecipesActionTypes } from './action-types';
import {
  QueryRecipesActions,
  SetBasicRecipes,
  SetNutritionRecipes,
  SetSearchError,
  SetSearchType,
} from './actions';

export interface QueryRecipesState {
  error: string;
  nutritionRecipes: RecipeByNutrient[];
  basicRecipes: Recipe[];
  searchType: RecipeSearchType;
}

const initialState: QueryRecipesState = {
  basicRecipes: [],
  error: '',
  nutritionRecipes: [],
  searchType: RecipeSearchType.BASIC,
};

export function queryRecipesReducer(
  state = initialState,
  action: QueryRecipesActions
): QueryRecipesState {
  switch (action.type) {
    case QueryRecipesActionTypes.SET_SEARCH_TYPE: {
      const { searchType } = action as SetSearchType;
      return {
        ...state,
        searchType,
      };
    }
    case QueryRecipesActionTypes.SET_NUTRITION_RECIPES: {
      const { nutritionRecipes } = action as SetNutritionRecipes;
      return {
        ...state,
        nutritionRecipes,
      };
    }
    case QueryRecipesActionTypes.SET_BASIC_RECIPES: {
      const { basicRecipes } = action as SetBasicRecipes;
      return {
        ...state,
        basicRecipes,
      };
    }
    case QueryRecipesActionTypes.SET_SEARCH_ERROR: {
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
