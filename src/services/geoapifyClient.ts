import axios from 'axios';

export const BASE_PATH = 'https://api.geoapify.com';
const API_KEY = 'b9615d8139464e99ba38f79257f90d52';
const geoapifyClient = axios.create({
  baseURL: BASE_PATH,
});

geoapifyClient.interceptors.request.use(
  config => {
    config.params = {...config.params, apiKey: API_KEY};
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default geoapifyClient;
