import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../redux/hook';
import useDebounce from '../../../../util/customHook/useDebounc';
import { tokenAuthSelector } from '../../login/redux/authSelector';
import FilterProduct from '../components/filterProduct';
import GroupCard from '../components/groupCard';
import Pagination from '../components/pagination';

const ProductPage = () => {
     const [valueSearch, setValueSearch] = useState('');
     const [type, setType] = useState('');
     const [pagination, setPagination] = useState();
     const debounce = useDebounce(valueSearch, 500);
     useEffect(() => {
          if (debounce.trim() === '') {
               return;
          }
     }, [debounce]);

     return (
          <>
               <div>
                    <h1 className="my-5 text-3xl font-bold px-10">Sản Phẩm</h1>
               </div>
               <div className="w-[90%] m-auto">
                    <FilterProduct valueSearch={valueSearch} setValueSearch={setValueSearch} setType={setType} />
                    <div className="my-4">
                         <GroupCard />
                    </div>
                    <Pagination />
               </div>
          </>
     );
};

export default ProductPage;
