import API_PATH from '@/constants/path';
import { AuthType } from '@/types/auth';
import api from './';

export const postLogin = (data: AuthType) => api.post(API_PATH.LOGIN, data);

export const postSignUp = (data: AuthType) => api.post(API_PATH.SIGNUP, data);
