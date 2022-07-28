import React from 'react';
import { CartIconHeader } from '../components/CartIconHeader';
import { ListPageHeader } from '../components/listPageHeader';
import { LogoHeader } from '../components/LogoHeader';
import { Logout } from '../components/logout';

export const Header = () => {
     return (
          <div className="h-16 shadow-md">
               <div className="h-[100%] w-[90%] m-auto flex items-center justify-between">
                    <div>
                         <LogoHeader />
                    </div>
                    <div>
                         <ListPageHeader />
                    </div>
                    <div className="flex flex-row">
                         <CartIconHeader />
                         <Logout />
                    </div>
               </div>
          </div>
     );
};
