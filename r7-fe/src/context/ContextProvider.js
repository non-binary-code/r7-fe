import React, { createContext, useContext, useEffect, useState } from 'react';
import { getBuyerData } from '../utils/api';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [buyerData, setBuyerData] = useState(undefined);

	// TODO: Example API hook for getting buyer information
	useEffect(() => {
		getBuyerData().then((res) => setBuyerData(res));
	}, []);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider value={{ buyerData, setBuyerData }}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
