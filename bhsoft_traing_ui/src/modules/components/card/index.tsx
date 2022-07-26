import { IProduct } from '../../../models';
import { formatPrice } from '../../../util/common';
import { Button } from '../button';

const btn = [
     {
          styles: 'bg-black text-white px-4 py-2 text-sm w-[120px] border-2 border-solid border-transparent hover:text-black hover:bg-zinc-200 hover:border-black',
          text: 'Thêm giỏ',
     },
     {
          styles: 'bg-black text-white px-4 py-2 text-sm w-[120px] border-2 border-solid border-transparent hover:text-black hover:bg-zinc-200 hover:border-black',
          text: 'Mua ngay',
     },
];

interface IProps {
     data: IProduct;
}

export const Card = ({ data }: IProps) => {
     return (
          <div className="w-[90%] sm:w-[40%] md:w-[20%]  border-solid  border-2 border-transparent m-2 rounded flex flex-col justify-between cursor-pointer hover:border-zinc-200 ">
               <div className="w-[90%] mx-auto my-[4px]">
                    <img
                         alt=""
                         className="w-full h-full"
                         src={
                              data.thumbnails
                                   ? data.thumbnails
                                   : 'https://traffic-edge03.cdn.vncdn.io/nvn/ncdn/store/662/ps/20220627/AP0136__0_.jpg'
                         }
                    />
               </div>
               <div className="text-center">
                    <p>{data.name}</p>
                    <p className="font-bold text-sm">{formatPrice(data.price)}</p>
               </div>
               <div className="flex flex-row justify-around my-3">
                    {btn.map((item, index) => (
                         <Button key={index} styles={item.styles} text={item.text} />
                    ))}
               </div>
          </div>
     );
};
