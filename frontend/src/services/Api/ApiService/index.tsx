import { RecipeBulk } from '../../../models/RecipeBulk';
import axios from '../Axios/ApiAxios';

export class ApiService {
  public getRecipeInformationBulk(): Promise<RecipeBulk[]> {
    return axios
      .get('/recipes')
      .then(response => response.data)
      .catch(e => console.log(e.toString()));
  }
}

const apiService = new ApiService();

export default apiService;
