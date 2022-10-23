import React from 'react';

const Refuse = () => {
  return (
    <div className='flex flex-col flex-wrap justify-center'>
      <h1 className='text-3xl font-bold mb-10'>5 benefits of refusing to buy the brand new goods</h1>
      <ul className='list-style-type: disc'>
        <li className='grid grid-cols-3 bg-white p-3 rounded-lg '>Battling the cost of living crisis</li>
        <li className='grid grid-cols-3 bg-white p-3 rounded-lg '>Reduce carbon emissions and water waste</li>
        <li className='grid grid-cols-3 bg-white p-3 rounded-lg '>Help other people with decluttering</li>
        <li className='grid grid-cols-3 bg-white p-3 rounded-lg '>Saving the limited resources</li>
  
        <li className='grid grid-cols-3 bg-white p-3 rounded-lg  mb-10'>Refuse to follow the social addiction</li>
      </ul>
      <div className='flex flex-col'>
        <label className='text-3xl font-bold mb-10' for='reason'>What is your reason?</label>
        <select id='reason' className='w-[40%] font-bold mb-5'>
          <option value='money'>Money</option>
          <option value='future'>Future of the planet</option>
          <option value='carbon'>Self discipline</option>
        </select>
      </div>
      <div>
        <div className='mb-1 text-base font-medium text-green-700 dark:text-green-500'>
          Money
        </div>
        <div className='w-[40%] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
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
      <img src='/images/care.jpg' className='w-[50%] h-[50%]' />
    </div>
  );
};

export default Refuse;
