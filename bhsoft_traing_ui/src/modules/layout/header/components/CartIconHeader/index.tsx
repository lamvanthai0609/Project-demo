import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../../redux/hook';
import { getDataCartSelector } from '../../../../features/cart/redux/cartSelector';
export const CartIconHeader = () => {
     const cartData = useAppSelector(getDataCartSelector);

     return (
          <div className="mx-5">
               <Link to="/cart">
                    <div className="relative">
                         <span className="text-5xl cursor-pointer">
                              <AiOutlineShoppingCart />
                         </span>
                         <span className="text-white bg-red-600 px-1 rounded-full absolute top-0 right-0 text-xs">
                              {cartData && cartData.length}
                         </span>
                    </div>
               </Link>
          </div>
     );
};
