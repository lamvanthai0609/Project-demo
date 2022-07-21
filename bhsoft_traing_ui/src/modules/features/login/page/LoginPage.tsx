import React, { useEffect, useState } from 'react';
import { ArrowFunction } from 'typescript';
import { ILogin } from '../../../../models';
import { useAppDispatch } from '../../../../redux/hook';
import LoginForm from '../components/LoginForm';
import { login } from '../redux/authReducer';

const LoginPage = () => {
     const dispath = useAppDispatch();

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
     const handlerData = async () => {
          checkErro(value);
          if (username !== '' && password !== '') {
               try {
                    await dispath(login(value, dispath));
               } catch (erro) {
                    console.log('erro');
               }
          }
     };
     return <LoginForm value={value} setValue={setValue} handleClick={handlerData} erro={erro} checkErro={checkErro} />;
};

export default LoginPage;
