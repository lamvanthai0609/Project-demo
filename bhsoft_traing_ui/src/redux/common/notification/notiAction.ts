import { createCustomAction } from 'typesafe-actions';
import { INotification } from '../../../models';

export const setNotifiAction = createCustomAction('notification/setNotification', (data: INotification) => ({ data }));


