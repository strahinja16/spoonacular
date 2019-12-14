import { RecipeDto } from '../../models/RecipeDto';
import { ProfileActionTypes } from './action-types';
import {
  AddProfileRecipe,
  ProfileActions,
  RemoveProfileRecipeSuccess,
  SetProfileError,
  SetProfileRecipes,
} from './actions';

export interface ProfileState {
  error: string;
  recipes: RecipeDto[];
}

const initialState: ProfileState = {
  error: '',
  recipes: [],
};

export function profileReducer(state = initialState, action: ProfileActions): ProfileState {
  switch (action.type) {
    case ProfileActionTypes.SET_PROFILE_RECIPES: {
      const { recipes } = action as SetProfileRecipes;
      return {
        ...state,
        recipes,
      };
    }
    case ProfileActionTypes.ADD_PROFILE_RECIPE: {
      const { recipe } = action as AddProfileRecipe;
      const newRecipes = state.recipes.concat(recipe);
      return {
        ...state,
        recipes: newRecipes,
      };
    }
    case ProfileActionTypes.REMOVE_PROFILE_RECIPE_SUCCESS: {
      const { payload } = action as RemoveProfileRecipeSuccess;
      const filtered = state.recipes.filter(rec => rec.id !== payload.id);
      return {
        ...state,
        recipes: filtered,
      };
    }
    case ProfileActionTypes.SET_PROFILE_ERROR: {
      const { error } = action as SetProfileError;
      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
}
