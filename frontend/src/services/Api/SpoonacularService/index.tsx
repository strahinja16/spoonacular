import { AxiosResponse } from 'axios';
import { Food } from '../../../models/Food';
import { FoodSearchParams } from '../../../models/Params/FoodSearchParams';
import { RecipeSearchByNutrientParams } from '../../../models/Params/RecipeSearchByNutrientParams';
import { RecipeSearchParams } from '../../../models/Params/RecipeSearchParams';
import { Recipe } from '../../../models/Recipe';
import { RecipeBulk } from '../../../models/RecipeBulk';
import { RecipeByNutrient } from '../../../models/RecipeByNutrient';
import { RecipePriceBreakdown } from '../../../models/RecipePriceBreakdown';
import axios from '../Axios/SpoonacularAxios';

export class SpoonacularService {
  public getRecipeInformationBulk(
    id: string | number
  ): Promise<AxiosResponse<RecipeBulk[]> | void> {
    return axios
      .get('/recipes/informationBulk', {
        params: {
          ids: id,
        },
      })
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }

  public searchRecipe(params: RecipeSearchParams): Promise<AxiosResponse<Recipe[]>> {
    return axios
      .get('/recipes/search', {
        params,
      })
      .then(response => response.data.results)
      .catch(e => console.log(e.toString()));
  }

  public searchRecipeByNutrient(
    params: RecipeSearchByNutrientParams
  ): Promise<AxiosResponse<RecipeByNutrient[]>> {
    return axios
      .get('/recipes/findByNutrients', {
        params,
      })
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }

  public getSimilarRecipes(id: string | number): Promise<AxiosResponse<Recipe[]>> {
    return axios
      .get(`/recipes/${id}/similar`)
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }

  public getRecipePriceBreakdownById(
    id: string | number
  ): Promise<AxiosResponse<RecipePriceBreakdown>> {
    return axios
      .get(`recipes/${id}/priceBreakdownWidget.json`)
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }

  public getFoodInformation({ id, ...params }: FoodSearchParams): Promise<AxiosResponse<Food>> {
    return axios
      .get(`food/ingredients/${id}/information`, {
        params,
      })
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }
}

const spoonacularService = new SpoonacularService();

export default spoonacularService;
