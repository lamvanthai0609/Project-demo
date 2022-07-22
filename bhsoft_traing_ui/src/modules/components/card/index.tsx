import Button from '../button';

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

const Card = () => {
     return (
          <div className="h-[530px] w-[300px] border-solid  border-2 border-transparent m-2 rounded flex flex-col justify-between cursor-pointer hover:border-zinc-200">
               <div className="w-[90%] mx-auto my-[4px]">
                    <img
                         alt=""
                         src="https://traffic-edge03.cdn.vncdn.io/nvn/ncdn/store/662/ps/20220627/AP0136__0_.jpg"
                    />
               </div>
               <div className="text-center">
                    <p>Áo Phông Regular Cotton 0136</p>
                    <p className="font-bold text-sm">269,000₫</p>
               </div>
               <div className="flex flex-row justify-around my-3">
                    {btn.map((item, index) => (
                         <Button key={index} styles={item.styles} text={item.text} />
                    ))}
               </div>
          </div>
     );
};

export default Card;
