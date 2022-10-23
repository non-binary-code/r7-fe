import React from 'react';

const Refuse = () => {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center bg-gray-100'>
      <div className='flex flex-col mt-10 bg-white w-[500px]'>
        <a class='block p-6 w-[500px] bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <div className='mb-20'>
            <h1 className='text-3xl font-bold mb-10'>
              5 benefits of refusing to buy brand new goods
            </h1>
            <ul>
              <li className='font-bold text-gray-500 m-2'>
                Battling the cost of living crisis
              </li>
              <li className='font-bold text-gray-500 m-2'>
                Reduce carbon emissions and water waste
              </li>
              <li className='font-bold text-gray-500 m-2'>
                Help other people with decluttering
              </li>
              <li className='font-bold text-gray-500 m-2'>
                Saving limited resources
              </li>
              <li className='font-bold text-gray-500 m-2'>
                Refuse to follow sociatal pressure to consume
              </li>
            </ul>
          </div>

          <div className='flex flex-col'>
            <label className='text-3xl font-bold mb-10' for='reason'>
              What is your reason?
            </label>
            <select id='reason' className='w-[100%] font-bold mb-5'>
              <option value='money'>Money</option>
              <option value='future'>Future of the planet</option>
              <option value='carbon'>Self discipline</option>
            </select>
          </div>

          <button
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800'
            type='button'
          >
            Submit
          </button>
        </a>
      </div>

      <div className='flex gap-5 mt-10 justify-center items-center'>
        <div className='w-[500px] mt-5 mb-5'>
          <div className='mb-1 text-base font-medium text-green-700 dark:text-green-500'>
            Money
          </div>
          <div className='w-[100%] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
            <div
              className='bg-green-600 h-2.5 rounded-full dark:bg-green-500'
              style={{ width: '55%' }}
            ></div>
          </div>
          <div className='mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500'>
            Future of the Planet
          </div>
          <div className='w-[40%] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
            <div
              className='bg-yellow-400 h-2.5 rounded-full'
              style={{ width: '25%' }}
            ></div>
          </div>
          <div className='mb-1 text-base font-medium text-blue-700 dark:text-yellow-500'>
            Self discipline
          </div>
          <div className='w-[40%] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
            <div
              className='bg-blue-400 h-2.5 rounded-full'
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>
        <img src='/images/care.jpg' className='w-[25%] h-[25%]' />
      </div>
    </div>
  );
};

export default Refuse;
