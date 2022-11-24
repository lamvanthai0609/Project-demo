import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../../redux/hook';
import { getDataCartSelector } from '../../../../features/cart/redux/cartSelector';
export const CartIconHeader = () => {
     const cartData = useAppSelector(getDataCartSelector);
     const [quanlity, setQuanlity] = useState(0);
     useEffect(() => {
          if (cartData) {
               if (cartData.length > 0) {
                    const totalQuanlity = cartData.reduce((total, item) => total + item.quanlity, 0);
                    setQuanlity(totalQuanlity);
               } else {
                    setQuanlity(0);
               }
          }
     }, [cartData]);

     return (
          <div className="mx-5">
               <Link to="/cart">
                    <div className="relative">
                         <span className="text-5xl cursor-pointer">
                              <AiOutlineShoppingCart />
                         </span>
                         <span className="text-white bg-red-600 px-1 rounded-full absolute top-0 right-0 text-xs">
                              {quanlity}
                         </span>
                    </div>
               </Link>
          </div>
     );
};
