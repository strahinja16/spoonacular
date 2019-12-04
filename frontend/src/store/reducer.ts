import { combineReducers } from 'redux';
import { authReducer, AuthState } from './auth/reducer';
import { detailedRecipeReducer, DetailedRecipeState } from './detailedRecipe/reducer';
import { featuredRecipesReducer, FeaturedRecipesState } from './featuredRecipes/reducer';

export interface AppState {
  auth: AuthState;
  detailedRecipe: DetailedRecipeState;
  featured: FeaturedRecipesState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  detailedRecipe: detailedRecipeReducer,
  featured: featuredRecipesReducer,
});

export default rootReducer;
