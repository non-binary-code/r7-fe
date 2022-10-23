import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import { conditionIds } from '../utils/condition-config';
import { categoryIds } from '../utils/category-config';

const Item = () => {
  const location = useLocation();
  const { item } = location.state;

  const pStyle = 'font-semibold text-[#022912]';

  const { setBasketItems } = useStateContext();

  const alertText = `Do you really need this item? \n\nRemember you will need to store it until you are finished with it and then manage its disposal or re-gifting!`;

  return (
    <div className='bg-gray-100 w-[100vw] h-[100vh] flex justify-center items-start'>
      <div className='bg-white flex flex-col items-center w-[500px] p-10 mt-20 shadow-lg rounded'>
        <div className='flex flex-col flex-wrap items-start'>
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-3xl font-bold'>{item?.name}</h1>
            <p className='font-semibold text-[#022912] uppercase'>
              {categoryIds[item?.categoryTypeId - 1]}
            </p>
          </div>

          <div className='grid grid-cols-5 items-start justify-center w-[365px] mb-4'>
            <img
              src={
                item.pictureUrl
                  ? item.pictureUrl
                  : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
              }
              alt={item.name}
              className='col-span-3'
              style={{ width: '200px', height: '200px' }}
            />
            <p className='font-semibold text-sm col-span-2'>
              {item?.description}
            </p>
          </div>
        </div>

        <div className='flex items-start'>
          <div className='flex flex-col gap-1 w-[365px]'>
            <p className=' font-semibold capitalize'>
              {conditionIds[item?.conditionTypeId - 1]}
            </p>
            <p className={pStyle}>{item.delivery && `Delivery: Available`}</p>
            <p className={pStyle}>
              {item.collection && `Collection: Available`}
            </p>
            <p className={pStyle}>{item.postage && `Postage: Available`}</p>
            <p className={pStyle}>
              {item.recover && `Recover: Arranged by current owner`}
            </p>
          </div>
        </div>
        <button
          className='mt-5 bg-green-400 hover:bg-green-700 text-white font-bold py-3 px-6 rounded'
          onClick={() => {
            window.confirm(alertText)
              ? setBasketItems((prev) => [...prev, item])
              : setBasketItems((prev) => [...prev]);
          }}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default Item;
