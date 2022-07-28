import { ICart, IcartRequest } from '../models/cart';

export function formatPrice(price: number): string {
     return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
