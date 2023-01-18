import api from '@/api';
import API_PATH from '@/constants/path';
import type { AuthType } from '@/types/auth';

export const postLogin = async (params: AuthType) => {
  const { data } = await api.post(API_PATH.LOGIN, params);

  return data;
};

export const postSignUp = async (params: AuthType) => {
  const { data } = await api.post(API_PATH.SIGNUP, params);

  return data;
};
