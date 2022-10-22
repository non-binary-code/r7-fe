import axios from 'axios';

const api = axios.create({
	baseURL: process.env.REACT_APP_HEROKU_URL,
});

const getUsers = async () => {
	const users = await api.get('/users');
	return users;
};

const getUserById = async ({id}) => {
	const user = await api.get(`/users/${id}`);
	return user;
};

const getItems = async () => {
	const items = await api.get('/items');
	return items;
};

