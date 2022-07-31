import { addCartAPI } from '../../../../commons/api/cartAPI';
import { IcartRequest } from '../../../../models/cart';
import { setDataCartAction } from './cartAction';

export const getDatacartThunk =
     (data: IcartRequest): any =>
     async (dispath: any): Promise<void> => {
          const dataRespon: any = await addCartAPI(data);
          //console.log(dataRespon);
          dispath(setDataCartAction(dataRespon.results));
          return dataRespon;
     };
