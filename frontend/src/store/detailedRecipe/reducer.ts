import { RecipeBulk } from '../../models/RecipeBulk';
import { DetailedRecipesActionTypes } from './action-types';
import { DetailedRecipeActions, SetDetailedRecipe, SetDetailedRecipeError } from './actions';

export interface DetailedRecipeState {
  detailedRecipe: RecipeBulk | null;
  error: string;
}

const initialState: DetailedRecipeState = {
  detailedRecipe: null,
  error: '',
};

export function detailedRecipeReducer(
  state = initialState,
  action: DetailedRecipeActions
): DetailedRecipeState {
  switch (action.type) {
    case DetailedRecipesActionTypes.SET_DETAILED_RECIPE: {
      const { detailedRecipe } = action as SetDetailedRecipe;
      return {
        ...state,
        detailedRecipe,
      };
    }
    case DetailedRecipesActionTypes.SET_DETAILED_RECIPE_ERROR: {
      const { error } = action as SetDetailedRecipeError;
      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
}
