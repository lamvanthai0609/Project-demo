import axiosClient, { API_PATHS } from '../../config/api';
import { ILogin, IRespon } from '../../models';

export const loginAPI = async (data: ILogin): Promise<IRespon> => {
     return await axiosClient.post(API_PATHS.login, data);
};
