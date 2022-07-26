import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export const CartIconHeader = () => {
     return (
          <div className="mx-5">
               <Link to="/cart">
                    <div className="relative">
                         <span className="text-5xl cursor-pointer">
                              <AiOutlineShoppingCart />
                         </span>
                         <span className="text-white bg-red-600 px-1 rounded-full absolute top-0 right-0 text-xs">
                              10
                         </span>
                    </div>
               </Link>
          </div>
     );
};
