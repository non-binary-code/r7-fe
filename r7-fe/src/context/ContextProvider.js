import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserInfo } from '../utils/api';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({
		name: 'Dane Whitfield',
		itemsToGive: ['Sofa'],
		itemsReceived: [''],
		image:
			'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg',
	});

	// TODO: Example API hook for getting user information
	// useEffect(() => {
	// 	getUserInfo().then((res) => setUserInfo(res));
	// }, []);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider value={{ userInfo }}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
