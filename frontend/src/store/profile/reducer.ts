import { RecipeDto } from '../../models/RecipeDto';
import { ProfileActionTypes } from './action-types';
import { AddProfileRecipe, ProfileActions, SetProfileError, SetProfileRecipes } from './actions';

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
      return {
        ...state,
        recipes: [...state.recipes, recipe],
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
