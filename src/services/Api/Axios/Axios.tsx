import axios from 'axios';

// @ts-ignore
const { API_URL } = process.env;

// @ts-ignore
const development = process.env.NODE_ENV === 'development';

const instance = axios.create({
  baseURL: `${API_URL}api/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: any) => {
    const authToken = localStorage.getItem('_token');

    if (authToken) {
      config.headers.Authorization = authToken;
    }

    if (development) {
      console.log(`[${config.method}]: ${config.url}`);
      if (config.data) {
        console.log('Data: ', config.data);
      }
    }

    return config;
  },
  (error: any) => {
    if (development) {
      console.error(error);
    }
    return Promise.reject(error);
  }
);

export default instance;
