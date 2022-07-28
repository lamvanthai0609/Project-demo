import axiosClient, { API_PATHS } from '../../config/api';
import { IRespon } from '../../models';

export const getAllProductAPI = async (page: number = 1): Promise<IRespon> => {
     return await axiosClient.get(`${API_PATHS.getAllProduct}?_page=${page}`);
};
