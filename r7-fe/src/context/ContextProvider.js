import React, { createContext, useContext, useEffect, useState } from 'react';
import { getGiverInfo } from '../utils/api';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [giverInfo, setGiverInfo] = useState({
		name: 'Dane Whitfield',
		itemsToGive: ['Sofa'],
		itemsReceived: [''],
		image: '',
	});
	const [receiverInfo, setReceiverInfo] = useState({
		name: 'Zan Clifton',
		itemsToGive: ['Toaster'],
		itemsReceived: ['Sofa'],
		image: '',
	});

	// TODO: Example API hook for getting buyer information
	// useEffect(() => {
	// 	getGiverInfo().then((res) => setGiverInfo(res));
	// }, []);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider value={{ giverInfo, receiverInfo }}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
