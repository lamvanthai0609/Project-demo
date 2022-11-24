import { Response } from 'express';
import { IPagination, IProduct } from '../interface';
import Product from '../app/models/productModel';
class ProductService {
     async getAllProduct(payload: IPagination) {
          try {
               const total = await Product.find();
               const products = await Product.find()
                    .limit(payload._limit)
                    .skip((payload._page - 1) * payload._limit);
               return {
                    products,
                    pagination: {
                         _total: total.length,
                         _page: payload._page,
                         _limit: payload._limit,
                    },
               };
          } catch (erro) {
               throw erro;
          }
     }
     async addProduct(payload: IProduct) {
          try {
               const product = new Product(payload);
               await product.save();

               return { product };
          } catch (erro) {
               throw erro;
          }
     }
}
export default new ProductService();
