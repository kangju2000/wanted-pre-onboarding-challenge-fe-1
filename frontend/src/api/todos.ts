import API_PATH from '@/constants/path';
import { TodoType } from '@/types/todos';
import api from './';

export const getTodos = async () => {
  const { data } = await api.get(API_PATH.TODOS);

  return data;
};

export const getTodoById = async (id: number) => {
  const { data } = await api.get(API_PATH.TODO_BY_ID(id));

  return data;
};

export const postCreateToDo = async (params: Pick<TodoType, 'title' | 'Content'>) => {
  const { data } = await api.post(API_PATH.CREATE_TODO, params);

  return data;
};

export const putUpdateToDo = async (id: number, params: Pick<TodoType, 'title' | 'Content'>) => {
  const { data } = await api.put(API_PATH.UPDATE_TODO(id), params);

  return data;
};

export const deleteTodo = async (id: number) => {
  const { data } = await api.delete(API_PATH.DELETE_TODO(id));

  return data;
};
