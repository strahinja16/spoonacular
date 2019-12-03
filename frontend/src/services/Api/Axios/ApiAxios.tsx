import axios from 'axios';
import { API_URL } from './Constants';

const instance = axios.create({
  baseURL: `http://${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
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
