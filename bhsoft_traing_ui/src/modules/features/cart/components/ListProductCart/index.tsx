import { useEffect, useRef, useState } from 'react';
import { ICart } from '../../../../../models/cart';
import { useAppSelector } from '../../../../../redux/hook';
import { formatPrice } from '../../../../../util/common';
import { getDataCartSelector } from '../../redux/cartSelector';
import { ItemProductCart } from './IteamProductCart';
const cols = ['Tên', 'Ảnh', 'Số lượng', 'Giá', 'Xoá'];
export const ListProductCart = () => {
     const dataCartSelector = useAppSelector(getDataCartSelector);
     const [data, setData] = useState<Array<ICart>>();
     const [totalMoney, setTotalMoney] = useState(0);
     useEffect(() => {
          if (dataCartSelector) {
               setData(dataCartSelector);
          }
     }, [dataCartSelector]);

     useEffect(() => {
          if (data) {
               const total = data.reduce((total, item) => total + item.quanlity * item.product.price, 0);
               setTotalMoney(total);
          }
     }, [data]);
     return (
          <div className="border w-[98%] m-auto">
               <div className="m-2">
                    <h1 className="text-[30px] font-bold">Giỏ Hàng</h1>
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-10">
                         <table className="w-full text-sm text-left text-black ">
                              <thead className="text-xs text-black uppercase bg-gray-200  ">
                                   <tr>
                                        <th scope="col" className="p-4 ">
                                             <div className="flex items-center">
                                                  <input
                                                       id="checkbox-all-search"
                                                       type="checkbox"
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                  />
                                                  <label htmlFor="checkbox-all-search" className="sr-only">
                                                       checkbox
                                                  </label>
                                             </div>
                                        </th>
                                        {cols.map((item, index) => (
                                             <th scope="col" key={index} className="py-5 px-6">
                                                  {item}
                                             </th>
                                        ))}
                                   </tr>
                              </thead>
                              <tbody>
                                   {dataCartSelector &&
                                        dataCartSelector.map((item, index) => (
                                             <ItemProductCart
                                                  key={index}
                                                  // handlerAmount={handlerAmount}
                                                  // amount={amount}
                                                  data={item}
                                             />
                                        ))}

                                   <tr>
                                        <td className="py-4 px-6 font-medium text-black whitespace-nowrap">
                                             Tổng Tiền
                                        </td>
                                        <td>{totalMoney && formatPrice(totalMoney)}</td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};
