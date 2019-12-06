import { combineReducers } from 'redux';
import { authReducer, AuthState } from './auth/reducer';
import { detailedRecipeReducer, DetailedRecipeState } from './detailedRecipe/reducer';
import { featuredRecipesReducer, FeaturedRecipesState } from './featuredRecipes/reducer';
import { searchRecipesReducer, SearchRecipesState } from './searchRecipes/reducer';

export interface AppState {
  auth: AuthState;
  detailedRecipe: DetailedRecipeState;
  featured: FeaturedRecipesState;
  search: SearchRecipesState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  detailedRecipe: detailedRecipeReducer,
  featured: featuredRecipesReducer,
  search: searchRecipesReducer,
});

export default rootReducer;
