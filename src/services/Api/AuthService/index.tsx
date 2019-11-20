import axios from '../Axios/Axios';

export class AuthService {
  public login() {
    return axios.get('/auth/login');
  }
}

const authService = new AuthService();

export default authService;
