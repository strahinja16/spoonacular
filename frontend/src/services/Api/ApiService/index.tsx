import { RecipeBulk } from '../../../models/RecipeBulk';
import { RecipeDto } from '../../../models/RecipeDto';
import axios from '../Axios/ApiAxios';

export class ApiService {
  public getRecipeInformationBulk(): Promise<RecipeBulk[]> {
    return axios
      .get('/recipes')
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }

  public getUserRecipes(userId: string): Promise<RecipeDto> {
    return axios
      .get(`/users/${userId}/recipes`)
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }

  public createUserRecipe(userId: string, recipe: RecipeDto): Promise<void> {
    return axios
      .post(`/users/${userId}/recipes`, recipe)
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }
}

const apiService = new ApiService();

export default apiService;
