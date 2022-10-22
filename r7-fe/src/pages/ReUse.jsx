import React from 'react';
import { useState } from 'react';
import Select from 'react-select';

// DATA
import { groupedFilters } from '../data/filter';

// CONTEXT
import { useStateContext } from '../context/ContextProvider';

import Marketplace from '../pages/Marketplace';

const ReUse = () => {
	const { filter, setFilter } = useStateContext();

	return (
		<div className='flex flex-col justify-center items-center mt-10'>
			<h1 className='text-3xl font-bold mb-10'>Re-Use</h1>
			<Select
				onChange={(e) => setFilter(e)}
				className='w-[300px] mb-10'
				options={groupedFilters}
				isMulti
				isSearchable={false}
			/>

			<Marketplace />
		</div>
	);
};

export default ReUse;
