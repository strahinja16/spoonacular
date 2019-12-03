import { Action } from 'redux';
import { RecipeBulk } from '../../models/RecipeBulk';
import { FeaturedRecipesActionTypes } from './action-types';

export interface GetFeaturedRecipes extends Action {
  type: FeaturedRecipesActionTypes.GET_FEATURED_RECIPES;
}

export interface SetFeaturedRecipes extends Action {
  type: FeaturedRecipesActionTypes.SET_FEATURED_RECIPES;
  featuredRecipes: RecipeBulk[];
}

export interface SetFeaturedRecipesError extends Action {
  type: FeaturedRecipesActionTypes.SET_FEATURED_RECIPES_ERROR;
  error: string;
}

export type FeaturedRecipesActions =
  | GetFeaturedRecipes
  | SetFeaturedRecipes
  | SetFeaturedRecipesError;
