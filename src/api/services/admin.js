import api from '../api';

export const getUsers = async payload => {
  return api.post('admin', payload);
};

export const updateUserRole = async payload => {
  return api.patch('admin', payload);
};
