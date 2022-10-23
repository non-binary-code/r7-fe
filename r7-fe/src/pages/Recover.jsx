import React from 'react';
import { useStateContext } from '../context/ContextProvider';

const Recover = () => {
  const { users } = useStateContext();

  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <div className='relative top-0 left-0 mb-5'>
        <button
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800'
          type='button'
        >
          Post an Item
        </button>
      </div>
      <div className='p-5 border-2 border-blue-200 rounded-lg flex justify-center items-center gap-3 hover:bg-blue-200 mb-10'>
        <div class='flex -space-x-4'>
          {users?.map((user) => (
            <img
              class='w-10 h-10 rounded-full border-2 border-white dark:border-gray-800'
              src={user.pictureUrl}
              alt=''
            />
          ))}
          <a class='flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800 cursor-pointer'>
            +99
          </a>
        </div>
        <p className='font-bold text-lg'>{`${users[0]?.username}+ More!`}</p>
      </div>

      {/* USER CARD */}
      <div className='flex flex-wrap gap-4'>
        {users?.map((user) => (
          <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-8'>
            <div class='flex justify-end px-4 pt-4'>
              <button
                id='dropdownButton'
                data-dropdown-toggle='dropdown'
                class='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'
                type='button'
              >
                <svg
                  class='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
                </svg>
              </button>
            </div>
            <div class='flex flex-col items-center pb-10'>
              <img
                class='mb-3 w-24 h-24 rounded-full shadow-lg'
                src={user?.pictureUrl}
                alt='Bonnie image'
              />
              <h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                {user?.username}
              </h5>
              <span class='text-sm text-gray-500 dark:text-gray-400'>
                {user?.bio}
              </span>
              <div class='flex mt-4 space-x-3 md:mt-6'>
                <a class='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer'>
                  View User
                </a>
                <a class='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 cursor-pointer'>
                  Message
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recover;
