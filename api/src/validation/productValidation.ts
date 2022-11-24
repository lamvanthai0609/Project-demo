import { NextFunction, Request, Response } from 'express';
import { IProduct, IPagination } from '../interface';
import { failed } from '../util';

class ProductValidation {
     getAllProduct(req: Request, res: Response, next: NextFunction) {
          const dataRequest: IPagination = {
               _limit: req.query._limit,
               _page: req.query._page,
               _category: req.query._category,
          };
          if (dataRequest._limit) {
               if (parseInt(dataRequest._limit)) {
                    if (parseInt(dataRequest._limit) <= 0) {
                         dataRequest._limit = 4;
                    }
               } else {
                    dataRequest._limit = 4;
               }
          } else {
               dataRequest._limit = 4;
          }

          if (dataRequest._page) {
               if (parseInt(dataRequest._page)) {
                    if (parseInt(dataRequest._page) <= 0) {
                         dataRequest._page = 1;
                    }
               } else {
                    dataRequest._page = 1;
               }
          } else {
               dataRequest._page = 1;
          }

          req.body = {
               _limit: parseInt(dataRequest._limit),
               _page: parseInt(dataRequest._page),
               _category: dataRequest._category,
          };

          next();
     }
     addProduct(req: Request, res: Response, next: NextFunction) {
          const dataRequest: IProduct = {
               name: req.body.name,
               thumbnails: req.body.thumbnails,
               description: req.body.description,
               price: req.body.price,
               amount: req.body.amount,
               type: req.body.type,
          };

          if (!dataRequest.name) return failed(res, 'Tên sản phẩm trống', 401);
          if (!dataRequest.thumbnails) return failed(res, 'Ảnh sản phẩm trống', 401);
          if (!dataRequest.description) return failed(res, 'Mô tả sản phẩm trống', 401);
          if (!dataRequest.price) return failed(res, 'Giá sản phẩm trống', 401);
          if (!dataRequest.amount) return failed(res, 'Số lượng sản phẩm trống', 401);
          if (!dataRequest.type) return failed(res, 'Thể loại sản phẩm trống', 401);
          req.body = dataRequest;
          next();
     }
}
export default new ProductValidation();
