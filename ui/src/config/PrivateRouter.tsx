import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { tokenAuthSelector } from '../modules/features/login/redux/authSelector';
import { useAppSelector } from '../redux/hook';

interface Iprops {
     children: any;
     path: string;
}

export function PrivateRoute({ children, path }: Iprops) {
     const auth = useAppSelector(tokenAuthSelector);
     console.log(auth);
     console.log(path);
     console.log(children);

     return <Route>{auth ? children : <Navigate replace to="/" />}</Route>;
}
