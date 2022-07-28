import { getAllProductAPI } from '../../../../commons/api/productAPI';
import { IProduct } from '../../../../models';
import { getAllProductAction, setPaginAction } from './productAction';

export const getAllProductThunk =
     (page: number = 1): any =>
     async (dispath: any): Promise<void> => {
          const dataRespon = await getAllProductAPI(page);
          dispath(getAllProductAction(dataRespon?.results));
          dispath(setPaginAction(dataRespon?.pagination));
     };
