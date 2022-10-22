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
	const { userInfo, setActiveMenu, activeLink, inactiveLink } =
		useStateContext();

	return (
		<div className='flex justify-between p-2 md:mx-6 relative gap-6'>
			<div className='flex w-[100%] justify-between items-center'>
				<NavButton
					handler={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
					icon={<AiOutlineMenu />}
				/>
				<div className='flex gap-5'>
					{links?.map((link) => (
						<NavLink
							to={`/${link.name}`}
							key={link.name}
							className={({ isActive }) =>
								isActive ? activeLink : inactiveLink
							}
							style={({ isActive }) => ({
								backgroundColor: isActive ? 'red' : '',
							})}
						>
							{link.icon}
							<span className='capitalize'>{link.name}</span>
						</NavLink>
					))}
				</div>
				<Link to="/basket">
				<FiShoppingCart/>
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
	);
};

export default Nav;
