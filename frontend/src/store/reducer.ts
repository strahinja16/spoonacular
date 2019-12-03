import { combineReducers } from 'redux';
import { authReducer, AuthState } from './auth/reducer';
import { featuredRecipesReducer, FeaturedRecipesState } from './featuredRecipes/reducer';

export interface AppState {
  auth: AuthState;
  featured: FeaturedRecipesState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  featured: featuredRecipesReducer,
});

export default rootReducer;
