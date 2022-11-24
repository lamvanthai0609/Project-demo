import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from 'react-notifications-component';
import { ILogin } from '../../../../models';
import { useAppDispatch, useAppSelector } from '../../../../redux/hook';
import { Loadding } from '../../../components/loadding';
import { LoginForm } from '../components/LoginForm';
import { tokenAuthSelector } from '../redux/authSelector';
import { login } from '../redux/authThunk';
import { alertFc } from '../../../../util/common';

export const LoginPage = () => {
     const dispath = useAppDispatch();
     const navigate = useNavigate();
     const [isloading, setIsloadding] = useState(false);
     const token = useAppSelector(tokenAuthSelector);
     useEffect(() => {
          if (token) {
               navigate('/product');
          }
     }, [token]);
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [erro, setErro] = useState({
          username: '',
          password: '',
     });

     const value: ILogin = {
          username,
          password,
     };
     const setValue = {
          setUsername,
          setPassword,
     };
     const checkErro = (value: ILogin) => {
          let erroUsername = value.username !== '' ? '' : 'Tài khoản không được trống';
          let erroPassword = value.password !== '' ? '' : 'Mật khẩu không được để trống';

          setErro({
               username: erroUsername,
               password: erroPassword,
          });
     };
     const handlerOnChange = (value: ILogin, setFuc: Function) => {
          checkErro(value);
          setFuc(value);
     };
     const handlerData = () => {
          checkErro(value);
          if (username !== '' && password !== '') {
               (async () => {
                    try {
                         setIsloadding(true);
                         await dispath(login(value));
                    } catch (erro: any) {
                         alertFc(erro.message || 'Lỗi không xác định', 'danger');
                    } finally {
                         setIsloadding(false);
                    }
               })();
          }
     };
     return (
          <div>
               {isloading && <Loadding />}
               <LoginForm
                    value={value}
                    setValue={setValue}
                    handleClick={handlerData}
                    erro={erro}
                    checkErro={checkErro}
               />
          </div>
     );
};
