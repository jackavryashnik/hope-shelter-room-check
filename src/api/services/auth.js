import api from '../api';

export const register = async payload => {
  return api.post('auth/register', payload);
};

export const login = async payload => {
  return api.post('auth/login', payload);
};

export const getUser = async payload => {
  return api.post('auth/user', payload);
};

export const logout = async payload => {
  return api.post('auth/logout', payload);
};
