import { Response } from 'express';

export const success = (res: Response, data: any, pagination: any) => {
     return res.status(200).json({
          message: 'OK',
          statusCode: 200,
          success: true,
          results: data,
          pagination: pagination,
     });
};

export const failed = (res: Response, msg: Object, status = 500) => {
     return res.status(status).json({
          message: msg,
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
