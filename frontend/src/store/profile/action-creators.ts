import { CreateProfileRecipeDto } from '../../models/Params/CreateProfileRecipeDto';
import { RecipeDto } from '../../models/RecipeDto';
import { ProfileActionTypes } from './action-types';
import {
  AddProfileRecipe,
  CreateProfileRecipe,
  GetProfileRecipes,
  SetProfileError,
  SetProfileRecipes,
} from './actions';

export const getProfileRecipes = (userId: string): GetProfileRecipes => {
  return {
    type: ProfileActionTypes.GET_PROFILE_RECIPES,
    userId,
  };
};

export const setProfileRecipes = (recipes: RecipeDto[]): SetProfileRecipes => {
  return {
    recipes,
    type: ProfileActionTypes.SET_PROFILE_RECIPES,
  };
};

export const addProfileRecipe = (recipe: RecipeDto): AddProfileRecipe => {
  return {
    recipe,
    type: ProfileActionTypes.ADD_PROFILE_RECIPE,
  };
};

export const createProfileRecipe = (payload: CreateProfileRecipeDto): CreateProfileRecipe => {
  return {
    payload,
    type: ProfileActionTypes.CREATE_PROFILE_RECIPE,
  };
};

export const setProfileError = (error: string): SetProfileError => {
  return {
    error,
    type: ProfileActionTypes.SET_PROFILE_ERROR,
  };
};
