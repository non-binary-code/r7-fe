import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

// DATA
import { groupedFilters } from '../data/filter';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';
import { postRepairItem } from '../utils/api';

const RepairForm = () => {
  const { userInfo } = useStateContext();
  const [itemName, setItemName] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [itemImg, setItemImg] = useState('');
  const [location, setLocation] = useState('');
  const [formOptions, setFormOptions] = useState([]);

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
            placeholder='Table'
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
            placeholder='Slight damage at top'
            onChange={(e) => setItemDesc(e.target.value)}
          />
          {!itemDesc && (
            <p className='text-red-500 text-xs italic mt-3'>
              Description of issue is required.
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
            placeholder='https://google.images/table.jpg'
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
            Select Options (Multi-select) *
          </label>
          <Select
            onChange={(e) => setFormOptions(e)}
            className='w-[400px] text-gray-700 py-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
            options={groupedFilters}
            isMulti
            isSearchable={false}
          />
        </div>
      </div>
      <div className='flex gap-3 justify-end mt-20'>
        <Link to='/'>
          <button
            className='bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded'
            onClick={() => (window.location.href = '/repair')}
          >
            Cancel
          </button>
        </Link>
        <button
          type='button'
          className='bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => {
            postRepairItem({
              itemName,
              itemDesc,
              itemImg,
              formOptions,
              userInfo,
              location,
            });
            window.location.href = '/repair';
            alert('Item added!');
          }}
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default RepairForm;
