import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { Button } from '../../../../../components/button';

interface IProps {
     handlerAmount: Function;
     amount: number;
}

export const ItemProductCart = ({ handlerAmount, amount }: IProps) => {
     const [isCheck, setIsCheck] = useState(true);

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
                              onClick={() => handlerAmount(-1)}
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
                              onClick={() => handlerAmount(1)}
                         />
                    </div>
               </td>
               <td className="py-4 px-6">$2999</td>
               <td className="py-4 px-6">
                    <Button styles={'font-medium text-black  hover:text-white text-2xl '} text={<BsTrash />}></Button>
               </td>
          </tr>
     );
};
