import React from 'react';
import { Input } from '../../../../components/input';

interface IProps {
     valueSearch: string;
     setValueSearch: (e: string) => void;
     setType: (e: string) => void;
}

export const FilterProduct = ({ valueSearch, setValueSearch, setType }: IProps) => {
     return (
          <div className="w-[90%] m-auto flex justify-between flex-wrap">
               <div className="flex my-2">
                    <Input
                         styles={'w-[300px]'}
                         type={'text'}
                         placeholder={'Nhập tên sản phẩm cần tìm'}
                         value={valueSearch}
                         change={(e: any) => setValueSearch(e.target.value)}
                    />
                    <button
                         type="button"
                         className="p-3 ml-2 text-sm font-medium text-white bg-black border-solid  border-2 border-black"
                    >
                         <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              ></path>
                         </svg>
                         <span className="sr-only">Search</span>
                    </button>
               </div>
               <div className="flex my-2">
                    <select
                         id=""
                         className=" focus-visible:outline-none border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5"
                         onChange={(e: any) => setType(e.target.value)}
                    >
                         <option value="">Choose a type</option>
                         <option value="ao-phong">Áo phông</option>
                         <option value="ao-so-mi">Áo sơ mi</option>
                         <option value="ao-polo">Áo PoLo</option>
                    </select>
               </div>
          </div>
     );
};
