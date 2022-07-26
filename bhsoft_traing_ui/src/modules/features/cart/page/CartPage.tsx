import React from 'react';
import { ListProductCart } from '../components/ListProductCart';
import { PayCart } from '../components/PayCart';

export const CartPage = () => {
     return (
          <div className="flex justify-center flex-wrap">
               <div className="w-full lg:w-5/12">
                    <PayCart />
               </div>
               <div className="w-full lg:w-7/12">
                    <ListProductCart />
               </div>
          </div>
     );
};
