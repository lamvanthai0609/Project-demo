import { createCustomAction } from 'typesafe-actions';
import { IProduct } from '../../../../models';

export const getAllProductAction = createCustomAction('product/', (data: Array<IProduct>) => ({
     data,
}));

export const setPaginAction = createCustomAction('product/pagination', (data: any) => ({
     data,
}));
