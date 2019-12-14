import { LoginPayload, LoginSuccessPayload } from '../../../models/Params/Login';
import { SignUpPayload } from '../../../models/Params/SignUp';
import { RecipeBulk } from '../../../models/RecipeBulk';
import { RecipeDto } from '../../../models/RecipeDto';
import axios from '../Axios/ApiAxios';

export class ApiService {
  public login(payload: LoginPayload): Promise<LoginSuccessPayload> {
    return axios
      .post('/auth/login', payload)
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }

  public signUp(payload: SignUpPayload): Promise<any> {
    // tslint:disable-next-line:prettier
    return axios
      .post('/auth/sign-up', payload)
      .catch(e => console.log(e.toString()));
  }

  public getRecipeInformationBulk(): Promise<RecipeBulk[]> {
    return axios
      .get('/recipes')
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }

  public getUserRecipes(userId: string): Promise<RecipeDto[]> {
    return axios
      .get(`/users/${userId}/recipes`)
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }

  public createUserRecipe(userId: string, recipe: RecipeDto): Promise<RecipeDto[]> {
    return axios
      .post(`/users/${userId}/recipes`, recipe)
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }
}

const apiService = new ApiService();

export default apiService;
