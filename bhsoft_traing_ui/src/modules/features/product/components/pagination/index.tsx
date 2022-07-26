import React, { memo, useEffect, useState } from 'react';

import { useAppSelector } from '../../../../../redux/hook';
import { getPaginator } from '../../redux/productSelector';

const classStyle =
     'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-200 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white ';
export const Pagination = () => {
     const paginSelector = useAppSelector(getPaginator);
     //console.log(paginSelector);
     const [pageIndex, setPageIndex] = useState(1);
     const [totalPage, setTotalPage] = useState(1);
     useEffect(() => {
          if (paginSelector) {
               const numberPage = Math.ceil(paginSelector._total / paginSelector._limit);
               setTotalPage(numberPage);
          }
     }, [paginSelector]);

     useEffect(() => {
          console.log(pageIndex);
     }, [pageIndex, hanlderClick]);

     function hanlderClick(value: number) {
          setPageIndex(value);
     }
     return (
          <div className="flex justify-center">
               <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                         {pageIndex > 1 && (
                              <li>
                                   <button
                                        className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-200 dark:hover:text-black"
                                        onClick={() => hanlderClick(pageIndex - 1)}
                                   >
                                        <span className="sr-only">Previous</span>
                                        <svg
                                             aria-hidden="true"
                                             className="w-5 h-5"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <path
                                                  fillRule="evenodd"
                                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                  clipRule="evenodd"
                                             ></path>
                                        </svg>
                                   </button>
                              </li>
                         )}
                         {pageIndex - 1 >= 1 && (
                              <li>
                                   <button
                                        className={classStyle}
                                        onClick={() => {
                                             hanlderClick(pageIndex - 1);
                                        }}
                                   >
                                        {pageIndex - 1}
                                   </button>
                              </li>
                         )}

                         <li>
                              <button className={classStyle}>{pageIndex} </button>
                         </li>

                         {pageIndex + 1 <= totalPage && (
                              <li>
                                   <button
                                        className={classStyle}
                                        onClick={() => {
                                             hanlderClick(pageIndex + 1);
                                        }}
                                   >
                                        {pageIndex + 1}
                                   </button>
                              </li>
                         )}
                         {pageIndex < totalPage && (
                              <li>
                                   <button
                                        className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-200 dark:hover:text-black"
                                        onClick={() => hanlderClick(pageIndex + 1)}
                                   >
                                        <span className="sr-only">Next</span>
                                        <svg
                                             aria-hidden="true"
                                             className="w-5 h-5"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <path
                                                  fillRule="evenodd"
                                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                  clipRule="evenodd"
                                             ></path>
                                        </svg>
                                   </button>
                              </li>
                         )}
                    </ul>
               </nav>
               ;
          </div>
     );
};
