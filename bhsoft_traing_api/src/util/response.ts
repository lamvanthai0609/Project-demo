import { Response } from 'express';

export const success = (res: Response, data: any, pagination?: any) => {
     return res.status(200).json({
          message: 'Thành công',
          statusCode: 200,
          success: true,
          results: data,
          pagination: pagination,
     });
};

export const failed = (res: Response, mess: any, status: number = 500) => {
     return res.status(status).json({
          message: mess,
          statusCode: status,
          success: false,
     });
};

export const done = (res: Response, msg: string = 'Success!') => {
     return res.status(200).json({
          message: msg,
          statusCode: 200,
          success: true,
     });
};
