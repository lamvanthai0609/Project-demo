import { IProduct } from '../../../models';
import { ICart, IcartRequest } from '../../../models/cart';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { alertFc, formatPrice } from '../../../util/common';
import { getDataCartSelector } from '../../features/cart/redux/cartSelector';
import { getDatacartThunk } from '../../features/cart/redux/cartThunk';
import { login, refeshToken } from '../../features/login/redux/authThunk';
import { Button } from '../button';
const style =
     'bg-black text-white px-4 py-2 text-sm w-[120px] border-2 border-solid border-transparent hover:text-black hover:bg-zinc-200 hover:border-black';

interface IProps {
     data: IProduct;
}

export const Card = ({ data }: IProps) => {
     const dispath = useAppDispatch();
     const cartData = useAppSelector(getDataCartSelector) || [];
     const handlerAddCart = (idProduct: string) => {
          const cart: IcartRequest = {
               product: idProduct,
               quanlity: (cartData.find((item: ICart) => item.product._id === idProduct)?.quanlity || 0) + 1,
          };
          (async () => {
               try {
                    console.log(cart);
                    const data = await dispath(getDatacartThunk(cart));
                    console.log(data);

                    alertFc(`Thêm vào giỏ hàng ${data.message}`, 'success');
               } catch (erro: any) {
                    console.log('vào');

                    if (erro.message === 'Token hết hạn!') {
                         console.log('vào 2');

                         try {
                              console.log('vào 23');
                              //await dispath(refeshToken());
                         } catch (error: any) {
                              alertFc(erro.message || 'Lỗi không xác định', 'danger');
                         }
                    } else {
                         alertFc(erro.message || 'Lỗi không xác định', 'danger');
                    }
               }
          })();
     };

     return (
          <div className="w-[90%] sm:w-[40%] md:w-[20%]  border-solid  border-2 border-transparent m-2 rounded flex flex-col justify-between cursor-pointer hover:border-zinc-200 ">
               <div className="w-[90%] mx-auto my-[4px]">
                    <img
                         alt=""
                         className="w-full h-full"
                         src={
                              data.thumbnails
                                   ? data.thumbnails
                                   : 'https://traffic-edge03.cdn.vncdn.io/nvn/ncdn/store/662/ps/20220627/AP0136__0_.jpg'
                         }
                    />
               </div>
               <div className="text-center">
                    <p>{data.name}</p>
                    <p className="font-bold text-sm">{formatPrice(data.price)}</p>
               </div>
               <div className="flex flex-row justify-around my-3">
                    <Button
                         styles={style}
                         text={'Thêm giỏ'}
                         onClick={() => {
                              handlerAddCart(data._id);
                         }}
                    />
                    <Button styles={style} text={'Mua ngay'} />
               </div>
          </div>
     );
};
