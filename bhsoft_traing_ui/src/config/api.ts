import axios, { AxiosResponse } from 'axios';
import { SERVER } from '../constants/index';

export const API_PATHS = {
     login: '/auth/login',
     sigup: '',
     refeshToken: '/auth/refeshToken',
     logout: '/auth/logout',
     getAllProduct: '/product',
     addCart: '/user/addCart',
};

const axiosClient = axios.create({
     baseURL: `${SERVER}api`,
     headers: {
          'Content-Type': 'application/json',
     },
});

axiosClient.interceptors.request.use(
     function (config) {
          const accessToken = localStorage.getItem('token');
          const custom: any = {
               Authorization: accessToken,
          };

          return {
               ...config,
               headers: {
                    ...config.headers,
                    ...custom,
               },
          };
     },
     function (error) {
          return Promise.reject(error);
     },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
     function (response: AxiosResponse) {
          return response.data;
     },
     function (error) {
          return Promise.reject(error?.response?.data);
     },
);

export default axiosClient;
