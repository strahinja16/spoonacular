import { combineReducers } from 'redux';
import { authReducer, AuthState } from './auth/reducer';
import { detailedRecipeReducer, DetailedRecipeState } from './detailedRecipe/reducer';
import { featuredRecipesReducer, FeaturedRecipesState } from './featuredRecipes/reducer';
import { profileReducer, ProfileState } from './profile/reducer';
import { queryRecipesReducer, QueryRecipesState } from './queryRecipes/reducer';

export interface AppState {
  auth: AuthState;
  detailedRecipe: DetailedRecipeState;
  featured: FeaturedRecipesState;
  query: QueryRecipesState;
  profile: ProfileState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  detailedRecipe: detailedRecipeReducer,
  featured: featuredRecipesReducer,
  profile: profileReducer,
  query: queryRecipesReducer,
});

export default rootReducer;
