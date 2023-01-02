import API_PATH from '@/constants/path';
import { TodoType } from '@/types/todos';
import api from './';

export const getTodos = () => api.get(API_PATH.TODOS);

export const getTodoById = (id: number) => api.get(API_PATH.TODO_BY_ID(id));

export const postCreateToDo = (data: Pick<TodoType, 'title' | 'Content'>) =>
  api.post(API_PATH.CREATE_TODO, data);

export const putUpdateToDo = (id: number, data: Pick<TodoType, 'title' | 'Content'>) =>
  api.put(API_PATH.UPDATE_TODO(id), data);

export const deleteTodo = (id: number) => api.delete(API_PATH.DELETE_TODO(id));
