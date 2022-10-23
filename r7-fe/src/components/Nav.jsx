import React, { useEffect } from 'react';

// ICONS
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';

import { Link, NavLink } from 'react-router-dom';

// DATA
import { links } from '../data/links';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';
import Basket from '../pages/Basket';

const NavButton = ({ handler, icon, color }) => (
  <button
    type='button'
    onClick={handler}
    style={{ color }}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'
  >
    <span
      style={{ background: color }}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
    />
    {icon}
  </button>
);

const Nav = () => {
  const { userInfo, setActiveMenu } = useStateContext();

  return (
    <div className='flex justify-between p-2 md:mx-6 relative gap-6'>
      <div className='flex w-[100%] justify-between items-center'>
        <div className='flex gap-3'>
          <NavButton
            handler={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            icon={<AiOutlineMenu />}
          />
          <img src='/images/r7favicon.jpg' className='h-[40px] w-[40px]' />
        </div>
        <div className='flex gap-5'>
          {links?.map((link) => (
            <NavLink
              to={`/${link.name}`}
              key={link.name}
              className='hover:scale-[1.04] ease-in duration-100 transition-all rounded'
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#022912' : '',
                padding: '4px 10px',
                borderRadius: isActive ? '4px' : '',
                color: isActive ? 'white' : 'black',
              })}
            >
              {link.icon}
              <span className='capitalize'>{link.name}</span>
            </NavLink>
          ))}
        </div>
        <div className='flex gap-5 items-center justify-center'>
          <Link
            to='/basket'
            className='hover:bg-[#022912] hover:text-white rounded-full text-[#022912] p-3 ease-in-out duration-100 transition-all'
          >
            <FiShoppingCart className='w-[15px] h-[15px]' />
          </Link>
          <div className='flex justify-center items-center gap-2'>
            <img
              src={userInfo?.image}
              alt={userInfo?.name}
              className='rounded-full w-10 h-10'
            />
            <div
              className='flex justify-center items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
              onClick={() => {}}
            >
              <p>
                <span className='text-gray-400 text-14'>{userInfo?.name}</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
