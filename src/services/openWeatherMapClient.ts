import axios from 'axios';

export const BASE_PATH = 'https://api.openweathermap.org';
const APP_ID = '2ac22e71832d5e8c3d5f2f049ec7729a';
const openWeatherMapClient = axios.create({
  baseURL: BASE_PATH,
});

openWeatherMapClient.interceptors.request.use(
  config => {
    config.params = {...config.params, appid: APP_ID};
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default openWeatherMapClient;
