import axios, { AxiosResponse } from 'axios';
import { SERVER } from '../constants/index';

export const API_PATHS = {
     login: '/auth/login',
     sigup: '',
     refeshToken: '',
     getProduct: '',
};

const axiosClient = axios.create({
     baseURL: `${SERVER}api`,
     headers: {
          'Content-Type': 'application/json',
     },
});

axiosClient.interceptors.request.use(
     function (config) {
          return config;
     },
     function (error) {
          // Do something with request error
          return Promise.reject(error);
     },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
     function (response: AxiosResponse) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response.data;
     },
     function (error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          return Promise.reject(error?.response?.data);
     },
);

export default axiosClient;
