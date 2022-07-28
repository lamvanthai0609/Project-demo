import React from 'react';
import { useAppDispatch } from '../../../../../redux/hook';
import { Button } from '../../../../components/button';
import { logout } from '../../../../features/login/redux/authThunk';

export const Logout = () => {
     const dispath = useAppDispatch();
     const handlerLogout = () => {
          try {
               dispath(logout());
          } catch (erro) {
               console.log(erro);
          }
     };
     return (
          <div className="mx-2">
               <Button styles={'text-white bg-black px-5 py-3 rounded'} text="Logout" onClick={handlerLogout} />
          </div>
     );
};
