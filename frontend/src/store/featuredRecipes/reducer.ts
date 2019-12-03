import { RecipeBulk } from '../../models/RecipeBulk';
import { FeaturedRecipesActionTypes } from './action-types';
import { FeaturedRecipesActions, SetFeaturedRecipes, SetFeaturedRecipesError } from './actions';

export interface FeaturedRecipesState {
  error: string;
  featuredRecipes: RecipeBulk[];
}

const initialState: FeaturedRecipesState = {
  error: '',
  featuredRecipes: [],
};

export function featuredRecipesReducer(
  state = initialState,
  action: FeaturedRecipesActions
): FeaturedRecipesState {
  switch (action.type) {
    case FeaturedRecipesActionTypes.SET_FEATURED_RECIPES: {
      const { featuredRecipes } = action as SetFeaturedRecipes;
      return {
        ...state,
        featuredRecipes,
      };
    }
    case FeaturedRecipesActionTypes.SET_FEATURED_RECIPES_ERROR: {
      const { error } = action as SetFeaturedRecipesError;
      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
}
