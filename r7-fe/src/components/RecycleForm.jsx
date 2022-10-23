import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

// DATA
import { groupedFilters } from '../data/filter';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';
import { postItem } from '../utils/api';

const RecycleForm = () => {
  const { userInfo } = useStateContext();
  const [itemName, setItemName] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [itemImg, setItemImg] = useState('');
  const [location, setLocation] = useState('');
  const [recyclable, setRecyclable] = useState('');

  return (
    <form className='w-full max-w-lg'>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-item-name'
          >
            Item Name *
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-item-name'
            type='text'
            placeholder='Batteries'
            onChange={(e) => setItemName(e.target.value)}
          />
          {!itemName && (
            <p className='text-red-500 text-xs italic'>
              Item name is required.
            </p>
          )}
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-short-description'
          >
            Short Description *
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-short-description'
            type='text'
            placeholder='Old batteries of various types'
            onChange={(e) => setItemDesc(e.target.value)}
          />
          {!itemDesc && (
            <p className='text-red-500 text-xs italic mt-3'>
              Item description is required.
            </p>
          )}
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-short-description'
          >
            Weight in Kilograms *
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-short-description'
            type='text'
            placeholder='1.01'
            onChange={(e) => setItemDesc(e.target.value)}
          />
          {!itemDesc && (
            <p className='text-red-500 text-xs italic mt-3'>
              Weight is required (please be as accurate as possible).
            </p>
          )}
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-short-description'
          >
            Dimensions in Centimetres *
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-short-description'
            type='text'
            placeholder='H: 10, W: 10, D: 10'
            onChange={(e) => setItemDesc(e.target.value)}
          />
          {!itemDesc && (
            <p className='text-red-500 text-xs italic mt-3'>
              Dimensions are required (please be as accurate as possible).
            </p>
          )}
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block mt-5 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-item-img'
          >
            Image of Item
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-item-img'
            type='text'
            placeholder='https://google.images/batteries'
            onChange={(e) => setItemImg(e.target.value)}
          />
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block mt-5 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-item-img'
          >
            Location *
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-location'
            type='text'
            placeholder='Leeds, UK, LS21 4ED'
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide w-full text-gray-700 text-xs font-bold mb-2'
            for='grid-select-options'
          >
            Recyclable/Compostable *
          </label>
          <div onChange={(e) => setRecyclable(e.target.value)}>
            <div class='flex items-center mb-1'>
              <input
                id='rec'
                type='radio'
                value='Recyclable'
                name='rec/com'
                class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label className='ml-3'>Recyclable</label>
            </div>
            <div class='flex items-center mb-4'>
              <input
                id='com'
                type='radio'
                value='Compostable'
                name='rec/com'
                class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label className='ml-3'>Compostable</label>
            </div>
            {recyclable === 'Recyclable' && (
              <>
                <div className='w-full md:w-1/2 px-3'>
                  <label
                    className='block mt-5 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    for='grid-item-img'
                  >
                    Nearest Recycling Centre *
                  </label>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-location'
                    type='text'
                    placeholder='Hunslet Library, Leeds, LS10 2NS'
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className='w-full md:w-1/2 px-3'>
                  <label
                    className='block mt-5 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    for='grid-item-img'
                  >
                    Distance *
                  </label>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-location'
                    type='text'
                    placeholder='13.5'
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='flex gap-3 justify-end mt-20'>
        <Link to='/'>
          <button
            className='bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded'
            onClick={() => (window.location.href = '/re-use')}
          >
            Cancel
          </button>
        </Link>
        <button
          type='button'
          className='bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          onClick={() =>
            postItem({
              itemName,
              itemDesc,
              itemImg,
              userInfo,
              location,
            })
          }
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default RecycleForm;
