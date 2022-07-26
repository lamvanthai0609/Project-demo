import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { Button } from '../../../../components/button';
const cols = ['Tên', 'Ảnh', 'Số lượng', 'Giá', 'Xoá'];
export const ListProductCart = () => {
     const [amount, setAmount] = useState(1);
     const handlerAmount = (value: number) => {
          if (amount + value < 1) return;
          setAmount(amount + value);
     };
     return (
          <div className="border w-full">
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
                              <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 opacity-50">
                                   <td className="p-4 w-4">
                                        <div className="flex items-center">
                                             <input
                                                  id="checkbox-table-search-1"
                                                  type="checkbox"
                                                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                             />
                                             <label htmlFor="checkbox-table-search-1" className="sr-only">
                                                  checkbox
                                             </label>
                                        </div>
                                   </td>
                                   <th scope="row" className="py-4 px-6 font-medium text-black whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                   </th>
                                   <td className="py-4 px-6 w-[10%]">
                                        <img
                                             className="w-full h-full"
                                             src="https://traffic-edge03.cdn.vncdn.io/nvn/ncdn/store/662/ps/20220627/AP0136__0_.jpg"
                                        />
                                   </td>
                                   <td className="py-4 px-6 ">
                                        <div className="flex items-center">
                                             <Button
                                                  styles="w-[30px] text-center border text-lg border-black"
                                                  text={'-'}
                                                  onclick={() => handlerAmount(-1)}
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
                                                  onclick={() => handlerAmount(1)}
                                             />
                                        </div>
                                   </td>
                                   <td className="py-4 px-6">$2999</td>
                                   <td className="py-4 px-6">
                                        <Button
                                             styles={'font-medium text-black  hover:text-white text-2xl '}
                                             text={<BsTrash />}
                                        ></Button>
                                   </td>
                              </tr>
                              <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                   <td className="p-4 w-4">
                                        <div className="flex items-center">
                                             <input
                                                  id="checkbox-table-search-1"
                                                  type="checkbox"
                                                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                             />
                                             <label htmlFor="checkbox-table-search-1" className="sr-only">
                                                  checkbox
                                             </label>
                                        </div>
                                   </td>
                                   <th scope="row" className="py-4 px-6 font-medium text-black whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                   </th>
                                   <td className="py-4 px-6 w-[10%]">
                                        <img
                                             className="w-full h-full"
                                             src="https://traffic-edge03.cdn.vncdn.io/nvn/ncdn/store/662/ps/20220627/AP0136__0_.jpg"
                                        />
                                   </td>
                                   <td className="py-4 px-6 ">
                                        <div className="flex items-center">
                                             <Button
                                                  styles="w-[30px] text-center border text-lg border-black"
                                                  text={'-'}
                                                  onclick={() => handlerAmount(-1)}
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
                                                  onclick={() => handlerAmount(1)}
                                             />
                                        </div>
                                   </td>
                                   <td className="py-4 px-6">$2999</td>
                                   <td className="py-4 px-6">
                                        <Button
                                             styles={'font-medium text-black  hover:text-white text-2xl '}
                                             text={<BsTrash />}
                                        ></Button>
                                   </td>
                              </tr>
                              <tr>
                                   <td className="py-4 px-6 font-medium text-black whitespace-nowrap">Tổng Tiền</td>
                                   <td>1231231312</td>
                              </tr>
                         </tbody>
                    </table>
               </div>
          </div>
     );
};
