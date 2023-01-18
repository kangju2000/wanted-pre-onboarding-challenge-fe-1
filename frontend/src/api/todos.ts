import api from '@/api';
import API_PATH from '@/constants/path';
import type { CreateTodoType, UpdateTodoType } from '@/types/todos';

export const getTodos = async () => {
  const { data } = await api.get(API_PATH.TODOS);

  return data;
};

export const getTodoById = async (id: string) => {
  const { data } = await api.get(API_PATH.TODO_BY_ID(id));

  return data;
};

export const postCreateToDo = async (params: CreateTodoType) => {
  const { data } = await api.post(API_PATH.CREATE_TODO, params);

  return data;
};

export const putUpdateToDo = async ({ id, title, content }: UpdateTodoType) => {
  const { data } = await api.put(API_PATH.UPDATE_TODO(id), { title, content });

  return data;
};

export const deleteTodo = async (id: string) => {
  const { data } = await api.delete(API_PATH.DELETE_TODO(id));

  return data;
};
