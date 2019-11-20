import { Ingredient } from './Ingredient';

export interface RecipePriceBreakdown {
  ingredients: Ingredient[];
  totalCost: number;
  totalCostPerServing: number;
}
