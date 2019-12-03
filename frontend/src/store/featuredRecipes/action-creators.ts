import { RecipeBulk } from '../../models/RecipeBulk';
import { FeaturedRecipesActionTypes } from './action-types';
import { GetFeaturedRecipes, SetFeaturedRecipes, SetFeaturedRecipesError } from './actions';

export const getFeaturedRecipes = (): GetFeaturedRecipes => {
  return {
    type: FeaturedRecipesActionTypes.GET_FEATURED_RECIPES,
  };
};

export const setFeaturedRecipes = (showcaseRecipes: RecipeBulk[]): SetFeaturedRecipes => {
  return {
    featuredRecipes: showcaseRecipes,
    type: FeaturedRecipesActionTypes.SET_FEATURED_RECIPES,
  };
};

export const setFeaturedRecipesError = (error: string): SetFeaturedRecipesError => {
  return {
    error,
    type: FeaturedRecipesActionTypes.SET_FEATURED_RECIPES_ERROR,
  };
};
