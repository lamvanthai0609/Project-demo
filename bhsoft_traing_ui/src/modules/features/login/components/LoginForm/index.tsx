import React from 'react';
import { ILogin } from '../../../../../models';
import Button from '../../../../components/button';
import Input from '../../../../components/input';

interface Iprops {
     value: ILogin;
     setValue: any;
     handleClick: Function;
     erro: ILogin;
     setErro: any;
     handlerOnChange: Function;
}

const LoginForm = ({ value, setValue, handleClick, erro, handlerOnChange }: Iprops) => {
     return (
          <div className="bg-slate-200 flex justify-center items-center h-screen flex-col w-1/2">
               <div className="flex flex-col w-[300px] mt-2">
                    <label className="m-1 text-black" htmlFor={'username'}>
                         Username
                    </label>
                    <input
                         className="p-3 focus-within:outline-none"
                         type={'text'}
                         placeholder={'Nhập tài khoản '}
                         id={'username'}
                         value={value.username}
                         onChange={(e) => {
                              handlerOnChange(e.target.value, setValue.setUsername, 'username');
                         }}
                    />
                    {erro?.username && <p className="m-1 text-red-500">{erro?.username}</p>}
               </div>
               <div className="flex flex-col w-[300px] mt-2">
                    <label className="m-1 text-black" htmlFor={'password'}>
                         Password
                    </label>
                    <input
                         className="p-3 focus-within:outline-none"
                         type={'password'}
                         placeholder={'Nhập mật khẩu'}
                         id={'password'}
                         value={value.password}
                         onChange={(e) => {
                              handlerOnChange(e.target.value, setValue.setPassword, 'password');
                         }}
                    />
                    {erro?.password && <p className="m-1 text-red-500">{erro?.password}</p>}
               </div>
               <div className="flex flex-col mt-5">
                    <Button styles={'text-white bg-sky-800 p-4 w-[300px]'} text={'Đăng Nhập'} onClick={handleClick} />
               </div>
          </div>
     );
};

export default LoginForm;
