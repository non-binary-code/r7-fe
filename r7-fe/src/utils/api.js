import axios from 'axios';

const api = axios.create({
  baseURL: 'https://r7-api-athena.herokuapp.com/api',
});

const getUsers = async () => {
  const { data } = await api.get('/users');
  return data;
};

const getUserById = async ({ id }) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const getItems = async () => {
  const { data } = await api.get('/items');
  return data;
};

export const postItem = async (item) => {
  const newItem = {
    name: item.itemName,
    description: item.itemDesc,
    categoryTypeId: item.formOptions.find((item) => item.catId).catId,
    conditionTypeId: item.formOptions.find((item) => item.conId).conId,
    location: item.location,
    pictureUrl: item.itemImg,
    delivery: item.formOptions.some((item) => item.value === 'delivery'),
    postage: item.formOptions.some((item) => item.value === 'postage'),
    collection: item.formOptions.some((item) => item.value === 'collection'),
    recover: item.formOptions.some((item) => item.value === 'recover'),
    userId: item.userInfo.userId,
  };

  const { data } = await api.post('/items', newItem);
  return data;
};
