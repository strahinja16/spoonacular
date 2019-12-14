import { useSelector } from 'react-redux';
import { AppState } from '../store/reducer';

export const useUserLikedRecipe = (recipeExternalId: string): boolean => {
  return !!useSelector((state: AppState) => {
    const recipes = state.profile.recipes;
    if (!recipes) {
      return false;
    }

    return recipes.find(
      // @ts-ignore
      recipe => recipe.externalId === recipeExternalId
    );
  });
};
