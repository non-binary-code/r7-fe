import React, { createContext, useContext, useEffect, useState } from 'react';

// DUMMY DATA
import { usersData } from '../data/users';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({
		name: 'Dane Whitfield',
		itemsToGive: ['Sofa'],
		itemsReceived: [''],
		image:
			'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg',
	});
	const [visible, setVisible] = useState(16);
	const [users, setUsers] = useState([]);
	const [activeMenu, setActiveMenu] = useState(true);
	const [filter, setFilter] = useState();

	useEffect(() => {
		setUsers(usersData);
	}, []);

	// TODO: Example API hook for getting user information
	// useEffect(() => {
	// 	getUserInfo().then((res) => setUserInfo(res));
	// }, []);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider
			value={{
				userInfo,
				users,
				visible,
				setVisible,
				activeMenu,
				setActiveMenu,
				filter,
				setFilter,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
