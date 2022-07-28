import { addCartAPI } from '../../../../commons/api/cartAPI';
import { IcartRequest } from '../../../../models/cart';

export const getDatacartThunk = async (data: Array<IcartRequest>): Promise<void> => {
     try {
          const dataRespon = await addCartAPI(data);
          console.log(dataRespon);
     } catch (erro) {
          console.log(erro);
          throw erro;
     }
};
