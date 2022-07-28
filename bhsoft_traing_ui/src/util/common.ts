import { ICart, IcartRequest } from '../models/cart';

export function formatPrice(price: number): string {
     return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

export function handlerRequestDataCart(idProduct: string, cartData: Array<ICart>): Array<IcartRequest> {
     const listCart: Array<IcartRequest> = [];
     let listCartNew: Array<IcartRequest> = [];
     if (cartData) {
          cartData.forEach((item) => {
               const dataInsert: IcartRequest = {
                    product: item.product?._id,
                    quanlity: item.quanlity,
               };
               listCart.push(dataInsert);
          });
     }

     const findCart = listCart.findIndex((item) => item.product === idProduct);
     if (findCart !== -1) {
          listCart[findCart].quanlity = listCart[findCart].quanlity + 1;
          listCartNew = [...listCart];
     } else {
          listCartNew = [
               ...listCart,
               {
                    product: idProduct,
                    quanlity: 1,
               },
          ];
     }

     return listCartNew;
}
