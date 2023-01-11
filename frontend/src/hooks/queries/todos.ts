import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTodo, getTodos, postCreateToDo, putUpdateToDo } from '@/api/todos';
import { MUTATION_KEYS, QUERY_KEYS } from '@/constants/queries';

export const useGetTodos = () => {
  const { data } = useQuery(QUERY_KEYS.TODOS, getTodos, {});

  return { data };
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postCreateToDo, {
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    },
    mutationKey: MUTATION_KEYS.CREATE_TODO,
  });

  return { mutate };
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteTodo, {
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    },
    mutationKey: MUTATION_KEYS.DELETE_TODO,
  });

  return { mutate };
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(putUpdateToDo, {
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    },
    mutationKey: MUTATION_KEYS.UPDATE_TODO,
  });

  return { mutate };
};
