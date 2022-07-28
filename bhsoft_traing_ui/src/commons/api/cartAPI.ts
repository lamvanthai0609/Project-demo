import axiosClient, { API_PATHS } from '../../config/api';
import { IcartRequest } from '../../models/cart';

export const addCartAPI = async (data: IcartRequest) => {
     return await axiosClient.post(API_PATHS.addCart, { cart: data });
};
