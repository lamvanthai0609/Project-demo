import { createCustomAction } from 'typesafe-actions';

export const setDataCartAction = createCustomAction('cart/setCart', (data: any) => ({
     data,
}));
