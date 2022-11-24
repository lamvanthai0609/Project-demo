import { Request, Response } from 'express';
import { IProduct, IPagination } from '../../interface';
import ProductService from '../../service/productService';
import { success, failed } from '../../util';

class ProductController {
     async getAllProduct(req: Request, res: Response) {
          try {
               const dataRequest: IPagination = req.body;
               const dataRespon = await ProductService.getAllProduct(dataRequest);
               const { products, pagination } = dataRespon;
               success(res, products, pagination);
          } catch (erro) {
               failed(res, erro);
          }
     }
     async addProduct(req: Request, res: Response) {
          try {
               const dataRequest: IProduct = req.body;
               const dataRespon = await ProductService.addProduct(dataRequest);
               success(res, dataRespon);
          } catch (erro) {
               failed(res, erro);
          }
     }
}

export default new ProductController();
