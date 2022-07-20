import React, { useEffect, useState } from 'react';
import { ArrowFunction } from 'typescript';
import { ILogin } from '../../../../models';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
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
     const checkErro = (value: string, key: string) => {
          value ? setErro({ ...erro, [key]: '' }) : setErro({ ...erro, [key]: 'Không được để rỗng' });
     };
     const handlerOnChange = (value: string, setFuc: Function, key: string) => {
          checkErro(value, key);
          setFuc(value);
     };
     const handlerData = () => {
          checkErro(username, 'username');
          checkErro(password, 'password');

          ///if (erro.username !== '' || erro.password !== '') return;
          console.log(value);
     };
     return (
          <LoginForm
               value={value}
               setValue={setValue}
               handleClick={handlerData}
               erro={erro}
               setErro={setErro}
               handlerOnChange={handlerOnChange}
          />
     );
};

export default LoginPage;
