import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTodo, getTodos, postCreateToDo, putUpdateToDo } from '@/api/todos';

export const useGetTodos = () => {
  const { data } = useQuery('todos', getTodos, {});

  return { data };
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postCreateToDo, {
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: () => alert('할 일을 추가할 수 없습니다.'),
  });

  return { mutate };
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteTodo, {
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: () => alert('할 일을 삭제할 수 없습니다.'),
  });

  return { mutate };
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(putUpdateToDo, {
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: () => alert('할 일을 수정할 수 없습니다.'),
  });

  return { mutate };
};
