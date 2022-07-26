import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/hook';
import { useDebounce } from '../../../../util/customHook/useDebounc';
import { Loadding } from '../../../components/loadding';
import { tokenAuthSelector } from '../../login/redux/authSelector';
import { FilterProduct } from '../components/filterProduct';
import { GroupCard } from '../components/groupCard';
import { Pagination } from '../components/pagination';
import { getAllProductThunk } from '../redux/producThunk';
import { getProductSelector } from '../redux/productSelector';

export const ProductPage = () => {
     //const naviga = useNavigate();
     const dispath = useAppDispatch();
     const data = useAppSelector(getProductSelector);
     //const token = useAppSelector(tokenAuthSelector);
     const [valueSearch, setValueSearch] = useState('');
     const [isloadding, setIsLoadding] = useState(false);
     const [type, setType] = useState('');
     const [pagination, setPagination] = useState();
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
                    const run = async () => {
                         await dispath(getAllProductThunk());
                    };
                    run();
               } catch (erro) {
                    console.log(erro);
               } finally {
                    setIsLoadding(false);
               }
          }
     }, [data]);
     // useEffect(() => {
     //      if (!token) {
     //           naviga('/');
     //      }
     // }, [token]);
     return (
          <>
               {isloadding ? (
                    <Loadding />
               ) : (
                    <>
                         <div>
                              <h1 className="my-5 text-3xl font-bold px-10">Sản Phẩm</h1>
                         </div>
                         <div className="w-[90%] m-auto">
                              <FilterProduct
                                   valueSearch={valueSearch}
                                   setValueSearch={setValueSearch}
                                   setType={setType}
                              />
                              <div className="my-4">
                                   <GroupCard data={data} />
                              </div>
                              <Pagination />
                         </div>
                    </>
               )}
          </>
     );
};
