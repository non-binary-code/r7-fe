import React from 'react';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';
import { usersData } from '../data/dummy';

const Marketplace = () => {
	const { users } = useStateContext();

	return (
		<div className='bg-gray-100'>
			<h1 className='text-3xl font-bold'>Marketplace</h1>

			<div className='flex m-3 flex-wrap justify-center gap-10 items-center p-5'>
				{usersData.map((user) => (
					<div className='flex justify-center items-center flex-col bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl gap-5  drop-shadow-xl'>
						<p className='mt-3 font-bold'>{user.name}</p>
						<p className='text-sm text-gray-500 mt-1'>{user.items}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Marketplace;
