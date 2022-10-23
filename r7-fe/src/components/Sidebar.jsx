import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// DATA
import { links } from '../data/links';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, users, userInfo } = useStateContext();

  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const inactiveLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSidebar = () => {
    if (activeMenu) {
      setActiveMenu(false);
    }
  };

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              onClick={handleCloseSidebar}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold trackin-tight dark:text-white text-slate-900'
            >
              <span style={{ color: '#022912' }}>R7</span>
            </Link>
          </div>

          <div className='mt-10'>
            <div>
              <p className='text-gray-400 m-3 mt-4 uppercase'>Pages</p>

              {links?.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? activeLink : inactiveLink
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#022912' : '',
                  })}
                >
                  {link.icon}
                  <span className='capitalize'>{link.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
