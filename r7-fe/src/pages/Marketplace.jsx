import React from 'react';
import LoadMoreBtn from '../components/LoadMoreBtn';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';

const Marketplace = () => {
	const { users, visible, setVisible } = useStateContext();

	return (
		<div className='bg-gray-100'>
			<div className='flex m-3 flex-wrap justify-center gap-10 items-center p-5'>
				{users.slice(0, visible).map((user) => (
					<div className='flex justify-center items-center flex-col bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl gap-5  drop-shadow-xl'>
						<p className='mt-3 font-bold'>{user.name}</p>
						<p className='text-sm text-gray-500 mt-1'>{user.items}</p>
					</div>
				))}
			</div>
			<p style={{ color: 'black', marginTop: '20px', marginBottom: '-20px' }}>
				{visible <= users.length
					? `${visible}/${users.length} items showing`
					: `${users.length}/${users.length} items showing`}
			</p>
			{visible < users.length && <LoadMoreBtn setVisible={setVisible} />}
		</div>
	);
};

export default Marketplace;
