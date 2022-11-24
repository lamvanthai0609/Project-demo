import React from 'react';
import { IProduct } from '../../../../../models';
import { Card } from '../../../../components/card';

interface IProps {
     data: Array<IProduct>;
}

export const GroupCard = ({ data }: IProps) => {
     return (
          <div className="flex flex-wrap justify-around">
               {data && data.map((item: any, index: number) => <Card key={index} data={item} />)}
          </div>
     );
};
