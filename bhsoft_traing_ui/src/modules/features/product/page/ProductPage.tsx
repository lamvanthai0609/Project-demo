import { useEffect, useState } from 'react';
import { Store } from 'react-notifications-component';
import { useAppDispatch, useAppSelector } from '../../../../redux/hook';
import { useDebounce } from '../../../../util/customHook/useDebounc';
import { Loadding } from '../../../components/loadding';
import { FilterProduct } from '../components/filterProduct';
import { GroupCard } from '../components/groupCard';
import { Pagination } from '../components/pagination';
import { getAllProductThunk } from '../redux/producThunk';
import { getProductSelector } from '../redux/productSelector';

export const ProductPage = () => {
     const dispath = useAppDispatch();
     const data = useAppSelector(getProductSelector);
     const [valueSearch, setValueSearch] = useState('');
     const [isloadding, setIsLoadding] = useState(false);
     const [isError, setIsError] = useState(true);
     const [type, setType] = useState('');
     const debounce = useDebounce(valueSearch, 500);
     useEffect(() => {
          if (debounce.trim() === '') {
               return;
          }
     }, [debounce]);

     useEffect(() => {
          if (data.length <= 0) {
               try {
                    setIsLoadding(true);
                    (async () => {
                         await dispath(getAllProductThunk());
                    })();
               } catch (erro: any) {
                    Store.addNotification({
                         title: 'Lỗi!',
                         message: erro.message || ' Lỗi không xác định ',
                         type: 'danger',
                         insert: 'top',
                         container: 'top-right',
                         animationIn: ['animate__animated', 'animate__fadeIn'],
                         animationOut: ['animate__animated', 'animate__fadeOut'],
                         dismiss: {
                              duration: 2000,
                              onScreen: true,
                         },
                    });
               } finally {
                    setIsLoadding(false);
               }
          }
     }, [data]);
     return (
          <>
               {isloadding && <Loadding />}
               <>
                    <div>
                         <h1 className="my-5 text-3xl font-bold px-10">Sản Phẩm</h1>
                    </div>
                    <div className="w-[90%] m-auto">
                         <FilterProduct valueSearch={valueSearch} setValueSearch={setValueSearch} setType={setType} />
                         <div className="my-4">
                              <GroupCard data={data} />
                         </div>
                         <Pagination />
                    </div>
               </>
          </>
     );
};
