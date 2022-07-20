import React from 'react';
import CartPage from '../modules/features/cart/page/CartPage';
import LoginPage from '../modules/features/login/page/LoginPage';
import ProductPage from '../modules/features/product/page/ProductPage';
import DefaultLayout from '../modules/layout/DefaultLayout';

interface IRouter {
     path: string;
     component: React.FC;
     Layout?: any;
}

export const publicRouter: Array<IRouter> = [
     { path: '/', component: LoginPage },
     { path: '/product', component: ProductPage, Layout: DefaultLayout },
     { path: '/cart', component: CartPage, Layout: DefaultLayout },
];
