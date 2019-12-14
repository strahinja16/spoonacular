import { Action } from 'redux';
import { CreateProfileRecipeDto } from '../../models/Params/CreateProfileRecipeDto';
import { RecipeDto } from '../../models/RecipeDto';
import { RemoveRecipeDto } from '../../models/RemoveRecipeDto';
import { ProfileActionTypes } from './action-types';

export interface GetProfileRecipes extends Action {
  type: ProfileActionTypes.GET_PROFILE_RECIPES;
  userId: string;
}

export interface SetProfileRecipes extends Action {
  type: ProfileActionTypes.SET_PROFILE_RECIPES;
  recipes: RecipeDto[];
}

export interface AddProfileRecipe extends Action {
  type: ProfileActionTypes.ADD_PROFILE_RECIPE;
  recipe: RecipeDto;
}

export interface RemoveProfileRecipeStart extends Action {
  type: ProfileActionTypes.REMOVE_PROFILE_RECIPE_START;
  payload: RemoveRecipeDto;
}

export interface RemoveProfileRecipeSuccess extends Action {
  type: ProfileActionTypes.REMOVE_PROFILE_RECIPE_SUCCESS;
  payload: RecipeDto;
}

export interface CreateProfileRecipe extends Action {
  type: ProfileActionTypes.CREATE_PROFILE_RECIPE;
  payload: CreateProfileRecipeDto;
}

export interface SetProfileError extends Action {
  type: ProfileActionTypes.SET_PROFILE_ERROR;
  error: string;
}

export type ProfileActions =
  | GetProfileRecipes
  | CreateProfileRecipe
  | SetProfileError
  | SetProfileRecipes
  | RemoveProfileRecipeStart
  | RemoveProfileRecipeSuccess
  | AddProfileRecipe;
