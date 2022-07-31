import axios from 'axios';
import axiosClient, { API_PATHS } from '../../config/api';
import { ILogin, IRespon } from '../../models';

export const loginAPI = async (data: ILogin): Promise<IRespon> => {
     return axiosClient.post(API_PATHS.login, data);
};

export const logoutAPI = async (): Promise<IRespon> => {
     return await axiosClient.post(API_PATHS.logout);
};

export const refeshTokenAPI = async (): Promise<IRespon> => {
     return await axiosClient.post(API_PATHS.refeshToken);
};
