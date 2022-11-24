import { NOTIFICATION_TYPE, Store } from 'react-notifications-component';

export function formatPrice(price: number): string {
     return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

export const alertFc = (text: string, status: NOTIFICATION_TYPE) => {
     Store.addNotification({
          title: 'OK!',
          message: text,
          type: status,
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
               duration: 2000,
               onScreen: true,
               showIcon: true,
          },
     });
};
