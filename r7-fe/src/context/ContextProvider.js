import React, { createContext, useContext, useEffect, useState } from 'react';

// DUMMY DATA
import { usersData } from '../data/users';

import { getItems } from '../utils/api';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    userId: 1,
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
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  useEffect(() => {
    const itemsData = getItems();
    setItems((prev) => [...prev, itemsData]);
  }, []);

  useEffect(() => {
    getItems().then((res) => setItems(res));
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        userInfo,
        users,
        items,
        visible,
        setVisible,
        activeMenu,
        setActiveMenu,
        filter,
        setFilter,
        setBasketItems,
        basketItems,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
