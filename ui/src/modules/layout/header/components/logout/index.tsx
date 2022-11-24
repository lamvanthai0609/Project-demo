import React from 'react';
import { useAppDispatch } from '../../../../../redux/hook';
import { alertFc } from '../../../../../util/common';
import { Button } from '../../../../components/button';
import { logout } from '../../../../features/login/redux/authThunk';

export const Logout = () => {
     const dispath = useAppDispatch();
     const handlerLogout = async () => {
          try {
               const data: any = await dispath(logout());
               alertFc(data.message, 'success');
          } catch (erro: any) {
               alertFc(erro.message, 'danger');
          }
     };
     return (
          <div className="mx-2">
               <Button styles={'text-white bg-black px-5 py-3 rounded'} text="Logout" onClick={handlerLogout} />
          </div>
     );
};
