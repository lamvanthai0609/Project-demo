import axiosClient, { API_PATHS } from '../../config/api';
import { IcartRequest } from '../../models/cart';

export const addCartAPI = async (data: Array<IcartRequest>) => {
     return await axiosClient.post(API_PATHS.addCart, data);
};
