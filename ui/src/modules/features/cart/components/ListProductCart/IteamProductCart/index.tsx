import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { Store } from 'react-notifications-component';
import { ICart, IcartRequest } from '../../../../../../models/cart';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hook';
import { alertFc, formatPrice } from '../../../../../../util/common';
import { Button } from '../../../../../components/button';
import { getDataCartSelector } from '../../../redux/cartSelector';
import { getDatacartThunk } from '../../../redux/cartThunk';

interface IProps {
     // handlerAmount: Function;
     // amount: number;
     data: ICart;
}

export const ItemProductCart = ({ data }: IProps) => {
     const dispath = useAppDispatch();
     const [isCheck, setIsCheck] = useState(true);
     const [amount, setAmount] = useState(data.quanlity);
     const handlerAmount = async (value: number, id: string) => {
          try {
               if (amount + value < 1) return;
               const cart: IcartRequest = {
                    product: id,
                    quanlity: amount + value,
               };
               await dispathData(cart);
               setAmount(amount + value);
          } catch (erro: any) {
               alertFc(erro.message || 'Lỗi không xác định', 'danger');
          }
     };

     const dispathData = async (dataNew: IcartRequest) => {
          await dispath(getDatacartThunk(dataNew));
     };
     const handlerRemoveCart = async (id: string) => {
          try {
               const cart: IcartRequest = {
                    product: id,
                    quanlity: 0,
               };
               await dispathData(cart);
               alertFc('Xóa thành công', 'success');
          } catch (erro: any) {
               alertFc(erro.message || 'Lỗi không xác định', 'danger');
          }
     };
     return (
          <tr
               className={`bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${
                    !isCheck && 'opacity-50'
               }`}
          >
               <td className="p-4 w-4">
                    <div className="flex items-center">
                         <input
                              checked={isCheck}
                              onChange={(e) => {
                                   setIsCheck(e.target.checked);
                              }}
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                         />
                         <label htmlFor="checkbox-table-search-1" className="sr-only">
                              checkbox
                         </label>
                    </div>
               </td>
               <th scope="row" className="py-4 px-6 font-medium text-black whitespace-nowrap">
                    {data.product.name}
               </th>
               <td className="py-4 px-6 w-[10%]">
                    <img className="w-full h-full" src={data.product.thumbnails} />
               </td>
               <td className="py-4 px-6 ">
                    <div className="flex items-center">
                         <Button
                              styles="w-[30px] text-center border text-lg border-black"
                              text={'-'}
                              onClick={() => handlerAmount(-1, data.product._id)}
                         />
                         <input
                              className="w-[30px] text-center border outline-none bg-transparent border-black py-1"
                              type={'text'}
                              readOnly
                              value={amount}
                         />
                         <Button
                              styles="w-[30px] text-center border text-lg border-black"
                              text={'+'}
                              onClick={() => handlerAmount(1, data.product._id)}
                         />
                    </div>
               </td>
               <td className="py-4 px-6">{formatPrice(Number(data.product.price) * data.quanlity)}</td>
               <td className="py-4 px-6">
                    <Button
                         styles={'font-medium text-black  hover:text-white text-2xl '}
                         onClick={() => handlerRemoveCart(data.product._id)}
                         text={<BsTrash />}
                    ></Button>
               </td>
          </tr>
     );
};
