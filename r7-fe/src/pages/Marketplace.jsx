import React from 'react';
import { Link } from 'react-router-dom';
import LoadMoreBtn from '../components/LoadMoreBtn';

import { GoLocation } from 'react-icons/go';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';
import { conditionIds } from '../utils/condition-config';
import { categoryIds } from '../utils/category-config';

const Marketplace = () => {
  const { items, visible, setVisible } = useStateContext();

  return (
    <div className='bg-gray-100'>
      <div className='flex m-3 flex-wrap justify-center gap-10 items-center p-5'>
        {items?.slice(0, visible)?.map((item) => (
          <Link key={item.id} to={`/${item.id}/${item.name}`} state={{ item }}>
            <div className='flex justify-center items-center flex-col bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 lg:w-[300px] w-[300px] p-4 pt-9 rounded-2xl gap-2 drop-shadow-xl'>
              <img
                src={
                  item.pictureUrl
                    ? item.pictureUrl
                    : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                }
                alt=''
                style={{ width: '200px', height: '200px' }}
              />
              <p className='mt-3 font-bold'>{item.name}</p>
              <p className='text-sm text-gray-500'>
                {conditionIds[item?.conditionTypeId - 1]}
              </p>
              <p className='text-sm text-gray-500'>
                {categoryIds[item?.categoryTypeId - 1]}
              </p>
              <p className='text-sm text-gray-500 flex justify-center items-center gap-1'>
                <GoLocation className='text-red-400 text-lg' />
                {item.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <p style={{ color: 'black', marginTop: '20px', marginBottom: '-20px' }}>
          {visible <= items.length
            ? `${visible}/${items.length} items showing`
            : `${items.length}/${items.length} items showing`}
        </p>
        {visible < items.length && <LoadMoreBtn setVisible={setVisible} />}
      </div>
    </div>
  );
};

export default Marketplace;
