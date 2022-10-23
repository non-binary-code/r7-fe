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
  const { data } = await api.get('/items/reuse');
  return data;
};

export const filterItems = async (filter) => {
  const type = filter.map((e) => e.value + 'TypeId');
  const id = filter.map((e) => (e.value === 'category' ? e.catId : e.conId));

  const { data } = await api.get(`/items/reuse?${type}=${id}`);
  return data;
};

export const getRepairItems = async () => {
  const { data } = await api.get(`/items/repair`);
  return data;
};

export const getRecycleItems = async () => {
  const { data } = await api.get(`/items/recycle`);
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

  const { data } = await api.post('/items/reuse', newItem);
  return data;
};

export const postRecycleItem = async (item) => {
  const newItem = {
    name: item.itemName,
    description: item.itemDesc,
    pictureUrl: item.itemImg,
    weight: item.itemWeight,
    dimensions: item.itemDimensions,
    compostable: item.compostable,
    location: item.location,
    recycleLocation: item.recycleLocation,
    distance: item.distance,
    userId: item.userInfo.userId,
  };

  const { data } = await api.post('/items/recycle', newItem);
};

export const postRepairItem = async (item) => {
  const newItem = {
    name: item.itemName,
    description: item.itemDesc,
    categoryTypeId: item.formOptions.find((item) => item.catId).catId,
    conditionTypeId: item.formOptions.find((item) => item.conId).conId,
    delivery: item.formOptions.some((item) => item.value === 'delivery'),
    collection: item.formOptions.some((item) => item.value === 'collection'),
    postage: item.formOptions.some((item) => item.value === 'postage'),
    recover: item.formOptions.some((item) => item.value === 'recover'),
    pictureUrl: item.itemImg,
    location: item.location,
    userId: item.userInfo.userId,
  };

  const { data } = await api.post('/items/repair', newItem);
  return data;
};
