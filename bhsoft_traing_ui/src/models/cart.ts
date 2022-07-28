import { IProduct } from './product';

export interface ICart {
     product: IProduct;
     quanlity: number;
}

export interface IcartRequest {
     product: string;
     quanlity: number;
}
