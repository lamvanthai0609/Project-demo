import { getAllProductAPI } from '../../../../commons/api/productAPI';
import { IProduct } from '../../../../models';
import { getAllProductAction, setPaginAction } from './productAction';

export const getAllProductThunk =
     (): any =>
     async (dispath: any): Promise<void> => {
          const dataRespon = await getAllProductAPI();
          dispath(getAllProductAction(dataRespon?.results));
          dispath(setPaginAction(dataRespon?.pagination));
     };
