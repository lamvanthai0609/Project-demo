import { ILogin } from '../../../../../models';
import { Button } from '../../../../components/button';
import { Input } from '../../../../components/input';

interface Iprops {
     value: ILogin;
     setValue: any;
     handleClick: () => void;
     erro: ILogin;
     checkErro: Function;
}

export const LoginForm = ({ value, setValue, handleClick, erro, checkErro }: Iprops) => {
     return (
          <div className=" flex justify-center items-center h-screen flex-col w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 md:w-1/2">
               <div className="flex justify-center items-center w-[400px] flex-col shadow-lg bg-[#e2e8f069] rounded-lg">
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
                                   checkErro({ username: e.target.value, password: value.password });
                                   setValue.setUsername(e.target.value);
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
                                   checkErro({ usename: value.username, password: e.target.value });
                                   setValue.setPassword(e.target.value);
                              }}
                         />
                         {erro?.password && <p className="m-1 text-red-500">{erro?.password}</p>}
                    </div>
                    <div className="flex flex-col mt-5 py-3">
                         <Button
                              styles={'text-white bg-sky-800 p-4 w-[300px]'}
                              text={'Đăng Nhập'}
                              onclick={handleClick}
                         />
                    </div>
               </div>
          </div>
     );
};
