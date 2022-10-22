import axios from 'axios';

const api = axios.create({
	baseURL: 'https://heroku.com/',
});

const getUsers = async () => {
	const users = await api.get('/users');
};
