import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadMoreBtn from '../components/LoadMoreBtn';

import Select from 'react-select';

import { GoLocation } from 'react-icons/go';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';
import { conditionIds } from '../utils/condition-config';
import { categoryIds } from '../utils/category-config';
import { filterItems, getRepairItems } from '../utils/api';
import RepairForm from '../components/RepairForm';

const Repair = () => {
  const { visible, setVisible } = useStateContext();
  const [repairItems, setRepairItems] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getRepairItems().then((res) => setRepairItems(res));
  }, []);

  return (
    <div className='bg-gray-100 h-[100vh]'>
      <div>
        <div className='relative top-[20px] left-10'>
          <button
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800'
            type='button'
            onClick={() => setShowModal(true)}
          >
            Post an Item
          </button>
        </div>
        {showModal ? (
          <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                {/*content*/}
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                    <h3 className='text-3xl font-semibold'>Post Repair Item</h3>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setShowModal(false)}
                    >
                      <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className='relative p-6 flex-auto'>
                    <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                      <RepairForm />
                    </p>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        ) : null}
      </div>

      <div className='flex flex-wrap justify-center gap-10 items-center p-5'>
        {repairItems?.slice(0, visible)?.map((item) => (
          <Link key={item.id} to={`/${item.id}/${item.name}`} state={{ item }}>
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
          {visible <= repairItems.length
            ? `${visible}/${repairItems.length} items showing`
            : `${repairItems.length}/${repairItems.length} items showing`}
        </p>
        {visible < repairItems.length && (
          <LoadMoreBtn setVisible={setVisible} />
        )}
      </div>
    </div>
  );
};

export default Repair;
