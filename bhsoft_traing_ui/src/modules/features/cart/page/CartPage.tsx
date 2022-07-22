import React from 'react';
import ListProductCart from '../components/ListProductCart';
import PayCart from '../components/PayCart';

const CartPage = () => {
     return (
          <div className="flex justify-center flex-wrap">
               <div className="w-full sm:w-1/2">
                    <PayCart />
               </div>
               <div className="w-full sm:w-1/2">
                    <ListProductCart />
               </div>
          </div>
     );
};

export default CartPage;
