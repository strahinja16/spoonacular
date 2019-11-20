import axios from 'axios';
import { SPOONACULAR_API_KEY, SPOONACULAR_URL } from './Constants';

console.log(process.env);
const instance = axios.create({
  baseURL: `https://${SPOONACULAR_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': `${SPOONACULAR_URL}`,
    'x-rapidapi-key': `${SPOONACULAR_API_KEY}`,
  },
});

instance.interceptors.request.use(
  (config: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${config.method}]: ${config.url}`);
      if (config.data) {
        console.log('Data: ', config.data);
      }
    }

    return config;
  },
  (error: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
    return Promise.reject(error);
  }
);

export default instance;
