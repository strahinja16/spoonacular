export interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  imageUrls: string[];
  servings: number;
}
