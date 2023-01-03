import API_PATH from '@/constants/path';
import { AuthType } from '@/types/auth';
import api from './';

export const postLogin = async (params: AuthType) => {
  const { data } = await api.post(API_PATH.LOGIN, params);

  return data;
};

export const postSignUp = async (params: AuthType) => {
  const { data } = await api.post(API_PATH.SIGNUP, params);

  return data;
};
