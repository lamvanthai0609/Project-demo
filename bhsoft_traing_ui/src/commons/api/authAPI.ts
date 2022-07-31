import axios from 'axios';
import axiosClient, { API_PATHS } from '../../config/api';
import { ILogin, IRespon } from '../../models';

export const loginAPI = async (data: ILogin): Promise<IRespon> => {
     const datares = await axios.post(`http://localhost:3300/api${API_PATHS.login}`, data);
     return datares.data;
};

export const logoutAPI = async (): Promise<IRespon> => {
     return await axiosClient.post(API_PATHS.logout);
};

export const refeshTokenAPI = async (): Promise<IRespon> => {
     return await axiosClient.post(API_PATHS.refeshToken);
};
