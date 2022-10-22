import React, { useEffect } from 'react';

// ICONS
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';

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
	const { giverInfo } = useStateContext();

	return (
		<div className='flex justify-between p-2 md:mx-6 relative'>
			<NavButton title='Menu' handler={() => {}} icon={<AiOutlineMenu />} />

			<div className='flex gap-6'>
				<div className='flex justify-center items-center gap-2'>
					<img src={''} alt='User avatar' className='rounded-full w-10 h-10' />
					<div
						className='flex justify-center items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
						onClick={() => {}}
					>
						<p>
							<span className='text-gray-400 text-14'>{giverInfo?.name}</span>
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-14' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
