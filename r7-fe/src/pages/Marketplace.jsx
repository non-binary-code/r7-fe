import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadMoreBtn from '../components/LoadMoreBtn';

import Select from 'react-select';

import { GoLocation } from 'react-icons/go';

// DATA
import { groupedFilters } from '../data/filter';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';
import { conditionIds } from '../utils/condition-config';
import { categoryIds } from '../utils/category-config';
import { filterItems } from '../utils/api';

const Marketplace = () => {
  const { items, visible, setVisible, filter, setFilter } = useStateContext();
  const [filtered, setFiltered] = useState([]);

  console.log(items);

  return (
    <div className='bg-gray-100'>
      <div className='flex justify-center mt-4'>
        <Select
          onChange={(e) => filterItems(e).then((res) => setFiltered(res))}
          className='w-[300px] mb-10'
          options={groupedFilters}
          isMulti
          isSearchable={false}
        />
      </div>

      <div className='flex flex-wrap justify-center gap-10 items-center p-5'>
        {!filtered.length &&
          items?.slice(0, visible)?.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}/${item.name}`}
              state={{ item }}
            >
              <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[500px] hover:scale-[1.03] ease-in-out duration-300 transition-all'>
                <img
                  className='rounded-t-lg w-[300px] h-[300px]'
                  src={
                    item.pictureUrl
                      ? item.pictureUrl
                      : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                  }
                />
                <div className='p-5'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {item.name}
                  </h5>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {item.description}
                  </p>
                  <p className='text-sm text-gray-500 capitalize mb-1'>
                    {conditionIds[item?.conditionTypeId - 1]}
                  </p>
                  <div className='flex justify-between mb-3'>
                    <p className='text-sm text-gray-500 underline hover:text-green-400 capitalize'>
                      {categoryIds[item?.categoryTypeId - 1]}
                    </p>
                    <p className='text-sm text-gray-500 flex justify-center items-center gap-1 capitalize'>
                      <GoLocation className='text-red-400 text-lg' />
                      {item.location}
                    </p>
                  </div>
                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800'
                    >
                      See Item
                      <svg
                        aria-hidden='true'
                        className='ml-2 -mr-1 w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}

        {filtered.length &&
          filtered?.slice(0, visible)?.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}/${item.name}`}
              state={{ item }}
            >
              <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[500px] hover:scale-[1.03] ease-in-out duration-300 transition-all'>
                <img
                  className='rounded-t-lg w-[300px] h-[300px]'
                  src={
                    item.pictureUrl
                      ? item.pictureUrl
                      : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                  }
                />
                <div className='p-5'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {item.name}
                  </h5>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {item.description}
                  </p>
                  <p className='text-sm text-gray-500 capitalize mb-1'>
                    {conditionIds[item?.conditionTypeId - 1]}
                  </p>
                  <div className='flex justify-between mb-3'>
                    <p className='text-sm text-gray-500 underline hover:text-green-400 capitalize'>
                      {categoryIds[item?.categoryTypeId - 1]}
                    </p>
                    <p className='text-sm text-gray-500 flex justify-center items-center gap-1 capitalize'>
                      <GoLocation className='text-red-400 text-lg' />
                      {item.location}
                    </p>
                  </div>
                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800'
                    >
                      See Item
                      <svg
                        aria-hidden='true'
                        className='ml-2 -mr-1 w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className='flex justify-center items-center'>
        <p style={{ color: 'black', marginTop: '20px', marginBottom: '-20px' }}>
          {visible <= filtered.length
            ? `${visible}/${filtered.length} items showing`
            : `${filtered.length}/${filtered.length} items showing`}
        </p>
        {visible < filtered.length && <LoadMoreBtn setVisible={setVisible} />}
      </div>
    </div>
  );
};

export default Marketplace;
