import { RecipeDto } from '../RecipeDto';

export interface CreateProfileRecipeDto {
  userId: string;
  recipe: RecipeDto;
}
