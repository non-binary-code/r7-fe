import axios from 'axios';

const api = axios.create({
	baseURL: process.env.REACT_APP_HEROKU_URL,
});

const getUsers = async () => {
	const users = await api.get('/users');
	return users;
};
