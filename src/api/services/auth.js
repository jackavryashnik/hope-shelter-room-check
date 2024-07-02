import api from '../api';

export const register = async payload => {
  return api.post('auth/register', payload);
};
